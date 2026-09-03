import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../ui/Counter';

export default function Statistics() {
  const stats = [
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
    { label: 'Industry Awards Won', value: 15, suffix: '' },
    { label: 'Countries Served', value: 22, suffix: '' },
    { label: 'Digital Impressions', value: 250, suffix: 'M+' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-r from-blue-950/40 via-[#070915] to-purple-950/40 border-y border-white/10 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center p-6 glass-panel rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-syne font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-500 tracking-tight mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
