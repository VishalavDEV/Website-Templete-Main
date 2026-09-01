import React from 'react';
import { NOIRE_IMAGES } from '../data/noireData';

export const TheRoomSection: React.FC = () => {
  return (
    <section id="room" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-3 font-bold">
            01 // ARCHITECTURAL SPACE
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] text-[#F3EBDD]">
            THE ROOM <br />
            IS PART <br />
            <span className="text-[#B8AA98]">OF THE MEAL.</span>
          </h2>
        </div>

        <div className="max-w-md font-body text-sm md:text-base text-[#B8AA98] leading-relaxed border-l-2 border-[#B87552] pl-6 py-2">
          Designed around natural stone, oak woodwork, and focused acoustic soundscapes. Every seat offers direct lines of sight to the open hearth kitchen and the sprawling city horizon.
        </div>
      </div>

      {/* Animated Horizontal Line */}
      <div className="max-w-7xl mx-auto w-full my-8 h-[1px] bg-gradient-to-r from-[#B87552] via-[rgba(243,235,221,0.14)] to-transparent" />

      {/* Main Full-Width Architectural Image Frame */}
      <div className="max-w-7xl mx-auto relative h-[60vh] md:h-[75vh] w-full overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm group shadow-2xl">
        <img
          src={NOIRE_IMAGES.roomInterior}
          alt="NOIRÉ Room Architecture"
          className="w-full h-full object-cover filter brightness-95 contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay Architectural Coordinates */}
        <div className="absolute top-6 left-6 bg-[#171512]/90 backdrop-blur-md px-4 py-2 border border-[rgba(243,235,221,0.14)] font-mono text-xs tracking-widest text-[#B87552] font-bold shadow-sm">
          LAT: 13°05' N &nbsp;|&nbsp; LONG: 80°16' E
        </div>

        <div className="absolute top-6 right-6 bg-[#171512]/90 backdrop-blur-md px-4 py-2 border border-[rgba(243,235,221,0.14)] font-mono text-xs tracking-widest text-[#F3EBDD] shadow-sm">
          EST. 2026 // CHENNAI
        </div>

        {/* Bottom Editorial Caption */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 bg-gradient-to-t from-[#171512] via-[#171512]/80 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <div className="font-mono text-xs text-[#B87552] tracking-widest uppercase mb-1 font-bold">
              SUITE 01 — THE GRAND DINING ROOM
            </div>
            <p className="font-display text-lg md:text-2xl font-bold text-[#F3EBDD]">
              Warm Brutalist Elegance & High Acoustic Isolation
            </p>
          </div>

          <div className="font-mono text-xs text-[#B8AA98] flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#B87552]"></span>
            <span className="font-bold text-[#F3EBDD]">CAPACITY: 75 GUESTS</span>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Specs Bar */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[rgba(243,235,221,0.14)] font-mono text-xs text-[#B8AA98]">
        <div>
          <span className="block text-[#B87552] font-bold mb-1">INTERIOR AREA</span>
          <span className="text-[#F3EBDD] font-bold">4,800 SQ FT</span>
        </div>
        <div>
          <span className="block text-[#B87552] font-bold mb-1">LIGHTING SYSTEM</span>
          <span className="text-[#F3EBDD] font-bold">WARM AMBIENT SPOTLIGHTS</span>
        </div>
        <div>
          <span className="block text-[#B87552] font-bold mb-1">ACOUSTIC CURATION</span>
          <span className="text-[#F3EBDD] font-bold">ANALOG HI-FI SYSTEM</span>
        </div>
        <div>
          <span className="block text-[#B87552] font-bold mb-1">HEARTH TYPE</span>
          <span className="text-[#F3EBDD] font-bold">OPEN OAK CHARCOAL</span>
        </div>
      </div>
    </section>
  );
};
