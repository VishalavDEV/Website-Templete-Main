import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight, ArrowUp, Sparkles, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#100e0b]/80 backdrop-blur-lg border-t border-zinc-800/80 pt-16 pb-12 px-4 sm:px-8 text-zinc-400 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Brand Statement and Back-to-Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-zinc-800">
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="w-6 h-6 rounded-full bg-[#F27D26] flex items-center justify-center text-black">
                <span className="w-2 h-2 rounded-full bg-black" />
              </span>
              <span className="tracking-[0.25em] text-2xl font-black text-white group-hover:text-[#F27D26] transition-colors uppercase">
                TERRA.
              </span>
            </Link>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
              The Magazine of Discovery — Documenting the wild, the unknown, and the infinite.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121214] border border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-[#F27D26] transition-all cursor-pointer group shadow-md"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#F27D26]" />
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Column 1: EXPLORE */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#F27D26] uppercase font-bold">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <Link to="/wildlife" className="hover:text-white transition-colors">Wildlife</Link>
              </li>
              <li>
                <Link to="/planet" className="hover:text-white transition-colors">Planet</Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-white transition-colors">Science</Link>
              </li>
              <li>
                <Link to="/space" className="hover:text-white transition-colors">Space</Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-white transition-colors">History</Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-white transition-colors">Culture</Link>
              </li>
              <li>
                <Link to="/exploration" className="hover:text-white transition-colors">Exploration</Link>
              </li>
              <li>
                <Link to="/photography" className="hover:text-white transition-colors">Photography</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: MAGAZINE */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#F27D26] uppercase font-bold">
              MAGAZINE
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <Link to="/magazine/september-2026-the-unknown-earth" className="hover:text-white transition-colors">
                  Current Issue
                </Link>
              </li>
              <li>
                <Link to="/magazine" className="hover:text-white transition-colors">
                  Issue Archive (2025–2026)
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  Saved Reading List
                </Link>
              </li>
              <li>
                <Link to="/field-notes" className="hover:text-white transition-colors">
                  Field Notes & Dispatches
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#F27D26] uppercase font-bold">
              ABOUT
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About TERRA</Link>
              </li>
              <li>
                <Link to="/about#editorial" className="hover:text-white transition-colors">Editorial Policy</Link>
              </li>
              <li>
                <Link to="/about#expeditions" className="hover:text-white transition-colors">Expedition Council</Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-white transition-colors">Contact Bureau</Link>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">Open Access Policy</span>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#F27D26] uppercase font-bold">
              FOLLOW
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <a href="#youtube" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <a href="#x" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
              <li>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F27D26]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: EXPEDITION DISPATCH */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#F27D26] uppercase font-bold">
              TERRA DISCOVERY
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              Published monthly in digital and print. Dedicated to scientific inquiry, wilderness preservation, and visual truth.
            </p>
            <div className="p-3 rounded-xl bg-[#121214] border border-zinc-800 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              ISSN 2849-0193 · GLOBAL EDITION
            </div>
          </div>
        </div>

        {/* Grand Editorial Signoff: KEEP LOOKING. */}
        <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              KEEP LOOKING.
            </span>
          </div>

          <div className="text-center md:text-right font-mono text-[10px] text-zinc-600 uppercase tracking-widest space-y-1">
            <p>TERRA MAGAZINE · OPEN ACCESS FIELD JOURNAL</p>
            <p>Unrestricted Public Domain Field Intelligence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
