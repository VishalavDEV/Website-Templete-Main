import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import ScrollReveal from './ScrollReveal';

export default function App() {
  // Split statement words to animate them on hover/reveal
  const words = siteConfig.about.statement.split(" ");

  return (
    <section id="about" className="py-32 md:py-48 w-full bg-black text-[#f5f4f1] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Monogram/Eyebrow */}
        <ScrollReveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] mb-8 block text-center">
            {siteConfig.about.curatorQuote}
          </span>
        </ScrollReveal>

        {/* Large Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-center leading-tight tracking-wide max-w-3xl mb-16 select-none text-[#c5a880]">
            {siteConfig.about.title}
          </h2>
        </ScrollReveal>

        {/* Philosophy Paragraph */}
        <div className="max-w-3xl text-center leading-relaxed tracking-wide text-neutral-400 font-sans text-sm md:text-base">
          <ScrollReveal delay={0.2}>
            <p className="leading-loose text-neutral-400 select-none">
              {siteConfig.about.statement}
            </p>
          </ScrollReveal>
        </div>

        {/* Thin divider */}
        <ScrollReveal delay={0.3} yOffset={10}>
          <div className="w-16 h-[1px] bg-white/20 mt-20" />
        </ScrollReveal>

      </div>
    </section>
  );
}
