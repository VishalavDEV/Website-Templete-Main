import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';
import ScrollReveal from './ScrollReveal';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0a] text-[#f5f4f1] border-t border-white/5 relative overflow-hidden">
      
      {/* Background large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <span className="text-[20vw] font-serif font-light select-none">LOVE STORIES</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Decorative Quote Icon */}
        <ScrollReveal>
          <span className="text-4xl md:text-5xl font-serif text-[#c5a880] block mb-8">“</span>
        </ScrollReveal>

        {/* Carousel Content */}
        <div className="min-h-[220px] md:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-6"
            >
              <blockquote className="text-lg md:text-2xl font-serif font-light leading-relaxed italic text-neutral-300">
                {siteConfig.testimonials[activeIndex].quote}
              </blockquote>
              <cite className="block text-[10px] uppercase tracking-[0.3em] text-[#c5a880] not-italic">
                — {siteConfig.testimonials[activeIndex].author}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center items-center space-x-3 mt-10">
          {siteConfig.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-[1px] transition-all duration-500 ${
                idx === activeIndex ? 'w-8 bg-[#c5a880]' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
