import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import ScrollReveal from './ScrollReveal';

export default function App() {
  return (
    <section id="portfolio" className="py-24 md:py-36 bg-black text-[#f5f4f1] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Title */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide">Selected Works</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-sans mt-3 md:mt-0">
              DOCUMENTING COUTURE LOVE STORIES
            </span>
          </ScrollReveal>
        </div>

        {/* Staggered Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.portfolio.map((item, idx) => {
            // Alternating staggered aspect ratios for masonry feel
            const isTall = idx % 3 === 0;
            const isWide = idx % 3 === 2;

            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group cursor-pointer flex flex-col space-y-4">
                  
                  {/* Photo Container */}
                  <div className={`relative overflow-hidden w-full bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 ${
                    isTall ? 'aspect-[3/4]' : isWide ? 'aspect-[4/3]' : 'aspect-square'
                  }`}>
                    
                    {/* Grayscale-to-Color zoom image */}
                    <div 
                      className="w-full h-full bg-cover bg-center grayscale duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0 transition-all"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Dark glassmorphic hover details */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-1">
                        {item.title}
                      </span>
                      <p className="text-sm font-serif font-light text-[#f5f4f1]">
                        {item.caption}
                      </p>
                    </div>

                  </div>

                  {/* Out of container descriptions (Magazine look) */}
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="font-serif text-sm font-light text-neutral-300">
                      {item.caption}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-600 font-sans">
                      {item.title}
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
