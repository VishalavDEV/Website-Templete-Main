import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CursorType } from '../../types';
import { STUDIO_LIFE_WORDS, StudioLifeWord } from '../../data/careersData';

interface StudioLifeProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const StudioLife: React.FC<StudioLifeProps> = ({ setCursorType }) => {
  const [activeWordId, setActiveWordId] = useState<string>(STUDIO_LIFE_WORDS[0].id);

  const activeItem =
    STUDIO_LIFE_WORDS.find((item) => item.id === activeWordId) || STUDIO_LIFE_WORDS[0];

  return (
    <section className="py-24 sm:py-36 border-b border-white/10 relative overflow-hidden bg-[#060608]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                LIFE AT THE STUDIO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#FAF9F6] uppercase tracking-tight">
              WHAT LIFE HERE FEELS LIKE
            </h2>
          </div>

          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
            HOVER OR TAP TO EXPLORE VIGNETTES
          </span>
        </div>

        {/* Interactive Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Word List (Interactive Navigation) */}
          <div className="lg:col-span-6 space-y-2 divide-y divide-white/10 border-y border-white/10">
            {STUDIO_LIFE_WORDS.map((item, idx) => {
              const isActive = item.id === activeWordId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveWordId(item.id)}
                  onMouseEnter={() => {
                    setActiveWordId(item.id);
                    setCursorType('pointer', 'VIEW ↗');
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  className={`py-6 sm:py-8 cursor-pointer transition-all duration-300 group flex items-baseline justify-between ${
                    isActive ? 'pl-4 border-l-2 border-[#0066FF]' : 'hover:pl-2'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#666666] group-hover:text-[#0066FF] transition-colors">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-[#FAF9F6]'
                            : 'text-[#555555] group-hover:text-[#FAF9F6]'
                        }`}
                      >
                        {item.word}
                      </h3>
                    </div>

                    <p
                      className={`font-mono text-xs uppercase tracking-wider transition-colors duration-300 pl-8 ${
                        isActive
                          ? 'text-[#0066FF]'
                          : 'text-[#666666] group-hover:text-[#888888]'
                      }`}
                    >
                      {item.subtext}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive
                        ? 'text-[#0066FF] opacity-100 translate-x-0'
                        : 'text-white/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Corresponding Dynamic Image & Narrative Panel */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-white/10 bg-[#0c0c10] group">
              <div className="w-full h-[380px] sm:h-[480px] lg:h-[560px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.word}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Narrative Floating Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3 z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FAF9F6] font-bold">
                      {activeItem.word} // {activeItem.subtext}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeItem.description}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="font-body text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed max-w-lg"
                    >
                      {activeItem.description}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
