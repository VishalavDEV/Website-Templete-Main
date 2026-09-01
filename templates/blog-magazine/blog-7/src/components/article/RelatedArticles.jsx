import React from 'react';
import { articles } from '../../data/articles';
import { ArticleCard } from '../editorial/ArticleCard';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RelatedArticles({ currentArticle }) {
  if (!currentArticle) return null;

  const related = articles
    .filter((a) => a.id !== currentArticle.id)
    .slice(0, 3);

  return (
    <section className="my-16 pt-10 border-t-2 border-[#141413]">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E5DC]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#D43825]" />
          <h3 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#141413]">
            Further Reading & Monographic Inquiries
          </h3>
        </div>
        <Link
          to={`/category/${currentArticle.categorySlug}`}
          className="text-xs font-bold uppercase tracking-wider text-[#141413] hover:text-[#D43825] flex items-center gap-1"
        >
          <span>More in {currentArticle.category}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((art) => (
          <ArticleCard key={art.id} article={art} variant="standard" showExcerpt={false} />
        ))}
      </div>
    </section>
  );
}
