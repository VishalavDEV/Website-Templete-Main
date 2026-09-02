import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface ServiceCTAProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  onOpenProjectModal,
  setCursorType,
}) => {
  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            INITIATE ENGAGEMENT
          </span>
        </motion.div>

        {/* Large Headline */}
        <div className="space-y-2 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.9]"
          >
            HAVE A <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              challenge?
            </span> <br />
            LET'S SOLVE IT.
          </motion.h2>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-[#888888] max-w-xl mx-auto font-normal leading-relaxed"
        >
          Tell us what you're building and we'll help find the right strategic and creative direction.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4"
        >
          <MagneticButton
            onClick={onOpenProjectModal}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] hover:bg-[#0055dd] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 rounded-full shadow-2xl shadow-[#0066FF]/30"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
