import React from 'react';
import { useApp } from '../context/AppContext';
import { analyticsService } from '../services/analyticsService';
import { DashboardDateRange } from '../types';
import {
  X,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Download,
  ArrowRight
} from 'lucide-react';
import { reportService } from '../services/reportService';

interface AiInsightModalProps {
  currentRange: DashboardDateRange;
}

export const AiInsightModal: React.FC<AiInsightModalProps> = ({ currentRange }) => {
  const { isAiInsightModalOpen, setIsAiInsightModalOpen, addToast } = useApp();

  if (!isAiInsightModalOpen) return null;

  const insight = analyticsService.generateDynamicAIInsight(currentRange);

  const handleExportInsight = () => {
    reportService.exportDashboardCSV(currentRange);
    addToast({
      type: 'success',
      title: 'Insight Report Exported',
      message: `Downloaded CSV intelligence summary for ${currentRange.toUpperCase()}.`
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-start justify-between">
          <div className="space-y-1.5 max-w-lg">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NEXORA Autonomous Synthesis</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">• {insight.rangeName}</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white">{insight.title}</h3>
          </div>
          <button
            onClick={() => setIsAiInsightModalOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close insight modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Banner */}
        <div className="grid grid-cols-3 bg-[#08080A] border-b border-white/5 p-4 text-center divide-x divide-white/5">
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-500">Synthesis Confidence</span>
            <p className="text-lg font-bold text-white font-display mt-0.5">{insight.confidence}%</p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-500">Projected Alpha</span>
            <p className="text-lg font-bold text-emerald-400 font-display mt-0.5">{insight.impactScore}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-500">Revenue in Scope</span>
            <p className="text-lg font-bold text-white font-display mt-0.5">{insight.totalRevenue}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-5">
          {/* Executive Summary */}
          <div className="space-y-1.5 p-4 rounded-xl bg-[#08080A] border border-white/5">
            <h4 className="text-xs font-bold text-white uppercase font-mono flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
              <span>Executive Synthesis</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{insight.summary}</p>
          </div>

          {/* Actionable Recommendations */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase font-mono flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Prescriptive Action Vectors</span>
            </h4>
            <div className="space-y-2">
              {insight.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08080A] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Anomalies & Telemetry */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase font-mono flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Anomalies & Observed Outliers</span>
            </h4>
            <div className="space-y-2">
              {insight.anomalies.map((anom, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#08080A] border border-white/5 text-xs text-slate-400">
                  • {anom}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">Generated at {insight.generatedAt}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAiInsightModalOpen(false)}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Dismiss
            </button>
            <button
              onClick={handleExportInsight}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-md shadow-white/5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Full CSV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
