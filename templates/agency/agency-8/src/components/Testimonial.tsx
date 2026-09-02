import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';
import { CursorType } from '../types';

interface TestimonialProps {
  setCursorType: (type: CursorType) => void;
}

export const Testimonial: React.FC<TestimonialProps> = ({ setCursorType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 sm:py-36 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0066FF]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Indicator / Section tag */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              CLIENT TESTIMONIALS
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#888888]">
            <span className="text-[#FAF9F6] font-bold">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{TESTIMONIALS.length}</span>
          </div>
        </div>

        {/* Big Editorial Quote with Animated Transition */}
        <div className="min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <blockquote className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] font-normal leading-[1.18] tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#ffffff10]">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#FAF9F6] tracking-tight uppercase">
                      {current.author}
                    </h4>
                    <p className="text-xs text-[#888888] font-mono">
                      {current.role}, <span className="text-[#0066FF]">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-[#ffffff10]">
                    REF: {current.projectRef}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-[#ffffff10]">
                    {current.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-end gap-3 pt-10">
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="p-3 rounded-full border border-[#ffffff15] hover:border-white/30 text-[#888888] hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="p-3 rounded-full border border-[#ffffff15] hover:border-white/30 text-[#888888] hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
