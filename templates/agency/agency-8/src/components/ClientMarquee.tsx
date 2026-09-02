import React from 'react';
import { CLIENTS } from '../data/agencyData';
import { CursorType } from '../types';

interface ClientMarqueeProps {
  setCursorType: (type: CursorType) => void;
  onNavigate: (path: string) => void;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ setCursorType, onNavigate }) => {
  // Duplicate array to ensure seamless infinite looping
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clients"
      className="py-14 md:py-18 border-y border-[#ffffff10] bg-[#080808] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <p className="text-center font-mono text-[10px] font-medium tracking-[0.3em] text-[#888888] uppercase">
          TRUSTED BY TEAMS BUILDING WHAT'S NEXT
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge fades for seamless appearance */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              onClick={() => onNavigate(`/work/${client.name.toLowerCase()}`)}
              className="group flex items-center gap-3.5 px-4 py-2 cursor-pointer select-none opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-sm sm:text-base text-[#0066FF] group-hover:scale-110 transition-transform duration-300">
                {client.symbol}
              </span>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.15em] text-[#FAF9F6] group-hover:text-white transition-colors duration-300">
                {client.name}
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-[#888888] uppercase ml-1">
                [{client.category}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
