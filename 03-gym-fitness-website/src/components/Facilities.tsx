import { facilities } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Facilities.css'

const iconPaths: Record<string, string> = {
  dumbbell: 'M6.5 6.5L4 4 2 6l2.5 2.5-2 2L2 12l4 4 1.5-1.5 2 2L12 16l-2-2 2.5-2.5L14 13l2-2-2.5-2.5L16 6l-2-2-2.5 2.5-2-2L8 4 6.5 6.5z',
  heart: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  leaf: 'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1 .3 1.5.3 7 0 12-5 12-12V2c-2 2-5 3-8 3-2 0-4-.5-6-1-1 1-2 3-2 5 0 0 0 1 1 1z',
  sparkles: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z',
  cup: 'M4 4h16v2a6 6 0 01-6 6v6h4v2H8v-2h4v-6a6 6 0 01-6-6V4z',
}

export default function Facilities() {
  useStaggerReveal('.facility-card')
  return (
    <section id="facilities" className="section facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">World-Class Facilities</span>
          <h2 className="section-title reveal">Everything You Need Under One Roof</h2>
          <p className="section-subtitle reveal">
            12,000 square feet of premium training space, equipped with the best gear in the industry
            and designed to fuel every kind of workout.
          </p>
        </div>
        <div className="facilities__grid">
          {facilities.map((f) => (
            <article key={f.id} className="facility-card">
              <div className="facility-card__icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={iconPaths[f.icon] || iconPaths.zap} />
                </svg>
              </div>
              <h3 className="facility-card__name">{f.name}</h3>
              <p className="facility-card__desc">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
