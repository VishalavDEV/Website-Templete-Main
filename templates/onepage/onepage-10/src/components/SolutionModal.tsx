import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Cpu
} from 'lucide-react';

export const SolutionModal: React.FC = () => {
  const { activeSolutionModal, setActiveSolutionModal, setIsConsultationModalOpen } = useApp();

  if (!activeSolutionModal) return null;

  const sol = activeSolutionModal;

  const handleConsult = () => {
    setActiveSolutionModal(null);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-3xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-start justify-between">
          <div className="space-y-1.5 max-w-xl">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {sol.category} Practice
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {sol.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">{sol.tagline}</p>
          </div>
          <button
            onClick={() => setActiveSolutionModal(null)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close solution modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#08080A] border-b border-white/5 p-4 gap-3">
          {sol.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#0C0C12] border border-white/5 text-center space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-slate-500">{m.label}</span>
              <p className="text-xl font-extrabold text-white font-display">{m.value}</p>
              <p className="text-[11px] text-slate-400 truncate">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Executive Briefing & Strategic Value</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#08080A] p-4 rounded-xl border border-white/5">
              {sol.fullOverview}
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Core Platform Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sol.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#08080A] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Engagement Deliverables & Artifacts</span>
            </h4>
            <div className="space-y-2">
              {sol.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#08080A] border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology stack */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-slate-400 uppercase font-mono">Infrastructure & Stacks:</span>
            <div className="flex flex-wrap gap-2">
              {sol.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-slate-300 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed zero data leakage sovereign deployment</span>
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveSolutionModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={handleConsult}
              className="flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-md shadow-white/5 transition-all w-full sm:w-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Consult with Practice Lead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
