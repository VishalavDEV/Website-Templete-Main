import React from 'react';
import { TRUSTED_COMPANIES } from '../data/content';

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center space-x-2 font-mono text-xs text-slate-500 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span>GLOBAL PARTNER ADVISORY &amp; ENTERPRISE DEPLOYMENTS</span>
          </div>
          <span className="font-mono text-xs text-slate-400">SOC2 TYPE II • ISO 27001 AUDITED</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200 mt-6 border border-slate-200">
          {TRUSTED_COMPANIES.map((company, index) => (
            <div
              key={index}
              className="p-5 bg-white hover:bg-slate-50 transition-colors group cursor-default flex flex-col items-center justify-center text-center"
            >
              <div className="flex items-center space-x-1.5 text-slate-700 group-hover:text-slate-950 transition-colors">
                <span className="text-sm font-mono font-bold text-emerald-600">
                  {company.symbol}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  {company.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                {company.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
