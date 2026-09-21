import { useState } from 'react';
import { Mail, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#05060f] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <span className="text-xs text-cyan-400 tracking-widest uppercase font-medium">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Let's build the infinite.
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
              Reach out to explore how SuuSri AI can power your next interactive
              experience.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm">hello@suusri.ai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-fuchsia-400" />
                <span className="text-sm">Distributed · Worldwide</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="relative">
              <label className="text-sm text-gray-400 mb-3 block">
                Join the early access list
              </label>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Send size={18} />
                </button>
              </div>
              {sent && (
                <p className="mt-3 text-sm text-cyan-400 animate-pulse">
                  You're on the list. Welcome aboard.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center">
              <span className="text-[#05060f] font-black text-sm">S</span>
            </div>
            <span className="text-white font-medium">
              SuuSri<span className="text-cyan-400"> AI</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/30 transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © 2026 SuuSri AI · One Intelligence. Infinite Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
