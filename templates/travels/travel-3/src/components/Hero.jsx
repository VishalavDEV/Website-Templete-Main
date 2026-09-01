import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SearchCard from './SearchCard';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position into parallax translation
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);
  const textY = useTransform(scrollY, [0, 800], [0, 160]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full h-[620px] md:h-[750px] flex items-center justify-center overflow-hidden z-10"
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
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
          alt="Majestic Mountain Peak Landscape"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-50/100 z-1 pointer-events-none" />

      {/* Floating Decorative Elements */}
      {/* Hot Air Balloon (Right) */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-12 md:right-32 top-24 z-2 pointer-events-none opacity-60 md:opacity-80"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" className="w-14 md:w-20 fill-[#00CEC9]">
          <path d="M50,10 C25,10 10,25 10,50 C10,75 25,95 50,110 C75,95 90,75 90,50 C90,25 75,10 50,10 Z M50,105 C40,95 20,80 20,50 C20,25 40,15 50,15 C60,15 80,25 80,50 C80,80 60,95 50,105 Z" />
          <rect x="44" y="112" width="12" height="10" rx="2" fill="#6C5CE7" />
          <line x1="38" y1="100" x2="44" y2="112" stroke="#6C5CE7" strokeWidth="2" />
          <line x1="62" y1="100" x2="56" y2="112" stroke="#6C5CE7" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Paper Airplane (Left) */}
      <motion.div
        animate={{ 
          x: [0, 40, 0],
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-10 md:left-24 top-36 z-2 pointer-events-none opacity-40 md:opacity-75"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-white fill-none stroke-current" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-2 text-center flex flex-col items-center select-none">
        <motion.div style={{ y: textY }} className="space-y-6 max-w-3xl">
          {/* Label Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs tracking-widest font-bold uppercase shadow-sm"
          >
            ✈️ Explore The Beautiful World
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="font-sans font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-white"
          >
            Let's Travel & <br className="hidden sm:inline" />
            <span className="text-accent">Explore the World</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="font-sans font-medium text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover stunning destinations, custom packages, and expert-led tours built to make your next vacation a lifetime memory.
          </motion.p>
        </motion.div>

        {/* Floating Search Card */}
        <div className="absolute left-0 right-0 bottom-[-40px] md:bottom-[-24px] px-4 w-full">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
