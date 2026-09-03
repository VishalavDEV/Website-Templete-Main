import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';

export const FeatureModal: React.FC = () => {
  const { activeFeatureModal, setActiveFeatureModal, setIsConsultationModalOpen } = useApp();

  if (!activeFeatureModal) return null;

  const f = activeFeatureModal;

  const handleConsult = () => {
    setActiveFeatureModal(null);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-start justify-between">
          <div className="space-y-1 max-w-md">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {f.category}
              </span>
              {f.badge && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">
                  {f.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold font-display text-white">{f.title}</h3>
          </div>
          <button
            onClick={() => setActiveFeatureModal(null)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close feature details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-5">
          <div className="p-4 rounded-xl bg-[#08080A] border border-white/5 space-y-1.5">
            <h5 className="text-xs font-bold text-indigo-400 uppercase font-mono">Architecture Description</h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{f.detailedDescription}</p>
          </div>

          <div className="space-y-2.5">
            <h5 className="text-xs font-bold text-slate-300 uppercase font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Production Specifications & Capabilities</span>
            </h5>
            <div className="space-y-2">
              {f.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08080A] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise SLA 99.999% guaranteed</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFeatureModal(null)}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleConsult}
              className="px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-md shadow-white/5 transition-all"
            >
              Request Architecture Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
