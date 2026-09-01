import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

export const AgencyStatement: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#090909] text-[#f8f7f4] relative overflow-hidden border-t border-b border-white/10 select-none">
      {/* Background Watermark Number */}
      <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none select-none z-0">
        <span className="text-[280px] sm:text-[400px] font-black leading-none text-white tracking-tighter">
          01
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="font-mono text-xs uppercase tracking-[0.3em] font-black text-[#D1FF00] mb-8 flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#D1FF00] text-[#090909] font-bold">MANIFESTO // 01</span>
            <span>CORE ARCHITECTURAL POSITIONING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black tracking-tighter leading-[0.85] uppercase max-w-6xl text-white">
            "BUSINESS IS CHANGING FASTER THAN THE{' '}
            <span className="text-[#090909] bg-[#D1FF00] px-3 py-0.5 rounded-none inline-block border-2 border-[#090909]">
              SYSTEMS
            </span>{' '}
            BUILT TO SUPPORT IT."
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t-2 border-[#D1FF00] text-gray-300 font-sans leading-relaxed text-base sm:text-lg">
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="font-mono text-sm leading-relaxed text-gray-300">
              Legacy software templates, generic agency decks, and fragmented digital tools have trapped organizations in visual and operational stagnation. Modern consumers and institutional investors demand clarity, speed, and spatial elegance.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <p className="font-mono text-sm leading-relaxed text-gray-300">
              At VANTA FORM, we eliminate the gap between strategy, design, and technical execution. We combine 3D WebGL graphics, custom agentic AI pipelines, and brutalist typography to build digital assets that command immediate market dominance.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
