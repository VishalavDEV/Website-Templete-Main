import React from 'react';
import { motion } from 'motion/react';

export default function TrustedCompanies() {
  const logos = [
    { name: 'Northstar', sub: 'Technologies', symbol: '✦' },
    { name: 'Veridian', sub: 'Financial Group', symbol: '◆' },
    { name: 'Atlas Group', sub: 'International', symbol: '▲' },
    { name: 'Meridian', sub: 'Capital Partners', symbol: '●' },
    { name: 'Crestline', sub: 'Global Advisory', symbol: '❖' },
    { name: 'Vertex', sub: 'Biotech & Pharma', symbol: '■' },
  ];

  return (
    <section className="py-12 sm:py-14 bg-white/40 backdrop-blur-sm border-y border-[#1A1A1A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#65726D]">
            Trusted by global enterprises & executive travelers
          </p>
        </div>

        {/* Monochrome Editorial Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl hover:bg-white/80 hover:shadow-xs transition-all group cursor-default border border-transparent hover:border-black/5"
            >
              <div className="flex items-center gap-2 text-[#1A1A1A]/80 group-hover:text-[#0D4433] transition-colors">
                <span className="text-xs font-serif text-[#0D4433] opacity-70">{logo.symbol}</span>
                <span className="font-serif text-lg font-normal tracking-tight text-[#1A1A1A]">
                  {logo.name}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#919E99] font-medium mt-0.5">
                {logo.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

