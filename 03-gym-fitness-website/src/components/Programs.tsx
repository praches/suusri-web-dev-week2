import { programs } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Programs.css'

const iconPaths: Record<string, string> = {
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  leaf: 'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1 .3 1.5.3 7 0 12-5 12-12V2c-2 2-5 3-8 3-2 0-4-.5-6-1-1 1-2 3-2 5 0 0 0 1 1 1z',
  dumbbell: 'M6.5 6.5L4 4 2 6l2.5 2.5-2 2L2 12l4 4 1.5-1.5 2 2L12 16l-2-2 2.5-2.5L14 13l2-2-2.5-2.5L16 6l-2-2-2.5 2.5-2-2L8 4 6.5 6.5zM12 8L8 12',
  heart: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z',
}

export default function Programs() {
  useStaggerReveal('.program-card')
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Programs & Classes</span>
          <h2 className="section-title reveal">Find Your Training Style</h2>
          <p className="section-subtitle reveal">
            From high-intensity intervals to mindful mobility, every program is led by certified
            coaches and designed to get you real results.
          </p>
        </div>
        <div className="programs__grid">
          {programs.map((p) => (
            <article key={p.id} className="program-card">
              <div className="program-card__img-wrap">
                <img src={p.image} alt={p.name} loading="lazy" />
                <div className="program-card__overlay" />
                <div className="program-card__icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={iconPaths[p.icon] || iconPaths.zap} />
                  </svg>
                </div>
                <span className={`program-card__intensity program-card__intensity--${p.intensity.toLowerCase()}`}>
                  {p.intensity}
                </span>
              </div>
              <div className="program-card__body">
                <h3 className="program-card__title">{p.name}</h3>
                <p className="program-card__desc">{p.description}</p>
                <div className="program-card__meta">
                  <span className="program-card__meta-item">{p.duration}</span>
                  <span className="program-card__meta-divider" />
                  <span className="program-card__meta-item">{p.calories} cal</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
