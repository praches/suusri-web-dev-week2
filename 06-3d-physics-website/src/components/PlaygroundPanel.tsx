import { Sparkles, RefreshCw, ArrowUpDown, Plus, Box } from 'lucide-react';
import type { PlaygroundControls } from './PhysicsScene';

interface PlaygroundPanelProps {
  controls: PlaygroundControls | null;
  collisionFlash: boolean;
}

const GRAVITY_LABELS: Record<string, { label: string; color: string }> = {
  normal: { label: 'Normal Gravity', color: 'text-cyan-400' },
  zero: { label: 'Zero-G', color: 'text-violet-400' },
  inverted: { label: 'Inverted Gravity', color: 'text-fuchsia-400' },
};

export default function PlaygroundPanel({ controls, collisionFlash }: PlaygroundPanelProps) {
  const gMode = controls?.gravityMode ?? 'normal';
  const count = controls?.objectCount ?? 0;
  const gInfo = GRAVITY_LABELS[gMode];

  return (
    <section
      id="playground"
      className="relative z-10 py-24 px-6 bg-[#05060f]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs text-fuchsia-400 tracking-widest uppercase font-medium">
            Interactive Playground
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Take control of the physics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Spawn objects, flip gravity, and reset the world. Drag any shape
            with your mouse or finger to throw it — momentum carries through.
          </p>
        </div>

        <div
          className={`relative p-6 md:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border transition-colors duration-200 ${
            collisionFlash ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/20' : 'border-white/10'
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => controls?.spawn()}
              disabled={!controls}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              <Plus size={20} className="group-hover:rotate-90 transition-transform" />
              Spawn Object
            </button>

            <button
              onClick={() => controls?.toggleGravity()}
              disabled={!controls}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              <ArrowUpDown size={20} className="group-hover:scale-110 transition-transform" />
              <span className={gInfo.color}>{gInfo.label}</span>
            </button>

            <button
              onClick={() => controls?.reset()}
              disabled={!controls}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              Reset Scene
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Box size={16} className="text-cyan-400" />
              <span>Objects in scene: <span className="text-white font-medium">{count}</span></span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles size={16} className="text-fuchsia-400" />
              <span>Drag any shape to throw it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
