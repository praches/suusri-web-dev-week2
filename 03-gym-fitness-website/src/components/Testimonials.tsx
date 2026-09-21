import { testimonials } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Testimonials.css'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  useStaggerReveal('.testimonial-card')
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Member Transformations</span>
          <h2 className="section-title reveal">Real People. Real Results.</h2>
          <p className="section-subtitle reveal">
            These are the stories that keep us going. Every rep, every session, every drop of sweat
            adds up to something extraordinary.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card">
              <div className="testimonial-card__top">
                <div className="testimonial-card__img-wrap">
                  <img src={t.image} alt={t.name} loading="lazy" />
                </div>
                <div>
                  <h3 className="testimonial-card__name">{t.name}</h3>
                  <span className="testimonial-card__result">{t.result}</span>
                  <span className="testimonial-card__duration">{t.duration}</span>
                </div>
              </div>
              <Stars rating={t.rating} />
              <p className="testimonial-card__quote">"{t.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
