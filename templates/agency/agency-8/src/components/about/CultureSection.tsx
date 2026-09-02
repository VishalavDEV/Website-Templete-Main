import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface CultureSectionProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigateTeam?: () => void;
}

export const CultureSection: React.FC<CultureSectionProps> = ({
  setCursorType,
  onNavigateTeam,
}) => {
  return (
    <section className="py-28 sm:py-40 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            STUDIO CULTURE
          </span>
        </motion.div>

        {/* Heading & Supporting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#FAF9F6] leading-[0.98]"
            >
              THE PEOPLE <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.1em]">
                behind the work.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#888888] leading-relaxed font-normal"
            >
              Different disciplines. Different perspectives. One shared obsession with making better things.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <button
                onClick={onNavigateTeam}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.04] hover:bg-white text-xs font-mono uppercase tracking-widest text-[#FAF9F6] hover:text-black border border-[#ffffff15] hover:border-white rounded-full transition-all duration-300 cursor-pointer font-semibold"
              >
                <span>MEET THE TEAM</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&nearr;</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Large Editorial Team Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setCursorType('project', 'COLLECTIVE ↗')}
          onMouseLeave={() => setCursorType('default')}
          className="relative aspect-[16/9] sm:aspect-[2.2/1] w-full rounded-2xl overflow-hidden bg-[#111111] border border-[#ffffff15] shadow-2xl group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
            alt="Studio Creative Leaders and Technologists"
            className="w-full h-full object-cover grayscale-[20%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Bar Details */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                CORE LEADERSHIP & CREATIVE ENGINEERS
              </span>
              <p className="text-xs sm:text-sm text-[#FAF9F6] font-medium">
                Operating across London, New York and Tokyo design bureaus
              </p>
            </div>
            <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase rounded-full">
              FIG. 03
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
