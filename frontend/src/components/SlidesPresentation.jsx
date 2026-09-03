import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Heart, 
  Share2, 
  Award, 
  Compass, 
  Check, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  ShoppingBag,
  Search,
  Zap,
  Send,
  CheckCircle2
} from 'lucide-react';

const SLIDE_INFO = [
  { id: 0, title: 'Intro', label: '01 • About' },
  { id: 1, title: 'Portfolio', label: '02 • Works' },
  { id: 2, title: 'Story', label: '03 • Story' },
  { id: 3, title: 'Packages', label: '04 • Booking' },
];

export default function SlidesPresentation({
  currentSlide,
  setSlide,
  onOpenLightbox,
  likes,
  onToggleLike,
  onShare,
  onOpenBooking,
  onShowToast
}) {
  const [categories, setCategories] = useState(['all', 'nature', 'bagpacker', 'culture', 'bouquet']);
  const [selectedCat, setSelectedCat] = useState('all');
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Alpine Serenity",
      category: "nature",
      categoryLabel: "Nature",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      description: "Misty sunrise reflecting on pristine alpine lake waters in the Dolomites.",
      tags: ["Mountain", "Lake", "Dawn"]
    },
    {
      id: "2",
      title: "Trailblazer Wanderlust",
      category: "bagpacker",
      categoryLabel: "Bagpacker",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
      description: "A lone backpacker looking out over an expansive canyon vista.",
      tags: ["Travel", "Adventure", "Hiker"]
    },
    {
      id: "3",
      title: "Heritage Rhythms",
      category: "culture",
      categoryLabel: "Culture",
      imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
      description: "Traditional festival colors and street celebration portraits.",
      tags: ["Tradition", "Portraits", "Street"]
    },
    {
      id: "4",
      title: "Spring Blossom Symphony",
      category: "bouquet",
      categoryLabel: "Bouquet",
      imageUrl: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
      description: "Artisan hand-tied botanical arrangement in soft natural light.",
      tags: ["Floral", "Still Life", "Spring"]
    }
  ]);

  // Fetch from backend
  useEffect(() => {
    fetch('http://localhost:8080/api/portfolio-items')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch((err) => console.log('Backend portfolio fallback in use:', err));
  }, []);

  const filteredItems = items.filter(
    (item) => selectedCat === 'all' || item.category === selectedCat
  );

  const PACKAGES = [
    {
      id: 'portrait',
      name: 'Portrait & Editorial',
      price: '$350',
      duration: '2 Hours Session',
      features: ['2 Locations', '35+ Color-Graded Masters', '48h Expedited Preview'],
      popular: false
    },
    {
      id: 'wedding',
      name: 'Weddings & Celebrations',
      price: '$1,800',
      duration: 'Full Day (8-10 Hours)',
      features: ['2 Photographers', '400+ Archival Photos', 'Hardcover Album & Drone'],
      popular: true
    },
    {
      id: 'commercial',
      name: 'Commercial & Brand',
      price: '$3,200',
      duration: 'Full Day Production',
      features: ['Full Mobile Lighting Rig', 'Commercial License', 'Cinema RAW Profiles'],
      popular: false
    }
  ];

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setSlide((prev) => Math.min(prev + 1, 3));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSlide]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#111111]">
      
      {/* Main Slide Carousel Container */}
      <div className="relative w-full flex-1 flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          
          {/* ==================== SLIDE 1: HERO / INTRO ==================== */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl text-center py-6"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 -z-10 rounded-3xl bg-cover bg-center opacity-30 blur-sm transform scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2000&q=85')`,
                }}
              />

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-[#e74c3c]" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-300 uppercase">
                  ABOUT ME
                </span>
                <span className="h-[2px] w-8 bg-[#e74c3c]" />
              </div>

              {/* Main Title */}
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Photographer
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                I am a professional visual artist and documentary photographer dedicated to capturing timeless emotion, natural light, and authentic human narratives.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setSlide(1)}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#e74c3c] hover:bg-[#d63031] shadow-xl shadow-[#e74c3c]/30 hover:scale-105 transition-all cursor-pointer"
                >
                  Explore Works (Slide 2)
                </button>

                <button
                  onClick={() => setSlide(2)}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                >
                  My Story (Slide 3)
                </button>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-white/5 hover:bg-[#e74c3c] border border-white/10 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#e74c3c]" />
                  <span>Book Shoot</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* ==================== SLIDE 2: FEATURED PORTFOLIO ==================== */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-bold text-[#e74c3c] uppercase tracking-widest mb-1">
                    Slide 02 • Curated Works
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    Portfolio Gallery
                  </h2>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCat(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                        selectedCat === cat
                          ? 'bg-[#e74c3c] text-white shadow-md'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.slice(0, 4).map((item) => {
                  const isLiked = !!likes[item.id];
                  return (
                    <div
                      key={item.id}
                      className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-white/10 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#e74c3c]/50"
                    >
                      <div
                        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                        onClick={() => onOpenLightbox(item, items)}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                          <span className="text-xs font-semibold text-white flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-[#e74c3c]" /> Quick View
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] font-bold text-[#e74c3c] uppercase tracking-wider mb-1">
                            {item.categoryLabel || item.category}
                          </div>
                          <h3
                            onClick={() => onOpenLightbox(item, items)}
                            className="text-base font-bold text-white hover:text-[#e74c3c] transition-colors cursor-pointer truncate"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {item.title}
                          </h3>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                          <button
                            onClick={() => onToggleLike(item.id)}
                            className="flex items-center gap-1 hover:text-rose-400 transition-colors"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                            <span>{isLiked ? 'Liked' : 'Like'}</span>
                          </button>

                          <button
                            onClick={() => onShare(item)}
                            className="hover:text-white transition-colors"
                            title="Share"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Switch */}
              <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                <span>Click any photo to open full Lightbox with EXIF details.</span>
                <button
                  onClick={() => setSlide(2)}
                  className="flex items-center gap-1 text-[#e74c3c] hover:underline font-semibold"
                >
                  <span>Next: Artist Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ==================== SLIDE 3: STORY & STATS ==================== */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left: Photo Portrait */}
                <div className="md:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#1a1a1a] max-h-[380px]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                      alt="Elena Vance"
                      className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#1e1e1e] border border-white/15 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#e74c3c]" />
                    <span className="text-xs font-bold text-white">Sony Photo Award '25</span>
                  </div>
                </div>

                {/* Right: Narrative & Stats */}
                <div className="md:col-span-7 space-y-4">
                  <div className="text-xs font-bold text-[#e74c3c] uppercase tracking-widest">
                    Slide 03 • The Artist's Story
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    "Light is the ink with which we write human memories."
                  </h2>

                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Based in Zurich and traveling worldwide, I combine patient natural lighting with unposed documentary direction to create authentic visual stories.
                  </p>

                  {/* 4 Stats Boxes */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#e74c3c]">12+</div>
                      <div className="text-[11px] text-gray-400">Years Exp.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#e74c3c]">540+</div>
                      <div className="text-[11px] text-gray-400">Shoots Done</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#e74c3c]">36</div>
                      <div className="text-[11px] text-gray-400">Awards</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#e74c3c]">28</div>
                      <div className="text-[11px] text-gray-400">Countries</div>
                    </div>
                  </div>

                  {/* Rig Badges */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-gray-300">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#e74c3c]" /> Leica M11 & Sony α7R V
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> 35mm & 50mm Prime Lenses
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSlide(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e74c3c] text-white hover:bg-[#d63031] transition-all"
                    >
                      <span>View Packages & Rates (Slide 4)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== SLIDE 4: PACKAGES & BOOKING ==================== */}
          {currentSlide === 3 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl"
            >
              <div className="text-center mb-6">
                <div className="text-xs font-bold text-[#e74c3c] uppercase tracking-widest mb-1">
                  Slide 04 • Investment & Contact
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Packages & Reservations
                </h2>
              </div>

              {/* 3 Packages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                      pkg.popular
                        ? 'bg-[#1c1c1c] border-2 border-[#e74c3c] shadow-2xl shadow-[#e74c3c]/15'
                        : 'bg-[#181818] border border-white/10'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#e74c3c] text-white mb-2">
                          Popular
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline gap-1.5 my-3">
                        <span className="text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                          {pkg.price}
                        </span>
                        <span className="text-xs text-gray-400">/ {pkg.duration}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-gray-300 mt-4 pt-3 border-t border-white/10">
                        {pkg.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#e74c3c]" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onOpenBooking(pkg.name)}
                      className={`mt-6 w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        pkg.popular
                          ? 'bg-[#e74c3c] hover:bg-[#d63031] text-white shadow-lg'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      Book This Session
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick Studio Contact Strip */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#e74c3c]" />
                  <span>hello@photom4.studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e74c3c]" />
                  <span>+41 44 555 0199</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e74c3c]" />
                  <span>Limmatquai 42, Zürich</span>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-1.5 rounded-full bg-[#e74c3c] text-white font-semibold text-xs hover:bg-[#d63031]"
                >
                  Instant Reservation Modal
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ==================== BOTTOM / SIDE SLIDE CONTROLLER ==================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-[#181818]/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/15 shadow-2xl">
        {/* Prev Arrow */}
        <button
          onClick={() => setSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-full bg-white/10 text-white hover:bg-[#e74c3c] disabled:opacity-30 disabled:hover:bg-white/10 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* 4 Slide Indicator Pills */}
        <div className="flex items-center gap-2">
          {SLIDE_INFO.map((s) => (
            <button
              key={s.id}
              onClick={() => setSlide(s.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                currentSlide === s.id
                  ? 'bg-[#e74c3c] text-white shadow-md scale-105'
                  : 'text-gray-400 hover:text-white bg-white/5'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => setSlide((prev) => Math.min(prev + 1, 3))}
          disabled={currentSlide === 3}
          className="p-1.5 rounded-full bg-white/10 text-white hover:bg-[#e74c3c] disabled:opacity-30 disabled:hover:bg-white/10 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
