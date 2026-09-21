import { Phone, Mail, Star, TrendingUp } from 'lucide-react';
import { agents } from '@/data';

export default function Agents() {
  return (
    <section id="agents" className="py-24 bg-cream-100">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <span className="section-label">Meet the Team</span>
          <h2 className="section-title">Our Real Estate Experts</h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto font-light">
            Knowledgeable, connected, and committed to finding you the perfect property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="agent-card group bg-white rounded-xl overflow-hidden shadow-md card-elevation"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={`tel:${agent.phone}`}
                    className="w-9 h-9 bg-champagne-500 rounded-full flex items-center justify-center text-white hover:bg-champagne-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="w-9 h-9 bg-champagne-500 rounded-full flex items-center justify-center text-white hover:bg-champagne-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-serif text-xl text-slate-900 font-medium">{agent.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{agent.title}</p>

                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-champagne-500 fill-champagne-500" />
                    <span className="text-sm font-medium text-slate-700">{agent.rating}</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200" />
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <TrendingUp className="w-4 h-4 text-champagne-500" />
                    <span className="text-sm font-medium">{agent.sales} Sales</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
