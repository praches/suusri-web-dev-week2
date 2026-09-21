import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero({ onReserve }: { onReserve: () => void }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero__eyebrow', { y: 30, opacity: 0, duration: 0.6 })
        .from('.hero__title-line', { y: 100, opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.3')
        .from('.hero__desc', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero__cta > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('.hero__meta > *', { y: 30, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')

      if (window.matchMedia('(min-width: 769px)').matches) {
        gsap.to('.hero__bg-img', {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero__bg">
        <img
          className="hero__bg-img"
          src="https://images.pexels.com/photos/34874927/pexels-photo-34874927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
        />
        <div className="hero__bg-overlay" />
      </div>
      <div className="container hero__content">
        <span className="hero__eyebrow">EST. 2014 · MODERN FINE DINING</span>
        <h1 className="hero__title">
          <span className="hero__title-line">Where Fire</span>
          <span className="hero__title-line">Meets Flavor</span>
        </h1>
        <p className="hero__desc">
          A seasonal tasting menu rooted in live-fire cooking, foraged ingredients, and the
          timeless craft of hospitality. Every plate tells a story.
        </p>
        <div className="hero__cta">
          <a href="#menu" className="btn btn-primary">Explore Our Menu</a>
          <button className="btn btn-outline" onClick={onReserve}>Book a Table</button>
        </div>
        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-value">★★★★★</span>
            <span className="hero__meta-label">Michelin Guide</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="hero__meta-value">3</span>
            <span className="hero__meta-label">Rosedale Stars</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="hero__meta-value">800+</span>
            <span className="hero__meta-label">Wine Selections</span>
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
