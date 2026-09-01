import React from 'react';
import { Story } from '../types';
import { Calendar as CalendarIcon, Clock, ArrowUpRight } from 'lucide-react';

interface CalendarViewProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  onPublish: (id: string) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ stories, onSelectStory, onPublish }) => {
  const scheduledStories = stories.filter(s => s.status === 'Scheduled' || s.status === 'Published');

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Publication Schedule</span>
          <h3 className="font-serif font-bold text-[#183B56] text-xl">Calendar Workspace</h3>
        </div>
        <span className="text-xs font-mono bg-[#F5F9FB] px-3 py-1 rounded-xl border border-[#DCE7EC] text-[#183B56]">
          August 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['August 19, 2026', 'August 20, 2026', 'August 21, 2026'].map((dateStr, idx) => (
          <div key={dateStr} className="p-4 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-[#DCE7EC] pb-2">
              <span className="font-serif font-bold text-[#183B56] text-sm">{dateStr}</span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#718096] border border-[#DCE7EC]">
                {idx === 1 ? '2 Scheduled' : '1 Live'}
              </span>
            </div>

            <div className="space-y-2.5">
              {scheduledStories.slice(idx, idx + 2).map(story => (
                <div
                  key={story.id}
                  onClick={() => onSelectStory(story)}
                  className="p-3 bg-white border border-[#DCE7EC] rounded-xl space-y-2 cursor-pointer hover:border-[#6FAFD4] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono bg-[#CDEFF4] text-[#183B56] px-2 py-0.5 rounded uppercase">
                      {story.category}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${story.status === 'Published' ? 'text-[#5FAF8A]' : 'text-[#D6A85D]'}`}>
                      {story.status}
                    </span>
                  </div>
                  <p className="font-serif font-bold text-[#203040] text-xs leading-tight">{story.title}</p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#718096] pt-1 border-t border-[#DCE7EC]/60">
                    <span>By {story.author}</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
