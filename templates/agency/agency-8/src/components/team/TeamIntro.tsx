import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface TeamIntroProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamIntro: React.FC<TeamIntroProps> = ({ setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0066FF]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
            OUR COLLECTIVE
          </span>
        </motion.div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
            >
              DIFFERENT MINDS. <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
                one point of view.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 space-y-6 pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal"
            >
              We believe the strongest work happens when different disciplines challenge, inspire and sharpen each other.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-[#888888] leading-relaxed font-normal"
            >
              We don’t maintain layers of account executives or project siloes. Instead, our clients collaborate directly with the directors and makers whose craft shapes the final product.
            </motion.p>
          </div>
        </div>

        {/* Large Asymmetric Image Composition (Editorial layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-6">
          {/* Main Large Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#ffffff15] bg-[#111111]"
            onMouseEnter={() => setCursorType('project', 'STUDIO // 01')}
            onMouseLeave={() => setCursorType('default')}
          >
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85"
              alt="Design strategy workshop in session"
              className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                  TACTILE CRITIQUE
                </span>
                <p className="text-xs sm:text-sm text-[#FAF9F6] font-medium">
                  London Studio Sprint &bull; Cross-Discipline Review
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#888888] tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                FIG. A
              </span>
            </div>
          </motion.div>

          {/* Secondary Stacked Visuals */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-[#ffffff15] bg-[#111111]"
              onMouseEnter={() => setCursorType('project', 'LAB // 02')}
              onMouseLeave={() => setCursorType('default')}
            >
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=85"
                alt="Prototyping material & code"
                className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                    PROTOTYPING LAB
                  </span>
                  <p className="text-xs text-[#FAF9F6] font-medium">Physical specimens & digital shaders</p>
                </div>
                <span className="font-mono text-[10px] text-[#888888] tracking-widest border border-white/10 px-2.5 py-0.5 rounded-full bg-black/50">
                  FIG. B
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-[#ffffff15] bg-[#111111]"
              onMouseEnter={() => setCursorType('project', 'TOKYO // 03')}
              onMouseLeave={() => setCursorType('default')}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio interior architecture"
                className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                    QUIET FOCUS
                  </span>
                  <p className="text-xs text-[#FAF9F6] font-medium">Tokyo Bureau Architectural Space</p>
                </div>
                <span className="font-mono text-[10px] text-[#888888] tracking-widest border border-white/10 px-2.5 py-0.5 rounded-full bg-black/50">
                  FIG. C
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
