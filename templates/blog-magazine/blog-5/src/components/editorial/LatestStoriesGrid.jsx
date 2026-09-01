import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MediumGridCard, LargeFeatureCard, CompactListCard } from '../cards/StoryCardVariants';
import { MotionTiltCard } from '../cards/MotionTiltCard';
import { Sparkles, ArrowRight, Bookmark, ArrowUpRight, Filter } from 'lucide-react';
import { useZMag } from '../../context/ZMagContext';

export function LatestStoriesGrid({ articles = [] }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { toggleBookmark, bookmarks } = useZMag();

  const categories = ['ALL', 'FUTURE TECH', 'BIO-SPACES', 'HYPER-STYLE', 'Z-CULTURE', 'AVANT-SOUND', 'KINETIC DESIGN'];

  const filteredArticles = activeFilter === 'ALL'
    ? articles
    : articles.filter((art) => art.category.toUpperCase().includes(activeFilter));

  const items = filteredArticles.length > 0 ? filteredArticles : articles;

  const cardEntranceVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.94,
      y: shouldReduceMotion ? 0 : 35,
      rotateX: shouldReduceMotion ? 0 : 8,
    },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.55,
        delay: i * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="space-y-10 my-24">
      {/* 1. Interactive Section Header with Text-Mask Reveal Animation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
        <div className="space-y-2">
          {/* Tag Pill */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0055FF] uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CHRONICLES // VOL. 2026</span>
            </motion.div>
          </div>

          {/* Masked Headline Reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#111827]"
            >
              Latest Editorial Dispatches
            </motion.h2>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#0055FF] text-white shadow-[0_4px_12px_rgba(0,85,255,0.3)]'
                  : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#0055FF] hover:text-[#111827]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Asymmetric Masonry / Staggered Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Lead Span-7 Tall Feature Card */}
        {items[0] && (
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntranceVariants}
            className="md:col-span-7 flex"
          >
            <MotionTiltCard tiltStrength={10} className="w-full h-full">
              {({ innerImageX, innerImageY, isHovered }) => {
                const isSaved = bookmarks.includes(items[0].id);
                return (
                  <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 bg-white/95 border border-white/80 flex flex-col justify-between h-full group relative overflow-hidden">
                    <Link
                      to={`/article/${items[0].id}`}
                      className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#F3F4F6] mb-6 block"
                    >
                      <motion.img
                        style={{ x: innerImageX, y: innerImageY, scale: 1.08 }}
                        src={items[0].image}
                        alt={items[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.6875rem] font-mono font-bold text-[#0055FF] uppercase tracking-wider shadow-xs">
                        Featured Lead
                      </div>
                    </Link>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-[#6B7280]">
                        <Link
                          to={`/category/${items[0].categorySlug || 'future-tech'}`}
                          className="text-[#0055FF] font-bold uppercase tracking-wider hover:underline"
                        >
                          {items[0].category}
                        </Link>
                        <span>{items[0].readTime}</span>
                      </div>

                      <Link to={`/article/${items[0].id}`} className="block group/title">
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111827] group-hover/title:text-[#0055FF] transition-colors leading-tight">
                          {items[0].title}
                        </h3>
                      </Link>

                      <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-2">
                        {items[0].excerpt || items[0].subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[#F3F4F6] mt-6 text-xs">
                      <span className="font-mono text-xs text-[#6B7280]">
                        By {items[0].author}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleBookmark(items[0].id);
                        }}
                        className={`p-2 rounded-full border transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-[#0055FF] text-white border-[#0055FF]'
                            : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#0055FF]'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>
                );
              }}
            </MotionTiltCard>
          </motion.div>
        )}

        {/* Right Span-5 Stack of 2 Stories */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {items.slice(1, 3).map((art, idx) => (
            <motion.div
              key={art.id}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardEntranceVariants}
              className="flex-1"
            >
              <CompactListCard article={art} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row of 3 Medium Grid Cards */}
        {items.slice(3, 6).map((art, idx) => (
          <motion.div
            key={`grid-bot-${art.id}`}
            custom={idx + 3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardEntranceVariants}
            className="md:col-span-4 flex"
          >
            <MediumGridCard article={art} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
