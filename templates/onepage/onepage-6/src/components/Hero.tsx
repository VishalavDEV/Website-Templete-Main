"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  // Motion variations with type casting to satisfy TypeScript
  const textReveal = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const, 
        delay: custom * 0.15 
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light">
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy and Details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Metadata Tag */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.25em] uppercase text-nye-teal dark:text-nye-mauve mb-6"
          >
            <span>INDEPENDENT CREATIVE AGENCY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nye-orange"></span>
            <span>EST. 2026</span>
          </motion.div>

          {/* Headline - Bold, Editorial & Asymmetric */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            <span className="block overflow-hidden py-1">
              <motion.span variants={textReveal} initial="hidden" animate="visible" custom={1} className="block">
                WE BUILD
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1 text-transparent bg-clip-text bg-gradient-to-r from-nye-purple via-nye-violet to-nye-orange">
              <motion.span variants={textReveal} initial="hidden" animate="visible" custom={2} className="block">
                BRANDS THAT
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={textReveal} initial="hidden" animate="visible" custom={3} className="block">
                MOVE.
              </motion.span>
            </span>
          </h1>

          {/* Paragraph */}
          <motion.p
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-base md:text-lg text-nye-dark/70 dark:text-nye-light/70 max-w-xl mb-10 leading-relaxed font-medium"
          >
            We translate core business strategy into memorable digital products and visual design.
            Done with absolute intention, crafted for unfair competitive advantage.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 bg-nye-dark text-nye-light dark:bg-nye-light dark:text-nye-dark font-extrabold uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-nye-orange dark:hover:bg-nye-orange dark:hover:text-nye-light transition-all duration-300 shadow-lg shadow-nye-dark/10"
            >
              Explore Work
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="group text-xs font-extrabold uppercase tracking-wider text-nye-dark dark:text-nye-light hover:text-nye-orange dark:hover:text-nye-orange transition-colors px-6 py-4"
            >
              Our Services
            </a>
          </motion.div>

          {/* Secondary Metadata */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={6}
            className="border-t border-nye-dark/10 dark:border-nye-light/10 w-full max-w-lg mt-16 pt-6 grid grid-cols-2 gap-6 text-[10px] font-bold tracking-widest text-nye-dark/50 dark:text-nye-light/50"
          >
            <div>
              <p className="uppercase text-nye-orange font-extrabold mb-1">Capabilities</p>
              <p>BRANDING / DEVELOPMENT / DIGITAL UX</p>
            </div>
            <div>
              <p className="uppercase text-nye-purple font-extrabold mb-1">Focus</p>
              <p>PREMIUM LANDING EXPERIENCE</p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Abstract Visual Composition */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Main Visual Frame (Asymmetric Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
            className="relative w-72 h-96 md:w-80 md:h-[420px] bg-nye-teal rounded-2xl overflow-hidden border border-nye-dark/10 shadow-2xl z-20 group"
          >
            {/* Embedded image placeholder with cool orange hover tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-nye-purple/80 to-nye-teal mix-blend-multiply transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"></div>
            
            {/* Real Unsplash image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop"
              alt="Art abstract"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90 transition-transform duration-700 group-hover:scale-105"
            />

            {/* In-visual content overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-nye-light z-30">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs tracking-widest text-nye-mauve">INTENT / 26</span>
                <span className="text-[10px] border border-nye-light/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">CREATIVE</span>
              </div>
              <div>
                <h3 className="font-black text-2xl tracking-tight leading-none uppercase mb-2">DIGITAL ARTISTRY</h3>
                <p className="text-xs text-nye-mauve max-w-[200px]">Crafting visual systems for modern environments.</p>
              </div>
            </div>
          </motion.div>

          {/* Background layered element (Orange Box) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20, rotate: 12 }}
            animate={{ opacity: 1, x: 20, y: -20, rotate: 6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-12 right-12 w-64 h-80 bg-nye-orange rounded-2xl -z-10 shadow-lg border border-nye-dark/5 opacity-80"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              className="w-full h-full bg-noise rounded-2xl"
            />
          </motion.div>

          {/* Background layered element (Navy Box) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 40, rotate: -15 }}
            animate={{ opacity: 1, x: -40, y: 40, rotate: -8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-12 left-12 w-64 h-80 bg-nye-navy rounded-2xl -z-20 shadow-lg border border-nye-light/5 opacity-90"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
              className="w-full h-full bg-noise rounded-2xl"
            />
          </motion.div>

          {/* Floating abstract circle accent */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 left-12 w-16 h-16 rounded-full bg-nye-violet shadow-lg -z-10 flex items-center justify-center font-mono text-[9px] font-black text-nye-light"
          >
            IDEAS*
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
            className="absolute -bottom-6 right-20 bg-nye-light dark:bg-nye-dark text-nye-dark dark:text-nye-light border border-nye-dark/10 dark:border-nye-light/10 px-6 py-4 rounded-xl shadow-xl z-30 flex flex-col"
          >
            <span className="text-xl font-black text-nye-orange">3.8X</span>
            <span className="text-[8px] font-extrabold uppercase tracking-widest text-nye-dark/60 dark:text-nye-light/60">AVG GROWTH</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
