import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useMagazine } from '../context/MagazineContext';
import { getArticleBySlug, ALL_ACHIEVEMENTS } from '../data/fashionData';
import DopamineBadge from '../components/common/DopamineBadge';
import MaximalistButton from '../components/common/MaximalistButton';
import { 
  ArrowLeft, Heart, Sparkles, Trophy, Bookmark, Share2, 
  ShieldCheck, Flame, Zap, ArrowUpRight, Cpu, Clock, Calendar,
  Star, Volume2, MessageSquare, Send, Check, Tag
} from 'lucide-react';
import clsx from 'clsx';

export function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const { setSelectedCategory, isSaved, toggleSaveArticle, triggerDopamineConfetti } = useMagazine();
  const navigate = useNavigate();
  
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(article.likesCount || 890);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      author: 'Nova K.',
      role: 'Parsons Design Fellow',
      time: '2h ago',
      text: 'The structural integrity of this bio-matrix is unbelievable. Saw the Paris walk live and the luminescence was completely hypnotic under blacklight!',
      badge: 'VERIFIED CURATOR'
    },
    {
      id: 2,
      author: 'KAI_Tokyo',
      role: 'Cyber-Dolls Archive',
      time: '5h ago',
      text: 'Finally moving away from static petrochemical fabrics. 10/10 execution on the memory alloy pleating contours.',
      badge: 'TOP REVIEW'
    }
  ]);

  // Scroll reading progress bar calculation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001
  });

  const [readingPercent, setReadingPercent] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadingPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

  const isBookmarked = isSaved(article.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    triggerDopamineConfetti(0.8, 0.2);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLike = (e) => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      const rect = e.currentTarget.getBoundingClientRect();
      triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    }
  };

  const handleCategoryNav = (catId) => {
    setSelectedCategory(catId);
    navigate('/');
    setTimeout(() => {
      document.getElementById('category-archive-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: Date.now(),
      author: 'Guest Curator',
      role: 'Fashion Enthusiast',
      time: 'Just now',
      text: commentText.trim(),
      badge: 'COMMUNITY'
    };
    setCommentsList([newComment, ...commentsList]);
    setCommentText('');
    triggerDopamineConfetti();
  };

  // Find related articles (prioritizing same category, excluding current)
  const sameCategoryArticles = ALL_ACHIEVEMENTS.filter((item) => item.slug !== article.slug && item.category === article.category);
  const otherCategoryArticles = ALL_ACHIEVEMENTS.filter((item) => item.slug !== article.slug && item.category !== article.category);
  const relatedArticles = [...sameCategoryArticles, ...otherCategoryArticles].slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative space-y-12 pb-24 select-none"
    >
      {/* -------------------------------------------------------------
          THICK NEON SCROLL PROGRESS BAR (STICKY WITH LIVE READOUT)
          ------------------------------------------------------------- */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <motion.div
          style={{ scaleX }}
          className="h-2.5 bg-[#FF007A] border-b-2 border-[#0A0A0E] origin-left shadow-[0_2px_8px_rgba(255,0,122,0.6)]"
        />
        <div className="absolute top-3 right-4 bg-[#0A0A0E] text-[#10FF70] font-mono text-[10px] font-black px-2 py-0.5 border border-[#10FF70] shadow-[2px_2px_0px_#0A0A0E]">
          {readingPercent}% READ
        </div>
      </div>

      {/* Top Action & Navigation Bar */}
      <div className="flex items-center justify-between border-b-3 border-[#0A0A0E] pb-4 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#FFEBF3] text-[#0A0A0E] font-heading font-black text-xs uppercase tracking-wider border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] hover:shadow-[5px_5px_0px_#FF007A] active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>BACK TO ALL GRAILS</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#EBF4FF] text-[#0A0A0E] font-mono text-xs font-black border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'LINK COPIED!' : 'SHARE CITATION'}</span>
          </button>

          <button
            onClick={() => toggleSaveArticle(article.id)}
            className={clsx(
              "flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs font-black border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] transition-all cursor-pointer",
              isBookmarked ? "bg-[#FF007A] text-white" : "bg-white text-[#0A0A0E] hover:bg-[#FFEBF3]"
            )}
          >
            <Bookmark className={clsx("w-3.5 h-3.5", isBookmarked && "fill-current")} />
            <span>{isBookmarked ? 'SAVED' : 'SAVE'}</span>
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          ARTICLE HEADER WITH MORPHING TITLES & BADGES
          ------------------------------------------------------------- */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {/* Clickable Category Badge */}
          <button
            onClick={() => handleCategoryNav(article.category)}
            className="cursor-pointer group flex items-center gap-1"
            title={`View all ${article.categoryName} drops`}
          >
            <motion.div layoutId={`article-badge-${article.slug}`}>
              <DopamineBadge variant={article.badgeVariant || 'pink'} size="md">
                {article.tag || article.categoryName}
              </DopamineBadge>
            </motion.div>
          </button>

          <button
            onClick={() => handleCategoryNav(article.category)}
            className="bg-[#0A0A0E] hover:bg-[#FF007A] text-[#10FF70] hover:text-white font-mono text-xs font-black px-2.5 py-1 border border-[#0A0A0E] transition-colors cursor-pointer"
          >
            CATEGORY: {article.categoryName?.toUpperCase()} ↗
          </button>

          <span className="font-mono text-xs text-[#626470] flex items-center gap-1 ml-auto">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <motion.h1
          layoutId={`article-title-${article.slug}`}
          className="text-fluid-hero font-display-serif font-black tracking-tight text-[#0A0A0E] leading-[0.96] uppercase"
        >
          {article.title}
        </motion.h1>

        <p className="font-brutal-body text-fluid-body-lg text-[#2C2D35] font-semibold leading-relaxed max-w-4xl">
          {article.subtitle || article.excerpt}
        </p>

        {/* Lead Designer & Award Credentials Banner */}
        <div className="p-4 sm:p-5 bg-[#FFFDF8] border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={article.designerAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"}
              alt={article.designer}
              className="w-12 h-12 rounded-none border-2 border-[#0A0A0E] object-cover shadow-[2px_2px_0px_#0A0A0E]"
            />
            <div>
              <div className="text-[10px] font-mono font-bold text-[#626470] uppercase">LEAD DESIGNER / ATELIER</div>
              <div className="font-heading font-black text-base text-[#0A0A0E]">{article.designer}</div>
              <div className="font-mono text-xs text-[#626470]">{article.designerRole || 'Avant-Garde Collective'}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-l-2 border-[#0A0A0E] pl-4 sm:pl-6">
            <div>
              <div className="text-[10px] font-mono font-bold text-[#626470] uppercase">GLOBAL HONORS</div>
              <div className="font-heading font-black text-sm text-[#FF007A]">{article.award}</div>
            </div>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------
          EDITORIAL HERO IMAGE WITH PINNED ROTATING STICKERS
          ------------------------------------------------------------- */}
      <div className="relative">
        <motion.div
          layoutId={`article-image-${article.slug}`}
          className="relative bg-white border-3.5 border-[#0A0A0E] shadow-[10px_10px_0px_#FF007A] overflow-hidden"
        >
          <img
            src={article.coverImage || article.image}
            alt={article.title}
            className="w-full max-h-[550px] object-cover object-center"
          />

          {/* Bottom Specs Ribbon */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0A0A0E] text-white p-3 border-2 border-white font-mono text-xs flex items-center justify-between sm:justify-start gap-4">
            <div>
              <span className="text-[#10FF70] font-black">★ IMPACT SCORE:</span> {article.stats?.impactScore || article.score} / 100
            </div>
            <span className="text-neutral-500">|</span>
            <div>
              <span className="text-[#FFE600] font-black">PATENT:</span> {article.stats?.patentId || 'PCT/2026/FASHION'}
            </div>
          </div>
        </motion.div>

        {/* Pinned Rotating Digital Sticker 1: Spinning Star */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-[#FFE600] rounded-full border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] flex items-center justify-center pointer-events-none"
        >
          <Star className="w-8 h-8 fill-[#FF007A] text-[#0A0A0E]" />
        </motion.div>

        {/* Pinned Digital Sticker 2: Trending / Verified Washi Tape */}
        <div className="absolute -bottom-4 -left-4 z-20 rotate-[-5deg]">
          <span className="bg-[#10FF70] text-[#0A0A0E] font-mono text-xs font-black px-4 py-1.5 border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] uppercase tracking-wider block">
            {article.hiddenSticker || 'AUTHENTICATED GRAIL ⚡'}
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          MAIN SCRAPBOOK READING LAYOUT & EDITORIAL COLLAGE
          ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
        
        {/* Left Column: Long-Form Copy with Drop-Cap and Breakouts */}
        <article className="lg:col-span-8 space-y-10 font-brutal-body text-[#0A0A0E]">
          
          {/* Opening Paragraph with Massive Stylized Drop-Cap */}
          <div className="relative">
            <p className="text-fluid-body-lg text-[#0A0A0E] leading-relaxed font-normal">
              <span className="float-left font-display-serif text-6xl sm:text-8xl font-black text-[#FF007A] leading-[0.8] mr-4 mb-2 p-3 bg-[#FFEBF3] border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] select-none">
                {article.excerpt ? article.excerpt.charAt(0) : 'W'}
              </span>
              {article.excerpt ? article.excerpt.slice(1) : ''}
            </p>
          </div>

          {/* Overlapping Floating Quote Block (Scrapbook Breakout) */}
          {article.pullQuote && (
            <div className="relative z-20 my-8 p-6 sm:p-8 bg-[#FFFBE6] border-3.5 border-[#0A0A0E] shadow-[8px_8px_0px_#0047FF] rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="absolute -top-3 left-6 bg-[#0047FF] text-white font-mono text-[10px] font-black px-2.5 py-0.5 border border-[#0A0A0E] uppercase tracking-widest">
                // OFFICIAL CITATION QUOTE
              </div>
              <p className="font-display-serif text-xl sm:text-2xl font-bold leading-snug text-[#0A0A0E] pt-2">
                "{article.pullQuote}"
              </p>
              <div className="mt-4 font-mono text-xs font-black text-[#FF007A] uppercase flex items-center justify-between">
                <span>— {article.designer}</span>
                <span className="text-[#626470]">PARIS MANIFESTO</span>
              </div>
            </div>
          )}

          {/* Formatted Article Sections */}
          {article.sections && article.sections.map((section, idx) => (
            <div key={section.id} className="space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-[#0A0A0E] pb-2">
                <div className="w-3 h-3 bg-[#FF007A] border border-[#0A0A0E]" />
                <h2 className="font-display-y2k text-xl sm:text-2xl font-black text-[#0A0A0E] uppercase tracking-tight">
                  {section.heading}
                </h2>
              </div>
              <div className="font-body text-base sm:text-lg text-[#2C2D35] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>

              {/* Injected Scrapbook Polaroid Breakout on Section 1 */}
              {idx === 0 && article.detailImage1 && (
                <div className="my-8 p-4 bg-white border-3 border-[#0A0A0E] shadow-[6px_6px_0px_#10FF70] rotate-[1.5deg] hover:rotate-0 transition-transform">
                  <div className="relative h-64 sm:h-80 overflow-hidden border-2 border-[#0A0A0E]">
                    <img
                      src={article.detailImage1}
                      alt="Laboratory Close-up Detail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-[#10FF70] text-[#0A0A0E] font-mono text-[10px] font-black px-2 py-0.5 border border-[#0A0A0E]">
                      MICRO-SCAN 500X
                    </div>
                  </div>
                  <div className="pt-3 flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#0A0A0E]">FIG. 01 — HIGH RESOLUTION STRUCTURAL SCAN</span>
                    <span className="text-[#FF007A] font-black">ARCHIVE REF #99</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Audio Runway Snippet Player */}
          <div className="p-5 bg-[#FAFAFD] border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A0A0E] text-[#FFE600] flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-y2k text-xs font-black uppercase text-[#0A0A0E]">
                  RUNWAY AMBIENT AUDIO TRACK
                </div>
                <div className="font-mono text-[11px] text-[#626470]">
                  PARIS GRAND PALAIS LIVE RECORDING (03:42)
                </div>
              </div>
            </div>
            <button
              onClick={() => triggerDopamineConfetti()}
              className="px-4 py-2 bg-[#FFE600] hover:bg-[#FFF033] text-[#0A0A0E] font-heading font-black text-xs uppercase border-2 border-[#0A0A0E] shadow-[2px_2px_0px_#0A0A0E] cursor-pointer"
            >
              PLAY AUDIO
            </button>
          </div>

          {/* Interactive Dopamine Like & Reaction Bar */}
          <div className="pt-8 border-t-3 border-[#0A0A0E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={clsx(
                  "flex items-center gap-2 px-5 py-3 border-2 border-[#0A0A0E] font-heading font-black text-sm uppercase tracking-wider transition-all cursor-pointer select-none",
                  hasLiked
                    ? "bg-[#FF007A] text-white shadow-[4px_4px_0px_#0A0A0E]"
                    : "bg-[#FFFBE6] text-[#0A0A0E] hover:bg-[#FFE600] shadow-[3px_3px_0px_#0A0A0E]"
                )}
              >
                <Flame className={clsx("w-4 h-4", hasLiked ? "fill-white" : "text-[#FF5500]")} />
                <span>{likes} HYPED</span>
              </button>

              <MaximalistButton
                variant="accent"
                size="md"
                icon={Sparkles}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
                }}
              >
                CELEBRATE
              </MaximalistButton>
            </div>

            <span className="font-mono text-xs font-bold text-[#626470]">
              PEER-REVIEWED IN FASHION ARCHIVE 2026
            </span>
          </div>

          {/* -------------------------------------------------------------
              COMMUNITY CURATOR COMMENTS / SCRAPBOOK DISCUSSION
              ------------------------------------------------------------- */}
          <section className="pt-10 border-t-3 border-[#0A0A0E] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0047FF]" />
                <h3 className="font-y2k font-black text-lg uppercase text-[#0A0A0E]">
                  CURATOR DISCUSSION ({commentsList.length})
                </h3>
              </div>
              <DopamineBadge variant="blue" size="sm">LIVE FORUM</DopamineBadge>
            </div>

            {/* Comment Post Form */}
            <form onSubmit={handleAddComment} className="p-4 bg-white border-2 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] space-y-3">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Log your critique or peer citation..."
                rows={3}
                className="w-full p-3 font-mono text-xs border-2 border-[#0A0A0E] focus:outline-none focus:bg-[#FFEBF3] resize-none"
              />
              <div className="flex justify-end">
                <MaximalistButton
                  type="submit"
                  variant="primary"
                  size="sm"
                  icon={Send}
                  iconPosition="right"
                >
                  POST CITATION
                </MaximalistButton>
              </div>
            </form>

            {/* Existing Comments List */}
            <div className="space-y-4">
              {commentsList.map((c) => (
                <div key={c.id} className="p-4 bg-[#FFFDF8] border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E] space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-[#0A0A0E]">{c.author}</span>
                      <span className="text-[#626470] text-[10px]">({c.role})</span>
                    </div>
                    <span className="bg-[#FFE600] px-2 py-0.5 border border-[#0A0A0E] text-[10px] font-black">
                      {c.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#2C2D35] leading-relaxed">
                    {c.text}
                  </p>
                  <div className="text-[10px] font-mono text-[#626470] text-right">
                    {c.time}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Right Sidebar: Technical Specs & Fast Facts */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Material & Engineering Spec Sheet */}
          <div className="p-6 bg-white border-3 border-[#0A0A0E] shadow-[6px_6px_0px_#0047FF] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-[#0A0A0E] pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0047FF]" />
                <h3 className="font-y2k font-black text-sm uppercase text-[#0A0A0E]">SPECIFICATIONS</h3>
              </div>
              <DopamineBadge variant="blue" size="sm">VERIFIED</DopamineBadge>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {article.specs && article.specs.map((spec, i) => (
                <div key={i} className="p-2.5 bg-[#FAFAFD] border border-[#E2E4EB] space-y-0.5">
                  <div className="text-[10px] text-[#626470] uppercase font-bold">{spec.label}</div>
                  <div className="font-black text-[#0A0A0E]">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Citation Certificate Stamp */}
          <div className="p-5 bg-[#F2FFE6] border-2 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] space-y-2 text-center">
            <ShieldCheck className="w-8 h-8 text-[#0A0A0E] mx-auto" />
            <div className="font-y2k text-xs font-black uppercase text-[#0A0A0E]">
              AUTHENTICATED GRAIL
            </div>
            <p className="font-mono text-[11px] text-[#2C2D35]">
              Cataloged under Volume 09 of the Xtra Gen-Z Fashion Achievements Registry.
            </p>
          </div>
        </aside>
      </div>

      {/* -------------------------------------------------------------
          RELATED FASHION ACHIEVEMENTS
          ------------------------------------------------------------- */}
      <section className="mt-16 pt-12 border-t-4 border-[#0A0A0E] space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#FF007A] uppercase">CONTINUE READING</span>
            <h2 className="font-display-serif text-2xl sm:text-3xl font-black text-[#0A0A0E] uppercase">
              RELATED FASHION ACHIEVEMENTS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((item) => (
            <Link
              key={item.id}
              to={`/article/${item.slug}`}
              className="group bg-white border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0A0A0E] hover:shadow-[8px_8px_0px_#FF007A] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-48 overflow-hidden border-b-2 border-[#0A0A0E]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <DopamineBadge variant={item.badgeVariant} size="sm">
                      {item.tag || item.categoryName}
                    </DopamineBadge>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="font-mono text-[10px] text-[#626470] uppercase font-bold">
                    {item.designer}
                  </div>
                  <h3 className="font-display-serif text-lg font-bold leading-snug group-hover:text-[#FF007A] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="w-full py-2 bg-[#FFFDF8] border border-[#0A0A0E] font-heading font-black text-[11px] uppercase flex items-center justify-center gap-1 group-hover:bg-[#FF007A] group-hover:text-white transition-colors">
                  <span>READ CITATION</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Article;
