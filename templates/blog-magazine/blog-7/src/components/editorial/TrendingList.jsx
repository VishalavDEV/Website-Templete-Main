import React from 'react';
import { ArticleCard } from './ArticleCard';
import { Flame } from 'lucide-react';

export function TrendingList({ articles, title = 'Most Read This Week' }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-white p-6 border border-[#E8E5DC] shadow-xs">
      <div className="flex items-center gap-2 pb-3 mb-2 border-b-2 border-[#141413]">
        <Flame className="w-4 h-4 text-[#D43825]" />
        <h3 className="font-sans text-xs font-black uppercase tracking-widest text-[#141413]">
          {title}
        </h3>
      </div>

      <div className="divide-y divide-[#E8E5DC]">
        {articles.slice(0, 5).map((art, idx) => (
          <ArticleCard
            key={art.id}
            article={art}
            variant="ranked"
            rank={idx + 1}
          />
        ))}
      </div>
    </div>
  );
}
