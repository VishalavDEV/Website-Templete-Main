import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Bookmark, Share2, ArrowLeft, Clock, Calendar, Check, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { useApp } from '../context/AppContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { NotFoundPage } from './NotFoundPage';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useApp();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const article = ARTICLES.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} — AGROTECH AI`;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, article]);

  if (!article) {
    return <NotFoundPage />;
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedArticles = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="min-h-screen pt-28 pb-20 bg-theme-primary">
      {/* Top Fixed Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-800">
        <div
          className="h-full bg-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-theme-muted hover:text-emerald-400 transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Magazine
        </button>

        {/* Category Badge & Metadata */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono-tech text-xs uppercase tracking-widest font-bold">
              {article.category}
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-theme-surface border border-neutral-800 text-theme-primary hover:text-emerald-400 transition-colors shadow-xs relative"
                title="Share Article URL"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                {copied && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-mono-tech px-2 py-0.5 rounded whitespace-nowrap z-20">
                    Link Copied!
                  </span>
                )}
              </button>

              <button
                onClick={() => toggleBookmark(article.slug)}
                className="p-2.5 rounded-full bg-theme-surface border border-neutral-800 text-theme-primary hover:text-emerald-400 transition-colors shadow-xs"
                title="Bookmark Article"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(article.slug) ? 'fill-emerald-400 text-emerald-400' : ''}`} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Title & Subtitle */}
        <ScrollReveal delay={100}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-editorial font-bold text-theme-primary tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-lg sm:text-xl text-theme-secondary font-serif-editorial italic leading-relaxed mb-8">
              {article.subtitle}
            </p>
          )}
        </ScrollReveal>

        {/* Author & Timestamp Bar */}
        <ScrollReveal delay={150}>
          <div className="py-5 sm:py-6 border-y border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
            <div className="flex items-center space-x-3.5 sm:space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-400 block"
              />
              <div>
                <h4 className="font-serif-editorial font-bold text-sm text-theme-primary">
                  {article.author.name}
                </h4>
                <span className="text-xs text-theme-muted font-sans block">
                  {article.author.role}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs font-mono-tech text-theme-muted flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-1 pt-2 sm:pt-0 border-t sm:border-none border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-center gap-1.5 justify-end">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {article.date}
              </div>
              <div className="flex items-center gap-1.5 justify-end text-emerald-700 dark:text-emerald-400 font-semibold">
                <Clock className="w-3.5 h-3.5" /> {article.readingTime}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Hero Image */}
        <ScrollReveal delay={200}>
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border border-neutral-800 block">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              priority
              caption={`Editorial Visual: ${article.title}`}
              credit="AGROTECH AI ARCHIVES"
              className="w-full aspect-[16/9] object-cover block"
            />
          </div>
        </ScrollReveal>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 font-sans leading-relaxed text-theme-primary">
          <ScrollReveal delay={250}>
            <p className="drop-cap text-lg sm:text-xl text-theme-primary leading-relaxed font-normal">
              {article.content.lead}
            </p>
          </ScrollReveal>

          {/* Highlighted Statistics Cards */}
          {article.content.stats && (
            <ScrollReveal delay={300}>
              <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
                {article.content.stats.map((s, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-theme-surface border border-emerald-700/30 shadow-md">
                    <span className="text-[10px] font-mono-tech text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                      {s.label}
                    </span>
                    <span className="text-3xl font-mono-tech font-extrabold text-emerald-300 block mb-1">
                      {s.value}
                    </span>
                    <p className="text-xs text-theme-secondary font-sans">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Article Sections */}
          {article.content.sections.map((section, idx) => (
            <ScrollReveal key={idx} delay={100}>
              <div className="space-y-6">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-theme-primary pt-4 border-t border-neutral-800">
                    {section.heading}
                  </h2>
                )}

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-theme-primary">
                    {p}
                  </p>
                ))}

                {/* Pull Quote */}
                {section.quote && (
                  <blockquote className="my-8 p-8 rounded-3xl bg-forest-950 text-white border-l-4 border-emerald-500 not-prose shadow-xl">
                    <p className="text-xl sm:text-2xl font-serif-editorial italic mb-4 leading-relaxed text-white">
                      "{section.quote.text}"
                    </p>
                    <cite className="text-xs font-mono-tech text-emerald-400 not-italic uppercase tracking-widest block font-bold">
                      — {section.quote.author}
                    </cite>
                  </blockquote>
                )}

                {/* Embedded Section Image */}
                {section.image && (
                  <div className="my-8 not-prose rounded-2xl overflow-hidden border border-neutral-800 shadow-md block">
                    <ImageWithFallback
                      src={section.image.url}
                      alt={section.image.caption}
                      caption={section.image.caption}
                      credit={section.image.credit}
                      className="w-full aspect-video object-cover block"
                    />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tags */}
        <ScrollReveal delay={100}>
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono-tech text-theme-muted uppercase tracking-widest mr-2 font-bold">TOPICS:</span>
            {article.tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-theme-muted text-xs font-mono-tech text-theme-secondary font-medium">
                #{t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Continue Exploring Related Stories */}
        <ScrollReveal delay={150}>
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <h3 className="text-2xl font-serif-editorial font-bold text-theme-primary mb-8">
              Continue Exploring Related Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel, idx) => (
                <ScrollReveal key={rel.id} delay={idx * 100}>
                  <div
                    onClick={() => navigate(`/article/${rel.slug}`)}
                    className="group cursor-pointer p-5 rounded-2xl bg-theme-surface border border-neutral-800 hover:border-emerald-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="aspect-video rounded-xl overflow-hidden mb-3 block">
                        <ImageWithFallback src={rel.image} alt={rel.title} className="w-full h-full object-cover block" />
                      </div>
                      <span className="text-[10px] font-mono-tech text-emerald-400 uppercase tracking-widest block mb-1 font-bold">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-serif-editorial font-bold text-theme-primary line-clamp-2 group-hover:text-emerald-400 transition-colors">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono-tech text-theme-muted">
                      <span>{rel.readingTime}</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        READ <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
};
