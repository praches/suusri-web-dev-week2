import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Properties', href: '#properties' },
  { label: 'Categories', href: '#categories' },
  { label: 'Agents', href: '#agents' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#enquiry' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <Building2
            className={`w-8 h-8 transition-colors duration-500 ${
              scrolled ? 'text-champagne-500' : 'text-champagne-400'
            }`}
          />
          <span
            className={`font-serif text-2xl font-medium tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            LuxEstate
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                scrolled
                  ? 'text-slate-600 hover:text-champagne-600'
                  : 'text-white/90 hover:text-champagne-300'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#enquiry" className="hidden lg:inline-flex btn-gold">
          Enquire Now
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <nav className="container-luxury flex flex-col gap-1 bg-cream-50 rounded-lg shadow-xl p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-slate-700 hover:bg-champagne-50 hover:text-champagne-600 rounded-md text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setMobileOpen(false)}
            className="btn-gold mt-2"
          >
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  );
}
