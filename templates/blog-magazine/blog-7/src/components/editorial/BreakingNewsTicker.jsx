import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowUpRight, Sparkles } from 'lucide-react';

export function BreakingNewsTicker() {
  const dispatches = [
    { text: 'Venice Architecture Biennale announces 2026 Golden Lion for Scandinavian Timber Pavilion', slug: 'sacred-minimalism-kyoto' },
    { text: 'Global treaty on deep seabed mineral extraction negotiations enter final plenary session in Kingston', slug: 'geopolitics-of-rare-earths' },
    { text: 'Independent Horology Guild sets auction record for hand-beveled tourbillon in Geneva', slug: 'slow-horology-independent-watchmaking' },
    { text: 'New European AI governance directive requires watermarking for synthetic neural media', slug: 'ai-epistemic-frontiers' },
  ];

  return (
    <div className="bg-[#141413] text-[#FAF9F5] py-2 px-4 border-b border-[#2B2B28] flex items-center text-xs overflow-hidden">
      {/* Ticker Label */}
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-[#D43825] shrink-0 pr-4 border-r border-[#363630] z-10 bg-[#141413]">
        <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
        <span className="text-[0.6875rem]">Dispatch Wire</span>
      </div>

      {/* Marquee Content */}
      <div className="overflow-hidden whitespace-nowrap w-full pl-4">
        <div className="inline-block animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused]">
          {dispatches.concat(dispatches).map((item, idx) => (
            <Link
              key={idx}
              to={`/article/${item.slug}`}
              className="inline-flex items-center gap-2 mx-6 text-[#E2DDD5] hover:text-[#D43825] transition-colors group cursor-pointer text-xs"
            >
              <span>{item.text}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#D43825]" />
              <span className="text-[#52524E] ml-4">&bull;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
