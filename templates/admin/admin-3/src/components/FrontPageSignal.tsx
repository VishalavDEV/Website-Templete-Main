import React from 'react';
import { Story } from '../types';
import { Sparkles, Eye, Calendar, RefreshCw, Trash2, ArrowUpRight } from 'lucide-react';

interface FrontPageSignalProps {
  featuredStory?: Story;
  onChangeFeature: () => void;
  onPreview: (story: Story) => void;
  onRemove: (storyId: string) => void;
  onSchedule: (story: Story) => void;
}

export const FrontPageSignal: React.FC<FrontPageSignalProps> = ({
  featuredStory,
  onChangeFeature,
  onPreview,
  onRemove,
  onSchedule
}) => {
  if (!featuredStory) {
    return (
      <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 text-center space-y-3">
        <p className="text-sm font-semibold text-[#203040]">No Featured Front Page Story</p>
        <button
          onClick={onChangeFeature}
          className="px-4 py-2 bg-[#183B56] text-white rounded-xl text-xs font-semibold hover:bg-[#203040] transition-colors"
        >
          Select Featured Story
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl overflow-hidden shadow-2xs">
      <div className="bg-[#183B56] text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#B9E4F4]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">Front Page Signal</span>
        </div>
        <span className="text-[10px] font-mono bg-[#B9E4F4]/20 text-[#B9E4F4] px-2.5 py-0.5 rounded border border-[#B9E4F4]/30">
          Currently Live
        </span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-1">
          <img
            src={featuredStory.thumbnail}
            alt={featuredStory.title}
            className="w-full h-48 object-cover rounded-xl border border-[#DCE7EC]"
          />
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-[#CDEFF4] text-[#183B56] px-2.5 py-0.5 rounded font-semibold uppercase">
              {featuredStory.category}
            </span>
            <span className="text-xs text-[#718096]">By {featuredStory.author}</span>
          </div>

          <h3 className="font-serif font-bold text-[#183B56] text-xl leading-tight">
            {featuredStory.title}
          </h3>

          <p className="text-xs text-[#718096] line-clamp-2">
            {featuredStory.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#718096] pt-2 border-t border-[#DCE7EC]">
            <span>Reads: <strong className="text-[#203040]">{featuredStory.reads.toLocaleString()}</strong></span>
            <span>Completion: <strong className="text-[#203040]">{featuredStory.completionRate}%</strong></span>
            <span>Shares: <strong className="text-[#203040]">{featuredStory.shares}</strong></span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={onChangeFeature}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#F5F9FB] hover:bg-[#CDEFF4]/30 text-[#183B56] border border-[#DCE7EC] rounded-xl text-xs font-semibold transition-colors"
            >
              <RefreshCw size={14} /> CHANGE FEATURE
            </button>
            <button
              onClick={() => onPreview(featuredStory)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#F5F9FB] hover:bg-[#CDEFF4]/30 text-[#183B56] border border-[#DCE7EC] rounded-xl text-xs font-semibold transition-colors"
            >
              <Eye size={14} /> PREVIEW <ArrowUpRight size={13} />
            </button>
            <button
              onClick={() => onSchedule(featuredStory)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#F5F9FB] hover:bg-[#CDEFF4]/30 text-[#183B56] border border-[#DCE7EC] rounded-xl text-xs font-semibold transition-colors"
            >
              <Calendar size={14} /> SCHEDULE
            </button>
            <button
              onClick={() => onRemove(featuredStory.id)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#D97878]/10 hover:bg-[#D97878] text-[#D97878] hover:text-white border border-[#D97878]/30 rounded-xl text-xs font-semibold transition-colors ml-auto"
            >
              <Trash2 size={14} /> REMOVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
