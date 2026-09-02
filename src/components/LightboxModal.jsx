import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

export default function LightboxModal({ item, isOpen, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full bg-forest-900 rounded-3xl overflow-hidden shadow-2xl border border-forest-700/80 z-10 flex flex-col"
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-forest-800 bg-forest-950/80 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-forest-800 border border-forest-700 text-wheat-400 text-xs font-bold">
                  {item.category}
                </span>
                <span className="text-forest-300 text-xs flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {item.location}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-forest-800 text-forest-300 hover:text-white hover:bg-forest-700 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Area with Navigation Buttons */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-950/80 hover:bg-forest-900 text-white border border-forest-700/80 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-950/80 hover:bg-forest-900 text-white border border-forest-700/80 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-6 bg-forest-950 text-white">
              <h3 className="text-xl font-serif font-bold text-white mb-1">{item.title}</h3>
              <p className="text-forest-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
