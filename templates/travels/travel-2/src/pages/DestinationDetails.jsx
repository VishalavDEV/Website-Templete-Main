import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Star, ArrowLeft, Heart, CheckCircle, Info, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchDestinationById } from '../services/api';

export default function DestinationDetails({ onAddFavorite, favorites = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dest, setDest] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'attractions', 'tips'
  
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDestinationById(id);
      setDest(data);
    }
    loadData();
  }, [id]);

  if (!dest) {
    return (
      <div className="min-h-screen bg-gradient-soft text-stone-850 flex items-center justify-center">
        <div className="text-center">
          <Compass size={40} className="text-[#ff2a74] animate-spin mx-auto mb-4" />
          <p className="text-sm text-stone-500 font-medium">Packing bags and loading details...</p>
        </div>
      </div>
    );
  }

  const isFav = favorites.includes(dest.id);
  const allImages = dest.gallery && dest.gallery.length > 0 
    ? [dest.image, ...dest.gallery] 
    : [dest.image];

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pb-20">
      
      {/* 1. Immersive Image Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/30 to-black/35 z-10" />
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover cursor-pointer hover:scale-101 transition-transform duration-700"
          onClick={() => {
            setLightboxImages(allImages);
            setLightboxIndex(0);
          }}
        />

        {/* Back and Favorite Floating Controls */}
        <div className="absolute top-28 left-6 right-6 z-20 max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate('/destinations')}
            className="p-3 rounded-xl bg-white/80 hover:bg-[#ff2a74] hover:text-white border border-stone-200 transition-all flex items-center justify-center text-stone-700 cursor-pointer shadow-sm"
          >
            <ArrowLeft size={18} />
          </button>
          
          <button
            onClick={() => onAddFavorite(dest.id)}
            className={`p-3 rounded-xl border transition-all flex items-center justify-center cursor-pointer ${
              isFav
                ? 'bg-[#ff2a74] border-[#ff2a74] text-white shadow-lg'
                : 'bg-white/80 border-stone-200 text-stone-700 hover:text-[#ff2a74]'
            }`}
          >
            <Heart size={18} className={isFav ? 'fill-current' : ''} />
          </button>
        </div>

        {/* Floating Destination Hero Header */}
        <div className="absolute bottom-6 left-6 right-6 z-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-heading font-extrabold text-white bg-[#ff2a74] py-1 px-3.5 rounded-full uppercase tracking-wider shadow-sm">
                <MapPin size={10} />
                {dest.country}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-850 mt-3 drop-shadow-sm">
                {dest.name}
              </h1>
              <span className="text-xs sm:text-sm font-semibold italic text-[#ff2a74] block mt-1">
                "{dest.tagline}"
              </span>
            </div>
            
            <div className="bg-white/80 border border-stone-250/60 p-4 rounded-2xl flex items-center gap-6 shadow-md backdrop-blur-md">
              <div>
                <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">Rating</span>
                <div className="flex items-center gap-1 text-[#ff2a74] mt-1">
                  <Star size={14} className="fill-current" />
                  <span className="text-sm font-bold text-stone-800">{dest.rating}</span>
                </div>
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div>
                <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">Base Cost</span>
                <span className="text-lg font-heading font-black text-stone-800 mt-1 block">
                  ${dest.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Overview & Tab Navigators */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Tab buttons */}
          <div className="flex border-b border-stone-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'attractions', label: 'Top Sights' },
              { id: 'tips', label: 'Travel Guidelines' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 px-6 font-heading font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === tab.id ? 'text-[#ff2a74]' : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2a74]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-sm min-h-[250px]">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-stone-850 mb-3">About this destination</h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-medium">
                    {dest.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-150">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase">Transit Method</span>
                    <span className="text-sm font-heading font-extrabold text-stone-800 mt-1 block">{dest.travelType} transit</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-150">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase">Best Season</span>
                    <span className="text-sm font-heading font-extrabold text-stone-800 mt-1 block">{dest.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'attractions' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-heading font-extrabold text-stone-850 mb-2">Must-Visit Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.attractions && dest.attractions.map((spot, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-150 transition-colors"
                    >
                      <CheckCircle size={18} className="text-[#ff2a74] shrink-0" />
                      <span className="text-xs font-heading font-extrabold text-stone-700">{spot}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'tips' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-stone-850 mb-2">Essential Travel Guidelines</h3>
                  <p className="text-stone-500 text-xs leading-relaxed font-medium">
                    This location is best reached via <span className="font-bold text-[#ff2a74]">{dest.travelType}</span> transit. Bookings under our premium tiers bundle airport terminal lounge access, expedited check-in, and local hotel limousine transfers.
                  </p>
                </div>
                
                <div className="flex gap-3 p-5 bg-[#ff2a74]/5 border border-[#ff2a74]/15 rounded-2xl text-xs text-[#ff2a74]/90 font-medium">
                  <Info className="shrink-0" size={16} />
                  <span>
                    Keep an eye on temperature fluctuations. The best season is currently listed as {dest.bestTime} with average temperatures hovering around {dest.temperature}.
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Gallery Sections */}
          {dest.gallery && dest.gallery.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-heading font-black text-stone-850">Visual Snippets</h3>
              <div className="grid grid-cols-3 gap-4">
                {dest.gallery.map((imgUrl, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="h-28 sm:h-36 rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer"
                    onClick={() => {
                      setLightboxImages(allImages);
                      setLightboxIndex(idx + 1);
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`${dest.name} snippet ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Sticky Booking & Planning Details */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white border border-stone-200/80 rounded-3xl p-6 shadow-md flex flex-col gap-5">
            <div>
              <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">ESTIMATED BUDGET</span>
              <h3 className="text-3xl font-heading font-black text-stone-850 mt-1">
                ${dest.price} <span className="text-xs text-stone-400 font-semibold block sm:inline">/ per traveler</span>
              </h3>
            </div>

            <div className="flex flex-col gap-3.5 bg-stone-50 rounded-2xl p-4 border border-stone-150 text-xs font-semibold text-stone-600">
              <div className="flex justify-between">
                <span>Avg. Temperature:</span>
                <span className="text-stone-800 font-bold">{dest.temperature}</span>
              </div>
              <div className="flex justify-between">
                <span>Best Season:</span>
                <span className="text-stone-800 font-bold">{dest.bestTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Difficulty Level:</span>
                <span className="text-stone-800 font-bold capitalize">{dest.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span>Primary Transit:</span>
                <span className="text-stone-800 font-bold">{dest.travelType}</span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/planner?dest=${encodeURIComponent(dest.name)}`)}
              className="w-full py-4 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-95 text-white font-heading font-extrabold text-xs uppercase tracking-widest rounded-2xl shadow-lg transition-transform hover:scale-102 cursor-pointer text-center border-none"
            >
              Configure Custom Itinerary
            </button>

            <button
              onClick={() => navigate('/destinations')}
              className="w-full py-3.5 bg-white hover:bg-stone-50 text-stone-700 font-heading font-extrabold text-xs uppercase tracking-wider rounded-2xl border border-stone-200 shadow-sm transition-all cursor-pointer text-center"
            >
              ← Back to Destinations
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal Slider Overlay */}
      <AnimatePresence>
        {lightboxIndex >= 0 && lightboxImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIndex(-1)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(-1)}
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-[#ff2a74] text-white rounded-full transition-colors cursor-pointer border border-white/10 z-[10]"
            >
              <X size={20} />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
              }}
              className="absolute left-8 p-4 bg-white/10 hover:bg-[#ff2a74] text-white rounded-full transition-colors cursor-pointer border border-white/10 z-[10]"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImages[lightboxIndex]}
                alt={`Lightbox view ${lightboxIndex}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-8 p-4 bg-white/10 hover:bg-[#ff2a74] text-white rounded-full transition-colors cursor-pointer border border-white/10 z-[10]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter index indicator */}
            <div className="absolute bottom-8 text-white/60 text-xs font-heading font-extrabold uppercase tracking-widest">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
