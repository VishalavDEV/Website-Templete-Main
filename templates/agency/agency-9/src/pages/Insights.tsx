import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { ARTICLES } from '../data/articles';

const CATEGORIES = ['ALL', 'DESIGN', 'CULTURE', 'TECHNOLOGY', 'STRATEGY', 'PROCESS'];

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'ALL') return ARTICLES;
    return ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const featuredArticle = ARTICLES[0];

  return (
    <>
      <SEO
        title="Editorial Insights — OFFGRID® Journal"
        description="Essays, critique, and commentary on branding, design brutalism, WebGL technology, and cultural velocity."
      />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
        {/* Page Header */}
        <section className="mb-16 pb-8 border-b border-[#CFC7BE]">
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-3">
            // OFFGRID JOURNAL // ISSUE NO. 04
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-[#2B2727] mb-6">
            EDITORIAL INSIGHTS
          </h1>
          <p className="font-serif-editorial italic text-2xl md:text-3xl text-[#332832] max-w-2xl">
            Critique, code, and commentary from our directors.
          </p>
        </section>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-[#CFC7BE]">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-display text-xs tracking-widest uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#2B2727] text-[#FAF7F1] border-[#2B2727]'
                    : 'bg-[#FAF7F1] text-[#2B2727] border-[#CFC7BE] hover:border-[#D65F3F]'
                }`}
                data-cursor="link"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Lead Featured Article Banner (When 'ALL' is selected) */}
        {activeCategory === 'ALL' && featuredArticle && (
          <section className="mb-20">
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#CFC7BE] bg-[#FAF7F1] p-6 md:p-10 hover:border-[#D65F3F] transition-all"
              data-cursor="link"
            >
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden border border-[#CFC7BE] relative">
                <img
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#D65F3F] text-[#FAF7F1] font-mono text-[10px] px-3 py-1 uppercase font-bold">
                  FEATURED ESSAY // {featuredArticle.category}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4 font-mono text-xs text-[#77716D]">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2B2727] group-hover:text-[#D65F3F] transition-colors uppercase leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-[#77716D] leading-relaxed font-sans line-clamp-4">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-[#CFC7BE]">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#CFC7BE]"
                    />
                    <span className="font-mono text-xs font-bold uppercase text-[#2B2727]">
                      BY {featuredArticle.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-display text-xs font-bold text-[#D65F3F] uppercase">
                    READ ESSAY <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="group border border-[#CFC7BE] bg-[#FAF7F1] p-6 flex flex-col justify-between hover:border-[#D65F3F] transition-all"
              data-cursor="link"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden border border-[#CFC7BE] relative">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2B2727] text-[#FAF7F1] font-mono text-[9px] px-2 py-1 uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="flex justify-between font-mono text-xs text-[#77716D]">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#2B2727] group-hover:text-[#D65F3F] transition-colors leading-tight uppercase">
                  {article.title}
                </h3>

                <p className="text-xs text-[#77716D] line-clamp-3 leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#CFC7BE] flex items-center justify-between font-mono text-xs">
                <span className="text-[#77716D]">BY {article.author.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D65F3F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};
