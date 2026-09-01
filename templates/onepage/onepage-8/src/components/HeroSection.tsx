import React from 'react';
import { HeroScene } from '../scenes/HeroScene';
import { CursorState } from '../types';
import { ArrowDown, Cpu, Sparkles, Terminal, Activity } from 'lucide-react';

interface HeroSectionProps {
  mouseX: number;
  mouseY: number;
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  mouseX,
  mouseY,
  setCursorState,
  onHoverSound,
  onClickSound,
}) => {
  const handleScrollToNext = () => {
    onClickSound();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    onClickSound();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 overflow-hidden select-none"
    >
      {/* 3D Immersive Procedural WebGL Canvas Background */}
      <HeroScene
        mouseX={mouseX}
        mouseY={mouseY}
        setCursorState={setCursorState}
        onHoverSound={onHoverSound}
      />

      {/* Subtle vignette gradient overlays */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#040507]/40 to-[#040507]/90 pointer-events-none" />

      {/* Top Telemetry Header Tag */}
      <div className="relative z-10 flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#0a0f18]/80 backdrop-blur-md border border-cyan-500/20 text-xs font-mono text-cyan-300 pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="tracking-widest">AI // HUMAN // MACHINE</span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400 hidden sm:inline">AUTONOMOUS RESEARCH MATRIX</span>
      </div>

      {/* Center Cinematic Hero Typography */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto pointer-events-auto px-4">
        {/* Sub-header badge */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono tracking-widest text-cyan-400/90 uppercase mb-4">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>AI / ML ENGINEER • DEVELOPER • CREATOR</span>
        </div>

        {/* Main Grand Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-slate-100 uppercase leading-[1.05] drop-shadow-2xl">
          BUILDING <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent text-glow-cyan">
            INTELLIGENCE.
          </span>
        </h1>

        {/* Concise Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-body max-w-2xl leading-relaxed">
          Turning data, mathematical algorithms, and neural architectures into intelligent digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            id="hero-explore-work-btn"
            onClick={handleScrollToWork}
            onMouseEnter={() => {
              onHoverSound();
              setCursorState({ variant: 'interact', text: 'EXPERIMENTS' });
            }}
            onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            VIEW EXPERIMENTS
          </button>

          <button
            id="hero-enter-system-btn"
            onClick={handleScrollToNext}
            onMouseEnter={() => {
              onHoverSound();
              setCursorState({ variant: 'hover', text: 'EXPLORE' });
            }}
            onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
            className="px-6 py-3 rounded-xl bg-[#0a0f18]/80 hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all"
          >
            ENTER THE SYSTEM
          </button>
        </div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center space-y-2 pointer-events-auto mt-4">
        <button
          onClick={handleScrollToNext}
          onMouseEnter={() => {
            onHoverSound();
            setCursorState({ variant: 'hover', text: 'SCROLL' });
          }}
          onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
          className="group flex flex-col items-center space-y-2 font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <span className="tracking-widest uppercase text-[11px] group-hover:tracking-wider transition-all">
            ENTER THE SYSTEM
          </span>
          <div className="w-7 h-10 rounded-full border border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
