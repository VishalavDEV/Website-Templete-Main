import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, featured = false }) => {
  return (
    <div className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between ${
      featured ? 'lg:grid lg:grid-cols-12 lg:gap-8' : ''
    }`}>
      {/* Cover Image */}
      <div className={`relative overflow-hidden bg-slate-900 ${
        featured ? 'lg:col-span-6 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'
      }`}>
        <img
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
            {caseStudy.industry}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {caseStudy.location}
          </span>
          <span className="font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
            {caseStudy.squareFootage}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 sm:p-8 flex flex-col justify-between ${
        featured ? 'lg:col-span-6' : 'flex-1'
      }`}>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Client: {caseStudy.client}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mt-1">
            <Link to={`/case-studies/${caseStudy.slug}`}>
              {caseStudy.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
            {caseStudy.summary}
          </p>

          {/* Results grid */}
          <div className="grid grid-cols-2 gap-3 my-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
            {caseStudy.results.slice(0, 2).map((res, idx) => (
              <div key={idx}>
                <span className="text-xl font-extrabold text-amber-600">{res.metric}</span>
                <p className="text-xs text-slate-500 mt-0.5">{res.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/case-studies/${caseStudy.slug}`}
            className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
          >
            <span>Read Full Engineering Report</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-xs text-slate-400">{caseStudy.completedYear}</span>
        </div>
      </div>
    </div>
  );
};
