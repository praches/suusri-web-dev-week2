import { useEffect, useState, type FormEvent } from 'react';
import { X, Calendar, User, Mail, Phone, Building2, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { DEPARTMENTS } from '@/data/content';
import { useBooking } from '@/lib/booking';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  department?: string;
  date?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function BookingModal() {
  const { isOpen, closeBooking, prefillDepartment } = useBooking();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '09:00',
    notes: '',
  });

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrors({});
      setForm((prev) => ({
        ...prev,
        department: prefillDepartment || prev.department,
      }));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, prefillDepartment]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking();
    };
    if (isOpen) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';

    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';

    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[\d\s+()-]{7,}$/.test(form.phone)) e.phone = 'Please enter a valid phone number';

    if (!form.department) e.department = 'Please select a department';

    if (!form.date) e.date = 'Please select a preferred date';
    else if (form.date < today) e.date = 'Date cannot be in the past';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={closeBooking}
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      />

      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-soft-lg dark:border-slate-700 dark:bg-slate-800"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/30">
              <CheckCircle2 className="h-8 w-8 text-success-600 dark:text-success-400" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">
              Appointment Requested!
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Thank you, {form.name.split(' ')[0]}! We've received your appointment request for{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {form.department}
              </span>{' '}
              on{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {new Date(form.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>{' '}
              at {form.time}. Our team will call you shortly to confirm.
            </p>
            <div className="mt-6 rounded-xl bg-primary-50 p-4 text-left text-sm dark:bg-primary-950/30">
              <p className="font-semibold text-primary-700 dark:text-primary-300">
                What happens next?
              </p>
              <ul className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-400">
                <li>• You'll receive a confirmation call within 2 hours</li>
                <li>• A reminder SMS will be sent 24 hours before your visit</li>
                <li>• Please arrive 15 minutes before your scheduled time</li>
              </ul>
            </div>
            <button onClick={closeBooking} className="btn-primary mt-6 w-full justify-center">
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Book an Appointment
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fill in your details and we'll confirm shortly
                  </p>
                </div>
              </div>
              <button
                onClick={closeBooking}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6" noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="bk-name" className="label-field">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="bk-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="John Doe"
                      className={`input-field pl-10 ${errors.name ? 'border-error-400 focus:border-error-500 focus:ring-error-500/20' : ''}`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-email" className="label-field">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="bk-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`input-field pl-10 ${errors.email ? 'border-error-400 focus:border-error-500 focus:ring-error-500/20' : ''}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="bk-phone" className="label-field">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="bk-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={`input-field pl-10 ${errors.phone ? 'border-error-400 focus:border-error-500 focus:ring-error-500/20' : ''}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="bk-dept" className="label-field">
                    Department
                  </label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <select
                      id="bk-dept"
                      value={form.department}
                      onChange={(e) => updateField('department', e.target.value)}
                      className={`input-field appearance-none pl-10 ${
                        form.department ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'
                      } ${errors.department ? 'border-error-400 focus:border-error-500 focus:ring-error-500/20' : ''}`}
                    >
                      <option value="">Select a department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                      <AlertCircle className="h-3 w-3" />
                      {errors.department}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-date" className="label-field">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="bk-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => updateField('date', e.target.value)}
                        className={`input-field pl-10 ${errors.date ? 'border-error-400 focus:border-error-500 focus:ring-error-500/20' : ''}`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                        <AlertCircle className="h-3 w-3" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="bk-time" className="label-field">
                      Preferred Time
                    </label>
                    <select
                      id="bk-time"
                      value={form.time}
                      onChange={(e) => updateField('time', e.target.value)}
                      className="input-field appearance-none text-slate-900 dark:text-slate-100"
                    >
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t} {Number(t.split(':')[0]) < 12 ? 'AM' : 'PM'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="bk-notes" className="label-field">
                    Additional Notes <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea
                    id="bk-notes"
                    value={form.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    rows={3}
                    placeholder="Any specific symptoms or concerns you'd like to share..."
                    className="input-field resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-6 w-full justify-center disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    Request Appointment
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                By submitting, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
