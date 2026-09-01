import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { InteractiveCanvas3D } from '../common/InteractiveCanvas3D';

interface HeroProps {
  onCursorChange?: (text: string, variant: 'default' | 'hover') => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCursorChange, onReplayIntro }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-grain select-none">
      {/* Background Watermark 24 from Theme */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none z-0">
        <span className="text-[260px] sm:text-[380px] lg:text-[480px] leading-none font-black tracking-tighter text-[#121316]">
          24
        </span>
      </div>

      {/* Vertical Border Guidelines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-black/5 hidden md:block pointer-events-none" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-black/5 hidden md:block pointer-events-none" />

      {/* 3D Background Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <InteractiveCanvas3D theme="light" />
      </div>

      {/* Grid Lines Background */}
      <div className="absolute inset-0 grid-lines pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Reference & Metadata Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#626670]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] opacity-60">STUDIO REFERENCE //</span>
            <span className="px-2.5 py-1 bg-[#090909] text-[#D1FF00] rounded font-bold">
              VOL. 082 / 2026
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D1FF00] animate-pulse" />
              <span className="text-[#121316] font-bold">SYSTEM ACTIVE</span>
            </span>
            <span>52.5° N // 40.7° N</span>
          </div>
        </div>

        {/* Extreme Bold Typography Headline */}
        <div className="space-y-4">
          <h1 className="text-[52px] sm:text-[90px] md:text-[120px] lg:text-[145px] leading-[0.8] font-black tracking-tighter uppercase text-[#090909] flex flex-col -ml-1">
            <span className="block">EXTREME</span>
            <span className="block text-[#090909] bg-[#D1FF00] px-3 py-1 w-fit rounded-sm my-1 shadow-lg border-2 border-[#090909]">
              UTILITY
            </span>
            <span className="block">SYSTEMS.</span>
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="text-lg sm:text-xl font-sans font-medium text-[#4a4d55] leading-snug">
              High-performance architectural digital frameworks, 3D WebGL platforms, and multi-agent AI ecosystems built for category leaders.
            </p>
          </div>
        </div>

        {/* CTA Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 pt-10">
          <button
            onClick={() => navigate('/contact')}
            onMouseEnter={() => onCursorChange && onCursorChange('START', 'hover')}
            onMouseLeave={() => onCursorChange && onCursorChange('', 'default')}
            className="flex items-center gap-3 px-9 py-4 bg-[#090909] text-[#f8f7f4] font-mono text-xs uppercase tracking-widest font-extrabold rounded-none hover:bg-[#D1FF00] hover:text-[#090909] transition-all duration-300 shadow-2xl group cursor-pointer border-2 border-[#090909]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/work')}
            onMouseEnter={() => onCursorChange && onCursorChange('EXPLORE', 'hover')}
            onMouseLeave={() => onCursorChange && onCursorChange('', 'default')}
            className="flex items-center gap-3 px-8 py-4 bg-white/90 text-[#090909] border-2 border-[#090909] font-mono text-xs uppercase tracking-widest font-extrabold rounded-none hover:bg-[#090909] hover:text-[#D1FF00] transition-all duration-300 shadow-sm group cursor-pointer backdrop-blur-xs"
          >
            <span>EXPLORE OUR ARCHIVE</span>
            <Sparkles className="w-4 h-4 text-[#090909] group-hover:text-[#D1FF00] transition-transform" />
          </button>

          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="flex items-center gap-2 px-5 py-4 text-xs font-mono font-bold text-gray-600 hover:text-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>REPLAY 3D INTRO</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Floating Stats & Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-t-2 border-[#090909] pt-8 gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 font-mono text-xs uppercase tracking-wider text-[#626670]">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-[#090909] opacity-60 font-extrabold">METRIC A // EQUITY</span>
              <span className="text-2xl font-bold font-mono text-[#090909]">$142.08<span className="text-sm opacity-50 ml-1">M</span></span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-[#090909] opacity-60 font-extrabold">STATUS // AGENTS</span>
              <span className="text-2xl font-bold font-mono text-[#090909] bg-[#D1FF00] px-2 py-0.5 rounded-xs w-fit">ACTIVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-[#090909] opacity-60 font-extrabold">COORD // REGION</span>
              <span className="text-2xl font-bold font-mono text-[#090909]">52.5° N</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="w-36 h-2 bg-black/15 relative overflow-hidden rounded-none border border-[#090909]">
              <div className="absolute left-0 top-0 h-full w-3/4 bg-[#D1FF00]" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#090909] font-bold">SYSTEM EFFICIENCY 98.4%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
