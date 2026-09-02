import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16 md:mb-20',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide uppercase mb-4',
            'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900"
      >
        {highlightedWord ? (
          <>
            {title.split(highlightedWord)[0]}
            <span className="gradient-text-multi">{highlightedWord}</span>
            {title.split(highlightedWord)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
