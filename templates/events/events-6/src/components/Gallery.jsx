import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X, Tag } from 'lucide-react';
import { galleryItems } from '../data/festivalData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const categories = ['ALL', 'LIVE', 'ARTISTS', 'STAGE', 'DJ', 'CROWD', 'BEHIND THE SCENES'];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative z-10 w-full">
      {/* Category Filter Bar */}
      <div className="gallery-filter-bar flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer transition-all duration-300 hover:border-[#FFC928] hover:-translate-y-1 hover:shadow-2xl aspect-[4/5] flex flex-col justify-end"
            onClick={() => openLightbox(index)}
          >
            {/* Skeleton Loading State */}
            {!loadedImages[item.id] && (
              <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
                <span className="text-xs text-neutral-500 font-mono tracking-wider">LOADING...</span>
              </div>
            )}

            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              onLoad={() => handleImageLoad(item.id)}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Default Subtle Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

            {/* Subtle Title Badge on Normal State */}
            <div className="relative z-10 p-4 transition-opacity duration-300 group-hover:opacity-0">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 text-[#FFC928] border border-[#F5B900]/40 backdrop-blur-sm mb-1">
                {item.category}
              </span>
              <h4 className="font-['Syne',sans-serif] text-white text-sm font-bold truncate">
                {item.title}
              </h4>
            </div>

            {/* Full Glassmorphic Overlay on Hover */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
              <div className="w-12 h-12 rounded-full bg-[#FFC928] text-black flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(255,201,40,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 size={20} />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] mb-1">
                {item.category} • {item.tag}
              </span>
              <h4 className="font-['Syne',sans-serif] text-white font-bold text-base leading-tight">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[10000] flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 sm:-top-14 right-0 text-white/80 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            {/* Prev Navigation */}
            <button
              className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#F5B900]/50 text-[#FFC928] flex items-center justify-center hover:bg-[#FFC928] hover:text-black transition-all z-10"
              onClick={prevImage}
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Lightbox Image */}
            <div className="w-full max-h-[70vh] overflow-hidden rounded-2xl border border-[#FFC928]/40 shadow-2xl flex items-center justify-center bg-black">
              <img
                src={filteredItems[activeImageIndex].imageUrl}
                alt={filteredItems[activeImageIndex].title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Metadata Description */}
            <div className="text-center mt-4 sm:mt-6">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5B900]/20 text-[#FFC928] border border-[#F5B900]/40">
                  {filteredItems[activeImageIndex].category}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  • {filteredItems[activeImageIndex].tag}
                </span>
              </div>
              <h3 className="font-['Syne',sans-serif] text-white text-lg sm:text-2xl font-bold">
                {filteredItems[activeImageIndex].title}
              </h3>
            </div>

            {/* Next Navigation */}
            <button
              className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#F5B900]/50 text-[#FFC928] flex items-center justify-center hover:bg-[#FFC928] hover:text-black transition-all z-10"
              onClick={nextImage}
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
