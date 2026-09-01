import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';

interface FlipCardProps {
  frontTitle: string;
  frontBadge: string;
  frontText: string;
  backTitle: string;
  backDetail: string;
  image?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontTitle,
  frontBadge,
  frontText,
  backTitle,
  backDetail,
  image
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-80 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      data-cursor="flip"
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ease-out ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-paper-surface dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-sm group-hover:shadow-xl group-hover:border-emerald-600/50 transition-all overflow-hidden">
          {image && (
            <img
              src={image}
              alt={frontTitle}
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity"
            />
          )}

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                {frontBadge}
              </span>
              <RotateCw className="w-4 h-4 text-neutral-400 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif-editorial font-bold text-paper-dark dark:text-paper-light mb-2">
              {frontTitle}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3">
              {frontText}
            </p>
          </div>

          <div className="relative z-10 text-[11px] font-mono-tech uppercase tracking-widest text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <span>Tap to flip insight</span> &rarr;
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-forest-950 text-white p-6 flex flex-col justify-between border border-emerald-600/40 shadow-2xl overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-emerald-400">
                DEEP INSIGHT
              </span>
              <RotateCw className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-lg font-serif-editorial font-bold text-white mb-2">
              {backTitle}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {backDetail}
            </p>
          </div>

          <div className="text-[11px] font-mono-tech text-emerald-400/80">
            AGROTECH AI INTELLIGENCE LAB
          </div>
        </div>
      </div>
    </div>
  );
};
