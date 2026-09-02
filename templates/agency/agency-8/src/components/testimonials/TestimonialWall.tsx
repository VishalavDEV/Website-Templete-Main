import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';
import { WALL_QUOTES } from '../../data/testimonialsData';

interface TestimonialWallProps {
  setCursorType: (type: CursorType) => void;
}

export const TestimonialWall: React.FC<TestimonialWallProps> = ({ setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                03 / THE CRITIC & CLIENT WALL
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              VOICES IN THE CRAFT
            </h2>
          </div>

          <p className="text-sm text-[#888888] font-mono max-w-xs">
            UNFILTERED REACTIONS COLLECTED FROM STRATEGIC & DESIGN COMMISSIONS.
          </p>
        </div>

        {/* Varied Asymmetrical Typographic Layout (Anti-Slop: No identical cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Item 1: Massive Accent Quote */}
          <div className="md:col-span-7 p-8 sm:p-12 bg-white/[0.015] border border-white/10 space-y-8 relative group hover:border-white/20 transition-all">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] block">
              [ REF: MONO ACOUSTICS ]
            </span>
            <blockquote className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] leading-[1.08] uppercase tracking-tight">
              "THE BEST CREATIVE PARTNER WE'VE WORKED WITH."
            </blockquote>
            <div className="flex items-center justify-between pt-6 border-t border-white/10 font-mono text-xs text-[#888888]">
              <span>JAMES CARTER</span>
              <span className="text-[#0066FF]">FOUNDER / MONO</span>
            </div>
          </div>

          {/* Item 2: Compact Secondary Quote */}
          <div className="md:col-span-5 p-8 sm:p-10 border border-[#ffffff10] space-y-6 self-center group hover:bg-white/[0.01] transition-all">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block">
              [ REF: NORTH PLATFORM ]
            </span>
            <blockquote className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#FAF9F6] leading-[1.18]">
              "A rare combination of rigorous strategy and uncompromising craft."
            </blockquote>
            <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#888888]">
              ALEX MORGAN — CEO / NORTH
            </div>
          </div>

          {/* Item 3: Wide Banner Quotation */}
          <div className="md:col-span-12 py-12 sm:py-16 px-6 sm:px-12 border-y border-[#ffffff15] text-center my-4">
            <blockquote className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F6] leading-tight uppercase tracking-tight max-w-5xl mx-auto">
              "THEY MADE COMPLEX FEEL NATURAL AND EFFORTLESS."
            </blockquote>
            <p className="pt-6 font-mono text-xs uppercase tracking-widest text-[#888888]">
              SOPHIA REED · PRODUCT DIRECTOR / VANTA PROTOCOL
            </p>
          </div>

          {/* Item 4: Left Offset */}
          <div className="md:col-span-6 p-8 sm:p-10 border border-[#ffffff10] space-y-6 group hover:border-[#0066FF]/40 transition-all">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] block">
              [ REF: FORM ATELIER ]
            </span>
            <blockquote className="font-display font-bold text-2xl sm:text-3xl text-[#FAF9F6] uppercase leading-tight tracking-tight">
              "THE DETAIL IN EVERY INTERACTION WAS REMARKABLE."
            </blockquote>
            <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#888888] flex justify-between items-center">
              <span>LENA PARK</span>
              <span>MARKETING DIRECTOR / FORM</span>
            </div>
          </div>

          {/* Item 5: Right Offset Accent */}
          <div className="md:col-span-6 p-8 sm:p-10 bg-white/[0.015] border border-white/10 space-y-6 group hover:border-white/20 transition-all">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block">
              [ REF: ARC MOBILITY ]
            </span>
            <blockquote className="font-display font-extrabold text-2xl sm:text-3xl text-[#FAF9F6] uppercase leading-tight tracking-tight">
              "THEY FELT LIKE AN EXTENSION OF OUR OWN CORE TEAM."
            </blockquote>
            <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#888888] flex justify-between items-center">
              <span>DANIEL KIM</span>
              <span className="text-[#0066FF]">CREATIVE DIRECTOR / ARC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
