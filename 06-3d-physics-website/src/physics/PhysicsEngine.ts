import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import gsap from 'gsap';

export type GravityMode = 'normal' | 'zero' | 'inverted';

export type ShapeKind = 'cube' | 'sphere' | 'torus';

export interface PhysicsObject {
  id: number;
  shape: ShapeKind;
  mesh: THREE.Mesh;
  body: CANNON.Body;
  baseColor: THREE.Color;
  flashUntil: number;
  flashColor: THREE.Color;
}

export interface EngineOptions {
  enableShadows: boolean;
  maxObjects: number;
}

const NEON_PALETTE = [
  '#00f0ff', // cyan
  '#ff2bd6', // magenta
  '#9d4bff', // violet
  '#39ff14', // neon green
  '#ff8a00', // orange
  '#ff2f4a', // red
  '#ffe600', // yellow
  '#00ffd5', // teal
];

let idCounter = 0;

export class PhysicsEngine {
  scene: THREE.Scene;
  world: CANNON.World;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  objects: PhysicsObject[] = [];
  clock = new THREE.Clock();
  container: HTMLElement;
  options: EngineOptions;
  gravityMode: GravityMode = 'normal';
  onCollision?: (a: PhysicsObject, b: PhysicsObject, impact: number) => void;

  private groundBody: CANNON.Body;
  private walls: CANNON.Body[] = [];
  private rafId = 0;
  private dragController: DragController | null = null;

