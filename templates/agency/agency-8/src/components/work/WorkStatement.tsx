import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface WorkStatementProps {
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType) => void;
}

export const WorkStatement: React.FC<WorkStatementProps> = ({ onNavigate, setCursorType }) => {
  return (
    <section className="py-28 sm:py-40 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Eyebrow */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                BEYOND THE IMAGE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FAF9F6] tracking-tight uppercase leading-[0.95]"
            >
              EVERY PROJECT<br />
              STARTS WITH<br />
              <span className="text-[#0066FF]">A PROBLEM.</span>
            </motion.h2>
          </div>

          {/* Right Column: Statement Paragraph & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-8"
          >
            <p className="text-base sm:text-lg text-[#888888] leading-relaxed font-normal">
              We work from strategy through execution, creating experiences that are beautiful because they are meaningful. Every visual, interaction, and line of code answers a foundational commercial ambition.
            </p>

            <div>
              <button
                id="work-statement-approach-cta"
                onClick={() => onNavigate('/services')}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-[#0066FF] hover:text-white transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>OUR APPROACH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
