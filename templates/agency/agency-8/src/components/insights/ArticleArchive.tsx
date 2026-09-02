import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { Article, CursorType } from '../../types';
import { ArticleItem } from './ArticleItem';

interface ArticleArchiveProps {
  articles: Article[];
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const ArticleArchive: React.FC<ArticleArchiveProps> = ({
  articles,
  setCursorType,
  onNavigate,
}) => {
  const [hoveredArticle, setHoveredArticle] = useState<Article | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse tracking for floating preview image
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 24, stiffness: 260, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="article-archive" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto relative">
        {/* Floating Desktop Article Preview Image */}
        {!isTouchDevice && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-40 hidden lg:block"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: '30px',
              translateY: '-50%',
            }}
          >
            <AnimatePresence mode="wait">
              {hoveredArticle && (
                <motion.div
                  key={hoveredArticle.id}
                  initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-72 h-44 overflow-hidden border border-white/20 bg-black shadow-2xl shadow-black/80"
                >
                  <img
                    src={hoveredArticle.image}
                    alt={hoveredArticle.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[9px] uppercase tracking-widest text-white/90 flex justify-between">
                    <span className="text-[#0066FF] font-bold">{hoveredArticle.category}</span>
                    <span>{hoveredArticle.readTime}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-[#ffffff10]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              02 / CURATED WRITINGS
            </span>
          </div>

          <span className="font-mono text-xs text-[#888888]">
            SHOWING {articles.length < 10 ? `0${articles.length}` : articles.length} PIECES
          </span>
        </div>

        {/* The Large Editorial List */}
        <div className="divide-y divide-transparent">
          <AnimatePresence mode="popLayout">
            {articles.map((article, index) => (
              <ArticleItem
                key={article.id}
                article={article}
                index={index}
                isHovered={hoveredArticle?.id === article.id}
                isAnyHovered={hoveredArticle !== null}
                onHoverStart={() => setHoveredArticle(article)}
                onHoverEnd={() => setHoveredArticle(null)}
                onNavigate={onNavigate}
                setCursorType={setCursorType}
              />
            ))}
          </AnimatePresence>

          {articles.length === 0 && (
            <div className="py-24 text-center space-y-4">
              <p className="font-display text-2xl uppercase tracking-widest text-[#888888]">
                NO ESSAYS FOUND FOR THIS CATEGORY
              </p>
              <p className="font-mono text-xs text-[#555555]">
                Please select another editorial filter above.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
