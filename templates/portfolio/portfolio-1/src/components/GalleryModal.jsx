import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryModal({ isOpen, images, activeIndex, onClose, onChangeIndex }) {
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const handleNext = () => {
    onChangeIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onChangeIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0c1424]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 select-none"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
        >
          <X size={24} />
        </button>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl h-full flex flex-col justify-center items-center">
          {/* Main Active Image */}
          <div className="relative flex-grow w-full flex items-center justify-center overflow-hidden">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Gallery Image ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain shadow-2xl"
            />
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors border border-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Metadata Footer */}
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="text-white/50 text-[10px] font-sans tracking-widest font-bold uppercase">
              GALLERY INTERIOR OVERVIEW
            </div>
            <div className="flex items-center gap-6">
              {/* Image counter */}
              <span className="text-white/70 text-xs font-sans font-medium">
                {activeIndex + 1} <span className="opacity-40">/</span> {images.length}
              </span>
              {/* Dots indicator */}
              <div className="flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onChangeIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${
                      idx === activeIndex ? 'bg-white scale-120' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
