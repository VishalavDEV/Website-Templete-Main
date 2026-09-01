import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transform translations
  const bgY = useTransform(scrollY, [0, 900], [0, 240]);
  const textY = useTransform(scrollY, [0, 900], [0, 160]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('experience');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10"
    >
      {/* Background Parallax Image with Ken Burns loop */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        animate={{ scale: [1.02, 1.08, 1.02] }}
        transition={{ 
          duration: 24, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Yacht Cruising the Deep Blue Sea"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Bright Oceanic Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/15 via-transparent to-[#0A0E14]/95 z-1 pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-2 text-center flex flex-col items-center select-none">
        <motion.div style={{ y: textY }} className="space-y-8">
          
          {/* Eyebrow Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="block font-sans text-[10px] uppercase tracking-[0.35em] text-white/80"
          >
            - Luxury Experience -
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif font-light text-4xl sm:text-6xl md:text-8xl leading-tight text-white max-w-5xl mx-auto"
          >
            The Art of Sailing <br />
            Redefined
          </motion.h1>

          {/* Subtitle / Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="font-sans text-[11px] font-light tracking-[0.1em] text-white max-w-md mx-auto leading-relaxed uppercase pt-4"
          >
            Private bespoke ocean charters and yacht excursions designed for refined tastes. Monaco &mdash; French Riviera.
          </motion.p>
        </motion.div>
      </div>

      {/* Bouncing circular indicator at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <motion.button
          onClick={handleScrollDown}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 rounded-full border border-white/20 hover:border-white/50 backdrop-blur-md flex items-center justify-center p-0.5 group cursor-pointer shadow-lg transition-colors"
          aria-label="Scroll to experience"
        >
          {/* Mini circular image thumbnail of yacht interior/wake */}
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=80&h=80&q=80" 
            alt="Yacht wake circle"
            className="w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
      </div>
    </section>
  );
}
