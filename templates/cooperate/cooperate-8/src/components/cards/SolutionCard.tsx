import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Solution } from '../../types';

interface SolutionCardProps {
  solution: Solution;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
            Enterprise Solution
          </span>
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
          <Link to={`/solutions/${solution.slug}`}>
            {solution.title}
          </Link>
        </h3>

        <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
          {solution.shortDescription}
        </p>

        {/* ROI Metrics Preview */}
        <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
          {solution.roiMetrics.slice(0, 2).map((roi, idx) => (
            <div key={idx}>
              <span className="text-lg font-extrabold text-amber-600">{roi.value}</span>
              <p className="text-[11px] text-slate-500 line-clamp-1">{roi.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/solutions/${solution.slug}`}
          className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Solution Framework</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
