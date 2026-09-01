import React, { useEffect, useState } from 'react';
import { useLightbox } from '../context/LightboxContext';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export const ImageLightbox: React.FC = () => {
  const { isOpen, currentImage, imagesList, currentIndex, closeLightbox, nextImage, prevImage } =
    useLightbox();

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-black/95 p-4 md:p-8 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-label="Image Lightbox"
    >
      {/* Top Header Controls */}
      <div className="flex w-full items-center justify-between text-white/80">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          {imagesList.length > 1 ? `${currentIndex + 1} / ${imagesList.length}` : 'IMAGE VIEW'}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </button>
          <button
            onClick={closeLightbox}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden py-4">
        {imagesList.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-white/20 transition-all"
            title="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div
          className={`relative max-h-full max-w-full overflow-auto transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentImage.url}
            alt={currentImage.title || 'Lightbox View'}
            className="max-h-[75vh] md:max-h-[82vh] w-auto max-w-full object-contain rounded-lg border border-white/10 shadow-2xl"
          />
        </div>

        {imagesList.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-white/20 transition-all"
            title="Next Image (Right Arrow)"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Footer Caption */}
      {(currentImage.title || currentImage.caption) && (
        <div className="w-full max-w-3xl text-center text-white/90 pb-2">
          {currentImage.title && (
            <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-blue-400">
              {currentImage.title}
            </h4>
          )}
          {currentImage.caption && (
            <p className="mt-1 text-xs md:text-sm text-neutral-300 font-light">
              {currentImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
