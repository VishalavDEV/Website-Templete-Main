import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Article, CursorType } from '../../types';

interface ArticleItemProps {
  article: Article;
  index: number;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ArticleItem: React.FC<ArticleItemProps> = ({
  article,
  index,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
  onNavigate,
  setCursorType,
}) => {
  const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
  const targetPath = `/insights/${article.slug}`;

  const isMuted = isAnyHovered && !isHovered;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isMuted ? 0.25 : 1,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        onHoverStart();
        setCursorType('project', 'READ ↗');
      }}
      onMouseLeave={() => {
        onHoverEnd();
        setCursorType('default');
      }}
      onClick={() => onNavigate(targetPath)}
      className="group relative border-b border-[#ffffff12] py-8 sm:py-12 lg:py-16 transition-all duration-300 cursor-pointer select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Number & Category Column */}
        <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-4">
          <span className="font-mono text-xs sm:text-sm text-[#555555] group-hover:text-[#FAF9F6] transition-colors">
            [{formattedIndex}]
          </span>

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066FF] font-semibold">
            {article.category}
          </span>
        </div>

        {/* Title & Description Column */}
        <div className="lg:col-span-6 space-y-3">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#FAF9F6] uppercase tracking-tight leading-[1.08] group-hover:text-[#0066FF] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300">
            {article.title}
          </h3>

          <p className="font-body text-sm sm:text-base text-[#888888] font-light leading-relaxed max-w-xl group-hover:text-[#AAAAAA] transition-colors">
            {article.description}
          </p>

          {/* Mobile inline thumbnail */}
          <div className="block lg:hidden pt-4">
            <div className="w-full h-44 overflow-hidden border border-white/10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Date, Read time, Arrow */}
        <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-2 font-mono text-xs text-[#888888]">
          <div className="space-y-1 text-left lg:text-right">
            <div>{article.date}</div>
            <div className="text-[#666666] group-hover:text-white/60 transition-colors">
              {article.readTime}
            </div>
          </div>

          <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#0066FF] group-hover:bg-[#0066FF] flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};
