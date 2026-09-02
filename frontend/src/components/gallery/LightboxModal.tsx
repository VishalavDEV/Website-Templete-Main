import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Info, Layers } from 'lucide-react';
import { Photo } from '../../types/portfolio';

interface LightboxModalProps {
  photos: Photo[];
  activePhoto: Photo | null;
  onClose: () => void;
  onSelectPhoto: (photo: Photo) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  activePhoto,
  onClose,
  onSelectPhoto,
}) => {
  const [showExifDrawer, setShowExifDrawer] = useState(true);

  const currentIndex = activePhoto
    ? photos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % photos.length;
      onSelectPhoto(photos[nextIndex]);
    }
  }, [currentIndex, photos, onSelectPhoto]);

  const handlePrev = useCallback(() => {
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      onSelectPhoto(photos[prevIndex]);
    }
  }, [currentIndex, photos, onSelectPhoto]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activePhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activePhoto, handleNext, handlePrev, onClose]);

  if (!activePhoto) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop Overlay with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0b0c10]/95 backdrop-blur-xl"
        />

        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6 flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-[#0b0c10] to-transparent">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#66fcf1] px-2.5 py-1 bg-white/5 border border-[#66fcf1]/20 rounded">
              {activePhoto.category}
            </span>
            <span className="text-xs font-mono text-[#c5c6c7]/60">
              {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} /{' '}
              {photos.length < 10 ? `0${photos.length}` : photos.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExifDrawer(!showExifDrawer)}
              className={`p-2 rounded border transition-colors flex items-center gap-1.5 text-xs font-mono ${
                showExifDrawer
                  ? 'bg-[#66fcf1]/10 border-[#66fcf1]/40 text-[#66fcf1]'
                  : 'bg-white/5 border-white/10 text-[#c5c6c7] hover:text-white'
              }`}
              title="Toggle Technical EXIF"
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">EXIF Info</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#66fcf1] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-40 w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 pt-20 pb-16 gap-6">
          {/* Main Image Viewport with Previous & Next navigation */}
          <div className="relative flex-1 h-full max-h-[82vh] w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="max-w-full max-h-[78vh] object-contain rounded-sm shadow-2xl shadow-black/80 border border-white/10"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0b0c10]/70 hover:bg-[#0b0c10] border border-white/10 hover:border-[#66fcf1]/50 text-white hover:text-[#66fcf1] transition-all backdrop-blur-md shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0b0c10]/70 hover:bg-[#0b0c10] border border-white/10 hover:border-[#66fcf1]/50 text-white hover:text-[#66fcf1] transition-all backdrop-blur-md shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Collapsible EXIF / Technical Specs Sidebar */}
          <AnimatePresence>
            {showExifDrawer && (
              <motion.div
                initial={{ opacity: 0, x: 40, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: 40, width: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-96 max-h-[80vh] overflow-y-auto bg-[#12161f]/90 border border-white/10 rounded-sm p-6 flex flex-col justify-between backdrop-blur-md shadow-2xl"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#45a29e] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activePhoto.location}</span>
                    <span>·</span>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activePhoto.year}</span>
                  </div>

                  <h2 className="text-2xl font-bold font-['Syne'] text-white mb-2 tracking-tight">
                    {activePhoto.title}
                  </h2>

                  {activePhoto.series && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#66fcf1] font-mono mb-4 px-2 py-0.5 bg-[#66fcf1]/10 rounded border border-[#66fcf1]/20">
                      <Layers className="w-3 h-3" />
                      <span>Series: {activePhoto.series}</span>
                    </div>
                  )}

                  <p className="text-sm text-[#c5c6c7]/90 leading-relaxed font-light mb-6 border-b border-white/10 pb-6">
                    {activePhoto.description}
                  </p>

                  {/* EXIF Data Grid */}
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#c5c6c7]/50 mb-3 flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-[#66fcf1]" />
                    <span>Exposure & Optics (EXIF)</span>
                  </h4>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#0b0c10]/60 p-4 rounded border border-white/5">
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">Camera</span>
                      <span className="text-white font-medium">{activePhoto.exif.camera}</span>
                    </div>
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">Focal Length</span>
                      <span className="text-white font-medium">{activePhoto.exif.focalLength}</span>
                    </div>
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">Aperture</span>
                      <span className="text-[#66fcf1] font-semibold">{activePhoto.exif.aperture}</span>
                    </div>
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">Shutter</span>
                      <span className="text-[#66fcf1] font-semibold">{activePhoto.exif.shutterSpeed}</span>
                    </div>
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">ISO</span>
                      <span className="text-white font-medium">{activePhoto.exif.iso}</span>
                    </div>
                    <div>
                      <span className="text-[#c5c6c7]/40 block text-[10px] uppercase">Optic</span>
                      <span className="text-white truncate block" title={activePhoto.exif.lens}>
                        {activePhoto.exif.lens}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#c5c6c7]/50 font-mono">
                  <span>Archival Grade Plate</span>
                  <a
                    href="#contact"
                    onClick={() => onClose()}
                    className="text-[#66fcf1] hover:underline"
                  >
                    Inquire Licensing →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatePresence>
  );
};
