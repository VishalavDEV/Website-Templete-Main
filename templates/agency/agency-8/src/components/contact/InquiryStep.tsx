import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CursorType } from '../../types';
import { MagneticButton } from '../MagneticButton';

interface InquiryStepProps {
  stepNumber: number;
  totalSteps: number;
  question: string;
  subtitle?: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  canProceed: boolean;
  nextButtonLabel?: string;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const InquiryStep: React.FC<InquiryStepProps> = ({
  stepNumber,
  totalSteps,
  question,
  subtitle,
  children,
  onNext,
  onPrev,
  canProceed,
  nextButtonLabel = 'CONTINUE',
  setCursorType,
}) => {
  return (
    <div className="space-y-8">
      {/* Step Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0066FF]">
            STEP 0{stepNumber} // 0{totalSteps}
          </span>
          <span className="font-mono text-xs text-[#888888]">
            PROJECT INTAKE
          </span>
        </div>

        <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]">
          {question}
        </h3>

        {subtitle && (
          <p className="text-sm sm:text-base text-[#888888] font-mono">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main Interactive Content */}
      <div>{children}</div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <div>
          {onPrev ? (
            <button
              type="button"
              onClick={onPrev}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-[#888888] hover:text-white hover:border-white/30 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK</span>
            </button>
          ) : (
            <span className="text-xs font-mono text-[#888888] uppercase tracking-widest">
              STEP 1 OF {totalSteps}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[11px] font-mono text-[#888888]">
            Press Enter ↵
          </span>
          <MagneticButton
            id={`inquiry-step-${stepNumber}-next-btn`}
            onClick={() => {
              if (canProceed) onNext();
            }}
            disabled={!canProceed}
            onCursorEnter={() => canProceed && setCursorType('button')}
            onCursorLeave={() => setCursorType('default')}
            className={`group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
              canProceed
                ? 'bg-white text-black hover:bg-[#0066FF] hover:text-white shadow-xl'
                : 'bg-white/10 text-[#888888] cursor-not-allowed opacity-50'
            }`}
          >
            <span>{nextButtonLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
