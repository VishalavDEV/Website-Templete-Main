import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Building, Layers } from 'lucide-react';
import { CursorType } from '../../types';

interface FeaturedTestimonialProps {
  setCursorType: (type: CursorType) => void;
  onNavigate: (path: string) => void;
  onOpenStory?: (id: number) => void;
}

export const FeaturedTestimonial: React.FC<FeaturedTestimonialProps> = ({
  setCursorType,
  onNavigate,
  onOpenStory,
}) => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Subtle backdrop lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section meta tag */}
        <div className="flex items-center justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              01 / FEATURED PERSPECTIVE
            </span>
          </div>

          <div className="font-mono text-xs text-[#888888]">
            <span>COMMISSION / 2025</span>
          </div>
        </div>

        {/* Two-Column Grid: Large Quote on Left, Editorial Portrait / Context on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Dominant Quotation Typography */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#0066FF] block">
                [ AURA SPATIAL SYSTEMS ]
              </span>
              
              <blockquote className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] tracking-tight leading-[1.08] uppercase">
                "THEY DIDN'T JUST DELIVER WHAT WE ASKED FOR. THEY HELPED US SEE WHAT WAS POSSIBLE."
              </blockquote>
            </div>

            <p className="text-base sm:text-lg text-[#888888] font-light leading-relaxed max-w-xl">
              From rethinking the fundamental user ergonomics of spatial computing to designing an ethereal digital design system, Studio acted as an essential strategic co-founder throughout our launch.
            </p>

            {/* Author Attribution & Quick Actions */}
            <div className="pt-6 border-t border-[#ffffff10] flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF9F6] uppercase tracking-wide">
                  MAYA RICHARDSON
                </h3>
                <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                  CMO / <span className="text-white font-medium">AURA</span>
                </p>
                <p className="font-mono text-[11px] text-[#888888]">
                  PROJECT: <span className="text-[#0066FF]">AURA — BRAND EXPERIENCE</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {onOpenStory && (
                  <button
                    onClick={() => onOpenStory(1)}
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                  >
                    <span>READ FULL STORY</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('/work/aura')}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#0066FF] hover:brightness-110 text-white text-xs font-mono uppercase tracking-widest font-bold transition-all cursor-pointer"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Portrait & Live Studio Context */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative frame */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#111113] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85"
                  alt="Maya Richardson, CMO at Aura"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#080808]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] block">
                      VERIFIED PARTNERSHIP
                    </span>
                    <span className="font-display font-bold text-sm text-white uppercase tracking-wide">
                      AURA SPATIAL SYSTEMS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#888888]">2025</span>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/40" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/40" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
