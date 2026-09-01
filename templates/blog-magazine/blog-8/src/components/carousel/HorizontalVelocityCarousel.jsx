import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';
import { useMagazine } from '../../context/MagazineContext';
import { TRENDING_LOOKS } from '../../data/fashionData';
import DopamineBadge from '../common/DopamineBadge';
import { ChevronLeft, ChevronRight, Trophy, Heart, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export function HorizontalVelocityCarousel() {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const { isSaved, toggleSaveArticle, triggerDopamineConfetti } = useMagazine();

  // Track global page scroll velocity for physics-based dynamic skewing (GPU accelerated)
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
    mass: 0.5
  });

  // Clamped responsive transforms to prevent excessive distortion or frame drops on low-power devices
  const velocitySkewX = useTransform(smoothVelocity, [-1200, 1200], [-6, 6]);
  const velocityRotate = useTransform(smoothVelocity, [-1200, 1200], [-2.5, 2.5]);
  const velocityScale = useTransform(smoothVelocity, [-1200, 0, 1200], [0.98, 1, 0.98]);

  const scrollLeft = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="my-14 sm:my-20 space-y-6 select-none relative overflow-hidden w-full">
      {/* Section Header with Navigation Controls */}
      <div className="border-b-4 border-[#0A0A0E] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FFE600] inline-block border border-[#0A0A0E]"></span>
            <span className="font-mono text-xs font-black uppercase text-[#0A0A0E] tracking-wider">
              SECTION 03 // VELOCITY STREAM
            </span>
          </div>
          <h2 className="font-display-serif text-fluid-h1 font-black text-[#0A0A0E] tracking-tight uppercase">
            TRENDING <span className="font-display-y2k text-[#FF007A]">ACHIEVEMENTS</span> & LOOKS
          </h2>
        </div>

        {/* Carousel Arrow Controls & Dopamine Badge */}
        <div className="flex items-center gap-3">
          <DopamineBadge variant="yellow" size="sm">
            PHYSICS VELOCITY ACTIVE
          </DopamineBadge>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 sm:p-2.5 bg-white hover:bg-[#FFEBF3] text-[#0A0A0E] border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:shadow-[5px_5px_0px_#FF007A] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 sm:p-2.5 bg-white hover:bg-[#FFEBF3] text-[#0A0A0E] border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:shadow-[5px_5px_0px_#FF007A] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery with Touch & Velocity Optimization */}
      <div
        ref={scrollTrackRef}
        className="flex items-stretch gap-5 sm:gap-8 overflow-x-auto pt-6 sm:pt-8 pb-10 sm:pb-12 px-2 scroll-smooth scrollbar-none snap-x snap-mandatory touch-pan-x w-full"
      >
        {TRENDING_LOOKS.map((look) => {
          const isBookmarked = isSaved(look.id);

          return (
            <motion.div
              key={look.id}
              style={{
                skewX: velocitySkewX,
                rotate: velocityRotate,
                scale: velocityScale
              }}
              className="snap-start flex-shrink-0 w-[270px] xs:w-[300px] sm:w-[360px] lg:w-[390px] relative group transform-gpu will-change-transform"
            >
              {/* OVERSIZED OUTLINE-STROKE NUMBER BEHIND IMAGE */}
              <div className="absolute -top-10 sm:-top-12 -left-2 sm:-left-3 z-0 pointer-events-none select-none opacity-30 sm:opacity-40 group-hover:opacity-60 transition-opacity">
                <span className="font-y2k font-black text-6xl sm:text-9xl text-stroke-obsidian tracking-tighter">
                  {look.num}
                </span>
              </div>

              {/* Main Look Card */}
              <div className="relative z-10 bg-white border-3.5 border-[#0A0A0E] shadow-[5px_5px_0px_#0A0A0E] sm:shadow-[6px_6px_0px_#0A0A0E] group-hover:shadow-[10px_10px_0px_#FF007A] group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                
                {/* Media Box */}
                <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] overflow-hidden border-b-3 border-[#0A0A0E] bg-[#FAFAFD]">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    <DopamineBadge variant={look.badgeVariant} size="sm">
                      {look.badge}
                    </DopamineBadge>
                  </div>

                  {/* Top Right Bookmark */}
                  <button
                    onClick={() => toggleSaveArticle(look.id)}
                    className={clsx(
                      'absolute top-3 right-3 z-20 p-2 border-2 border-[#0A0A0E] transition-all cursor-pointer',
                      isBookmarked
                        ? 'bg-[#FF007A] text-white shadow-[2px_2px_0px_#0A0A0E]'
                        : 'bg-white text-[#0A0A0E] hover:bg-[#FFEBF3]'
                    )}
                    title="Bookmark Look"
                  >
                    <Heart className={clsx("w-3.5 h-3.5", isBookmarked && "fill-current")} />
                  </button>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white font-mono text-xs">
                    <div className="bg-[#0A0A0E] px-2 py-0.5 border border-white font-black text-[11px] sm:text-xs">
                      ★ {look.rating} SCORE
                    </div>
                    <div className="bg-[#FF007A] px-2 py-0.5 font-bold text-[11px] sm:text-xs">
                      {look.votes} VOTES
                    </div>
                  </div>
                </div>

                {/* Editorial Details */}
                <div className="p-4 sm:p-5 bg-white space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#626470]">
                    <span className="font-bold uppercase truncate max-w-[140px] sm:max-w-none">{look.location}</span>
                    <span className="font-black text-[#FF007A] bg-[#FFEBF3] px-2 py-0.5 border border-[#FF007A]">
                      {look.tag}
                    </span>
                  </div>

                  <h3 className="font-display-serif text-lg sm:text-2xl font-black text-[#0A0A0E] group-hover:text-[#FF007A] transition-colors leading-tight line-clamp-2">
                    {look.title}
                  </h3>

                  <div className="text-xs font-mono text-[#2C2D35] flex items-center justify-between pt-2 border-t border-[#E2E4EB]">
                    <div className="truncate pr-2">
                      <span className="text-[#626470] text-[10px] block">DESIGNER</span>
                      <span className="font-black text-[#0A0A0E] truncate block text-[11px] sm:text-xs">{look.designer}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
                      }}
                      className="p-1.5 sm:p-2 bg-[#FFFBE6] hover:bg-[#FFE600] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] transition-colors cursor-pointer shrink-0"
                      title="Celebrate Achievement"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0A0A0E]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default HorizontalVelocityCarousel;
