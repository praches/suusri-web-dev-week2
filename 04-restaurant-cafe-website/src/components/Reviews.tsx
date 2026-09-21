import { reviews } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Reviews.css'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  useStaggerReveal('.review-card')
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Reviews & Ratings</span>
          <h2 className="section-title reveal">What Our Guests Say</h2>
          <p className="section-subtitle reveal">
            We are humbled by the words of those who have shared a table with us.
          </p>
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <article key={r.id} className="review-card">
              <div className="review-card__top">
                <Stars rating={r.rating} />
                <span className="review-card__date">{r.date}</span>
              </div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <div className="review-card__avatar">{r.name.split(' ').map((n) => n[0]).join('')}</div>
                <div>
                  <h4 className="review-card__name">{r.name}</h4>
                  <span className="review-card__role">{r.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
