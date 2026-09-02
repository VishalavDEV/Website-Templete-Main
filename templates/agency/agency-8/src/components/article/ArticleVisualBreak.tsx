import React from 'react';
import { motion } from 'motion/react';

interface ArticleVisualBreakProps {
  text?: string;
}

export const ArticleVisualBreak: React.FC<ArticleVisualBreakProps> = ({
  text = 'LESS NOISE. MORE MEANING.',
}) => {
  return (
    <section className="my-24 sm:my-36 -mx-6 sm:-mx-8 lg:-mx-12 xl:-mx-24 relative overflow-hidden">
      <div className="relative h-[320px] sm:h-[420px] md:h-[500px] w-full bg-[#050507] border-y border-white/10 flex items-center justify-center">
        {/* Subtle geometric lines and radial ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0,transparent_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating subtle ambient rings */}
        <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full pointer-events-none animate-pulse" />
        <div className="absolute w-[500px] h-[500px] border border-white/[0.03] rounded-full pointer-events-none" />

        {/* Dramatic Typography Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6"
        >
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#0066FF] block mb-4">
            ETHOS // CORE AXIOM
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[0.98]">
            {text}
          </h2>

          <div className="w-12 h-[2px] bg-[#0066FF] mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
};
