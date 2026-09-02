import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_PHOTOS } from '../../data/portfolioData';
import { Photo, PhotoCategory } from '../../types/portfolio';
import { GalleryCard } from './GalleryCard';
import { LightboxModal } from './LightboxModal';
import { SlidersHorizontal } from 'lucide-react';

const CATEGORIES: PhotoCategory[] = ['All', 'Editorial', 'Architecture', 'Street', 'Portrait', 'Minimal'];

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>('All');
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0b0c10] relative">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#66fcf1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#66fcf1]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#66fcf1]">
                Curated Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white tracking-tight">
              PORTFOLIO & ARCHIVES
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#c5c6c7]/70 font-light max-w-md font-sans leading-relaxed">
            A comprehensive survey of editorial commissions, brutalist architectural structures, and raw street portraits shot across 35mm and 100MP medium format.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' ? GALLERY_PHOTOS.length : GALLERY_PHOTOS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-wider font-mono rounded-sm transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-[#0b0c10] font-semibold' : 'text-[#c5c6c7]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="categoryFilter"
                      className="absolute inset-0 bg-[#66fcf1] rounded-sm shadow-[0_0_15px_rgba(102,252,241,0.3)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                    <span
                      className={`text-[10px] ${
                        isActive ? 'text-[#0b0c10]/70' : 'text-[#c5c6c7]/40'
                      }`}
                    >
                      ({count})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-[#c5c6c7]/50 flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#45a29e]" />
            <span>Showing {filteredPhotos.length} Plates</span>
          </div>
        </div>

        {/* Multi-Column Masonry/Staggered Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                index={index}
                onSelect={(p) => setActivePhoto(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        photos={filteredPhotos}
        activePhoto={activePhoto}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />
    </section>
  );
};
