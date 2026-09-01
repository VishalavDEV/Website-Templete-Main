"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative py-24 md:py-36 bg-nye-dark text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      {/* Floating accent gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-nye-orange/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Large stylized quote symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-nye-orange/10 border border-nye-orange/20 flex items-center justify-center text-nye-orange mb-10"
        >
          <Quote className="w-6 h-6 fill-current" />
        </motion.div>

        {/* Testimonial Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase max-w-4xl mb-12 text-nye-light"
        >
          &quot;THEY DIDN&apos;T JUST MAKE US LOOK BETTER.<br />
          THEY MADE US <span className="text-transparent bg-clip-text bg-gradient-to-r from-nye-orange via-nye-purple to-nye-teal">THINK DIFFERENTLY</span>.&quot;
        </motion.blockquote>

        {/* Client details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <cite className="not-italic text-lg font-black uppercase text-nye-light tracking-wide">
            Alex Morgan
          </cite>
          <span className="text-xs font-bold uppercase tracking-widest text-nye-orange mt-1">
            Founder, Nova
          </span>
        </motion.div>

      </div>
    </section>
  );
}
