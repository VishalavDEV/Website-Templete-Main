import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { CursorType } from '../../types';

interface MotionSectionProps {
  id?: string;
  headline: string;
  paragraphs: string[];
  setCursorType: (type: CursorType, text?: string) => void;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  id = 'section-motion',
  headline,
  paragraphs,
  setCursorType,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isDemoActive, setIsDemoActive] = useState<boolean>(false);

  const motionRules = [
    {
      title: 'STATE CONTINUITY',
      subtitle: 'Anchor spatial origin',
      desc: 'Elements morph from their trigger coordinates to maintain cognitive continuity.',
    },
    {
      title: 'SPRING DAMPING',
      subtitle: 'Physical momentum',
      desc: 'Stiffness 120, Damping 14. Mimics natural mass without artificial bounce.',
    },
    {
      title: 'HIERARCHICAL STAGGER',
      subtitle: 'Guiding eye velocity',
      desc: 'Children stagger by 40ms to guide sequential eye scanning.',
    },
  ];

  return (
    <section id={id} className="scroll-mt-32 pt-16 sm:pt-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
          03 / MOTION WITH PURPOSE
        </span>
      </div>

      <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] mb-8 sm:mb-12">
        {headline}
      </h2>

      <div className="space-y-6 font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed mb-16">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Interactive Purposeful Motion Showcase */}
      <div className="my-12 p-6 sm:p-10 bg-[#0c0c10] border border-white/10 relative overflow-hidden">
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold">
              KINETIC PROTOTYPE // PURPOSEFUL MOTION LAB
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
            SPRING PHYSICS: 120STIFF / 14DAMP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="md:col-span-5 space-y-3">
            {motionRules.map((rule, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                    setIsDemoActive(true);
                  }}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                  className={`w-full text-left p-4 transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#0066FF]/10 border-[#0066FF] text-[#FAF9F6]'
                      : 'bg-white/[0.02] border-white/5 text-[#888888] hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider font-bold">
                      0{idx + 1} / {rule.title}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isSelected ? 'translate-x-1 text-[#0066FF]' : 'opacity-40'
                      }`}
                    />
                  </div>
                  <p className="font-mono text-[10px] text-[#0066FF] tracking-wider mt-1 uppercase">
                    {rule.subtitle}
                  </p>
                  <p className="font-body text-xs text-[#777777] font-light mt-2">
                    {rule.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Animated Canvas */}
          <div className="md:col-span-7 h-[280px] sm:h-[320px] bg-[#050507] border border-white/10 relative flex items-center justify-center p-6 overflow-hidden">
            {/* Ambient grid background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:16px_16px]" />

            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                  className="w-full max-w-xs p-6 bg-[#111116] border border-[#0066FF]/40 space-y-4 shadow-2xl relative z-10"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[10px] text-[#0066FF] uppercase tracking-widest font-bold">
                      STATE ACCELERATION
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-[#0066FF]"
                    />
                  </div>
                  <div className="font-mono text-xs text-white/80">LATENCY MASKED // 0MS HESITATION</div>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  key="step-1"
                  className="space-y-3 w-full max-w-xs relative z-10"
                >
                  {[0, 1, 2].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 140,
                        damping: 16,
                        delay: item * 0.08,
                      }}
                      className="p-3 bg-[#111116] border border-white/10 flex items-center justify-between"
                    >
                      <span className="font-mono text-xs text-[#FAF9F6]">
                        NODE 0{item + 1} // MOMENTUM VECTOR
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-4 relative z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center mx-auto text-[#0066FF]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="font-display font-bold text-lg text-white uppercase tracking-tight">
                    EYE VELOCITY GUIDED
                  </div>
                  <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                    STAGGER INTERVAL: 40MS CHOREOGRAPHY
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
