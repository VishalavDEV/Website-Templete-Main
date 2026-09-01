"use client";

import { motion } from "framer-motion";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="intro" className="relative py-24 md:py-32 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Labels */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 border-b border-nye-dark/10 dark:border-nye-light/10 pb-6">
          <span className="text-xs font-black tracking-widest text-nye-orange">01 / WHO WE ARE</span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-nye-dark/50 dark:text-nye-light/50">STRATEGY</span>
          <span className="text-nye-dark/20 dark:text-nye-light/20">•</span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-nye-dark/50 dark:text-nye-light/50">DESIGN</span>
          <span className="text-nye-dark/20 dark:text-nye-light/20">•</span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-nye-dark/50 dark:text-nye-light/50">TECHNOLOGY</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Large Headline */}
          <div className="lg:col-span-8">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase text-nye-dark dark:text-nye-light"
            >
              WE TURN STRATEGY, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nye-purple via-nye-violet to-nye-teal">DESIGN AND TECHNOLOGY</span> <br />
              INTO EXPERIENCES PEOPLE REMEMBER.
            </motion.h2>
          </div>

          {/* Description Paragraphs */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-end">
            <motion.p 
              variants={itemVariants}
              className="text-base text-nye-dark/80 dark:text-nye-light/80 leading-relaxed font-medium"
            >
              We are a compact, multidisciplinary creative agency. We work with ambitious founders and established institutions to clarify their core value and express it through digital excellence.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-base text-nye-dark/80 dark:text-nye-light/80 leading-relaxed font-medium"
            >
              We bypass standard templates and boilerplate procedures. Every project is built from scratch with semantic integrity, curated typography, and fluid, purposeful motion.
            </motion.p>
          </div>
        </motion.div>

        {/* Separator / Accent line */}
        <div className="mt-20 border-t border-nye-dark/10 dark:border-nye-light/10"></div>
        
      </div>
    </section>
  );
}
