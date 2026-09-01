import React from 'react';
import { PulseEvent } from '../types';
import { Radio, FileText, CheckCircle2, Archive, Shield } from 'lucide-react';

interface NewsroomPulseProps {
  events: PulseEvent[];
  onSelectEvent?: (targetId?: string) => void;
}

export const NewsroomPulse: React.FC<NewsroomPulseProps> = ({ events, onSelectEvent }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'PUBLISHED': return <FileText size={16} className="text-[#5FAF8A]" />;
      case 'SUBMISSION': return <Radio size={16} className="text-[#6FAFD4]" />;
      case 'REVIEW': return <CheckCircle2 size={16} className="text-[#D6A85D]" />;
      case 'ARCHIVE': return <Archive size={16} className="text-[#183B56]" />;
      default: return <Shield size={16} className="text-[#64748B]" />;
    }
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-5 shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#5FAF8A] animate-pulse" />
          <h3 className="font-serif font-bold text-[#183B56] text-base">Newsroom Pulse</h3>
        </div>
        <span className="text-[10px] font-mono text-[#718096] uppercase bg-[#F5F9FB] px-2 py-0.5 rounded border border-[#DCE7EC]">Live Feed</span>
      </div>

      <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#DCE7EC]">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => event.targetId && onSelectEvent && onSelectEvent(event.targetId)}
            className={`
              relative pl-8 group transition-all
              ${event.targetId ? 'cursor-pointer hover:translate-x-1' : ''}
            `}
          >
            {/* Timeline node */}
            <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white border border-[#DCE7EC] flex items-center justify-center shadow-2xs group-hover:border-[#6FAFD4]">
              {getIcon(event.type)}
            </div>

            <div className="p-3 bg-[#F5F9FB] hover:bg-[#CDEFF4]/20 border border-[#DCE7EC] rounded-xl transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-[#718096]">{event.time}</span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#183B56] border border-[#DCE7EC]">
                  {event.type}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#203040]">{event.title}</p>
              <p className="text-xs text-[#718096] mt-0.5">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
