import { ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE } from '@/data/content';

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-white dark:bg-slate-900">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Healthcare you can trust, every step of the way
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We are committed to delivering exceptional medical care with a patient-first approach.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-gsap-stagger>
          {WHY_CHOOSE.map((feature) => (
            <div
              key={feature.title}
              data-gsap-item
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-soft">
                <feature.icon className="h-7 w-7" />
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-700">
                <p className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {feature.stat}
                </p>
                <p className="text-xs font-medium text-slate-400">{feature.statLabel}</p>
              </div>

              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-primary-950/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
