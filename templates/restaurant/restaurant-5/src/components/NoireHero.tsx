import React, { useState, useEffect } from 'react';
import { NOIRE_IMAGES } from '../data/noireData';

interface NoireHeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const NoireHero: React.FC<NoireHeroProps> = ({ onExploreMenu, onOpenReservation }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#171512] flex flex-col justify-between select-none">
      {/* Background Image with Parallax Shift & Deep Warm Dark Atmosphere */}
      <div
        className="absolute inset-0 w-full h-full scale-110 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0) scale(1.08)`,
        }}
      >
        <img
          src={NOIRE_IMAGES.heroBg}
          alt="NOIRÉ Night Ambiance"
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.08]"
        />
        {/* Deep Warm Espresso Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-[#171512]/60 to-[#171512]/80" />
      </div>

      {/* Top Spacer for Corner Nav */}
      <div className="pt-24 px-6 md:px-12 flex justify-between items-start z-10">
        <div className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase">
          [ URBAN SUPPER CLUB / CHENNAI ]
        </div>
        <div className="font-mono text-xs text-[#B87552] tracking-widest hidden sm:block font-bold">
          VOL. 05 — NOCTURNAL GASTRONOMY
        </div>
      </div>

      {/* Main Center Typography */}
      <div className="px-6 md:px-16 z-20 my-auto flex flex-col justify-center">
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${-mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
          }}
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#B87552] uppercase mb-2 font-bold">
            NOCTURNAL FINE DINING & MUSIC
          </p>

          <h1 className="font-display font-black tracking-tighter text-[#F3EBDD] uppercase leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11.5rem]">
            GATHER.
          </h1>

          <h1 className="font-display font-black tracking-tighter text-[#F3EBDD] uppercase leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11.5rem]">
            DINE.
          </h1>

          <h1 className="font-display font-black tracking-tighter text-[#B87552] uppercase leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11.5rem]">
            UNWIND.
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-6 z-30">
          <button
            onClick={onExploreMenu}
            className="btn-copper px-8 py-4 text-xs font-bold tracking-widest uppercase shadow-lg"
          >
            <span>ENTER THE TABLE →</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="px-8 py-4 border border-[rgba(243,235,221,0.2)] text-[#F3EBDD] font-mono text-xs tracking-widest uppercase hover:border-[#B87552] hover:text-[#B87552] bg-[#171512]/80 backdrop-blur-sm transition-all duration-300 shadow-sm"
          >
            BOOK RESERVATION
          </button>
        </div>
      </div>

      {/* Infinite Ticker Bar & Bottom Info */}
      <div className="w-full z-20 pb-6">
        {/* Infinite Moving Ticker */}
        <div className="w-full overflow-hidden border-y border-[rgba(243,235,221,0.14)] bg-[#211D18]/90 backdrop-blur-md py-2.5">
          <div className="animate-marquee whitespace-nowrap flex font-mono text-xs tracking-[0.25em] text-[#B8AA98]">
            <span className="mx-6">GATHER — DINE — UNWIND — FIRE — CITY — PEOPLE — NIGHT</span>
            <span className="mx-6 text-[#B87552] font-bold">✦ NOIRÉ CHENNAI ✦</span>
            <span className="mx-6">GATHER — DINE — UNWIND — FIRE — CITY — PEOPLE — NIGHT</span>
            <span className="mx-6 text-[#B87552] font-bold">✦ NOIRÉ CHENNAI ✦</span>
            <span className="mx-6">GATHER — DINE — UNWIND — FIRE — CITY — PEOPLE — NIGHT</span>
            <span className="mx-6 text-[#B87552] font-bold">✦ NOIRÉ CHENNAI ✦</span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="px-6 md:px-12 pt-4 flex justify-between items-center font-mono text-xs text-[#B8AA98]">
          <div>OPEN 19:00 — 01:00</div>
          <div className="hidden sm:block">ARCHITECTURAL FINE DINING</div>
          <div className="text-[#B87552] font-bold">SCROLL TO EXPLORE ↓</div>
        </div>
      </div>
    </section>
  );
};
