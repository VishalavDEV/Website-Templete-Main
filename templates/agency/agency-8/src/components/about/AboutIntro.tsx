import React from 'react';
import { motion } from 'motion/react';

export const AboutIntro: React.FC = () => {
  return (
    <section className="py-32 sm:py-48 border-t border-[#ffffff10] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-16 sm:mb-24"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            OUR APPROACH
          </span>
        </motion.div>

        {/* Statement 1 */}
        <div className="max-w-5xl mb-20 sm:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#888888] leading-[1.02]"
          >
            WE DON'T JUST <br />
            MAKE THINGS <br />
            <span className="text-[#FAF9F6]/80">LOOK GOOD.</span>
          </motion.h2>
        </div>

        {/* Architectural Divider Line with Pulse */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/60 to-transparent origin-left my-16 sm:my-28"
        />

        {/* Statement 2 - More Dramatic Visual Appearance */}
        <div className="max-w-6xl ml-auto text-right">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]">
              WE MAKE THEM <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.1em]">
                mean something.
              </span>
            </h2>

            <p className="max-w-lg ml-auto text-sm sm:text-base text-[#888888] font-mono leading-relaxed pt-4">
              [ Design with intent. Architecture with longevity. Digital tools built to endure market shifts. ]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
