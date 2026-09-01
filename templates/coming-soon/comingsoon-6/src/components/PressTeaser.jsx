import React from 'react';
import { Quote, Flame, Users, Globe, Swords } from 'lucide-react';

export default function PressTeaser() {
  const quotes = [
    {
      source: 'IGN HARDWARE',
      text: '“The TENFIVE LAPTOP crushes high-refresh ray-traced workloads with astonishing thermals in an impossibly sleek unibody.”',
      author: 'Senior Gaming Tech Editor'
    },
    {
      source: 'PC GAMER PRO',
      text: '“A breathtaking masterclass in 180° hinge mechanics, 240Hz OLED response, and titanium precision.”',
      author: 'Lead Hardware Analyst'
    },
    {
      source: 'DIGITAL FOUNDRY',
      text: '“24 hours of sustained battery with zero thermal throttling in a sub-kilo chassis is pure black magic.”',
      author: 'Executive Architecture Editor'
    }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Live Counter Banner */}
      <div className="mb-14 glass-pill rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-cyber-red/30 shadow-neon-red">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-red/15 border border-cyber-red/40 flex items-center justify-center text-cyber-crimson">
            <Flame className="w-5 h-5 animate-pulse text-cyber-red" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-white text-base">14,928 Gamers & Creators</span>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/40 font-mono">Live Waitlist</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">TENFIVE pre-launch drop allocation at 74%</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-1.5">
            <Globe className="w-4 h-4 text-rose-400" />
            <span>Global Drop</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Users className="w-4 h-4 text-cyber-amber" />
            <span>TENFIVE VIP Guild</span>
          </div>
        </div>
      </div>

      {/* Press Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-6 border border-cyber-red/20 hover:border-cyber-red/50 transition-all duration-300 relative flex flex-col justify-between hover:shadow-neon-red"
          >
            <div>
              <Quote className="w-6 h-6 text-cyber-red/50 mb-3" />
              <p className="text-slate-200 text-sm italic leading-relaxed">
                {quote.text}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-rose-400 tracking-wider">
                {quote.source}
              </span>
              <span className="text-[11px] text-slate-400">
                {quote.author}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
