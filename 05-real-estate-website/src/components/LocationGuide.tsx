import { useState } from 'react';
import { MapPin, Home, ChevronRight } from 'lucide-react';
import { neighborhoods } from '@/data';

export default function LocationGuide() {
  const [selected, setSelected] = useState(0);
  const current = neighborhoods[selected];

  return (
    <section id="locations" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="text-center mb-14">
          <span className="text-champagne-300 font-sans text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
            Explore Areas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight">
            Neighborhood Guide
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto font-light">
            Discover what makes each area unique, from local culture to property values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              key={current.id}
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-3xl text-white mb-2">{current.name}</h3>
              <div className="flex gap-4">
                <span className="text-champagne-300 text-sm">{current.avgPrice}</span>
                <span className="text-white/60 text-sm">{current.properties} Properties Available</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mb-6">
              {neighborhoods.map((n, i) => (
                <button
                  key={n.id}
                  onClick={() => setSelected(i)}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 text-left ${
                    i === selected
                      ? 'bg-champagne-500/20 border border-champagne-500/40'
                      : 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${i === selected ? 'text-champagne-300' : 'text-slate-400'}`} />
                    <div>
                      <p className={`font-serif text-lg ${i === selected ? 'text-champagne-300' : 'text-white'}`}>
                        {n.name}
                      </p>
                      <p className="text-xs text-slate-400">{n.properties} listings · {n.avgPrice}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${i === selected ? 'text-champagne-300 translate-x-1' : 'text-slate-500'}`} />
                </button>
              ))}
            </div>

            <div key={current.id} className="animate-fade-in">
              <p className="text-white/70 leading-relaxed mb-6">{current.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {current.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                    <Home className="w-4 h-4 text-champagne-300" />
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#properties"
                className="inline-flex items-center gap-2 mt-6 text-champagne-300 text-sm font-medium hover:text-champagne-200 transition-colors"
              >
                Browse {current.name} Properties
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
