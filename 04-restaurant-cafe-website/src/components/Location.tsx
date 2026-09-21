import { hours } from '../data/content'
import { useGsapReveal } from '../hooks/useGsap'
import './Location.css'

export default function Location({ onReserve }: { onReserve: () => void }) {
  useGsapReveal()
  return (
    <section id="location" className="section location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Visit Us</span>
          <h2 className="section-title reveal">Find Your Table</h2>
        </div>
        <div className="location__grid">
          <div className="location__info reveal">
            <div className="location__card">
              <h3 className="location__card-title">Address</h3>
              <p className="location__card-value">
                1847 Harbor View Drive<br />
                Old Town District, Metro City
              </p>
            </div>
            <div className="location__card">
              <h3 className="location__card-title">Contact</h3>
              <p className="location__card-value">
                (555) 020-3663<br />
                reserve@emberandoak.com
              </p>
            </div>
            <div className="location__card">
              <h3 className="location__card-title">Opening Hours</h3>
              <ul className="location__hours">
                {hours.map((h) => (
                  <li key={h.day} className="location__hours-item">
                    <span className="location__hours-day">{h.day}</span>
                    <span className={`location__hours-time ${h.closed ? 'location__hours-time--closed' : ''}`}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-primary location__reserve-btn" onClick={onReserve}>
              Reserve a Table
            </button>
          </div>
          <div className="location__visual reveal">
            <img
              src="https://images.pexels.com/photos/225201/pexels-photo-225201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Restaurant interior"
              loading="lazy"
            />
            <div className="location__visual-overlay" />
            <div className="location__visual-badge">
              <span className="location__visual-badge-text">Now Seating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
