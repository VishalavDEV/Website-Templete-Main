import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface AboutCTAProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({
  onOpenProjectModal,
  setCursorType,
}) => {
  return (
    <section
      id="contact"
      className="py-32 sm:py-44 relative bg-[#080808] border-t border-[#ffffff10] overflow-hidden"
    >
      {/* Visual Ambient Aura Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0066FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0066FF]/10 border border-[#0066FF]/20 text-xs font-mono text-[#0066FF] uppercase tracking-[0.25em] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping" />
            <span>NOW BOOKING FOR Q3 / Q4 2026</span>
          </div>

          {/* Heading */}
          <div className="space-y-1 select-none">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-[#FAF9F6] tracking-tight leading-[0.95]">
              LET'S BUILD
            </h2>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-[#FAF9F6]/60 tracking-tight leading-[0.95]">
              WHAT'S NEXT.
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#888888] font-normal max-w-xl mx-auto leading-relaxed">
            Have an ambitious idea? We'd love to hear it. We collaborate directly with visionary founders and leadership teams.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <MagneticButton
              onClick={onOpenProjectModal}
              onCursorEnter={() => setCursorType('button')}
              onCursorLeave={() => setCursorType('default')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest border border-[#0066FF]/40 transition-all duration-300 cursor-pointer"
            >
              <span>Start a Project &nearr;</span>
            </MagneticButton>

            <a
              href="mailto:hello@studio.com"
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/[0.03] hover:bg-white/[0.08] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest border border-[#ffffff15] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#0066FF]" />
              <span>hello@studio.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
