import { Brain, Atom, Zap } from 'lucide-react';

const PILLARS = [
  {
    icon: Brain,
    title: 'Adaptive Intelligence',
    desc: 'A single neural core that learns context across domains — from spatial reasoning to language, vision, and physics simulation.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Atom,
    title: 'Physics-Native',
    desc: 'Every interaction is governed by a real rigid-body engine. Objects carry mass, momentum, and friction — not scripted animations.',
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Response',
    desc: 'Sub-frame collision detection and GSAP-driven visual feedback ensure the world reacts the instant you touch it.',
    color: 'from-violet-400 to-indigo-500',
  },
];

export default function ConceptExplainer() {
  return (
    <section
      id="concept"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-[#05060f]/80 to-[#05060f]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs text-cyan-400 tracking-widest uppercase font-medium">
            The Concept
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            One core. Every dimension.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            SuuSri AI isn't a collection of models — it's a unified intelligence
            that operates across physical and abstract domains simultaneously.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{p.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/5 group-hover:to-fuchsia-500/5 transition-all pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
