import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { BENTO_ACHIEVEMENTS, CATEGORIES_META } from '../../data/fashionData';
import DopamineBadge from '../common/DopamineBadge';
import { Heart, ArrowUpRight, Trophy, Zap, Sparkles, X } from 'lucide-react';
import clsx from 'clsx';

export function AsymmetricalBentoGrid() {
  const { selectedCategory, setSelectedCategory, isSaved, toggleSaveArticle, triggerDopamineConfetti } = useMagazine();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const currentCategoryMeta = CATEGORIES_META[selectedCategory] || CATEGORIES_META['all'];

  const filteredItems = selectedCategory === 'all'
    ? BENTO_ACHIEVEMENTS
    : BENTO_ACHIEVEMENTS.filter((item) => item.category === selectedCategory);

  const displayItems = filteredItems.length > 0 ? filteredItems : BENTO_ACHIEVEMENTS;

  const bentoCardSpring = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 26,
        mass: 0.8,
        delay: (index % 6) * 0.05
      }
    })
  };

  return (
    <section id="category-archive-feed" className="space-y-6 sm:space-y-8 my-10 sm:my-16 scroll-mt-24 w-full">
      {/* Dynamic Category Manifesto Showcase Banner */}
      <div
        className={clsx(
          "p-5 sm:p-8 border-3.5 border-[#0A0A0E] shadow-[6px_6px_0px_#0A0A0E] sm:shadow-[8px_8px_0px_#0A0A0E] transition-colors duration-300 relative overflow-hidden",
          selectedCategory === 'all' ? "bg-white" : ""
        )}
        style={{
          backgroundColor: selectedCategory !== 'all' ? currentCategoryMeta.bg : '#FFFFFF'
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="w-3 h-3 inline-block border-2 border-[#0A0A0E]"
                style={{ backgroundColor: currentCategoryMeta.color }}
              />
              <span
                className="font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 border border-[#0A0A0E]"
                style={{
                  backgroundColor: currentCategoryMeta.color,
                  color: selectedCategory === 'bio-materials' || selectedCategory === 'y2k-archive' ? '#0A0A0E' : '#FFFFFF'
                }}
              >
                CATEGORY ARCHIVE // {currentCategoryMeta.name}
              </span>
              <DopamineBadge variant={currentCategoryMeta.badgeVariant} size="sm">
                {currentCategoryMeta.sticker}
              </DopamineBadge>
            </div>

            <h2 className="font-display-serif text-fluid-h1 font-black text-[#0A0A0E] tracking-tight uppercase leading-[0.95]">
              {selectedCategory === 'all' ? (
                <>LATEST <span className="font-display-y2k text-[#0047FF]">ACHIEVEMENTS</span> & BREAKTHROUGHS</>
              ) : (
                <span style={{ color: currentCategoryMeta.color }}>{currentCategoryMeta.name}</span>
              )}
            </h2>

            <p className="font-brutal-body text-xs sm:text-sm text-[#2C2D35] font-semibold leading-relaxed">
              {currentCategoryMeta.description}
            </p>
          </div>

          {/* Action Stats & Clear Filter Button */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="bg-[#0A0A0E] text-white px-3 py-1.5 sm:px-3.5 sm:py-2 border-2 border-[#0A0A0E] font-mono text-xs font-black shadow-[3px_3px_0px_#FF007A]">
              {displayItems.length} DROPS ACTIVE
            </div>

            {selectedCategory !== 'all' && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  triggerDopamineConfetti();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white hover:bg-[#FFEBF3] text-[#0A0A0E] font-heading font-black text-xs uppercase border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] cursor-pointer transition-all active:scale-95"
              >
                <X className="w-3.5 h-3.5 stroke-[3]" />
                <span>SHOW ALL DROPS</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tightly Composed Asymmetrical Bento Grid */}
      <motion.div
        key={selectedCategory}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-start"
      >
        {displayItems.map((article, idx) => {
          const isBookmarked = isSaved(article.id);
          const isHovered = hoveredCardId === article.id;

          // Responsive grid column spans with snug heights
          const colSpanClass = {
            massive: 'md:col-span-2 lg:col-span-8',
            tall: 'md:col-span-1 lg:col-span-4',
            wide: 'md:col-span-2 lg:col-span-7',
            compact: 'md:col-span-1 lg:col-span-5'
          }[article.layoutType] || 'md:col-span-1 lg:col-span-4';

          // Proportional image heights tailored to layout type
          const imageHeightClass = {
            massive: 'h-60 sm:h-72 lg:h-80',
            tall: 'h-64 sm:h-72 lg:h-80',
            wide: 'h-52 sm:h-60',
            compact: 'h-48 sm:h-56'
          }[article.layoutType] || 'h-52 sm:h-60';

          return (
            <motion.article
              key={article.id}
              custom={idx}
              variants={bentoCardSpring}
              onMouseEnter={() => setHoveredCardId(article.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className={clsx(
                'group relative bg-white border-3.5 border-[#0A0A0E] flex flex-col overflow-hidden transition-all duration-300 select-none cursor-pointer',
                colSpanClass,
                isHovered
                  ? '-translate-x-1 -translate-y-1'
                  : 'translate-x-0 translate-y-0 shadow-[5px_5px_0px_#0A0A0E] sm:shadow-[6px_6px_0px_#0A0A0E]'
              )}
              style={{
                boxShadow: isHovered
                  ? `10px 10px 0px ${article.shadowColor || '#FF007A'}`
                  : undefined
              }}
            >
              {/* MAXIMALIST STICKER POP-OUT (Reveals on Hover) */}
              <div className="absolute top-3 right-3 z-30 pointer-events-none transition-all duration-300 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rotate-12 group-hover:rotate-6">
                <span className="bg-[#FFE600] text-[#0A0A0E] font-mono text-xs font-black px-2.5 py-1 border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] uppercase tracking-wider block">
                  {article.hiddenSticker || 'VIRAL DROP 🔥'}
                </span>
              </div>

              {/* CARD LINK & CONTENT */}
              <Link to={`/article/${article.slug}`} className="block w-full flex flex-col">
                {/* Image Media Container */}
                <div className={clsx("relative w-full overflow-hidden border-b-3 border-[#0A0A0E] bg-[#FAFAFD]", imageHeightClass)}>
                  <motion.img
                    layoutId={`article-image-${article.slug}`}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/90 via-[#0A0A0E]/20 to-transparent group-hover:from-[#0A0A0E]/95 transition-colors duration-300" />

                  {/* Badges Bar */}
                  <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <motion.div layoutId={`article-badge-${article.slug}`}>
                      <DopamineBadge variant={article.badgeVariant} size="sm">
                        {article.tag}
                      </DopamineBadge>
                    </motion.div>
                    <span className="bg-[#0A0A0E] text-white font-mono text-[10px] font-black px-2 py-0.5 border border-white">
                      {article.publishedDate}
                    </span>
                  </div>

                  {/* Bottom Media Metadata */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#FF007A] text-white font-mono text-[11px] font-black px-2 py-0.5 border border-white">
                        ★ {article.score}
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-neutral-200">
                        {article.readTime}
                      </span>
                    </div>
                    
                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSaveArticle(article.id);
                      }}
                      className={clsx(
                        'p-1.5 sm:p-2 border-2 border-[#0A0A0E] transition-transform active:scale-90 cursor-pointer',
                        isBookmarked
                          ? 'bg-[#FF007A] text-white shadow-[2px_2px_0px_#0A0A0E]'
                          : 'bg-white text-[#0A0A0E] hover:bg-[#FFEBF3]'
                      )}
                      title="Save to Grails"
                    >
                      <Heart className={clsx("w-3.5 h-3.5", isBookmarked && "fill-current")} />
                    </button>
                  </div>
                </div>

                {/* Snug Editorial Content Container */}
                <div className="p-4 sm:p-5 bg-white space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase text-[#626470] truncate">
                      {article.kicker}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FF007A] bg-[#FFEBF3] px-2 py-0.5 border border-[#FF007A] shrink-0">
                      {article.categoryName}
                    </span>
                  </div>

                  <motion.h3
                    layoutId={`article-title-${article.slug}`}
                    className={clsx(
                      'font-display-serif font-black text-[#0A0A0E] tracking-tight group-hover:text-[#FF007A] transition-colors leading-[1.12]',
                      article.layoutType === 'massive' ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                    )}
                  >
                    {article.title}
                  </motion.h3>

                  <p className="font-body text-xs sm:text-sm text-[#2C2D35] leading-relaxed line-clamp-2">
                    {article.subtitle}
                  </p>

                  {/* Designer Spec Ribbon */}
                  <div className="pt-2.5 border-t-2 border-[#0A0A0E] flex items-center justify-between text-xs font-mono">
                    <div className="truncate pr-2">
                      <span className="text-[#626470] font-bold block text-[9px] uppercase">Designer</span>
                      <span className="font-black text-[#0A0A0E] truncate block text-[11px] sm:text-xs">{article.designer}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-[#FFFBE6] group-hover:bg-[#FFE600] text-[#0A0A0E] px-2.5 py-1 sm:px-3 sm:py-1.5 border-2 border-[#0A0A0E] font-heading font-black text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors shrink-0">
                      <span>CITATION</span>
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default AsymmetricalBentoGrid;
