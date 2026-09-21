import { useGsapReveal, useParallax } from '../hooks/useGsap'
import './About.css'

const principles = [
  { num: '01', title: 'Live Fire', text: 'Every dish passes through our wood-fired hearth, imparting a depth of flavor no electric range can replicate.' },
  { num: '02', title: 'Seasonal First', text: 'Our menu shifts with the harvest. We work directly with local farms, foragers, and fishermen.' },
  { num: '03', title: 'Hospitality', text: 'We believe a great meal is about more than food. It is about feeling known, welcomed, and cared for.' },
]

export default function About() {
  useGsapReveal()
  useParallax('.about__img-parallax')
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__img-wrap">
            <img
              className="about__img-parallax"
              src="https://images.pexels.com/photos/4253319/pexels-photo-4253319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Chef plating a gourmet dish"
              loading="lazy"
            />
          </div>
          <div className="about__img-badge">
            <span className="about__img-badge-num">12</span>
            <span className="about__img-badge-text">Years of<br />Craft</span>
          </div>
        </div>
        <div className="about__content">
          <span className="section-eyebrow reveal">Culinary Philosophy</span>
          <h2 className="section-title reveal">Cooking with Fire,<br />Serving with Heart</h2>
          <p className="reveal about__text">
            Ember & Oak was founded on a simple conviction: that the most memorable meals are
            born from elemental techniques, honest ingredients, and genuine care for the people
            at the table. Our open kitchen places the hearth at the center, so every guest
            witnesses the transformation.
          </p>
          <div className="about__principles">
            {principles.map((p) => (
              <div key={p.num} className="about__principle reveal">
                <span className="about__principle-num">{p.num}</span>
                <div>
                  <h3 className="about__principle-title">{p.title}</h3>
                  <p className="about__principle-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
