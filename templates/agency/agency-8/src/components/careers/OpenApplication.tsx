import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';
import { MagneticButton } from '../MagneticButton';

interface OpenApplicationProps {
  onOpenGeneralModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const OpenApplication: React.FC<OpenApplicationProps> = ({
  onOpenGeneralModal,
  setCursorType,
}) => {
  return (
    <section className="py-24 sm:py-36 border-b border-white/10 relative overflow-hidden bg-[#080808]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="p-8 sm:p-16 lg:p-20 bg-[#0C0C10] border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                OPEN INVITATION
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[0.98]">
              DON'T SEE <br />
              YOUR ROLE?
            </h2>

            <p className="font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed max-w-xl">
              We're always interested in meeting thoughtful people who believe they can make something better. We hire for curiosity, depth, and character over predefined job titles.
            </p>
          </div>

          {/* Action Button */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <MagneticButton
              id="general-application-btn"
              onClick={onOpenGeneralModal}
              onCursorEnter={() => setCursorType('button', 'APPLY ↗')}
              onCursorLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#FAF9F6] hover:bg-[#0066FF] text-black hover:text-white font-mono text-xs uppercase tracking-widest font-bold border border-white/20 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <span>SEND GENERAL APPLICATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
