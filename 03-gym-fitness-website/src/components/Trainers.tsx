import { trainers } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Trainers.css'

export default function Trainers() {
  useStaggerReveal('.trainer-card')
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Trainers & Coaches</span>
          <h2 className="section-title reveal">Meet the Team That Makes It Happen</h2>
          <p className="section-subtitle reveal">
            Certified, passionate, and relentlessly dedicated to your progress. Every coach brings
            years of experience and a personal commitment to your goals.
          </p>
        </div>
        <div className="trainers__grid">
          {trainers.map((t) => (
            <article key={t.id} className="trainer-card">
              <div className="trainer-card__img-wrap">
                <img src={t.image} alt={t.name} loading="lazy" />
                <div className="trainer-card__overlay" />
                <div className="trainer-card__socials">
                  {t.socials.map((s) => (
                    <a key={s.label} href={s.href} className="trainer-card__social" aria-label={s.label}>
                      {s.label[0]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="trainer-card__body">
                <h3 className="trainer-card__name">{t.name}</h3>
                <p className="trainer-card__role">{t.role}</p>
                <div className="trainer-card__meta">
                  <span className="trainer-card__specialty">{t.specialty}</span>
                  <span className="trainer-card__exp">{t.experience}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
