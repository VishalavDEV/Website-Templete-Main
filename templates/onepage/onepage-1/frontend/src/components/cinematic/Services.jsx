import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/cinematic/config';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-black text-[#f5f4f1] w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] mb-3 block">
              PRICING & COLLECTIBLES
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide mb-4">
              Bespoke Investment Packages
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xs md:text-sm text-neutral-400 font-sans tracking-wide leading-relaxed">
              Every celebration is a unique piece of art. We offer curated investment formats tailored to destination requirements and film/digital preferences.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.services.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#0c0c0c] border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group hover:border-[#c5a880]/30 transition-colors duration-500 shadow-2xl"
              >
                {/* Border animation accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a880] group-hover:w-full transition-all duration-700 ease-out" />
                
                <div>
                  <h3 className="text-xl font-serif font-light text-[#f5f4f1] mb-2">{service.title}</h3>
                  <div className="flex items-baseline space-x-1 mb-8">
                    <span className="text-3xl font-serif font-light text-[#c5a880]">{service.price}</span>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-500">Starting from</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs tracking-wide text-neutral-400 font-sans leading-relaxed">
                        <span className="text-[#c5a880] mr-3 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button className="w-full py-3 rounded-full border border-white/10 group-hover:border-[#c5a880] text-xs uppercase tracking-[0.2em] font-sans text-neutral-300 group-hover:text-white transition-all duration-500">
                    Request Booking
                  </button>
                </div>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
