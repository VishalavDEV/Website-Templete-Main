import React, { useRef } from 'react';
import { Compass, Calendar, Clock, Flame, Footprints } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AdventureBanner() {
  const bannerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transform for the banner bg image
  const bgY = useTransform(scrollY, [600, 1600], [-80, 80]);

  return (
    <section 
      ref={bannerRef}
      id="start-here"
      className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden z-10 text-white"
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=80" 
          alt="Forest camping fireplace night stars"
          className="w-full h-[140%] object-cover"
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-[#0D1B2A]/85 z-1 pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 w-full z-2 text-center space-y-8 select-none">
        
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Upcoming Adventure
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight uppercase leading-tight">
            Patagonia Expedition <br />
            Is Coming Soon
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto font-light">
            In December 2026, we are embarking on a 14-day trekking journey across Southern Patagonia. Get ready for daily travel vlogs, packaging checklists, and campsite maps.
          </p>
        </div>

        {/* Trip Specs Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6 border-t border-white/10">
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-accent">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Duration</span>
            <span className="text-sm font-semibold text-white">14 Days Trek</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-accent">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Departure Date</span>
            <span className="text-sm font-semibold text-white">Dec 05, 2026</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-accent">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Camping Mode</span>
            <span className="text-sm font-semibold text-white">Tent Camping</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-accent">
              <Footprints className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Trekking Grade</span>
            <span className="text-sm font-semibold text-white">Difficult/Hard</span>
          </div>

        </div>

      </div>
    </section>
  );
}
