import React from 'react';
import { motion } from 'framer-motion';

export default function BrandMarquee() {
  const brands = [
    { name: 'GOOGLE', symbol: 'G' },
    { name: 'NIKE', symbol: '✓' },
    { name: 'SPOTIFY', symbol: '≈' },
    { name: 'ADOBE', symbol: 'A' },
    { name: 'NETFLIX', symbol: 'N' },
    { name: 'AMAZON', symbol: 'a' },
    { name: 'MICROSOFT', symbol: '⊞' },
    { name: 'SAMSUNG', symbol: 'S' },
  ];

  // Repeat items for seamless infinite scroll
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative py-12 bg-[#05070f] border-y border-white/5 overflow-hidden select-none">
      {/* Edge Fading Mask Overlay */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#05070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#05070f] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 md:gap-20">
          {marqueeItems.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-slate-500 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-syne font-black text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                {brand.symbol}
              </div>
              <span className="text-xl md:text-2xl font-syne font-extrabold tracking-widest uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
