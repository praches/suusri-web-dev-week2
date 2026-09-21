import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => { setActive((prev) => (prev + 1) % testimonials.length); setAutoPlay(false); };
  const prev = () => { setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length); setAutoPlay(false); };

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-6 left-0 w-20 h-20 text-champagne-200" />

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-champagne-500 fill-champagne-500" />
                      ))}
                    </div>
                    <p className="font-serif text-2xl md:text-3xl text-slate-700 font-light italic leading-relaxed text-balance mb-8">
                      "{t.quote}"
                    </p>
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-champagne-300"
                    />
                    <p className="font-medium text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-champagne-500 hover:text-champagne-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'bg-champagne-500 w-8' : 'bg-slate-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-champagne-500 hover:text-champagne-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
