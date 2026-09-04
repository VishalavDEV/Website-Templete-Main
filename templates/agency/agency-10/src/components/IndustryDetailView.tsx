import React from 'react';
import { IndustryItem } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

interface IndustryDetailViewProps {
  industry: IndustryItem;
  onBack: () => void;
  onOpenInquiry: () => void;
}

export const IndustryDetailView: React.FC<IndustryDetailViewProps> = ({
  industry,
  onBack,
  onOpenInquiry,
}) => {
  return (
    <div id={`industry-detail-${industry.slug}`} className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </button>

          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            Sector Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4">
            {industry.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {industry.tagline} &mdash; {industry.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Scope {industry.name} Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Regulatory & Compliance Highlights */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Compliance &amp; Security Rigor</span>
          </div>
          <h3 className="text-xl font-bold text-slate-950 font-display">
            Compliance Frameworks &amp; Auditing
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Our implementations strictly meet: {(industry.complianceRequirements || industry.challenges || []).join(', ')}. Zero unencrypted transmission, turnkey RBAC audit logs.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(industry.complianceRequirements || industry.challenges || []).map((req, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-xs font-mono text-slate-800 font-semibold">
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Use Cases Detailed */}
        <div>
          <h2 className="text-2xl font-bold text-slate-950 font-display mb-6">
            Engineered Production Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">
                    USE CASE 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    {uc.expectedROI || uc.impact}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{uc.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <h3 className="text-lg font-bold text-white font-display mb-4">
            Sector-Tailored Technology Foundation
          </h3>
          <div className="flex flex-wrap gap-2">
            {industry.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
