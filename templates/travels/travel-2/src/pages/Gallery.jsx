import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const images = [
    { id: 1, title: 'Turquoise Waters', desc: 'Maldives coral reef networks.', category: 'Beaches', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-64' },
    { id: 2, title: 'Eiffel View', desc: 'Romantic Parisian architecture.', category: 'Cities', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-80' },
    { id: 3, title: 'Swiss Alpine', desc: 'Jungfraujoch snowy mountain valleys.', category: 'Mountains', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-96' },
    { id: 4, title: 'Neon Crossings', desc: 'Shibuya evening crowds in Tokyo.', category: 'Cities', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-64' },
    { id: 5, title: 'Scuba Swim', desc: 'Diving beside exotic sea turtles.', category: 'Adventure', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-96' },
    { id: 6, title: 'Dune Drifting', desc: 'Sand dunes under Dubai starry skies.', category: 'Adventure', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-64' },
    { id: 7, title: 'Yacht Cruising', desc: 'Sailing the Arabian Gulf.', category: 'Luxury', url: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-80' },
    { id: 8, title: 'Savannah Lions', desc: 'Observing wildlife in natural reserves.', category: 'Wildlife', url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', cols: 'col-span-1', rows: 'h-96' }
  ];

  const filters = ['All', 'Beaches', 'Mountains', 'Cities', 'Adventure', 'Luxury', 'Wildlife'];

  const filteredImages = selectedFilter === 'All'
    ? images
    : images.filter(img => img.category === selectedFilter);

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIdx((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-805 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Visual Logs</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-stone-850 mt-1">
            Travel Gallery.
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            Explore authentic visual snaps captured during coordinates mapping across the globe. Click any preview to trigger the lightbox.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap gap-2.5 border-b border-stone-200 pb-6 mb-8 text-xs font-semibold overflow-x-auto scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setLightboxIdx(null);
              }}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#ff2a74] to-[#0066ff] border-[#ff2a74] text-white shadow-sm'
                  : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIdx(idx)}
              className={`break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer border border-stone-200 hover:border-[#ff2a74]/40 shadow-sm ${img.rows}`}
              data-cursor="zoom"
            >
              {/* Blur Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-85 transition-opacity" />
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Content caption */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <span className="text-[8px] font-bold text-[#ffcbd5] tracking-widest uppercase block">{img.category}</span>
                <h4 className="font-heading font-black text-sm mt-0.5">{img.title}</h4>
                <p className="text-[10px] text-white/70 leading-normal line-clamp-1 mt-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Slider Content Wrapper */}
            <div className="relative flex items-center justify-center max-w-4xl w-full h-[60vh]">
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-[-20px] sm:left-4 z-30 p-2.5 rounded-full bg-black/40 text-white border border-white/10 hover:bg-white/5 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Main Image */}
              <motion.img
                key={lightboxIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIdx].url}
                alt={filteredImages[lightboxIdx].title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="absolute right-[-20px] sm:right-4 z-30 p-2.5 rounded-full bg-black/40 text-white border border-white/10 hover:bg-white/5 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Info details */}
            <div className="text-center mt-6 max-w-sm">
              <span className="text-[9px] font-bold text-[#ff2a74] uppercase tracking-widest">
                {filteredImages[lightboxIdx].category}
              </span>
              <h3 className="font-heading font-extrabold text-white text-lg mt-1">
                {filteredImages[lightboxIdx].title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mt-2 font-light">
                {filteredImages[lightboxIdx].desc}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
