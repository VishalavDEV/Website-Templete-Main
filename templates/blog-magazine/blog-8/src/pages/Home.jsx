import React from 'react';
import { motion } from 'framer-motion';
import { useMagazine } from '../context/MagazineContext';
import MaximalistHero from '../components/hero/MaximalistHero';
import AsymmetricalBentoGrid from '../components/feed/AsymmetricalBentoGrid';
import HorizontalVelocityCarousel from '../components/carousel/HorizontalVelocityCarousel';
import DopamineNewsletter from '../components/newsletter/DopamineNewsletter';
import InteractiveTagPill from '../components/common/InteractiveTagPill';
import DopamineBadge from '../components/common/DopamineBadge';
import { CATEGORIES } from '../utils/constants';
import { staggerContainer } from '../utils/motion';
import { Tag, Sparkles, Layers } from 'lucide-react';

export function Home() {
  const { selectedCategory, setSelectedCategory, triggerDopamineConfetti } = useMagazine();

  const handleCategoryClick = (catId, e) => {
    setSelectedCategory(catId);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    
    // Smoothly scroll to the Category Archive Feed when a category is selected
    setTimeout(() => {
      const feedElement = document.getElementById('category-archive-feed');
      if (feedElement) {
        feedElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const trendingTags = [
    { tag: 'BioMycelium', variant: 'lime', category: 'bio-materials' },
    { tag: 'CyberChrome', variant: 'yellow', category: 'y2k-archive' },
    { tag: 'Generative3D', variant: 'blue', category: 'runway-rebel' },
    { tag: 'PiezoKicks', variant: 'orange', category: 'streetwear-grails' },
    { tag: 'PrismTrench', variant: 'purple', category: 'digital-couture' },
    { tag: 'ParisGrandPrix', variant: 'pink', category: 'digital-couture' },
    { tag: 'LiquidDraping', variant: 'blue', category: 'runway-rebel' },
    { tag: 'ZeroCarbon', variant: 'lime', category: 'bio-materials' }
  ];

  return (
    <motion.div
      variants={staggerContainer(0.06, 0.03)}
      initial="hidden"
      animate="visible"
      className="space-y-8 sm:space-y-10 w-full"
    >
      {/* Interactive Category Pills Bar */}
      <div className="bg-white p-2.5 sm:p-3 border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] sm:shadow-[5px_5px_0px_#0A0A0E] flex items-center justify-between gap-3 overflow-x-auto scrollbar-none sticky top-16 sm:top-18 z-30 backdrop-blur-md bg-white/95 w-full">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-1 py-0.5">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] font-black text-[#626470] mr-2 uppercase whitespace-nowrap">
            <Layers className="w-3.5 h-3.5 text-[#FF007A]" />
            <span>CATEGORIES:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            
            // Custom active styles per category
            const activeStyles = {
              'all': 'bg-[#FF007A] text-white shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]',
              'runway-rebel': 'bg-[#0047FF] text-white shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]',
              'digital-couture': 'bg-[#9D00FF] text-white shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]',
              'streetwear-grails': 'bg-[#FF5500] text-white shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]',
              'bio-materials': 'bg-[#10FF70] text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]',
              'y2k-archive': 'bg-[#FFE600] text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] sm:shadow-[4px_4px_0px_#0A0A0E]'
            }[cat.id] || 'bg-[#FF007A] text-white';

            return (
              <button
                key={cat.id}
                onClick={(e) => handleCategoryClick(cat.id, e)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-heading font-black uppercase tracking-wider border-2 border-[#0A0A0E] whitespace-nowrap transition-all cursor-pointer select-none ${
                  isActive
                    ? `${activeStyles} -translate-y-0.5 scale-102`
                    : 'bg-[#FFFDF8] text-[#0A0A0E] hover:bg-[#FFEBF3] shadow-[2px_2px_0px_#0A0A0E]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              triggerDopamineConfetti();
            }}
            className="hidden md:flex items-center gap-1 font-mono text-[11px] font-black text-[#FF007A] hover:underline px-2 py-1 bg-[#FFEBF3] border border-[#FF007A] whitespace-nowrap cursor-pointer shrink-0"
          >
            RESET TO ALL
          </button>
        )}
      </div>

      {/* PHASE 2: MAXIMALIST HERO LANDING */}
      <MaximalistHero />

      {/* PHASE 5: HORIZONTAL VELOCITY CAROUSEL (TRENDING LOOKS) */}
      <HorizontalVelocityCarousel />

      {/* PHASE 3: ASYMMETRICAL BENTO GRID & CATEGORY ARCHIVE FEED */}
      <AsymmetricalBentoGrid />

      {/* TRENDING DOPAMINE TAGS CLOUD */}
      <div className="p-4 sm:p-6 bg-white border-3 border-[#0A0A0E] shadow-[5px_5px_0px_#0A0A0E] space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0E] pb-2.5 sm:pb-3">
          <div className="flex items-center gap-2 font-y2k font-black text-xs sm:text-sm uppercase">
            <Tag className="w-4 h-4 text-[#FF007A]" />
            <span>TRENDING DOPAMINE TOPICS & RADAR</span>
          </div>
          <DopamineBadge variant="pink" size="sm">LIVE RADAR</DopamineBadge>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {trendingTags.map((item, idx) => (
            <InteractiveTagPill
              key={idx}
              tag={item.tag}
              variant={item.variant}
              onClick={() => {
                if (item.category) {
                  setSelectedCategory(item.category);
                  setTimeout(() => {
                    document.getElementById('category-archive-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 50);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* PHASE 9: DOPAMINE NEWSLETTER & MICRO-INTERACTIONS */}
      <DopamineNewsletter />
    </motion.div>
  );
}

export default Home;
