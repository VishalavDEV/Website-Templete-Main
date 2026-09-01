import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);
  const textY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10"
    >
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" 
          alt="Warm sunset roadtrip nature adventure scenery"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Warm Sunset Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/70 via-accent/30 to-white z-1 pointer-events-none" />

      {/* Side Accent Labels */}
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-10 text-white/50 text-[9px] font-extrabold uppercase tracking-widest vertical-text select-none">
        <span>EST. 2026</span>
        <div className="w-px h-12 bg-white/20" />
        <span>TALES JOURNAL</span>
      </div>

      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-10 text-white/50 text-[9px] font-extrabold uppercase tracking-widest vertical-text select-none">
        <span>SCROLL DOWN</span>
        <div className="w-px h-12 bg-white/20" />
        <Compass className="w-3.5 h-3.5 animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-2 text-center flex flex-col items-center select-none">
        <motion.div style={{ y: textY }} className="space-y-4">
          
          {/* Label Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs tracking-widest font-bold uppercase shadow-sm"
          >
            🌅 The Wanderer Tales
          </motion.span>

          {/* Layered/Ghost Title Container */}
          <div className="relative py-8 flex flex-col items-center justify-center">
            
            {/* Outline Ghost Text (behind) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.15, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="font-display font-light text-5xl sm:text-7xl md:text-9xl tracking-[0.18em] uppercase text-white select-none absolute top-[10%] select-none scale-105"
              style={{ WebkitTextStroke: '1px white', textFillColor: 'transparent' }}
            >
              EXPLORE
            </motion.h1>

            {/* Front Solid text */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
              className="font-display font-light text-5xl sm:text-7xl md:text-9xl tracking-[0.15em] uppercase text-white select-none relative z-10"
            >
              EXPLORE
            </motion.h1>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block font-display font-bold text-accent text-sm md:text-lg tracking-[0.4em] uppercase pt-4 relative z-10"
            >
              The World Around You
            </motion.span>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-sans font-light text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-2"
          >
            A curated travel journal documenting nature, adventure, and remote corners of the globe. Built for wild spirits.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating scroll down arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400 cursor-pointer hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">Discover</span>
        <ChevronDown className="w-5 h-5 text-accent" />
      </motion.div>
    </section>
  );
}
