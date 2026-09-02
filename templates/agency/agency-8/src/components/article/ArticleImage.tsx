import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface ArticleImageProps {
  url: string;
  caption: string;
  alt: string;
  figureNumber?: string;
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenModal?: (url: string) => void;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  url,
  caption,
  alt,
  figureNumber = 'FIG. 02',
  setCursorType,
  onOpenModal,
}) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="my-16 sm:my-24 group"
    >
      <div
        onClick={() => onOpenModal && onOpenModal(url)}
        onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
        onMouseLeave={() => setCursorType('default')}
        className="w-full h-[360px] sm:h-[480px] md:h-[560px] overflow-hidden border border-white/15 relative bg-[#0e0e12] cursor-pointer"
      >
        <img
          src={url}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
      </div>

      <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#FAF9F6] font-medium">
          {caption}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] shrink-0">
          {figureNumber} // MONOGRAPH
        </span>
      </figcaption>
    </motion.figure>
  );
};
