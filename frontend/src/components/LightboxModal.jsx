import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  Download, 
  Camera, 
  Calendar, 
  Tag, 
  ZoomIn, 
  ZoomOut,
  Maximize2
} from 'lucide-react';

export default function LightboxModal({ 
  item, 
  items, 
  onClose, 
  onNavigate, 
  isLiked, 
  onToggleLike, 
  onShare 
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  // Simulated professional EXIF data
  const exif = {
    camera: 'Leica M11 / Sony α7R V',
    lens: '35mm f/1.4 GM Prime',
    settings: '1/800s • f/2.0 • ISO 100',
    location: item.category === 'nature' ? 'Dolomites, Italy' :
              item.category === 'bagpacker' ? 'Patagonia, Chile' :
              item.category === 'culture' ? 'Kyoto, Japan' : 'Provence, France'
  };

  const handleDownload = () => {
    // Open image in new tab to view / save full resolution
    window.open(item.imageUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-6 select-none"
        onClick={onClose}
      >
        {/* Navigation - Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#e74c3c] text-white transition-all duration-200 hover:scale-110 shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation - Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#e74c3c] text-white transition-all duration-200 hover:scale-110 shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Top Control Bar */}
        <div 
          className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-400 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{items.length}</span>
            <span className="ml-2 font-semibold text-white hidden sm:inline">{item.title}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggleLike(item.id)}
              className={`p-2.5 rounded-full transition-colors ${
                isLiked ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              title="Like Photo"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={() => onShare(item)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Share Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Download Full Resolution"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#e74c3c] text-white transition-colors ml-2"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-6xl w-full max-h-[88vh] flex flex-col lg:flex-row bg-[#151515] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Display Area */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className={`max-w-full max-h-[75vh] object-contain transition-transform duration-300 cursor-zoom-in ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-80 bg-[#181818] p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e74c3c] bg-[#e74c3c]/10 mb-3">
                {item.categoryLabel || item.category}
              </div>

              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Shot Details / EXIF Info */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-[#e74c3c]" />
                  <span>{exif.camera}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-gray-400" />
                  <span>{exif.lens} • {exif.settings}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Captured {item.date || 'Summer 2026'}</span>
                </div>
              </div>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2 font-medium">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action CTAs inside lightbox */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
              <button
                onClick={() => onToggleLike(item.id)}
                className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                  isLiked ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>

              <button
                onClick={() => onShare(item)}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
