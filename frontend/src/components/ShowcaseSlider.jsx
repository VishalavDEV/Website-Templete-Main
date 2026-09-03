import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  Camera, 
  MapPin, 
  Eye, 
  Layers
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Alpine Dawn Reflections",
    subtitle: "Dolomites, Northern Italy",
    category: "Landscape Masterpiece",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90",
    quote: "In the silence of the dawn, light sculpts the mountains into living art.",
    gear: "Sony α7R V • 24-70mm f/2.8 GM II",
  },
  {
    id: 2,
    title: "Canyon Wanderer Odyssey",
    subtitle: "Zion & Moab, Utah",
    category: "Adventure Narrative",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=90",
    quote: "True journey is not seeking new landscapes, but having new eyes.",
    gear: "Leica M11 • 35mm f/1.4 Summilux",
  },
  {
    id: 3,
    title: "Venetian Lanterns & Soul",
    subtitle: "Venice, Italy",
    category: "Cultural Immersion",
    imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=90",
    quote: "Capturing the timeless whispers of ancient cobblestones and twilight reflections.",
    gear: "Canon EOS R5 • 50mm f/1.2L",
  },
  {
    id: 4,
    title: "Enchanted Sunbeams",
    subtitle: "Black Forest, Germany",
    category: "Atmospheric Nature",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90",
    quote: "A quiet pilgrimage beneath golden light filtering through emerald boughs.",
    gear: "Hasselblad X2D • 45mm f/4",
  }
];

export default function ShowcaseSlider({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [splitMode, setSplitMode] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const current = SLIDES[currentIndex];

  return (
    <section id="slider" className="relative w-full py-20 sm:py-28 bg-[#0d0d0d] text-white overflow-hidden scroll-mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#e74c3c] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Cinematic Slider Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Interactive Visual Reel
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Split Mode Toggle */}
            <button
              onClick={() => setSplitMode(!splitMode)}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 flex items-center gap-1.5 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#e74c3c]" />
              <span>{splitMode ? 'Full View' : 'Split View'}</span>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors"
              title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-emerald-400" /> : <Play className="w-4 h-4 text-amber-400" />}
            </button>
          </div>
        </div>

        {/* Slider Main Stage */}
        <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black ${
          splitMode ? 'grid grid-cols-1 lg:grid-cols-2 min-h-[500px]' : 'min-h-[520px] sm:min-h-[600px] flex items-end'
        }`}>
          
          {/* Main Slide Image */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.imageUrl}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Dark Gradient overlays for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-10 p-6 sm:p-12 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e74c3c] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  <span>{current.category}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {current.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-[#e74c3c]" />
                  <span>{current.subtitle}</span>
                </div>

                <p className="text-gray-300 italic text-sm sm:text-base border-l-2 border-[#e74c3c] pl-4 py-1">
                  "{current.quote}"
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                    <Camera className="w-3.5 h-3.5 text-[#e74c3c]" />
                    {current.gear}
                  </span>

                  <button
                    onClick={() => onOpenBooking(current.title)}
                    className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#e74c3c] text-white border border-white/20 transition-all hover:scale-105"
                  >
                    Book Session
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Prev/Next Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#e74c3c] text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#e74c3c] text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Autoplay Progress Bar */}
          {isPlaying && (
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1 bg-[#e74c3c] z-30 shadow-md"
            />
          )}

        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative rounded-xl overflow-hidden p-2 text-left transition-all duration-200 flex items-center gap-3 border ${
                  isActive
                    ? 'bg-white/10 border-[#e74c3c] shadow-lg ring-2 ring-[#e74c3c]/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white truncate">
                    {slide.title}
                  </div>
                  <div className="text-[11px] text-gray-400 truncate">
                    {slide.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
