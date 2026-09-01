import React from 'react';

const clients = [
  { name: 'NOVA AUTONOMOUS', location: 'TOKYO' },
  { name: 'VERTEX QUANTUM', location: 'ZURICH' },
  { name: 'MONO ROBOTICS', location: 'COPENHAGEN' },
  { name: 'ORBIT ENERGY', location: 'LONDON' },
  { name: 'LUMA BIOTECH', location: 'BOSTON' },
  { name: 'AXIS HYPERCARS', location: 'MILAN' },
  { name: 'KAIRO TIMEPIECES', location: 'KYOTO' },
  { name: 'VERITAS CAPITAL', location: 'GENEVA' },
];

export const TrustedClients: React.FC = () => {
  return (
    <section id="clients" className="py-12 border-y border-[var(--border-color)] bg-[var(--surface-color)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary-color)]">
          // Trusted by global market leaders & pioneers
        </span>
      </div>

      {/* Infinite Ticker Strip */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-ticker flex whitespace-nowrap gap-12 md:gap-20 items-center text-xl md:text-3xl font-extrabold tracking-tighter text-[var(--secondary-color)] font-display">
          {clients.concat(clients).map((client, idx) => (
            <div key={idx} className="flex items-center gap-4 hover:text-[var(--text-color)] transition-colors duration-200 cursor-default">
              <span className="text-[var(--accent-color)] text-xs">◆</span>
              <span className="uppercase">{client.name}</span>
              <span className="text-[10px] font-mono text-[var(--border-color)] font-normal">[{client.location}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
