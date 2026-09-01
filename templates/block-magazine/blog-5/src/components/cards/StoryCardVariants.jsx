import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionTiltCard } from './MotionTiltCard';
import { Sparkles, ArrowRight, Bookmark, Clock, ArrowUpRight } from 'lucide-react';
import { useZMag } from '../../context/ZMagContext';
import { Link } from 'react-router-dom';

/**
 * 1. Large Feature Card Variant
 */
export function LargeFeatureCard({ article, className = '' }) {
  const { toggleBookmark, bookmarks } = useZMag();
  const isSaved = bookmarks.includes(article.id);

  return (
    <MotionTiltCard tiltStrength={10} className={`w-full ${className}`}>
      {({ innerImageX, innerImageY, isHovered }) => (
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 bg-white/90 border border-white/80 overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Box with Opposite Direction Parallax */}
            <Link
              to={`/article/${article.id}`}
              className="lg:col-span-6 relative overflow-hidden rounded-2xl aspect-[16/11] bg-[#F3F4F6] block"
            >
              <motion.img
                style={{ x: innerImageX, y: innerImageY, scale: 1.08 }}
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />

              {/* Sliding Hover Pill Button */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg"
                  >
                    <span className="font-heading text-xs font-bold text-[#111827]">
                      Explore Full Monograph
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#0055FF] text-white flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* Story Text Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280]">
                <Link
                  to={`/category/${article.categorySlug || 'future-tech'}`}
                  className="px-3 py-1 rounded-full bg-[#EBF4FF] text-[#0055FF] font-bold uppercase tracking-wider hover:bg-[#0055FF] hover:text-white transition-colors"
                >
                  {article.category}
                </Link>
                <span>{article.readTime}</span>
              </div>

              <Link to={`/article/${article.id}`} className="block group/title">
                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#111827] group-hover/title:text-[#0055FF] transition-colors leading-tight">
                  {article.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed line-clamp-3">
                {article.subtitle || article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#F3F4F6] text-xs">
                <span className="font-heading font-bold text-[#111827]">
                  By {article.author}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleBookmark(article.id);
                  }}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    isSaved
                      ? 'bg-[#0055FF] text-white border-[#0055FF]'
                      : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#0055FF]'
                  }`}
                  title={isSaved ? 'Saved' : 'Save article'}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MotionTiltCard>
  );
}

/**
 * 2. Medium Grid Card Variant (3-Column Layout)
 */
export function MediumGridCard({ article, className = '' }) {
  const { toggleBookmark, bookmarks } = useZMag();
  const isSaved = bookmarks.includes(article.id);

  return (
    <MotionTiltCard tiltStrength={15} className={`w-full ${className}`}>
      {({ innerImageX, innerImageY, isHovered }) => (
        <div className="glass-card rounded-2xl p-5 bg-white/90 border border-white/80 overflow-hidden flex flex-col justify-between h-full group">
          {/* Image Container with Inner Parallax */}
          <Link
            to={`/article/${article.id}`}
            className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#F3F4F6] mb-4 block"
          >
            <motion.img
              style={{ x: innerImageX, y: innerImageY, scale: 1.08 }}
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />

            {/* Sliding Pill on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 280 }}
                  className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-between"
                >
                  <span className="font-heading text-[0.6875rem] font-bold text-[#111827]">
                    Read Story
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0055FF]" />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Typography */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between text-[0.6875rem] font-mono text-[#6B7280]">
              <Link
                to={`/category/${article.categorySlug || 'future-tech'}`}
                className="text-[#0055FF] font-bold uppercase tracking-wider hover:underline"
              >
                {article.category}
              </Link>
              <span>{article.readTime}</span>
            </div>

            <Link to={`/article/${article.id}`} className="block group/title">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111827] group-hover/title:text-[#0055FF] transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>

            {article.excerpt && (
              <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6] mt-4 text-xs">
            <span className="font-mono text-[0.6875rem] text-[#6B7280]">
              By {article.author}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleBookmark(article.id);
              }}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-[#0055FF] text-white border-[#0055FF]'
                  : 'bg-white text-[#9CA3AF] border-[#E5E7EB] hover:text-[#0055FF]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      )}
    </MotionTiltCard>
  );
}

/**
 * 3. Compact List Card Variant
 */
export function CompactListCard({ article, className = '' }) {
  return (
    <MotionTiltCard tiltStrength={8} className={`w-full ${className}`}>
      {({ isHovered }) => (
        <Link
          to={`/article/${article.id}`}
          className="glass-card rounded-2xl p-4 bg-white/90 border border-white/80 flex items-center gap-4 group block transition-shadow hover:shadow-md"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#F3F4F6]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-[0.65rem] font-mono text-[#6B7280] uppercase tracking-wider mb-1">
              <span className="text-[#0055FF] font-bold">{article.category}</span>
              <span>&bull;</span>
              <span>{article.readTime}</span>
            </div>

            <h4 className="font-heading font-bold text-sm sm:text-base text-[#111827] group-hover:text-[#0055FF] transition-colors truncate">
              {article.title}
            </h4>

            <span className="text-[0.6875rem] text-[#6B7280] font-mono block mt-1">
              By {article.author}
            </span>
          </div>

          <div className="shrink-0 p-2 text-[#9CA3AF] group-hover:text-[#0055FF] group-hover:translate-x-1 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Link>
      )}
    </MotionTiltCard>
  );
}
