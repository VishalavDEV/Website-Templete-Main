import React, { useRef } from 'react';
import { NOIRE_NIGHT_PANELS } from '../data/noireData';

export const NightHorizontalSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="night" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
            04 // NOCTURNAL EXPERIENCE
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl text-[#F3EBDD] uppercase">
            THE NIGHT UNFORMS
          </h2>
        </div>

        {/* Scroll Control Arrows */}
        <div className="flex items-center space-x-3">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center border border-[rgba(243,235,221,0.14)] hover:border-[#B87552] hover:text-[#B87552] font-mono text-sm transition-colors bg-[#211D18]"
            aria-label="Scroll Left"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center border border-[rgba(243,235,221,0.14)] hover:border-[#B87552] hover:text-[#B87552] font-mono text-sm transition-colors bg-[#211D18]"
            aria-label="Scroll Right"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex space-x-6 px-6 md:px-16 scrollbar-none pb-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {NOIRE_NIGHT_PANELS.map((panel) => (
          <div
            key={panel.id}
            className="snap-start flex-none w-[85vw] sm:w-[420px] md:w-[500px] h-[600px] relative bg-[#211D18] border border-[rgba(243,235,221,0.14)] rounded-sm overflow-hidden group shadow-lg"
          >
            {/* Background Image */}
            <img
              src={panel.image}
              alt={panel.title}
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Top Bar inside panel */}
            <div className="absolute top-6 inset-x-6 flex justify-between items-start z-10">
              <span className="font-display font-black text-6xl md:text-7xl text-[#B87552]">
                {panel.number}
              </span>
              <span className="font-mono text-xs text-[#F3EBDD] bg-[#171512]/90 backdrop-blur-md px-3 py-1 border border-[rgba(243,235,221,0.14)] font-bold">
                {panel.subtitle}
              </span>
            </div>

            {/* Bottom Content inside panel */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-[#171512] via-[#171512]/90 to-transparent z-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-[#F3EBDD] uppercase mb-2 group-hover:text-[#B87552] transition-colors">
                {panel.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-[#B8AA98] leading-relaxed">
                {panel.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
