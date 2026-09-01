import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudyItem } from '../types';
import { ArrowUpRight, TrendingUp, Building2, Cpu, Check } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCaseStudy: (caseStudy: CaseStudyItem) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy }) => {
  return (
    <section id="case-studies" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">05 /</span>
              <span>EXECUTIVE CASE BRIEFS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              REAL-WORLD VALUATION IMPACT
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Rigorous technical case studies detailing architecture modernizations, legacy migrations, and measurable financial ROI.
          </p>
        </div>

        {/* Case Studies Briefs List */}
        <div className="mt-12 space-y-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-[#FAF9F6] border border-slate-300 p-6 sm:p-8 hover:border-slate-900 transition-all duration-200 cursor-pointer group shadow-xs hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Thumbnail Image with Overlay Metric */}
                <div className="lg:col-span-4 relative overflow-hidden border border-slate-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                  
                  <div className="absolute top-4 left-4 bg-slate-900 text-white font-mono text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                    {study.code}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-emerald-400 text-slate-950 font-mono font-extrabold px-3 py-1.5 text-sm shadow-md">
                    {study.metric} {study.metricLabel}
                  </div>
                </div>

                {/* Right Brief Content */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-slate-500 uppercase font-bold">{study.clientIndustry}</span>
                    <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded uppercase">
                      VERIFIED ENGAGEMENT
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-950 uppercase group-hover:text-emerald-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-700 font-sans leading-relaxed">
                    {study.shortDesc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white border border-slate-300 font-mono text-[10px] text-slate-700 font-bold uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200 font-mono text-xs">
                    <span className="text-slate-500">EXECUTIVE AUDIT AVAILABLE</span>
                    <div className="inline-flex items-center text-slate-950 font-bold group-hover:text-emerald-700 uppercase tracking-wider">
                      <span>READ CASE STUDY BRIEF</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