  constructor(container: HTMLElement, options: EngineOptions) {
    this.container = container;
    this.options = options;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x05060f, 0.018);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    this.camera.position.set(0, 6, 16);
    this.camera.lookAt(0, 1, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = options.enableShadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    // Lights
    this.setupLights();

    // Physics world
    this.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -20, 0) });
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;
    (this.world.solver as CANNON.GSSolver).iterations = 10;

    // Ground & walls
    this.groundBody = this.createGround();
    this.createWalls();

    // Initial objects
    this.spawnInitial();

    // Expose objects array to scene userData for drag controller lookups
    this.scene.userData.objects = this.objects;

    // Drag controller
    this.dragController = new DragController(this.camera, this.scene, this.world, this.container);

    // Resize
    window.addEventListener('resize', this.onResize);

    this.animate();
  }

  private setupLights() {
    const ambient = new THREE.AmbientLight(0x223355, 0.6);
    this.scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0x4488ff, 0x080820, 0.5);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0x88ccff, 1.4);
    key.position.set(8, 18, 10);
    if (this.options.enableShadows) {
      key.castShadow = true;
      key.shadow.mapSize.set(2048, 2048);
      key.shadow.camera.near = 1;
      key.shadow.camera.far = 60;
      key.shadow.camera.left = -20;
      key.shadow.camera.right = 20;
      key.shadow.camera.top = 20;
      key.shadow.camera.bottom = -20;
      key.shadow.bias = -0.0005;
    }
    this.scene.add(key);

    const rim = new THREE.PointLight(0xff2bd6, 1.2, 40);
    rim.position.set(-10, 8, -6);
    this.scene.add(rim);

    const fill = new THREE.PointLight(0x00f0ff, 1.0, 40);
    fill.position.set(10, 4, 8);
    this.scene.add(fill);
  }

  private createGround(): CANNON.Body {
    // Visual ground
    const groundGeo = new THREE.PlaneGeometry(60, 60, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e1f,
      metalness: 0.6,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -2;
    groundMesh.receiveShadow = this.options.enableShadows;
    this.scene.add(groundMesh);

    // Grid helper for cyber feel
    const grid = new THREE.GridHelper(60, 60, 0x00f0ff, 0x1a2040);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.25;
    grid.position.y = -1.99;
    this.scene.add(grid);

    // Physics ground
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
      material: new CANNON.Material('ground'),
    });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.world.addBody(groundBody);
    return groundBody;
  }

  private createWalls() {
    const wallDist = 12;
    const wallHeight = 10;
    const wallMat = new CANNON.Material('wall');

    const wallDefs = [
      { pos: new CANNON.Vec3(-wallDist, wallHeight / 2 - 2, 0), axis: new CANNON.Vec3(0, 1, 0), angle: Math.PI / 2 },
      { pos: new CANNON.Vec3(wallDist, wallHeight / 2 - 2, 0), axis: new CANNON.Vec3(0, 1, 0), angle: -Math.PI / 2 },
      { pos: new CANNON.Vec3(0, wallHeight / 2 - 2, -wallDist), axis: new CANNON.Vec3(0, 1, 0), angle: 0 },
      { pos: new CANNON.Vec3(0, wallHeight / 2 - 2, wallDist), axis: new CANNON.Vec3(0, 1, 0), angle: Math.PI },
    ];

    for (const def of wallDefs) {
      const body = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: wallMat });
      body.position.copy(def.pos);
      body.quaternion.setFromAxisAngle(def.axis, def.angle);
      this.world.addBody(body);
      this.walls.push(body);
    }

    // Ceiling for inverted gravity
    const ceiling = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: wallMat });
    ceiling.position.set(0, wallHeight - 2, 0);
    ceiling.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);
    this.world.addBody(ceiling);
    this.walls.push(ceiling);
  }

  private spawnInitial() {
    const count = this.options.maxObjects;
    for (let i = 0; i < count; i++) {
      const shape = (['cube', 'sphere', 'torus'] as ShapeKind[])[i % 3];
      this.spawnObject(shape);
    }
  }

  spawnObject(shape?: ShapeKind) {
    if (this.objects.length >= this.options.maxObjects) return;
    const kind = shape ?? (['cube', 'sphere', 'torus'] as ShapeKind[])[Math.floor(Math.random() * 3)];
    const colorHex = NEON_PALETTE[Math.floor(Math.random() * NEON_PALETTE.length)];
    const color = new THREE.Color(colorHex);

    let mesh: THREE.Mesh;
    let shape3d: CANNON.Shape;
    const size = 0.6 + Math.random() * 0.5;

    if (kind === 'cube') {
      const geo = new THREE.BoxGeometry(size, size, size);
      mesh = new THREE.Mesh(geo, this.makeNeonMaterial(color));
      shape3d = new CANNON.Box(new CANNON.Vec3(size / 2, size / 2, size / 2));
    } else if (kind === 'sphere') {
      const r = size / 2;
      const geo = new THREE.SphereGeometry(r, 32, 24);
      mesh = new THREE.Mesh(geo, this.makeNeonMaterial(color));
      shape3d = new CANNON.Sphere(r);
    } else {
      const r = size / 2;
      const tube = size / 5;
      const geo = new THREE.TorusGeometry(r, tube, 16, 48);
      mesh = new THREE.Mesh(geo, this.makeNeonMaterial(color));
      // Approximate torus with a sphere for stability
      shape3d = new CANNON.Sphere(r + tube);
    }

    mesh.castShadow = this.options.enableShadows;
    mesh.receiveShadow = this.options.enableShadows;

    const px = (Math.random() - 0.5) * 8;
    const py = 4 + Math.random() * 4;
    const pz = (Math.random() - 0.5) * 8;
    mesh.position.set(px, py, pz);
    this.scene.add(mesh);

    const body = new CANNON.Body({
      mass: 1.2,
      shape: shape3d,
      position: new CANNON.Vec3(px, py, pz),
      material: new CANNON.Material('object'),
      linearDamping: 0.18,
      angularDamping: 0.18,
    });
    body.angularVelocity.set(
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
    );
    body.addEventListener('collide', (e: any) => {
      const otherBody = e.body;
      const other = this.objects.find((o) => o.body === otherBody);
      const self = this.objects.find((o) => o.body === body);
      if (!other || !self) return;
      const impact = Math.abs(e.contact.getImpactVelocityAlongNormal?.() ?? 0);
      if (impact > 1.2) {
        this.triggerFlash(self, impact);
        this.triggerFlash(other, impact);
        this.onCollision?.(self, other, impact);
      }
    });
    this.world.addBody(body);

    const obj: PhysicsObject = {
      id: ++idCounter,
      shape: kind,
      mesh,
      body,
      baseColor: color.clone(),
      flashUntil: 0,
      flashColor: new THREE.Color('#ffffff'),
    };
    this.objects.push(obj);
    this.scene.userData.objects = this.objects;
    return obj;
  }

  private makeNeonMaterial(color: THREE.Color): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.55,
      metalness: 0.35,
      roughness: 0.25,
    });
  }

  private triggerFlash(obj: PhysicsObject, impact: number) {
    obj.flashUntil = performance.now() + 220;
    obj.flashColor = new THREE.Color('#ffffff');
    // Scale bounce via GSAP
    const mesh = obj.mesh;
    const boost = Math.min(0.35, impact * 0.03);
    gsap.killTweensOf(mesh.scale);
    gsap.fromTo(
      mesh.scale,
      { x: mesh.scale.x * (1 + boost), y: mesh.scale.y * (1 + boost), z: mesh.scale.z * (1 + boost) },
      {
        x: mesh.scale.x,
        y: mesh.scale.y,
        z: mesh.scale.z,
        duration: 0.45,
        ease: 'elastic.out(1, 0.4)',
      },
    );
  }

  setGravityMode(mode: GravityMode) {
    this.gravityMode = mode;
    if (mode === 'normal') this.world.gravity.set(0, -20, 0);
    else if (mode === 'zero') this.world.gravity.set(0, 0, 0);
    else this.world.gravity.set(0, 20, 0);
    // Wake all bodies
    for (const o of this.objects) o.body.wakeUp();
  }

  resetScene() {
    for (const o of this.objects) {
      this.scene.remove(o.mesh);
      o.mesh.geometry.dispose();
      (o.mesh.material as THREE.Material).dispose();
      this.world.removeBody(o.body);
    }
    this.objects = [];
    this.scene.userData.objects = this.objects;
    idCounter = 0;
    this.spawnInitial();
  }

  private animate = () => {
    this.rafId = requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 1 / 30);
    this.world.step(1 / 60, dt, 3);

    const now = performance.now();
    for (const o of this.objects) {
      o.mesh.position.set(o.body.position.x, o.body.position.y, o.body.position.z);
      o.mesh.quaternion.set(
        o.body.quaternion.x,
        o.body.quaternion.y,
        o.body.quaternion.z,
        o.body.quaternion.w,
      );
      // Flash color
      const mat = o.mesh.material as THREE.MeshStandardMaterial;
      if (now < o.flashUntil) {
        const t = (o.flashUntil - now) / 220;
        mat.emissiveIntensity = 0.55 + t * 2.2;
        mat.emissive.copy(o.flashColor);
      } else {
        mat.emissiveIntensity = 0.55;
        mat.emissive.copy(o.baseColor);
      }
    }

    this.dragController?.update();
    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  dispose() {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    this.dragController?.dispose();
    for (const o of this.objects) {
      this.scene.remove(o.mesh);
      o.mesh.geometry.dispose();
      (o.mesh.material as THREE.Material).dispose();
      this.world.removeBody(o.body);
    }
    this.objects = [];
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

/**
 * Handles raycaster-based drag-and-throw with momentum.
 */
class DragController {
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private world: CANNON.World;
  private dom: HTMLElement;
  private plane = new THREE.Plane();
  private planeNormal = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private intersection = new THREE.Vector3();
  private grabbed: PhysicsObject | null = null;
  private lastPos = new THREE.Vector3();
  private lastTime = 0;
  private velocity = new THREE.Vector3();
  private isDragging = false;

  // Constraint to pull body
  private jointBody: CANNON.Body;
  private constraint: CANNON.PointToPointConstraint | null = null;

  constructor(
    camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    world: CANNON.World,
    dom: HTMLElement,
  ) {
    this.camera = camera;
    this.scene = scene;
    this.world = world;
    this.dom = dom;
    this.jointBody = new CANNON.Body({ mass: 0 });
    this.jointBody.collisionResponse = false;
    this.jointBody.addShape(new CANNON.Sphere(0.02));
    world.addBody(this.jointBody);

    dom.addEventListener('pointerdown', this.onDown);
    dom.addEventListener('pointermove', this.onMove);
    dom.addEventListener('pointerup', this.onUp);
    dom.addEventListener('pointerleave', this.onUp);
  }

  private setPointer(e: PointerEvent) {
    const rect = this.dom.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private onDown = (e: PointerEvent) => {
    this.setPointer(e);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const meshes = (this as any).scene.children.filter(
      (c: THREE.Object3D) => c instanceof THREE.Mesh && c.geometry && (c as any).material,
    ) as THREE.Mesh[];
    // Only grab our physics meshes (exclude ground/grid)
    const physicsMeshes = meshes.filter((m) => (m as any).material && (m as any).material.emissive);
    const hits = this.raycaster.intersectObjects(physicsMeshes, false);
    if (hits.length === 0) return;
    const hit = hits[0];
    // Find PhysicsObject by mesh
    const obj = (this as any).scene.userData as any;
    // We need a reference to objects; store via closure
    this.grabbed = this.findObjectByMesh(hit.object as THREE.Mesh);
    if (!this.grabbed) return;

    this.isDragging = true;
    this.dom.style.cursor = 'grabbing';

    // Set up drag plane perpendicular to camera at hit point
    this.planeNormal.set(0, 0, 1).applyQuaternion(this.camera.quaternion);
    this.plane.setFromNormalAndCoplanarPoint(this.planeNormal, hit.point);
    this.raycaster.ray.intersectPlane(this.plane, this.intersection);
    this.offset.copy(hit.point).sub(this.grabbed.mesh.position);

    // Move joint body to intersection
    this.jointBody.position.set(this.intersection.x, this.intersection.y, this.intersection.z);

    // Create constraint
    this.grabbed.body.wakeUp();
    this.grabbed.body.type = CANNON.Body.KINEMATIC;
    this.constraint = new CANNON.PointToPointConstraint(
      this.grabbed.body,
      new CANNON.Vec3(0, 0, 0),
      this.jointBody,
      new CANNON.Vec3(0, 0, 0),
    );
    this.world.addConstraint(this.constraint);

    this.lastPos.copy(this.intersection);
    this.lastTime = performance.now();
    this.velocity.set(0, 0, 0);
  };

  private findObjectByMesh(mesh: THREE.Mesh): PhysicsObject | null {
    // Access via engine's objects array through scene userData
    const objects: PhysicsObject[] = (this.scene.userData.objects as PhysicsObject[]) ?? [];
    return objects.find((o) => o.mesh === mesh) ?? null;
  }

  private onMove = (e: PointerEvent) => {
    if (!this.isDragging || !this.grabbed) return;
    this.setPointer(e);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    if (this.raycaster.ray.intersectPlane(this.plane, this.intersection)) {
      const target = this.intersection.clone().sub(this.offset);
      const now = performance.now();
      const elapsed = Math.max((now - this.lastTime) / 1000, 0.001);
      this.velocity.copy(target).sub(this.lastPos).divideScalar(elapsed);
      this.lastPos.copy(target);
      this.lastTime = now;
      this.jointBody.position.set(target.x, target.y, target.z);
    }
  };

  private onUp = () => {
    if (!this.grabbed) return;
    if (this.constraint) {
      this.world.removeConstraint(this.constraint);
      this.constraint = null;
    }
    this.grabbed.body.type = CANNON.Body.DYNAMIC;
    this.grabbed.body.wakeUp();
    // Apply throw velocity
    const v = this.velocity;
    const speed = Math.min(v.length(), 30);
    if (speed > 0.5) {
      const dir = v.clone().normalize();
      this.grabbed.body.velocity.set(dir.x * speed, dir.y * speed, dir.z * speed);
      this.grabbed.body.angularVelocity.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      );
    }
    this.grabbed = null;
    this.isDragging = false;
    this.dom.style.cursor = 'grab';
  };

  update() {
    // nothing per-frame needed; constraint handles it
  }

  dispose() {
    this.dom.removeEventListener('pointerdown', this.onDown);
    this.dom.removeEventListener('pointermove', this.onMove);
    this.dom.removeEventListener('pointerup', this.onUp);
    this.dom.removeEventListener('pointerleave', this.onUp);
  }
}
