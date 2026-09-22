import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Menu, X, ArrowRight, ArrowUp, Star, MapPin, Clock, Users, BookOpen,
  Award, GraduationCap, Briefcase, Globe, Sparkles, CheckCircle2,
  Target, Lightbulb, HeartHandshake, ShieldCheck, CalendarDays,
  Mail, Phone, MapPinned, Share2, Send, AtSign,
  Quote, Layers, Compass, FlaskConical, Palette, TrendingUp,
} from 'lucide'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Icon helper — returns inline SVG string for a lucide icon
   ---------------------------------------------------------------- */
const ico = (name, size = 24, cls = '') => {
  const el = document.createElement('span')
  el.style.display = 'inline-flex'
  if (cls) el.className = cls
  const cmp = ({ Menu, X, ArrowRight, ArrowUp, Star, MapPin, Clock, Users, BookOpen,
    Award, GraduationCap, Briefcase, Globe, Sparkles, CheckCircle2,
    Target, Lightbulb, HeartHandshake, ShieldCheck, CalendarDays,
    Mail, Phone, MapPinned, Share2, Send, AtSign,
    Quote, Layers, Compass, FlaskConical, Palette, TrendingUp })[name]
  if (cmp) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', size)
    svg.setAttribute('height', size)
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('fill', 'none')
    svg.setAttribute('stroke', 'currentColor')
    svg.setAttribute('stroke-width', '2')
    svg.setAttribute('stroke-linecap', 'round')
    svg.setAttribute('stroke-linejoin', 'round')
    svg.innerHTML = cmp.children.map((c) => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', c.tagName)
      for (const k in c.props) {
        if (k === 'children') continue
        el.setAttribute(k, c.props[k])
      }
      return el.outerHTML
    }).join('')
    el.appendChild(svg)
  }
  return el
}

const ic = (name, size = 24, cls = '') => ico(name, size, cls).outerHTML

/* ----------------------------------------------------------------
   Data
   ---------------------------------------------------------------- */
