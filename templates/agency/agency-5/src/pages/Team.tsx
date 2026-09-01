import React from 'react';
import { TeamGrid } from '../components/sections/TeamGrid';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Team: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        <Breadcrumb items={[{ label: 'Team & Leadership' }]} />

        <div className="space-y-6">
          <Badge variant="accent">SENIOR CREATIVE COLLECTIVE</Badge>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
            ENGINEERS, DESIGNERS & BRAND ARCHITECTS.
          </h1>
          <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
            We are senior practitioners with zero junior account layers. You work directly with the leads who design the pixels and write the code.
          </p>
        </div>
      </div>

      <TeamGrid />
      <FinalCTA />
    </div>
  );
};
