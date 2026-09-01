import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Eye, 
  ArrowRight, 
  Bookmark, 
  Sparkles
} from 'lucide-react';
import { Article } from '../../types';
import { articleService } from '../../services/articleService';
import { useBookmarks } from '../../hooks/useBookmarks';

interface StoryCoverflowDeckProps {
  articles: Article[];
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
}

export const StoryCoverflowDeck: React.FC<StoryCoverflowDeckProps> = ({
  articles,
  title = 'Curated Perspectives',
  subtitle = 'In-depth investigative reporting and visual narratives across our editorial desks.',
  autoPlayInterval = 4500
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const total = articles.length;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Keyboard navigation when container is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Always Auto-scroll loop (pauses smoothly when user hovers to read)
  useEffect(() => {
    if (isHovered || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isHovered, total, autoPlayInterval, nextSlide]);

  // Isolated mousewheel handler: traps wheel scrolling ONLY over the story deck and prevents outer page scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > 8 || absY > 8) {
        e.preventDefault();
        e.stopPropagation();

        if (wheelLockRef.current) return;
        wheelLockRef.current = true;

        const delta = absX > absY ? e.deltaX : e.deltaY;
        if (delta > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        setTimeout(() => {
          wheelLockRef.current = false;
        }, 260);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  if (!articles || articles.length === 0) return null;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="my-10 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-sm relative overflow-hidden select-none"
    >
      {/* Subtle depth lighting */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C85A32]/8 dark:bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#E8E2D5]/40 dark:bg-[#282420]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Perspectives</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A39C90]">
            {subtitle}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous story"
            className="p-2.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-[#FAF7F2] dark:bg-[#151311] text-[#1C1917] dark:text-[#F7F4EE] hover:border-[#C85A32] hover:text-[#C85A32] dark:hover:border-[#E27453] dark:hover:text-white transition-colors cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next story"
            className="p-2.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-[#FAF7F2] dark:bg-[#151311] text-[#1C1917] dark:text-[#F7F4EE] hover:border-[#C85A32] hover:text-[#C85A32] dark:hover:border-[#E27453] dark:hover:text-white transition-colors cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Viewport */}
      <div 
        className="relative my-8 py-4 sm:py-8 h-[440px] sm:h-[480px] flex items-center justify-center overflow-visible"
        style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
      >
        {articles.map((article, idx) => {
          const author = articleService.getAuthorByIdSync(article.authorId);
          const category = articleService.getCategoryBySlugSync(article.category);

          let offset = idx - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);

          if (absOffset > 2.5) {
            return null;
          }

          const translateX = offset * 260;
          const translateZ = -absOffset * 160 + (isActive ? 40 : 0);
          const rotateY = offset * -28;
          const opacity = Math.max(0.18, 1 - absOffset * 0.35);
          const zIndex = 20 - absOffset;
          const scale = isActive ? 1.04 : Math.max(0.78, 1 - absOffset * 0.12);

          const saved = isBookmarked(article.id);

          return (
            <div
              key={article.id}
              onClick={() => {
                if (!isActive) goToSlide(idx);
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transformStyle: 'preserve-3d',
                transition: 'all 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              className={`absolute top-0 w-[290px] sm:w-[360px] md:w-[410px] h-full rounded-2xl bg-white dark:bg-[#24201D] border ${
                isActive
                  ? 'border-[#C85A32] dark:border-[#E27453] shadow-xl ring-2 ring-[#C85A32]/20'
                  : 'border-[#E8E2D5] dark:border-[#3A342E] shadow-md cursor-pointer hover:border-[#C85A32]/60'
              } flex flex-col justify-between overflow-hidden will-change-transform group`}
            >
              {/* Image Area */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'group-hover:scale-105' : 'filter brightness-90'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/25 to-transparent" />

                {/* Badges & Save */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md bg-[#1C1917]/85">
                    {category?.name || article.category}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      toggleBookmark(article.id);
                    }}
                    aria-label="Save story"
                    className={`p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                      saved
                        ? 'bg-[#C85A32] text-white'
                        : 'bg-black/65 text-white/90 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" fill={saved ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Bottom of Image Meta */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-white/90 z-10 font-medium">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-[#E27453]" />
                    {article.readingTime}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {article.views.toLocaleString()} reads
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white dark:bg-[#24201D]">
                <div className="space-y-2">
                  <h3
                    className={`font-display font-bold leading-snug line-clamp-2 text-[#1C1917] dark:text-[#F7F4EE] ${
                      isActive
                        ? 'text-lg sm:text-xl group-hover:text-[#C85A32] dark:group-hover:text-[#E27453]'
                        : 'text-base sm:text-lg'
                    } transition-colors`}
                  >
                    {isActive ? (
                      <Link to={`/story/${article.slug}`}>{article.title}</Link>
                    ) : (
                      article.title
                    )}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44403C] dark:text-[#D7D1C6] line-clamp-2 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author & Read Story Link */}
                <div className="pt-3 mt-3 border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {author?.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.name}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                        }}
                        className="w-7 h-7 rounded-full object-cover border border-[#E8E2D5] dark:border-[#3A342E]"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#C85A32]/20 text-[#C85A32] flex items-center justify-center font-bold text-xs">
                        {(author?.name || 'A').charAt(0)}
                      </div>
                    )}
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F7F4EE] truncate max-w-[120px]">
                      {author?.name || 'Staff Editor'}
                    </span>
                  </div>

                  <Link
                    to={`/story/${article.slug}`}
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Indicators */}
      <div className="relative z-10 pt-4 flex items-center justify-between border-t border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
          {articles.map((art, idx) => (
            <button
              key={art.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-[#C85A32] dark:bg-[#E27453]'
                  : 'w-2 bg-[#E8E2D5] dark:bg-[#3A342E] hover:bg-[#C85A32]/60'
              }`}
            />
          ))}
        </div>

        <div className="text-xs font-mono font-bold text-[#78716C] dark:text-[#A39C90]">
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
