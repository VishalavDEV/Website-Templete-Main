import React from 'react';
import { CLIENT_WORDMARKS } from '../../data/testimonialsData';
import { CursorType } from '../../types';

interface ClientLogosProps {
  setCursorType?: (type: CursorType) => void;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ setCursorType }) => {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-12 pb-6 border-b border-[#ffffff10]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              06 / CLIENT ROSTER
            </span>
          </div>

          <span className="font-mono text-xs text-[#888888]">
            SELECT COMMISSIONS & LONG-TERM PARTNERS
          </span>
        </div>

        {/* Wordmarks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {CLIENT_WORDMARKS.map((client) => (
            <div
              key={client.name}
              onMouseEnter={() => setCursorType?.('pointer')}
              onMouseLeave={() => setCursorType?.('default')}
              className="bg-[#080808] hover:bg-[#0e0e12] p-8 sm:p-10 flex flex-col items-center justify-center text-center group transition-colors duration-300"
            >
              <span className="text-white/20 group-hover:text-[#0066FF] text-xs font-mono mb-2 transition-colors">
                {client.symbol}
              </span>
              <span className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-white/50 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                {client.name}
              </span>
              <span className="font-mono text-[10px] text-[#666666] group-hover:text-[#888888] tracking-widest uppercase mt-2 transition-colors">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
