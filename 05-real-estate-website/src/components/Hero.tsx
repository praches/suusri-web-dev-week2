import { useState, useRef } from 'react';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';
import { propertyTypes, priceRanges } from '@/data';

interface HeroProps {
  onSearch: (filters: { type: string; location: string; price: number }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState('All');
  const [location, setLocation] = useState('');
  const [priceIndex, setPriceIndex] = useState(0);
  const [typeOpen, setTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const handleSearch = () => {
    const range = priceRanges[priceIndex];
    onSearch({
      type,
      location,
      price: range.max === Infinity ? range.min : range.max,
    });
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={heroRef} className="hero-bg absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80" />
      </div>

      <div className="container-luxury relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-champagne-300 font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Discover Extraordinary Living
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-light leading-[1.1] text-balance animate-slide-up">
            Find Your Forever
            <span className="block text-champagne-300 italic">Address</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
            Explore an exclusive collection of luxury homes, estates, and commercial
            properties curated for those who expect more from where they live and work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 bg-cream-50/95 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Property Type
              </label>
              <button
                onClick={() => { setTypeOpen(!typeOpen); setPriceOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-md text-sm text-slate-700 hover:border-champagne-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-champagne-500" />
                  {type}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${typeOpen ? 'rotate-180' : ''}`} />
              </button>
              {typeOpen && (
                <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg z-20">
                  {propertyTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setType(t); setTypeOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-champagne-50 transition-colors ${
                        type === t ? 'text-champagne-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-500" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or area"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-md text-sm text-slate-700 placeholder:text-slate-400 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Price Range
              </label>
              <button
                onClick={() => { setPriceOpen(!priceOpen); setTypeOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-md text-sm text-slate-700 hover:border-champagne-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-champagne-500" />
                  {priceRanges[priceIndex].label}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${priceOpen ? 'rotate-180' : ''}`} />
              </button>
              {priceOpen && (
                <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg z-20">
                  {priceRanges.map((r, i) => (
                    <button
                      key={r.label}
                      onClick={() => { setPriceIndex(i); setPriceOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-champagne-50 transition-colors ${
                        priceIndex === i ? 'text-champagne-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="btn-gold w-full"
              >
                <Search className="w-4 h-4" />
                Explore Properties
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          {[
            { value: '500+', label: 'Properties Sold' },
            { value: '25', label: 'Years of Excellence' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-champagne-300 font-light">{stat.value}</p>
              <p className="text-white/60 text-xs tracking-wider uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
