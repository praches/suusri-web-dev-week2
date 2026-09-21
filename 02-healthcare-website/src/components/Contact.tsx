import { Phone, Mail, MapPin, Clock, Ambulance, Navigation } from 'lucide-react';
import { HOSPITAL } from '@/data/content';

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="gsap-slide-left">
            <div className="section-eyebrow mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Location & Contact
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              We're here when you need us
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Visit us at our conveniently located facility or reach out through any of the channels below.
              Our team is available around the clock for emergencies.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Our Address</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{HOSPITAL.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-error-200 bg-error-50 p-5 dark:border-error-800 dark:bg-error-950/30">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-error-100 dark:bg-error-900/40">
                  <Ambulance className="h-6 w-6 text-error-600 dark:text-error-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-error-700 dark:text-error-400">
                    Emergency Hotline — 24/7
                  </p>
                  <a
                    href={`tel:${HOSPITAL.hotline}`}
                    className="mt-1 block text-2xl font-bold text-error-600 dark:text-error-400"
                  >
                    {HOSPITAL.hotline}
                  </a>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Ambulance dispatch available within city limits
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Reception</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{HOSPITAL.hotline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{HOSPITAL.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Operating Hours</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{HOSPITAL.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-slide-right">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft-lg dark:border-slate-700">
              <iframe
                title="Hospital Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.74%2C-73.99%2C40.76&layer=mapnik&marker=40.751%2C-74.005"
                className="h-[400px] w-full lg:h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=40.751&mlon=-74.005#map=15/40.751/-74.005"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400"
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
