import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ badge, title, description, center = false, className = '' }) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${center ? 'text-center items-center' : ''} flex flex-col w-full max-w-full overflow-hidden ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4 w-fit max-w-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="truncate">{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(1.6rem,6.8vw,3.75rem)] font-extrabold font-syne tracking-tight text-slate-100 max-w-3xl leading-[1.12] sm:leading-tight break-words"
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed break-words"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