const courses = [
  { cat: 'STEM', title: 'Computer Science Foundations', desc: 'Algorithms, data structures, and software engineering principles with hands-on projects.', lessons: 48, weeks: 12, price: 890, img: 'https://images.pexels.com/photos/8471913/pexels-photo-8471913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'STEM', title: 'Engineering Physics', desc: 'Classical mechanics, thermodynamics, and electromagnetism for future engineers.', lessons: 40, weeks: 10, price: 760, img: 'https://images.pexels.com/photos/9243432/pexels-photo-9243432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Arts', title: 'Visual Arts & Design', desc: 'Drawing, painting, and digital design fundamentals taught by working artists.', lessons: 36, weeks: 8, price: 640, img: 'https://images.pexels.com/photos/32323486/pexels-photo-32323486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Arts', title: 'Creative Writing Studio', desc: 'Fiction, poetry, and narrative craft with weekly workshops and peer review.', lessons: 32, weeks: 8, price: 580, img: 'https://images.pexels.com/photos/8036855/pexels-photo-8036855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Business', title: 'Entrepreneurship Lab', desc: 'From idea to launch — business modeling, finance, and pitching real ventures.', lessons: 44, weeks: 11, price: 920, img: 'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Business', title: 'Marketing & Strategy', desc: 'Market research, brand building, and digital growth tactics with live case studies.', lessons: 38, weeks: 9, price: 740, img: 'https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Languages', title: 'Global Languages Program', desc: 'Spanish, French, and Mandarin with immersive conversation and cultural context.', lessons: 50, weeks: 12, price: 690, img: 'https://images.pexels.com/photos/291760/pexels-photo-291760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { cat: 'Languages', title: 'Academic English', desc: 'Writing, research, and presentation skills for university-level academic success.', lessons: 42, weeks: 10, price: 620, img: 'https://images.pexels.com/photos/37494171/pexels-photo-37494171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
]

const faculty = [
  { name: 'Dr. Amara Okafor', role: 'Dean of Sciences', bio: 'PhD in Physics, 15 years shaping STEM curricula.', img: 'https://images.pexels.com/photos/16160869/pexels-photo-16160869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Prof. Daniel Reyes', role: 'Mathematics Lead', bio: 'Applied math researcher and award-winning lecturer.', img: 'https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Elena Marchetti', role: 'Arts Director', bio: 'Exhibited artist guiding the visual arts program.', img: 'https://images.pexels.com/photos/7752808/pexels-photo-7752808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'James Whitfield', role: 'Business Faculty', bio: 'Former founder, now teaching entrepreneurship.', img: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&h=650&w=940' },
]

const testimonials = [
  { text: 'Lumen Academy transformed how I approach learning. The mentorship and hands-on projects gave me the confidence to pursue engineering at a top university.', name: 'Sofia Ramirez', role: 'Class of 2024, Engineering', img: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { text: 'The faculty genuinely care about each student. My writing teacher pushed me to publish my first piece before I even graduated.', name: 'Marcus Lee', role: 'Class of 2023, Creative Arts', img: 'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&h=650&w=940' },
  { text: 'Beyond academics, I found a community here. The clubs, events, and global exchange program opened doors I never knew existed.', name: 'Aisha Bello', role: 'Class of 2024, Business', img: 'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
]

const events = [
  { day: '14', month: 'Oct', title: 'Open Campus Day', time: '10:00 AM', place: 'Main Quad', tag: 'Admissions', desc: 'Tour our campus, meet faculty, and experience a live demo class.' },
  { day: '22', month: 'Oct', title: 'Innovation Hackathon', time: '09:00 AM', place: 'Tech Lab', tag: 'STEM', desc: '48 hours of building, mentoring, and showcasing student projects.' },
  { day: '05', month: 'Nov', title: 'Winter Arts Showcase', time: '06:00 PM', place: 'Auditorium', tag: 'Arts', desc: 'An evening of student performances, exhibitions, and installations.' },
]

const faqs = [
  { q: 'What are the admission requirements?', a: 'Applicants submit transcripts, a personal statement, and one recommendation. Some programs require a short portfolio or entrance assessment. Our admissions team reviews each file holistically.' },
  { q: 'Are scholarships available?', a: 'Yes. We offer merit-based, need-based, and program-specific scholarships. Over 60% of our students receive some form of financial aid. You can apply during the admission process.' },
  { q: 'Can I study part-time or online?', a: 'Many programs offer flexible part-time tracks and hybrid formats. Several courses are fully online with live sessions. Check individual program pages for available formats.' },
  { q: 'What support do international students get?', a: 'Our International Office assists with visas, housing, and orientation. Dedicated advisors, language support, and a peer mentorship program help students settle in quickly.' },
  { q: 'How large are the classes?', a: 'Average class size is 18 students. Labs and seminars are even smaller, ensuring personal attention and meaningful faculty interaction throughout your studies.' },
]

/* ----------------------------------------------------------------
   Build the page
   ---------------------------------------------------------------- */
const app = document.querySelector('#app')

app.innerHTML = `
  <!-- ============ HEADER ============ -->
  <header class="site-header" id="header">
    <nav class="nav">
      <a href="#home" class="brand">
        <span class="brand-mark">L</span>
        <span>Lumen Academy</span>
      </a>
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#courses" class="nav-link">Courses</a></li>
        <li><a href="#why" class="nav-link">Why Us</a></li>
        <li><a href="#faculty" class="nav-link">Faculty</a></li>
        <li><a href="#events" class="nav-link">Events</a></li>
        <li><a href="#faq" class="nav-link">FAQ</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#admission" class="btn btn-ghost">Sign In</a>
        <a href="#admission" class="btn btn-primary">Apply Now ${ic('ArrowRight', 18)}</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <!-- Mobile drawer -->
  <div class="drawer-backdrop" id="drawerBackdrop"></div>
  <aside class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer-head">
      <a href="#home" class="brand"><span class="brand-mark">L</span><span>Lumen</span></a>
      <button class="drawer-close" id="drawerClose" aria-label="Close menu">${ic('X', 20)}</button>
    </div>
    <ul class="drawer-links">
      <li><a href="#about">About</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#why">Why Choose Us</a></li>
      <li><a href="#faculty">Faculty</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#admission">Admissions</a></li>
    </ul>
    <div class="drawer-foot">
      <a href="#admission" class="btn btn-primary" style="width:100%">Apply Now ${ic('ArrowRight', 18)}</a>
      <a href="#admission" class="btn btn-ghost" style="width:100%">Sign In</a>
    </div>
  </aside>

  <!-- ============ HERO ============ -->
  <section class="hero" id="home">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="hero-grid">
      <div class="hero-content">
        <span class="hero-eyebrow"><span class="dot"></span>Admissions Open · Fall 2026</span>
        <h1 class="hero-title">Where Curiosity Becomes <span class="accent">Mastery</span></h1>
        <p class="hero-lead">Lumen Academy is a modern learning community where ambitious students, dedicated mentors, and bold ideas come together. Discover a education designed for the world you will help shape.</p>
        <div class="hero-actions">
          <a href="#admission" class="btn btn-teal">Start Your Learning Journey ${ic('ArrowRight', 18, 'arrow')}</a>
          <a href="#courses" class="btn btn-light">Explore Programs</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><div class="num" data-count="12000" data-suffix="+">0</div><div class="label">Students Enrolled</div></div>
          <div class="hero-stat"><div class="num" data-count="85" data-suffix="+">0</div><div class="label">Expert Faculty</div></div>
          <div class="hero-stat"><div class="num" data-count="140" data-suffix="+">0</div><div class="label">Courses Offered</div></div>
          <div class="hero-stat"><div class="num" data-count="98" data-suffix="%">0</div><div class="label">Graduate Satisfaction</div></div>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&h=940&w=750" alt="Students studying together" />
        <div class="hero-badge b1">
          <span class="ic">${ic('GraduationCap', 20)}</span>
          <span class="tx"><strong>98%</strong>Graduation rate</span>
        </div>
        <div class="hero-badge b2">
          <span class="ic">${ic('Users', 20)}</span>
          <span class="tx"><strong>18:1</strong>Student ratio</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ MARQUEE ============ -->
  <div class="marquee">
    <div class="marquee-track">
      <span>Accredited Programs</span><span>Global Exchange</span><span>Career Services</span><span>Research Labs</span><span>Modern Campus</span><span>Expert Mentorship</span>
      <span>Accredited Programs</span><span>Global Exchange</span><span>Career Services</span><span>Research Labs</span><span>Modern Campus</span><span>Expert Mentorship</span>
    </div>
  </div>

  <!-- ============ ABOUT ============ -->
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual reveal">
          <img src="https://images.pexels.com/photos/11932106/pexels-photo-11932106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Modern campus" />
          <div class="frame"></div>
        </div>
        <div class="about-text reveal">
          <span class="eyebrow">About Lumen</span>
          <h2 class="section-title">An academy built for the curious, the bold, and the kind.</h2>
          <p class="section-lead">Since 1998, Lumen Academy has blended rigorous scholarship with real-world practice. We believe education should not only prepare students for careers — it should prepare them for lives of purpose, creativity, and contribution.</p>
          <ul class="about-list">
            <li><span class="ic">${ic('Target', 20)}</span><span class="tx"><strong>Mission-driven learning</strong><span>Every program is designed around outcomes that matter beyond the classroom.</span></span></li>
            <li><span class="ic">${ic('Compass', 20)}</span><span class="tx"><strong>Personalized pathways</strong><span>Advisors help each student craft a journey matched to their goals and strengths.</span></span></li>
            <li><span class="ic">${ic('Globe', 20)}</span><span class="tx"><strong>Global perspective</strong><span>Exchange partnerships and a diverse community connect learning to the wider world.</span></span></li>
          </ul>
          <div class="about-stats">
            <div class="about-stat"><div class="num" data-count="26">0</div><div class="lbl">Years of excellence</div></div>
            <div class="about-stat"><div class="num" data-count="42">0</div><div class="lbl">Partner universities</div></div>
            <div class="about-stat"><div class="num" data-count="60" data-suffix="%">0</div><div class="lbl">Receive financial aid</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ COURSES ============ -->
  <section class="section courses-section" id="courses">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Programs</span>
        <h2 class="section-title">Find a path that fits your ambition</h2>
        <p class="section-lead" style="margin:0 auto">Browse our programs by category and discover courses designed to build real, demonstrable skills with mentorship at every step.</p>
      </div>
      <div class="course-tabs reveal" id="courseTabs">
        <button class="course-tab active" data-filter="all">All Programs</button>
        <button class="course-tab" data-filter="STEM">STEM</button>
        <button class="course-tab" data-filter="Arts">Arts</button>
        <button class="course-tab" data-filter="Business">Business</button>
        <button class="course-tab" data-filter="Languages">Languages</button>
      </div>
      <div class="course-grid" id="courseGrid">
        ${courses.map((c, i) => `
          <article class="course-card reveal" data-cat="${c.cat}" style="transition-delay:${(i % 3) * 80}ms">
            <div class="course-media">
              <span class="course-tag t-${c.cat}">${c.cat}</span>
              <img src="${c.img}" alt="${c.title}" loading="lazy" />
            </div>
            <div class="course-body">
              <div class="meta">
                <span>${ic('BookOpen', 14)} ${c.lessons} lessons</span>
                <span>${ic('Clock', 14)} ${c.weeks} weeks</span>
              </div>
              <h3>${c.title}</h3>
              <p>${c.desc}</p>
              <div class="course-foot">
                <div class="price">$${c.price} <span>/ program</span></div>
                <a href="#admission" class="link">Enroll ${ic('ArrowRight', 16)}</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ WHY CHOOSE US ============ -->
  <section class="section why-section" id="why">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Why Lumen</span>
        <h2 class="section-title">Built around how students actually grow</h2>
        <p class="section-lead" style="margin:0 auto">Six commitments that shape every classroom, every program, and every interaction at Lumen Academy.</p>
      </div>
      <div class="why-grid">
        <div class="why-card reveal"><div class="why-ic">${ic('Lightbulb', 26)}</div><h3>Project-based learning</h3><p>Students build portfolios of real work — apps, essays, experiments, ventures — not just transcripts of grades.</p></div>
        <div class="why-card reveal"><div class="why-ic">${ic('Users', 26)}</div><h3>Mentorship for everyone</h3><p>Every student is paired with a faculty mentor and a peer guide from day one through graduation.</p></div>
        <div class="why-card reveal"><div class="why-ic">${ic('FlaskConical', 26)}</div><h3>Modern research labs</h3><p>Access to equipped labs and studios where undergraduates contribute to real research and creative work.</p></div>
        <div class="why-card reveal"><div class="why-ic">${ic('Globe', 26)}</div><h3>Global exchange</h3><p>Semester abroad options with 42 partner universities across 18 countries, fully credit-bearing.</p></div>
        <div class="why-card reveal"><div class="why-ic">${ic('ShieldCheck', 26)}</div><h3>Wellbeing support</h3><p>Counseling, accessibility services, and a dedicated wellbeing team because learning needs care.</p></div>
        <div class="why-card reveal"><div class="why-ic">${ic('Briefcase', 26)}</div><h3>Career for life</h3><p>Our career services stay with alumni — advising, network, and opportunities long after graduation.</p></div>
      </div>
    </div>
  </section>

  <!-- ============ FACULTY ============ -->
  <section class="section faculty-section" id="faculty">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Our People</span>
        <h2 class="section-title">Mentors who teach, guide, and inspire</h2>
        <p class="section-lead" style="margin:0 auto">Meet a few of the educators who make Lumen what it is — practitioners and researchers dedicated to student growth.</p>
      </div>
      <div class="faculty-grid">
        ${faculty.map((f, i) => `
          <div class="faculty-card reveal" style="transition-delay:${i * 80}ms">
            <div class="faculty-photo"><img src="${f.img}" alt="${f.name}" loading="lazy" /></div>
            <div class="faculty-body">
              <h3>${f.name}</h3>
              <div class="role">${f.role}</div>
              <p class="bio">${f.bio}</p>
              <div class="faculty-social">
                <a href="#" aria-label="LinkedIn">${ic('Share2', 18)}</a>
                <a href="#" aria-label="Send">${ic('Send', 18)}</a>
                <a href="#" aria-label="Email">${ic('Mail', 18)}</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ ACHIEVEMENTS ============ -->
  <section class="section achievements" id="achievements">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Our Impact</span>
        <h2 class="section-title">Numbers that tell our story</h2>
        <p class="section-lead" style="margin:0 auto">A snapshot of what two decades of mission-driven education has built — and the community that built it.</p>
      </div>
      <div class="ach-grid">
        <div class="ach-card reveal"><div class="ach-ic">${ic('GraduationCap', 26)}</div><div class="ach-num" data-count="12000" data-suffix="+">0</div><div class="ach-label">Alumni worldwide</div></div>
        <div class="ach-card reveal"><div class="ach-ic">${ic('Award', 26)}</div><div class="ach-num" data-count="320" data-suffix="+">0</div><div class="ach-label">Awards & grants</div></div>
        <div class="ach-card reveal"><div class="ach-ic">${ic('Briefcase', 26)}</div><div class="ach-num" data-count="94" data-suffix="%">0</div><div class="ach-label">Employed within 6 months</div></div>
        <div class="ach-card reveal"><div class="ach-ic">${ic('Globe', 26)}</div><div class="ach-num" data-count="18">0</div><div class="ach-label">Countries with partners</div></div>
      </div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="section testi-section" id="testimonials">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Student Voices</span>
        <h2 class="section-title">Stories from our community</h2>
        <p class="section-lead" style="margin:0 auto">Hear from students whose time at Lumen shaped not only what they studied, but who they became.</p>
      </div>
      <div class="testi-grid">
        ${testimonials.map((t, i) => `
          <article class="testi-card reveal" style="transition-delay:${i * 100}ms">
            <div class="testi-quote">${ic('Quote', 40)}</div>
            <div class="testi-stars">${'<span>' + ic('Star', 18) + '</span>'.repeat(5)}</div>
            <p class="testi-text">${t.text}</p>
            <div class="testi-author">
              <img src="${t.img}" alt="${t.name}" loading="lazy" />
              <div class="nm"><strong>${t.name}</strong><span>${t.role}</span></div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ EVENTS ============ -->
  <section class="section events-section" id="events">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">What's Next</span>
        <h2 class="section-title">Upcoming events on campus</h2>
        <p class="section-lead" style="margin:0 auto">Join us at an upcoming event — tour the campus, meet faculty, or experience student work firsthand.</p>
      </div>
      <div class="event-grid">
        ${events.map((e, i) => `
          <article class="event-card reveal" style="transition-delay:${i * 90}ms">
            <div class="event-date"><div class="d">${e.day}</div><div class="m">${e.month}</div></div>
            <div class="event-body">
              <span class="event-tag">${e.tag}</span>
              <h3>${e.title}</h3>
              <div class="meta">
                <span>${ic('Clock', 14)} ${e.time}</span>
                <span>${ic('MapPin', 14)} ${e.place}</span>
              </div>
              <p>${e.desc}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ FAQ ============ -->
  <section class="section faq-section" id="faq">
    <div class="container-narrow">
      <div class="section-head center reveal">
        <span class="eyebrow" style="justify-content:center">Questions</span>
        <h2 class="section-title">Frequently asked questions</h2>
        <p class="section-lead" style="margin:0 auto">Everything you need to know about admissions, programs, and life at Lumen Academy.</p>
      </div>
      <div class="faq-list" id="faqList">
        ${faqs.map((f, i) => `
          <div class="faq-item reveal" style="transition-delay:${i * 60}ms">
            <button class="faq-q" aria-expanded="false">
              <span>${f.q}</span>
              <span class="ic">${ic('X', 18)}</span>
            </button>
            <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ============ ADMISSION FORM ============ -->
  <section class="section admission-section" id="admission">
    <div class="container">
      <div class="admission-grid">
        <div class="admission-info reveal">
          <span class="eyebrow">Admissions</span>
          <h2>Begin your application today</h2>
          <p class="section-lead">Tell us a little about you and our admissions team will reach out within two business days to guide your next steps.</p>
          <ul class="admission-perks">
            <li><span class="ic">${ic('CheckCircle2', 20)}</span><span class="tx"><strong>No application fee</strong><span>Applying to Lumen is always free.</span></span></li>
            <li><span class="ic">${ic('CheckCircle2', 20)}</span><span class="tx"><strong>Rolling decisions</strong><span>Most applicants hear back within two weeks.</span></span></li>
            <li><span class="ic">${ic('CheckCircle2', 20)}</span><span class="tx"><strong>Personalized guidance</strong><span>A dedicated advisor supports you from inquiry to enrollment.</span></span></li>
          </ul>
        </div>
        <div class="form-card reveal">
          <form id="admissionForm" novalidate>
            <div class="form-head">
              <h3>Request Information</h3>
              <p class="sub">We will get back to you within two business days.</p>
            </div>
            <div class="form-row">
              <div class="field" data-field="firstName">
                <label>First name <span class="req">*</span></label>
                <input type="text" name="firstName" placeholder="Jane" />
                <span class="err">Please enter your first name.</span>
              </div>
              <div class="field" data-field="lastName">
                <label>Last name <span class="req">*</span></label>
                <input type="text" name="lastName" placeholder="Doe" />
                <span class="err">Please enter your last name.</span>
              </div>
            </div>
            <div class="field" data-field="email">
              <label>Email address <span class="req">*</span></label>
              <input type="email" name="email" placeholder="jane@example.com" />
              <span class="err">Please enter a valid email address.</span>
            </div>
            <div class="form-row">
              <div class="field" data-field="phone">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+1 555 000 0000" />
                <span class="err">Please enter a valid phone number.</span>
              </div>
              <div class="field" data-field="program">
                <label>Program of interest <span class="req">*</span></label>
                <select name="program">
                  <option value="">Select a program</option>
                  <option>STEM</option>
                  <option>Arts</option>
                  <option>Business</option>
                  <option>Languages</option>
                  <option>Undecided</option>
                </select>
                <span class="err">Please choose a program.</span>
              </div>
            </div>
            <div class="field" data-field="message">
              <label>Message</label>
              <textarea name="message" rows="3" placeholder="Tell us about your goals..."></textarea>
            </div>
            <div class="form-actions">
              <span class="note">By submitting you agree to our privacy policy.</span>
              <button type="submit" class="btn btn-primary">Submit Application ${ic('ArrowRight', 18, 'arrow')}</button>
            </div>
          </form>
          <div class="form-success" id="formSuccess">
            <div class="ic">${ic('CheckCircle2', 32)}</div>
            <h3>Application received!</h3>
            <p>Thank you. Our admissions team will contact you within two business days.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CONTACT ================= -->
    <section class="section" id="contact">
      <div class="container">
        <div class="section-head center reveal">
          <span class="eyebrow">Get In Touch</span>
          <h2 class="section-title">Contact Us</h2>
        </div>

        <form id="contactForm">
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <input type="tel" id="phone" placeholder="Your Phone Number" />
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="brand"><span class="brand-mark">L</span><span>Lumen Academy</span></a>
          <p>An academy built for the curious, the bold, and the kind. Inspiring minds and shaping futures since 1998.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">${ic('Share2', 20)}</a>
            <a href="#" aria-label="Send">${ic('Send', 20)}</a>
            <a href="#" aria-label="At">${ic('AtSign', 20)}</a>
            <a href="#" aria-label="Mail">${ic('Mail', 20)}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Academics</h4>
          <ul>
            <li><a href="#courses">All Programs</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#about">Our Story</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Admissions</h4>
          <ul>
            <li><a href="#admission">Apply Now</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#admission">Scholarships</a></li>
            <li><a href="#admission">Visit Campus</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact">
            <li><span class="ic">${ic('MapPinned', 18)}</span><span>1200 Lumen Way, Boston, MA 02115</span></li>
            <li><span class="ic">${ic('Phone', 18)}</span><span>+1 (555) 240-1998</span></li>
            <li><span class="ic">${ic('Mail', 18)}</span><span>hello@lumenacademy.edu</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Lumen Academy. All rights reserved.</span>
        <div class="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Back to top -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top">${ic('ArrowUp', 22)}</button>
`

/* ----------------------------------------------------------------
   Header scroll state
   ---------------------------------------------------------------- */
const header = document.getElementById('header')
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40)
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 600)
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* ----------------------------------------------------------------
   Mobile drawer
   ---------------------------------------------------------------- */
const drawer = document.getElementById('drawer')
const backdrop = document.getElementById('drawerBackdrop')
const hamburger = document.getElementById('hamburger')
const drawerClose = document.getElementById('drawerClose')

const openDrawer = () => {
  drawer.classList.add('open')
  backdrop.classList.add('open')
  hamburger.classList.add('open')
  drawer.setAttribute('aria-hidden', 'false')
}
const closeDrawer = () => {
  drawer.classList.remove('open')
  backdrop.classList.remove('open')
  hamburger.classList.remove('open')
  drawer.setAttribute('aria-hidden', 'true')
}
hamburger.addEventListener('click', openDrawer)
drawerClose.addEventListener('click', closeDrawer)
backdrop.addEventListener('click', closeDrawer)
drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer))

/* ----------------------------------------------------------------
   Course filter
   ---------------------------------------------------------------- */
const tabs = document.querySelectorAll('.course-tab')
const cards = document.querySelectorAll('.course-card')
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'))
    tab.classList.add('active')
    const filter = tab.dataset.filter
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.cat === filter
      gsap.to(card, {
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.92,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => card.classList.toggle('hidden-card', !show),
      })
    })
  })
})

/* ----------------------------------------------------------------
   FAQ accordion
   ---------------------------------------------------------------- */
const faqItems = document.querySelectorAll('.faq-item')
faqItems.forEach((item) => {
  const q = item.querySelector('.faq-q')
  const a = item.querySelector('.faq-a')
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    faqItems.forEach((other) => {
      other.classList.remove('open')
      other.querySelector('.faq-a').style.maxHeight = null
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false')
    })
    if (!isOpen) {
      item.classList.add('open')
      a.style.maxHeight = a.scrollHeight + 'px'
      q.setAttribute('aria-expanded', 'true')
    }
  })
})

/* ----------------------------------------------------------------
   Animated counters
   ---------------------------------------------------------------- */
const counters = document.querySelectorAll('[data-count]')
const animateCounter = (el) => {
  const target = parseInt(el.dataset.count, 10)
  const suffix = el.dataset.suffix || ''
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      const v = Math.round(obj.val)
      el.textContent = v.toLocaleString() + suffix
    },
  })
}
counters.forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => animateCounter(el),
  })
})

/* ----------------------------------------------------------------
   GSAP scroll reveals
   ---------------------------------------------------------------- */
gsap.utils.toArray('.reveal').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    }
  )
})

/* Hero entrance */
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
heroTl
  .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
  .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
  .from('.hero-lead', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
  .from('.hero-actions > *', { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, '-=0.4')
  .from('.hero-stats .hero-stat', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.3')
  .from('.hero-visual', { opacity: 0, scale: 0.95, duration: 0.9 }, '-=0.9')
  .from('.hero-badge', { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.15 }, '-=0.4')

/* Parallax orbs */
gsap.to('.orb-1', { y: -80, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
gsap.to('.orb-2', { y: 60, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })

/* Staggered grids */
gsap.utils.toArray('.why-grid, .faculty-grid, .ach-grid, .testi-grid, .event-grid').forEach((grid) => {
  gsap.from(grid.children, {
    opacity: 0, y: 40, duration: 0.6, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
  })
})

/* ----------------------------------------------------------------
   Admission form validation
   ---------------------------------------------------------------- */
const form = document.getElementById('admissionForm')
const successPanel = document.getElementById('formSuccess')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[+]?[\d\s()-]{7,}$/

const validators = {
  firstName: (v) => v.trim().length >= 2,
  lastName: (v) => v.trim().length >= 2,
  email: (v) => emailRe.test(v.trim()),
  phone: (v) => v.trim() === '' || phoneRe.test(v.trim()),
  program: (v) => v !== '',
}

const validateField = (field) => {
  const wrap = form.querySelector(`[data-field="${field}"]`)
  if (!wrap) return true
  const input = wrap.querySelector('input, select, textarea')
  const ok = validators[field](input.value)
  wrap.classList.toggle('invalid', !ok)
  return ok
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let valid = true
  Object.keys(validators).forEach((f) => { if (!validateField(f)) valid = false })
  if (!valid) {
    const firstInvalid = form.querySelector('.invalid')
    if (firstInvalid) firstInvalid.querySelector('input, select, textarea').focus()
    return
  }
  gsap.to(form, {
    opacity: 0, y: -10, duration: 0.4, ease: 'power2.in',
    onComplete: () => {
      form.style.display = 'none'
      successPanel.classList.add('show')
      gsap.fromTo(successPanel, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' })
    },
  })
})

form.querySelectorAll('input, select, textarea').forEach((input) => {
  input.addEventListener('input', () => {
    const wrap = input.closest('.field')
    if (wrap && wrap.classList.contains('invalid')) {
      const field = wrap.dataset.field
      if (validators[field](input.value)) wrap.classList.remove('invalid')
    }
  })
})

/* ----------------------------------------------------------------
   Back to top
   ---------------------------------------------------------------- */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Contact Form Submission Handler
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone") ? document.querySelector("#phone").value : "",
      message: document.querySelector("#message").value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ " + result.message);
        contactForm.reset();
      } else {
        alert("❌ " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Connection error.");
    }
  });
}
