import React from 'react';
import { motion } from 'motion/react';
import { Article } from '../../types';
import { CursorType } from '../../types';

interface ArticleHeroProps {
  article: Article;
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenImageModal?: (imageUrl: string) => void;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({
  article,
  setCursorType,
  onOpenImageModal,
}) => {
  // Split title into words or lines for dramatic editorial typography
  const titleWords = article.title.split(' ');

  return (
    <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0066FF]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Category & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
            {article.category.toUpperCase()} / INSIGHTS
          </span>
        </motion.div>

        {/* Large Headline with line-by-line editorial reveal */}
        <div className="overflow-hidden mb-8 sm:mb-12">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] uppercase tracking-tight leading-[0.95] max-w-5xl"
          >
            {article.title}
          </motion.h1>
        </div>

        {/* Supporting introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="font-body text-xl sm:text-2xl md:text-3xl text-[#CCCCCC] font-light leading-relaxed max-w-3xl mb-12 sm:mb-16"
        >
          {article.description}
        </motion.p>

        {/* Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white/10 font-mono text-xs text-[#888888]"
        >
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
              DATE
            </span>
            <span className="text-[#FAF9F6] uppercase">{article.date}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
              READ TIME
            </span>
            <span className="text-[#FAF9F6] uppercase">{article.readTime}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
              AUTHOR
            </span>
            <span className="text-[#0066FF] uppercase font-semibold">
              {article.author.toUpperCase()}
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
              DISCIPLINE
            </span>
            <span className="text-[#FAF9F6] uppercase">{article.category}</span>
          </div>
        </motion.div>
      </div>

      {/* Large Hero Image with clip reveal & parallax capability */}
      <motion.div
        initial={{ clipPath: 'inset(10% 0% 10% 0%)', opacity: 0, scale: 0.98 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        className="max-w-7xl mx-auto mt-12 sm:mt-16 relative group"
        onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
        onMouseLeave={() => setCursorType('default')}
        onClick={() => onOpenImageModal && onOpenImageModal(article.image)}
      >
        <div className="h-[400px] sm:h-[560px] lg:h-[700px] w-full overflow-hidden border border-white/15 relative bg-[#0e0e12]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom image banner */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              FIG. 01 // EDITORIAL ESSAY ARCHIVE
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF]">
              HIGH RESOLUTION ↗
            </span>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
