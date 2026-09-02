import React from 'react';
import { motion } from 'motion/react';
import { CULTURE_COLLAGE } from '../../data/teamData';
import { CursorType } from '../../types';

interface TeamCultureProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamCulture: React.FC<TeamCultureProps> = ({ setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#0066FF]/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              STUDIO LIFE & CULTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            HOW WE SPEND <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              our days.
            </span>
          </motion.h2>

          <p className="text-base sm:text-lg text-[#888888] max-w-xl font-normal pt-2">
            No forced team outings or performative cheer. Just dedicated craftspeople working in quiet focus, intense debate, and continuous experimentation.
          </p>
        </div>

        {/* Visual Editorial Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
          {CULTURE_COLLAGE.map((item, idx) => {
            const aspectClass =
              item.aspect === 'tall'
                ? 'aspect-[3/4]'
                : item.aspect === 'wide'
                ? 'aspect-[16/10]'
                : 'aspect-square';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setCursorType('project', `${item.tag} ↗`)}
                onMouseLeave={() => setCursorType('default')}
                className="group relative rounded-2xl overflow-hidden border border-[#ffffff15] bg-[#111115] flex flex-col justify-end p-6 cursor-pointer"
              >
                <div className={`absolute inset-0 ${aspectClass}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 space-y-2 pointer-events-none mt-40 sm:mt-48">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#0066FF] border border-white/10 inline-block font-bold">
                    {item.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FAF9F6] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
