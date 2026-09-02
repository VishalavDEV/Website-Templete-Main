import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Building2, User, Sparkles, Quote } from 'lucide-react';
import { ClientStory, CursorType } from '../../types';

interface TestimonialStoryProps {
  story: ClientStory | null;
  onClose: () => void;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType) => void;
}

export const TestimonialStory: React.FC<TestimonialStoryProps> = ({
  story,
  onClose,
  onNavigate,
  setCursorType,
}) => {
  // Handle ESC key press & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (story) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Story Modal Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
          className="relative w-full max-w-4xl bg-[#0d0d10] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl z-10 my-auto text-[#FAF9F6] max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar with Story Meta & Close Button */}
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#ffffff10] mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                CLIENT PERSPECTIVE / 0{story.id}
              </span>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-white/[0.04] hover:bg-white/[0.1] text-[#888888] hover:text-white border border-white/10 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
              aria-label="Close client story dialog"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Client & Author Grid Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 border-b border-[#ffffff10] mb-8 sm:mb-10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
                CLIENT
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight block">
                {story.client}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
                PERSON
              </span>
              <span className="font-medium text-sm sm:text-base text-[#FAF9F6] block">
                {story.person}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
                ROLE
              </span>
              <span className="text-sm text-[#888888] uppercase block">
                {story.role}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
                PROJECT
              </span>
              <span className="text-sm text-[#0066FF] uppercase font-semibold block truncate">
                {story.project}
              </span>
            </div>
          </div>

          {/* Quotation Section */}
          <div className="mb-8 sm:mb-10 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block">
              CORE PERSPECTIVE
            </span>
            <blockquote className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#FAF9F6] leading-[1.12] uppercase tracking-tight">
              "{story.quote}"
            </blockquote>
          </div>

          {/* Two-Column Story Narrative & Portrait Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 pt-6 border-t border-[#ffffff10]">
            <div className="md:col-span-8 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                THE COLLABORATION
              </span>
              <p className="text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed font-body whitespace-pre-line">
                {story.story}
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="relative aspect-[3/4] w-full bg-[#16161a] border border-white/10 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.person}
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 p-2 bg-[#080808]/80 backdrop-blur-sm border border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white">
                    {story.person}
                  </p>
                  <p className="text-[9px] font-mono text-[#888888]">
                    {story.role} · {story.client}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-[#ffffff10] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onNavigate(`/work/${story.projectSlug}`);
              }}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="group inline-flex items-center gap-2 px-6 py-4 bg-[#0066FF] hover:brightness-110 text-white font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onClose}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-[#888888] hover:text-white border border-white/10 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>CLOSE STORY</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
