import React, { useState } from 'react';
import { PROCESS_STEPS, ProcessStep } from '../data/process';
import { DynamicIcon } from './DynamicIcon';
import { CheckCircle2, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';

interface ProcessWorkflowProps {
  onOpenInquiry: () => void;
}

export const ProcessWorkflow: React.FC<ProcessWorkflowProps> = ({ onOpenInquiry }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process-section" className="py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Methodology &amp; Velocity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
            A Predictable, 7-Step Engineering Journey.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From initial mathematical feasibility through continuous model optimization, our development lifecycle removes technical ambiguity and guarantees on-time delivery.
          </p>
        </div>

        {/* Interactive Steps Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3 sm:p-4 rounded-xl text-left transition-all border cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${activeStepIndex === idx ? 'text-blue-400' : 'text-slate-400'}`}>
                  {step.number}
                </span>
                <DynamicIcon name={step.icon} className={`w-3.5 h-3.5 ${activeStepIndex === idx ? 'text-blue-400' : 'text-slate-400'}`} />
              </div>
              <p className="text-xs font-bold mt-2 truncate">
                {step.title.split(' ')[0]}
              </p>
              <p className={`text-[10px] font-mono mt-0.5 truncate ${activeStepIndex === idx ? 'text-slate-400' : 'text-slate-500'}`}>
                {step.duration}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Overview and Activities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-mono text-sm font-bold">
                  Step {activeStep.number}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  Estimated Time: {activeStep.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  {activeStep.title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mt-1">
                  {activeStep.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  {activeStep.description}
                </p>
              </div>

              {/* Key Activities */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
                  Core Engineering Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Deliverables & Tooling */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Concrete Client Deliverables</span>
                </div>
                <div className="space-y-2 text-xs">
                  {activeStep.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/80 border border-slate-750 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooling */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Tooling &amp; Infrastructure:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeStep.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                  className="text-xs text-slate-400 hover:text-white font-mono cursor-pointer"
                >
                  &larr; Previous Step
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                  className="text-xs text-blue-400 hover:text-blue-300 font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Step &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
