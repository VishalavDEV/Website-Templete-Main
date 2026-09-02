import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';
import { MagneticButton } from '../MagneticButton';

interface TestimonialsCTAProps {
  setCursorType: (type: CursorType) => void;
  onNavigate: (path: string) => void;
}

export const TestimonialsCTA: React.FC<TestimonialsCTAProps> = ({
  setCursorType,
  onNavigate,
}) => {
  return (
    <div className="bg-[#080808]">
      {/* 11. Final Closing Emotional Testimonial with Generous Whitespace */}
      <section className="py-32 sm:py-44 px-6 sm:px-8 lg:px-12 border-b border-[#ffffff10] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mx-auto block" />
          
          <blockquote className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[1.08]">
            "THEY MADE THE WHOLE PROCESS FEEL SIMPLE."
          </blockquote>

          <div className="pt-4 font-mono text-xs sm:text-sm text-[#888888] uppercase tracking-widest space-y-1">
            <p className="text-white font-bold tracking-wider">ALEX MORGAN</p>
            <p className="text-[#0066FF]">CEO / NORTH</p>
          </div>
        </div>
      </section>

      {/* 12. Final Action: Ready to Write the Next Story? */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0066FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              NEXT INITIATIVE
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[0.98]">
            READY TO WRITE<br />THE NEXT STORY?
          </h2>

          <p className="text-base sm:text-xl text-[#888888] font-light max-w-xl mx-auto font-body">
            Let's create something your customers will remember.
          </p>

          <div className="pt-6">
            <MagneticButton
              id="testimonials-start-project-btn"
              onClick={() => onNavigate('/contact')}
              onCursorEnter={() => setCursorType('button')}
              onCursorLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/40 transition-all duration-300 cursor-pointer shadow-xl shadow-[#0066FF]/10"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
