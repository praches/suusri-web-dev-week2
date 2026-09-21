import { CheckCircle2, Users, Award, Activity, Heart } from 'lucide-react';
import { ABOUT_IMAGE, ABOUT_IMAGE_2, STATS } from '@/data/content';

export function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative gsap-slide-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={ABOUT_IMAGE}
                  alt="Medical team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={ABOUT_IMAGE_2}
                  alt="Healthcare professionals"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="grid grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-xl font-bold text-primary-600 dark:text-primary-400 lg:text-2xl"
                      data-counter={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0{stat.suffix}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400 lg:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gsap-slide-right">
            <div className="section-eyebrow mb-5">
              <Heart className="h-3.5 w-3.5" />
              About Us
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Three decades of trusted healthcare excellence
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Founded in 2009, MediCare+ has grown from a small community clinic into a
              comprehensive healthcare and diagnostics center serving over 250,000 patients
              across the region. We combine compassionate care with cutting-edge technology.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Our mission is simple: deliver world-class medical care that is accessible,
              affordable, and centered around you. Every patient is treated with dignity,
              respect, and the full weight of our expertise.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, title: 'Accredited Quality', text: 'NABL & NABH certified facilities' },
                { icon: Users, title: 'Expert Team', text: '80+ board-certified specialists' },
                { icon: Activity, title: 'Advanced Technology', text: 'Latest diagnostic equipment' },
                { icon: Heart, title: 'Patient-Centered', text: 'Care tailored to your needs' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-950/40">
                    <item.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-2.5">
              {[
                'Same-day appointments for urgent cases',
                'Home sample collection for diagnostic tests',
                'Transparent pricing with no hidden charges',
                'Insurance and cashless treatment available',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
