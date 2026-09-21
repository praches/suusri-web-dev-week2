import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { properties, propertyTypes, priceRanges, type Property } from '@/data';
import PropertyCard from './PropertyCard';

interface FeaturedPropertiesProps {
  onQuickView: (property: Property) => void;
  onEnquire: (property: Property) => void;
  searchFilters: { type: string; location: string; price: number };
}

export default function FeaturedProperties({ onQuickView, onEnquire, searchFilters }: FeaturedPropertiesProps) {
  const [filterType, setFilterType] = useState(searchFilters.type || 'All');
  const [filterPrice, setFilterPrice] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const effectiveType = searchFilters.type || filterType;
  const effectivePrice = searchFilters.price || 0;

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const typeMatch = effectiveType === 'All' || p.type === effectiveType;
      const locationMatch =
        !searchFilters.location ||
        p.location.toLowerCase().includes(searchFilters.location.toLowerCase());
      const range = priceRanges[filterPrice];
      const priceMatch = p.price >= range.min && p.price <= range.max;
      const searchPriceMatch = !effectivePrice || p.price <= effectivePrice * 1.5;
      return typeMatch && locationMatch && priceMatch && searchPriceMatch;
    });
  }, [effectiveType, effectivePrice, searchFilters.location, filterPrice]);

  const resetFilters = () => {
    setFilterType('All');
    setFilterPrice(0);
    setShowFilters(false);
  };

  return (
    <section id="properties" className="py-24 bg-cream-100">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <span className="section-label">Featured Listings</span>
          <h2 className="section-title">Discover Our Premium Properties</h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto font-light">
            Each property in our collection is hand-selected for its quality, location, and distinctive character.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  effectiveType === type
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-2 bg-white text-slate-600 text-sm font-medium rounded-full hover:bg-slate-100 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Price Filter
            {filterPrice > 0 && (
              <span className="w-2 h-2 bg-champagne-500 rounded-full" />
            )}
          </button>
        </div>

        {showFilters && (
          <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-white rounded-xl shadow-sm animate-fade-in">
            <span className="text-sm font-medium text-slate-600">Price:</span>
            {priceRanges.map((range, i) => (
              <button
                key={range.label}
                onClick={() => setFilterPrice(i)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                  filterPrice === i
                    ? 'bg-champagne-500 text-white'
                    : 'bg-cream-100 text-slate-600 hover:bg-cream-200'
                }`}
              >
                {range.label}
              </button>
            ))}
            {(filterPrice > 0 || effectiveType !== 'All') && (
              <button
                onClick={resetFilters}
                className="ml-auto flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
                Clear Filters
              </button>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No properties match your search. Try adjusting your filters.</p>
            <button onClick={resetFilters} className="btn-outline mt-4">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <div key={property.id} className="property-card-reveal">
                <PropertyCard
                  property={property}
                  onQuickView={onQuickView}
                  onEnquire={onEnquire}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
