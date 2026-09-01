import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { Bookmark, Clock, ArrowUpRight, Volume2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Unified StoryCard with multi-variant support:
 * 'large' | 'medium' | 'compact' | 'horizontal' | 'featured' | 'ranked'
 */
export function StoryCard({
  article,
  variant = 'medium',
  rank,
  showExcerpt = true,
  className = '',
}) {
  const { isBookmarked, toggleBookmark } = useMagazine();
  const shouldReduceMotion = useReducedMotion();

  if (!article) return null;

  // Normalize article fields
  const id = article.id;
  const slug = article.slug;
  const title = article.title;
  const excerpt = article.excerpt;
  const category = article.category;
  const image = article.image || article.coverImage;
  const author = article.author?.name || article.author || 'Editorial Bureau';
  const authorAvatar = article.author?.avatar;
  const authorId = article.author?.id || 'elena-vance';
  const date = article.date || article.publishedAt;
  const readingTime = article.readingTime || article.readTime;
  const isSaved = isBookmarked(id);

  // Variant: Ranked (01, 02, 03... list item)
  if (variant === 'ranked') {
    return (
      <motion.article
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={`group flex items-start gap-4 py-4 border-b border-[#E8E5DC] last:border-b-0 ${className}`}
      >
        <span className="font-serif-headline text-3xl font-bold text-[#D1CDC4] group-hover:text-[#D43825] transition-colors shrink-0 w-8 text-right font-mono">
          {rank ? String(rank).padStart(2, '0') : '01'}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-1">
            <span className="text-[#D43825] font-bold">{category}</span>
            <span>&bull;</span>
            <span>{readingTime}</span>
          </div>
          <Link to={`/article/${slug}`} className="block group">
            <h4 className="font-serif-headline text-base font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug line-clamp-2">
              {title}
            </h4>
          </Link>
          <span className="text-xs text-[#73736C] mt-1 block">
            By {author}
          </span>
        </div>
      </motion.article>
    );
  }

  // Variant: Compact (Minimal text-heavy sidebar item)
  if (variant === 'compact') {
    return (
      <article className={`group py-3.5 border-b border-[#E8E5DC] last:border-b-0 ${className}`}>
        <div className="flex items-center justify-between text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-1">
          <span className="text-[#D43825] font-bold">{category}</span>
          <span>{readingTime}</span>
        </div>
        <Link to={`/article/${slug}`}>
          <h4 className="font-serif-headline text-sm sm:text-base font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug">
            {title}
          </h4>
        </Link>
        <div className="flex items-center justify-between mt-2 text-xs text-[#73736C]">
          <span>By {author}</span>
          <button
            onClick={() => toggleBookmark(id)}
            className="text-[#73736C] hover:text-[#D43825] transition-colors p-1 cursor-pointer"
            title={isSaved ? 'Remove Bookmark' : 'Save'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
          </button>
        </div>
      </article>
    );
  }

  // Variant: Horizontal (Split image and content)
  if (variant === 'horizontal') {
    return (
      <article className={`group bg-white border border-[#E8E5DC] hover:border-[#141413] p-4 sm:p-5 flex flex-col sm:flex-row gap-5 shadow-xs transition-all ${className}`}>
        <div className="sm:w-2/5 aspect-[16/10] overflow-hidden bg-[#EAE7DF] relative shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
            loading="lazy"
          />
        </div>
        <div className="sm:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-2">
              <span className="text-[#D43825] font-bold">{category}</span>
              <span>{readingTime}</span>
            </div>
            <Link to={`/article/${slug}`}>
              <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-tight mb-2">
                {title}
              </h3>
            </Link>
            {showExcerpt && excerpt && (
              <p className="text-xs text-[#52524E] line-clamp-2 leading-relaxed mb-3">
                {excerpt}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E8E5DC] text-xs">
            <span className="font-semibold text-[#141413]">By {author}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(id)}
                className="text-[#73736C] hover:text-[#D43825] transition-colors p-1 cursor-pointer"
                title={isSaved ? 'Saved' : 'Save'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
              </button>
              <Link
                to={`/article/${slug}`}
                className="text-[#141413] group-hover:text-[#D43825] group-hover:translate-x-0.5 transition-all p-1"
                aria-label="Read article"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Large / Featured (Cinematic oversized spread card)
  if (variant === 'large' || variant === 'featured') {
    return (
      <article className={`group bg-white border border-[#E8E5DC] hover:border-[#141413] flex flex-col justify-between shadow-xs transition-all ${className}`}>
        <div>
          <div className="aspect-[16/10] overflow-hidden bg-[#EAE7DF] relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-[#141413] text-[#FAF9F5] text-[0.625rem] uppercase font-bold px-2.5 py-1 tracking-wider">
                {category}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-3">
              <span>{date}</span>
              <span>&bull;</span>
              <span>{readingTime}</span>
            </div>

            <Link to={`/article/${slug}`}>
              <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-[1.2] mb-3">
                {title}
              </h3>
            </Link>

            {showExcerpt && excerpt && (
              <p className="text-sm text-[#52524E] font-serif-reading text-[1.0625rem] line-clamp-3 leading-relaxed mb-4">
                {excerpt}
              </p>
            )}
          </div>
        </div>

        <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-[#E8E5DC] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            {authorAvatar && (
              <img
                src={authorAvatar}
                alt={author}
                className="w-7 h-7 rounded-full object-cover border border-[#D1CDC4]"
              />
            )}
            <span className="font-bold text-[#141413] uppercase tracking-wider">
              {author}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleBookmark(id)}
              className="text-[#73736C] hover:text-[#D43825] transition-colors p-1 cursor-pointer"
              title={isSaved ? 'Saved' : 'Save'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
            </button>
            <Link
              to={`/article/${slug}`}
              className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider text-[#141413] group-hover:text-[#D43825] transition-colors"
            >
              <span>Read</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Medium (Standard Vertical Card)
  return (
    <article className={`group bg-white border border-[#E8E5DC] hover:border-[#141413] flex flex-col justify-between shadow-xs transition-all ${className}`}>
      <div>
        <div className="aspect-[16/10] overflow-hidden bg-[#EAE7DF] relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#141413] text-[#FAF9F5] text-[0.625rem] uppercase font-bold px-2 py-0.5 tracking-wider">
              {category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-2">
            <span>{date}</span>
            <span>&bull;</span>
            <span>{readingTime}</span>
          </div>

          <Link to={`/article/${slug}`}>
            <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug mb-2">
              {title}
            </h3>
          </Link>

          {showExcerpt && excerpt && (
            <p className="text-xs text-[#52524E] line-clamp-2 leading-relaxed mb-3">
              {excerpt}
            </p>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-[#E8E5DC] flex items-center justify-between text-xs">
        <span className="font-semibold text-[#141413]">By {author}</span>
        <button
          onClick={() => toggleBookmark(id)}
          className="text-[#73736C] hover:text-[#D43825] transition-colors p-1 cursor-pointer"
          title={isSaved ? 'Saved' : 'Save'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
        </button>
      </div>
    </article>
  );
}

// Convenience exported aliases for StoryCard
export function LargeStoryCard(props) {
  return <StoryCard variant="large" {...props} />;
}

export function MediumStoryCard(props) {
  return <StoryCard variant="medium" {...props} />;
}

export function CompactStoryCard(props) {
  return <StoryCard variant="compact" {...props} />;
}

export function HorizontalStoryCard(props) {
  return <StoryCard variant="horizontal" {...props} />;
}

export function FeaturedStoryCard(props) {
  return <StoryCard variant="featured" {...props} />;
}
