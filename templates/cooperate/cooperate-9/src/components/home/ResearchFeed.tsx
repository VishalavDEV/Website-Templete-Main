import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RESEARCH_ARTICLES, ResearchArticle } from '../../data/research';

export const ResearchFeed: React.FC = () => {
  const featuredArticle = RESEARCH_ARTICLES.find((a) => a.featured) || RESEARCH_ARTICLES[0];
  const otherArticles = RESEARCH_ARTICLES.filter((a) => !a.featured);

  return (
    <section id="perspectives" className="py-24 sm:py-32 bg-[#F4F3F3] border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              06 / INTELLIGENCE
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              MACROECONOMIC RESEARCH
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              How we see the world.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Independent macroeconomic intelligence, sovereign curve forecasting, and structural capital market analyses published quarterly for our clients and board partners.
            </p>
          </div>
        </div>

        {/* FEATURED RESEARCH PAPER (Editorial Hero Card) */}
        <div className="pt-12 pb-12 border-b border-[#E5E5E5]">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 sm:p-12 md:p-14 hover:border-[#191919]/40 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono bg-[#F4F3F3] px-2.5 py-1 rounded">
                    FLAGSHIP INTELLIGENCE • {featuredArticle.category}
                  </span>
                  <span className="text-xs text-[#191919]/40 font-mono">
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191919] font-normal leading-[1.15] group-hover:text-[#191919]/80 transition-colors">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#191919]/60 font-sans italic">
                  "{featuredArticle.subtitle}"
                </p>

                <p className="text-sm sm:text-base text-[#191919]/75 leading-relaxed font-light">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#191919]/60">
                  <span>Author: {featuredArticle.author.name}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end lg:border-l lg:border-[#E5E5E5] lg:pl-10 space-y-6">
                <div className="space-y-2 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block">
                    KEY TAKEAWAYS SUMMARY
                  </span>
                  <ul className="space-y-2 text-xs text-[#191919]/80">
                    {featuredArticle.keyTakeaways.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#191919]/40 font-mono mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/perspectives/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-white text-xs font-medium rounded-lg hover:bg-[#191919]/90 transition-colors group/btn"
                >
                  <span>Read Complete Publication</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER ARTICLES (Editorial Rows) */}
        <div className="pt-10 space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block mb-6">
            RECENT RESEARCH PUBLICATIONS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/perspectives/${article.slug}`}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:border-[#191919]/50 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#191919]/50">
                    <span className="text-[10px] uppercase tracking-wider">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#191919] group-hover:text-[#191919]/75 transition-colors font-normal leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#191919]/70 leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#191919]/50">
                    <span>{article.author.name}</span> • <span>{article.date}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#F4F3F3] group-hover:bg-[#191919] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 text-[#191919] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
