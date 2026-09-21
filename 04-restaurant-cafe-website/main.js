import './style.css'

const heroImg = 'https://images.pexels.com/photos/39268201/pexels-photo-39268201.jpeg?auto=compress&cs=tinysrgb&w=1920'
const heroImg2 = 'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&w=1920'
const aboutImg = 'https://images.pexels.com/photos/15689896/pexels-photo-15689896.jpeg?auto=compress&cs=tinysrgb&w=1200'
const chefImg = 'https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=1200'

const menuItems = [
  { name: 'Oscietra Caviar Tartare', desc: 'Hand-cut tuna, oscietra caviar, crème fraîche, dill oil', price: '$42', cat: 'starters', img: 'https://images.pexels.com/photos/26586541/pexels-photo-26586541.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Seared Diver Scallops', desc: 'Cauliflower purée, brown butter, capers, micro herbs', price: '$38', cat: 'starters', img: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Mediterranean Mussel Broth', desc: 'Saffron, fennel, orange zest, sourdough', price: '$28', cat: 'starters', img: 'https://images.pexels.com/photos/20802711/pexels-photo-20802711.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Heritage Beet Carpaccio', desc: 'Goat cheese, candied walnuts, aged balsamic', price: '$24', cat: 'starters', img: 'https://images.pexels.com/photos/23644633/pexels-photo-23644633.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Wagyu Beef Tenderloin', desc: 'Truffle jus, pommes purée, charred shallot', price: '$78', cat: 'mains', img: 'https://images.pexels.com/photos/5491046/pexels-photo-5491046.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Braised Short Rib', desc: 'Red wine reduction, root vegetables, horseradish foam', price: '$62', cat: 'mains', img: 'https://images.pexels.com/photos/17237180/pexels-photo-17237180.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Roasted Pepper Beef', desc: 'Smoked paprika, grilled peppers, chimichurri', price: '$58', cat: 'mains', img: 'https://images.pexels.com/photos/5395180/pexels-photo-5395180.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Pan-Seared Halibut', desc: 'Fennel confit, citrus beurre blanc, samphire', price: '$54', cat: 'mains', img: 'https://images.pexels.com/photos/15671371/pexels-photo-15671371.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Dark Chocolate Soufflé', desc: 'Valrhona 70%, salted caramel, crème anglaise', price: '$22', cat: 'desserts', img: 'https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Strawberry Pavlova', desc: 'Vanilla cream, macerated berries, basil sorbet', price: '$20', cat: 'desserts', img: 'https://images.pexels.com/photos/18784859/pexels-photo-18784859.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Mint Chocolate Délice', desc: 'Mint ice cream, cherry coulis, cocoa nibs', price: '$19', cat: 'desserts', img: 'https://images.pexels.com/photos/39332801/pexels-photo-39332801.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Trio of Petits Gâteaux', desc: 'Chocolate mousse, cheesecake, strawberry compote', price: '$24', cat: 'desserts', img: 'https://images.pexels.com/photos/16544183/pexels-photo-16544183.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Smoked Old Fashioned', desc: 'Bourbon, cherry bark bitters, applewood smoke', price: '$18', cat: 'drinks', img: 'https://images.pexels.com/photos/32912252/pexels-photo-32912252.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Garden Mojito', desc: 'White rum, fresh mint, lime, cane syrup', price: '$16', cat: 'drinks', img: 'https://images.pexels.com/photos/7377072/pexels-photo-7377072.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Rose Petal Spritz', desc: 'Prosecco, elderflower, rose petals, soda', price: '$17', cat: 'drinks', img: 'https://images.pexels.com/photos/34278812/pexels-photo-34278812.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Signature Mocktail Flight', desc: 'Three non-alcoholic craft mocktails', price: '$21', cat: 'drinks', img: 'https://images.pexels.com/photos/34278808/pexels-photo-34278808.jpeg?auto=compress&cs=tinysrgb&w=800' },
]

const chefSpecials = [
  { name: 'Truffle Wagyu Experience', desc: 'A5 Japanese wagyu, shaved black truffle, pommes anna, bordelaise', price: '$120', img: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=1000', tag: 'Chef\'s Signature' },
  { name: 'Ocean Platter Royale', desc: 'Lobster, oysters, scallops, caviar — a seafood symphony', price: '$95', img: 'https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=1000', tag: 'Limited' },
  { name: 'Soupe de Saison', desc: 'Roasted butternut, sage cream, hazelnut praline, brown butter', price: '$32', img: 'https://images.pexels.com/photos/27381535/pexels-photo-27381535.jpeg?auto=compress&cs=tinysrgb&w=1000', tag: 'Seasonal' },
]

const galleryImages = [
  'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/33097101/pexels-photo-33097101.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/38673845/pexels-photo-38673845.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/17527769/pexels-photo-17527769.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/39490291/pexels-photo-39490291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/33097102/pexels-photo-33097102.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/29410666/pexels-photo-29410666.jpeg?auto=compress&cs=tinysrgb&w=800',
]

const reviews = [
  { name: 'Eleanor Vance', role: 'Food Critic, The Gazette', rating: 5, text: 'An extraordinary evening from start to finish. Every plate is a masterclass in balance — the wagyu tenderloin alone is worth the journey.' },
  { name: 'Marcus Chen', role: 'Wine Sommelier', rating: 5, text: 'The pairing menu is impeccable. The smoked old fashioned with the short rib was a revelation. This is fine dining done right.' },
  { name: 'Sofia Marchetti', role: 'Regular Guest', rating: 5, text: 'We celebrated our anniversary here and it was pure magic. The ambiance, the service, the chocolate soufflé — perfection.' },
  { name: 'James Whitfield', role: 'Travel Writer', rating: 5, text: 'I have dined in twelve countries this year. Maison Auré stands among the top three. The caviar tartare is unforgettable.' },
  { name: 'Priya Anand', role: 'Lifestyle Blogger', rating: 5, text: 'Every detail is considered — from the warm lighting to the rose petal spritz. A sensory experience that lingers long after the last bite.' },
  { name: 'Oliver Brandt', role: 'Chef & Author', rating: 5, text: 'The seasonal soup was a symphony. This kitchen understands restraint and intensity in equal measure. Bravo.' },
]

document.querySelector('#app').innerHTML = `
  <nav id="navbar" class="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">Maison <span>Auré</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#about">Philosophy</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#specials">Chef's Specials</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-cta" id="navReserveBtn">Reserve a Table</button>
      <button class="nav-burger" id="navBurger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <section id="hero" class="hero">
    <div class="hero-bg" style="background-image:url('${heroImg}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-eyebrow reveal-line">Est. 2014 · Modern French Cuisine</p>
      <h1 class="hero-title">
        <span class="line-mask"><span class="line-inner">A Symphony of</span></span>
        <span class="line-mask"><span class="line-inner">Flavour & Art</span></span>
      </h1>
      <p class="hero-sub reveal-line">Where every dish tells a story, and every evening becomes a memory worth savouring.</p>
      <div class="hero-cta-group">
        <a href="#menu" class="btn btn-primary">Explore Our Menu</a>
        <button class="btn btn-ghost" id="heroReserveBtn">Book a Table</button>
      </div>
    </div>
    <div class="hero-scroll"><span></span>Scroll</div>
  </section>

  <section id="about" class="about">
    <div class="about-image-wrap">
      <div class="about-image parallax-img" style="background-image:url('${aboutImg}')"></div>
      <div class="about-badge"><span>10</span><small>Years of<br>Culinary Excellence</small></div>
    </div>
    <div class="about-text">
      <p class="section-eyebrow">Our Philosophy</p>
      <h2 class="section-title">Cuisine as an<br>Expression of Soul</h2>
      <p class="about-body">At Maison Auré, we believe cooking is the most intimate of arts. Each ingredient is sourced with intention — from the morning markets to the hands that plate it. We honour the seasons, the producers, and the craft.</p>
      <p class="about-body">Our kitchen is a place of discipline and poetry, where classical French technique meets the boldness of contemporary vision. The result is cuisine that feels both timeless and surprising.</p>
      <div class="about-stats">
        <div class="stat"><strong>50+</strong><span>Signature Dishes</span></div>
        <div class="stat"><strong>12</strong><span>Award-Winning Wines</span></div>
        <div class="stat"><strong>4.9</strong><span>Guest Rating</span></div>
      </div>
    </div>
  </section>

  <section id="menu" class="menu-section">
    <div class="section-header">
      <p class="section-eyebrow">À La Carte</p>
      <h2 class="section-title">Our Seasonal Menu</h2>
      <p class="section-desc">Crafted with the finest seasonal produce, each dish reflects our commitment to flavour, texture, and artistry.</p>
    </div>
    <div class="menu-tabs" id="menuTabs">
      <button class="tab active" data-filter="all">All</button>
      <button class="tab" data-filter="starters">Starters</button>
      <button class="tab" data-filter="mains">Main Courses</button>
      <button class="tab" data-filter="desserts">Desserts</button>
      <button class="tab" data-filter="drinks">Signature Drinks</button>
    </div>
    <div class="menu-grid" id="menuGrid"></div>
  </section>

  <section id="specials" class="specials">
    <div class="section-header">
      <p class="section-eyebrow">From the Chef</p>
      <h2 class="section-title">Chef's Special Dishes</h2>
      <p class="section-desc">A curated selection of our most extraordinary creations — available in limited quantities.</p>
    </div>
    <div class="specials-grid" id="specialsGrid"></div>
  </section>

  <section id="gallery" class="gallery">
    <div class="section-header">
      <p class="section-eyebrow">Visual Feast</p>
      <h2 class="section-title">Photo Gallery</h2>
      <p class="section-desc">A glimpse into the world of Maison Auré — where ambiance and cuisine become art.</p>
    </div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </section>

  <section id="reviews" class="reviews">
    <div class="section-header">
      <p class="section-eyebrow">Guest Voices</p>
      <h2 class="section-title">Reviews & Ratings</h2>
      <p class="section-desc">Over 2,000 guests have made Maison Auré their destination for unforgettable dining.</p>
    </div>
    <div class="reviews-grid" id="reviewsGrid"></div>
  </section>

  <section id="contact" class="contact">
    <div class="contact-info">
      <p class="section-eyebrow">Visit Us</p>
      <h2 class="section-title">Location & Hours</h2>
      <div class="contact-block">
        <h3>Address</h3>
        <p>14 Rue de la Lumière<br>Saint-Germain, Paris 75006</p>
      </div>
      <div class="contact-block">
        <h3>Opening Hours</h3>
        <p>Tuesday — Friday: 5:00 PM — 11:00 PM<br>Saturday — Sunday: 12:00 PM — 11:00 PM<br>Monday: Closed</p>
      </div>
      <div class="contact-block">
        <h3>Reservations</h3>
        <p>+33 1 42 60 18 90<br>reservations@maisonaure.fr</p>
      </div>
      <div class="contact-socials">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Twitter">TW</a>
      </div>
    </div>
    <div class="contact-form-wrap">
      <h3>Send Us a Message</h3>
      <form id="contactForm" class="contact-form" novalidate>
        <div class="form-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit" class="btn btn-primary">Send Message</button>
        <p class="form-msg" id="contactFormMsg"></p>
      </form>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h3>Maison Auré</h3>
        <p>Modern French cuisine in the heart of Paris. A culinary experience like no other.</p>
      </div>
      <div class="footer-links">
        <h4>Explore</h4>
        <a href="#about">Philosophy</a>
        <a href="#menu">Menu</a>
        <a href="#specials">Chef's Specials</a>
        <a href="#gallery">Gallery</a>
      </div>
      <div class="footer-links">
        <h4>Visit</h4>
        <a href="#contact">Location</a>
        <a href="#contact">Hours</a>
        <a href="#" id="footerReserveBtn">Reservations</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Join our list for seasonal menus and exclusive events.</p>
        <form id="newsletterForm" class="newsletter-form">
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Maison Auré. All rights reserved.</p>
      <p>Crafted with passion in Paris.</p>
    </div>
  </footer>

  <button id="backToTop" class="back-to-top" aria-label="Back to top">↑</button>

  <!-- Lightbox Modal -->
  <div id="lightbox" class="lightbox">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close">×</button>
    <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous">‹</button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="" />
      <p id="lightboxCaption" class="lightbox-caption"></p>
    </div>
    <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next">›</button>
  </div>

  <!-- Reservation Modal -->
  <div id="reservationModal" class="reservation-modal">
    <div class="reservation-content">
      <button class="reservation-close" id="reservationClose" aria-label="Close">×</button>
      <div class="reservation-visual" style="background-image:url('${heroImg2}')">
        <div class="reservation-visual-overlay">
          <h3>Reserve Your<br>Table</h3>
          <p>Book an unforgettable evening at Maison Auré.</p>
        </div>
      </div>
      <div class="reservation-form-side">
        <form id="reservationForm" class="reservation-form" novalidate>
          <h3>Table Reservation</h3>
          <div class="form-row">
            <div class="form-field">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="John Doe" required />
              <span class="field-error" data-for="fullName"></span>
            </div>
            <div class="form-field">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+33 6 12 34 56 78" required />
              <span class="field-error" data-for="phone"></span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="email" placeholder="john@example.com" required />
              <span class="field-error" data-for="email"></span>
            </div>
            <div class="form-field">
              <label>Number of Guests</label>
              <select name="guests" required>
                <option value="">Select</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7+">7+ (Large Party)</option>
              </select>
              <span class="field-error" data-for="guests"></span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Date</label>
              <input type="date" name="date" required />
              <span class="field-error" data-for="date"></span>
            </div>
            <div class="form-field">
              <label>Time</label>
              <select name="time" required>
                <option value="">Select</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
              <span class="field-error" data-for="time"></span>
            </div>
          </div>
          <div class="form-field">
            <label>Seating Preference</label>
            <div class="seating-options" id="seatingOptions">
              <label class="seating-option"><input type="radio" name="seating" value="indoor" checked /><span>Indoor Dining</span></label>
              <label class="seating-option"><input type="radio" name="seating" value="terrace" /><span>Terrace</span></label>
              <label class="seating-option"><input type="radio" name="seating" value="private" /><span>Private Room</span></label>
              <label class="seating-option"><input type="radio" name="seating" value="bar" /><span>Bar Seating</span></label>
            </div>
          </div>
          <div class="form-field">
            <label>Special Requests <small>(optional)</small></label>
            <textarea name="requests" placeholder="Dietary restrictions, celebrations, etc." rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Confirm Reservation</button>
          <p class="form-msg" id="reservationFormMsg"></p>
        </form>
      </div>
    </div>
  </div>
`

// --- Render Menu ---
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid')
  const items = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter)
  grid.innerHTML = items.map((item, idx) => `
    <div class="menu-card" data-cat="${item.cat}" data-idx="${idx}">
      <div class="menu-card-img" style="background-image:url('${item.img}')">
        <span class="menu-price">${item.price}</span>
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span class="menu-cat-tag">${item.cat}</span>
      </div>
    </div>
  `).join('')

  // Stagger reveal
  if (window.gsap) {
    gsap.fromTo('.menu-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
    )
  }
}

