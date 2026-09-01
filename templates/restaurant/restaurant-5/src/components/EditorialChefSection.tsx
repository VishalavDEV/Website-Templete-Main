import React from 'react';
import { NOIRE_IMAGES } from '../data/noireData';

export const EditorialChefSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Editorial Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
          06 // CULINARY DIRECTOR
        </span>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side Vertical Info */}
        <div className="lg:col-span-3 flex flex-col justify-between p-8 bg-[#211D18] border border-[rgba(243,235,221,0.14)] rounded-sm shadow-md">
          <div>
            <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-4 font-bold">
              EXECUTIVE PROFILE
            </span>
            <h3 className="font-display font-black text-3xl md:text-4xl text-[#F3EBDD] uppercase leading-tight mb-2">
              CHEF <br />
              ARJUN RAO
            </h3>
            <p className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase border-b border-[rgba(243,235,221,0.14)] pb-4 mb-4 font-bold">
              CULINARY DIRECTOR
            </p>
            <p className="font-body text-xs md:text-sm text-[#B8AA98] leading-relaxed">
              Trained in Tokyo and San Sebastian before founding NOIRÉ in Chennai. Arjun approaches wood-fire cooking as an intense dialogue between heat, smoke, and prime coastal produce.
            </p>
          </div>

          <div className="pt-6 font-mono text-[11px] text-[#B8AA98] space-y-2">
            <div>PHILOSOPHY: HEARTH & HARVEST</div>
            <div className="text-[#B87552] font-bold">HEARTH: 100% OAK & CHARCOAL</div>
          </div>
        </div>

        {/* Center & Right: Giant Portrait with Overlay Headline */}
        <div className="lg:col-span-9 relative min-h-[500px] lg:min-h-[650px] w-full overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm group shadow-lg bg-[#211D18]">
          <img
            src={NOIRE_IMAGES.chefArjun}
            alt="Chef Arjun Rao"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay Typography */}
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center bg-gradient-to-r from-[#171512]/90 via-transparent to-[#171512]/40 pointer-events-none">
            <h2 className="font-display font-black tracking-tighter uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-[#F3EBDD]">
              THE <br />
              KITCHEN <br />
              <span className="text-[#B8AA98]">IS</span> <br />
              <span className="text-[#B87552]">ALIVE.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
