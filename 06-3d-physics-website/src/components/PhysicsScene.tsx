import { useEffect, useRef, useState, useCallback } from 'react';
import { PhysicsEngine, type GravityMode, type ShapeKind } from '@/physics/PhysicsEngine';

export interface PlaygroundControls {
  spawn: () => void;
  toggleGravity: () => void;
  reset: () => void;
  gravityMode: GravityMode;
  objectCount: number;
}

interface PhysicsSceneProps {
  onReady: (controls: PlaygroundControls) => void;
  onCollision: () => void;
}

export default function PhysicsScene({ onReady, onCollision }: PhysicsSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<PhysicsEngine | null>(null);
  const [gravityMode, setGravityMode] = useState<GravityMode>('normal');
  const [objectCount, setObjectCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const enableShadows = !isMobile;
    const maxObjects = isMobile ? 6 : 12;

    const engine = new PhysicsEngine(containerRef.current, {
      enableShadows,
      maxObjects,
    });
    engineRef.current = engine;
    engine.onCollision = () => onCollision();
    setObjectCount(engine.objects.length);

    onReady({
      spawn: () => {
        const shapes: ShapeKind[] = ['cube', 'sphere', 'torus'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        engine.spawnObject(shape);
        setObjectCount(engine.objects.length);
      },
      toggleGravity: () => {
        const order: GravityMode[] = ['normal', 'zero', 'inverted'];
        const next = order[(order.indexOf(engine.gravityMode) + 1) % order.length];
        engine.setGravityMode(next);
        setGravityMode(next);
      },
      reset: () => {
        engine.resetScene();
        setObjectCount(engine.objects.length);
      },
      gravityMode: engine.gravityMode,
      objectCount: engine.objects.length,
    });

    return () => {
      engine.dispose();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ touchAction: 'none', cursor: 'grab' }}
    />
  );
}
