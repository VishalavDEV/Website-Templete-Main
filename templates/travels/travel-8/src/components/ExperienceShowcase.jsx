import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceShowcase() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const bgImageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    show: { 
      opacity: 0.45, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fgImageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.35
      }
    }
  };

  return (
    <section id="experience" className="py-32 md:py-40 bg-[#0A0E14] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Bespoke Ocean Excursions -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            Unparalleled Privacy
          </h2>
        </div>

        {/* Collage Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-5xl mx-auto h-[380px] sm:h-[500px] flex items-center justify-center select-none"
        >
          {/* Left Background Image */}
          <motion.div 
            variants={bgImageVariants}
            className="absolute left-[2%] sm:left-[8%] w-[32%] sm:w-[35%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 opacity-40"
          >
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Clear turquoise coastal waters aerial view"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Background Image */}
          <motion.div 
            variants={bgImageVariants}
            className="absolute right-[2%] sm:right-[8%] w-[32%] sm:w-[35%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 opacity-40"
          >
            <img
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80"
              alt="Deep ocean ship wake trails aerial view"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Center Foreground Image */}
          <motion.div 
            variants={fgImageVariants}
            className="relative z-10 w-[60%] sm:w-[50%] aspect-[3/4] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80"
              alt="Relaxing on the front bow deck of a premium yacht"
              className="w-full h-full object-cover"
            />
            {/* Soft inner glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </motion.div>

        {/* Narrative Description */}
        <div className="max-w-xl mx-auto space-y-6 pt-8">
          <p className="font-sans text-[11px] font-light tracking-[0.1em] text-slate-400 leading-relaxed uppercase">
            AETHER charter packages are built around complete seclusion. Navigate the Mediterranean aboard customized luxury motor yachts featuring private helipads, underwater lounges, and world-class crew services.
          </p>
          <div className="w-8 h-px bg-white/20 mx-auto" />
        </div>

      </div>
    </section>
  );
}
