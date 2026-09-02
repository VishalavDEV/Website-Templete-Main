import React from 'react';
import { motion } from 'framer-motion';
import { PUBLICATIONS } from '../../data/portfolioData';
import { Award } from 'lucide-react';

export const PressBar: React.FC = () => {
  return (
    <section id="press" className="py-16 bg-[#0e1219] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#66fcf1]" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#c5c6c7]/60">
              Selected Accolades & Press
            </span>
          </div>
          <span className="text-xs font-mono text-[#45a29e]">
            Published globally in leading architecture and fashion journals
          </span>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group p-4 bg-[#12161f]/50 border border-white/5 hover:border-[#66fcf1]/30 rounded transition-all duration-300 flex flex-col justify-between text-center sm:text-left"
            >
              <span className="font-['Syne'] font-bold text-sm text-white/80 group-hover:text-[#66fcf1] transition-colors tracking-wider mb-2">
                {pub.name}
              </span>
              <span className="text-[10px] font-mono text-[#c5c6c7]/50 leading-tight">
                {pub.accolade}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
