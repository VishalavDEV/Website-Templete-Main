import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface TeamCTAProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamCTA: React.FC<TeamCTAProps> = ({ onOpenProjectModal, setCursorType }) => {
  return (
    <section className="py-28 sm:py-44 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden text-center">
      {/* Immersive radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#0066FF]/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-10">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
            COLLABORATION & ENGAGEMENT
          </span>
        </motion.div>

        {/* Big Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
        >
          GOOD PEOPLE MAKE <br />
          <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
            good projects.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-xl text-[#A1A1AA] max-w-xl mx-auto font-normal leading-relaxed"
        >
          Have something ambitious in mind? Tell us about your vision, timeline, and commercial goals.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-4"
        >
          <MagneticButton
            id="team-cta-start-project"
            onClick={onOpenProjectModal}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#0066FF] hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-2xl shadow-[#0066FF]/30 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
