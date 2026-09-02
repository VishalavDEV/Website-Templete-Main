import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';
import { INDUSTRY_TESTIMONIALS } from '../../data/testimonialsData';

interface IndustryVoicesProps {
  setCursorType: (type: CursorType) => void;
}

export const IndustryVoices: React.FC<IndustryVoicesProps> = ({ setCursorType }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = INDUSTRY_TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                04 / SECTOR BENCHMARKS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              DIFFERENT INDUSTRIES.<br />SIMILAR AMBITION.
            </h2>
          </div>

          <p className="text-sm text-[#888888] font-mono max-w-sm">
            HOVER OR SELECT A SECTOR TO VIEW INDUSTRY-SPECIFIC CLIENT OUTCOMES.
          </p>
        </div>

        {/* Interactive Layout: Left Side List, Right Side Dynamic Quote Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Industry List */}
          <div className="lg:col-span-6 space-y-2">
            {INDUSTRY_TESTIMONIALS.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.industry}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setCursorType('pointer');
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  onFocus={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 sm:py-5 px-6 border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.04] border-[#0066FF] text-[#FAF9F6]'
                      : 'border-transparent text-[#666666] hover:text-[#FAF9F6] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-xs ${isActive ? 'text-[#0066FF]' : 'text-[#666666]'}`}>
                      0{index + 1}
                    </span>
                    <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                      {item.industry}
                    </span>
                  </div>

                  <span className={`font-mono text-xs uppercase tracking-widest transition-opacity ${
                    isActive ? 'opacity-100 text-[#0066FF]' : 'opacity-0'
                  }`}>
                    ACTIVE ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Testimonial Display */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 bg-[#0c0c0f] border border-white/15 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between relative overflow-hidden">
              {/* Background sector watermarking */}
              <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 font-display font-black text-8xl text-white/[0.02] select-none pointer-events-none uppercase">
                {activeItem.industry}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-[#0066FF] uppercase tracking-widest">
                    [ {activeItem.industry} SECTOR EXPERIENCE ]
                  </span>
                  <span className="text-[#888888]">
                    0{activeIndex + 1} / 0{INDUSTRY_TESTIMONIALS.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeItem.industry}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#FAF9F6] leading-[1.25]"
                  >
                    "{activeItem.quote}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.industry + '-author'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white uppercase">
                      {activeItem.person}
                    </h4>
                    <p className="font-mono text-xs text-[#888888]">
                      {activeItem.role}, <span className="text-white font-medium">{activeItem.client}</span>
                    </p>
                  </div>

                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                    ✦
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
