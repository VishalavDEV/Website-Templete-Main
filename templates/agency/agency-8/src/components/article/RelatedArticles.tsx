import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Article, CursorType } from '../../types';

interface RelatedArticlesProps {
  articles: Article[];
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  setCursorType,
  onNavigate,
}) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#060608] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              PERSPECTIVES
            </span>
          </div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#FAF9F6] font-bold">
            KEEP READING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, index) => {
            const targetPath = `/insights/${article.slug}`;
            return (
              <article
                key={article.id || index}
                onClick={() => onNavigate(targetPath)}
                onMouseEnter={() => setCursorType('project', 'READ ↗')}
                onMouseLeave={() => setCursorType('default')}
                className="group cursor-pointer flex flex-col justify-between space-y-6"
              >
                {/* Visual Preview */}
                <div className="w-full h-[240px] sm:h-[280px] overflow-hidden border border-white/10 relative bg-[#0e0e12]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/60 border border-white/10 font-mono text-[9px] uppercase tracking-widest text-[#0066FF]">
                    {article.category}
                  </div>
                </div>

                {/* Typography & Details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF9F6] uppercase tracking-tight group-hover:text-[#0066FF] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-body text-xs text-[#888888] font-light line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#666666]">
                    <span>{article.readTime}</span>
                    <div className="flex items-center gap-1 text-[#FAF9F6] group-hover:text-[#0066FF] transition-colors font-semibold uppercase">
                      <span>READ ESSAY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
