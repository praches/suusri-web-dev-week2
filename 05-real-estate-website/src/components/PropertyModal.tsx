import { useEffect, useState } from 'react';
import { X, Bed, Bath, Maximize, MapPin, Check, Phone, Mail, Calendar } from 'lucide-react';
import { type Property, formatPrice, agents } from '@/data';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
}

export default function PropertyModal({ property, onClose, onEnquire }: PropertyModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (property) {
      setCurrentImage(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [property]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!property) return null;

  const agent = agents.find((a) => a.id === property.agentId);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      <div
        className="relative bg-cream-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        <div className="relative h-80 md:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-champagne-500 text-white text-xs font-medium tracking-wide rounded-sm uppercase">
              {property.status}
            </span>
            <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-medium tracking-wide rounded-sm">
              {property.type}
            </span>
          </div>
          {property.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImage ? 'bg-champagne-400 w-6' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1 text-slate-400 text-sm mb-1">
                <MapPin className="w-3 h-3" />
                <span>{property.location}</span>
              </div>
              <h2 className="font-serif text-3xl text-slate-900 font-medium">{property.title}</h2>
            </div>
            <p className="font-serif text-3xl text-champagne-600 font-medium whitespace-nowrap">
              {formatPrice(property.price)}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {property.beds > 0 && (
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <Bed className="w-5 h-5 text-champagne-500 mx-auto mb-2" />
                <p className="font-serif text-xl text-slate-900">{property.beds}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Bedrooms</p>
              </div>
            )}
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <Bath className="w-5 h-5 text-champagne-500 mx-auto mb-2" />
              <p className="font-serif text-xl text-slate-900">{property.baths}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Bathrooms</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <Maximize className="w-5 h-5 text-champagne-500 mx-auto mb-2" />
              <p className="font-serif text-xl text-slate-900">{property.area.toLocaleString()}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">ft²</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-serif text-xl text-slate-900 mb-3">About This Property</h3>
            <p className="text-slate-600 leading-relaxed">{property.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-serif text-xl text-slate-900 mb-3">Features & Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-champagne-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {property.images.length > 1 && (
            <div className="mb-6">
              <h3 className="font-serif text-xl text-slate-900 mb-3">Gallery</h3>
              <div className="grid grid-cols-4 gap-3">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImage ? 'border-champagne-500' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {agent && (
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl p-5 shadow-sm mb-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="font-serif text-lg text-slate-900">{agent.name}</p>
                <p className="text-sm text-slate-400">{agent.title}</p>
                <div className="flex flex-wrap gap-4 mt-2 justify-center sm:justify-start text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-champagne-500" />
                    {agent.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-champagne-500" />
                    {agent.email}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => { onEnquire(property); onClose(); }}
              className="btn-gold flex-1"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Viewing
            </button>
            <button onClick={onClose} className="btn-outline">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