// --- Render Chef Specials ---
document.getElementById('specialsGrid').innerHTML = chefSpecials.map(s => `
  <div class="special-card">
    <div class="special-img" style="background-image:url('${s.img}')">
      <span class="special-tag">${s.tag}</span>
    </div>
    <div class="special-body">
      <div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
      <div class="special-footer">
        <span class="special-price">${s.price}</span>
        <button class="btn btn-outline btn-sm" onclick="document.getElementById('navReserveBtn').click()">Reserve</button>
      </div>
    </div>
  </div>
`).join('')

// --- Render Gallery ---
function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = galleryImages.map((src, i) => `
    <div class="gallery-item" data-idx="${i}">
      <div class="gallery-img" style="background-image:url('${src}')"></div>
      <div class="gallery-overlay"><span>View</span></div>
    </div>
  `).join('')
}

// --- Render Reviews ---
document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
  <div class="review-card">
    <div class="review-stars">${'★'.repeat(r.rating)}</div>
    <p class="review-text">"${r.text}"</p>
    <div class="review-author">
      <div class="review-avatar">${r.name.charAt(0)}</div>
      <div>
        <strong>${r.name}</strong>
        <span>${r.role}</span>
      </div>
    </div>
  </div>
`).join('')

// --- Menu Filter ---
const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    renderMenu(tab.dataset.filter)
  })
})

// --- Lightbox ---
let currentLightboxIdx = 0
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightboxImg')
const lightboxCaption = document.getElementById('lightboxCaption')

function openLightbox(idx) {
  currentLightboxIdx = idx
  lightboxImg.src = galleryImages[idx]
  lightboxCaption.textContent = `Maison Auré — Image ${idx + 1} of ${galleryImages.length}`
  lightbox.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.classList.remove('active')
  document.body.style.overflow = ''
}

function lightboxNav(dir) {
  currentLightboxIdx = (currentLightboxIdx + dir + galleryImages.length) % galleryImages.length
  lightboxImg.src = galleryImages[currentLightboxIdx]
  lightboxCaption.textContent = `Maison Auré — Image ${currentLightboxIdx + 1} of ${galleryImages.length}`
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox)
document.getElementById('lightboxPrev').addEventListener('click', () => lightboxNav(-1))
document.getElementById('lightboxNext').addEventListener('click', () => lightboxNav(1))
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox() })
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxNav(-1)
  if (e.key === 'ArrowRight') lightboxNav(1)
})

// --- Reservation Modal ---
const reservationModal = document.getElementById('reservationModal')

function openReservation() {
  reservationModal.classList.add('active')
  document.body.style.overflow = 'hidden'
  const today = new Date().toISOString().split('T')[0]
  const dateInput = reservationModal.querySelector('input[name="date"]')
  dateInput.min = today
}

function closeReservation() {
  reservationModal.classList.remove('active')
  document.body.style.overflow = ''
}

document.getElementById('navReserveBtn').addEventListener('click', openReservation)
document.getElementById('heroReserveBtn').addEventListener('click', openReservation)
document.getElementById('footerReserveBtn').addEventListener('click', (e) => { e.preventDefault(); openReservation() })
document.getElementById('reservationClose').addEventListener('click', closeReservation)
reservationModal.addEventListener('click', (e) => { if (e.target === reservationModal) closeReservation() })

// --- Reservation Form Validation ---
document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const form = e.target
  const msg = document.getElementById('reservationFormMsg')
  let valid = true

  form.querySelectorAll('.field-error').forEach(el => el.textContent = '')

  const fields = {
    fullName: { el: form.fullName, rule: v => v.trim().length >= 2, msg: 'Please enter your full name' },
    phone: { el: form.phone, rule: v => v.trim().length >= 7, msg: 'Please enter a valid phone number' },
    email: { el: form.email, rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email' },
    guests: { el: form.guests, rule: v => v !== '', msg: 'Please select number of guests' },
    date: { el: form.date, rule: v => v !== '', msg: 'Please select a date' },
    time: { el: form.time, rule: v => v !== '', msg: 'Please select a time' },
  }

  Object.entries(fields).forEach(([key, field]) => {
    if (!field.rule(field.el.value)) {
      valid = false
      const err = form.querySelector(`.field-error[data-for="${key}"]`)
      if (err) err.textContent = field.msg
    }
  })

  if (!valid) {
    msg.textContent = 'Please correct the highlighted fields.'
    msg.className = 'form-msg error'
    return
  }

  msg.textContent = 'Reservation confirmed! We look forward to welcoming you.'
  msg.className = 'form-msg success'
  form.reset()
  setTimeout(closeReservation, 2500)
})

// --- Contact Form ---
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const form = e.target
  const msg = document.getElementById('contactFormMsg')
  if (!form.name.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value) || !form.message.value.trim()) {
    msg.textContent = 'Please fill in all fields with a valid email.'
    msg.className = 'form-msg error'
    return
  }
  msg.textContent = 'Thank you! We will respond shortly.'
  msg.className = 'form-msg success'
  form.reset()
  setTimeout(() => { msg.textContent = ''; msg.className = 'form-msg' }, 3000)
})

// --- Newsletter ---
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault()
  e.target.querySelector('input').value = ''
  const btn = e.target.querySelector('button')
  btn.textContent = 'Subscribed ✓'
  setTimeout(() => btn.textContent = 'Subscribe', 2500)
})

// --- Back to Top ---
const backToTop = document.getElementById('backToTop')
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600)
}, { passive: true })
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

// --- Navbar scroll state ---
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60)
}, { passive: true })

// --- Mobile nav toggle ---
const navBurger = document.getElementById('navBurger')
const navLinks = document.getElementById('navLinks')
navBurger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  navBurger.classList.toggle('active')
})
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open')
  navBurger.classList.remove('active')
}))

// --- Gallery click → lightbox ---
renderGallery()
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => openLightbox(parseInt(item.dataset.idx)))
})

// --- Init menu ---
renderMenu()

// --- GSAP Animations ---
window.addEventListener('load', () => {
  if (!window.gsap || !window.ScrollTrigger) return
  gsap.registerPlugin(ScrollTrigger)

  // Hero text mask animation
  const heroTl = gsap.timeline()
  heroTl
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
    .to('.line-inner', { yPercent: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }, '-=0.4')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
    .to('.hero-cta-group', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .to('.hero-scroll', { opacity: 1, duration: 0.6 }, '-=0.2')

  // Hero parallax
  gsap.to('.hero-bg', {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  })

  // About section reveal
  gsap.from('.about-text .section-eyebrow', {
    scrollTrigger: { trigger: '.about', start: 'top 70%' },
    opacity: 0, y: 30, duration: 0.6
  })
  gsap.from('.about-text .section-title', {
    scrollTrigger: { trigger: '.about', start: 'top 70%' },
    opacity: 0, y: 40, duration: 0.8, delay: 0.1
  })
  gsap.from('.about-body', {
    scrollTrigger: { trigger: '.about', start: 'top 70%' },
    opacity: 0, y: 30, duration: 0.6, stagger: 0.15, delay: 0.2
  })
  gsap.from('.about-stats .stat', {
    scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
    opacity: 0, y: 30, duration: 0.5, stagger: 0.1
  })
  gsap.from('.about-image-wrap', {
    scrollTrigger: { trigger: '.about', start: 'top 70%' },
    opacity: 0, x: -50, duration: 1, ease: 'power2.out'
  })

  // Parallax images
  gsap.utils.toArray('.parallax-img').forEach(el => {
    gsap.to(el, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  })

  // Section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.children, {
      scrollTrigger: { trigger: header, start: 'top 80%' },
      opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power2.out'
    })
  })

  // Menu cards stagger
  ScrollTrigger.create({
    trigger: '.menu-section',
    start: 'top 70%',
    onEnter: () => {
      gsap.fromTo('.menu-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      )
    }
  })

  // Special cards
  gsap.from('.special-card', {
    scrollTrigger: { trigger: '.specials', start: 'top 70%' },
    opacity: 0, y: 50, duration: 0.7, stagger: 0.15, ease: 'power2.out'
  })

  // Gallery items
  gsap.from('.gallery-item', {
    scrollTrigger: { trigger: '.gallery', start: 'top 75%' },
    opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.08, ease: 'power2.out'
  })

  // Review cards
  gsap.from('.review-card', {
    scrollTrigger: { trigger: '.reviews', start: 'top 75%' },
    opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'power2.out'
  })

  // Contact section
  gsap.from('.contact-info > *', {
    scrollTrigger: { trigger: '.contact', start: 'top 70%' },
    opacity: 0, y: 30, duration: 0.5, stagger: 0.1
  })
  gsap.from('.contact-form-wrap', {
    scrollTrigger: { trigger: '.contact', start: 'top 70%' },
    opacity: 0, x: 50, duration: 0.8
  })

  // Footer
  gsap.from('.footer-inner > *', {
    scrollTrigger: { trigger: '.footer', start: 'top 85%' },
    opacity: 0, y: 30, duration: 0.5, stagger: 0.1
  })
})
