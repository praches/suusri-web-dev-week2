import './Footer.css'

const cols = [
  { title: 'Menu', links: ['Starters', 'Mains', 'Desserts', 'Signature Drinks', 'Chef\'s Specials'] },
  { title: 'About', links: ['Our Story', 'Culinary Philosophy', 'Meet the Chefs', 'Press & Awards'] },
  { title: 'Visit', links: ['Reservations', 'Opening Hours', 'Private Events', 'Contact Us'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">EMBER</span>
              <span className="footer__logo-amp">&</span>
              <span className="footer__logo-sub">OAK</span>
            </div>
            <p className="footer__tagline">
              Live-fire cooking, seasonal ingredients, and timeless hospitality.
              Where every meal becomes a memory.
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
                  <li key={l}><a href="#" className="footer__link">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Ember & Oak. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
