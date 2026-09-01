import React, { memo, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, Sparkles, ArrowUpRight, Globe, Menu } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { PrintModal } from '../ui/PrintModal';
import { EditionModal } from '../ui/EditionModal';

export interface HeaderProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  onHomeClick?: () => void;
  onOpenSearch?: () => void;
}

const NAV_CATEGORIES = [
  'Spatial Design',
  'AI Synthetics',
  'Typography',
  'Architecture',
  'Culture',
  'Essays',
];

export const Header: React.FC<HeaderProps> = memo(({
  activeCategory = 'All Dispatches',
  onSelectCategory,
  onHomeClick,
  onOpenSearch,
}) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isEditionModalOpen, setIsEditionModalOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll direction awareness without layout shifts
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;

    // Detect if page is scrolled past the top threshold
    setIsScrolled(latest > 30);

    // If scrolling down significantly and past top header, hide header
    if (delta > 8 && latest > 120 && !isMegaMenuOpen && !isPrintModalOpen && !isEditionModalOpen) {
      setIsHidden(true);
    } else if (delta < -6) {
      // If scrolling up, spring header back into view
      setIsHidden(false);
    }
  });

  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const handleBrandClick = () => {
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      setIsMegaMenuOpen(true);
    }
  };

  return (
    <>
      <motion.header
        animate={{
          y: isHidden ? -100 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 28,
          mass: 0.8,
        }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-shadow duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-slate-900/5'
            : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50'
        }`}
      >
        {/* Top Edition Bar (clickable edition & language selector) */}
        {!isScrolled && (
          <div className="border-b border-slate-200/60 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider py-1.5 px-4 sm:px-6 md:px-8 text-slate-500 flex justify-between items-center bg-white/40">
            <div
              onClick={() => setIsEditionModalOpen(true)}
              className="flex items-center gap-2 sm:gap-4 cursor-pointer hover:text-blue-600 transition-colors"
            >
              <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Live Editorial Edition
              </span>
              <span className="hidden sm:inline-block text-slate-300">•</span>
              <span className="hidden md:inline-block text-slate-600">Vol. 42 / No. 08 — Spatial Architecture & AI</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden md:inline-block text-slate-400">Published Worldwide</span>
              <span className="text-slate-700 font-medium hidden sm:inline">Aug 2026</span>
              <button
                onClick={() => setIsEditionModalOpen(true)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Global / EN</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-18 flex items-center justify-between gap-2">
          {/* Left: Brand Monogram & Mega Menu Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsMegaMenuOpen(true)}
              aria-label="Open Mega Menu"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all duration-300 text-slate-800 hover:text-blue-600 active:scale-95 cursor-pointer"
            >
              <Menu className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline">
                Menu
              </span>
            </button>

            <button
              onClick={handleBrandClick}
              className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold font-display shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <span className="text-base sm:text-lg">DM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  DESIGN<span className="text-blue-600 font-serif italic ml-1">MAG</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 -mt-0.5">
                  Spatial & Thought
                </span>
              </div>
            </button>
          </div>

          {/* Center: Curated Interactive Category Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
            {NAV_CATEGORIES.map((item) => {
              const isSelected = activeCategory.toLowerCase() === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200/70 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right: Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleSearchClick}
              aria-label="Search Magazine"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 flex items-center justify-center border border-slate-200 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="group relative flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-[11px] sm:text-xs font-semibold tracking-tight shadow-md hover:shadow-blue-500/20 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Issue 08 Print</span>
              <span className="sm:hidden">Print</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mega Menu Overlay */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Interactive Collectible Issue Print Order Modal */}
      <PrintModal isOpen={isPrintModalOpen} onClose={() => setIsPrintModalOpen(false)} />

      {/* Regional Edition & Language Selector Modal */}
      <EditionModal isOpen={isEditionModalOpen} onClose={() => setIsEditionModalOpen(false)} />
    </>
  );
});

Header.displayName = 'Header';
