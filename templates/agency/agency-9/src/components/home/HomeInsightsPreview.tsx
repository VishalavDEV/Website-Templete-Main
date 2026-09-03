import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../../data/articles';

export const HomeInsightsPreview: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#CFC7BE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#CFC7BE]">
        <div>
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-2">
            // 04 — EDITORIAL INSIGHTS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight uppercase text-[#2B2727]">
            THOUGHTS ON CULTURE, DESIGN & TECH.
          </h2>
        </div>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase hover:text-[#D65F3F] transition-colors"
          data-cursor="link"
        >
          <span>READ ALL INSIGHTS</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.slice(0, 3).map((article) => (
          <Link
            key={article.slug}
            to={`/insights/${article.slug}`}
            className="group block space-y-4"
            data-cursor="link"
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-[#CFC7BE] bg-[#2B2727]">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#2B2727] text-[#FAF7F1] font-mono text-[10px] px-2 py-1 uppercase">
                {article.category}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs text-[#77716D]">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-[#2B2727] group-hover:text-[#D65F3F] transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-xs text-[#77716D] line-clamp-2 leading-relaxed font-sans">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
