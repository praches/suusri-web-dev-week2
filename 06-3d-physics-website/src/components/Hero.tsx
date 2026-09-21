import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 z-10 pointer-events-none"
    >
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-gray-300 tracking-wide uppercase">
            3D Physics Experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
          One Intelligence.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            Infinite Solutions.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          SuuSri AI fuses real-time 3D physics with adaptive intelligence.
          Drag, throw, and reshape a living cybernetic world — every object
          responds with lifelike momentum and collision feedback.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button
            onClick={() => {
              document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium text-base shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all hover:scale-105 flex items-center gap-2"
          >
            Enter the Experience
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
          <button
            onClick={() => {
              document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white font-medium text-base hover:bg-white/10 transition-all"
          >
            Learn More
          </button>
        </div>

        <p className="mt-12 text-xs text-gray-500 tracking-widest uppercase animate-pulse pointer-events-auto">
          ↓ Drag any object with your mouse ↓
        </p>
      </div>
    </section>
  );
}
