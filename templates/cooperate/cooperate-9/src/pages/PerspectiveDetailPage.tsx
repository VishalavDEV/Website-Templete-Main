import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RESEARCH_ARTICLES } from '../data/research';

export const PerspectiveDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = RESEARCH_ARTICLES.find(a => a.slug === slug) || RESEARCH_ARTICLES[0];

  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
          <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
          <span>/</span>
          <Link to="/perspectives" className="hover:text-[#191919]">Perspectives</Link>
          <span>/</span>
          <span className="text-[#191919]">{article.category}</span>
        </div>

        {/* HEADER */}
        <div className="space-y-4 pb-8 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono bg-[#F4F3F3] px-2.5 py-1 rounded">
              {article.category}
            </span>
            <span className="text-xs text-[#191919]/50 font-mono">
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-[#191919]/60 italic font-sans">
            "{article.subtitle}"
          </p>

          <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#191919]/60">
            <div>
              <span className="font-medium text-[#191919]">{article.author.name}</span> — {article.author.role}
            </div>
            <div>{article.date}</div>
          </div>
        </div>

        {/* KEY TAKEAWAYS CALLOUT */}
        <div className="p-6 sm:p-8 bg-[#F4F3F3] rounded-2xl space-y-3 border border-[#E5E5E5]">
          <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
            EXECUTIVE FIDUCIARY SUMMARY
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-[#191919]/80 font-light">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-xs font-mono text-[#191919]/40 mt-0.5">•</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ARTICLE FULL BODY */}
        <div className="space-y-6 text-sm sm:text-base text-[#191919]/80 leading-relaxed font-light">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* BACK TO PERSPECTIVES & CONTACT */}
        <div className="pt-12 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/perspectives"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#191919]/70 hover:text-[#191919]"
          >
            <span>← All Research Publications</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-white text-xs font-medium rounded-lg hover:bg-[#191919]/90"
          >
            <span>Discuss This Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
