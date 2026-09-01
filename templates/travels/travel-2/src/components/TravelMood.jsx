import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchRecommendations } from '../services/api';
import { MapPin, Sun, Sparkles, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TravelMood() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('adventure');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const moods = [
    { id: 'escape', label: 'Escape', emoji: '🌊', color: 'from-[#e0f2fe] to-[#bae6fd]', accent: '#0066ff' },
    { id: 'adventure', label: 'Adventure', emoji: '🏔', color: 'from-[#ffedd5] to-[#fed7aa]', accent: '#fb8500' },
    { id: 'relax', label: 'Relax', emoji: '🌴', color: 'from-[#f0fdf4] to-[#dcfce7]', accent: '#16a34a' },
    { id: 'explore', label: 'Explore', emoji: '🏙', color: 'from-[#f5f5f4] to-[#e7e5e4]', accent: '#78716c' },
    { id: 'romance', label: 'Romance', emoji: '❤️', color: 'from-[#fdf2f8] to-[#fce7f3]', accent: '#ff2a74' },
    { id: 'food', label: 'Food', emoji: '🍜', color: 'from-[#fffbeb] to-[#fef3c7]', accent: '#d97706' },
    { id: 'photography', label: 'Photography', emoji: '📸', color: 'from-[#faf5ff] to-[#f3e8ff]', accent: '#8b5cf6' },
    { id: 'backpack', label: 'Backpack', emoji: '🎒', color: 'from-[#ecfeff] to-[#cffafe]', accent: '#0891b2' }
  ];

  useEffect(() => {
    async function loadRecs() {
      setLoading(true);
      const data = await fetchRecommendations(selectedMood);
      setRecommendations(data);
      setLoading(false);
    }
    loadRecs();
  }, [selectedMood]);

  const currentMoodObj = moods.find(m => m.id === selectedMood) || moods[0];

  return (
    <div className="relative w-full py-16 px-6 overflow-hidden">
      {/* Background dynamic glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-to-tr ${currentMoodObj.color} opacity-40 blur-[120px] rounded-full transition-all duration-700 ease-in-out pointer-events-none z-0`} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest">Travel Recommender</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-stone-800 mt-1">
            What's Your Travel Mood?
          </h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto mt-2">
            Click a mood emoji to let our AI filter matching destinations in real time.
          </p>
        </div>

        {/* Emojis Selector Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto mb-12">
          {moods.map((mood) => {
            const isSelected = selectedMood === mood.id;
            return (
              <motion.button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white shadow-lg font-bold'
                    : 'bg-white/60 border-stone-200/80 text-stone-600 hover:bg-white'
                }`}
                style={isSelected ? { borderColor: '#ff2a74', color: '#ff2a74' } : {}}
              >
                <span className="text-2xl mb-1.5">{mood.emoji}</span>
                <span className="text-[10px] font-heading font-extrabold tracking-wide uppercase">
                  {mood.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Recommendations Display */}
        <div className="min-h-[360px] relative">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Compass className="animate-spin text-[#ff2a74]" size={36} />
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {recommendations.map((dest, idx) => (
                  <motion.div
                    key={dest.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -15 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-card overflow-hidden group cursor-pointer border border-stone-200/60"
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                  >
                    {/* Image Wrapper */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Rating Tag */}
                      <div className="absolute top-3 right-3 py-1 px-2.5 bg-white/95 backdrop-blur-sm rounded-lg flex items-center gap-1 border border-stone-100 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a74] animate-pulse" />
                        <span className="text-[9px] font-bold text-stone-800">{dest.temperature}</span>
                      </div>

                      {/* Difficulty Badge */}
                      <span className="absolute bottom-3 left-3 text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/90 bg-black/35 py-1 px-2.5 rounded-full backdrop-blur-[2px]">
                        {dest.difficulty} Difficulty
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#ff2a74] uppercase tracking-wider">
                          <MapPin size={9} />
                          <span>{dest.country}</span>
                        </div>
                        
                        <h3 className="font-heading font-extrabold text-stone-800 text-lg mt-0.5">
                          {dest.name}
                        </h3>
                        
                        <p className="text-stone-500 text-xs mt-1.5 leading-relaxed line-clamp-2">
                          {dest.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-stone-100">
                        <div className="text-stone-400 text-[10px] font-semibold uppercase">
                          Best Time: <span className="text-stone-700 font-bold block">{dest.bestTime}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-stone-400 block font-semibold">EST. BUDGET</span>
                          <span className="text-sm font-heading font-extrabold text-stone-800">
                            ${dest.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
