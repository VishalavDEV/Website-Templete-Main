import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Eye, 
  Layers, 
  ExternalLink,
  X
} from 'lucide-react';
import { PORTFOLIO_GALLERY } from '../data/universityData';
import { PortfolioItem } from '../types';

export const PortfolioGallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Campus', 'Graduation', 'Laboratories', 'Sports', 'Events'];

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') return PORTFOLIO_GALLERY;
    return PORTFOLIO_GALLERY.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#0e1b2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffb606] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS LIFE & GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Moments of Campus Life & Discoveries
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a visual tour through our historic lawns, advanced robotics cleanrooms, athletic competitions, and vibrant graduation celebrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#ffb606] text-slate-950 shadow-md font-black'
                  : 'bg-[#132238] text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="relative h-64 sm:h-72 overflow-hidden cursor-pointer group border border-slate-800"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b2e]/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-[#ffb606] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-black text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#ffb606]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand view</span>
                </div>
              </div>

              {/* Static Category Pill */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#132238] border border-slate-700 max-w-3xl w-full overflow-hidden shadow-2xl relative text-white"
          >
            <div className="relative h-[420px] w-full bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/70 hover:bg-[#ffb606] hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#ffb606] uppercase tracking-wider">
                  {lightboxItem.category}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                {lightboxItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
