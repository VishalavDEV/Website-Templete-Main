import React from 'react';
import { CaseStudyItem } from '../types';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudyItem;
  onSelectCaseStudy: (item: CaseStudyItem) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onSelectCaseStudy }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Cover Image with Overlay Metric */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
            {caseStudy.category}
          </div>

          {/* Key Metric Badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">{caseStudy.metricLabel}</p>
              <p className="text-xl font-extrabold text-blue-400">{caseStudy.metric}</p>
            </div>
            <div className="p-2 bg-blue-600 text-white rounded-lg">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {caseStudy.shortDesc}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onSelectCaseStudy(caseStudy)}
          className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>View Full Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
