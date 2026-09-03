import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Google Fonts and FontAwesome for the Sage & Shutter template
const FontLinks = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Alex+Brush&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </>
);

// Earthy, desaturated wedding sample images
const IMAGES = {
  hero1: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
  hero2: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80",
  hero3: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
  hero4: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1920&q=80",
  about: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  portfolio1: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
  portfolio2: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
  portfolio3: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
  portfolio4: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
  portfolio5: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  portfolio6: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=800&q=80"
};

// Earthy-toning filter effect applied to wedding photos
const photoFilterStyle = {
  filter: 'sepia(0.18) contrast(0.96) saturate(0.82) brightness(0.98)'
};

// 1. NAVBAR COMPONENT
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 box-border px-6 md:px-12 py-4 flex items-center justify-between ${
          isScrolled 
            ? 'bg-[#6B7052] shadow-md border-b border-[#7A7F61] text-[#F5F1EA]' 
            : 'bg-transparent text-[#F5F1EA]'
        }`}
      >
        {/* Monogram Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center font-serif text-lg tracking-widest transition-transform duration-500 group-hover:rotate-12">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.15em] font-light">SAGE & SHUTTER</span>
            <span className="text-[7px] uppercase tracking-[0.3em] opacity-75">Fine Art Weddings</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-xs uppercase tracking-[0.25em] font-medium hover:text-[#E07A5F] transition-colors duration-300">Home</a>
          <a href="#gallery" className="text-xs uppercase tracking-[0.25em] font-medium hover:text-[#E07A5F] transition-colors duration-300">Gallery</a>
          <a href="#about" className="text-xs uppercase tracking-[0.25em] font-medium hover:text-[#E07A5F] transition-colors duration-300">Our Story</a>
          <a href="#services" className="text-xs uppercase tracking-[0.25em] font-medium hover:text-[#E07A5F] transition-colors duration-300">Commissions</a>
          <a href="#inquire" className="px-6 py-2.5 rounded-full border border-current text-xs uppercase tracking-[0.2em] hover:bg-[#F5F1EA] hover:text-[#6B7052] hover:border-transparent transition-all duration-300">Inquire</a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-current focus:outline-none p-1"
        >
          <i className="fa-solid fa-bars-staggered text-xl"></i>
        </button>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-72 bg-[#6B7052] border-l border-[#7A7F61] text-[#F5F1EA] z-50 p-8 flex flex-col space-y-12"
            >
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg tracking-widest">S & W</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl focus:outline-none p-1"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-left">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.2em] border-b border-white/10 pb-2">Home</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.2em] border-b border-white/10 pb-2">Gallery</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.2em] border-b border-white/10 pb-2">Our Story</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.2em] border-b border-white/10 pb-2">Commissions</a>
                <a href="#inquire" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.2em] border-b border-white/10 pb-2">Inquire</a>
              </div>

              <div className="pt-12 text-center text-xs opacity-75 tracking-wider uppercase space-y-2">
                <p>Global Commissions</p>
                <p className="font-semibold text-white">hello@sageandwillow.com</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

// 2. HERO SECTION
function Hero() {
  return (
    <section id="home" className="relative bg-[#6B7052] text-[#F5F1EA] min-h-screen pt-28 pb-16 px-6 md:px-12 flex items-center overflow-hidden">
      {/* Decorative background grid line element */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="space-y-8 text-left max-w-xl">
          <div className="flex items-center gap-4">
            {/* Monogram circle logo mark */}
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl tracking-[0.1em] text-[#F5F1EA] flex-shrink-0">
              S·W
            </div>
            {/* Vertical tagline */}
            <div className="flex flex-col justify-center border-l border-white/20 pl-4 h-14">
              <span className="text-[8px] uppercase tracking-[0.45em] text-[#F5F1EA] font-semibold leading-tight">WEDDING</span>
              <span className="text-[8px] uppercase tracking-[0.45em] text-[#F5F1EA] font-semibold leading-tight">PHOTOGRAPHY</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide leading-[1.1] text-white">
            Capturing the <span className="italic font-normal font-serif">Organic Poetry</span> of Your Love Day
          </h1>

          <p className="text-sm md:text-base text-[#F5F1EA]/80 font-sans tracking-wide leading-relaxed max-w-md">
            Editorial, earthy-toned wedding photography for the intentional couple. Documenting raw elegance and timeless connection across the globe.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <a 
              href="#inquire" 
              className="inline-block px-8 py-3.5 rounded-full bg-[#F5F1EA] text-[#6B7052] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Reserve Your Date
            </a>
            {/* Small accent dot indicator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5F1EA]/80 pl-2">
              <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse"></span>
              Booking 2026/27
            </div>
          </div>
        </div>

        {/* Right Side - Tilted Mood Board Masonry Grid */}
        <div className="relative w-full h-[500px] md:h-[580px] lg:h-[620px] flex items-center justify-center">
          
          {/* Main Diagonal rotated container grid */}
          <div className="grid grid-cols-2 gap-4 transform rotate-[4deg] w-full max-w-[480px] relative">
            
            {/* Grid Image Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#7A7F61] shadow-2xl"
            >
              <img 
                src={IMAGES.hero1} 
                alt="Earthy Wedding Portrait" 
                className="w-full h-full object-cover" 
                style={photoFilterStyle}
              />
            </motion.div>

            {/* Grid Image Card 2 (Varying offset size) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="aspect-square rounded-2xl overflow-hidden bg-[#7A7F61] shadow-2xl mt-8"
            >
              <img 
                src={IMAGES.hero2} 
                alt="Bride Candid" 
                className="w-full h-full object-cover" 
                style={photoFilterStyle}
              />
            </motion.div>

            {/* Layout Preview/Quote Text Card (Mood board feel) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="aspect-square rounded-2xl bg-[#FFEEDD] text-[#6B7052] p-6 flex flex-col justify-between shadow-2xl -mt-6"
            >
              <span className="text-[8px] uppercase tracking-widest opacity-60">S & W — Vol. VIII</span>
              <p className="font-serif italic text-sm md:text-base leading-relaxed text-[#2B2D24]">
                "To document love is to hold a mirror to the sacred, capturing beauty in its most quiet alignments."
              </p>
              <span className="text-[10px] tracking-wider uppercase font-semibold">Editorial Series</span>
            </motion.div>

            {/* Grid Image Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#7A7F61] shadow-2xl"
            >
              <img 
                src={IMAGES.hero3} 
                alt="Detail shoot" 
                className="w-full h-full object-cover" 
                style={photoFilterStyle}
              />
            </motion.div>
          </div>

          {/* Floating Badge Card - overlaps the grid bottom right */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.8, stiffness: 260, damping: 20 }}
            className="absolute bottom-4 right-2 md:right-8 bg-[#F5F1EA] text-[#2B2D24] px-5 py-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[#FFEEDD] flex items-center gap-4 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-[#6B7052] text-[#F5F1EA] flex items-center justify-center">
              <i className="fa-solid fa-asterisk text-sm animate-[spin_8s_linear_infinite]"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold uppercase tracking-wider">Curated Galleries</span>
              <span className="text-[10px] text-neutral-500 font-sans tracking-wide">65+ Destinations Worldwide</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// 3. PORTFOLIO GRID SECTION
function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Editorials', 'Details', 'Moments'];

  const items = [
    { id: 1, category: 'Editorials', image: IMAGES.portfolio1, title: 'Olivia & Marcus', subtitle: 'Tuscan Estate, Italy', size: 'col-span-1 md:col-span-2' },
    { id: 2, category: 'Details', image: IMAGES.portfolio3, title: 'The Olive Banquet', subtitle: 'Warm Linens & Terracotta', size: 'col-span-1' },
    { id: 3, category: 'Moments', image: IMAGES.portfolio2, title: 'First Glimpse of Shore', subtitle: 'Candid Shoreside', size: 'col-span-1' },
    { id: 4, category: 'Editorials', image: IMAGES.portfolio4, title: 'Chalet Editorial', subtitle: 'Alps, France', size: 'col-span-1 md:col-span-2' },
    { id: 5, category: 'Moments', image: IMAGES.portfolio5, title: 'Dancing in the Dew', subtitle: 'Greenhouse Estate', size: 'col-span-1' },
    { id: 6, category: 'Details', image: IMAGES.portfolio6, title: 'Floral Tapestry', subtitle: 'Organic Still Life', size: 'col-span-1' }
  ];

  const filteredItems = items.filter(item => activeTab === 'All' || item.category === activeTab);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F5F1EA] text-[#2B2D24]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7052] font-semibold block">
            SELECTED WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-[#2B2D24]">
            Featured Portfolios
          </h2>
          <div className="w-12 h-[1px] bg-[#6B7052] mx-auto mt-4"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-2 md:gap-4 mb-16 border-b border-[#FFEEDD] pb-4 max-w-md mx-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs uppercase tracking-[0.2em] font-medium py-2 px-3 transition-colors duration-300 ${
                activeTab === cat 
                  ? 'text-[#6B7052] border-b border-[#6B7052]' 
                  : 'text-neutral-500 hover:text-[#6B7052]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive CSS Grid (Mixed spans) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden aspect-[4/3] rounded-2xl group shadow-sm bg-neutral-200 cursor-pointer ${item.size}`}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  style={photoFilterStyle}
                />

                {/* Cover Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B7052]/90 via-[#6B7052]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#F5F1EA] mb-1 font-sans">{item.category}</span>
                  <h3 className="text-xl md:text-2xl font-serif font-light text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]"></span>
                    <p className="text-[#F5F1EA]/80 text-[10px] uppercase tracking-wider">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

// 4. ABOUT/INTRO SECTION
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFEEDD] text-[#2B2D24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="space-y-6 text-left max-w-lg">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7052] font-semibold block">
            MEET THE ARTISTS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide leading-tight">
            Chasing the <span className="font-serif italic font-normal text-[#6B7052]">Tender Geometry</span> of Light
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed font-sans tracking-wide">
            We believe that wedding photography is more than just documentation—it is visual poetry. Our style is deeply rooted in organic lighting, earthy-tones, and candid editorial alignments.
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed font-sans tracking-wide">
            With over 8 years of traveling across countryside estates, historical manors, and wild coastlines, we capture the silent, timeless moments that define your legacy.
          </p>
          <div className="pt-4">
            <a 
              href="#inquire" 
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#6B7052] group hover:text-[#E07A5F] transition-colors duration-300"
            >
              View Our Commissions
              <span className="w-6 h-[1px] bg-current transform group-hover:translate-x-2 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        {/* Right Side - Image with frame */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Framed Image Container */}
          <div className="relative w-full max-w-[400px]">
            {/* Elegant thin border offset frame */}
            <div className="absolute -inset-4 border border-[#6B7052]/25 rounded-2xl transform -rotate-1 pointer-events-none"></div>
            
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 shadow-2xl relative">
              <img 
                src={IMAGES.about} 
                alt="Sage and Willow photographers in action" 
                className="w-full h-full object-cover"
                style={photoFilterStyle}
              />
            </div>

            {/* Little aesthetic label on frame */}
            <div className="absolute -bottom-4 -left-4 bg-[#6B7052] text-[#F5F1EA] px-4 py-2 rounded-lg text-[9px] uppercase tracking-widest font-mono shadow-md">
              Est. 2018 · Sage & Shutter
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 5. SERVICES/FEATURES STRIP
function Services() {
  const features = [
    {
      icon: "fa-solid fa-camera-retro",
      title: "Fine Art Captures",
      desc: "Full-day wedding photography utilizing digital medium format and organic, earthy tones."
    },
    {
      icon: "fa-solid fa-compass",
      title: "Location Scouting",
      desc: "Comprehensive geographical scouting of editorial angles, lighting grids, and secret backdrops."
    },
    {
      icon: "fa-solid fa-box-open",
      title: "Archival Print Boxes",
      desc: "Handcrafted physical linen boxes containing custom Giclée museum-grade fine art prints."
    },
    {
      icon: "fa-solid fa-map-location-dot",
      title: "Travel Commissions",
      desc: "Available worldwide for destination weddings, with full travel planning built-in."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F1EA] text-[#2B2D24]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 justify-items-center">
          {features.map((feat, idx) => (
            <div key={idx} className="space-y-4 max-w-[260px] text-center sm:text-left flex flex-col items-center sm:items-start group">
              <div className="w-12 h-12 rounded-full border border-[#6B7052]/20 flex items-center justify-center text-[#6B7052] text-lg bg-[#FFEEDD] group-hover:bg-[#6B7052] group-hover:text-[#F5F1EA] group-hover:border-transparent transition-all duration-500">
                <i className={feat.icon}></i>
              </div>
              <h3 className="text-base font-serif font-light tracking-wide text-[#2B2D24]">{feat.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans tracking-wide">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. BOOKING FORM SECTION
function InquireForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !details) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setName('');
        setEmail('');
        setDate('');
        setDetails('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="inquire" className="py-24 bg-[#6B7052] text-[#F5F1EA] relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#FFEEDD] font-bold block">
            BEGIN YOUR STORY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-white">
            Reserve Your Celebration
          </h2>
          <div className="w-12 h-[1px] bg-[#FFEEDD] mx-auto mt-4"></div>
          <p className="text-xs text-[#FFEEDD]/80 uppercase tracking-widest max-w-md mx-auto pt-2">
            Limited commissions accepted globally to ensure intimate creative focus
          </p>
        </div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FFEEDD] text-[#6B7052] p-8 rounded-2xl max-w-xl mx-auto shadow-2xl space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#6B7052]/10 border border-[#6B7052]/20 flex items-center justify-center text-[#6B7052] text-xl mx-auto">
              <i className="fa-solid fa-envelope-circle-check"></i>
            </div>
            <h3 className="text-xl font-serif font-light">Inquiry Dispatched</h3>
            <p className="text-xs leading-relaxed max-w-sm mx-auto opacity-90">
              Thank you for sharing your vision. We will review availability and contact you within 24 business hours to set up a private consultation.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-[#FFEEDD]/95 block">Full Name *</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Amara Johnson" 
                  className="w-full px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-xl outline-none text-white focus:bg-white/15 focus:border-[#FFEEDD] transition-all box-border placeholder-white/30" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-[#FFEEDD]/95 block">Email Address *</label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="amara@example.com" 
                  className="w-full px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-xl outline-none text-white focus:bg-white/15 focus:border-[#FFEEDD] transition-all box-border placeholder-white/30" 
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[8px] font-bold uppercase tracking-widest text-[#FFEEDD]/95 block">Target Celebration Date & Venue</label>
              <input 
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="June 12th, 2027 — Villa Del Balbianello, Lake Como" 
                className="w-full px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-xl outline-none text-white focus:bg-white/15 focus:border-[#FFEEDD] transition-all box-border placeholder-white/30" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-bold uppercase tracking-widest text-[#FFEEDD]/95 block">Celebration Details *</label>
              <textarea 
                required
                rows="4"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Share your creative styling, guest count, and visual vision with us..." 
                className="w-full px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-xl outline-none text-white focus:bg-white/15 focus:border-[#FFEEDD] transition-all resize-none box-border placeholder-white/30" 
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#6B7052] bg-[#FFEEDD] hover:bg-white rounded-xl transition-all duration-300 mt-2 shadow-lg"
            >
              {status === 'loading' ? 'Transmitting...' : 'Send Commission Inquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 7. FOOTER COMPONENT
function Footer() {
  return (
    <footer className="bg-[#3F4231] text-[#F5F1EA] border-t border-[#6B7052]/20 py-16 md:py-20 overflow-hidden box-border px-6 md:px-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start">
        
        {/* Brand Logomark */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl tracking-[0.1em] text-[#FFEEDD]">
            S·W
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-[0.2em]">SAGE & SHUTTER</h4>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#FFEEDD]/60 mt-1">Archival Fine Art Wedding Photography</p>
          </div>
        </div>

        {/* Minimal Nav Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-[#FFEEDD]/80 font-semibold font-sans">Directory</h5>
          <div className="flex flex-col space-y-2 text-xs text-neutral-300">
            <a href="#home" className="hover:text-white transition-colors duration-200">Return Home</a>
            <a href="#gallery" className="hover:text-white transition-colors duration-200">Portfolio Galleries</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">Our Heritage Story</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">Booking Commissions</a>
          </div>
        </div>

        {/* Newsletter dispatcher with pill input */}
        <div className="space-y-4 flex flex-col items-center md:items-start w-full max-w-sm mx-auto md:mx-0">
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-[#FFEEDD]/80 font-semibold font-sans">Studio Dispatch</h5>
          <p className="text-[10px] text-neutral-300 leading-relaxed max-w-xs">
            Subscribe for occasional updates regarding regional schedules, print collection arrivals, and studio dispatches.
          </p>
          <div className="w-full flex bg-white/5 border border-white/10 rounded-full p-1.5 focus-within:border-white/25 transition-all">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none text-xs text-white px-4 py-2 flex-grow min-w-0" 
            />
            <button className="px-6 py-2 rounded-full bg-[#FFEEDD] text-[#6B7052] hover:bg-white text-[10px] uppercase font-bold tracking-wider transition-all duration-300 flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-widest text-[#FFEEDD]/40 space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Sage & Shutter. All Rights Reserved.</p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-sm text-[#FFEEDD]/60">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-vimeo-v"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
      </div>
    </footer>
  );
}

// 8. MAIN CONTAINER TEMPLATE
export default function App() {
  return (
    <div className="bg-[#F5F1EA] text-[#2B2D24] min-h-screen overflow-x-hidden relative" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <FontLinks />
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Services />
      <InquireForm />
      <Footer />
    </div>
  );
}
