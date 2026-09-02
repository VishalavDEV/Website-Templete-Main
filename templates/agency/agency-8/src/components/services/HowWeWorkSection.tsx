import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../../data/agencyData';
import { CursorType } from '../../types';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

interface HowWeWorkSectionProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ setCursorType }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              METHODOLOGY
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            05 PHASES / END-TO-END VELOCITY
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            FROM IDEA <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              to impact.
            </span>
          </motion.h2>
        </div>

        {/* Interactive Step Selector Bar */}
        <div className="grid grid-cols-5 border-b border-white/10 mb-12 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className={`py-4 sm:py-6 text-left relative focus:outline-none transition-all duration-300 ${
                  isActive ? 'text-[#FAF9F6]' : 'text-[#666666] hover:text-[#999999]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className={`font-mono text-xs sm:text-sm font-bold ${isActive ? 'text-[#0066FF]' : ''}`}>
                    {step.number}
                  </span>
                  <span className="font-display text-xs sm:text-base font-bold uppercase tracking-tight truncate">
                    {step.title}
                  </span>
                </div>

                {/* Animated Bottom Slider Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066FF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#0e0e0e] border border-white/10 p-8 sm:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column (Phase summary & duration) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-full font-mono text-xs text-[#0066FF] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>TIMEFRAME: {activeStep.duration}</span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
                    PHASE {activeStep.number}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#FAF9F6]">
                    {activeStep.title}
                  </h3>
                  <p className="font-editorial italic text-xl text-[#0066FF]">
                    {activeStep.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Right Column (Deliverables & artifacts breakdown) */}
              <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-white/10 lg:pl-12">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
                  KEY ARTIFACTS &amp; MILESTONES
                </span>

                <div className="space-y-3 pt-2">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.08] rounded-lg hover:border-[#0066FF]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#0066FF]">
                          0{idx + 1}
                        </span>
                        <span className="font-sans text-sm sm:text-base text-[#FAF9F6] font-medium">
                          {item}
                        </span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center justify-between font-mono text-xs text-[#666666]">
                  <span>GOVERNANCE: RIGOROUS CI/CD &amp; WEEKLY CLIENT SYNC</span>
                  <span className="text-[#FAF9F6]/80">PHASE {activeStep.number} / 05</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
