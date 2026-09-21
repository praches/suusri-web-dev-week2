import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

export function Testimonials() {
  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <Quote className="h-3.5 w-3.5" />
            Patient Stories
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What our patients say about us
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Real stories from real patients who trusted us with their health.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3" data-gsap-stagger>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              data-gsap-item
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-soft-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                ))}
              </div>

              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-100 dark:text-primary-900/40" />

              <p className="relative flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-700">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
