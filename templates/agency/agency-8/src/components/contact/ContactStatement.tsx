import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface ContactStatementProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ContactStatement: React.FC<ContactStatementProps> = ({ setCursorType }) => {
  return (
    <section className="py-32 sm:py-44 bg-[#080808] border-t border-[#ffffff15] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.35em] text-[#0066FF]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>STUDIO PHILOSOPHY</span>
        </motion.div>

        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.9]"
          >
            GOOD THINGS <br />
            START WITH <br />
            <span className="text-[#0066FF]">A CONVERSATION.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-[#888888] max-w-xl mx-auto font-normal"
        >
          No pressure. No rigid sales decks. Just honest conversations about craft, ambition, and digital potential.
        </motion.p>
      </div>
    </section>
  );
};
