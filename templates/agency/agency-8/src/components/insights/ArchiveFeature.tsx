import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ARCHIVE_FEATURE_ARTICLE } from '../../data/insightsData';
import { CursorType } from '../../types';

interface ArchiveFeatureProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const ArchiveFeature: React.FC<ArchiveFeatureProps> = ({
  setCursorType,
  onNavigate,
}) => {
  const article = ARCHIVE_FEATURE_ARTICLE;
  const targetPath = `/insights/${article.slug}`;

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12 sm:mb-16 pb-6 border-b border-[#ffffff10]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
            05 / RETROSPECTIVE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Archive Label */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-widest text-[#0066FF]">
              FROM THE ARCHIVE
            </div>

            <h2
              onClick={() => onNavigate(targetPath)}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              {article.title}
            </h2>

            <p className="font-body text-base sm:text-lg text-[#888888] font-light leading-relaxed max-w-xl">
              {article.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs text-[#888888]">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate(targetPath)}
                onMouseEnter={() => setCursorType('button')}
                onMouseLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-white/[0.03] hover:bg-[#0066FF] text-[#FAF9F6] hover:text-white font-mono text-xs uppercase tracking-widest border border-white/10 hover:border-[#0066FF] transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold">READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual */}
          <div
            onClick={() => onNavigate(targetPath)}
            onMouseEnter={() => setCursorType('project', 'READ ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="lg:col-span-5 h-[340px] sm:h-[420px] overflow-hidden border border-white/15 cursor-pointer relative group"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
              ARCHIVE // 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
