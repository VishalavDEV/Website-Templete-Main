import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../data/config';

export default function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center grayscale opacity-70"
          style={{ backgroundImage: `url(${siteConfig.hero.bgImage})` }}
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      </motion.div>

      {/* Hero Typography Contents */}
      <motion.div 
        style={{ opacity: opacityParallax }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        
        {/* Monogram logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-14 h-14 rounded-full border border-[#c5a880]/30 flex items-center justify-center mb-8 bg-black/50 backdrop-blur-sm"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-light text-[#c5a880]">
            {siteConfig.monogram}
          </span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#f5f4f1] via-[#f5f4f1] to-[#c5a880] mb-6 select-none"
        >
          {siteConfig.studioName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-sans"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-sans">Scroll</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#c5a880]"
            />
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
