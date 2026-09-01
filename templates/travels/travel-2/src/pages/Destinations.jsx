import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Heart, Star, SlidersHorizontal, DollarSign } from 'lucide-react';
import { fetchDestinations } from '../services/api';

export default function Destinations({ onAddFavorite, favorites = [] }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [destinations, setDestinations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTravelType, setSelectedTravelType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDestinations();
      setDestinations(data);
      setFiltered(data);
    }
    loadData();
  }, []);

  // Sync search query parameter from URL
  useEffect(() => {
    const searchVal = searchParams.get('search');
    if (searchVal !== null) {
      setSearchQuery(decodeURIComponent(searchVal));
    }
  }, [searchParams]);

  // Sync favorites filter query
  useEffect(() => {
    const showOnlyFavs = searchParams.get('favorites') === 'true';
    let result = destinations;

    if (showOnlyFavs) {
      result = result.filter(d => favorites.includes(d.id));
    }

    if (searchQuery.trim() !== '') {
      result = result.filter(
        d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             d.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(d => Array.isArray(d.category)
        ? d.category.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
        : d.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedTravelType !== 'All') {
      result = result.filter(d => d.travelType.toLowerCase().includes(selectedTravelType.toLowerCase()));
    }

    result = result.filter(d => d.price <= maxPrice);

    setFiltered(result);
  }, [searchParams, destinations, searchQuery, selectedCategory, selectedTravelType, maxPrice, favorites]);

  const categoriesList = ['All', 'Beach', 'Mountains', 'Cities', 'Adventure', 'Nature', 'Culture', 'Luxury', 'Hidden Gems'];
  const travelTypeList = ['All', 'Flight', 'Train'];

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest">Global Catalog</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-800 mt-1">
            Explore Destinations
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            Wander across generational heritage temples, rest in tropical water villa lagoons, or ski down alpine valleys. Customize your filters to search your dream getaway.
          </p>
        </div>

        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              placeholder="Search destinations by name or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-input pl-12 pr-4 text-sm border-stone-200"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold transition-all cursor-pointer text-stone-700 shadow-sm"
          >
            <SlidersHorizontal size={16} className="text-[#ff2a74]" />
            <span>Filters</span>
          </button>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Categories */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#ff2a74] block mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full glass-input text-xs border-stone-200 py-2.5 px-3"
                  >
                    {categoriesList.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Transit Type */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0066ff] block mb-2">Transit Preference</label>
                  <select
                    value={selectedTravelType}
                    onChange={(e) => setSelectedTravelType(e.target.value)}
                    className="w-full glass-input text-xs border-stone-200 py-2.5 px-3"
                  >
                    {travelTypeList.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Price Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#ff2a74]">Max Budget</label>
                    <span className="text-xs font-bold text-stone-700">${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="3000"
                    step="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#ff2a74]"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-bold mt-1">
                    <span>$500</span>
                    <span>$3,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Catalog Grid */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto mt-12 flex flex-col items-center justify-center">
            <span className="text-3xl block mb-3">🧭</span>
            <h3 className="font-heading font-extrabold text-stone-850 text-lg">We couldn't find that destination.</h3>
            <p className="text-xs text-stone-500 mt-1 mb-5 font-semibold">Try clearing filters or search queries to start over.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTravelType('All');
                setMaxPrice(3000);
              }}
              className="btn-primary py-2.5 px-5 text-xs font-bold tracking-wider uppercase cursor-pointer"
            >
              Explore all destinations →
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((dest, idx) => {
                const isFav = favorites.includes(dest.id);
                return (
                  <motion.div
                    key={dest.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card overflow-hidden group cursor-pointer border border-stone-200/60 flex flex-col justify-between"
                  >
                    {/* Image Header */}
                    <div className="relative h-56 w-full overflow-hidden" onClick={() => navigate(`/destinations/${dest.id}`)}>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onAddFavorite) onAddFavorite(dest.id);
                        }}
                        className={`absolute top-4 right-4 p-2 rounded-full border transition-all cursor-pointer shadow-sm ${
                          isFav 
                            ? 'bg-[#ff2a74] border-[#ff2a74] text-white' 
                            : 'bg-white/90 border-stone-100 text-stone-600 hover:text-[#ff2a74]'
                        }`}
                      >
                        <Heart size={14} className={isFav ? 'fill-current' : ''} />
                      </button>

                      {/* Difficulty Badge */}
                      <span className="absolute bottom-4 left-4 text-[9px] font-heading font-extrabold uppercase tracking-widest text-white bg-black/40 py-1 px-2.5 rounded-full backdrop-blur-[2px]">
                        {dest.difficulty} Difficulty
                      </span>
                    </div>

                    {/* Description Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between" onClick={() => navigate(`/destinations/${dest.id}`)}>
                      <div>
                        <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#ff2a74] uppercase tracking-wider">
                          <MapPin size={9} />
                          <span>{dest.country}</span>
                        </div>

                        <h3 className="font-heading font-black text-stone-850 text-xl mt-0.5">
                          {dest.name}
                        </h3>
                        
                        <span className="text-[10px] italic text-[#ff2a74]/80 font-bold block mt-0.5">
                          "{dest.tagline}"
                        </span>

                        <p className="text-stone-500 text-xs mt-2.5 leading-relaxed line-clamp-2">
                          {dest.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-5 pt-3 border-t border-stone-100">
                        <div className="text-stone-400 text-[10px] font-semibold uppercase">
                          Temp: <span className="text-stone-700 font-bold block">{dest.temperature}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] text-stone-400 block font-semibold">EST. BUDGET</span>
                          <span className="text-sm font-heading font-black text-stone-850">
                            ${dest.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
