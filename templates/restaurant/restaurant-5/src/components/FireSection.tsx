import React from 'react';
import { NOIRE_IMAGES } from '../data/noireData';

export const FireSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#171512] text-[#F3EBDD] overflow-hidden flex items-center justify-center py-24 px-6 md:px-16">
      {/* Background Image with Clip-Path styling and dark hearth presentation */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={NOIRE_IMAGES.fireGrill}
          alt="NOIRÉ Open Charcoal Fire Kitchen"
          className="w-full h-full object-cover filter brightness-[0.7] contrast-110 clip-path-fire hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171512] via-[#171512]/75 to-[#171512]" />
      </div>

      {/* Vertical Label on Right */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden sm:block z-20">
        <div className="font-mono text-xs text-[#B87552] tracking-[0.4em] uppercase rotate-90 transform origin-right whitespace-nowrap font-bold">
          [ OPEN KITCHEN — WOOD FIRE & CHARCOAL ]
        </div>
      </div>

      {/* Vertical Label on Left */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:block z-20">
        <div className="font-mono text-xs text-[#B8AA98] tracking-[0.4em] uppercase -rotate-90 transform origin-left whitespace-nowrap">
          TEMP: 600°C BINCHOTAN HEARTH
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <span className="font-mono text-xs text-[#B87552] tracking-[0.3em] uppercase block mb-4 border border-[#B87552]/40 px-4 py-1 bg-[#171512]/90 backdrop-blur-sm font-bold">
          03 // THE ELEMENT
        </span>

        {/* Large Typography */}
        <h2 className="font-display font-black tracking-tighter uppercase text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] text-[#F3EBDD] my-6">
          FIRE <br />
          <span className="text-[#B8AA98]">IS</span> <br />
          <span className="text-[#B87552]">FLAVOR.</span>
        </h2>

        <p className="font-body text-sm md:text-lg text-[#B8AA98] max-w-xl mx-auto mt-6 leading-relaxed bg-[#211D18]/90 p-6 backdrop-blur-md border border-[rgba(243,235,221,0.14)]">
          We use no gas and no electrical ovens. Every cut of meat, seasonal vegetable, and wild seafood dish is seared over glowing embers of oak and binchotan charcoal.
        </p>
      </div>
    </section>
  );
};
