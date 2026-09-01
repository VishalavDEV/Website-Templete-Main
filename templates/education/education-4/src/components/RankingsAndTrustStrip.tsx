import React from 'react';
import { Award, ShieldCheck, TrendingUp, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { INSTITUTIONAL_RANKINGS, UNIVERSITY_INFO } from '../data/universityData';

export const RankingsAndTrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Heraldic Badge / Motto */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Institutional Eminence
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs italic text-slate-300 font-serif">
                "{UNIVERSITY_INFO.motto}"
              </span>
            </div>
            <p className="text-sm font-semibold text-white mt-0.5">
              Chartered 1884 • Member Association of American Universities
            </p>
          </div>
        </div>

        {/* Global Rankings Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full lg:w-auto">
          {INSTITUTIONAL_RANKINGS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left bg-slate-800/50 p-3 rounded-xl border border-slate-700/60">
              <div className="flex items-baseline gap-1">
                <span className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-amber-400">
                  {item.rank}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  {item.year}
                </span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium leading-snug mt-0.5">
                {item.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
