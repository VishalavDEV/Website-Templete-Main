import React from 'react';
import { INDUSTRIES_DATA } from '../data/industries';
import { IndustryItem } from '../types';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface IndustriesSectionProps {
  onViewIndustry: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onViewIndustry, onOpenInquiry }) => {
  return (
    <section id="industries-section" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Sector Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
              Engineered for Industry-Specific Regulations &amp; Workflows.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We understand that clinical healthcare, quantitative finance, and industrial IoT have drastically distinct compliance and latency constraints.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Custom Industry Scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-1 text-xs font-mono text-blue-600 font-semibold line-clamp-1">
                  {ind.tagline}
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {ind.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Primary Use Cases:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {ind.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium truncate">{uc.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {ind.technologies.slice(0, 2).join(' &bull; ')}
                </span>
                <button
                  onClick={() => onViewIndustry(ind.slug)}
                  className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Sector</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
