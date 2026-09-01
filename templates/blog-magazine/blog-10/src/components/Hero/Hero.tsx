import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Compass, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const target = document.getElementById('current-issue-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden select-none bg-transparent">
      {/* Background Cinematic Photograph & Atmospheric Scrims */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric oceanic waves breaking against dark volcanic shore at twilight"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000 brightness-50 contrast-125"
        />
        {/* Layered Vignette and Gradient Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-transparent to-[#100e0b]/80" />
      </div>

      {/* Giant Background Typography Numeral */}
      <div className="absolute -left-4 top-12 sm:top-8 text-zinc-900/60 text-[180px] sm:text-[320px] md:text-[400px] font-black leading-none pointer-events-none select-none z-0 tracking-tighter">
        026
      </div>

      {/* Top Subtle Eyebrow Label with Orange Accent Rule */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 sm:w-12 bg-[#F27D26]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">
            AVNT-GARDE EXPEDITIONARY DISPATCH
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500">
          <span>78° 13′ N · 15° 38′ E</span>
          <span className="text-zinc-700">/</span>
          <span className="text-[#F27D26]">INITIATIVE—48</span>
        </div>
      </div>

      {/* Main Editorial Bold Typography Stage */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="relative">
          {/* Sub-label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#F27D26]">
              GLOBAL ARCHIVE · VOL. 48
            </span>
          </div>

          {/* Grand High-Impact Headlines */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] font-black leading-[0.85] tracking-tighter uppercase m-0 italic text-white drop-shadow-2xl">
            HYPER
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] font-black leading-[0.85] tracking-tighter uppercase m-0 sm:ml-16 md:ml-24 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 drop-shadow-2xl">
            DISCOVERY
          </h1>
        </div>

        {/* Supporting Copy and Action Controls */}
        <div className="mt-8 sm:mt-10 sm:ml-16 md:ml-24 max-w-xl space-y-6">
          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed font-light">
            Pushing the boundaries of terrestrial perception through long-form scientific investigations, benthic surveys, and unmanipulated optical photography.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/explore"
              id="hero-explore-button"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black text-xs uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-xl shadow-[#F27D26]/20"
            >
              <Compass className="w-4 h-4 stroke-[2.5]" />
              <span>EXPLORE ARCHIVE</span>
            </Link>

            <Link
              to="/magazine/september-2026-the-unknown-earth"
              id="hero-issue-button"
              className="border border-zinc-700 px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#F27D26]" />
              <span>LATEST ISSUE</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Footer Metadata Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-zinc-800">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Current Release</span>
          <span className="text-sm font-medium text-white">September 2026 Issue</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Flagship Dispatch</span>
          <span className="text-sm font-medium text-white truncate">Beneath a World of Ice</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Telemetry Status</span>
          <span className="text-sm font-medium text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F27D26] rounded-full animate-pulse" />
            Active Field Research
          </span>
        </div>

        <div className="flex justify-start md:justify-end items-center">
          <button
            onClick={scrollToNext}
            aria-label="Scroll to current issue"
            className="border border-zinc-700 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 hover:bg-white hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#F27D26]" />
          </button>
        </div>
      </div>
    </section>
  );
};
