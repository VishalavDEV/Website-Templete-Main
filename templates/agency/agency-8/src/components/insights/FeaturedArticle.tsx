import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FEATURED_ARTICLE } from '../../data/insightsData';
import { CursorType } from '../../types';

interface FeaturedArticleProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  setCursorType,
  onNavigate,
}) => {
  const article = FEATURED_ARTICLE;
  const targetPath = `/insights/${article.slug}`;

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#ffffff10]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              01 / FEATURED PERSPECTIVE
            </span>
          </div>

          <span className="font-mono text-xs text-[#0066FF] uppercase tracking-widest hidden sm:inline flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            COVER STORY
          </span>
        </div>

        {/* The Dominant Magazine Layout: Large Image + Large Typography + Metadata (NOT A CARD) */}
        <div className="space-y-12 lg:space-y-16">
          {/* 1. Large Cinematic Editorial Banner */}
          <div
            onClick={() => onNavigate(targetPath)}
            onMouseEnter={() => setCursorType('project', 'READ ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="group relative w-full h-[360px] sm:h-[480px] lg:h-[580px] overflow-hidden cursor-pointer border border-[#ffffff15]"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
            />
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#0066FF]/[0.06] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner Coordinates Badge */}
            <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
              EDITORIAL NO. 01 // 2026
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-widest text-[#0066FF] bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-[#0066FF]/30 flex items-center gap-2">
              <span>EXPLORE PIECE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* 2. Large Typography + Metadata + Action (Magazine Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Category & Metadata column */}
            <div className="lg:col-span-3 space-y-4 font-mono text-xs border-l-2 border-[#0066FF] pl-4">
              <div className="text-[#0066FF] font-bold uppercase tracking-[0.2em]">
                {article.category}
              </div>
              <div className="text-[#888888] uppercase tracking-widest space-y-1">
                <div>{article.date}</div>
                <div>{article.readTime}</div>
                <div className="text-white/60 pt-1">By {article.author}</div>
              </div>
            </div>

            {/* Middle Main Headline & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h2
                onClick={() => onNavigate(targetPath)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] hover:text-[#0066FF] transition-colors cursor-pointer"
              >
                {article.title}
              </h2>

              <p className="font-body text-base sm:text-lg text-[#888888] font-light leading-relaxed">
                {article.description}
              </p>
            </div>

            {/* Right Action Trigger */}
            <div className="lg:col-span-3 lg:flex lg:justify-end pt-2">
              <button
                onClick={() => onNavigate(targetPath)}
                onMouseEnter={() => setCursorType('button')}
                onMouseLeave={() => setCursorType('default')}
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-4 bg-white/[0.03] hover:bg-[#0066FF] text-[#FAF9F6] hover:text-white font-mono text-xs uppercase tracking-widest border border-white/10 hover:border-[#0066FF] transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold">READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
