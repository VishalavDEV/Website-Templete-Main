import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface WorkCTAProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
}

export const WorkCTA: React.FC<WorkCTAProps> = ({ onOpenProjectModal, setCursorType }) => {
  return (
    <section className="py-32 sm:py-48 bg-[#080808] relative overflow-hidden text-center">
      {/* Cinematic Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#ffffff15]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            INITIATE COLLABORATION
          </span>
        </motion.div>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#FAF9F6] tracking-[-0.04em] uppercase leading-[0.88]"
        >
          YOUR PROJECT<br />
          COULD BE<br />
          <span className="text-[#0066FF]">NEXT.</span>
        </motion.h2>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-[#888888] font-normal max-w-xl mx-auto"
        >
          Let’s create something worth remembering.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex justify-center"
        >
          <MagneticButton
            id="work-final-cta-btn"
            onClick={onOpenProjectModal}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="group px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#0066FF] text-white font-display font-black text-sm sm:text-base uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all duration-300 shadow-2xl shadow-[#0066FF]/40 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
