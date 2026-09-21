import {
  MousePointerClick,
  Layers,
  Gauge,
  Smartphone,
  Eye,
  Boxes,
} from 'lucide-react';

const FEATURES = [
  {
    icon: MousePointerClick,
    title: 'Drag & Throw Physics',
    desc: 'Raycaster-based interaction with realistic momentum. Release mid-drag to fling objects across the scene.',
  },
  {
    icon: Boxes,
    title: 'Dynamic Spawning',
    desc: 'Inject cubes, spheres, and toruses at will. Each carries unique mass, color, and angular velocity.',
  },
  {
    icon: Gauge,
    title: 'Gravity Switching',
    desc: 'Cycle between normal, zero-G, and inverted gravity. Bodies wake instantly and respond in real time.',
  },
  {
    icon: Eye,
    title: 'Collision Feedback',
    desc: 'Impacts trigger emissive color flashes and elastic scale bounces via GSAP — visual feedback on every hit.',
  },
  {
    icon: Layers,
    title: 'Synced Physics',
    desc: 'A 60 FPS Cannon-es world drives Three.js meshes frame-by-frame. Rigid bodies, constraints, and sleep states.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    desc: 'Device detection reduces object count and disables heavy shadows on small screens for smooth performance.',
  },
];

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#05060f] via-[#080a18] to-[#05060f]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs text-violet-400 tracking-widest uppercase font-medium">
            Features & Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Engineered for immersion
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every capability is built on a real physics engine — not canned
            animations. This is what interactive 3D on the web should feel like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group p-7 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30 transition-all">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
