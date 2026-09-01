import React, { useState } from 'react';
import { GROWTH_ENGINE_STEPS } from '../data/content';
import { ArrowRight, ChevronRight, CheckCircle2, Cpu, Database, TrendingUp, Layers, Zap } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(GROWTH_ENGINE_STEPS[0].id);

  const activeStep = GROWTH_ENGINE_STEPS.find((s) => s.id === activeStepId) || GROWTH_ENGINE_STEPS[0];

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'challenge': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'strategy': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'execution': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'result': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Zap className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="strategy" className="py-24 bg-slate-950 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <span>03 /</span>
              <span>THE GROWTH ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
              SYSTEMIC ENTERPRISE TRANSFORMATION
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Our closed-loop strategic methodology converts enterprise friction into scalable digital infrastructure and valuation growth.
          </p>
        </div>

        {/* ================= SYSTEMIC GROWTH ENGINE FLOW DIAGRAM ================= */}
        <div className="mt-12 space-y-8">
          
          {/* 4 Connected Flow Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            
            {/* SVG Connector Flow Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0">
              <div className="h-full bg-emerald-500 w-3/4 animate-pulse" />
            </div>

            {GROWTH_ENGINE_STEPS.map((step, index) => {
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`relative z-10 text-left p-6 border transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 border-emerald-400 text-white shadow-xl shadow-emerald-950/40 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      {step.step} / {step.label}
                    </span>
                    <div className="p-1.5 bg-slate-800 rounded border border-slate-700">
                      {getStepIcon(step.id)}
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">{step.subtitle}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-[10px] text-slate-400">
                    <span>STATUS: {isActive ? 'ACTIVE STAGE' : 'SELECT'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Stage Executive Panel */}
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                  STAGE {activeStep.step} DEEP DIVE — {activeStep.label}
                </span>
                <h3 className="text-2xl font-bold font-sans text-white mt-1 uppercase">
                  {activeStep.title}: {activeStep.subtitle}
                </h3>
              </div>

              <div className="inline-flex items-center space-x-2 font-mono text-xs text-emerald-400 bg-emerald-950/80 px-3 py-1.5 border border-emerald-800/80">
                <CheckCircle2 className="w-4 h-4" />
                <span>EXECUTIVE SLA GUARANTEED</span>
              </div>
            </div>

            <p className="text-base text-slate-300 font-sans leading-relaxed max-w-4xl">
              {activeStep.description}
            </p>

            {/* Sub-Deliverables for Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">INPUT TELEMETRY</span>
                <p className="text-slate-200 mt-1">Full codebase audit, cloud FinOps telemetry, process mining logs.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">EXECUTIVE ACTION</span>
                <p className="text-slate-200 mt-1">Deploy senior capability pods; 2-week agile sprint demonstrations.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-emerald-400 font-bold uppercase block">MEASURABLE OUTCOME</span>
                <p className="text-slate-200 mt-1">Quantifiable latency drop, OpEx savings ledger, SOC2 compliance badge.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
