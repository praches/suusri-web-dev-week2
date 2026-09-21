import { useEffect, useState } from 'react';
import { Phone, Menu, X, Moon, Sun, Calendar, Activity } from 'lucide-react';
import { HOSPITAL, NAV_LINKS } from '@/data/content';
import { useTheme } from '@/lib/theme';
import { useBooking } from '@/lib/booking';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-primary-700 text-white lg:block">
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {HOSPITAL.hotline}
            </span>
            <span className="text-primary-200">{HOSPITAL.hotlineLabel}</span>
          </div>
          <div className="flex items-center gap-4 text-primary-200">
            <span>{HOSPITAL.email}</span>
            <span className="h-3 w-px bg-primary-500" />
            <span>{HOSPITAL.hours}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-soft backdrop-blur-md dark:bg-slate-900/90'
            : 'bg-white dark:bg-slate-900'
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between lg:h-18">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-soft">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                {HOSPITAL.name}
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                {HOSPITAL.tagline}
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => openBooking()}
              className="hidden items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-700 hover:shadow-glow active:scale-95 sm:flex"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
                className="btn-primary mt-2"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700">
              <Phone className="h-4 w-4 text-primary-600" />
              {HOSPITAL.hotline}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
