import { Star, Calendar, Quote } from 'lucide-react';
import { DOCTORS } from '@/data/content';
import { useBooking } from '@/lib/booking';

export function Doctors() {
  const { openBooking } = useBooking();

  return (
    <section id="doctors" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <Quote className="h-3.5 w-3.5" />
            Our Specialists
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Meet our team of expert doctors
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Board-certified specialists with decades of combined experience, dedicated to your health.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-gsap-stagger>
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              data-gsap-item
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800 backdrop-blur dark:bg-slate-900/90 dark:text-white">
                  <Star className="h-3 w-3 fill-warning-400 text-warning-400" />
                  {doc.rating}
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-primary-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {doc.department}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {doc.name}
                </h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {doc.specialty}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {doc.bio}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {doc.experience}
                  </span>
                  <button
                    onClick={() => openBooking(doc.department)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-3 py-2 text-xs font-semibold text-primary-600 transition-all hover:bg-primary-100 active:scale-95 dark:bg-primary-950/40 dark:text-primary-400 dark:hover:bg-primary-900/40"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
