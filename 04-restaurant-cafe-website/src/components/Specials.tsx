import { specials } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Specials.css'

export default function Specials() {
  useStaggerReveal('.special-card')
  return (
    <section id="specials" className="section specials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Chef's Showcase</span>
          <h2 className="section-title reveal">Signature Tasting Experiences</h2>
          <p className="section-subtitle reveal">
            Limited-edition menus designed by our head chefs for those seeking something
            beyond the ordinary. Available by reservation only.
          </p>
        </div>
        <div className="specials__grid">
          {specials.map((s, i) => (
            <article
              key={s.id}
              className={`special-card ${i === 1 ? 'special-card--featured' : ''}`}
            >
              <div className="special-card__img-wrap">
                <img src={s.image} alt={s.name} loading="lazy" />
                <div className="special-card__overlay" />
                <div className="special-card__price-badge">${s.price}</div>
              </div>
              <div className="special-card__body">
                <span className="special-card__chef">{s.chef}</span>
                <h3 className="special-card__name">{s.name}</h3>
                <p className="special-card__desc">{s.description}</p>
                <div className="special-card__footer">
                  <span className="special-card__tag">Tasting Menu</span>
                  <span className="special-card__price">${s.price} / person</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
