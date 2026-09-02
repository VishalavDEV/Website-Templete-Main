import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceDetailConfig, ServiceApproachStep } from '../../data/serviceDetailData';
import { CursorType } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ApproachTimelineProps {
  service: ServiceDetailConfig;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ApproachTimeline: React.FC<ApproachTimelineProps> = ({
  service,
  setCursorType,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = service.approachSteps[activeStepIndex] || service.approachSteps[0];

  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#0066FF]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              OUR METHODOLOGY
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            05 SEQUENTIAL PHASES
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            {service.approachHeading.line1} <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              {service.approachHeading.line2}
            </span>
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#888888] max-w-2xl font-sans">
            {service.approachIntro}
          </p>
        </div>

        {/* ================= DESKTOP INTERACTIVE STEP TRACKER ================= */}
        <div className="hidden md:block">
          {/* Top Progress Tab Bar */}
          <div className="grid grid-cols-5 border-b border-white/10 mb-12 relative">
            {service.approachSteps.map((step, idx) => {
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
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest ${
                        isActive ? 'text-[#0066FF]' : 'text-[#666666]'
                      }`}
                    >
                      {step.number} // {step.phase}
                    </span>
                    <span className="font-display text-sm lg:text-base font-bold uppercase tracking-tight truncate">
                      {step.title.split(' ')[0]}...
                    </span>
                  </div>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="approachActiveStepBar"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066FF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Panel Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#0e0e0e] border border-white/10 p-8 sm:p-12 lg:p-16"
            >
              <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left (Phase overview) */}
                <div className="col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full font-mono text-xs text-[#0066FF] uppercase tracking-wider">
                    <span>{activeStep.detail}</span>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-xs text-[#888888] uppercase tracking-widest block">
                      PHASE {activeStep.number} / {activeStep.phase}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#FAF9F6] tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>

                  <p className="font-sans text-base text-[#888888] leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Right (Deliverables) */}
                <div className="col-span-7 space-y-4 border-l border-white/10 pl-10 lg:pl-14">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
                    KEY MILESTONES &amp; DELIVERABLES
                  </span>

                  <div className="space-y-3 pt-2">
                    {activeStep.deliverables.map((del, idx) => (
                      <div
                        key={del}
                        className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.08] rounded-lg hover:border-[#0066FF]/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#0066FF]">
                            0{idx + 1}
                          </span>
                          <span className="font-sans text-sm sm:text-base text-[#FAF9F6] font-medium">
                            {del}
                          </span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center justify-between font-mono text-xs text-[#666666]">
                    <span>STATUS: VALIDATED ACROSS RIGOROUS CRITERIA</span>
                    <span className="text-[#FAF9F6]/80">STEP {activeStep.number} OF 05</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= MOBILE VERTICAL TIMELINE ================= */}
        <div className="md:hidden space-y-8 relative border-l border-white/10 ml-3 pl-6">
          {service.approachSteps.map((step) => (
            <div key={step.number} className="relative space-y-3">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#0066FF] border-2 border-black" />

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#0066FF] font-bold">
                  {step.number} // {step.phase}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-mono text-[10px] text-[#888888] uppercase">
                  {step.detail}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase text-[#FAF9F6]">
                {step.title}
              </h3>

              <p className="text-sm text-[#888888] font-sans leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {step.deliverables.map((del) => (
                  <span
                    key={del}
                    className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FAF9F6]/80 rounded"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
