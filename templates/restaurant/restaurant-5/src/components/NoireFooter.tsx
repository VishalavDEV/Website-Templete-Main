import React from 'react';
import { NOIRE_CONFIG } from '../data/noireData';

interface NoireFooterProps {
  onNavigate: (targetId: string) => void;
  onOpenReservation: () => void;
}

export const NoireFooter: React.FC<NoireFooterProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <footer className="w-full bg-[#171512] text-[#F3EBDD] pt-24 pb-12 border-t border-[rgba(243,235,221,0.14)] relative overflow-hidden">
      {/* Infinite Ticker Bar */}
      <div className="w-full border-y border-[rgba(243,235,221,0.14)] py-3 bg-[#211D18] mb-16">
        <div className="animate-marquee whitespace-nowrap flex font-mono text-xs tracking-[0.3em] text-[#B8AA98]">
          <span className="mx-8 text-[#B87552] font-bold">DINNER AFTER DARK</span>
          <span className="mx-8">{NOIRE_CONFIG.name}</span>
          <span className="mx-8">{NOIRE_CONFIG.city}</span>
          <span className="mx-8 text-[#B87552] font-bold">DINNER AFTER DARK</span>
          <span className="mx-8">{NOIRE_CONFIG.name}</span>
          <span className="mx-8">{NOIRE_CONFIG.city}</span>
          <span className="mx-8 text-[#B87552] font-bold">DINNER AFTER DARK</span>
          <span className="mx-8">{NOIRE_CONFIG.name}</span>
          <span className="mx-8">{NOIRE_CONFIG.city}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Giant Logo */}
        <div className="mb-16">
          <h2 className="font-display font-black text-7xl sm:text-9xl md:text-[14rem] tracking-tighter text-[#F3EBDD] leading-none uppercase select-none hover:text-[#B87552] transition-colors duration-500">
            NOIRÉ®
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[rgba(243,235,221,0.14)] font-mono text-xs">
          {/* Column 1 */}
          <div className="flex flex-col space-y-3">
            <span className="text-[#B87552] uppercase tracking-widest mb-2 font-bold">NAVIGATION</span>
            <button onClick={() => onNavigate('hero')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">01 // HOME</button>
            <button onClick={() => onNavigate('room')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">02 // RESTAURANT</button>
            <button onClick={() => onNavigate('menu')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">03 // MENU</button>
            <button onClick={() => onNavigate('night')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">04 // NIGHT</button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3">
            <span className="text-[#B87552] uppercase tracking-widest mb-2 font-bold">EXPERIENCE</span>
            <button onClick={() => onNavigate('events')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">05 // EVENTS</button>
            <button onClick={() => onNavigate('gallery')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">06 // GALLERY</button>
            <button onClick={() => onNavigate('location')} className="text-left text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">07 // CONTACT</button>
            <button onClick={onOpenReservation} className="text-left text-[#B87552] font-bold hover:underline">RESERVE TABLE →</button>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3">
            <span className="text-[#B87552] uppercase tracking-widest mb-2 font-bold">SOCIAL</span>
            <a href={NOIRE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">INSTAGRAM</a>
            <a href={NOIRE_CONFIG.socials.spotify} target="_blank" rel="noreferrer" className="text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">SPOTIFY PLAYLIST</a>
            <a href={NOIRE_CONFIG.socials.vimeo} target="_blank" rel="noreferrer" className="text-[#B8AA98] hover:text-[#F3EBDD] transition-colors">FILM REEL</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-3">
            <span className="text-[#B87552] uppercase tracking-widest mb-2 font-bold">LEGAL & TEMPLATE</span>
            <span className="text-[#B8AA98]">{NOIRE_CONFIG.name}® {NOIRE_CONFIG.tagline}</span>
            <span className="text-[#B8AA98]">ALL RIGHTS RESERVED © {new Date().getFullYear()}</span>
            <span className="text-[#B87552] font-bold">LIGHT-HOME / DARK-INTERIOR</span>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] text-[#B8AA98] space-y-2 sm:space-y-0">
          <div>{NOIRE_CONFIG.city} — {NOIRE_CONFIG.coordinates}</div>
          <div className="text-[#B87552] font-bold">LIGHT HOME → DARK INTERIOR EXPERIENCE</div>
        </div>
      </div>
    </footer>
  );
};
