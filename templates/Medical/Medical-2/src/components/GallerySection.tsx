import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../types';
import { galleryData } from '../data/galleryData';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, 
  MapPin, Cpu, Eye, Filter 
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Facilities', 'Technology', 'Patient Care', 'Diagnostics'];

  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredGallery.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const currentLightboxItem = activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Clinical Environment & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Inside Medicio Health Campus
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Take a visual tour through our advanced surgical suites, molecular laboratories, quiet patient recovery sanctuaries, and healing atriums.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-card-${item.id}`}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 bg-slate-900 cursor-pointer aspect-4/3 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md text-white p-1.5 rounded-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Card Footer Info */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/70 px-2 py-0.5 rounded border border-teal-800/60 inline-block">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm leading-tight text-white group-hover:text-teal-200 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-300">
                  <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {currentLightboxItem && activeLightboxIndex !== null && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Center Card */}
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[85vh]">
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px]">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold px-3 py-0.5 rounded-full">
                      {currentLightboxItem.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {currentLightboxItem.location}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {activeLightboxIndex + 1} / {filteredGallery.length}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-white/5 text-xs text-teal-200">
                  <span className="font-bold text-white block mb-0.5">Clinical Specs: </span>
                  {currentLightboxItem.specs}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
