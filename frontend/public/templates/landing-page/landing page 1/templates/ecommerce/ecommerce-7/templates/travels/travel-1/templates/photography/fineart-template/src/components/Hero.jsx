import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../data/config';

export default function App() {
  const { scrollY } = useScroll();
  
  // Create a subtle parallax offset for the background image
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background Image Wrapper with Parallax & Ken Burns zoom */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full scale-[1.05]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-[8000ms] scale-100 transform hover:scale-[1.05]"
          style={{ 
            backgroundImage: `url(${siteConfig.hero.bgImage})`,
            animation: "kenburns 40s infinite alternate ease-in-out"
          }}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
        <div className="max-w-2xl text-left">
          {/* Title - Animated slide up + fade in */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light text-[#f5f4f1] leading-[1.15] mb-6"
          >
            {siteConfig.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-[#f5f4f1]/80 font-sans tracking-wide leading-relaxed mb-8 max-w-lg"
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a 
              href="#collections"
              className="inline-block px-8 py-3 rounded-full border border-[#f5f4f1]/40 text-[#f5f4f1] uppercase tracking-[0.2em] text-xs hover:bg-[#f5f4f1] hover:text-[#0a0a0a] hover:border-[#f5f4f1] transition-all duration-500 font-sans"
            >
              {siteConfig.hero.ctaText}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
        <a href="#collections" className="flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#f5f4f1] font-sans">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 text-[#f5f4f1]"
          >
            <i className="fa-solid fa-chevron-down text-[10px]"></i>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
