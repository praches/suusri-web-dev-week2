import { Home, Building, Briefcase, Castle } from 'lucide-react';
import { properties, type Property } from '@/data';

interface PropertyCategoriesProps {
  onSelectCategory: (type: string) => void;
}

const categories = [
  {
    type: 'Villa' as Property['type'],
    icon: Home,
    title: 'Villas',
    description: 'Private residences with expansive grounds, pools, and bespoke architecture designed for refined living.',
    image: 'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    type: 'Apartment' as Property['type'],
    icon: Building,
    title: 'Apartments',
    description: 'Urban sanctuaries in the sky. Full-service buildings with concierge, fitness, and panoramic views.',
    image: 'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    type: 'Commercial' as Property['type'],
    icon: Briefcase,
    title: 'Commercial',
    description: 'Prime office, retail, and mixed-use spaces in the most strategic business districts.',
    image: 'https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    type: 'Luxury Estate' as Property['type'],
    icon: Castle,
    title: 'Luxury Estates',
    description: 'Grand estates on acreage with guest houses, gardens, and amenities for the most discerning buyer.',
    image: 'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function PropertyCategories({ onSelectCategory }: PropertyCategoriesProps) {
  const handleSelect = (type: string) => {
    onSelectCategory(type);
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-24 bg-cream-50">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="section-label">Browse by Type</span>
          <h2 className="section-title">Property Categories</h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto font-light">
            Whether you seek a beachfront villa, a city penthouse, or a commercial investment, we have the perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const count = properties.filter((p) => p.type === cat.type).length;
            return (
              <button
                key={cat.type}
                onClick={() => handleSelect(cat.type)}
                className="category-card group relative h-80 rounded-xl overflow-hidden text-left card-elevation"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <cat.icon className="w-8 h-8 text-champagne-300 mb-3" />
                  <h3 className="font-serif text-2xl text-white font-medium">{cat.title}</h3>
                  <p className="text-white/70 text-sm mt-2 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-champagne-300 text-xs tracking-wider uppercase">{count} Listings</span>
                    <span className="text-white/60 text-sm group-hover:text-champagne-300 group-hover:translate-x-1 transition-all">
                      View →
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
