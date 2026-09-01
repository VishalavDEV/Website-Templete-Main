import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="blog" className="relative py-24 md:py-28 bg-[#09111C] overflow-hidden">
      {/* Angled background banner accent */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-accent to-[#E05E00] opacity-10 pointer-events-none transform -skew-y-3 scale-110 origin-center z-1" 
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase">
            Let's Talk Logistics
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight uppercase leading-tight">
            Ready to Optimize Your <br className="hidden sm:inline" />
            Supply Chain?
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light">
            Contact our harbor clearance experts and route dispatchers to negotiate competitive corporate shipping rates today.
          </p>
        </div>

        {/* Action button cluster */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#E05E00' }}
            whileTap={{ scale: 0.95 }}
            href="#tracking"
            className="w-full sm:w-auto bg-accent text-white font-display font-extrabold text-xs py-4 px-8 rounded-xl uppercase tracking-widest text-center cursor-pointer shadow-lg shadow-accent/15"
          >
            Request Instant Quote
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-display font-extrabold text-xs py-4 px-8 rounded-xl uppercase tracking-widest text-center cursor-pointer hover:border-white transition-colors"
          >
            <span>Speak with Expert</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
