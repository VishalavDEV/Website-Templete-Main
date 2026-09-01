import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bookmark, Clock, Sparkles, Quote } from 'lucide-react';
import { DynamicImage } from '../ui/DynamicImage';

export interface BentoArticle {
  id: string;
  title: string;
  category: string;
  categoryTheme?: 'blue' | 'violet' | 'coral' | 'lime' | 'amber';
  excerpt?: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  image?: string;
  variant: 'hero-2x2' | 'tall-1x2' | 'wide-2x1' | 'standard-1x1' | 'quote-1x1';
  tag?: string;
  issueVol?: string;
  isTrending?: boolean;
}

export interface BentoCardProps {
  article: BentoArticle;
  index: number;
  onSelect?: (articleId: string) => void;
}

const themeStyles = {
  blue: {
    badge: 'bg-blue-50/95 text-blue-700 border-blue-200/80',
    accentText: 'text-blue-600',
    hoverBorder: 'hover:border-blue-500/40',
    glow: 'hover:shadow-blue-500/10',
  },
  violet: {
    badge: 'bg-purple-50/95 text-purple-700 border-purple-200/80',
    accentText: 'text-purple-600',
    hoverBorder: 'hover:border-purple-500/40',
    glow: 'hover:shadow-purple-500/10',
  },
  coral: {
    badge: 'bg-rose-50/95 text-rose-700 border-rose-200/80',
    accentText: 'text-rose-600',
    hoverBorder: 'hover:border-rose-500/40',
    glow: 'hover:shadow-rose-500/10',
  },
  lime: {
    badge: 'bg-emerald-50/95 text-emerald-700 border-emerald-200/80',
    accentText: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-emerald-500/10',
  },
  amber: {
    badge: 'bg-amber-50/95 text-amber-800 border-amber-200/80',
    accentText: 'text-amber-700',
    hoverBorder: 'hover:border-amber-500/40',
    glow: 'hover:shadow-amber-500/10',
  },
};

