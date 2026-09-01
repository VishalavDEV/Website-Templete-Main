import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESEARCH_ARTICLES } from '../data/research';

export const PerspectivesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* EDITORIAL HERO */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
            <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
            <span>/</span>
            <span>Perspectives</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block">
            MARKET INTELLIGENCE & RESEARCH
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#191919] font-normal leading-[1.1] tracking-tight">
            Institutional Research
          </h1>

          <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light">
            Quarterly macro assessments, sovereign rate trajectory forecasts, and thematic underwriting papers published for institutional clients and fiduciaries.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="space-y-6 pt-8 border-t border-[#E5E5E5]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_ARTICLES.map((art) => (
              <Link
                key={art.slug}
                to={`/perspectives/${art.slug}`}
                className="p-8 bg-[#F4F3F3] hover:bg-[#EAEAEA] rounded-2xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#191919]/50">
                    <span className="uppercase tracking-wider">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#191919] group-hover:text-[#191919]/70 transition-colors font-normal leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs text-[#191919]/60 italic">
                    "{art.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#191919]/75 leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#191919]/50">
                    {art.author.name} • {art.date}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#191919] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#191919] group-hover:text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
