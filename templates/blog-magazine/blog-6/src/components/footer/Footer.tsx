import React, { memo } from 'react';
import { Sparkles, ArrowUpRight, Globe, Github, Twitter, Instagram, Disc } from 'lucide-react';
import { NewsletterBox } from '../ui/NewsletterBox';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="relative w-full border-t border-slate-200/80 bg-gradient-to-b from-white/60 to-slate-100/80 pt-20 pb-12 px-4 md:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Split: Mission Statement & Newsletter Box */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold font-display text-xl shadow-md shadow-blue-500/20">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                  DESIGN<span className="text-blue-600 font-serif italic ml-1">MAG</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 -mt-1">
                  Contemporary Spatial & Architectural Journal
                </span>
              </div>
            </div>

            <p className="type-body text-slate-600 leading-relaxed mb-6 font-sans">
              An independent international publication documenting experimental spatial computing, biological architecture, and kinetic typography. Curated for theorists, creative technologists, and architects worldwide.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Worldwide Operations
              </span>
              <span>•</span>
              <span>Stockholm / Tokyo / San Francisco</span>
            </div>
          </div>

          {/* State-Morphing Newsletter Card */}
          <div className="w-full lg:w-auto flex-1 flex justify-end">
            <NewsletterBox />
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-slate-200/80">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-4">
              Dispatches
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <li><a href="#spatial" className="hover:text-blue-600 transition-colors">Spatial Realism</a></li>
              <li><a href="#synthetic" className="hover:text-blue-600 transition-colors">Synthetic AI Systems</a></li>
              <li><a href="#timber" className="hover:text-blue-600 transition-colors">Bio-Engineered Timber</a></li>
              <li><a href="#type" className="hover:text-blue-600 transition-colors">Volumetric Typography</a></li>
              <li><a href="#sound" className="hover:text-blue-600 transition-colors">Acoustic Architectures</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-4">
              Publications
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <li><a href="#issue08" className="hover:text-blue-600 transition-colors">Issue 08: Spatial Era</a></li>
              <li><a href="#issue07" className="hover:text-blue-600 transition-colors">Issue 07: Algorithmic Earth</a></li>
              <li><a href="#issue06" className="hover:text-blue-600 transition-colors">Issue 06: Quantum Glass</a></li>
              <li><a href="#monographs" className="hover:text-blue-600 transition-colors">Curator Monographs</a></li>
              <li><a href="#audio" className="hover:text-blue-600 transition-colors">Audio Dispatches</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-4">
              Institution
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <li><a href="#colophon" className="hover:text-blue-600 transition-colors">Colophon & Ethics</a></li>
              <li><a href="#jury" className="hover:text-blue-600 transition-colors">Awwwards Editorial Jury</a></li>
              <li><a href="#fellowships" className="hover:text-blue-600 transition-colors">Spatial Fellowships</a></li>
              <li><a href="#grants" className="hover:text-blue-600 transition-colors">Research Grants</a></li>
              <li><a href="#press" className="hover:text-blue-600 transition-colors">Press Inquiries</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-4">
              Connect
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <li><a href="#twitter" className="hover:text-blue-600 transition-colors">X / Twitter (@DesignMag)</a></li>
              <li><a href="#instagram" className="hover:text-blue-600 transition-colors">Instagram Journal</a></li>
              <li><a href="#areba" className="hover:text-blue-600 transition-colors">Are.na Curations</a></li>
              <li><a href="#rss" className="hover:text-blue-600 transition-colors">Full RSS Feed</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Direct Telegram Dispatch</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Colophon Strip */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Design Mag International Ltd. All rights reserved. Fedrigoni 140gsm.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-600 cursor-pointer">Privacy & Data</span>
            <span>•</span>
            <span className="hover:text-slate-600 cursor-pointer">Terms of Reading</span>
            <span>•</span>
            <span className="hover:text-slate-600 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
