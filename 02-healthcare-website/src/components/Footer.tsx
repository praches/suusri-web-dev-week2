import { Activity, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { HOSPITAL, NAV_LINKS } from '@/data/content';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-lg font-extrabold text-white">{HOSPITAL.name}</span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  {HOSPITAL.tagline}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Providing world-class healthcare and diagnostics with compassion, expertise, and
              cutting-edge technology since 2009.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, href: HOSPITAL.socials.facebook },
                { icon: Twitter, href: HOSPITAL.socials.twitter },
                { icon: Instagram, href: HOSPITAL.socials.instagram },
                { icon: Linkedin, href: HOSPITAL.socials.linkedin },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-primary-600 hover:text-white"
                  aria-label="Social media link"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {['Emergency Care', 'Diagnostics & Pathology', 'Health Check-ups', 'Home Sample Collection', 'Telemedicine', 'Vaccination'].map(
                (s) => (
                  <li key={s}>
                    <a href="#departments" className="text-sm text-slate-400 transition-colors hover:text-primary-400">
                      {s}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary-400" />
                {HOSPITAL.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-400" />
                {HOSPITAL.hotline}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-400" />
                {HOSPITAL.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {HOSPITAL.name}. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-primary-600 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
