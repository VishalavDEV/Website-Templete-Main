import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { audioService } from '../utils/audio';

export interface LightboxImage {
  url: string;
  caption?: string;
  title?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (newIndex: number) => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < images.length - 1) {
          audioService.playHover();
          onIndexChange(currentIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          audioService.playHover();
          onIndexChange(currentIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl">
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-violet-400 bg-violet-950/60 border border-violet-800/40 px-3 py-1 rounded-full">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            {current.title && (
              <span className="text-sm font-medium text-gray-200 hidden sm:inline">
                {current.title}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="lightbox-close-btn"
              onClick={() => {
                audioService.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
              aria-label="Close Lightbox (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            id="lightbox-prev-btn"
            onClick={() => {
              audioService.playClick();
              onIndexChange((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-violet-600/60 text-white flex items-center justify-center transition-all border border-white/10 z-20"
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Container with Animation */}
        <div className="relative max-w-6xl max-h-[80vh] w-full flex flex-col items-center justify-center">
          <motion.div
            key={current.url + currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center max-h-[70vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={current.url}
              alt={current.caption || 'Project visual preview'}
              className="max-h-[70vh] max-w-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Caption */}
          {current.caption && (
            <motion.p
              key={'caption-' + currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-sm text-gray-400 max-w-xl font-mono"
            >
              {current.caption}
            </motion.p>
          )}
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            id="lightbox-next-btn"
            onClick={() => {
              audioService.playClick();
              onIndexChange((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-violet-600/60 text-white flex items-center justify-center transition-all border border-white/10 z-20"
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Bottom Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 max-w-[90vw] overflow-x-auto p-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  audioService.playClick();
                  onIndexChange(idx);
                }}
                className={`relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 border transition-all ${
                  idx === currentIndex ? 'border-violet-400 scale-105 opacity-100 ring-2 ring-violet-500/40' : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
