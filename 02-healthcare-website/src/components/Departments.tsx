import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { DEPARTMENTS } from '@/data/content';
import { useBooking } from '@/lib/booking';

export function Departments() {
  const [active, setActive] = useState(0);
  const { openBooking } = useBooking();
  const dept = DEPARTMENTS[active];

  return (
    <section id="departments" className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <ArrowRight className="h-3.5 w-3.5" />
            Our Departments
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Specialized care across every field
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Explore our departments to learn about the specialized services and treatments we offer.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 lg:gap-3" data-gsap-stagger>
          {DEPARTMENTS.map((d, i) => (
            <button
              key={d.id}
              data-gsap-item
              onClick={() => setActive(i)}
              className={`group flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 lg:px-5 lg:py-3.5 ${
                active === i
                  ? 'border-primary-500 bg-primary-600 text-white shadow-soft-lg'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-primary-500'
              }`}
            >
              <d.icon className="h-4 w-4" />
              {d.name}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft-lg dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="grid lg:grid-cols-5">
            <div className={`bg-gradient-to-br ${dept.color} p-8 lg:col-span-2 lg:p-12`}>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <dept.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white lg:text-3xl">
                {dept.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90">{dept.description}</p>
              <button
                onClick={() => openBooking(dept.name)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/30 active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
              </button>
            </div>

            <div className="p-8 lg:col-span-3 lg:p-12">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Services & Treatments
              </h4>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {dept.services.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5 transition-colors hover:border-primary-200 hover:bg-primary-50/50 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary-700 dark:hover:bg-primary-950/20"
                    style={{
                      animation: `slideUp 0.4s ease-out ${i * 0.06}s both`,
                    }}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40">
                      <dept.icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
