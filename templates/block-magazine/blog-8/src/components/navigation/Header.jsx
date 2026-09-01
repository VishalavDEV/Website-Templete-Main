import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import DopamineBadge from '../common/DopamineBadge';
import MaximalistButton from '../common/MaximalistButton';
import FullScreenMenu from './FullScreenMenu';
import SearchModal from '../search/SearchModal';
import { Menu, Sparkles, Bookmark, Search } from 'lucide-react';

export function Header() {
  const { savedArticles, triggerDopamineConfetti } = useMagazine();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide on scroll down, spring back on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Global Keyboard Shortcut for Search (CMD+K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !isSearchOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-105%' }
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28
        }}
        className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b-3.5 border-[#0A0A0E] shadow-[0_4px_0_rgba(10,10,14,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Left Brand & Issue Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="group flex items-center gap-1.5 select-none">
              <span className="font-y2k font-black text-3xl sm:text-4xl tracking-tighter text-[#0A0A0E] group-hover:text-[#FF007A] transition-colors">
                XTRA<span className="text-[#FF007A] group-hover:text-[#0047FF]">!</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-2">
              <DopamineBadge variant="pink" size="sm">VOL. 09</DopamineBadge>
              <DopamineBadge variant="yellow" size="sm">SS26</DopamineBadge>
            </div>
          </div>

          {/* Center Search Shortcut Pill */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2.5 px-4 py-2 bg-[#FAFAFD] hover:bg-[#FFEBF3] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] font-mono text-xs text-[#2C2D35] cursor-pointer transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#FF007A]" />
            <span>SEARCH ACHIEVEMENTS...</span>
            <kbd className="bg-white px-1.5 py-0.5 border border-[#0A0A0E] font-bold text-[10px]">
              ⌘K
            </kbd>
          </button>

          {/* Right Action Items & Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 bg-[#FAFAFD] hover:bg-[#FFEBF3] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] text-[#0A0A0E] cursor-pointer"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dopamine Quick Burst */}
            <button
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
              }}
              className="hidden sm:flex items-center gap-1.5 bg-[#FFFBE6] hover:bg-[#FFE600] text-[#0A0A0E] px-3 py-1.5 border-2 border-[#0A0A0E] font-mono text-xs font-black shadow-[2px_2px_0px_#0A0A0E] transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" />
              <span>DOPAMINE</span>
            </button>

            {/* Saved Counter Pill */}
            <div className="flex items-center gap-1 bg-[#FF007A] px-2.5 py-1 text-white border-2 border-[#0A0A0E] font-mono text-xs font-black shadow-[2px_2px_0px_#0A0A0E]">
              <Bookmark className="w-3 h-3 fill-current" />
              <span>{savedArticles.length}</span>
            </div>

            {/* High-Impact Menu Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.04, rotate: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 bg-[#0A0A0E] text-white hover:bg-[#FF007A] px-4 py-2 border-2 border-[#0A0A0E] font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#0047FF] transition-colors cursor-pointer select-none"
              aria-label="Open full screen navigation"
            >
              <Menu className="w-4 h-4 stroke-[3]" />
              <span>MENU</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Navigation Overlay */}
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* PHASE 8: HIGH-IMPACT SEARCH OVERLAY */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Header;
