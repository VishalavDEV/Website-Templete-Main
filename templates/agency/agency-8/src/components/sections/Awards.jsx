import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AwardModal from '../ui/AwardModal';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Awards() {
  const { setCursorState } = useCursor();
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    { platform: 'Awwwards', title: 'Studio of the Day & Site of the Month Nominee', project: 'Nova Finance Web Platform', year: '2026' },
    { platform: 'CSS Design Awards', title: 'Special Kudos & Best UI/UX Design', project: 'Orbit Studio WebXR Experience', year: '2025' },
    { platform: 'Behance', title: 'Featured Showcase in Interaction & 3D Art', project: 'Velora Fashion Digital Runway', year: '2026' },
    { platform: 'DesignRush', title: 'Top International Digital & Creative Agency', project: 'Global Digital Leadership Ranking', year: '2025' },
    { platform: 'Clutch', title: 'Top Creative Web Agency Leader (5.0 Star Rating)', project: 'Verified Enterprise Client Execution', year: '2026' },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#070915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="HONORS & RECOGNITION"
          title="INDUSTRY AWARDS"
          description="Recognized by global design institutions for visual innovation and technical execution."
        />

        <div className="space-y-3 sm:space-y-4">
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedAward(item)}
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              className="group glass-panel p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-syne font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.platform}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">{item.title}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-8 border-t md:border-t-0 pt-2.5 sm:pt-0 border-white/5">
                <div className="text-left md:text-right">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-400 block">{item.project}</span>
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500">{item.year}</span>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Award Citation Modal */}
      <AwardModal
        award={selectedAward}
        isOpen={Boolean(selectedAward)}
        onClose={() => setSelectedAward(null)}
      />
    </section>
  );
}
