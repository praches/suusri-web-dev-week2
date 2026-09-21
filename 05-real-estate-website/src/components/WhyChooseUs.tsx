import { Award, ShieldCheck, Users, TrendingUp, Headphones, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized by the National Association of Realtors for excellence in luxury property sales for five consecutive years.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Verified',
    description: 'Every listing undergoes a rigorous verification process. What you see is exactly what you get — no surprises.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Our team brings decades of combined experience and deep local knowledge to every transaction.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'We sell properties 30% faster than the market average, often above asking price.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'A personal advisor guides you through every step, from first viewing to final signature.',
  },
  {
    icon: Handshake,
    title: 'Client-First Approach',
    description: 'We negotiate hard on your behalf and never forget that our reputation is built on your satisfaction.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-500 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="text-center mb-14">
          <span className="text-champagne-300 font-sans text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
            Why LuxEstate
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight">
            A Different Kind of Agency
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto font-light">
            We do not just sell properties. We craft experiences and build relationships that last well beyond the closing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="why-card group p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-champagne-500/50 hover:bg-slate-800 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-champagne-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-champagne-500/20 transition-colors">
                <reason.icon className="w-7 h-7 text-champagne-300" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
