import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { processSteps } from '../data/testimonials';
import { CheckCircle2, Clock, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { audioService } from '../utils/audio';

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process-section" className="py-24 md:py-32 relative bg-[#0A0B0F] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>The Horizon Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            From raw concept to exponential scale.
          </h2>
          <p className="text-sm sm:text-base text-[#A6ACB8] mt-4 leading-relaxed font-light">
            Our 5-phase agile studio framework eliminates waste, aligns creative vision with business metrics, and ensures sub-second delivery.
          </p>
        </div>

        {/* Interactive Progress Step Indicators */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.number}
                id={`process-step-btn-${idx}`}
                onClick={() => {
                  audioService.playClick();
                  setActiveStepIndex(idx);
                }}
                onMouseEnter={() => {
                  if (!isActive) audioService.playHover();
                }}
                className={`flex flex-col items-start p-3 sm:p-5 rounded-2xl border transition-all text-left group relative ${
                  isActive
                    ? 'bg-[#151926] border-violet-500/60 shadow-xl shadow-violet-950/40'
                    : isCompleted
                    ? 'bg-[#0E1018] border-white/10 hover:border-violet-500/30'
                    : 'bg-[#0E1018]/60 border-white/5 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-violet-400' : isCompleted ? 'text-cyan-400' : 'text-gray-500'
                    }`}
                  >
                    PHASE {step.number}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse hidden sm:block" />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white truncate w-full group-hover:text-violet-300 transition-colors">
                  {step.title.split('&')[0]}
                </span>
                <span className="text-[10px] font-mono text-gray-500 mt-1 hidden md:block">
                  {step.duration}
                </span>

                {/* Bottom Active Progress Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-b-2xl"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Step Stage Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#131622] to-[#0E1018] border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Narrative (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-violet-400">
                    {activeStep.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeStep.title}</h3>
                    <p className="text-sm font-mono text-cyan-400 mt-0.5">{activeStep.subtitle}</p>
                  </div>
                </div>

                <p className="text-base text-gray-300 leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 w-fit">
                  <Clock className="w-4 h-4 text-violet-400" />
                  <span>Phase Duration: {activeStep.duration}</span>
                </div>
              </div>

              {/* Right Column: Deliverables Matrix (5 Cols) */}
              <div className="lg:col-span-5 bg-[#0A0B10]/80 p-6 rounded-2xl border border-white/8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/8">
                  <span className="text-xs font-mono tracking-widest text-violet-400 uppercase">
                    Phase Deliverables
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">PHASE SPEC</span>
                </div>

                <ul className="space-y-3">
                  {activeStep.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
