import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details?: string[];
  iconName?: string;
}

interface StepperProps {
  steps: StepItem[];
  className?: string;
  onStepSelect?: (index: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  className = '',
  onStepSelect,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleSelect = (idx: number) => {
    setActiveStep(idx);
    if (onStepSelect) onStepSelect(idx);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Step Indicators Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <button
              key={step.number}
              onClick={() => handleSelect(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                isActive
                  ? 'bg-indigo-50/80 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500'
                  : isPassed
                  ? 'bg-white border-slate-200/80 hover:border-indigo-300'
                  : 'bg-white/60 border-slate-200/60 hover:border-slate-300'
              }`}
            >
              {/* Step indicator top line */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : isPassed
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isPassed ? 'DONE' : step.number}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                )}
              </div>

              <h4
                className={`text-sm font-bold transition-colors ${
                  isActive
                    ? 'text-indigo-950'
                    : isPassed
                    ? 'text-slate-800'
                    : 'text-slate-500 group-hover:text-slate-700'
                }`}
              >
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                {step.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200/80">
              <span>Step {steps[activeStep].number}</span>
              <span>•</span>
              <span className="text-indigo-600">{steps[activeStep].tagline}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {steps[activeStep].description}
            </p>

            {steps[activeStep].details && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                  >
                    <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <div className="flex gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => handleSelect(Math.max(0, activeStep - 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 cursor-pointer border border-slate-200"
              >
                Previous
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => handleSelect(Math.min(steps.length - 1, activeStep + 1))}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white cursor-pointer flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {activeStep + 1} of {steps.length} roadmap milestones
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
