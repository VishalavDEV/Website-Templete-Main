import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowUpRight, Volume2, Globe, Bookmark } from 'lucide-react';

export const Navbar: React.FC = memo(() => {
  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      {/* Top Edition Bar */}
      <div className="border-b border-slate-200/60 text-[11px] font-mono uppercase tracking-wider py-1.5 px-4 md:px-8 text-slate-500 flex justify-between items-center bg-white/40">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Live Editorial Edition
          </span>
          <span className="hidden sm:inline-block text-slate-300">•</span>
          <span className="hidden sm:inline-block">Vol. 42 / No. 08 — Spatial Architecture & AI</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-slate-400">Published Worldwide</span>
          <span className="text-slate-700 font-medium">Aug 2026</span>
          <div className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Global / EN</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Logo & Monogram */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold font-display shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl">DM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                DESIGN<span className="text-blue-600 font-serif italic ml-1">MAG</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 -mt-1">
                Spatial & Thought
              </span>
            </div>
          </a>
        </div>

        {/* Center: Curated Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80">
          {['Spatial Design', 'AI Synthetics', 'Typography', 'Architecture', 'Culture', 'Essays'].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                idx === 0
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Quick Actions & Newsletter CTA */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Audio Dispatch"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 text-xs font-medium transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Audio Dispatch</span>
          </button>

          <button
            aria-label="Search Magazine"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 flex items-center justify-center transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>

          <a
            href="#subscribe"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold tracking-tight shadow-md hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Issue 08 Print</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';
