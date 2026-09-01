import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Clock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Check,
  Compass
} from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { useAppContext } from '../../store/AppContext';
import { Article } from '../../types';
import { StoryCard } from '../../components/StoryCard/StoryCard';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark, showToast, setActiveReadingProgress } = useAppContext();

  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadArticle = async () => {
      if (!slug) return;
      const found = await mockApi.getArticleBySlug(slug);
      const all = await mockApi.getArticles();
      if (isMounted) {
        if (!found) {
          navigate('/explore', { replace: true });
          return;
        }
        setArticle(found);
        setAllArticles(all);
        const related = await mockApi.getRelatedArticles(slug, 3);
        if (isMounted) setRelatedArticles(related);
      }
    };

    loadArticle();
    return () => {
      isMounted = false;
    };
  }, [slug, navigate]);

  // Scroll reading progress calculation & section tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(currentProgress);
        setActiveReadingProgress(currentProgress);
      }

      if (article?.bodySections) {
        for (const sec of article.bodySections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSectionId(sec.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, setActiveReadingProgress]);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#c98a3e] border-t-transparent animate-spin mx-auto" />
          <p className="font-mono text-xs text-[#a8a49c] uppercase tracking-widest">
            LOADING EXPEDITION DOSSIER...
          </p>
        </div>
      </div>
    );
  }

  const saved = isBookmarked(article.slug);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    showToast('Dispatch URL copied to clipboard.', 'success');
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Find next/previous article
  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex !== -1 && currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  return (
    <article className="min-h-screen pt-24 sm:pt-28 pb-20 select-none">
      
      {/* Top Floating Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#c98a3e] to-[#e0a358] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left mb-10">
        
        {/* Breadcrumb / Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <Link
            to={`/${article.category}`}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-[0.25em] uppercase hover:bg-[#c98a3e] hover:text-black transition-all"
          >
            <span>{article.categoryName}</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-[#a8a49c]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#e0a358]" />
              {article.readingTime}
            </span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Huge Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          {article.title}
        </h1>

        {/* Subtitle / Dek */}
        <p className="font-sans text-base sm:text-xl text-[#d1c7b7] font-light leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Byline & Control Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-white/20"
            />
            <div className="text-left">
              <div className="font-sans text-sm font-semibold text-white">
                {article.author.name}
              </div>
              <div className="text-[11px] font-mono text-[#a8a49c]">
                {article.author.role} · {article.author.location}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              aria-label="Toggle audio narration"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                isPlayingAudio
                  ? 'bg-[#c98a3e] text-black border-[#c98a3e] font-bold'
                  : 'bg-[#141619] text-[#d1c7b7] border-white/15 hover:text-white'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>PLAYING AUDIO</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#a8a49c]" />
                  <span>LISTEN (12 MIN)</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleBookmark(article.slug, article.title)}
              aria-label={saved ? 'Remove bookmark' : 'Save story'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                saved
                  ? 'bg-[#c98a3e] text-black border-[#c98a3e] font-bold'
                  : 'bg-[#141619] text-[#d1c7b7] border-white/15 hover:text-white'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{saved ? 'SAVED' : 'SAVE'}</span>
            </button>

            <button
              onClick={handleShare}
              aria-label="Share story link"
              className="p-2 rounded-full bg-[#141619] border border-white/15 text-[#d1c7b7] hover:text-white transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#34d399]" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt || article.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {(article.heroCaption || article.heroCredit) && (
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-sans text-[#a8a49c] gap-1 px-1">
            <span className="italic">{article.heroCaption}</span>
            {article.heroCredit && (
              <span className="font-mono text-[10px] tracking-wider text-[#d1c7b7] uppercase shrink-0">
                PHOTOGRAPH: {article.heroCredit}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Article Body and Sticky Table of Contents Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-6 p-5 rounded-2xl bg-[#141619] border border-white/10">
            <div className="font-mono text-[10px] tracking-[0.25em] text-[#e0a358] uppercase font-bold">
              TABLE OF CONTENTS
            </div>
            <nav className="space-y-2 text-xs font-sans">
              {article.bodySections.map((sec, idx) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`block py-1 transition-colors leading-snug ${
                    activeSectionId === sec.id
                      ? 'text-[#e0a358] font-bold pl-2 border-l-2 border-[#c98a3e]'
                      : 'text-[#a8a49c] hover:text-white'
                  }`}
                >
                  0{idx + 1}. {sec.heading || `Section ${idx + 1}`}
                </a>
              ))}
            </nav>

            {article.location && (
              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="font-mono text-[9px] text-[#a8a49c] uppercase">LOCATION</div>
                <div className="flex items-center gap-1.5 text-xs text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#c98a3e]" />
                  <span>{article.location}</span>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Center Article Content Stream */}
        <main className="lg:col-span-9 max-w-3xl space-y-10">
          
          {/* Audio Player Card if Playing */}
          {isPlayingAudio && (
            <div className="p-4 rounded-xl bg-[#1a1e24] border border-[#c98a3e]/40 flex items-center justify-between text-xs animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#c98a3e] animate-ping" />
                <span className="font-mono text-white">Simulated Audio Narration: Active</span>
              </div>
              <span className="font-mono text-[#e0a358]">VOICE: NARRATIVE PRO (ENGLISH)</span>
            </div>
          )}

          {/* Body Sections */}
          {article.bodySections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-6 pt-4">
              {sec.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                  {sec.heading}
                </h2>
              )}

              {sec.content.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="font-sans text-base sm:text-lg text-[#e5e2dc] leading-[1.8] font-light"
                >
                  {p}
                </p>
              ))}

              {/* In-Article Photographic Feature */}
              {sec.image && (
                <figure className="my-8 space-y-2">
                  <div className="rounded-xl overflow-hidden border border-white/15 aspect-[16/10]">
                    <img
                      src={sec.image.url}
                      alt={sec.image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#a8a49c] gap-1 px-1">
                    <span>{sec.image.caption}</span>
                    {sec.image.credit && (
                      <span className="font-mono text-[10px] text-[#d1c7b7] uppercase">
                        PHOTO: {sec.image.credit}
                      </span>
                    )}
                  </figcaption>
                </figure>
              )}

              {/* Pull Quote */}
              {sec.pullQuote && (
                <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-[#141619] border-l-4 border-[#c98a3e] space-y-2">
                  <p className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed">
                    "{sec.pullQuote.quote}"
                  </p>
                  {sec.pullQuote.author && (
                    <cite className="font-mono text-xs text-[#e0a358] uppercase not-italic block pt-1">
                      — {sec.pullQuote.author}
                    </cite>
                  )}
                </blockquote>
              )}

              {/* Callout Info Box */}
              {sec.callout && (
                <div className="my-8 p-6 rounded-2xl bg-[#111317] border border-white/15 space-y-2">
                  <h4 className="font-mono text-xs font-bold text-[#e0a358] tracking-widest uppercase">
                    {sec.callout.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#d1c7b7] leading-relaxed">
                    {sec.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-white/10">
            <div className="font-mono text-[10px] tracking-widest text-[#a8a49c] uppercase mb-3">
              TAGS & SUBJECT INDEX:
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#141619] border border-white/10 text-xs font-mono text-[#d1c7b7]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Deep Bio Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141619] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border border-white/20 shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono text-[#e0a358] uppercase tracking-wider block">
                WRITTEN BY
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {article.author.name}
              </h3>
              <p className="font-sans text-xs text-[#d1c7b7] leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>

          {/* Next / Previous Story Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            {prevArticle ? (
              <Link
                to={`/story/${prevArticle.slug}`}
                className="p-4 rounded-xl bg-[#141619] border border-white/10 hover:border-white/25 transition-all text-left group"
              >
                <div className="flex items-center gap-1 text-[10px] font-mono text-[#a8a49c] uppercase mb-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  <span>PREVIOUS DISPATCH</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#e0a358] line-clamp-1">
                  {prevArticle.title}
                </h4>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link
                to={`/story/${nextArticle.slug}`}
                className="p-4 rounded-xl bg-[#141619] border border-white/10 hover:border-white/25 transition-all text-right group"
              >
                <div className="flex items-center justify-end gap-1 text-[10px] font-mono text-[#a8a49c] uppercase mb-1">
                  <span>NEXT DISPATCH</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#e0a358] line-clamp-1">
                  {nextArticle.title}
                </h4>
              </Link>
            ) : <div />}
          </div>
        </main>
      </div>

      {/* Related Stories Grid */}
      {relatedArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-white/10">
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase block mb-1">
              FURTHER INQUIRY
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              RELATED DISPATCHES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <StoryCard key={rel.id} article={rel} variant="secondary" />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Newsletter />
      </div>
    </article>
  );
};
