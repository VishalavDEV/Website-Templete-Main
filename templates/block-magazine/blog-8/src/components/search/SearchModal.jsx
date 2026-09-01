import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { HERO_ACHIEVEMENT, BENTO_ACHIEVEMENTS, TRENDING_LOOKS } from '../../data/fashionData';
import DopamineBadge from '../common/DopamineBadge';
import { Search, X, ArrowUpRight, Sparkles, Flame, Trophy, Tag, Eye } from 'lucide-react';
import clsx from 'clsx';

export function SearchModal({ isOpen, onClose }) {
  const { triggerDopamineConfetti } = useMagazine();
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const inputRef = useRef(null);

  // Combine all searchable items
  const allSearchableItems = [
    HERO_ACHIEVEMENT,
    ...BENTO_ACHIEVEMENTS,
    ...TRENDING_LOOKS.map((item) => ({
      id: item.id,
      slug: item.slug || 'hero-bio-luminescent-couture',
      title: item.title,
      subtitle: `${item.designer} // ${item.location}`,
      designer: item.designer,
      category: 'trending',
      categoryName: 'Trending Look',
      tag: item.tag,
      score: item.rating,
      image: item.image,
      badgeVariant: item.badgeVariant,
      accentColor: item.accentColor
    }))
  ];

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Global Keyboard shortcuts: ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter matching results
  const filteredResults = allSearchableItems.filter((item) => {
    const matchesCategory = selectedFilter === 'all' || item.category === selectedFilter;
    if (!query.trim()) return matchesCategory;
    const q = query.toLowerCase();
    const matchesText = 
      item.title?.toLowerCase().includes(q) ||
      item.designer?.toLowerCase().includes(q) ||
      item.subtitle?.toLowerCase().includes(q) ||
      item.categoryName?.toLowerCase().includes(q) ||
      item.tag?.toLowerCase().includes(q);
    return matchesCategory && matchesText;
  });

  const searchContainerVariants = {
    closed: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 26
      }
    }
  };

  const resultsStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const itemPopVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 25,
      rotate: -1
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 480,
        damping: 20,
        mass: 0.8
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0A0A0E]/70 backdrop-blur-md flex flex-col p-3 sm:p-6 lg:p-8 overflow-y-auto selection:bg-[#FF007A] selection:text-white"
        >
          {/* Main Modal Shell */}
          <motion.div
            variants={searchContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full max-w-6xl mx-auto bg-[#FFFDF8] border-4 border-[#0A0A0E] shadow-[12px_12px_0px_#0A0A0E] flex flex-col flex-1 my-auto overflow-hidden pattern-grid-light"
          >
            {/* Top Bar inside Search Modal */}
            <div className="border-b-3 border-[#0A0A0E] bg-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-y2k font-black text-xl sm:text-2xl text-[#0A0A0E]">
                  XTRA<span className="text-[#FF007A]">.</span>SEARCH
                </span>
                <DopamineBadge variant="lime" size="sm">REAL-TIME INDEX</DopamineBadge>
                <span className="hidden sm:inline font-mono text-xs text-[#626470]">
                  [ESC TO CLOSE]
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 bg-[#FF007A] text-white border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:bg-[#E6006E] transition-all cursor-pointer font-heading font-black text-xs flex items-center gap-1"
                aria-label="Close search"
              >
                <X className="w-4 h-4 stroke-[3]" />
                <span className="hidden sm:inline">CLOSE</span>
              </button>
            </div>

            {/* -------------------------------------------------------------
                HEROIC BRUTALIST INPUT FIELD (APPROX. 40-50% VISUAL IMPACT)
                ------------------------------------------------------------- */}
            <div className="p-6 sm:p-10 border-b-4 border-[#0A0A0E] bg-white space-y-4">
              <div className="relative group">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="TYPE TO SEARCH (E.G. 'BIO-SILK', 'CHROME', 'MILAN')..."
                  className="w-full min-h-[140px] sm:min-h-[180px] p-6 sm:p-8 font-y2k font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#0A0A0E] placeholder:text-[#626470]/40 bg-[#FFFDF8] border-4 border-[#0A0A0E] shadow-[6px_6px_0px_#0A0A0E] focus:bg-[#FFEBF3] focus:shadow-[10px_10px_0px_#FF007A] focus:outline-none transition-all duration-200"
                />

                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute top-6 right-6 p-2 bg-[#0A0A0E] text-white font-mono text-xs font-black border border-white hover:bg-[#FF007A] transition-colors cursor-pointer"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              {/* Quick Tag Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-xs font-bold text-[#626470] mr-2">
                  HOT TAGS:
                </span>
                {[
                  { label: 'ALL ARCHIVE', val: 'all' },
                  { label: 'BIO & ECO TECH', val: 'bio-materials' },
                  { label: 'DIGITAL COUTURE', val: 'digital-couture' },
                  { label: 'RUNWAY REBELS', val: 'runway-rebel' },
                  { label: 'Y2K ARCHIVE', val: 'y2k-archive' },
                  { label: 'STREET GRAILS', val: 'streetwear-grails' }
                ].map((tag) => (
                  <button
                    key={tag.val}
                    onClick={() => setSelectedFilter(tag.val)}
                    className={clsx(
                      "px-3 py-1 font-mono text-xs font-black border-2 border-[#0A0A0E] transition-all cursor-pointer",
                      selectedFilter === tag.val
                        ? "bg-[#FFE600] text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] -translate-y-0.5"
                        : "bg-white text-[#0A0A0E] hover:bg-[#FAFAFD]"
                    )}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* -------------------------------------------------------------
                REAL-TIME STAGGERED RESULTS GRID
                ------------------------------------------------------------- */}
            <div className="p-6 sm:p-10 flex-1 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between border-b-2 border-[#0A0A0E] pb-2">
                <span className="font-mono text-xs font-black uppercase text-[#626470]">
                  SEARCH DISCOVERY RESULTS ({filteredResults.length} FOUND)
                </span>
                {query && (
                  <span className="font-mono text-xs font-black text-[#FF007A]">
                    QUERY: "{query}"
                  </span>
                )}
              </div>

              {filteredResults.length === 0 ? (
                <div className="p-12 text-center bg-white border-2 border-dashed border-[#0A0A0E] space-y-3">
                  <div className="font-y2k text-2xl font-black text-[#0A0A0E]">
                    NO GRAILS MATCHED "{query}"
                  </div>
                  <p className="font-mono text-xs text-[#626470]">
                    Try searching for "Mycelium", "3D Resin", "Corset", "Paris", or "Seoul".
                  </p>
                </div>
              ) : (
                <motion.div
                  variants={resultsStaggerVariants}
                  initial="hidden"
                  animate="visible"
                  key={`${query}-${selectedFilter}`}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredResults.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemPopVariants}
                    >
                      <Link
                        to={`/article/${item.slug || 'hero-bio-luminescent-couture'}`}
                        onClick={onClose}
                        className="group bg-white border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] hover:shadow-[8px_8px_0px_#FF007A] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden h-full"
                      >
                        <div>
                          <div className="relative h-44 overflow-hidden border-b-2 border-[#0A0A0E] bg-[#FAFAFD]">
                            <img
                              src={item.coverImage || item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2">
                              <DopamineBadge variant={item.badgeVariant || 'pink'} size="sm">
                                {item.tag || item.categoryName}
                              </DopamineBadge>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-[#0A0A0E] text-white font-mono text-[10px] font-black px-2 py-0.5 border border-white">
                              ★ {item.stats?.impactScore || item.score}
                            </div>
                          </div>

                          <div className="p-4 space-y-2">
                            <div className="font-mono text-[10px] text-[#626470] uppercase font-bold">
                              {item.designer}
                            </div>
                            <h3 className="font-display-serif text-lg font-black text-[#0A0A0E] group-hover:text-[#FF007A] transition-colors line-clamp-2 leading-snug">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <div className="w-full py-2 bg-[#FFFDF8] border border-[#0A0A0E] font-heading font-black text-[11px] uppercase flex items-center justify-center gap-1 group-hover:bg-[#FF007A] group-hover:text-white transition-colors">
                            <span>VIEW ARTICLE</span>
                            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Bottom Modal Bar */}
            <div className="border-t-3 border-[#0A0A0E] bg-white px-6 py-3 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10FF70]"></span>
                <span className="font-bold text-[#0A0A0E]">MAXIMALIST REAL-TIME DISCOVERY ENGINE</span>
              </div>
              <button
                onClick={() => triggerDopamineConfetti()}
                className="font-bold text-[#FF007A] hover:underline cursor-pointer flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>BURST CELEBRATION</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
