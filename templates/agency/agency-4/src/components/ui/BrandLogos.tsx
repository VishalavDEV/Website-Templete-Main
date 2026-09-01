import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  { name: 'NORTHLINE', label: 'Architectural Systems' },
  { name: 'SOLACE', label: 'Health Technologies' },
  { name: 'FORMA', label: 'Acoustic Labs' },
  { name: 'TERRA', label: 'Organic Botanicals' },
  { name: 'LUMEN', label: 'Clean Energy' },
  { name: 'VANCE', label: 'Spatial Systems' },
  { name: 'AETHER', label: 'Capital' },
  { name: 'KLARITY', label: 'Nordics' }
];

export const BrandLogos: React.FC = () => {
  return (
    <div className="py-12 border-y border-[#EAE6DF] bg-white/50 backdrop-blur-sm overflow-hidden my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6863]">
          Trusted by Visionary Founders & Global Enterprises Worldwide
        </p>
      </div>

      <div className="flex space-x-12 animate-marquee whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex space-x-12 items-center min-w-full"
        >
          {BRANDS.concat(BRANDS).map((b, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 px-6 py-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] shadow-xs hover:border-[#D96B43] transition-colors"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#D96B43]" />
              <span className="font-display font-extrabold text-base tracking-widest text-[#1A1918]">
                {b.name}
              </span>
              <span className="text-[10px] text-[#6B6863] font-semibold uppercase tracking-wider hidden sm:inline">
                {b.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
