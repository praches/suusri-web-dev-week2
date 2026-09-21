import { useGsapReveal } from '../hooks/useGsap'
import './About.css'

const stats = [
  { value: '12,000', label: 'Square Feet' },
  { value: '50+', label: 'Machines' },
  { value: '7', label: 'Days a Week' },
  { value: '100%', label: 'Results Driven' },
]

export default function About() {
  useGsapReveal()
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual reveal">
          <div className="about__img-wrap">
            <img
              src="https://images.pexels.com/photos/6389893/pexels-photo-6389893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Gym training area"
              loading="lazy"
            />
          </div>
          <div className="about__img-accent" />
        </div>
        <div className="about__content">
          <span className="section-eyebrow reveal">Who We Are</span>
          <h2 className="section-title reveal">More Than a Gym. A Movement.</h2>
          <p className="reveal about__text">
            Forge Fitness was born from a simple belief: everyone deserves a space where they feel
            strong, supported, and unstoppable. Since 2014 we have built more than a facility —
            we have built a community of people who push each other to show up, work hard, and
            become better every single day.
          </p>
          <p className="reveal about__text">
            Our coaches are certified, our equipment is world-class, and our culture is unmatched.
            Whether you are stepping into a gym for the first time or chasing a new PR, you belong here.
          </p>
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat reveal">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
