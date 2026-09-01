import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, Sparkles, Navigation, Globe, ArrowRight, Heart } from 'lucide-react';
import { fetchDestinations } from '../services/api';
import WorldMap from '../components/WorldMap';
import ScrollStory from '../components/ScrollStory';
import TravelMood from '../components/TravelMood';

export default function Home() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [explorerCategory, setExplorerCategory] = useState('Beach');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDestinations();
      setDestinations(data);
    }
    loadData();
  }, []);

  // Split title into words for word-by-word fade animation
  const heroTitle = "Go Somewhere You've Never Been.";
  const titleWords = heroTitle.split(" ");

  // Categories for the horizontal explorer
  const categories = [
    { id: 'Beach', emoji: '🌴', desc: 'Sun-drenched coastlines and crystalline blue lagoons.' },
    { id: 'Mountains', emoji: '🏔', desc: 'Snow-capped alpine ridges and challenging peak walks.' },
    { id: 'Cities', emoji: '🏙', desc: 'Historic streets, culinary corners, and skyscrapers.' },
    { id: 'Adventure', emoji: '🥾', desc: 'Glaciers, volcanic ridges, and active dune bashing.' },
    { id: 'Nature', emoji: '🌿', desc: 'Palm groves, tea valleys, and silent backwaters.' },
    { id: 'Culture', emoji: '🕌', desc: 'Fortress heritage walks, old temples, and local folklore.' },
    { id: 'Luxury', emoji: '👑', desc: 'Private yacht chartering and top-tier skyline resorts.' },
    { id: 'Hidden Gems', emoji: '💎', desc: 'Isolated quiet villages and pristine secret retreats.' }
  ];

  // Destinations matching the active horizontal explorer category
  const filteredExplorers = destinations.filter(
    d => Array.isArray(d.category)
      ? d.category.some(cat => cat.toLowerCase() === explorerCategory.toLowerCase())
      : d.category.toLowerCase() === explorerCategory.toLowerCase()
  );

  // Fallback if none exist
  const displayExplorers = filteredExplorers.length > 0 
    ? filteredExplorers 
    : destinations.slice(0, 3);

  // Floating widgets details
  const floatingWidgets = [
    { text: "12,438 travelers exploring now", icon: "🌎", delay: 0.5, style: "top-28 left-6 md:left-12" },
    { text: "Best spot this week: Switzerland", icon: "✨", delay: 0.8, style: "bottom-40 left-8 md:left-24" },
    { text: "23 hidden gems mapped", icon: "💎", delay: 1.1, style: "top-20 right-6 md:right-16" },
    { text: "🌎 48 countries explored", icon: "✈️", delay: 1.4, style: "bottom-36 right-8 md:right-28" }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-soft min-h-screen pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-16 px-6">
        {/* Soft Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gradient-to-tr from-[#ff2a74]/5 to-[#00d2ff]/5 rounded-full blur-3xl" />
        
        {/* Floating Widgets */}
        {floatingWidgets.map((w, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ 
              opacity: [0, 1, 1], 
              scale: [0.8, 1, 1],
              y: [15, 0, -6, 0] 
            }}
            transition={{ 
              duration: 5, 
              delay: w.delay, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            className={`absolute z-20 ${w.style} hidden lg:flex items-center gap-2 py-2 px-3 bg-white/70 backdrop-blur-md border border-stone-200/50 rounded-full shadow-md text-[10px] font-bold text-stone-700 tracking-wide select-none`}
          >
            <span>{w.icon}</span>
            <span>{w.text}</span>
          </motion.div>
        ))}

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 py-1.5 px-3.5 bg-gradient-to-r from-[#ff2a74]/10 to-[#0066ff]/10 border border-[#ff2a74]/20 rounded-full mb-6"
            >
              <Sparkles size={13} className="text-[#ff2a74]" />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#ff2a74]">
                Explore Wanderlust Journeys
              </span>
            </motion.div>

            {/* Title Word-by-Word Animation */}
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-stone-800 leading-[1.08] tracking-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  className="inline-block mr-3"
                >
                  {word === "Never" ? (
                    <span className="text-gradient font-black">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-stone-500 text-sm md:text-base mt-6 leading-relaxed max-w-xl font-medium"
            >
              Discover places, experiences and stories that turn every journey into a memory. Wanderly brings dynamic route planners, customized mood selectors, and editorial journals directly to your terminal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto"
            >
              <button
                onClick={() => navigate('/destinations')}
                className="btn-primary py-4 px-8 flex items-center justify-center gap-2 group cursor-pointer shadow-lg rounded-2xl text-sm w-full sm:w-auto"
              >
                <span>Start Exploring</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/planner')}
                className="btn-secondary py-4 px-8 flex items-center justify-center gap-2 cursor-pointer shadow-sm rounded-2xl text-sm w-full sm:w-auto"
              >
                <Compass size={16} className="text-[#0066ff]" />
                <span>Plan My Journey</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right: Animated Globe / Airplane / Pins */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* SVG Flight Arc Path Drawing on load */}
            <svg className="absolute w-[95%] h-[95%] pointer-events-none" viewBox="0 0 500 500">
              <motion.path
                d="M 120,400 Q 250,50 380,350"
                fill="none"
                stroke="rgba(255, 42, 116, 0.12)"
                strokeWidth="4"
                strokeDasharray="6,6"
              />
              <motion.path
                d="M 120,400 Q 250,50 380,350"
                fill="none"
                stroke="url(#heroRouteGradient)"
                strokeWidth="3.5"
                strokeDasharray="500"
                strokeDashoffset={500}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.2, delay: 0.6, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="heroRouteGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2a74" />
                  <stop offset="100%" stopColor="#0066ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main Destination Showcase Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
                alt="Paris showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-widest text-[#ffcbd5]">
                  <Navigation size={10} className="fill-[#ffcbd5]" />
                  <span>Paris, France</span>
                </div>
                <h3 className="font-heading font-black text-2xl mt-0.5">Eiffel Tower</h3>
              </div>
            </motion.div>

            {/* Floating Destination Card 1: Tokyo */}
            <motion.div
              initial={{ x: -100, y: -50, opacity: 0 }}
              animate={{ x: -120, y: -90, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute left-1/2 top-1/2 z-20 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-250/50 flex items-center gap-3 select-none"
            >
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Tokyo"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <span className="text-[8px] font-bold text-stone-400 block uppercase">JAPAN</span>
                <span className="font-heading font-extrabold text-xs text-stone-800">Tokyo Neon</span>
              </div>
            </motion.div>

            {/* Floating Destination Card 2: Swiss Alps */}
            <motion.div
              initial={{ x: 100, y: 50, opacity: 0 }}
              animate={{ x: 130, y: 110, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="absolute left-1/2 top-1/2 z-20 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-250/50 flex items-center gap-3 select-none"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Swiss Alps"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <span className="text-[8px] font-bold text-stone-400 block uppercase">SWITZERLAND</span>
                <span className="font-heading font-extrabold text-xs text-stone-800">Swiss Alps</span>
              </div>
            </motion.div>

            {/* Flying Airplane along path */}
            <motion.div
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ duration: 2.2, delay: 0.6, ease: 'easeInOut' }}
              className="absolute z-30"
              style={{
                offsetPath: `path("M 120,400 Q 250,50 380,350")`,
                offsetRotate: 'auto 90deg',
              }}
            >
              <Plane size={24} className="text-[#ff2a74] fill-[#ff2a74] transform rotate-45 drop-shadow-md" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. WHERE DO YOU WANT TO GO? - HORIZONTAL CATEGORY EXPLORER */}
      <section className="relative w-full py-16 bg-white border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest">Interactive Explorer</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-stone-800 mt-1">
                Where Do You Want To Go?
              </h2>
            </div>
            
            {/* Category horizontal scrolling bar */}
            <div className="flex gap-2.5 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
              {categories.map((c) => {
                const isActive = explorerCategory === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setExplorerCategory(c.id)}
                    className={`flex items-center gap-1.5 py-2 px-4 rounded-xl border text-xs font-heading font-extrabold tracking-wide uppercase transition-all cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? 'active-category' 
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span>{c.emoji}</span>
                    <span>{c.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Display grid representing matched destinations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[360px]">
            <AnimatePresence mode="popLayout">
              {displayExplorers.map((dest, idx) => (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="glass-card overflow-hidden group cursor-pointer border border-stone-200/60 flex flex-col justify-between"
                  onClick={() => navigate(`/destinations/${dest.id}`)}
                  onMouseEnter={() => setHoveredCard(dest.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Temp Badge */}
                    <div className="temp-badge absolute top-4 right-4 py-1 px-2.5 bg-white/95 rounded-lg flex items-center gap-1 border border-stone-100 shadow-sm transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a74] animate-pulse" />
                      <span className="text-[9px] font-bold text-stone-800">{dest.temperature}</span>
                    </div>

                    {/* Best time badge */}
                    <span className="absolute bottom-4 left-4 text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/95 bg-[#ff2a74] py-1 px-3 rounded-full shadow-sm">
                      {dest.bestTime}
                    </span>
                  </div>

                  {/* Info Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#ff2a74] uppercase tracking-wider">
                        <Compass size={9} />
                        <span>{dest.country}</span>
                      </div>
                      
                      <h3 className="font-heading font-black text-stone-800 text-xl mt-0.5">
                        {dest.name}
                      </h3>
                      
                      <span className="text-[10px] italic text-[#ff2a74]/80 font-bold block mt-0.5">
                        "{dest.tagline}"
                      </span>

                      <p className="text-stone-500 text-xs mt-2 leading-relaxed line-clamp-2">
                        {dest.description}
                      </p>
                    </div>

                    {/* Badges footer */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-stone-400 font-bold uppercase tracking-wider">EST. BUDGET</span>
                        <span className="text-sm font-heading font-black text-stone-800">${dest.price}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/destinations/${dest.id}`);
                        }}
                        className="btn-primary py-2 px-4 text-[10px] font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SVG WORLD MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <WorldMap />
      </section>

      {/* 4. SCROLL STORY PARALLAX SECTION */}
      <section className="w-full bg-white border-t border-b border-stone-200/50">
        <ScrollStory />
      </section>

      {/* 5. WHAT'S YOUR TRAVEL MOOD RECOMENDER */}
      <section className="w-full">
        <TravelMood />
      </section>
    </div>
  );
}
