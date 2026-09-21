import { useState } from 'react';
import { ChevronDown, AlertTriangle, Stethoscope, ArrowRight } from 'lucide-react';
import { SYMPTOMS } from '@/data/content';
import { useBooking } from '@/lib/booking';

const severityConfig = {
  low: { label: 'Low Priority', color: 'text-success-600 dark:text-success-400', bg: 'bg-success-50 dark:bg-success-950/30', border: 'border-success-200 dark:border-success-800' },
  medium: { label: 'Medium Priority', color: 'text-warning-600 dark:text-warning-400', bg: 'bg-warning-50 dark:bg-warning-950/30', border: 'border-warning-200 dark:border-warning-800' },
  high: { label: 'Urgent — Seek Immediate Care', color: 'text-error-600 dark:text-error-400', bg: 'bg-error-50 dark:bg-error-950/30', border: 'border-error-200 dark:border-error-800' },
};

export function SymptomChecker() {
  const [openId, setOpenId] = useState<string | null>(SYMPTOMS[0].id);
  const { openBooking } = useBooking();

  return (
    <section className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <Stethoscope className="h-3.5 w-3.5" />
            Symptom Checker
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Not sure which department to visit?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Use our interactive symptom checker to get quick guidance on the right care for your concerns.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3 gsap-fade-up">
          {SYMPTOMS.map((item) => {
            const isOpen = openId === item.id;
            const cfg = severityConfig[item.severity];
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition-all duration-300 dark:bg-slate-800 ${
                  isOpen ? cfg.border : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg}`}>
                    <item.icon className={`h-5 w-5 ${cfg.color}`} />
                  </div>
                  <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-white lg:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <div className="ml-0 border-t border-slate-100 pt-4 dark:border-slate-700 lg:ml-15">
                        {item.severity === 'high' && (
                          <div className={`mb-3 flex items-center gap-2 rounded-lg ${cfg.bg} px-3 py-2 ${cfg.color}`}>
                            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                            <span className="text-xs font-semibold">{cfg.label}</span>
                          </div>
                        )}

                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Common symptoms to watch for:
                        </p>
                        <ul className="space-y-1.5">
                          {item.symptoms.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                              <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${cfg.color.replace('text-', 'bg-')}`} />
                              {s}
                            </li>
                          ))}
                        </ul>

                        <div className={`mt-4 rounded-xl ${cfg.bg} p-4`}>
                          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                            <span className="font-semibold">Recommendation: </span>
                            {item.recommendation}
                          </p>
                        </div>

                        <button
                          onClick={() => openBooking()}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
                        >
                          Book a consultation
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-slate-400">
          This symptom checker is for informational purposes only and does not replace professional medical advice. Always consult a qualified healthcare provider for proper diagnosis.
        </p>
      </div>
    </section>
  );
}
