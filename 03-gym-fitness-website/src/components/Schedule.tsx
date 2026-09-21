import { useState } from 'react'
import { schedule } from '../data/content'
import { useGsapReveal } from '../hooks/useGsap'
import './Schedule.css'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const intensityClass: Record<string, string> = {
  High: 'schedule__pill--high',
  Medium: 'schedule__pill--medium',
  Low: 'schedule__pill--low',
}

export default function Schedule() {
  useGsapReveal()
  const [activeDay, setActiveDay] = useState<string>('All')

  const filtered = activeDay === 'All' ? schedule : schedule.filter((c) => c.day === activeDay)

  return (
    <section id="schedule" className="section schedule-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Weekly Class Schedule</span>
          <h2 className="section-title reveal">Plan Your Week</h2>
          <p className="section-subtitle reveal">
            Filter by day to see what is on. All classes are included with Pro and Elite memberships.
          </p>
        </div>

        <div className="schedule__filters reveal">
          <button
            className={`schedule__filter ${activeDay === 'All' ? 'schedule__filter--active' : ''}`}
            onClick={() => setActiveDay('All')}
          >
            All
          </button>
          {days.map((d) => (
            <button
              key={d}
              className={`schedule__filter ${activeDay === d ? 'schedule__filter--active' : ''}`}
              onClick={() => setActiveDay(d)}
            >
              {d.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="schedule__table-wrap reveal">
          <table className="schedule__table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Class</th>
                <th>Trainer</th>
                <th>Type</th>
                <th>Intensity</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={`${c.day}-${c.time}-${i}`} className="schedule__row">
                  <td data-label="Day">{c.day}</td>
                  <td data-label="Time" className="schedule__time">{c.time}</td>
                  <td data-label="Class" className="schedule__name">{c.name}</td>
                  <td data-label="Trainer">{c.trainer}</td>
                  <td data-label="Type">
                    <span className="schedule__type">{c.type}</span>
                  </td>
                  <td data-label="Intensity">
                    <span className={`schedule__pill ${intensityClass[c.intensity]}`}>
                      {c.intensity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="schedule__empty">No classes scheduled. Check another day.</p>
          )}
        </div>
      </div>
    </section>
  )
}
