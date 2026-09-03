import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Search, 
  Eye, 
  Sparkles, 
  SlidersHorizontal, 
  Share2, 
  Download,
  LayoutGrid,
  Columns
} from 'lucide-react';

const FALLBACK_ITEMS = [
  {
    id: "1",
    title: "Alpine Serenity",
    category: "nature",
    categoryLabel: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    description: "Misty sunrise reflecting on the pristine alpine lake waters in the Italian Dolomites.",
    date: "2026-05-12",
    tags: ["Mountain", "Lake", "Dawn", "Reflection"]
  },
  {
    id: "2",
    title: "Trailblazer Wanderlust",
    category: "bagpacker",
    categoryLabel: "Bagpacker",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    description: "A lone backpacker looking out over the expansive canyon vista at golden hour.",
    date: "2026-06-03",
    tags: ["Travel", "Adventure", "Hiker", "Canyon"]
  },
  {
    id: "3",
    title: "Heritage Rhythms",
    category: "culture",
    categoryLabel: "Culture",
    imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    description: "Traditional festival colors and street celebration portraits in historic alleys.",
    date: "2026-06-20",
    tags: ["Tradition", "Portraits", "Street", "Carnival"]
  },
  {
    id: "4",
    title: "Spring Blossom Symphony",
    category: "bouquet",
    categoryLabel: "Bouquet",
    imageUrl: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
    description: "Artisan hand-tied botanical arrangement in natural soft morning light.",
    date: "2026-07-04",
    tags: ["Floral", "Still Life", "Botanical", "Spring"]
  },
  {
    id: "5",
    title: "Emerald Forest Whispers",
    category: "nature",
    categoryLabel: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    description: "Lush ancient green canopy filtered by dramatic morning sunbeams.",
    date: "2026-07-15",
    tags: ["Forest", "Woods", "Sunlight", "Canopy"]
  },
  {
    id: "6",
    title: "Nomad Horizons",
    category: "bagpacker",
    categoryLabel: "Bagpacker",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    description: "Exploring uncharted coastal trails with just a camera body and pack.",
    date: "2026-07-28",
    tags: ["Coastal", "Solo", "Journey", "Coastline"]
  },
  {
    id: "7",
    title: "Ancient Architecture",
    category: "culture",
    categoryLabel: "Culture",
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    description: "Intricate carvings and timeless arches in historic sacred temples.",
    date: "2026-08-05",
    tags: ["Historic", "Monument", "Art", "Heritage"]
  },
  {
    id: "8",
    title: "Vintage Rose Petals",
    category: "bouquet",
    categoryLabel: "Bouquet",
    imageUrl: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85",
    description: "Soft romantic palette with delicate English garden roses and silver eucalyptus.",
    date: "2026-08-18",
    tags: ["Pastel", "Wedding", "Romance", "Roses"]
  }
];

export default function Portfolio({ onOpenLightbox, likes, onToggleLike, onShare }) {
  const [items, setItems] = useState(FALLBACK_ITEMS);
  const [categories, setCategories] = useState(['all', 'nature', 'bagpacker', 'culture', 'bouquet']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [gridColumns, setGridColumns] = useState(4); // 3 or 4 columns
  const [loading, setLoading] = useState(false);
  const [backendActive, setBackendActive] = useState(false);

  // Fetch from Spring Boot backend on mount
  useEffect(() => {
    fetch('http://localhost:8080/api/categories')
      .then((res) => res.json())
      .then((cats) => {
        if (Array.isArray(cats) && cats.length > 0) {
          setCategories(cats);
          setBackendActive(true);
        }
      })
      .catch((err) => console.log('Backend categories fallback in use:', err));

    fetch('http://localhost:8080/api/portfolio-items')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
          setBackendActive(true);
        }
      })
      .catch((err) => console.log('Backend portfolio fallback in use:', err));
  }, []);

  // Filter items based on category & search query
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categoryLabels = {
    all: 'All Works',
    nature: 'Nature',
    bagpacker: 'Bagpacker',
    culture: 'Culture',
    bouquet: 'Bouquet'
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#141414] py-24 sm:py-32 scroll-mt-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#e74c3c] uppercase">
              PORTFOLIO SHOWCASE
            </span>
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Captured Moments & Stories
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Browse through curations of natural landscapes, wanderlust expeditions, cultural traditions, and fine botanical photography.
          </p>

          {/* Backend Status indicator badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
            <span className={`w-2 h-2 rounded-full ${backendActive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span>{backendActive ? 'Spring Boot REST API Connected' : 'Local Dynamic Store'}</span>
          </div>
        </div>

        {/* Filter Controls Bar: Categories, Search, Grid Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#e74c3c] text-white shadow-lg shadow-[#e74c3c]/30 scale-105'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  id={`filter-btn-${cat}`}
                >
                  {categoryLabels[cat] || cat.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Column Layout Switcher */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search photos, tags..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c] transition-colors"
                id="portfolio-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Switcher */}
            <div className="hidden sm:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-full transition-colors ${
                  gridColumns === 3 ? 'bg-[#e74c3c] text-white' : 'text-gray-400 hover:text-white'
                }`}
                title="3 Columns Grid"
              >
                <Columns className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-full transition-colors ${
                  gridColumns === 4 ? 'bg-[#e74c3c] text-white' : 'text-gray-400 hover:text-white'
                }`}
                title="4 Columns Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <Search className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">No photos found</h3>
            <p className="text-gray-400 text-sm mt-1">Try resetting the filter or searching for another keyword.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-[#e74c3c] text-white hover:bg-[#d63031] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              gridColumns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            } gap-6 sm:gap-8`}
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => {
                const isLiked = !!likes[item.id];
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-[#e74c3c]/10 transition-all duration-300 flex flex-col"
                  >
                    {/* Image Container with Hover Zoom */}
                    <div 
                      className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => onOpenLightbox(item, filteredItems)}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Dark Vignette Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        
                        {/* Top Overlay Bar */}
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e74c3c] text-white shadow-md">
                            {item.categoryLabel || item.category}
                          </span>
                          
                          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => onToggleLike(item.id)}
                              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                isLiked
                                  ? 'bg-rose-500 text-white'
                                  : 'bg-black/50 text-white hover:bg-rose-500'
                              }`}
                              title="Like photo"
                            >
                              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
                            </button>
                            <button
                              onClick={() => onShare(item)}
                              className="p-2 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                              title="Share photo"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <Eye className="w-4 h-4 text-[#e74c3c]" />
                            <span>Quick View</span>
                          </div>
                          <span className="text-[11px] text-gray-300">{item.date || '2026'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 
                          onClick={() => onOpenLightbox(item, filteredItems)}
                          className="text-lg font-bold text-white group-hover:text-[#e74c3c] transition-colors cursor-pointer line-clamp-1"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Card Footer: Tags & Like Button */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.tags?.slice(0, 2).map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onToggleLike(item.id)}
                          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-rose-400 transition-colors"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                          <span>{isLiked ? '1 Like' : 'Like'}</span>
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
