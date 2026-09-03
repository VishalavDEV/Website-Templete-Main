import React from 'react';
import { CLIENTS } from '../../data/clients';

export const HomeClients: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#CFC7BE] overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-2">
            // 03 — SELECT PARTNERSHIPS
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight uppercase text-[#2B2727]">
            FORWARD-THINKING BRANDS WE'VE PARTNERED WITH.
          </h2>
        </div>
      </div>

      {/* Typographic Wordmarks Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className="group py-8 px-4 border-b border-[#CFC7BE] hover:border-[#D65F3F] transition-colors cursor-default"
          >
            <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-[#2B2727] group-hover:text-[#D65F3F] transition-colors uppercase">
              {client.name}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-[#77716D] uppercase tracking-wider">
              <span>{client.industry}</span>
              <span>{client.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
