import React from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onDismiss: () => void;
  onLearnMore: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onDismiss, onLearnMore }) => {
  return (
    <aside aria-label="Special Screening Announcement" className="bg-[#542F3B] text-[#FAF8F5] px-4 py-2.5 text-xs sm:text-sm font-sans relative border-b border-[#C97873]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 truncate">
          <span className="inline-flex items-center gap-1.5 bg-[#C97873] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md uppercase tracking-wider shrink-0">
            <Sparkles className="w-3 h-3" /> Special
          </span>
          <span className="truncate text-[#FAF8F5] font-medium">
            Free Diabetes Risk Screening — Available This Month at Gluvia Institute
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-1 text-[#E8B6A5] hover:text-white font-semibold transition-colors group underline-offset-4 hover:underline text-xs sm:text-sm min-h-[32px] px-2 rounded focus-visible:ring-2 focus-visible:ring-[#C97873]"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={onDismiss}
            className="p-1.5 text-[#FAF8F5]/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close announcement bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
