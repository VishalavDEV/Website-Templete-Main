import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from './ArticleCard';
import { ArrowRight } from 'lucide-react';

export function CategoryBlock({ category, articles }) {
  if (!category || !articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="my-14">
      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#141413]">
        <div className="flex items-center gap-3">
          <span
            className="w-3.5 h-3.5 inline-block"
            style={{ backgroundColor: category.accentColor || '#141413' }}
          />
          <h3 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#141413]">
            {category.name}
          </h3>
        </div>
        <Link
          to={`/category/${category.slug}`}
          className="text-xs font-bold uppercase tracking-wider text-[#141413] hover:text-[#D43825] flex items-center gap-1 group"
        >
          <span>Explore Desk</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: 1 Big Lead + 3 Side Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <ArticleCard article={leadArticle} variant="standard" showExcerpt={true} />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {sideArticles.map((art) => (
            <ArticleCard key={art.id} article={art} variant="compact" />
          ))}
          <div className="p-4 bg-[#F4F1EA] border border-[#E8E5DC] text-xs">
            <span className="font-bold text-[#141413] block mb-1">Trending in {category.name}:</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {category.tags?.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-white border border-[#D1CDC4] text-[0.6875rem] text-[#52524E]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
