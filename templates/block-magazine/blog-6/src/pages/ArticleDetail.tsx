import React, { memo, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Bookmark, Clock, Share2, Headphones, Check, Type, ArrowUpRight } from 'lucide-react';
import { ArticleData, ARTICLES_DATA } from '../data/articles';
import { SlideInQuote } from '../components/article/SlideInQuote';
import { ParallaxGallery } from '../components/article/ParallaxGallery';
import { KeyTakeaways } from '../components/article/KeyTakeaways';
import { DynamicImage } from '../components/ui/DynamicImage';

export interface ArticleDetailProps {
  article: ArticleData;
  onBack: () => void;
  onSelectArticle?: (article: ArticleData) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = memo(({ article, onBack, onSelectArticle }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article.id]);

  // Reading progress bar with smooth dampening
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFontSize = () => {
    setFontSizeMultiplier((prev) => (prev === 1 ? 1.12 : 1));
  };

  const relatedArticles = Object.values(ARTICLES_DATA).filter((a) => a.id !== article.id);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen pb-20 sm:pb-24 text-slate-900 overflow-x-clip"
    >
      {/* Top Reading Progress Bar (Fixed DOM-based) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 origin-left z-50 shadow-sm pointer-events-none"
      />

      {/* Top Navigation Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          aria-label="Back to magazine feed"
          className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100/90 hover:bg-blue-50 text-slate-800 hover:text-blue-600 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border border-slate-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Dispatches</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleFontSize}
            aria-label="Toggle typography scale"
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 transition-colors border border-slate-200 text-xs font-mono cursor-pointer"
            title="Adjust reading text size"
          >
            <Type className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">{fontSizeMultiplier === 1 ? '100%' : '112%'}</span>
          </button>

          <button
            onClick={handleShare}
            aria-label="Share article"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors border border-slate-200 text-xs cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            aria-label="Bookmark article"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors border shadow-xs cursor-pointer ${
              bookmarked
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Article Header & Metadata */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <motion.span
            layoutId={`article-badge-${article.id}`}
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200/60 shadow-xs"
          >
            {article.category}
          </motion.span>
          <span className="text-xs font-mono text-slate-400">•</span>
          <span className="text-[11px] sm:text-xs font-mono text-slate-500 font-semibold">{article.issueVol}</span>
          <span className="text-xs font-mono text-slate-400">•</span>
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-slate-500">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Morphing Shared Title */}
        <motion.h1
          layoutId={`article-title-${article.id}`}
          className="type-h1 font-display font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4 sm:mb-6"
        >
          {article.title}
        </motion.h1>

        {article.subtitle && (
          <p className="type-lead text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8">
            {article.subtitle}
          </p>
        )}

        {/* Author Bio Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/70 shadow-xs">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-blue-500/20 shadow-xs"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm text-slate-900">{article.author.name}</span>
              <span className="text-[11px] sm:text-xs text-slate-500">{article.author.role}</span>
            </div>
          </div>
          <div className="text-right text-[10px] sm:text-xs font-mono text-slate-400">
            <span>Published on {article.publishDate}</span>
          </div>
        </div>
      </header>

      {/* Morphing Shared Hero Cover Image Stage */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] min-h-[280px] max-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 gpu-layer">
          <DynamicImage
            src={article.coverImage}
            alt={article.title}
            fallbackKey={article.id}
            priority={true}
            layoutId={`article-img-${article.id}`}
            className="w-full h-full object-cover"
            containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
            overlay={
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {article.imageCaption && (
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/45 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-white/95 text-[10px] sm:text-xs font-mono z-10">
                    {article.imageCaption}
                  </div>
                )}
              </>
            }
          />
        </div>
      </div>

      {/* Optimal Line Length Reader Container */}
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 font-sans"
        style={{ fontSize: `${fontSizeMultiplier}rem` }}
      >
        {/* Audio Narration Teaser Bar */}
        {article.audioTrack && (
          <div className="mb-8 sm:mb-10 p-3.5 sm:p-4 rounded-2xl glass-card-airy bg-white/95 border border-slate-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                aria-label="Toggle Audio"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 flex-shrink-0 cursor-pointer"
              >
                <Headphones className="w-4 h-4" />
              </button>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">
                  {isPlayingAudio ? 'Streaming Audio Dispatch...' : 'Listen to Audio Edition'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {article.audioTrack.narrator} • {article.audioTrack.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-0.5 sm:gap-1">
              {[40, 80, 100, 60, 90, 45, 75, 30].map((h, i) => (
                <span
                  key={i}
                  className={`w-0.5 sm:w-1 rounded-full transition-all ${
                    isPlayingAudio ? 'bg-blue-600 animate-pulse' : 'bg-slate-300'
                  }`}
                  style={{ height: isPlayingAudio ? `${h}%` : '40%' }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Key Takeaways Card */}
        <KeyTakeaways />

        {/* Lead Introduction with Drop Cap */}
        <p className="type-lead text-slate-700 leading-[1.8] mb-6 sm:mb-8 first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-display first-letter:font-extrabold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          {article.content.intro}
        </p>

        {/* Scroll-Triggered Slide-In Pullquote */}
        {article.quote && (
          <SlideInQuote
            quote={article.quote.text}
            author={article.quote.author}
            theme={article.categoryTheme}
          />
        )}

        {/* Long-Form Content Sections with Dynamic Images */}
        {article.content.sections.map((section, idx) => (
          <section key={idx} className="my-8 sm:my-10">
            <h2 className="type-h2 font-display font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((paragraph, pIdx) => (
              <p key={pIdx} className="type-body text-slate-700 leading-[1.8] mb-5 sm:mb-6">
                {paragraph}
              </p>
            ))}

            {section.secondaryImage && (
              <div className="my-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/9]">
                <DynamicImage
                  src={section.secondaryImage}
                  alt={section.imageCaption || section.heading}
                  fallbackKey={article.category}
                  className="w-full h-full object-cover"
                  overlay={
                    section.imageCaption ? (
                      <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl text-white/90 text-[10px] sm:text-xs font-mono">
                        {section.imageCaption}
                      </div>
                    ) : undefined
                  }
                />
              </div>
            )}
          </section>
        ))}

        {/* Full-Bleed Parallax Image Gallery */}
        <ParallaxGallery />

        {/* Conclusion */}
        <div className="my-8 sm:my-10 pt-6 border-t border-slate-200">
          <p className="type-lead text-slate-800 italic font-serif leading-[1.8]">
            {article.content.conclusion}
          </p>
        </div>

        {/* Author Bio Box */}
        <div className="my-10 sm:my-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card-airy bg-white border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover ring-4 ring-blue-500/20 flex-shrink-0"
            loading="lazy"
          />
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              About the Author
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-1.5 sm:mb-2">
              {article.author.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3 sm:mb-4">
              {article.author.bio}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-xs font-mono text-blue-600">
              <a href="#author-archive" className="hover:underline">View Author Archive</a>
              <span>•</span>
              <a href="#follow" className="hover:underline">Follow Researcher</a>
            </div>
          </div>
        </div>

        {/* Related Stories Strip */}
        <div className="my-10 sm:my-14 pt-8 sm:pt-10 border-t border-slate-200">
          <h3 className="type-h3 font-display font-bold text-slate-900 mb-4 sm:mb-6">
            Continue Reading from Issue 08
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {relatedArticles.slice(0, 2).map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle && onSelectArticle(rel)}
                className="group p-4 rounded-2xl glass-card-airy bg-white border border-slate-200 cursor-pointer flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 shadow-xs">
                  <DynamicImage
                    src={rel.coverImage}
                    alt={rel.title}
                    fallbackKey={rel.id}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                  <span>{rel.readTime}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return to Feed CTA Button */}
        <div className="text-center pt-4 sm:pt-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs sm:text-sm tracking-tight shadow-xl hover:shadow-blue-500/25 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Magazine Feed</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
});

ArticleDetail.displayName = 'ArticleDetail';
