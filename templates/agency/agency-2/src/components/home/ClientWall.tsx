import React from 'react';
import { Sparkles } from 'lucide-react';
import clientsData from '../../data/clients.json';
import { Client } from '../../types';

export const ClientWall: React.FC = () => {
  const clients = clientsData as Client[];

  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 bg-warm-white border-y border-ink-border">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT ROSTER</span>
          </div>
          <span className="text-xs font-mono text-ink-muted">
            GLOBAL ALLIANCES (2024–2026)
          </span>
        </div>

        {/* Client Wall Grid with Typographic Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:border-accent-coral/60 hover:bg-warm-white transition-all duration-300"
            >
              <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-ink-primary group-hover:text-accent-coral transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-ink-muted uppercase mt-1">
                {client.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
