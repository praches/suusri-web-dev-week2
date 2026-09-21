import { useState } from 'react'
import { faqs } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './FAQ.css'

export default function FAQ() {
  useStaggerReveal('.faq-item')
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Frequently Asked Questions</span>
          <h2 className="section-title reveal">Got Questions? We Have Answers.</h2>
        </div>
        <div className="faq__list">
          {faqs.map((f) => {
            const open = openId === f.id
            return (
              <div key={f.id} className={`faq-item ${open ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-item__question"
                  onClick={() => setOpenId(open ? null : f.id)}
                  aria-expanded={open}
                >
                  <span>{f.question}</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
                <div className="faq-item__answer-wrap">
                  <p className="faq-item__answer">{f.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
