import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureBlock({ id, title, label, description, image, ctaText, reverse, theme, onCtaClick }) {
  const isDark = theme === 'dark';

  return (
    <section 
      id={id}
      className={`py-24 md:py-32 w-full transition-colors duration-500 overflow-hidden ${
        isDark ? 'bg-[#0a0a0a] text-[#f5f4f1]' : 'bg-[#f5f4f1] text-[#0a0a0a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}>
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              
              {/* Image zoom-on-hover */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${image})` }}
              />

              {/* Absolute Wipe Slide Overlay Mask */}
              <motion.div
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className={`absolute inset-0 z-10 ${
                  isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f4f1]'
                }`}
              />

            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow label */}
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-[10px] uppercase tracking-[0.3em] font-sans ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              {label}
            </motion.span>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-sm tracking-wide leading-relaxed font-sans ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {description}
            </motion.p>

            {/* Action button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-4"
            >
              <button 
                onClick={onCtaClick}
                className={`px-8 py-3 rounded-full border text-xs uppercase tracking-[0.2em] font-sans transition-all duration-500 ${
                  isDark 
                    ? 'border-[#f5f4f1]/30 text-[#f5f4f1] hover:bg-[#f5f4f1] hover:text-[#0a0a0a]' 
                    : 'border-black text-white bg-black hover:bg-transparent hover:text-black'
                }`}
              >
                {ctaText}
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
