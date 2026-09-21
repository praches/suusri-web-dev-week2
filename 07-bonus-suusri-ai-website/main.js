import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   THREE.JS — 3D PARTICLE MESH HERO BACKGROUND
   ============================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 18

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Particle geometry — a spherical mesh of points
  const particleCount = 3500
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  const colorA = new THREE.Color(0x0091ff)
  const colorB = new THREE.Color(0x00e5d0)
  const colorC = new THREE.Color(0x4a6bff)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    // Distribute on a sphere with some noise
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const radius = 8 + Math.random() * 4
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    // Color blend
    const t = Math.random()
    const mixColor = t < 0.33 ? colorA : t < 0.66 ? colorB : colorC
    colors[i3] = mixColor.r
    colors[i3 + 1] = mixColor.g
    colors[i3 + 2] = mixColor.b

    sizes[i] = Math.random() * 0.08 + 0.02
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  // Shader material for glowing circular particles
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vec3 pos = position;
        float wave = sin(uTime * 0.5 + pos.x * 0.3 + pos.y * 0.2) * 0.3;
        pos.z += wave;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * 300.0 * uPixelRatio / -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        alpha *= 0.8;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Wireframe icosahedron for geometric structure
  const icoGeo = new THREE.IcosahedronGeometry(6, 1)
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x0091ff,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  })
  const icosahedron = new THREE.Mesh(icoGeo, icoMat)
  scene.add(icosahedron)

  // Inner smaller icosahedron
  const icoGeo2 = new THREE.IcosahedronGeometry(3.5, 0)
  const icoMat2 = new THREE.MeshBasicMaterial({
    color: 0x00e5d0,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  })
  const icosahedron2 = new THREE.Mesh(icoGeo2, icoMat2)
  scene.add(icosahedron2)

  // Mouse interaction
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
  window.addEventListener('mousemove', (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2
  })

  // Resize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  // Animation loop
  const clock = new THREE.Clock()
  let rafId

  const animate = () => {
    rafId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()

    material.uniforms.uTime.value = elapsed

    // Smooth mouse follow
    mouse.x += (mouse.tx - mouse.x) * 0.05
    mouse.y += (mouse.ty - mouse.y) * 0.05

    particles.rotation.y = elapsed * 0.08 + mouse.x * 0.3
    particles.rotation.x = mouse.y * 0.2

    icosahedron.rotation.x = elapsed * 0.1
    icosahedron.rotation.y = elapsed * 0.15
    icosahedron2.rotation.x = -elapsed * 0.12
    icosahedron2.rotation.y = -elapsed * 0.08

    camera.position.x = mouse.x * 1.5
    camera.position.y = -mouse.y * 1.5
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
  }
  animate()

  // Pause when hero is off-screen for performance
  const heroSection = document.getElementById('hero')
  if (heroSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!rafId) animate()
          } else {
            cancelAnimationFrame(rafId)
            rafId = null
          }
        })
      },
      { threshold: 0 }
    )
    observer.observe(heroSection)
  }
}

/* ============================================================
   GSAP SCROLLTRIGGER — REVEAL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    document.querySelectorAll('.reveal, .reveal-line').forEach((el) => {
      gsap.set(el, { opacity: 1, y: 0 })
    })
    return
  }

  // Hero entrance
  const heroTl = gsap.timeline({ delay: 0.3 })
  heroTl
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to('.reveal-line:nth-child(1)', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .to('.reveal-line:nth-child(2)', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .to('.hero-stats', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')

  // Generic reveal for all sections
  gsap.utils.toArray('.section').forEach((section) => {
    const reveals = section.querySelectorAll('.reveal')
    reveals.forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.08,
      })
    })
  })

  // Service cards stagger
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      delay: i * 0.1,
    })
  })

  // Product cards stagger
  gsap.utils.toArray('.product-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      delay: i * 0.08,
    })
  })

  // Why cards stagger
  gsap.utils.toArray('.why-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      delay: (i % 3) * 0.08,
    })
  })

  // Stat counter animation
  gsap.utils.toArray('.stat-num').forEach((stat) => {
    const target = parseInt(stat.dataset.target, 10)
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        stat.textContent = Math.round(obj.val)
      },
    })
  })

  // Header scrolled state
  const header = document.getElementById('site-header')
  ScrollTrigger.create({
    start: 'top -50',
    onUpdate: (self) => {
      if (self.scroll() > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    },
  })
}

/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle')
  const links = document.getElementById('nav-links')
  if (!toggle || !links) return

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', links.classList.contains('open'))
  })

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active')
      links.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return

  const submitBtn = document.getElementById('submit-btn')
  const successPanel = document.getElementById('form-success')

  const validators = {
    name: (val) => {
      if (!val.trim()) return 'Please enter your name.'
      if (val.trim().length < 2) return 'Name must be at least 2 characters.'
      return null
    },
    email: (val) => {
      if (!val.trim()) return 'Please enter your email.'
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!re.test(val.trim())) return 'Please enter a valid email address.'
      return null
    },
    company: (val) => null,
    phone: (val) => {
      if (val.trim() && !/^[\d\s+\-()]{7,}$/.test(val.trim())) return 'Please enter a valid phone number.'
      return null
    },
    service: (val) => {
      if (!val) return 'Please select a service.'
      return null
    },
    message: (val) => {
      if (!val.trim()) return 'Please enter your project details.'
      if (val.trim().length < 10) return 'Message must be at least 10 characters.'
      return null
    },
  }

  const fields = ['name', 'email', 'company', 'phone', 'service', 'message']

  function validateField(name) {
    const input = form.querySelector(`[name="${name}"]`)
    if (!input) return true
    const val = input.value
    const error = validators[name](val)
    const errorEl = form.querySelector(`.error-msg[data-for="${name}"]`)

    if (error) {
      input.classList.add('invalid')
      input.classList.remove('valid')
      if (errorEl) {
        errorEl.textContent = error
        errorEl.classList.add('show')
      }
      return false
    } else {
      input.classList.remove('invalid')
      if (val.trim()) input.classList.add('valid')
      else input.classList.remove('valid')
      if (errorEl) {
        errorEl.textContent = ''
        errorEl.classList.remove('show')
      }
      return true
    }
  }

  // Live validation on blur and input
  fields.forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`)
    if (!input) return
    input.addEventListener('blur', () => validateField(name))
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        validateField(name)
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let allValid = true
    fields.forEach((name) => {
      if (!validateField(name)) allValid = false
    })

    if (!allValid) {
      // Shake the first invalid field
      const firstInvalid = form.querySelector('.invalid')
      if (firstInvalid) {
        gsap.fromTo(
          firstInvalid,
          { x: -8 },
          { x: 8, duration: 0.08, repeat: 5, yoyo: true, clearProps: 'x' }
        )
        firstInvalid.focus()
      }
      return
    }

    // Simulate submission
    submitBtn.classList.add('loading')
    submitBtn.disabled = true

    setTimeout(() => {
      submitBtn.classList.remove('loading')
      submitBtn.disabled = false
      successPanel.classList.add('show')

      // Reset form after showing success
      setTimeout(() => {
        form.reset()
        fields.forEach((name) => {
          const input = form.querySelector(`[name="${name}"]`)
          if (input) {
            input.classList.remove('valid', 'invalid')
          }
        })
        setTimeout(() => {
          successPanel.classList.remove('show')
        }, 4000)
      }, 500)
    }, 1200)
  })
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas()
  initScrollAnimations()
  initMobileNav()
  initContactForm()

  // Refresh ScrollTrigger after images/layout settle
  setTimeout(() => ScrollTrigger.refresh(), 200)
})
