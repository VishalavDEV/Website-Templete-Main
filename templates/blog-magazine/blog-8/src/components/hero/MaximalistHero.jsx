import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { HERO_ACHIEVEMENT, MARQUEE_SLOGANS } from '../../data/fashionData';
import DopamineBadge from '../common/DopamineBadge';
import MaximalistButton from '../common/MaximalistButton';
import { Sparkles, Trophy, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function MaximalistHero() {
  const containerRef = useRef(null);
  const { isSaved, toggleSaveArticle, triggerDopamineConfetti } = useMagazine();

  // Scroll Parallax (Hardware-accelerated transforms)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const backgroundShapeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const backgroundShapeRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const marqueeTextY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mainImageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const mainImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const foregroundCollageY1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const foregroundCollageY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const floatingBadgeY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const floatingBadgeRotate = useTransform(scrollYProgress, [0, 1], [-3, 6]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const repeatedMarquee = [...MARQUEE_SLOGANS, ...MARQUEE_SLOGANS];
  const isBookmarked = isSaved(HERO_ACHIEVEMENT.id);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#FFFFFF] border-3.5 border-[#0A0A0E] shadow-[6px_6px_0px_#0A0A0E] sm:shadow-[8px_8px_0px_#0A0A0E] p-4 sm:p-8 lg:p-12 mb-12 sm:mb-16 select-none"
    >
      {/* LAYER 0: BACKGROUND PARALLAX SHAPES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden pattern-grid-light opacity-60 z-0" />

      <motion.div
        style={{ y: backgroundShapeY, rotate: backgroundShapeRotate }}
        className="absolute -top-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 bg-[#FFE600] rounded-full border-4 border-[#0A0A0E] opacity-90 z-0 pointer-events-none transform-gpu"
      />
      <motion.div
        style={{ y: foregroundCollageY2 }}
        className="absolute top-1/2 -left-12 w-36 sm:w-48 h-36 sm:h-48 bg-[#FF007A] opacity-20 rounded-3xl border-3 border-[#0A0A0E] z-0 pointer-events-none rotate-12 transform-gpu"
      />
      <motion.div
        style={{ y: backgroundShapeY }}
        className="absolute bottom-6 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-[#10FF70] border-3 border-[#0A0A0E] z-0 pointer-events-none -rotate-12 opacity-80 transform-gpu"
      />

      {/* LAYER 1: BEHIND-THE-IMAGE KINETIC MARQUEE */}
      <motion.div
        style={{ y: marqueeTextY }}
        className="absolute top-12 sm:top-16 left-0 right-0 z-0 overflow-hidden pointer-events-none opacity-20 md:opacity-35"
      >
        <div className="animate-marquee-left flex items-center whitespace-nowrap">
          {repeatedMarquee.map((phrase, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6">
              <span className="font-y2k font-black text-5xl sm:text-8xl lg:text-9xl text-stroke-obsidian tracking-tighter uppercase">
                {phrase}
              </span>
              <span className="text-2xl sm:text-4xl text-[#FF007A] mx-4 sm:mx-6">✦</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* LAYER 2 & 3: HERO CONTENT GRID & LAYERED COLLAGE */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Editorial Text Column */}
        <motion.div
          style={{ y: heroTextY }}
          className="lg:col-span-6 space-y-5 sm:space-y-6 transform-gpu"
        >
          {/* Header Badges & Year Stamp */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.div layoutId={`article-badge-${HERO_ACHIEVEMENT.slug}`}>
              <DopamineBadge variant="pink" size="md" icon={Trophy}>
                {HERO_ACHIEVEMENT.kicker}
              </DopamineBadge>
            </motion.div>
            <DopamineBadge variant="yellow" size="sm">
              VOL.09 // {HERO_ACHIEVEMENT.year}
            </DopamineBadge>
            <span className="bg-[#0A0A0E] text-[#10FF70] font-mono text-[11px] sm:text-xs font-black px-2 py-1 border border-[#0A0A0E]">
              ★ GRAND PRIX WINNER
            </span>
          </div>

          {/* Massive Display Title with Shared Morph */}
          <div className="relative">
            <Link to={`/article/${HERO_ACHIEVEMENT.slug}`} className="group block">
              <motion.h1
                layoutId={`article-title-${HERO_ACHIEVEMENT.slug}`}
                className="text-fluid-mega font-display-serif font-black tracking-tight text-[#0A0A0E] group-hover:text-[#FF007A] transition-colors leading-[0.92] uppercase break-words"
              >
                THE HYPER-
                <span className="block font-display-y2k text-[#FF007A] text-dopamine-gradient">
                  LUMEN
                </span>
                <span className="italic font-normal">MANIFESTO</span>
              </motion.h1>
            </Link>

            {/* Overlapping Brutalist Stamp */}
            <motion.div
              style={{ y: floatingBadgeY, rotate: floatingBadgeRotate }}
              className="absolute -top-6 right-0 sm:right-6 hidden sm:block pointer-events-auto transform-gpu"
            >
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
                }}
                className="bg-[#10FF70] text-[#0A0A0E] border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] p-2.5 sm:p-3 font-mono text-center cursor-pointer hover:rotate-6 transition-transform select-none"
              >
                <div className="text-[9px] sm:text-[10px] font-black tracking-wider">SCORE</div>
                <div className="text-xl sm:text-2xl font-black">{HERO_ACHIEVEMENT.stats.impactScore}</div>
                <div className="text-[8px] sm:text-[9px] font-bold">MAXIMALIST</div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle & Body Summary */}
          <p className="font-brutal-body text-fluid-body-lg text-[#2C2D35] font-semibold leading-relaxed max-w-xl">
            {HERO_ACHIEVEMENT.subtitle}
          </p>

          {/* Designer & Achievement Spec Box */}
          <div className="p-3.5 sm:p-4 bg-[#FFFBE6] border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="text-[10px] font-mono font-bold text-[#626470] uppercase">Lead Designers</div>
              <div className="font-heading font-black text-xs sm:text-sm text-[#0A0A0E]">{HERO_ACHIEVEMENT.designer}</div>
            </div>
            <div className="h-8 w-[2px] bg-[#0A0A0E] hidden sm:block" />
            <div>
              <div className="text-[10px] font-mono font-bold text-[#626470] uppercase">Honors & Citation</div>
              <div className="font-heading font-black text-xs sm:text-sm text-[#FF007A]">{HERO_ACHIEVEMENT.award}</div>
            </div>
          </div>

          {/* CTAs & Dopamine Interaction */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Link to={`/article/${HERO_ACHIEVEMENT.slug}`}>
              <MaximalistButton
                variant="primary"
                size="lg"
                icon={Sparkles}
                iconPosition="right"
              >
                READ FULL STORY
              </MaximalistButton>
            </Link>

            <MaximalistButton
              variant={isBookmarked ? "accent" : "outline"}
              size="lg"
              icon={Heart}
              iconPosition="left"
              onClick={() => toggleSaveArticle(HERO_ACHIEVEMENT.id)}
            >
              {isBookmarked ? "SAVED TO GRAILS" : "BOOKMARK"}
            </MaximalistButton>
          </div>
        </motion.div>

        {/* Right Layered Collage Visual Column with Morphing Image */}
        <div className="lg:col-span-6 relative flex justify-center items-center pt-4 lg:pt-0">
          
          <motion.div
            style={{ y: mainImageY, scale: mainImageScale }}
            className="relative z-10 w-full max-w-md sm:max-w-lg transform-gpu"
          >
            <Link to={`/article/${HERO_ACHIEVEMENT.slug}`} className="block">
              <motion.div
                layoutId={`article-image-${HERO_ACHIEVEMENT.slug}`}
                className="relative group bg-white border-3.5 border-[#0A0A0E] shadow-[8px_8px_0px_#FF007A] sm:shadow-[10px_10px_0px_#FF007A] overflow-hidden cursor-pointer"
              >
                <img
                  src={HERO_ACHIEVEMENT.coverImage}
                  alt="Avant-Garde Fashion Achievement Model"
                  className="w-full h-[340px] xs:h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />

                {/* Bold Editorial Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-[#0A0A0E]/85 via-transparent to-transparent pointer-events-none">
                  <div className="mix-blend-difference text-white">
                    <span className="font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#FF007A] px-2 py-0.5 text-white inline-block mb-1">
                      RUNWAY ARCHIVE // 2026
                    </span>
                    <div className="font-display-y2k text-xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      HIGH-VOLTAGE COUTURE
                    </div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  <DopamineBadge variant="lime" size="sm" icon={ShieldCheck}>
                    AUTHENTICATED DROP
                  </DopamineBadge>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Layered Collage Insets */}
          <motion.div
            style={{ y: foregroundCollageY1 }}
            className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-8 z-20 w-32 xs:w-40 sm:w-48 bg-white border-2 sm:border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0047FF] sm:shadow-[6px_6px_0px_#0047FF] p-1.5 sm:p-2 rotate-[-6deg] hover:rotate-0 transition-transform duration-300 pointer-events-auto transform-gpu"
          >
            <div className="relative h-20 xs:h-28 sm:h-36 overflow-hidden border border-[#0A0A0E]">
              <img
                src={HERO_ACHIEVEMENT.detailImage1}
                alt="Micro Pleating Detail"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute bottom-1 right-1 bg-[#0047FF] text-white font-mono text-[8px] sm:text-[9px] font-black px-1">
                FIG. A
              </span>
            </div>
            <div className="pt-1.5 sm:pt-2 font-mono text-[8px] sm:text-[10px] font-black uppercase text-[#0A0A0E] tracking-tight truncate">
              3D BIO-ALGAE SILK
            </div>
          </motion.div>

          <motion.div
            style={{ y: foregroundCollageY2 }}
            className="absolute -top-4 sm:-top-6 -right-1 sm:-right-6 z-20 bg-[#FFE600] border-2 sm:border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] sm:shadow-[5px_5px_0px_#0A0A0E] p-2 sm:p-3 rotate-[8deg] hover:rotate-0 transition-transform duration-300 transform-gpu"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FF007A] border border-[#0A0A0E] sm:border-2 flex items-center justify-center text-white font-black text-[10px] sm:text-xs">
                ★
              </div>
              <div>
                <div className="font-y2k font-black text-[10px] sm:text-xs uppercase text-[#0A0A0E]">PARIS GRAND PRIX</div>
                <div className="font-mono text-[8px] sm:text-[10px] text-[#2C2D35] font-bold">OFFICIAL CITATION</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LAYER 4: BOTTOM LIVE STATS STRIP */}
      <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t-3 border-[#0A0A0E] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10 bg-white">
        <div className="p-2.5 sm:p-3 bg-[#FFEBF3] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E]">
          <div className="font-mono text-[9px] sm:text-[10px] text-[#626470] font-black uppercase">CRITICS SCORE</div>
          <div className="font-y2k text-lg sm:text-xl font-black text-[#FF007A]">{HERO_ACHIEVEMENT.stats.impactScore} / 100</div>
        </div>
        <div className="p-2.5 sm:p-3 bg-[#F2FFE6] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E]">
          <div className="font-mono text-[9px] sm:text-[10px] text-[#626470] font-black uppercase">BIO-COMPATIBILITY</div>
          <div className="font-y2k text-lg sm:text-xl font-black text-[#10FF70] text-stroke-obsidian">{HERO_ACHIEVEMENT.stats.bioRecycled}</div>
        </div>
        <div className="p-2.5 sm:p-3 bg-[#EBF4FF] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E]">
          <div className="font-mono text-[9px] sm:text-[10px] text-[#626470] font-black uppercase">GLOBAL CURATORS</div>
          <div className="font-y2k text-lg sm:text-xl font-black text-[#0047FF]">{HERO_ACHIEVEMENT.stats.globalCurators}</div>
        </div>
        <div className="p-2.5 sm:p-3 bg-[#FFFBE6] border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] flex items-center justify-between">
          <div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#626470] font-black uppercase">ARCHIVE STATUS</div>
            <div className="font-y2k text-xs sm:text-sm font-black text-[#0A0A0E]">FEATURED #01</div>
          </div>
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />
        </div>
      </div>
    </div>
  );
}

export default MaximalistHero;
