import { useState, useRef } from 'react';
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';
import { type Property, formatPrice } from '@/data';

interface PropertyCardProps {
  property: Property;
  onQuickView: (property: Property) => void;
  onEnquire: (property: Property) => void;
}

export default function PropertyCard({ property, onQuickView, onEnquire }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const touchStartX = useRef(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
      } else {
        setCurrentImage((prev) => (prev + 1) % property.images.length);
      }
    }
  };

  return (
    <article className="card-elevation bg-white rounded-xl overflow-hidden shadow-md group">
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onQuickView(property)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {property.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${property.title} ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-champagne-500 text-white text-xs font-medium tracking-wide rounded-sm uppercase">
            {property.status}
          </span>
          <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-medium tracking-wide rounded-sm">
            {property.type}
          </span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); setFavorited(!favorited); }}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Favorite"
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-champagne-500 text-champagne-500' : 'text-slate-600'}`} />
        </button>

        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === currentImage ? 'bg-champagne-400 w-4' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
          <MapPin className="w-3 h-3" />
          <span>{property.location}</span>
        </div>
        <h3 className="font-serif text-xl text-slate-900 font-medium mb-3">{property.title}</h3>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
          {property.beds > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-champagne-500" />
              {property.beds} Beds
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-champagne-500" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-champagne-500" />
            {property.area.toLocaleString()} ft²
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Price</p>
            <p className="font-serif text-2xl text-slate-900 font-medium">{formatPrice(property.price)}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onQuickView(property)}
              className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-md text-slate-600 hover:border-champagne-500 hover:text-champagne-600 transition-colors"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onEnquire(property)}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-medium tracking-wide uppercase rounded-md hover:bg-champagne-600 transition-colors"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
