import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectProcessProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ProjectProcess: React.FC<ProjectProcessProps> = ({ study, setCursorType }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = study.process[activeStepIdx] || study.process[0];

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                STRATEGY & EXECUTION BLUEPRINT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#FAF9F6] tracking-tight uppercase">
              FROM IDEA<br />TO EXPERIENCE.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#888888] max-w-md font-normal leading-relaxed">
            Our 5-phase delivery framework guarantees that conceptual ambition aligns seamlessly with commercial realities and engineering constraints.
          </p>
        </div>

        {/* Process Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive 5-Step Vertical Track (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {study.process.map((p, idx) => {
              const isSelected = activeStepIdx === idx;

              return (
                <button
                  key={p.step}
                  onClick={() => setActiveStepIdx(idx)}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className={`w-full p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.04] border-white/20 shadow-lg'
                      : 'bg-transparent border-white/[0.04] hover:bg-white/[0.02] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? 'text-[#FAF9F6]' : 'text-[#888888]'
                      }`}
                      style={{ color: isSelected ? study.accent : undefined }}
                    >
                      {p.step}
                    </span>
                    <span
                      className={`font-display text-lg sm:text-xl font-bold tracking-wide uppercase transition-colors ${
                        isSelected ? 'text-white' : 'text-[#888888]'
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      isSelected
                        ? 'text-white translate-x-1 opacity-100'
                        : 'text-[#888888] opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Step Deep Dive Exhibition (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-[#ffffff12] space-y-8 relative overflow-hidden"
              >
                {/* Step Watermark */}
                <div
                  className="absolute -right-6 -bottom-10 font-display text-[11rem] font-black pointer-events-none select-none opacity-5 leading-none"
                  style={{ color: study.accent }}
                >
                  {activeStep.step}
                </div>

                {/* Step Headline & Description */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-white"
                      style={{ backgroundColor: study.accent }}
                    >
                      PHASE {activeStep.step}
                    </span>
                    <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
                      {study.title} DEVELOPMENT
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F6] uppercase tracking-tight">
                    {activeStep.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                    {activeStep.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-6 border-t border-[#ffffff10] relative z-10 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block">
                    KEY DELIVERABLES & OUTCOMES
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStep.deliverables.map((deliv) => (
                      <div
                        key={deliv}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: study.accent }}
                        />
                        <span className="font-mono text-xs text-[#FAF9F6] font-medium">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
