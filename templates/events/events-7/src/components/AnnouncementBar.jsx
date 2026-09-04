import React from 'react';
import { Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden relative z-[1001] bg-[#ff4d2d]">
      {/* Mobile Announcement Bar (< 768px): Exact single centered line */}
      <div className="flex md:hidden items-center justify-between px-3 py-2 pt-6 text-[11px] font-medium bg-[#ff4d2d] text-white">
        <span>🔥 Early Bird Slots Open</span>
        <button 
          onClick={() => { window.location.hash = '#/register'; }}
          className="bg-black text-white text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider cursor-pointer border-none"
        >
          Claim Ticket
        </button>
      </div>

      {/* Desktop Announcement Bar (>= 768px): Full multi-column row */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs font-semibold bg-[#ff4d2d] text-white w-full max-w-7xl mx-auto box-border">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="animate-spin-slow shrink-0" />
          <span>EARLY BIRD SLOTS OPEN — 21.1 KM FILLING FAST!</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 whitespace-nowrap opacity-95">
            <Calendar size={13} /> SUN, 15 NOV 2026
          </span>
          <span className="inline-flex items-center gap-1 whitespace-nowrap opacity-95">
            <MapPin size={13} /> CHENNAI, INDIA
          </span>
          <Link 
            to="/register" 
            className="bg-black/40 hover:bg-black/60 text-white text-[11px] px-3 py-1 rounded-md font-bold tracking-wider uppercase transition-colors no-underline inline-flex items-center gap-1 whitespace-nowrap"
          >
            CLAIM TICKET <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}


