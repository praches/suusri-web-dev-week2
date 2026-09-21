import { useState } from 'react'
import { plans } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Pricing.css'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  useStaggerReveal('.pricing-card')

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Membership Plans</span>
          <h2 className="section-title reveal">Choose Your Commitment</h2>
          <p className="section-subtitle reveal">
            Flexible plans that grow with you. No hidden fees, no long-term lock-in. Cancel anytime.
          </p>
        </div>

        <div className="pricing__toggle reveal">
          <button
            className={`pricing__toggle-btn ${!annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`pricing__toggle-btn ${annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(true)}
          >
            Annual
          </button>
          <span className="pricing__toggle-indicator" style={{ left: annual ? '50%' : '0%' }} />
          <span className="pricing__toggle-save">Save 2 months</span>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--featured' : ''}`}
            >
              {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">
                  ${annual ? Math.round(plan.annual / 12) : plan.monthly}
                </span>
                <span className="pricing-card__period">/mo</span>
              </div>
              <p className="pricing-card__billing">
                {annual ? `Billed $${plan.annual}/year` : 'Billed monthly'}
              </p>
              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-card__feature">
                    <span className="pricing-card__check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} pricing-card__btn`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
