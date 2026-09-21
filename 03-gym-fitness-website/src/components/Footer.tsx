import './Footer.css'

const cols = [
  { title: 'Programs', links: ['HIIT Training', 'Yoga & Mobility', 'Strength Training', 'Cardio Blast'] },
  { title: 'Company', links: ['About Us', 'Our Trainers', 'Facilities', 'Careers'] },
  { title: 'Support', links: ['FAQ', 'Contact', 'Membership Info', 'Class Schedule'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <span className="footer__logo-mark">FORGE</span>
              <span className="footer__logo-sub">FITNESS</span>
            </a>
            <p className="footer__tagline">
              Push your limits. Find your strength. Become unstoppable.
            </p>
            <div className="footer__socials">
              {['IG', 'FB', 'TW', 'YT'].map((s) => (
                <a key={s} href="#" className="footer__social" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="footer__link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Forge Fitness. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
