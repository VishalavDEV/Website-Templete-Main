import React from 'react';
import { motion } from 'framer-motion';
import { EditorialTiltCard } from './EditorialTiltCard';
import { MagneticButton } from '../motion/MagneticButton';
import { bentoGridContainer, bentoGridItem, headlineMaskReveal } from '../motion/motionVariants';
import { ArrowUpRight, Radio, Bookmark, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BentoCategorySpread({ category, articles = [] }) {
  const leadArticle = articles[0] || {};
  const secondaryArticle = articles[1] || {};
  const listArticles = articles.slice(2, 5);

  return (
    <section className="my-24 space-y-10">
      {/* 1. Header with Fluid Typography and Mask Reveal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E2DA]">
        <div className="space-y-2">
          <div className="overflow-hidden">
            <motion.div
              variants={headlineMaskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#8A5A36] uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE OBSERVER DISPATCH // {category?.name || 'ARCHITECTURE & ESSAYS'}</span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              variants={headlineMaskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-fluid-bento-title font-serif font-black tracking-tight text-[#1A1917]"
            >
              Selected Inquiries & Critical Discourse
            </motion.h2>
          </div>
        </div>

        <MagneticButton>
          <Link
            to={`/category/${category?.slug || 'architecture-design'}`}
            className="glass-paper-frosted px-6 py-2.5 rounded-full inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917] hover:bg-[#1A1917] hover:text-white transition-colors shadow-xs"
          >
            <span>View All ({articles.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </MagneticButton>
      </div>

      {/* 2. Asymmetrical Bento Grid */}
      <motion.div
        variants={bentoGridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
      >
        {/* Cell 1: 7-Column Lead Feature with 3D Tilt */}
        <motion.div variants={bentoGridItem} className="md:col-span-7 flex">
          <EditorialTiltCard
            tiltStrength={9}
            className="w-full h-full"
          >
            {({ innerParallaxX, innerParallaxY }) => (
              <div className="glass-paper-frosted rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#EAE7DF] mb-6">
                  <motion.img
                    style={{ x: innerParallaxX, y: innerParallaxY, scale: 1.06 }}
                    src={leadArticle.coverImage}
                    alt={leadArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 glass-floating-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917]">
                    {leadArticle.kicker || 'ESSAY'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#76736A]">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {leadArticle.readTime || '6 min'}</span>
                    <span>&bull;</span>
                    <span>By {typeof leadArticle.author === 'object' ? leadArticle.author?.name : (leadArticle.author || 'Elena Rostova-Vance')}</span>
                  </div>

                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1A1917] group-hover:text-[#8A5A36] transition-colors leading-tight">
                    {leadArticle.title}
                  </h3>

                  <p className="text-fluid-lead text-[#5A574E] line-clamp-2">
                    {leadArticle.subtitle || leadArticle.excerpt}
                  </p>
                </div>
              </div>
            )}
          </EditorialTiltCard>
        </motion.div>

        {/* Cell 2: 5-Column Side Stack */}
        <motion.div variants={bentoGridItem} className="md:col-span-5 flex flex-col gap-6">
          {/* Audio Commentary Bento Box */}
          <div className="glass-paper-frosted rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8A5A36] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#8A5A36] animate-pulse" />
                <span>VOICE OF THE OBSERVER</span>
              </div>
              <Radio className="w-4 h-4 text-[#8A5A36]" />
            </div>

            <h4 className="font-serif font-bold text-lg text-[#1A1917] leading-snug">
              {secondaryArticle.title || 'Acoustic Geometries in Contemporary Timber Towers'}
            </h4>

            {/* Audio Waveform */}
            <div className="flex items-end gap-1.5 h-8 py-1">
              {[30, 70, 45, 90, 55, 80, 40, 95, 65, 50, 85, 35].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                  className="flex-1 bg-[#8A5A36] rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Secondary Story Tilt Cell */}
          {secondaryArticle && (
            <EditorialTiltCard tiltStrength={7} className="flex-1">
              {({ innerParallaxX, innerParallaxY }) => (
                <div className="glass-paper-frosted rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between group">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8A5A36] uppercase font-bold">
                    <span>CRITIQUE</span>
                    <span className="text-[#76736A]">{secondaryArticle.readTime || '4 min'}</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1A1917] group-hover:text-[#8A5A36] transition-colors leading-snug">
                    {secondaryArticle.title}
                  </h4>
                  <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between text-xs font-mono text-[#76736A]">
                    <span>By {typeof secondaryArticle.author === 'object' ? secondaryArticle.author?.name : (secondaryArticle.author || 'Marcus Vance')}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#1A1917] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              )}
            </EditorialTiltCard>
          )}
        </motion.div>

        {/* Bottom 3-Card Row */}
        {listArticles.map((article, idx) => (
          <motion.div key={article.id || idx} variants={bentoGridItem} className="md:col-span-4 flex">
            <EditorialTiltCard tiltStrength={8} className="w-full">
              {({ innerParallaxX, innerParallaxY }) => (
                <div className="glass-paper-frosted rounded-3xl p-6 flex flex-col justify-between h-full group">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#EAE7DF] mb-4">
                    <motion.img
                      style={{ x: innerParallaxX, y: innerParallaxY, scale: 1.05 }}
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[0.6875rem] font-mono font-bold text-[#8A5A36] uppercase">
                      {article.kicker || 'INQUIRY'}
                    </span>
                    <h5 className="font-serif font-bold text-lg text-[#1A1917] group-hover:text-[#8A5A36] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h5>
                  </div>
                  <div className="pt-3 border-t border-[#EAE7DF] mt-4 flex items-center justify-between text-xs font-mono text-[#76736A]">
                    <span>{article.readTime || '3 min'}</span>
                    <Bookmark className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#1A1917] transition-colors" />
                  </div>
                </div>
              )}
            </EditorialTiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
