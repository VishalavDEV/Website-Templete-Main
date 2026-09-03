import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Building,
  TrendingUp,
  Zap,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { activeCaseStudyModal, setActiveCaseStudyModal, setIsConsultationModalOpen } = useApp();

  if (!activeCaseStudyModal) return null;

  const cs = activeCaseStudyModal;

  const handleBookSimilar = () => {
    setActiveCaseStudyModal(null);
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
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {cs.industry} Sector
              </span>
              <span className="text-xs text-slate-400 font-mono">• {cs.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {cs.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 font-medium">
              <Building className="w-4 h-4 text-indigo-400" />
              <span>{cs.company}</span>
            </p>
          </div>
          <button
            onClick={() => setActiveCaseStudyModal(null)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="grid grid-cols-3 bg-[#08080A] border-b border-white/5 p-4 text-center divide-x divide-white/5">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Delivered ROI</span>
            <p className="text-xl sm:text-2xl font-extrabold text-white font-display mt-0.5">
              {cs.roi}
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Processing Velocity</span>
            <p className="text-xl sm:text-2xl font-extrabold text-indigo-300 font-display mt-0.5">
              {cs.processingTime}
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Operational Lift</span>
            <p className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-display mt-0.5">
              {cs.efficiency}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#08080A] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#08080A] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The NEXORA Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
            </div>
          </div>

          {/* Architectural Approach */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Engineering & Deployment Roadmap
            </h4>
            <div className="space-y-2">
              {cs.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#08080A] border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Results Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Audited Business Impact</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {cs.keyResults.map((kr, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#08080A] border border-white/5 space-y-1">
                  <span className="text-lg font-bold text-emerald-400 font-display">{kr.improvement}</span>
                  <h5 className="text-xs font-semibold text-slate-200">{kr.metric}</h5>
                  <p className="text-[11px] text-slate-400">{kr.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Executive Quote */}
          {cs.clientQuote && (
            <div className="p-4 rounded-xl bg-[#08080A] border border-white/5 relative">
              <Quote className="w-6 h-6 text-indigo-400/30 absolute top-3 right-3" />
              <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed pr-8">
                &ldquo;{cs.clientQuote.text}&rdquo;
              </p>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{cs.clientQuote.author}</span>
                <span className="text-slate-400">{cs.clientQuote.role}</span>
              </div>
            </div>
          )}

          {/* Technology stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {cs.technologies.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-md text-[11px] bg-white/5 text-slate-300 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Audited & verified enterprise transformation</span>
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCaseStudyModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={handleBookSimilar}
              className="flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-md shadow-white/5 transition-all w-full sm:w-auto"
            >
              <span>Deploy for Your Enterprise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
