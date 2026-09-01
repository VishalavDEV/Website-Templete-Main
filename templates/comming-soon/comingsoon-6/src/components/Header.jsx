import React from 'react';
import { Volume2, VolumeX, Sparkles, Layers, MessageSquare, Laptop, Flame } from 'lucide-react';

export default function Header({ isAudioPlaying, onToggleAudio, onOpenSpecDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-glass-card border border-cyber-red/20">
        
        {/* Brand Monogram */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-red/30 via-cyber-crimson/20 to-cyber-amber/20 border border-cyber-red/50 flex items-center justify-center relative overflow-hidden group-hover:border-cyber-red transition-all duration-300 shadow-neon-red">
            <span className="font-display font-black text-white text-base tracking-wider">10:5</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-bold text-white text-lg tracking-tight">TENFIVE</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded bg-cyber-red/15 text-cyber-crimson border border-cyber-red/40 font-mono font-semibold">GAMING PRO</span>
            </div>
            <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">180° Neural Gaming Beast</p>
          </div>
        </div>

        {/* Center Quick Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono text-slate-300">
          <button onClick={() => scrollTo('showcase-section')} className="hover:text-cyber-crimson transition-colors flex items-center space-x-1">
            <Laptop className="w-3.5 h-3.5 text-cyber-crimson" />
            <span>Studio View</span>
          </button>
          <button onClick={() => scrollTo('features-section')} className="hover:text-cyber-crimson transition-colors">
            Pillars
          </button>
          <button onClick={onOpenSpecDrawer} className="hover:text-cyber-crimson transition-colors flex items-center space-x-1">
            <Layers className="w-3.5 h-3.5 text-cyber-scarlet" />
            <span>Blueprint</span>
          </button>
          <button onClick={() => scrollTo('contact-section')} className="hover:text-cyber-crimson transition-colors flex items-center space-x-1">
            <MessageSquare className="w-3.5 h-3.5 text-cyber-amber" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* VIP Status Badge */}
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-rose-200">
            <Flame className="w-3.5 h-3.5 text-cyber-red animate-pulse" />
            <span>VIP Drop Access</span>
          </div>

          {/* Ambient Soundscape Synthesizer Toggle */}
          <button
            onClick={onToggleAudio}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200 relative group"
            title={isAudioPlaying ? "Mute Ambient Soundscape" : "Enable Ambient Cyber Soundscape"}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-cyber-crimson animate-pulse" />
                <span className="hidden md:inline text-cyber-crimson">Audio ON</span>
                <div className="flex items-end space-x-0.5 h-3">
                  <span className="w-0.5 bg-cyber-crimson animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
                  <span className="w-0.5 bg-cyber-crimson animate-[pulse_0.9s_ease-in-out_infinite] h-2" />
                  <span className="w-0.5 bg-cyber-crimson animate-[pulse_0.4s_ease-in-out_infinite] h-3.5" />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
                <span className="hidden md:inline text-slate-400">Audio</span>
              </>
            )}
          </button>

        </div>

      </div>
    </header>
  );
}
