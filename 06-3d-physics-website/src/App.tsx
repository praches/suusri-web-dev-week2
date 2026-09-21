import { useState, useRef, useCallback } from 'react';
import PhysicsScene, { type PlaygroundControls } from '@/components/PhysicsScene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConceptExplainer from '@/components/ConceptExplainer';
import PlaygroundPanel from '@/components/PlaygroundPanel';
import FeaturesGrid from '@/components/FeaturesGrid';
import Footer from '@/components/Footer';

function App() {
  const [controls, setControls] = useState<PlaygroundControls | null>(null);
  const [collisionFlash, setCollisionFlash] = useState(false);
  const flashTimer = useRef<number | null>(null);

  const handleReady = useCallback((c: PlaygroundControls) => {
    setControls(c);
  }, []);

  const handleCollision = useCallback(() => {
    setCollisionFlash(true);
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setCollisionFlash(false), 250);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05060f] text-white overflow-x-hidden">
      <PhysicsScene onReady={handleReady} onCollision={handleCollision} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ConceptExplainer />
        <PlaygroundPanel controls={controls} collisionFlash={collisionFlash} />
        <FeaturesGrid />
        <Footer />
      </main>
    </div>
  );
}

export default App;
