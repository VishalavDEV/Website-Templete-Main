import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { Bookmark, Clock, Volume2, ArrowUpRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export function ArticleCard({ article, variant = 'standard', rank, showExcerpt = true }) {
  const { isBookmarked, toggleBookmark } = useMagazine();

  if (!article) return null;
  const isSaved = isBookmarked(article.id);

  // Variant: Ranked (e.g. 01, 02, 03)
  if (variant === 'ranked') {
    return (
      <div className="editorial-card group flex items-start gap-4 py-4 border-b border-[#E8E5DC] last:border-b-0">
        <span className="numbered-rank shrink-0 w-10 text-right">
          {rank ? String(rank).padStart(2, '0') : '01'}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-1">
            <span className="text-[#D43825] font-semibold">{article.category}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>
          <Link to={`/article/${article.slug}`}>
            <h4 className="font-serif-headline text-base sm:text-lg font-bold text-[#141413] card-title-hover leading-snug line-clamp-2">
              {article.title}
            </h4>
          </Link>
          <span className="text-xs text-[#73736C] mt-1 block">
            By {article.author.name}
          </span>
        </div>
      </div>
    );
  }

  // Variant: Horizontal
  if (variant === 'horizontal') {
    return (
      <article className="editorial-card group bg-white border border-[#E8E5DC] p-4 sm:p-5 flex flex-col sm:flex-row gap-5 shadow-xs hover:border-[#141413] transition-all">
        <div className="sm:w-2/5 aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#EAE7DF] shrink-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover card-img-zoom"
            loading="lazy"
          />
        </div>
        <div className="sm:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#D43825]">
                {article.category}
              </span>
              <span className="text-xs text-[#73736C] font-mono">{article.readTime}</span>
            </div>
            <Link to={`/article/${article.slug}`}>
              <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#141413] card-title-hover leading-tight mb-2">
                {article.title}
              </h3>
            </Link>
            {showExcerpt && (
              <p className="text-xs text-[#52524E] line-clamp-2 mb-3 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E8E5DC] text-xs">
            <span className="text-[#141413] font-semibold">By {article.author.name}</span>
            <button
              onClick={() => toggleBookmark(article.id)}
              className="text-[#73736C] hover:text-[#D43825] transition-colors p-1"
              title={isSaved ? 'Remove Bookmark' : 'Bookmark'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
            </button>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Compact (Minimal for sidebars)
  if (variant === 'compact') {
    return (
      <article className="group py-3 border-b border-[#E8E5DC] last:border-b-0">
        <div className="text-[0.6875rem] uppercase font-bold text-[#73736C] mb-1">
          {article.category}
        </div>
        <Link to={`/article/${article.slug}`}>
          <h4 className="font-serif-headline text-sm font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug">
            {article.title}
          </h4>
        </Link>
        <div className="flex items-center gap-2 mt-1.5 text-[0.6875rem] text-[#73736C] font-mono">
          <span>{article.author.name}</span>
          <span>&bull;</span>
          <span>{article.readTime}</span>
        </div>
      </article>
    );
  }

  // Variant: Standard (Default Vertical Card)
  return (
    <article className="editorial-card group bg-white border border-[#E8E5DC] flex flex-col justify-between shadow-xs hover:border-[#141413] transition-all">
      <div>
        <div className="aspect-[16/10] overflow-hidden bg-[#EAE7DF] relative">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover card-img-zoom"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#141413] text-[#FAF9F5] text-[0.625rem] uppercase font-bold px-2 py-0.5 tracking-wider">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-2">
            <span>{article.publishedAt}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>

          <Link to={`/article/${article.slug}`}>
            <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#141413] card-title-hover leading-snug mb-2">
              {article.title}
            </h3>
          </Link>

          {showExcerpt && (
            <p className="text-xs text-[#52524E] line-clamp-2 leading-relaxed mb-4">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-[#E8E5DC] flex items-center justify-between text-xs">
        <Link
          to={`/author/${article.author.id}`}
          className="font-semibold text-[#141413] hover:text-[#D43825] transition-colors"
        >
          {article.author.name}
        </Link>
        <button
          onClick={() => toggleBookmark(article.id)}
          className="text-[#73736C] hover:text-[#D43825] transition-colors p-1"
          title={isSaved ? 'Saved' : 'Save'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
        </button>
      </div>
    </article>
  );
}
