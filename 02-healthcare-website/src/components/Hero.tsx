import { Calendar, FlaskConical, Phone, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { HOSPITAL, HERO_IMAGE, FACILITIES } from '@/data/content';
import { useBooking } from '@/lib/booking';

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-secondary-200/30 blur-3xl dark:bg-secondary-900/20" />
      </div>

      <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start">
          <div className="section-eyebrow mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by 250,000+ patients
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Your Health,
            <br />
            <span className="text-gradient">Our Lifelong Commitment</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            World-class medical care and diagnostics under one roof. From routine check-ups to
            advanced treatments, our expert team is here for you and your family — 24 hours a day,
            7 days a week.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => openBooking()} className="btn-primary group">
              <Calendar className="h-4 w-4" />
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => openBooking()} className="btn-secondary group">
              <FlaskConical className="h-4 w-4" />
              Book Your Test
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                4.9/5 from 3,200+ reviews
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
            <a
              href={`tel:${HOSPITAL.hotline}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400"
            >
              <Phone className="h-4 w-4" />
              {HOSPITAL.hotline}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {FACILITIES.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-2 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
              >
                <f.icon className="h-3.5 w-3.5 text-primary-500" />
                {f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
            <img
              src={HERO_IMAGE}
              alt="Modern hospital building"
              className="h-[400px] w-full object-cover lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-soft-lg dark:border-slate-700 dark:bg-slate-800 sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100 dark:bg-success-900/30">
                <ShieldCheck className="h-6 w-6 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Patient Safety Record</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-soft-lg dark:border-slate-700 dark:bg-slate-800 md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Same-Day</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
