import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { researchNotes } from '../data/researchData';
import { ChevronLeft, ChevronRight, Bookmark, Info, Sparkles } from 'lucide-react';

export default function ResearchNotebook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnnotation, setShowAnnotation] = useState(true);
  const [bookmarkedNotes, setBookmarkedNotes] = useState([]);

  const currentNote = researchNotes[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % researchNotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + researchNotes.length) % researchNotes.length);
  };

  const toggleBookmark = (id) => {
    if (bookmarkedNotes.includes(id)) {
      setBookmarkedNotes(bookmarkedNotes.filter((item) => item !== id));
    } else {
      setBookmarkedNotes([...bookmarkedNotes, id]);
    }
  };

  return (
    <section className="py-24 bg-white border-b border-[#E6E6E0] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
              RESEARCH NOTEBOOK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
              Conceptual Notebook
            </h2>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 border border-[#E6E6E0] bg-[#FAFAFA] hover:bg-white text-[#1E1B4B] rounded-full transition-colors shadow-sm"
              aria-label="Previous note"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono-tag text-xs text-[#6B7280]">
              NOTE 0{currentIndex + 1} / 0{researchNotes.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 border border-[#E6E6E0] bg-[#FAFAFA] hover:bg-white text-[#1E1B4B] rounded-full transition-colors shadow-sm"
              aria-label="Next note"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DIGITAL NOTEBOOK CONTAINER */}
        <div className="relative max-w-4xl mx-auto bg-[#FFFDF9] border border-[#D0D0C8] shadow-2xl p-8 sm:p-14 notebook-lines relative rounded-sm">
          
          {/* NOTEBOOK BINDING STITCHING ACCENT */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 w-[1px] border-r-2 border-red-200 pointer-events-none" />

          {/* PAGE CONTENT WITH ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNote.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="pl-8 sm:pl-12 space-y-8"
            >
              {/* TOP NOTE METADATA */}
              <div className="flex items-center justify-between border-b border-[#E6E6E0] pb-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono-tag text-xs font-bold text-[#1E1B4B] bg-[#EEECF8] px-2.5 py-1 rounded-sm">
                    {currentNote.number}
                  </span>
                  <span className="font-mono-tag text-xs text-[#6B7280] uppercase">
                    DOMAIN: {currentNote.category}
                  </span>
                </div>

                <button
                  onClick={() => toggleBookmark(currentNote.id)}
                  className={`flex items-center space-x-1.5 text-xs font-mono-tag ${
                    bookmarkedNotes.includes(currentNote.id)
                      ? 'text-[#4A6B5D] font-bold'
                      : 'text-[#9CA3AF] hover:text-[#1E1B4B]'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedNotes.includes(currentNote.id) ? 'fill-[#4A6B5D]' : ''}`} />
                  <span>{bookmarkedNotes.includes(currentNote.id) ? 'Saved Note' : 'Bookmark Note'}</span>
                </button>
              </div>

              {/* MAIN QUOTE / STATEMENT */}
              <div className="py-4 space-y-4">
                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#1E1B4B] leading-snug font-medium">
                  "{currentNote.quote}"
                </blockquote>

                {/* HANDWRITTEN ACCENT NOTE */}
                <div className="pt-2">
                  <span className="font-handwriting text-2xl text-[#4A6B5D] rotate-[-1deg] inline-block">
                    ~ Field observation log &bull; Dr. Ellison
                  </span>
                </div>
              </div>

              {/* ANNOTATION BOX */}
              <div className="bg-[#F5F3EF]/80 p-6 border-l-4 border-[#1E1B4B] space-y-2 relative">
                <div className="flex items-center space-x-2 text-[#1E1B4B]">
                  <Info className="w-4 h-4 text-[#4A6B5D]" />
                  <span className="font-mono-tag text-xs font-semibold uppercase">
                    Marginal Conceptual Annotation
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light">
                  {currentNote.annotation}
                </p>
              </div>

              {/* BOTTOM NOTE NAVIGATION DOTS */}
              <div className="pt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  {researchNotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-8 bg-[#1E1B4B]' : 'w-2 bg-[#E6E6E0]'
                      }`}
                      aria-label={`Go to note ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="font-mono-tag text-[10px] text-[#9CA3AF] italic">
                  Flip or swipe notes to explore
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* MANDATORY DISCLAIMER NOTE */}
        <div className="mt-8 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#FAFAFA] border border-[#E6E6E0] px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" />
            <p className="font-mono-tag text-xs text-[#6B7280]">
              Conceptual demonstration content — not clinical guidance or verified scientific conclusions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
