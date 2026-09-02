import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CursorType } from '../../types';
import { MagneticButton } from '../MagneticButton';

interface InsightsCTAProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const InsightsCTA: React.FC<InsightsCTAProps> = ({
  setCursorType,
  onNavigate,
}) => {
  return (
    <section className="py-28 sm:py-40 px-6 sm:px-8 lg:px-12 bg-[#080808] relative overflow-hidden text-center">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#0066FF]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
            INITIATION
          </span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] uppercase tracking-tight leading-[0.96]">
          HAVE AN IDEA<br />WORTH EXPLORING?
        </h2>

        <p className="text-base sm:text-xl text-[#888888] font-light max-w-xl mx-auto font-body">
          Let's turn it into something people remember.
        </p>

        <div className="pt-6">
          <MagneticButton
            id="insights-start-project-btn"
            onClick={() => onNavigate('/contact')}
            onCursorEnter={() => setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/40 transition-all duration-300 cursor-pointer shadow-xl shadow-[#0066FF]/10"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
