import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { METHOD_FOUNDATIONS } from '../data/method';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AurelisMethod() {
  const [activeNumber, setActiveNumber] = useState('01');

  return (
    <section id="method" className="py-24 md:py-36 bg-[#171816] text-[#F3F0E8] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#3E5142]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#B56F4D]/15 rounded-full blur-3xl pointer-events-none animate-breathing" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold mb-3">
            THE AURELIS METHOD
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
            Four foundations. <br />
            <span className="editorial-italic font-normal text-[#D8D4C8]">One stronger life.</span>
          </h2>
        </div>

        {/* Desktop Stacked Accordion Panels (Large expanding layout) */}
        <div className="hidden lg:flex gap-4 h-[580px] w-full">
          {METHOD_FOUNDATIONS.map((foundation) => {
            const isActive = foundation.number === activeNumber;
            return (
              <motion.div
                key={foundation.number}
                onClick={() => setActiveNumber(foundation.number)}
                onMouseEnter={() => setActiveNumber(foundation.number)}
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 border border-white/10 transition-all duration-500 ${
                  isActive ? 'flex-[3.5] bg-[#3E5142]/30 shadow-2xl' : 'flex-[1] bg-white/5 hover:bg-white/10 opacity-70'
                }`}
              >
                {/* Background Image Layer with Gradient Overlay */}
                <img
                  src={foundation.bgImage}
                  alt={foundation.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    isActive ? 'opacity-35 scale-105' : 'opacity-10 grayscale'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/70 to-transparent" />

                {/* Top Bar: Number & Title */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-mono font-bold text-[#B56F4D]">
                      {foundation.number}
                    </span>
                    <h3 className="text-2xl font-heading font-bold tracking-tight">
                      {foundation.title}
                    </h3>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#B56F4D] text-[#F3F0E8] rotate-45' : 'bg-white/10 text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content: Expanded View vs Collapsed View */}
                <div className="relative z-10">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 max-w-xl"
                    >
                      <p className="text-xs uppercase font-mono tracking-widest text-[#D8D4C8] font-bold">
                        {foundation.tagline}
                      </p>
                      <h4 className="text-xl sm:text-2xl font-heading font-semibold text-[#F3F0E8] leading-snug">
                        "{foundation.statement}"
                      </h4>
                      <p className="text-sm font-light text-white/80 leading-relaxed">
                        {foundation.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                        {foundation.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#D8D4C8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B56F4D] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="transform -rotate-90 origin-bottom-left absolute bottom-12 left-8 whitespace-nowrap text-lg font-heading font-medium tracking-wide text-white/60">
                      {foundation.tagline}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Expandable Panels */}
        <div className="lg:hidden flex flex-col gap-4">
          {METHOD_FOUNDATIONS.map((foundation) => {
            const isActive = foundation.number === activeNumber;
            return (
              <div
                key={foundation.number}
                onClick={() => setActiveNumber(isActive ? '' : foundation.number)}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono font-bold text-[#B56F4D]">
                      {foundation.number}
                    </span>
                    <h3 className="text-xl font-heading font-bold">
                      {foundation.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-white/50">
                    {isActive ? 'CLOSE' : 'EXPAND'}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-4"
                  >
                    <p className="text-base font-semibold italic text-[#D8D4C8]">
                      "{foundation.statement}"
                    </p>
                    <p className="text-sm font-light text-white/80 leading-relaxed">
                      {foundation.description}
                    </p>
                    <div className="space-y-2 pt-2">
                      {foundation.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#D8D4C8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B56F4D]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
