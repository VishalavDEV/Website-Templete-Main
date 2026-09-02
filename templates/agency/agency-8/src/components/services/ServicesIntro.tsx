import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ServicesIntro: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-48 bg-[#080808] px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            OUR CAPABILITIES
          </span>
        </motion.div>

        {/* Large Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            style={{ y: yMove }}
            className="lg:col-span-8 space-y-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.94]"
            >
              FROM THE FIRST <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
                idea to the final
              </span> <br />
              EXPERIENCE.
            </motion.h2>
          </motion.div>

          <div className="lg:col-span-4 lg:pt-4 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg text-[#888888] leading-relaxed font-normal"
            >
              We work across strategy, identity, digital design and technology to create coherent experiences from beginning to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 border-t border-[#ffffff10] flex items-center justify-between font-mono text-xs text-[#666666] uppercase tracking-wider"
            >
              <span>DISCIPLINES: 06</span>
              <span className="text-[#0066FF]">INTEGRATED END-TO-END</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
