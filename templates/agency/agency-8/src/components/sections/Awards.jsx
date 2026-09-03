import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Awards() {
  const { setCursorState } = useCursor();

  const awards = [
    { platform: 'Awwwards', title: 'Studio of the Day', project: 'Nova Finance', year: '2026' },
    { platform: 'CSS Design Awards', title: 'Special Kudos & Best UX', project: 'Orbit Studio', year: '2025' },
    { platform: 'Behance', title: 'Featured Project Showcase', project: 'Velora Fashion', year: '2026' },
    { platform: 'DesignRush', title: 'Top International Digital Agency', project: 'Global Ranking', year: '2025' },
    { platform: 'Clutch', title: 'Top Creative Web Agency Leader', project: 'Verified Leader', year: '2026' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#070915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="HONORS & RECOGNITION"
          title="INDUSTRY AWARDS"
          description="Recognized by global design institutions for visual innovation and technical execution."
        />

        <div className="space-y-4">
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              className="group glass-panel p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-syne font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.platform}
                  </h4>
                  <p className="text-sm text-slate-400 font-light">{item.title}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
                <div className="text-right">
                  <span className="text-xs font-mono text-cyan-400 block">{item.project}</span>
                  <span className="text-xs font-mono text-slate-500">{item.year}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
