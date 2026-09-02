import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { CursorType } from '../types';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
  setCursorType,
}) => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative px-6 sm:px-12 py-24 bg-[#080808]">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none radial-glow opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-8xl sm:text-9xl md:text-[12rem] text-[#0066FF]/20 select-none tracking-tighter"
        >
          404
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight uppercase text-[#FAF9F6] -mt-12 sm:-mt-16"
        >
          PAGE NOT FOUND
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 text-[#888888] font-sans text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
        >
          The coordinates you are navigating to do not exist or have been relocated to another dimension in our studio archive.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => onNavigate('/')}
            onMouseEnter={() => setCursorType('button', 'HOME ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all shadow-lg shadow-[#0066FF]/30 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/work')}
            onMouseEnter={() => setCursorType('button', 'WORK ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-[#FAF9F6] font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
