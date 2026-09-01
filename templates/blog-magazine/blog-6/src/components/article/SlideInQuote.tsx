import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export interface SlideInQuoteProps {
  quote: string;
  author: string;
  role?: string;
  theme?: 'blue' | 'violet' | 'coral' | 'lime' | 'amber';
}

const themeBorder = {
  blue: 'border-l-blue-600 bg-blue-50/50',
  violet: 'border-l-purple-600 bg-purple-50/50',
  coral: 'border-l-rose-600 bg-rose-50/50',
  lime: 'border-l-emerald-600 bg-emerald-50/50',
  amber: 'border-l-amber-600 bg-amber-50/50',
};

export const SlideInQuote: React.FC<SlideInQuoteProps> = memo(({
  quote,
  author,
  role = 'Principal Theorist & Contributing Author',
  theme = 'blue',
}) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 140,
        damping: 24,
        mass: 0.9,
      }}
      className={`my-12 p-6 sm:p-10 rounded-3xl border-l-[6px] ${themeBorder[theme]} relative overflow-hidden backdrop-blur-md border-y border-r border-slate-200/60 shadow-sm`}
    >
      {/* Top watermark quote icon */}
      <div className="absolute top-4 right-6 text-slate-200/60 pointer-events-none">
        <Quote className="w-16 h-16 opacity-40" />
      </div>

      <div className="relative z-10">
        <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug tracking-tight mb-6">
          "{quote}"
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-display font-bold text-xs shadow-xs">
            {author.charAt(0)}
          </div>
          <div className="flex flex-col">
            <cite className="font-display font-bold text-sm text-slate-900 not-italic">
              {author}
            </cite>
            <span className="text-[11px] font-mono text-slate-500">
              {role}
            </span>
          </div>
        </div>
      </div>
    </motion.blockquote>
  );
});

SlideInQuote.displayName = 'SlideInQuote';
