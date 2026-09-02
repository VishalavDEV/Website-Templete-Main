import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowUpRight, RotateCcw, Sparkles } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface SuccessStateProps {
  onReset: () => void;
  onNavigateHome: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const SuccessState: React.FC<SuccessStateProps> = ({
  onReset,
  onNavigateHome,
  setCursorType,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 sm:p-16 rounded-3xl bg-white/[0.02] border border-[#ffffff15] text-center space-y-8 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-[#0066FF]/10 blur-[120px]" />
      </div>

      {/* Animated Check & Ring */}
      <div className="relative inline-flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 -m-4 rounded-full border border-[#0066FF]/40"
        />
        <div className="w-20 h-20 rounded-full bg-[#0066FF]/20 border border-[#0066FF] flex items-center justify-center text-[#0066FF]">
          <CheckCircle className="w-10 h-10 text-[#0066FF]" />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#0066FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INQUIRY RECEIVED</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]">
          THANK YOU. <br />
          <span className="text-[#0066FF]">WE'LL BE IN TOUCH.</span>
        </h2>
      </div>

      {/* Supporting text */}
      <p className="text-base sm:text-xl text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
        Your project details have been received. We review every brief carefully and will get back to you within 24 hours to schedule an introductory strategy dialogue.
      </p>

      {/* Simulated frontend demo banner */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-[#888888] uppercase tracking-wider">
        Simulated Frontend Submission &bull; No Backend Recorded
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <MagneticButton
          id="success-home-btn"
          onClick={onNavigateHome}
          onCursorEnter={() => setCursorType('button')}
          onCursorLeave={() => setCursorType('default')}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#0066FF] hover:text-white transition-all duration-300 cursor-pointer shadow-xl"
        >
          <span>BACK TO HOME</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </MagneticButton>

        <button
          type="button"
          onClick={onReset}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-[#888888] hover:text-white hover:border-white/30 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>START NEW INQUIRY</span>
        </button>
      </div>
    </motion.div>
  );
};
