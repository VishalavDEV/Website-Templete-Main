import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, FileQuestion, X } from 'lucide-react';
import { CursorType, Article } from '../types';
import {
  getArticleBySlug,
  getAdjacentArticles,
  getRelatedArticles,
  DEFAULT_ARTICLE_DETAIL,
  ARTICLES_DATA,
} from '../data/insightsData';

import { ReadingProgress } from '../components/article/ReadingProgress';
import { ArticleHero } from '../components/article/ArticleHero';
import { ArticleNavigation } from '../components/article/ArticleNavigation';
import { ProblemSection } from '../components/article/ProblemSection';
import { ArticleImage } from '../components/article/ArticleImage';
import { AttentionSection } from '../components/article/AttentionSection';
import { ArticleVisualBreak } from '../components/article/ArticleVisualBreak';
import { MotionSection } from '../components/article/MotionSection';
import { PrinciplesSection } from '../components/article/PrinciplesSection';
import { StatementQuote } from '../components/article/StatementQuote';
import { ConclusionSection } from '../components/article/ConclusionSection';
import { ArticleAuthor } from '../components/article/ArticleAuthor';
import { ShareArticle } from '../components/article/ShareArticle';
import { RelatedArticles } from '../components/article/RelatedArticles';
import { ArticleNavigationFooter } from '../components/article/ArticleNavigationFooter';
import { ArticleCTA } from '../components/article/ArticleCTA';

interface ArticleDetailPageProps {
  slug: string;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  setCursorType,
  onNavigate,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('section-problem');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lookup article data
  const article = getArticleBySlug(slug);

  // If not found, render premium 404 state
  if (!article) {
    return (
      <div className="min-h-screen bg-[#080808] text-[#FAF9F6] pt-36 pb-24 px-6 sm:px-8 flex items-center justify-center">
        <div className="max-w-xl text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto text-[#0066FF]">
            <FileQuestion className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
              404 // DISPATCH MISSING
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              ARTICLE NOT FOUND
            </h1>
            <p className="font-body text-base text-[#888888] font-light leading-relaxed">
              The essay or editorial piece you are searching for does not exist or has been archived into our quarterly print edition.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('/insights')}
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/40 transition-all cursor-pointer shadow-lg shadow-[#0066FF]/10"
            >
              <span>BACK TO INSIGHTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Details resolution
  const detail = { ...DEFAULT_ARTICLE_DETAIL, ...(article.detail || {}) };
  const { previous, next } = getAdjacentArticles(article.id);
  const relatedArticles = getRelatedArticles(article.id, article.category);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = detail.tableOfContents.map((item) => item.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [detail.tableOfContents]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#080808] text-[#FAF9F6] min-h-screen relative"
    >
      {/* 2. Reading Progress Indicator */}
      <ReadingProgress />

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32">
        <button
          onClick={() => onNavigate('/insights')}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888888] hover:text-[#0066FF] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO INSIGHTS</span>
        </button>
      </div>

      {/* 1. Article Hero */}
      <ArticleHero
        article={article}
        setCursorType={setCursorType}
        onOpenImageModal={(url) => setSelectedImage(url)}
      />

      {/* 3. Main Reading Grid Layout (Desktop 3-Column: ToC, Main Body, Share/Metadata) */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-3">
            <ArticleNavigation
              items={detail.tableOfContents}
              activeId={activeSectionId}
              onItemClick={handleScrollToSection}
              setCursorType={setCursorType}
            />
          </aside>

          {/* Center Column: Comfortable Reading Width Editorial Body */}
          <div className="lg:col-span-6 space-y-16">
            {/* 4. Article Intro: Large Editorial Typography */}
            <div className="space-y-6">
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-[#FAF9F6] font-normal leading-relaxed border-l-2 border-[#0066FF] pl-6 py-1">
                {detail.introParagraphs[0]}
              </p>
              {detail.introParagraphs.slice(1).map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* 6. Section 01: The Problem & Pull Quote */}
            <ProblemSection
              id="section-problem"
              headline={detail.problemHeadline}
              paragraphs={detail.problemParagraphs}
              pullQuote={detail.problemPullQuote}
            />

            {/* 7. Immersive Inline Image */}
            <ArticleImage
              url={detail.inlineImage.url}
              caption={detail.inlineImage.caption}
              alt={detail.inlineImage.alt}
              figureNumber="FIG. 02"
              setCursorType={setCursorType}
              onOpenModal={(url) => setSelectedImage(url)}
            />

            {/* 8. Section 02: Designing for Attention & Numbered List */}
            <AttentionSection
              id="section-attention"
              headline={detail.attentionHeadline}
              items={detail.attentionItems}
            />

            {/* 9. Visual Break */}
            <ArticleVisualBreak text={detail.visualBreakText} />

            {/* 10. Section 03: Motion with Purpose */}
            <MotionSection
              id="section-motion"
              headline={detail.motionHeadline}
              paragraphs={detail.motionParagraphs}
              setCursorType={setCursorType}
            />

            {/* 11. Section 04: Five Principles */}
            <PrinciplesSection
              id="section-principles"
              principles={detail.principles}
            />

            {/* 12. Full-Width Statement Quote */}
            <StatementQuote
              line1={detail.statementQuote.line1}
              line2={detail.statementQuote.line2}
            />

            {/* 13. Section 05: Conclusion */}
            <ConclusionSection
              id="section-conclusion"
              headline={detail.conclusionHeadline}
              paragraphs={detail.conclusionParagraphs}
              finalQuote={detail.conclusionFinalQuote}
            />

            {/* 14. Author Section */}
            <ArticleAuthor
              authorName={article.author}
              role="Ideas, perspectives and observations from the people shaping our work."
            />
          </div>

          {/* Right Column: Sticky Article Actions & Share */}
          <aside className="lg:col-span-3 space-y-8 lg:sticky lg:top-32">
            <ShareArticle
              articleTitle={article.title}
              setCursorType={setCursorType}
            />

            <div className="p-6 bg-white/[0.02] border border-white/10 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] font-semibold block">
                CITATION NOTE
              </span>
              <p className="font-body text-xs text-[#888888] font-light leading-relaxed">
                Published in the Studio Editorial Monograph, Vol. IV (2026). All critical essays are peer-reviewed by the studio design collective.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* 16. Related Articles */}
      <RelatedArticles
        articles={relatedArticles}
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 17. Dynamic Previous / Next Article Navigation Footer */}
      <ArticleNavigationFooter
        previous={previous}
        next={next}
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 18. Final CTA */}
      <ArticleCTA
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 cursor-zoom-out backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 border border-white/20 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="High resolution view"
              className="max-w-full max-h-[85vh] object-contain border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
