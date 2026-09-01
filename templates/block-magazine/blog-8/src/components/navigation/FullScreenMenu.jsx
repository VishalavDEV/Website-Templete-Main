import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import DopamineBadge from '../common/DopamineBadge';
import MaximalistButton from '../common/MaximalistButton';
import { CATEGORIES } from '../../utils/constants';
import { X, Sparkles, ArrowUpRight, Trophy, Flame, Disc, Globe } from 'lucide-react';
import { springPhysics } from '../../utils/motion';
import clsx from 'clsx';

export function FullScreenMenu({ isOpen, onClose }) {
  const { setSelectedCategory, triggerDopamineConfetti } = useMagazine();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'runway-rebel',
      num: '01',
      title: 'RUNWAY REBELS',
      subtitle: 'Paris & Milan Avant-Garde Breakthroughs',
      color: '#0047FF',
      accentBg: '#EBF4FF'
    },
    {
      id: 'digital-couture',
      num: '02',
      title: 'DIGITAL COUTURE',
      subtitle: '3D Bio-Algae & Generative Resins',
      color: '#9D00FF',
      accentBg: '#F6EEFF'
    },
    {
      id: 'streetwear-grails',
      num: '03',
      title: 'STREET GRAILS',
      subtitle: 'Energy-Harvesting & Modular Grails',
      color: '#FF5500',
      accentBg: '#FFF0E6'
    },
    {
      id: 'bio-materials',
      num: '04',
      title: 'BIO & ECO TECH',
      subtitle: 'Liquid Mycelium & Zero-Carbon Silk',
      color: '#10FF70',
      accentBg: '#F2FFE6'
    },
    {
      id: 'y2k-archive',
      num: '05',
      title: 'Y2K ARCHIVE',
      subtitle: 'Liquid Chrome & Cyber-Dolls Revival',
      color: '#FFE600',
      accentBg: '#FFFBE6'
    },
    {
      id: 'all',
      num: '06',
      title: 'ALL ACHIEVEMENTS',
      subtitle: 'Complete 2026 Honors Monograph',
      color: '#FF007A',
      accentBg: '#FFEBF3'
    }
  ];

  // Container variants for menu overlay
  const overlayVariants = {
    closed: {
      opacity: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.07,
        delayChildren: 0.15
      }
    }
  };

  // Upward masking reveal variant for individual oversized links
  const maskedLinkVariants = {
    closed: {
      y: '120%',
      rotateZ: 4,
      opacity: 0
    },
    open: {
      y: '0%',
      rotateZ: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 380,
        damping: 24,
        mass: 0.7
      }
    }
  };

  const handleLinkClick = (categoryId) => {
    setSelectedCategory(categoryId);
    onClose();
    navigate('/');
    setTimeout(() => {
      document.getElementById('category-archive-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50 bg-[#FFFDF8] text-[#0A0A0E] flex flex-col justify-between overflow-y-auto pattern-grid-light selection:bg-[#FF007A] selection:text-white"
        >
          {/* Top Bar inside Menu */}
          <div className="border-b-3 border-[#0A0A0E] bg-white px-6 sm:px-12 py-5 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <span className="font-y2k font-black text-2xl sm:text-3xl text-[#0A0A0E]">
                XTRA<span className="text-[#FF007A]">.</span>INDEX
              </span>
              <DopamineBadge variant="pink" size="sm">OVERSIZED DIRECTORY</DopamineBadge>
              <span className="hidden md:inline font-mono text-xs text-[#626470]">
                // 142 AWARDS LOGGED
              </span>
            </div>

            {/* Close Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
                }}
                className="hidden sm:flex items-center gap-1.5 bg-[#FFE600] border-2 border-[#0A0A0E] px-3 py-2 font-mono text-xs font-black shadow-[3px_3px_0px_#0A0A0E] cursor-pointer hover:bg-[#FFF033]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>BURST</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 bg-[#FF007A] text-white border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:bg-[#E6006E] transition-all cursor-pointer font-heading font-black text-sm flex items-center gap-1.5"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5 stroke-[3]" />
                <span className="hidden sm:inline">CLOSE</span>
              </button>
            </div>
          </div>

          {/* Main Navigation Body Grid */}
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
            
            {/* Left Oversized Links Column */}
            <div className="lg:col-span-8 space-y-4">
              {menuItems.map((item, idx) => (
                <div key={item.id} className="overflow-hidden py-1">
                  <motion.div
                    variants={maskedLinkVariants}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => handleLinkClick(item.id)}
                    className="group flex items-baseline gap-4 sm:gap-6 cursor-pointer border-b-2 border-dashed border-[#0A0A0E]/20 pb-3"
                  >
                    {/* Index Number */}
                    <span
                      className="font-mono text-base sm:text-xl font-black text-[#626470] group-hover:text-[#0A0A0E] transition-colors"
                      style={{ color: hoveredIdx === idx ? item.color : undefined }}
                    >
                      {item.num}
                    </span>

                    {/* Massive Oversized Title */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span
                        className="font-display-y2k font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#0A0A0E] group-hover:translate-x-3 transition-transform duration-200"
                        style={{
                          color: hoveredIdx === idx ? item.color : '#0A0A0E'
                        }}
                      >
                        {item.title}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-[#626470] font-medium group-hover:text-[#0A0A0E]">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Arrow Indicator */}
                    <span className="hidden sm:inline-block text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Right Curation Spotlight Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white border-3 border-[#0A0A0E] shadow-[6px_6px_0px_#0047FF] space-y-4">
                <div className="flex items-center justify-between">
                  <DopamineBadge variant="blue" size="sm">ISSUE CITATION</DopamineBadge>
                  <Trophy className="w-5 h-5 text-[#0047FF]" />
                </div>
                <h3 className="font-display-serif text-2xl font-black text-[#0A0A0E]">
                  2026 Paris & Milan Honors
                </h3>
                <p className="font-body text-xs text-[#2C2D35] leading-relaxed">
                  Discover peer-reviewed achievements across biomaterials, 3D algorithmic draping, and non-conforming digital street silhouettes.
                </p>
                <div className="p-3 bg-[#EBF4FF] border border-[#0A0A0E] font-mono text-xs text-[#0047FF] font-bold">
                  ★ GRAND PRIX: Bio-Algae Silk Manifesto
                </div>
                <MaximalistButton
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    handleLinkClick('all');
                    triggerDopamineConfetti();
                  }}
                >
                  VIEW ALL WINNERS
                </MaximalistButton>
              </div>

              {/* Live Audio / Frequency Pill */}
              <div className="p-4 bg-[#FFE600] border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0A0A0E] text-[#FFE600] flex items-center justify-center font-black">
                    <Disc className="w-4 h-4 animate-spin" />
                  </div>
                  <div>
                    <div className="font-y2k text-xs font-black">RUNWAY SOUNDSCAPE</div>
                    <div className="font-mono text-[10px] text-[#2C2D35] font-bold">PARIS FW26 // LIVE</div>
                  </div>
                </div>
                <span className="font-mono text-xs font-black bg-white px-2 py-0.5 border border-[#0A0A0E]">
                  128 BPM
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Menu Footer */}
          <div className="border-t-3 border-[#0A0A0E] bg-white px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10FF70] border border-[#0A0A0E]"></span>
              <span className="font-bold text-[#0A0A0E]">STRICTLY LIGHT MODE ARCHIVE</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-black uppercase text-[#0A0A0E]">
              <a href="#instagram" className="hover:text-[#FF007A] transition-colors">Instagram ↗</a>
              <a href="#tiktok" className="hover:text-[#0047FF] transition-colors">TikTok ↗</a>
              <a href="#runway" className="hover:text-[#10FF70] transition-colors">Runway Feed ↗</a>
              <a href="#archive" className="hover:text-[#FF5500] transition-colors">Discord ↗</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FullScreenMenu;
