'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'SOFT GLOW CLEAN BEAUTY',
    'FREE EXPRESS SHIPPING OVER ₹999',
    'BIOCOMPATIBLE TRI-PEPTIDES',
    '100% VEGAN & CRUELTY FREE',
    '30-DAY GLOW GUARANTEE',
    'SOFT GLOW CLEAN BEAUTY',
    'FREE EXPRESS SHIPPING OVER ₹999',
    'BIOCOMPATIBLE TRI-PEPTIDES',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#B76E79] py-3.5 text-white">
      <div className="animate-marquee items-center whitespace-nowrap">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6 gap-6">
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              {text}
            </span>
            <Sparkles className="h-3.5 w-3.5 text-[#F7DDE2]" />
          </div>
        ))}
      </div>
    </div>
  );
};
