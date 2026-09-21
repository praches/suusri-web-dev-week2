import { useState } from 'react';
import { Images } from 'lucide-react';
import { GALLERY } from '@/data/content';

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Facilities', 'Laboratory'];
  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-px">
        <div className="mx-auto mb-10 max-w-2xl text-center gsap-fade-up">
          <div className="section-eyebrow mb-4">
            <Images className="h-3.5 w-3.5" />
            Facilities Gallery
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Take a look inside our facilities
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Modern, comfortable, and equipped with the latest medical technology.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-soft'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
          {items.map((item) => (
            <div
              key={item.id}
              data-gsap-item
              className="group relative overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="badge bg-primary-500/90 text-white backdrop-blur">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
