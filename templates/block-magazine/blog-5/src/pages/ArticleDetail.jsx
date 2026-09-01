import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { mockArticles } from '../data/mockArticles';
import { ReadingProgress3D } from '../components/article/ReadingProgress3D';
import { MediumGridCard } from '../components/cards/StoryCardVariants';
import { Sparkles, ArrowLeft, Bookmark, Share2, Clock, Volume2, Quote, Compass, Heart, MessageSquare, ArrowRight, BookOpen, Check } from 'lucide-react';
import { useZMag } from '../context/ZMagContext';

export function ArticleDetail() {
  const { id } = useParams();
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { toggleBookmark, bookmarks, showToast } = useZMag();

  const article = mockArticles.find((a) => a.id === id) || mockArticles[0];
  const isSaved = bookmarks.includes(article.id);

  // Claps & resonance interaction state
  const [likes, setLikes] = useState(article.likesCount || 482);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState([
    {
      author: 'Prof. Julian Mercier',
      affiliation: 'ETH Zurich',
      date: '2 DAYS AGO',
      text: 'The acoustic dampening data on cross-laminated timber joinery mirrors our findings in the Limmatquai laboratories. An essential contribution to spatial neuro-architecture.',
    },
    {
      author: 'Aiko Tanaka',
      affiliation: 'Kyoto University of the Arts',
      date: 'YESTERDAY',
      text: 'The interplay between mycelium cellular transpiration and circadian resonance represents the exact philosophical shift we needed away from Cartesian glass monoliths.',
    },
  ]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      showToast('Applauded monograph (+1)');
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
      showToast('Removed applause');
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentsList((prev) => [
      {
        author: 'Fellow Reader',
        affiliation: 'Independent Scholar',
        date: 'JUST NOW',
        text: commentText.trim(),
      },
      ...prev,
    ]);
    setCommentText('');
    showToast('Comment submitted to peer discussion');
  };

  // Hero Image Scroll-Linked Scaling
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const imgRadius = useTransform(scrollYProgress, [0, 0.6], [0, 24]);
  const imgMargin = useTransform(scrollYProgress, [0, 0.6], ['0px', '24px']);

  // Related Monographs (excluding current article)
  const relatedArticles = mockArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111827] relative pb-24">
      {/* 3D Reading Progress Gyroscope */}
      <ReadingProgress3D />

      {/* Top Back Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#4B5563] hover:text-[#0055FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Index</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                showToast('Article link copied to clipboard');
              }
            }}
            className="p-2.5 rounded-full border border-[#E5E7EB] hover:border-[#0055FF] text-[#6B7280] hover:text-[#0055FF] transition-all cursor-pointer shadow-xs"
            title="Share Monograph"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => toggleBookmark(article.id)}
            className={`p-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
              isSaved
                ? 'bg-[#0055FF] text-white border-[#0055FF]'
                : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#0055FF]'
            }`}
            title="Save Monograph"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Article Header & Typography Deck */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-left mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4FF] border border-[#BFDBFE] text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{article.category} // MONOGRAPH</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] leading-[1.04] tracking-tight uppercase">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#4B5563] font-normal leading-relaxed">
          {article.subtitle || article.excerpt}
        </p>

        {/* Byline Deck */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#F3F4F6] text-xs font-mono text-[#6B7280]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0055FF] to-[#7000FF] p-[2px] shadow-xs shrink-0">
              <img
                src={article.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'}
                alt={article.author}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <span className="block font-heading font-bold text-[#111827] text-sm">
                {article.author}
              </span>
              <span className="block text-[#9CA3AF]">
                {article.role || 'Senior Spatial Fellow'} &bull; Published {article.date}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0055FF]" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span className="text-[#0055FF] font-bold">Peer Reviewed</span>
          </div>
        </div>
      </header>

      {/* Scroll-Linked Scaling Hero Image Container */}
      <div ref={heroRef} className="max-w-6xl mx-auto px-0 sm:px-6 mb-16 overflow-hidden">
        <motion.div
          style={{
            borderRadius: shouldReduceMotion ? 24 : imgRadius,
            margin: shouldReduceMotion ? '0px' : imgMargin,
          }}
          className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#F3F4F6] shadow-2xl border border-white/80"
        >
          <motion.img
            style={{ scale: shouldReduceMotion ? 1 : imgScale }}
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/80 text-[0.6875rem] font-mono text-[#6B7280] flex items-center justify-between">
            <span>Primary Photogrammetry &bull; Archive Vol. 2026</span>
            <span className="text-[#0055FF] font-bold">Fig 1.0</span>
          </div>
        </motion.div>
      </div>

      {/* Long-form Immersive Reading Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 font-sans text-base sm:text-lg leading-[1.85] text-[#374151]">
        <p className="first-letter:text-6xl first-letter:font-heading first-letter:font-black first-letter:text-[#0055FF] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
          In the contemporary era of architectural homogenization, the glass-and-steel monolith has reached its aesthetic exhaustion. Across global centers from Kyoto to Zurich, a radical cadre of material scientists and spatial designers is pioneering the transition toward responsive, biomorphic cellular envelopes.
        </p>

        <p>
          Unlike passive structural masonry, cellular mycelium composites act as continuous thermodynamic regulators. By modulating microscopic transpiration rates in response to indoor ambient carbon concentrations, the architecture behaves less like a static enclosure and more like a breathing respiratory organ.
        </p>

        {/* Key Takeaways Highlight Box */}
        {article.keyTakeaways && (
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#EBF4FF]/60 border border-[#BFDBFE] space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0055FF] block">
              ✦ Key Monograph Theses
            </span>
            <ul className="space-y-2 text-sm text-[#111827]">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] mt-2 shrink-0" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Slide-In Editorial Pullquote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="my-12 p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border-l-4 border-[#0055FF] space-y-4 shadow-sm"
        >
          <Quote className="w-8 h-8 text-[#0055FF]" />
          <blockquote className="font-heading font-bold text-xl sm:text-2xl text-[#111827] leading-snug tracking-tight">
            "We must abandon the Cartesian dogma of rectilinear permanence. The future city is not constructed; it is cultivated through synthetic biology and circadian acoustics."
          </blockquote>
          <span className="font-mono text-xs text-[#6B7280] block font-bold">
            &mdash; The Biophilic Manifesto, Section IV
          </span>
        </motion.div>

        <p>
          During our fieldwork in the experimental timber pavilions of Eastern Kyoto, acoustic measurements revealed a 40% reduction in high-frequency auditory fatigue when structural cross-laminated timber was paired with acoustic moss micro-fins.
        </p>

        {/* Inline Hover-Zoom Image Container */}
        <div className="my-10 space-y-3">
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] group">
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop"
              alt="Timber Framework"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            />
          </div>
          <p className="text-xs font-mono text-[#6B7280] italic text-center">
            Fig 2.1 &bull; Interlocking cedar framework with acoustic dampening joinery. Photography by Kenji Takahashi.
          </p>
        </div>

        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#111827] pt-6 uppercase tracking-tight">
          Towards Synthetic Circadian Synchrony
        </h2>

        <p>
          As urban populations spend upwards of ninety percent of their daylight hours enclosed within artificial interiors, the necessity for spectral daylight resonance has ceased to be a luxury. The next generation of spatial interfaces will not merely provide shelter; they will tune our cognitive states in real time.
        </p>
      </div>

      {/* 1. Author Spotlight Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 my-16">
        <div className="rounded-3xl glass-card bg-[#F8F9FA] p-6 sm:p-8 border border-[#E5E7EB] flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-tr from-[#0055FF] to-[#7000FF] shrink-0 shadow-md">
            <img
              src={article.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'}
              alt={article.author}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-heading font-black text-lg text-[#111827]">
                {article.author}
              </h3>
              <span className="text-xs font-mono text-[#0055FF] font-bold">
                Editorial Fellow &bull; Zurich
              </span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Leading researcher and essayist interrogating the frontiers of physical craftsmanship, computational physics, and contemplative spaces.
            </p>
            <div className="pt-2">
              <Link
                to="/contributors"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0055FF] hover:translate-x-1 transition-transform"
              >
                <span>View Full Fellow Masthead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Resonance & Claps Widget */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 my-12 pt-8 border-t border-[#E5E7EB]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                hasLiked
                  ? 'bg-[#FF5E3A] text-white border-[#FF5E3A]'
                  : 'bg-white text-[#111827] border-[#E5E7EB] hover:border-[#FF5E3A] hover:text-[#FF5E3A]'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
              <span className="font-mono text-xs font-bold">{likes} Applauds</span>
            </button>

            <button
              onClick={() => toggleBookmark(article.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                isSaved
                  ? 'bg-[#0055FF] text-white border-[#0055FF]'
                  : 'bg-white text-[#111827] border-[#E5E7EB] hover:border-[#0055FF]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="font-mono text-xs font-bold">{isSaved ? 'Archived' : 'Archive'}</span>
            </button>
          </div>

          <div className="text-xs font-mono text-[#6B7280]">
            <span>{commentsList.length} Peer Review Responses</span>
          </div>
        </div>

        {/* Peer Discussion Section */}
        <div className="mt-10 space-y-6">
          <h3 className="font-heading font-black text-xl uppercase tracking-tight text-[#111827] flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#0055FF]" />
            <span>Peer Review & Treatise Discussion</span>
          </h3>

          <form onSubmit={handleAddComment} className="space-y-3">
            <textarea
              rows="3"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Contribute scholarly feedback, citations, or inquiries..."
              className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:bg-white transition-colors resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Submit Response
              </button>
            </div>
          </form>

          <div className="space-y-4 pt-4">
            {commentsList.map((comm, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#111827] font-heading">{comm.author} ({comm.affiliation})</span>
                  <span className="text-[#9CA3AF]">{comm.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {comm.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Up Next in Volume 2026 // Related Monographs Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 pt-16 border-t border-[#E5E7EB] space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#0055FF]" />
            <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
              Next In Volume 2026 // Related Monographs
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B7280]">Curated Reading</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((art) => (
            <MediumGridCard key={art.id} article={art} />
          ))}
        </div>
      </section>
    </article>
  );
}
