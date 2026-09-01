import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { CategoryInfo } from '../../types';

interface AccordionGalleryProps {
  categories: CategoryInfo[];
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({ categories }) => {
  const [activeSlug, setActiveSlug] = useState<string>(categories[0]?.slug || 'wildlife');

  return (
    <div className="w-full select-none">
      {/* Desktop Horizontal Accordion Gallery */}
      <div className="hidden lg:flex w-full h-[520px] gap-2 rounded-2xl overflow-hidden p-2 bg-[#0a0a0a] border border-zinc-800">
        {categories.map((cat, idx) => {
          const isActive = activeSlug === cat.slug;

          return (
            <div
              key={cat.slug}
              onMouseEnter={() => setActiveSlug(cat.slug)}
              onClick={() => setActiveSlug(cat.slug)}
              className={`relative h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive ? 'flex-[4.5]' : 'flex-[1] hover:flex-[1.3]'
              }`}
            >
              {/* Background Image with Grayscale -> Full Color transition */}
              <img
                src={cat.heroImage}
                alt={cat.name}
                loading="lazy"
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'grayscale-0 scale-100 brightness-85'
                    : 'grayscale brightness-40 contrast-125 scale-110 hover:grayscale-[40%]'
                }`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? 'bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent'
                    : 'bg-black/60 hover:bg-black/40'
                }`}
              />

              {/* Number Index */}
              <div className="absolute top-4 left-4 z-10 font-mono text-xs uppercase tracking-widest text-[#F27D26] font-bold">
                0{idx + 1}
              </div>

              {/* Inactive Vertical Title */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="tracking-[0.3em] text-xs font-bold text-zinc-400 uppercase -rotate-90 whitespace-nowrap drop-shadow-md">
                    {cat.name}
                  </span>
                </div>
              )}

              {/* Active Panel Content */}
              {isActive && (
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">
                      DOMAIN 0{idx + 1} · {cat.storyCount} DISPATCHES
                    </span>
                  </div>

                  <h3 className="text-3xl xl:text-5xl font-black text-white uppercase tracking-tight mb-2 leading-none">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-zinc-300 max-w-lg mb-6 leading-relaxed line-clamp-2 font-light">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/${cat.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F27D26] text-black font-black text-xs font-mono uppercase tracking-widest hover:bg-[#ff9345] transition-all transform active:scale-95 shadow-xl shadow-[#F27D26]/20"
                    >
                      <span>EXPLORE {cat.name}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Vertical Responsive Accordion */}
      <div className="lg:hidden flex flex-col gap-3">
        {categories.map((cat, idx) => {
          const isActive = activeSlug === cat.slug;

          return (
            <div
              key={cat.slug}
              onClick={() => setActiveSlug(cat.slug)}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                isActive
                  ? 'h-[280px] border-[#F27D26]/60 shadow-xl'
                  : 'h-[80px] border-zinc-800'
              }`}
            >
              <img
                src={cat.heroImage}
                alt={cat.name}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isActive ? 'grayscale-0 brightness-75' : 'grayscale brightness-40'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
                    0{idx + 1}
                  </span>
                  <span className="tracking-[0.2em] text-sm font-bold text-white uppercase">
                    {cat.name}
                  </span>
                </div>

                {isActive && (
                  <div className="animate-in fade-in duration-300">
                    <p className="text-xs text-zinc-300 line-clamp-2 mb-3 font-light">
                      {cat.description}
                    </p>
                    <Link
                      to={`/${cat.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F27D26] text-black text-xs font-mono font-black uppercase tracking-wider"
                    >
                      <span>VIEW STORIES</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
