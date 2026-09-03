import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CASE_STUDIES_DATA } from '../data/caseStudies';
import {
  Building,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';

const INDUSTRIES = [
  'All Sectors',
  'Finance',
  'Healthcare',
  'Retail',
  'Technology',
  'Industrial',
  'Energy'
];

export const CaseStudiesSection: React.FC = () => {
  const { setActiveCaseStudyModal, setIsConsultationModalOpen } = useApp();
  const [selectedIndustry, setSelectedIndustry] = useState('All Sectors');

  const filteredCaseStudies = useMemo(() => {
    if (selectedIndustry === 'All Sectors') return CASE_STUDIES_DATA;
    return CASE_STUDIES_DATA.filter(cs => cs.industry === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <section id="case-studies" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Audited Client Case Studies.
          </h2>
          <p className="text-base text-slate-400">
            Real enterprise transformations delivered across regulated global sectors, audited with verified ROI metrics.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {INDUSTRIES.map(ind => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedIndustry === ind
                  ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map(cs => (
            <div
              key={cs.id}
              className="rounded-2xl bg-[#0C0C12] border border-white/5 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-950/20"
            >
              <div className="space-y-4">
                {/* Top Badge & Sector */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{cs.year}</span>
                </div>

                {/* Company & Title */}
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">{cs.company}</p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cs.summary}
                </p>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">ROI</span>
                    <span className="text-sm font-bold text-indigo-400 font-display block mt-0.5">{cs.roi}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Latency</span>
                    <span className="text-sm font-bold text-slate-200 font-display block mt-0.5">{cs.processingTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Efficiency</span>
                    <span className="text-sm font-bold text-emerald-400 font-display block mt-0.5">{cs.efficiency}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Audited Outcomes</span>
                <button
                  onClick={() => setActiveCaseStudyModal(cs)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
