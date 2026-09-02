import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CursorType } from '../types';

interface ProcessProps {
  setCursorType: (type: CursorType) => void;
}

export const Process: React.FC<ProcessProps> = ({ setCursorType }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-28 sm:py-36 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                HOW WE WORK
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold text-[#FAF9F6] tracking-tight uppercase"
            >
              Our Delivery Blueprint
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] max-w-md text-sm sm:text-base leading-relaxed"
          >
            A battle-tested 5-phase methodology that eliminates ambiguity and compounds momentum from first briefing to final deployment.
          </motion.p>
        </div>

        {/* Step Navigation Bar (Horizontal Tab on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.02] border border-[#ffffff10] mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className={`group relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#0066FF]/20 border border-[#0066FF]/40 text-white shadow-lg'
                    : 'hover:bg-white/[0.04] text-[#888888] hover:text-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#0066FF]' : 'text-[#888888]'}`}>
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] opacity-80">{step.duration}</span>
                </div>
                <span className="font-display text-sm sm:text-base font-bold tracking-tight uppercase">
                  {step.title}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeProcessPill"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0066FF] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Showcase */}
        {(() => {
          const currentStep = PROCESS_STEPS[activeStepIndex];
          return (
            <motion.div
              key={currentStep.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 rounded-2xl bg-[#0A0A0A] border border-[#ffffff15] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Step Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-semibold">
                      PHASE {currentStep.number}
                    </span>
                    <span className="text-[#888888] text-xs font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#888888]" />
                      {currentStep.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F6] mb-2 uppercase">
                      {currentStep.title} — {currentStep.subtitle}
                    </h3>
                    <p className="text-[#888888] text-base sm:text-lg leading-relaxed pt-2">
                      {currentStep.description}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables Checklist */}
                <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.02] border border-[#ffffff10] space-y-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block">
                    Core Deliverables & Outcomes
                  </span>
                  <div className="space-y-3">
                    {currentStep.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 text-sm text-[#FAF9F6]">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};
