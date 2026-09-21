import { useState } from 'react'
import { menuItems } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Menu.css'

type Tab = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks'

const tabs: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('all')
  useStaggerReveal('.menu-card')

  const filtered = activeTab === 'all'
    ? menuItems
    : menuItems.filter((m) => m.category === activeTab)

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">À La Carte Menu</span>
          <h2 className="section-title reveal">A Taste of Every Season</h2>
          <p className="section-subtitle reveal">
            Each dish is crafted to order using ingredients at their peak. Our menu changes
            throughout the year to honor what the land and sea provide.
          </p>
        </div>

        <div className="menu__tabs reveal">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`menu__tab ${activeTab === t.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="menu__grid" key={activeTab}>
          {filtered.map((item) => (
            <article key={item.id} className="menu-card">
              <div className="menu-card__img-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-card__overlay" />
                {item.tags.length > 0 && (
                  <div className="menu-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="menu-card__tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="menu-card__body">
                <div className="menu-card__header">
                  <h3 className="menu-card__name">{item.name}</h3>
                  <span className="menu-card__price">${item.price}</span>
                </div>
                <p className="menu-card__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
