import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FeaturedTrip() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Create subtle parallax transform for the banner bg image
  const bgY = useTransform(scrollY, [600, 1600], [-60, 60]);

  return (
    <section 
      ref={containerRef}
      id="featured"
      className="relative w-full py-32 md:py-40 flex items-center justify-center overflow-hidden z-10 bg-[#0A0E14]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Selected Journey -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            Signature Expedition
          </h2>
        </div>

        {/* Parallax Image Banner */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group select-none">
          {/* Parallax Image */}
          <motion.div 
            style={{ y: bgY }}
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
              alt="Sunset ocean beach paradise landscape"
              className="w-full h-[140%] object-cover"
            />
          </motion.div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0D1B2A]/30 z-1 pointer-events-none" />

          {/* Details Overlay */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white text-left space-y-2 z-10 select-none">
            <span className="text-[9px] font-sans font-medium uppercase tracking-[0.25em] bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
              10 Days &mdash; $12,500
            </span>
            <h3 className="font-serif font-light text-xl sm:text-3xl md:text-4xl tracking-tight uppercase leading-snug">
              Patagonia Fjords Cruise
            </h3>
          </div>
        </div>

        {/* Narrative Description & CTA */}
        <div className="max-w-xl mx-auto space-y-8">
          <p className="font-sans text-[11px] font-light tracking-[0.1em] text-slate-400 leading-relaxed uppercase">
            A bespoke yacht cruise traversing the ice-blue fjords of Chilean Patagonia. Glacier walks, wilderness dining, and expert oceanography guides. Private cabin availability is strictly limited.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#ffffff', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Booking request form launched.')}
              className="px-8 py-3.5 border border-white/25 text-white/80 rounded-full text-[10px] font-sans font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              Request Private Cabin
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
