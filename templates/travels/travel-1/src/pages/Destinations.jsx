import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Star, Compass, Filter, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { MOCK_DESTINATIONS } from '../data/travelData';

export default function Destinations() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQueryParam = searchParams.get('search') || '';

  const [destinations, setDestinations] = useState(MOCK_DESTINATIONS);
  const [filterCountry, setFilterCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setSearchQuery(searchQueryParam);
  }, [searchQueryParam]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error("Error loading destinations", err));
  }, []);

  // Filtering logic
  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = filterCountry === 'All' || 
                           (filterCountry === 'India' && dest.country === 'India') ||
                           (filterCountry === 'International' && dest.country !== 'India');
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Destinations</span>
        </h1>
        <p className="text-slate-600 text-sm">
          Browse our handpicked list of gorgeous domestic and global travel landmarks.
        </p>
      </div>

      {/* Filter and Search Bar controls */}
      <div className="glass-panel rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search country or landmark..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Filter categories */}
        <div className="flex gap-2">
          {['All', 'India', 'International'].map(opt => (
            <button
              key={opt}
              onClick={() => setFilterCountry(opt)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                filterCountry === opt 
                  ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDestinations.map(dest => {
          const isHovered = hoveredCard === dest.id;
          return (
            <motion.div
              key={dest.id}
              layout
              onMouseEnter={() => setHoveredCard(dest.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(`/destinations/${dest.id}`)}
              whileHover={{ y: -8 }}
              className="relative glass-panel rounded-3xl overflow-hidden cursor-pointer group border border-slate-800/80 shadow-md"
            >
              {/* Image zoom on hover */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient tint overlay change */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Floating tags */}
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[10px] text-slate-200 uppercase font-bold tracking-widest px-2.5 py-1 rounded-full flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400 group-hover:animate-bounce" />
                  {dest.country}
                </span>
                
                {/* Rating badge */}
                <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-[10px] text-amber-400 font-bold px-2.5 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {dest.rating}
                </span>

                {/* Animated Airplane flyover on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ x: '-10%', y: '10%', rotate: 10, opacity: 0 }}
                      animate={{ x: '110%', y: '-10%', rotate: 5, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      className="absolute left-0 bottom-1/3 pointer-events-none z-20 text-teal-400"
                    >
                      <svg className="w-10 h-10 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Average Price</span>
                    <span className="text-sm font-bold text-slate-800">${dest.averagePrice}</span>
                  </div>
                  
                  {/* Explore button dynamic hover */}
                  <div className="flex items-center text-xs font-bold text-indigo-400 group-hover:translate-x-1.5 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-20 text-slate-500 space-y-2">
          <Compass className="w-12 h-12 text-slate-700 mx-auto animate-spin" />
          <p className="text-sm">No destinations found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
