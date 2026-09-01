import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-navy/10 pb-6 mb-12 flex flex-col md:flex-row md:items-baseline md:justify-between"
    >
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="font-sans text-xs tracking-widest text-[#1a2b4a]/50 font-bold uppercase">{number}</span>
        <h2 className="text-4xl md:text-5xl font-light text-[#1a2b4a] tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-2 md:mt-0 text-xs font-sans tracking-widest text-[#1a2b4a]/60 uppercase font-semibold">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
