import React from 'react';
import { motion } from 'motion/react';
import { WORK_CLIENTS } from '../../data/workProjectsData';
import { CursorType } from '../../types';

interface ClientStripProps {
  setCursorType: (type: CursorType) => void;
}

export const ClientStrip: React.FC<ClientStripProps> = ({ setCursorType }) => {
  return (
    <section className="py-20 bg-[#060608] border-b border-[#ffffff10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 text-center sm:text-left">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            TRUSTED BY AMBITIOUS BRANDS
          </span>
          <span className="hidden sm:inline font-mono text-xs text-[#888888] tracking-widest">
            2018 — 2026
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {WORK_CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="p-5 rounded-xl bg-white/[0.02] border border-[#ffffff0e] hover:border-[#0066FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group cursor-default"
            >
              <span className="text-sm font-mono text-[#0066FF] group-hover:scale-110 transition-transform">
                {client.symbol}
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-[#FAF9F6] tracking-wider uppercase group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-[#888888] truncate max-w-[120px]">
                {client.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
