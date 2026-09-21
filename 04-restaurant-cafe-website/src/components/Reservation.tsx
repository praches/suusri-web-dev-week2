import { useState, useEffect } from 'react'
import './Reservation.css'

interface Props {
  open: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  seating: string
  notes: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  date?: string
  time?: string
  guests?: string
}

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
]

const seatingOptions = [
  { id: 'indoor', label: 'Indoor Dining', desc: 'Main dining room' },
  { id: 'patio', label: 'Patio Terrace', desc: 'Open-air garden' },
  { id: 'chef', label: 'Chef\'s Counter', desc: 'Kitchen-side seating' },
  { id: 'private', label: 'Private Alcove', desc: 'Intimate corner booth' },
]

const emptyForm: FormData = {
  name: '', email: '', phone: '', date: '', time: '', guests: '2', seating: 'indoor', notes: '',
}

export default function Reservation({ open, onClose }: Props) {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      setForm(emptyForm)
      setErrors({})
      setSubmitted(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    else if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number'
    if (!form.date) e.date = 'Please select a date'
    else {
      const selected = new Date(form.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selected < today) e.date = 'Please select a future date'
    }
    if (!form.time) e.time = 'Please select a time'
    if (!form.guests || Number(form.guests) < 1) e.guests = 'At least 1 guest'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field as keyof FormErrors]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  if (!open) return null

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="reservation-overlay" onClick={onClose}>
      <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="reservation-modal__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="reservation-success">
            <div className="reservation-success__icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="reservation-success__title">Reservation Confirmed</h2>
            <p className="reservation-success__text">
              Thank you, {form.name.split(' ')[0]}. We have reserved a table for {form.guests}
              {' '}guest(s) on {form.date} at {form.time}. A confirmation has been sent to {form.email}.
            </p>
            <div className="reservation-success__details">
              <div><span>Seating</span><strong>{seatingOptions.find((s) => s.id === form.seating)?.label}</strong></div>
              <div><span>Guests</span><strong>{form.guests}</strong></div>
              <div><span>Date</span><strong>{form.date}</strong></div>
              <div><span>Time</span><strong>{form.time}</strong></div>
            </div>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div className="reservation-modal__header">
              <span className="section-eyebrow">Book Your Table</span>
              <h2 className="reservation-modal__title">Reserve at Ember & Oak</h2>
              <p className="reservation-modal__subtitle">
                Secure your table in just a few moments. We look forward to welcoming you.
              </p>
            </div>
            <form className="reservation-form" onSubmit={handleSubmit} noValidate>
              <div className="reservation-form__row">
                <div className="reservation-form__field">
                  <label htmlFor="r-name">Full Name</label>
                  <input
                    id="r-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Doe"
                    className={errors.name ? 'reservation-form__input--error' : ''}
                  />
                  {errors.name && <span className="reservation-form__error">{errors.name}</span>}
                </div>
                <div className="reservation-form__field">
                  <label htmlFor="r-email">Email</label>
                  <input
                    id="r-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@email.com"
                    className={errors.email ? 'reservation-form__input--error' : ''}
                  />
                  {errors.email && <span className="reservation-form__error">{errors.email}</span>}
                </div>
              </div>
              <div className="reservation-form__row">
                <div className="reservation-form__field">
                  <label htmlFor="r-phone">Phone</label>
                  <input
                    id="r-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className={errors.phone ? 'reservation-form__input--error' : ''}
                  />
                  {errors.phone && <span className="reservation-form__error">{errors.phone}</span>}
                </div>
                <div className="reservation-form__field">
                  <label htmlFor="r-guests">Number of Guests</label>
                  <select id="r-guests" value={form.guests} onChange={(e) => update('guests', e.target.value)}>
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                    <option value="9">9+ (large party)</option>
                  </select>
                  {errors.guests && <span className="reservation-form__error">{errors.guests}</span>}
                </div>
              </div>
              <div className="reservation-form__row">
                <div className="reservation-form__field">
                  <label htmlFor="r-date">Date</label>
                  <input
                    id="r-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className={errors.date ? 'reservation-form__input--error' : ''}
                  />
                  {errors.date && <span className="reservation-form__error">{errors.date}</span>}
                </div>
                <div className="reservation-form__field">
                  <label htmlFor="r-time">Time</label>
                  <select
                    id="r-time"
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                    className={errors.time ? 'reservation-form__input--error' : ''}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <span className="reservation-form__error">{errors.time}</span>}
                </div>
              </div>
              <div className="reservation-form__field">
                <label>Seating Preference</label>
                <div className="reservation-form__seating">
                  {seatingOptions.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`seating-option ${form.seating === s.id ? 'seating-option--active' : ''}`}
                      onClick={() => update('seating', s.id)}
                    >
                      <span className="seating-option__label">{s.label}</span>
                      <span className="seating-option__desc">{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="reservation-form__field">
                <label htmlFor="r-notes">Special Requests (optional)</label>
                <textarea
                  id="r-notes"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Dietary restrictions, celebrations, accessibility needs..."
                />
              </div>
              <button type="submit" className="btn btn-primary reservation-form__submit">
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
