import React from 'react';

const clients = [
  'NIKE',
  'SONY',
  'AIRBNB',
  'NOTION',
  'SPOTIFY',
  'VISA',
  'PATAGONIA',
  'BALENCIAGA',
  'POLESTAR',
  'KALEIDOSCOPE',
];

export const ClientMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 py-6">
      <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {clients.concat(clients).map((client, idx) => (
          <div
            key={`${client}-${idx}`}
            className="flex items-center space-x-12 text-neutral-400 dark:text-neutral-500 font-serif text-xl md:text-2xl font-black uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none"
          >
            <span>{client}</span>
            <span className="font-mono text-xs text-blue-500">//</span>
          </div>
        ))}
      </div>
    </div>
  );
};
