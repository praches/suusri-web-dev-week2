import { useState } from 'react'
import { useGsapReveal } from '../hooks/useGsap'
import './BMICalculator.css'

type BMICategory = { label: string; color: string; min: number; max: number }

const categories: BMICategory[] = [
  { label: 'Underweight', color: '#4dabf7', min: 0, max: 18.5 },
  { label: 'Normal', color: '#00d9a3', min: 18.5, max: 25 },
  { label: 'Overweight', color: '#ffb800', min: 25, max: 30 },
  { label: 'Obese', color: '#ff3b3b', min: 30, max: 100 },
]

function getCategory(bmi: number): BMICategory {
  return categories.find((c) => bmi >= c.min && bmi < c.max) || categories[3]
}

export default function BMICalculator() {
  useGsapReveal()
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')

  const heightM = unit === 'metric' ? height / 100 : (height * 2.54) / 100
  const weightKg = unit === 'metric' ? weight : weight * 0.453592
  const bmi = weightKg / (heightM * heightM)
  const rounded = Math.round(bmi * 10) / 10
  const cat = getCategory(bmi)
  const pct = Math.min(Math.max((bmi / 40) * 100, 0), 100)

  return (
    <section className="section bmi-section">
      <div className="container">
        <div className="bmi-card reveal">
          <div className="bmi-card__left">
            <span className="section-eyebrow">Free Tool</span>
            <h2 className="bmi-card__title">BMI Calculator</h2>
            <p className="bmi-card__desc">
              Know your starting point. Your Body Mass Index is a quick snapshot of where you are
              today — and the first step in planning where you want to go.
            </p>
            <div className="bmi-card__units">
              <button
                className={`bmi-card__unit-btn ${unit === 'metric' ? 'bmi-card__unit-btn--active' : ''}`}
                onClick={() => setUnit('metric')}
              >
                Metric (cm / kg)
              </button>
              <button
                className={`bmi-card__unit-btn ${unit === 'imperial' ? 'bmi-card__unit-btn--active' : ''}`}
                onClick={() => setUnit('imperial')}
              >
                Imperial (in / lbs)
              </button>
            </div>
            <div className="bmi-card__inputs">
              <label className="bmi-card__input-group">
                <span className="bmi-card__input-label">Height ({unit === 'metric' ? 'cm' : 'in'})</span>
                <input
                  type="range"
                  min={unit === 'metric' ? 120 : 47}
                  max={unit === 'metric' ? 220 : 87}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="bmi-card__slider"
                />
                <span className="bmi-card__input-value">{height} {unit === 'metric' ? 'cm' : 'in'}</span>
              </label>
              <label className="bmi-card__input-group">
                <span className="bmi-card__input-label">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</span>
                <input
                  type="range"
                  min={unit === 'metric' ? 30 : 66}
                  max={unit === 'metric' ? 200 : 440}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="bmi-card__slider"
                />
                <span className="bmi-card__input-value">{weight} {unit === 'metric' ? 'kg' : 'lbs'}</span>
              </label>
            </div>
          </div>
          <div className="bmi-card__right">
            <div className="bmi-card__result">
              <span className="bmi-card__result-num" style={{ color: cat.color }}>{rounded}</span>
              <span className="bmi-card__result-label" style={{ color: cat.color }}>{cat.label}</span>
            </div>
            <div className="bmi-card__scale">
              <div className="bmi-card__scale-track">
                <div className="bmi-card__scale-marker" style={{ left: `${pct}%`, background: cat.color }} />
              </div>
              <div className="bmi-card__scale-labels">
                {categories.map((c) => (
                  <span key={c.label} className="bmi-card__scale-label" style={{ color: c.color }}>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
