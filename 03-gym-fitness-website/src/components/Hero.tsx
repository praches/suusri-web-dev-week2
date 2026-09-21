import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero__eyebrow', { y: 30, opacity: 0, duration: 0.6 })
        .from('.hero__title-line', { y: 80, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.3')
        .from('.hero__desc', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero__cta > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('.hero__stats > *', { y: 30, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')

      gsap.to('.hero__bg-img', {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero__bg">
        <img
          className="hero__bg-img"
          src="https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
        />
        <div className="hero__bg-overlay" />
      </div>
      <div className="container hero__content">
        <span className="hero__eyebrow">#1 RATED FITNESS CENTER 2026</span>
        <h1 className="hero__title">
          <span className="hero__title-line">PUSH</span>
          <span className="hero__title-line">YOUR</span>
          <span className="hero__title-line hero__title-line--accent">LIMITS</span>
        </h1>
        <p className="hero__desc">
          World-class coaching, premium equipment, and a community that refuses to settle.
          Your transformation starts the moment you walk through the door.
        </p>
        <div className="hero__cta">
          <a href="#pricing" className="btn btn-primary">Start Your Fitness Journey</a>
          <a href="#programs" className="btn btn-outline">Explore Programs</a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">5,000+</span>
            <span className="hero__stat-label">Active Members</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">40+</span>
            <span className="hero__stat-label">Weekly Classes</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">25</span>
            <span className="hero__stat-label">Expert Coaches</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
