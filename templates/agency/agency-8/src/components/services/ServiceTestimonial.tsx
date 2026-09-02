import React from 'react';
import { motion } from 'motion/react';

export const ServiceTestimonial: React.FC = () => {
  return (
    <section className="py-32 sm:py-48 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Editorial Quotation Marks Decor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-editorial text-7xl sm:text-9xl text-[#0066FF] leading-none mb-6 select-none opacity-80"
        >
          &ldquo;
        </motion.div>

        {/* Large Quotation Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#FAF9F6] leading-[1.15] max-w-4xl mx-auto mb-12 sm:mb-16 tracking-normal"
        >
          Working with the team completely changed how we thought about our digital experience.
        </motion.blockquote>

        {/* Client Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <div className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider text-[#FAF9F6]">
            MAYA RICHARDSON
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] flex items-center justify-center gap-2">
            <span>CMO, AURA</span>
            <span className="text-white/20">•</span>
            <span className="text-[#888888]">ENTERPRISE SPATIAL PLATFORM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
