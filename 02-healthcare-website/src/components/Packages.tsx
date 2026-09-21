import { Check, ArrowRight, Star } from 'lucide-react';
import { PACKAGES } from '@/data/content';
import { useBooking } from '@/lib/booking';

export function Packages() {
  const { openBooking } = useBooking();

  return (
    <section id="packages" className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <Star className="h-3.5 w-3.5" />
            Health Packages
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Diagnostic packages for every need
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Comprehensive health check-up packages at transparent prices. Book online and get tested at your convenience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3" data-gsap-stagger>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              data-gsap-item
              className={`relative overflow-hidden rounded-3xl border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:bg-slate-800 ${
                pkg.popular
                  ? 'border-secondary-400 ring-2 ring-secondary-400/30 dark:border-secondary-500'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-secondary-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.color} text-white shadow-soft`}>
                <pkg.icon className="h-7 w-7" />
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {pkg.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {pkg.description}
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  ${pkg.price}
                </span>
                {pkg.originalPrice && (
                  <span className="text-lg font-medium text-slate-400 line-through">
                    ${pkg.originalPrice}
                  </span>
                )}
              </div>

              <div className="mt-6 space-y-2.5">
                {pkg.tests.map((test) => (
                  <div key={test} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/30">
                      <Check className="h-3 w-3 text-success-600 dark:text-success-400" />
                    </div>
                    {test}
                  </div>
                ))}
              </div>

              <button
                onClick={() => openBooking('Diagnostics & Pathology')}
                className={`mt-7 w-full justify-center gap-2 ${
                  pkg.popular ? 'btn-secondary' : 'btn-primary'
                } group`}
              >
                Book This Package
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          All packages include free home sample collection within city limits. Reports delivered within 24 hours.
        </p>
      </div>
    </section>
  );
}
