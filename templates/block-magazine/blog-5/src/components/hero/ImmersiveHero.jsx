import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { Sparkles, ArrowRight, Bookmark, Clock, Eye, Radio, Volume2 } from 'lucide-react';
import { useZMag } from '../../context/ZMagContext';
import { Link } from 'react-router-dom';

export function ImmersiveHero({ article }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { toggleBookmark, bookmarks } = useZMag();

  const [typedText, setTypedText] = useState('');
  const fullText = 'SPATIAL MONOGRAPH // ISSUE NO. 48 // CURATED FOR THE ARCHITECTURAL INTELLIGENTSIA';

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setTypedText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const defaultArticle = article || {
    id: 'spatial-neuro-architecture',
    title: 'THE BIOMORPHIC HORIZON: NEURO-AESTHETICS OF LIVING HABITATS',
    subtitle: 'How synthetic biology and acoustic mycelium frameworks are transforming twentieth-century concrete metropolises into self-regulating biophilic organisms.',
    category: 'BIO-SPACES & MONOGRAPHS',
    author: 'Dr. Elena Rostova-Vance',
    role: 'Senior Spatial Critic & Fellow',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    readTime: '12 MIN READ',
    date: 'VOL. 2026',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop',
  };

  const isSaved = bookmarks.includes(defaultArticle.id);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[82vh] lg:min-h-[88vh] rounded-3xl overflow-hidden glass-card bg-white/70 border border-white/90 p-6 sm:p-10 md:p-14 flex flex-col justify-between mb-20 shadow-[0_20px_60px_-15px_rgba(0,85,255,0.06)]"
    >
      {/* 1. React Three Fiber 3D Background */}
      <HeroCanvas3D />

      {/* 2. Top Header Metadata with Dynamic Typing Animation */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0055FF] animate-ping" />
          <div className="font-mono text-[0.6875rem] sm:text-xs font-bold tracking-widest text-[#0055FF]">
            {typedText}
            <span className="animate-pulse">_</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280]">
          <span className="px-3 py-1 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#111827] font-bold">
            {defaultArticle.date}
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <div className="hidden sm:flex items-center gap-1 text-[#0055FF] font-bold">
            <Radio className="w-3.5 h-3.5" />
            <span>LIVE MONOGRAPH</span>
          </div>
        </div>
      </div>

      {/* 3. Deep Parallax Floating Massive Headline & Story Deck */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 my-8 sm:my-12 max-w-5xl space-y-6"
      >
        {/* Kicker Badge */}
        <Link
          to={`/category/${defaultArticle.categorySlug || 'bio-spaces'}`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#BFDBFE] text-[#0055FF] text-xs font-mono font-bold tracking-wider uppercase shadow-xs hover:bg-[#0055FF] hover:text-white transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{defaultArticle.category}</span>
        </Link>

        {/* Massive Headline */}
        <Link to={`/article/${defaultArticle.id}`} className="block group/hero">
          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#111827] group-hover/hero:text-[#0055FF] transition-colors leading-[0.96] uppercase">
            {defaultArticle.title}
          </h1>
        </Link>

        {/* Subtitle / Excerpt */}
        <p className="text-base sm:text-xl text-[#4B5563] max-w-3xl leading-relaxed font-normal">
          {defaultArticle.subtitle}
        </p>
      </motion.div>

      {/* 4. Bottom Controls, Author Byline & CTA */}
      <div className="relative z-10 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-6">
        {/* Author Byline */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0055FF] to-[#7000FF] p-[2px] shadow-sm shrink-0">
            <img
              src={defaultArticle.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"}
              alt={defaultArticle.author}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <div>
            <span className="block font-heading font-bold text-sm text-[#111827]">
              {defaultArticle.author}
            </span>
            <span className="block font-mono text-xs text-[#6B7280]">
              {defaultArticle.role} &bull; {defaultArticle.readTime}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark(defaultArticle.id);
            }}
            className={`p-3.5 rounded-full border transition-all cursor-pointer shadow-xs ${
              isSaved
                ? 'bg-[#0055FF] text-white border-[#0055FF]'
                : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#0055FF] hover:text-[#0055FF]'
            }`}
            title={isSaved ? 'Saved to collection' : 'Save story'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>

          <Link
            to={`/article/${defaultArticle.id}`}
            className="px-7 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white text-xs font-heading font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(0,85,255,0.4)] flex items-center gap-2 cursor-pointer group"
          >
            <span>Explore Full Monograph</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
