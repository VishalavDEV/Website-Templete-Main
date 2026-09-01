import React from 'react';
import CountdownTimer from './CountdownTimer';
import NotifyForm from './NotifyForm';
import { Sparkles, ChevronDown, Cpu, Zap, Shield, Flame, Swords } from 'lucide-react';

export default function Hero({ timeLeft, onNotifySuccess, playClick, playSuccess, onExploreClick }) {
  return (
    <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-14">
      
      {/* Top Gaming Badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-cyber-red/40 shadow-neon-red mb-6 animate-float">
        <Flame className="w-4 h-4 text-cyber-red animate-pulse" />
        <span className="text-xs font-mono font-medium tracking-[0.25em] text-rose-300 uppercase">
          // 180° NEURAL GAMING MONSTER
        </span>
      </div>

      {/* Main Product Title with Fiery Red Gaming Gradient */}
      <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl leading-[1.08]">
        <span className="text-gradient-red drop-shadow-[0_0_40px_rgba(255,0,60,0.5)]">
          TENFIVE LAPTOP
        </span>
      </h1>

      {/* Tagline */}
      <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed font-light">
        Total spatial freedom engineered for extreme frame rates. Featuring a zero-gap 180° lay-flat hinge, 3nm neural graphics core, and liquid-metal thermal supremacy.
      </p>

      {/* Quick Spec Highlights Gaming Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 mb-2">
        <span className="px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-rose-200 flex items-center space-x-1.5 shadow-neon-red">
          <Flame className="w-3.5 h-3.5 text-cyber-red" />
          <span>180° Lay-Flat Hinge</span>
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
          ⚡ 3nm Neural Core
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
          💎 240Hz Lumina OLED
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
          ❄️ 0dB Liquid Metal
        </span>
      </div>

      {/* Live Countdown Timer Component */}
      <CountdownTimer timeLeft={timeLeft} />

      {/* Email Capture / Notify Me CTA */}
      <NotifyForm
        onNotifySuccess={onNotifySuccess}
        playClick={playClick}
        playSuccess={playSuccess}
      />

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce cursor-pointer" onClick={onExploreClick}>
        <div className="flex flex-col items-center space-y-1 text-slate-400 hover:text-cyber-crimson transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore Gaming Studio</span>
          <ChevronDown className="w-4 h-4 text-cyber-red" />
        </div>
      </div>

    </section>
  );
}
