import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { StoryCard } from '../components/editorial/StoryCard';
import { ArrowLeft, Search, BookOpen, Sparkles } from 'lucide-react';
import { useMagazine } from '../context/MagazineContext';
import { motion, useReducedMotion } from 'framer-motion';

export function NotFound() {
  const { setIsSearchOpen } = useMagazine();
  const shouldReduceMotion = useReducedMotion();
  const suggestedArticles = articles.slice(0, 3);

  const containerMotion = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="not-found-page max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
      {/* 404 Editorial Box with Subtle Motion */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerMotion}
        className="bg-white border-2 border-[#141413] p-8 sm:p-14 shadow-xs"
      >
        <span className="font-mono text-5xl sm:text-7xl font-black text-[#141413] block mb-2 tracking-tighter">
          404
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F1EA] border border-[#D1CDC4] text-[#D43825] text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Folio Not Found in Archives</span>
        </span>

        <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#141413] mb-3">
          Looks like this story went missing.
        </h1>

        <p className="font-serif-reading text-lg text-[#52524E] max-w-md mx-auto italic mb-8">
          We couldn't find the page you're looking for. The manuscript may have been relocated or archived.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#141413] text-[#FAF9F5] hover:bg-[#D43825] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="px-6 py-3 bg-[#FAF9F5] border border-[#141413] text-[#141413] hover:bg-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#D43825]" />
            <span>Search Catalog</span>
          </button>
        </div>
      </motion.div>

      {/* Suggested Front-Page Monographs */}
      <div className="mt-16 text-left">
        <div className="flex items-center gap-2 pb-3 mb-6 border-b-2 border-[#141413]">
          <BookOpen className="w-4 h-4 text-[#D43825]" />
          <h3 className="font-serif-headline text-xl font-bold uppercase tracking-tight text-[#141413]">
            Curated Front-Page Essays
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedArticles.map((art) => (
            <StoryCard key={art.id} article={art} variant="medium" showExcerpt={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Export NotFoundPage alias
export const NotFoundPage = NotFound;
