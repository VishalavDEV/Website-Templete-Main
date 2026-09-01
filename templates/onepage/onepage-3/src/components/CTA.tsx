"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 md:py-40 bg-nye-dark text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      {/* Massive Accent Glow (Purple/Orange) */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-nye-purple/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-10 w-[400px] h-[400px] rounded-full bg-nye-orange/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Availability tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 border border-nye-light/10 px-4 py-1.5 rounded-full mb-10 text-[10px] font-bold uppercase tracking-widest text-nye-orange"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </motion.div>

        {/* Large CTA Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase max-w-3xl mb-12"
        >
          HAVE SOMETHING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nye-orange via-nye-purple to-nye-violet">WORTH BUILDING?</span>
        </motion.h2>

        {/* Let's Talk CTA button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <a
            href="mailto:hello@intentagency.com"
            className="group flex items-center gap-4 bg-nye-orange text-nye-light font-black uppercase tracking-wider text-sm md:text-base px-10 py-5 rounded-full hover:bg-nye-light hover:text-nye-dark transition-all duration-300 shadow-2xl shadow-nye-orange/20"
          >
            LET&apos;S TALK
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

        {/* Secondary Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-2 mt-4"
        >
          <a
            href="mailto:hello@intentagency.com"
            className="text-lg md:text-2xl font-black uppercase text-nye-light hover:text-nye-orange transition-colors"
          >
            hello@intentagency.com
          </a>
          <span className="text-[10px] font-bold tracking-[0.25em] text-nye-mauve uppercase">
            CREATIVE COLLABORATIONS 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
}
