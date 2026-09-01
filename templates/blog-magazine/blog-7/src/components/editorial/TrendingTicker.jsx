import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { Flame, ArrowUpRight } from 'lucide-react';

export function TrendingTicker({ stories }) {
  const tickerStories = stories || articles.slice(0, 6);

  return (
    <div className="bg-[#141413] text-[#FAF9F5] py-2 px-4 border-y border-[#2B2B28] flex items-center text-xs overflow-hidden select-none">
      {/* Ticker Fixed Badge */}
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-[#D43825] shrink-0 pr-4 border-r border-[#363630] z-10 bg-[#141413]">
        <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
        <span className="text-[0.6875rem]">Trending Wire</span>
      </div>

      {/* Desktop Continuous Marquee */}
      <div className="hidden sm:block overflow-hidden whitespace-nowrap w-full pl-4">
        <div className="inline-block animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused]">
          {tickerStories.concat(tickerStories).map((story, idx) => (
            <Link
              key={idx}
              to={`/article/${story.slug}`}
              className="inline-flex items-center gap-2 mx-5 text-[#E2DDD5] hover:text-[#D43825] transition-colors group cursor-pointer text-xs"
            >
              <span className="font-mono text-[#D43825] font-bold">
                {String((idx % tickerStories.length) + 1).padStart(2, '0')}.
              </span>
              <span>{story.title}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#D43825]" />
              <span className="text-[#52524E] ml-4">&bull;</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Touch-Friendly Horizontal Rail */}
      <div className="sm:hidden flex items-center gap-4 overflow-x-auto no-scrollbar pl-3 py-1">
        {tickerStories.map((story, idx) => (
          <Link
            key={idx}
            to={`/article/${story.slug}`}
            className="shrink-0 flex items-center gap-2 text-xs text-[#E2DDD5] hover:text-[#D43825]"
          >
            <span className="font-mono text-[#D43825] font-bold">
              {String(idx + 1).padStart(2, '0')}.
            </span>
            <span className="truncate max-w-[200px]">{story.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
