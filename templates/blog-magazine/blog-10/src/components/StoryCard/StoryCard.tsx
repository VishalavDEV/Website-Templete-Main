import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, ArrowUpRight, MapPin } from 'lucide-react';
import { Article } from '../../types';
import { useAppContext } from '../../store/AppContext';

interface StoryCardProps {
  article: Article;
  variant?: 'lead' | 'secondary' | 'compact' | 'photo' | 'horizontal';
  priority?: boolean;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  article,
  variant = 'secondary',
  priority = false
}) => {
  const { isBookmarked, toggleBookmark } = useAppContext();
  const saved = isBookmarked(article.slug);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.slug, article.title);
  };

  // Lead Variant (Oversized flagship feature)
  if (variant === 'lead') {
    return (
      <article className="group relative w-full rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-all duration-500 shadow-2xl">
        <Link to={`/story/${article.slug}`} className="block relative">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt || article.title}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-center img-zoom group-hover:scale-105 transition-transform duration-700 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F27D26] text-black text-[10px] font-black font-mono tracking-widest uppercase">
                  {article.categoryName}
                </span>
                {article.leadStory && (
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-zinc-700 text-white text-[9px] font-mono tracking-widest uppercase backdrop-blur-md">
                    FLAGSHIP DISPATCH
                  </span>
                )}
              </div>

              {/* Bookmark Button */}
              <button
                onClick={handleBookmarkClick}
                aria-label={saved ? 'Remove bookmark' : 'Save article'}
                className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                  saved
                    ? 'bg-[#F27D26] text-black border-[#F27D26]'
                    : 'bg-black/70 text-white border-zinc-700 hover:bg-black/90'
                }`}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
              {article.location && (
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono text-[#F27D26] mb-2 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>{article.location}</span>
                </div>
              )}

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[0.95] tracking-tight uppercase group-hover:text-[#F27D26] transition-colors mb-3">
                {article.title}
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base max-w-3xl line-clamp-2 sm:line-clamp-3 mb-6 font-light leading-relaxed">
                {article.subtitle}
              </p>

              <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-zinc-700"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{article.author.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{article.date} · {article.readingTime}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F27D26] text-black text-xs font-mono font-black tracking-widest uppercase group-hover:bg-[#ff9345] transition-colors shadow-lg shadow-[#F27D26]/20">
                  <span>READ DISPATCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Secondary Variant (Editorial Grid Card)
  if (variant === 'secondary') {
    return (
      <article className="group flex flex-col rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl">
        <Link to={`/story/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt || article.title}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />

          {/* Top Category Badge & Bookmark */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-zinc-700 backdrop-blur-md text-[#F27D26] text-[9px] font-mono font-black tracking-widest uppercase">
              {article.categoryName}
            </span>

            <button
              onClick={handleBookmarkClick}
              aria-label={saved ? 'Remove bookmark' : 'Save article'}
              className={`p-1.5 rounded-full backdrop-blur-md border transition-all ${
                saved
                  ? 'bg-[#F27D26] text-black border-[#F27D26]'
                  : 'bg-black/70 text-white border-zinc-700 hover:bg-black/90'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span>{article.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#F27D26]" />
                {article.readingTime}
              </span>
            </div>

            <Link to={`/story/${article.slug}`}>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>
            </Link>

            <p className="text-zinc-400 text-xs line-clamp-2 mt-2 leading-relaxed font-light">
              {article.subtitle}
            </p>
          </div>

          {/* Author footer */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">{article.author.name}</span>
            <Link
              to={`/story/${article.slug}`}
              className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26] hover:text-[#ff9345] font-bold flex items-center gap-1"
            >
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Horizontal Card Variant
  if (variant === 'horizontal') {
    return (
      <article className="group flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-md">
        <Link to={`/story/${article.slug}`} className="sm:w-2/5 relative aspect-[16/10] sm:aspect-auto overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85"
          />
        </Link>
        <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#F27D26] font-bold">
                {article.categoryName}
              </span>
              <button
                onClick={handleBookmarkClick}
                aria-label="Save"
                className="text-zinc-500 hover:text-[#F27D26]"
              >
                <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-[#F27D26] text-[#F27D26]' : ''}`} />
              </button>
            </div>
            <Link to={`/story/${article.slug}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>
            </Link>
            <p className="text-zinc-400 text-xs line-clamp-2 mt-1.5 leading-relaxed font-light">
              {article.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500 pt-2 border-t border-zinc-800">
            <span>{article.author.name}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </article>
    );
  }

  // Compact Variant (Default fallback for lists and sidebars)
  return (
    <article className="group flex items-start gap-4 py-3.5 border-b border-zinc-800 last:border-0">
      <Link to={`/story/${article.slug}`} className="w-20 h-20 shrink-0 rounded-xl overflow-hidden relative">
        <img
          src={article.heroImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-85"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#F27D26] font-bold block mb-1">
          {article.categoryName}
        </span>
        <Link to={`/story/${article.slug}`}>
          <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </article>
  );
};
