import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import { CursorType } from '../../types';

interface ServiceCategoryVisualProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceCategoryVisual: React.FC<ServiceCategoryVisualProps> = ({
  setCursorType,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotateFloat = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0066FF]/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              INTEGRATED DISCIPLINES
            </span>
          </motion.div>

          <motion.h2
            style={{ y: yText }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            ONE STUDIO. <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              many disciplines.
            </span>
          </motion.h2>
        </div>

        {/* Large Editorial Abstract Triad Composition */}
        <motion.div
          style={{ y: yBg, rotate: rotateFloat }}
          className="relative w-full rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl"
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
        >
          {/* Subtle Grid Lines Overlay */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {/* Discipline 1: Strategy */}
            <div className="space-y-6 border-l border-white/10 pl-6 group">
              <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#0066FF]">
                <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#0066FF] uppercase tracking-widest block">
                  01 / FOUNDATION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FAF9F6]">
                  STRATEGY
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">
                  Rigorous market discovery, positioning models, and commercial architectures that clarify what to build and why.
                </p>
              </div>
            </div>

            {/* Discipline 2: Design */}
            <div className="space-y-6 border-l border-white/10 pl-6 group">
              <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FAF9F6]">
                <Layers className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#0066FF] uppercase tracking-widest block">
                  02 / EXPRESSION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FAF9F6]">
                  DESIGN
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">
                  Bespoke typography, tactile interaction patterns, and kinetic design systems engineered for emotional resonance.
                </p>
              </div>
            </div>

            {/* Discipline 3: Technology */}
            <div className="space-y-6 border-l border-white/10 pl-6 group">
              <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#0066FF]">
                <Cpu className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#0066FF] uppercase tracking-widest block">
                  03 / EXECUTION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FAF9F6]">
                  TECHNOLOGY
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">
                  High-performance modern frameworks, custom shaders, and robust headless architectures with zero tolerance for latency.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Center Statement Banner */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666] uppercase tracking-widest">
            <span className="flex items-center gap-2 text-[#FAF9F6]">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              SYNERGISTIC EXECUTION MODEL
            </span>
            <span>NO SILOS. ZERO HANDOFF FRICTION.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
