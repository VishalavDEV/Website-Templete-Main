import React from 'react';
import { Play } from 'lucide-react';
import { RecommendedItem } from '../types';

interface RecommendedSectionProps {
  items: RecommendedItem[];
  onSelectItem: (item: RecommendedItem) => void;
  onSeeAll: () => void;
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  items,
  onSelectItem,
  onSeeAll,
}) => {
  return (
    <div
      id="recommended-section"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-[#111827]">
          Recommended For You
        </h3>
        <button
          id="see-all-recommended-btn"
          type="button"
          onClick={onSeeAll}
          className="text-[12px] font-semibold text-[#10B981] hover:text-[#059669] transition-colors"
        >
          See All
        </button>
      </div>

      {/* Grid of 4 cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 xl:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            id={`recommended-card-${item.id}`}
            onClick={() => onSelectItem(item)}
            className="group cursor-pointer flex flex-col min-w-0"
          >
            {/* Thumbnail */}
            <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-2.5 bg-[#F3F4F6]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Title */}
            <div className="flex items-start justify-between gap-1.5 min-w-0">
              <div className="min-w-0 flex-1">
                <h4 className="text-[13px] font-bold text-[#111827] group-hover:text-[#10B981] transition-colors truncate mb-0.5">
                  {item.title}
                </h4>
                <div className="text-[11px] text-[#6B7280] truncate">
                  {item.duration} • {item.category}
                </div>
              </div>

              {/* Play Button Icon */}
              <button
                type="button"
                className="w-6 h-6 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#10B981] group-hover:border-[#10B981] group-hover:bg-[#EBF7EE] transition-all shrink-0 mt-0.5"
                title="Play Activity"
              >
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