export const BentoCard: React.FC<BentoCardProps> = memo(({ article, index, onSelect }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const theme = themeStyles[article.categoryTheme || 'blue'];

  // Spring reveal variants
  const cardSpringReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 180,
        damping: 26,
        mass: 0.85,
        delay: Math.min(index * 0.05, 0.25),
      },
    },
  };

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(article.id);
    }
  };

  // 1. HERO 2x2 SPOTLIGHT CARD
  if (article.variant === 'hero-2x2') {
    return (
      <motion.article
        variants={cardSpringReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        onClick={handleCardClick}
        className={`group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 glass-card-airy rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden bg-white/95 border border-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer gpu-layer ${theme.hoverBorder} ${theme.glow}`}
      >
        {/* Ambient Top Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-400 opacity-90" />

        {/* Dynamic Responsive Image Stage */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] min-h-[220px] rounded-2xl overflow-hidden mb-5 sm:mb-6 shadow-sm">
          <DynamicImage
            src={article.image}
            alt={article.title}
            fallbackKey={article.id}
            layoutId={`article-img-${article.id}`}
            className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
            containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
            overlay={
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/10 to-transparent pointer-events-none" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 z-10">
                  <span className="glass-pill px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 bg-white/95 backdrop-blur-md shadow-xs">
                    {article.tag || 'Lead Feature'}
                  </span>
                  {article.isTrending && (
                    <span className="px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold uppercase bg-rose-500 text-white flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Bookmark Button */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setBookmarked(!bookmarked);
                    }}
                    aria-label="Bookmark article"
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-md cursor-pointer ${
                      bookmarked
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/85 text-slate-700 hover:bg-white hover:text-blue-600'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={bookmarked ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Bottom Image Metadata Bar */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white/95 text-xs font-mono z-10">
                  <span className="text-[11px] font-medium">{article.issueVol || 'Issue 08 Special'}</span>
                  <div className="flex items-center gap-1 bg-black/45 px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] sm:text-xs">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </>
            }
          />
        </div>

        {/* Story Content */}
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <motion.span
              layoutId={`article-badge-${article.id}`}
              className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider border ${theme.badge}`}
            >
              {article.category}
            </motion.span>
          </div>

          <motion.h3
            layoutId={`article-title-${article.id}`}
            className="type-h2 font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2 sm:mb-3"
          >
            {article.title}
          </motion.h3>

          {article.excerpt && (
            <p className="type-body text-slate-600 line-clamp-2 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Footer Author Bar */}
        <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-blue-500/20 shadow-xs"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900">{article.author.name}</span>
              <span className="text-[10px] font-mono text-slate-400">Featured Author</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            <span className="hidden sm:inline">Read Story</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // 2. TALL VERTICAL 1x2 CARD
  if (article.variant === 'tall-1x2') {
    return (
      <motion.article
        variants={cardSpringReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        onClick={handleCardClick}
        className={`group relative col-span-1 row-span-1 md:row-span-2 glass-card-airy rounded-3xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden bg-white/95 border border-white/95 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer gpu-layer ${theme.hoverBorder} ${theme.glow}`}
      >
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <motion.span
            layoutId={`article-badge-${article.id}`}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${theme.badge}`}
          >
            {article.category}
          </motion.span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setBookmarked(!bookmarked);
            }}
            aria-label="Bookmark"
            className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Dynamic Image Container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden mb-4 shadow-sm">
          <DynamicImage
            src={article.image}
            alt={article.title}
            fallbackKey={article.id}
            layoutId={`article-img-${article.id}`}
            className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
            containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center my-1 sm:my-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
            CRITICAL ESSAY
          </span>
          <motion.h3
            layoutId={`article-title-${article.id}`}
            className="type-h3 font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 sm:mb-3"
          >
            {article.title}
          </motion.h3>
          {article.excerpt && (
            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3 sm:mb-4">
              "{article.excerpt}"
            </p>
          )}
        </div>

        <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-xs font-semibold text-slate-800 truncate max-w-[120px]">{article.author.name}</span>
          </div>

          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.article>
    );
  }

  // 3. WIDE LANDSCAPE 2x1 CARD
  if (article.variant === 'wide-2x1') {
    return (
      <motion.article
        variants={cardSpringReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        onClick={handleCardClick}
        className={`group relative col-span-1 md:col-span-2 row-span-1 glass-card-airy rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 overflow-hidden bg-white/95 border border-white/95 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer gpu-layer ${theme.hoverBorder} ${theme.glow}`}
      >
        <div className="relative w-full sm:w-1/2 aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
          <DynamicImage
            src={article.image}
            alt={article.title}
            fallbackKey={article.id}
            layoutId={`article-img-${article.id}`}
            className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
            containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
            overlay={
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 shadow-xs z-10">
                {article.tag || 'Special'}
              </span>
            }
          />
        </div>

        <div className="flex-1 flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <motion.span
                layoutId={`article-badge-${article.id}`}
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${theme.badge}`}
              >
                {article.category}
              </motion.span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-600" />
                {article.readTime}
              </span>
            </div>

            <motion.h3
              layoutId={`article-title-${article.id}`}
              className="type-h3 font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2"
            >
              {article.title}
            </motion.h3>

            {article.excerpt && (
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                {article.excerpt}
              </p>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-7 h-7 rounded-full object-cover"
                loading="lazy"
              />
              <span className="text-xs font-semibold text-slate-800">{article.author.name}</span>
            </div>

            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // 4. QUOTE & METRIC 1x1 CARD (Rich Ambient Atmosphere with Zero Empty Space)
  if (article.variant === 'quote-1x1') {
    return (
      <motion.article
        variants={cardSpringReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        className="group relative col-span-1 row-span-1 rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white shadow-xl border border-slate-800 gpu-layer"
      >
        {/* Background Subtle Geometry Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-blue-300 border border-white/15 backdrop-blur-md">
            Editorial Thought
          </span>
          <Quote className="w-5 h-5 text-amber-300/80" />
        </div>

        <blockquote className="my-3 font-serif italic text-base sm:text-lg text-white/95 leading-snug z-10">
          "{article.title}"
        </blockquote>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 z-10">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-white/40"
              loading="lazy"
            />
            <span className="font-mono text-[11px] text-white/90 truncate max-w-[120px]">{article.author.name}</span>
          </div>
          <span className="font-mono text-[10px] text-blue-300">{article.issueVol || 'Issue 08'}</span>
        </div>
      </motion.article>
    );
  }

  // 5. STANDARD 1x1 CARD
  return (
    <motion.article
      variants={cardSpringReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      onClick={handleCardClick}
      className={`group relative col-span-1 row-span-1 glass-card-airy rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-white/95 border border-white/95 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer gpu-layer ${theme.hoverBorder} ${theme.glow}`}
    >
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-3.5 shadow-xs">
        <DynamicImage
          src={article.image}
          alt={article.title}
          fallbackKey={article.id}
          layoutId={`article-img-${article.id}`}
          className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
          containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
        />
      </div>

      <div>
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
          <motion.span
            layoutId={`article-badge-${article.id}`}
            className={`font-bold uppercase tracking-wider text-[10px] ${theme.accentText}`}
          >
            {article.category}
          </motion.span>
          <span className="flex items-center gap-1 text-[10px]">
            <Clock className="w-3 h-3 text-slate-400" />
            {article.readTime}
          </span>
        </div>

        <motion.h3
          layoutId={`article-title-${article.id}`}
          className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 line-clamp-2"
        >
          {article.title}
        </motion.h3>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
        <span className="truncate max-w-[130px] font-medium">{article.author.name}</span>
        <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </motion.article>
  );
});

BentoCard.displayName = 'BentoCard';
