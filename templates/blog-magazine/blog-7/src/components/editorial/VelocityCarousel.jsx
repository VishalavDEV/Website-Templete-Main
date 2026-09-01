import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';
import { ArrowRight, ArrowLeft, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function VelocityCarousel({ essays = [] }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Track scroll velocity for momentum skew
  const { skewX } = useScrollVelocity(containerRef, 5);

  const displayEssays = essays.length > 0 ? essays : [];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scrollBy = (offset) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="my-16 w-full">
      {/* Container Box with Warm Paper Frosted Glass */}
      <div className="rounded-3xl glass-paper-frosted p-6 sm:p-10 relative overflow-hidden border border-[#E5E2DA]">
        {/* Subtle Background Outline Accent */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none whitespace-nowrap select-none z-0 opacity-[0.04]">
          <span
            className="font-serif font-black text-[12vw] uppercase text-[#1A1917] tracking-tighter block leading-none"
          >
            DISPATCHES &bull; OBSERVER
          </span>
        </div>

        {/* Header Bar with Controls */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E2DA] pb-5 mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8A5A36] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A5A36]">
                Curated Visual Monographs & Essays
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1917] tracking-tight">
              Critical Inquiries & Field Dispatches
            </h3>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scrollBy(-380)}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border transition-all ${
                canScrollLeft
                  ? 'border-[#1A1917] text-[#1A1917] hover:bg-[#1A1917] hover:text-white cursor-pointer shadow-xs'
                  : 'border-[#D1CDC4] text-[#A1A19A] cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous essays"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(380)}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border transition-all ${
                canScrollRight
                  ? 'border-[#1A1917] text-[#1A1917] hover:bg-[#1A1917] hover:text-white cursor-pointer shadow-xs'
                  : 'border-[#D1CDC4] text-[#A1A19A] cursor-not-allowed opacity-50'
              }`}
              aria-label="Next essays"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Rail */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="relative z-10 flex gap-6 sm:gap-8 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {displayEssays.map((essay, idx) => (
            <motion.div
              key={essay.id || idx}
              style={{
                skewX: shouldReduceMotion ? 0 : skewX,
              }}
              className="w-[300px] sm:w-[360px] md:w-[380px] shrink-0 snap-start bg-white/95 rounded-2xl p-6 sm:p-7 border border-[#E5E2DA] shadow-xs flex flex-col justify-between space-y-5 group hover:shadow-md transition-shadow"
            >
              {/* Category & Index */}
              <div className="flex items-center justify-between text-xs font-mono text-[#76736A]">
                <span className="text-[#8A5A36] font-bold uppercase tracking-wider">
                  {essay.category || 'ESSAY'}
                </span>
                <span>0{idx + 1}</span>
              </div>

              {/* Cover Image */}
              {essay.coverImage && (
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#EAE7DF]">
                  <img
                    src={essay.coverImage}
                    alt={essay.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-[#FAF9F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[0.6875rem] font-mono text-[#1A1917]">
                    {essay.readTime || '5 min read'}
                  </div>
                </div>
              )}

              {/* Title & Excerpt */}
              <div className="space-y-2 flex-1">
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1917] group-hover:text-[#8A5A36] transition-colors leading-snug line-clamp-2">
                  {essay.title}
                </h4>
                <p className="text-xs text-[#5A574E] leading-relaxed line-clamp-2">
                  {essay.subtitle || essay.excerpt}
                </p>
              </div>

              {/* Bottom Read Link */}
              <Link
                to={`/article/${essay.slug}`}
                className="flex items-center justify-between pt-4 border-t border-[#EAE7DF] text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917] group-hover:text-[#8A5A36] transition-colors"
              >
                <span>Read Monograph</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Info Strip */}
        <div className="relative z-10 flex items-center justify-between pt-6 mt-4 border-t border-[#E5E2DA] text-xs font-mono text-[#76736A]">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#8A5A36]" />
            <span>Swipe or click arrows to explore monographs</span>
          </div>
          <span className="font-bold text-[#1A1917]">Total {displayEssays.length} Selected</span>
        </div>
      </div>
    </section>
  );
}
