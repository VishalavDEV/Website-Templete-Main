import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { Bookmark, Volume2, ArrowRight, Clock, Sparkles, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function HeroStory({
  image,
  category,
  title,
  description,
  author,
  date,
  readingTime,
  slug,
  article,
}) {
  const { isBookmarked, toggleBookmark, playAudio, isPlayingAudio, currentAudioArticle } = useMagazine();
  const shouldReduceMotion = useReducedMotion();

  // Normalize props
  const articleId = article?.id || slug || 'lead-hero-story';
  const articleSlug = slug || article?.slug || 'sacred-minimalism-kyoto';
  const articleTitle = title || article?.title;
  const articleDescription = description || article?.subtitle || article?.excerpt;
  const articleCategory = category || article?.kicker || article?.category || 'Cover Story';
  const articleImage = image || article?.coverImage || article?.image;
  const articleAuthorName = typeof author === 'string' ? author : author?.name || article?.author?.name || 'Elena Rostova-Vance';
  const articleAuthorAvatar = typeof author === 'object' ? author?.avatar : article?.author?.avatar;
  const articleAuthorRole = typeof author === 'object' ? author?.role : article?.author?.role || 'Senior Architecture Critic';
  const articleAuthorId = typeof author === 'object' ? author?.id : article?.author?.id || 'elena-vance';
  const articleDate = date || article?.publishedAt || 'October 14, 2026';
  const articleReadingTime = readingTime || article?.readTime || '12 min read';
  const articleAudioDuration = article?.audioDuration || '14:20';

  const isSaved = isBookmarked(articleId);
  const isAudioPlaying = isPlayingAudio && currentAudioArticle?.slug === articleSlug;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageZoomVariants = {
    hidden: shouldReduceMotion ? { scale: 1 } : { scale: 1.06, opacity: 0.92 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="border-2 border-[#141413] pb-10 mb-12 bg-white shadow-md relative overflow-hidden"
    >
      {/* Editorial Top Ribbon Bar */}
      <div className="bg-[#141413] text-[#FAF9F5] px-6 py-2 flex items-center justify-between text-[0.6875rem] font-mono tracking-widest uppercase border-b border-[#141413]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D43825] animate-ping" />
          <span className="font-bold text-[#FAF9F5]">Flagship Editorial Feature</span>
          <span className="text-[#666]">&bull;</span>
          <span className="text-[#A1A19A] hidden sm:inline">Special Issue Vol. 48</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#D43825] font-bold">First Edition Monograph</span>
          <span>&bull;</span>
          <span>FSC Certified</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Typography & Story Deck (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 order-2 lg:order-1">
            <div>
              {/* Category, Date & Read Time */}
              <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[0.6875rem] uppercase tracking-widest font-extrabold bg-[#D43825] text-white shadow-xs">
                  <Sparkles className="w-3 h-3" />
                  <span>{articleCategory}</span>
                </span>
                <span className="text-xs text-[#73736C] font-mono font-medium">{articleDate}</span>
                <span className="text-[#D1CDC4]">&bull;</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#52524E]">
                  <Clock className="w-3.5 h-3.5 text-[#C28B38]" />
                  <span>{articleReadingTime}</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={itemFadeUp}>
                <Link to={`/article/${articleSlug}`} className="group block">
                  <h1 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-black text-[#141413] group-hover:text-[#D43825] transition-colors leading-[1.14] tracking-tight">
                    {articleTitle}
                  </h1>
                </Link>
              </motion.div>

              {/* Description / Subtitle with Gold Accent */}
              <motion.p
                variants={itemFadeUp}
                className="mt-5 text-[#3A3A35] font-serif-reading text-lg md:text-xl leading-relaxed italic border-l-3 border-[#C28B38] pl-5 bg-[#FAF9F5] py-2"
              >
                {articleDescription}
              </motion.p>
            </div>

            {/* Metadata & Actions */}
            <motion.div
              variants={itemFadeUp}
              className="pt-6 border-t border-[#E8E5DC] flex flex-wrap items-center justify-between gap-4"
            >
              {/* Author Byline */}
              <Link
                to={`/author/${articleAuthorId}`}
                className="flex items-center gap-3.5 group/author"
              >
                {articleAuthorAvatar && (
                  <img
                    src={articleAuthorAvatar}
                    alt={articleAuthorName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#141413] shadow-xs"
                  />
                )}
                <div>
                  <span className="block text-xs font-black text-[#141413] group-hover/author:text-[#D43825] uppercase tracking-wider">
                    {articleAuthorName}
                  </span>
                  <span className="block text-[0.7rem] text-[#73736C]">
                    {articleAuthorRole}
                  </span>
                </div>
              </Link>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Audio Listen Button with Equalizer Effect */}
                <button
                  onClick={() =>
                    playAudio({
                      id: articleId,
                      slug: articleSlug,
                      title: articleTitle,
                      coverImage: articleImage,
                      audioDuration: articleAudioDuration,
                    })
                  }
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-all border cursor-pointer ${
                    isAudioPlaying
                      ? 'bg-[#141413] text-white border-[#141413]'
                      : 'bg-[#F4F1EA] hover:bg-[#EBE8DF] text-[#141413] border-[#D1CDC4]'
                  }`}
                  title="Listen to narrated article"
                >
                  {isAudioPlaying ? (
                    <div className="flex items-center gap-0.5 h-3.5">
                      <span className="equalizer-bar" />
                      <span className="equalizer-bar" />
                      <span className="equalizer-bar" />
                    </div>
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-[#D43825]" />
                  )}
                  <span>{isAudioPlaying ? 'Playing Audio' : `Listen (${articleAudioDuration})`}</span>
                </button>

                <button
                  onClick={() => toggleBookmark(articleId)}
                  className={`p-2.5 border transition-all cursor-pointer shadow-xs ${
                    isSaved
                      ? 'bg-[#141413] text-white border-[#141413]'
                      : 'bg-white text-[#73736C] hover:text-[#141413] border-[#D1CDC4] hover:border-[#141413]'
                  }`}
                  title={isSaved ? 'Saved to reading list' : 'Save for later'}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
                </button>

                <Link
                  to={`/article/${articleSlug}`}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#D43825] hover:bg-[#B32717] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <span>Read Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Large Cinematic Image with Stamp Overlay (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <Link to={`/article/${articleSlug}`} className="block group overflow-hidden relative shadow-sm border border-[#141413]">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#EAE7DF] relative">
                <motion.img
                  variants={imageZoomVariants}
                  src={articleImage}
                  alt={articleTitle}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
            </Link>

            {/* Circular Editorial Authenticity Seal */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white p-1 rounded-full shadow-md hidden sm:block">
              <div className="editorial-stamp bg-[#FAF9F5]">
                <span>OBSERVER<br />✦ 2026 ✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
