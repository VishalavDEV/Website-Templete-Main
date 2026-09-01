import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Maximize2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (imageUrl: string, title: string, metadata?: string) => void;
}

const CATEGORIES = [
  'All',
  'Workspace & R&D',
  'Keynotes & Stages',
  'Architecture & Form',
  'Generative Experiments',
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
              <Camera size={14} />
              <span>10 / CINEMATIC 4K GALLERY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-2xl">
              Visual <span className="text-amber-400">Chronicles</span> & Lab Moments.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
              Editorial 4K photography documenting studio hardware, international keynote stages, and generative shader art.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-400/40 transition-all shadow-2xl cursor-pointer ${
                  item.aspectRatio === 'portrait' ? 'row-span-2' : ''
                }`}
                onClick={() =>
                  onOpenLightbox(
                    item.image,
                    item.title,
                    `${item.cameraInfo} · ${item.location} (${item.year})`
                  )
                }
              >
                <div className={`relative w-full ${item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                  {/* Top Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono px-2.5 py-1 rounded-full bg-neutral-950/80 text-amber-400 border border-neutral-800 backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Zoom Inspect Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700">
                    <Maximize2 size={15} />
                  </div>

                  {/* Bottom Metadata Bar */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80">
                    <div className="font-display font-bold text-sm text-white line-clamp-1">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-amber-400" />
                        {item.location}
                      </span>
                      <span className="text-neutral-500">{item.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
