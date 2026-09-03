import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import ScrollReveal from './ScrollReveal';

export default function App() {
  return (
    <section className="bg-black text-[#f5f4f1] py-12">
      {siteConfig.featuredStories.map((story, idx) => {
        const isDark = idx % 2 === 0;

        return (
          <div 
            key={idx}
            className={`w-full py-24 md:py-36 border-t border-white/5 overflow-hidden ${
              isDark ? 'bg-black text-[#f5f4f1]' : 'bg-[#0f0f0f] text-[#f5f4f1]'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                story.reverse ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Image side */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal>
                    <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/5">
                      
                      {/* Image zoom loop */}
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full bg-cover bg-center grayscale cursor-pointer"
                        style={{ backgroundImage: `url(${story.image})` }}
                      />

                      {/* Accent gold line tag */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c5a880] pointer-events-none" />

                    </div>
                  </ScrollReveal>
                </div>

                {/* Text content side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  
                  <ScrollReveal delay={0.1}>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880]">
                      {story.eyebrow}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight text-[#c5a880]">
                      {story.title}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <p className="text-sm tracking-wide leading-relaxed text-neutral-400 font-sans">
                      {story.description}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.4}>
                    <div className="pt-4">
                      <button className="px-8 py-3 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-xs uppercase tracking-[0.2em] font-sans transition-all duration-500">
                        {story.linkText}
                      </button>
                    </div>
                  </ScrollReveal>

                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
