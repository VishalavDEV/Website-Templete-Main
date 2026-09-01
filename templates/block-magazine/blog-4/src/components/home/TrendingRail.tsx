import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../../types';
import { ArticleCard } from '../articles/ArticleCard';

interface TrendingRailProps {
  articles: Article[];
}

export const TrendingRail: React.FC<TrendingRailProps> = ({ articles }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 border-b border-[#E8E2D5] dark:border-[#3A342E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E8E2D5] dark:border-[#3A342E]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E27453]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] block">
                Reader Signals
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
                Trending Discussions
              </h2>
            </div>
          </div>

          {/* Rail Scroll Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-2 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-2 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Smooth Rail */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory"
        >
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="w-72 sm:w-80 shrink-0 snap-start"
            >
              <div className="relative">
                <span className="absolute -top-3 -left-2 z-20 w-8 h-8 rounded-xl bg-[#1C1917] dark:bg-[#C85A32] text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                  0{index + 1}
                </span>
                <ArticleCard article={article} variant="compact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
