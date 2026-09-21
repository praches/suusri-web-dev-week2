import { useState } from 'react'
import { useGsapReveal } from '../hooks/useGsap'
import './Contact.css'

export default function Contact() {
  useGsapReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info reveal">
            <span className="section-eyebrow">Contact & Location</span>
            <h2 className="section-title">Come Train With Us</h2>
            <p className="contact__desc">
              Ready to start? Drop by, call us, or send a message. Your first session is on us.
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Address</span>
                <span className="contact__detail-value">247 Iron Street, Downtown District, Metro City</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Phone</span>
                <span className="contact__detail-value">(555) 020-FORGE</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">hello@forgefitness.com</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Hours</span>
                <span className="contact__detail-value">Mon–Fri 5am–11pm · Sat 7am–9pm · Sun 8am–8pm</span>
              </div>
            </div>
            <div className="contact__map">
              <img
                src="https://images.pexels.com/photos/4716814/pexels-photo-4716814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Gym interior"
                loading="lazy"
              />
              <div className="contact__map-overlay" />
            </div>
          </div>
          <form className="contact__form reveal" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. A coach will get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Send a Message</h3>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@email.com" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="interest">I am interested in</label>
                  <select id="interest">
                    <option>Free Trial Session</option>
                    <option>Membership Info</option>
                    <option>Personal Training</option>
                    <option>Group Classes</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your goals..." />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
