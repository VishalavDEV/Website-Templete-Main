import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Google Fonts and FontAwesome
const FontLinks = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </>
);

// Earthy, desaturated, and moody local images
const IMAGES = {
  hero1: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  hero2: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  hero3: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=80",
  about: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
  portfolio1: "https://images.unsplash.com/photo-1595152230535-09795027c06c?auto=format&fit=crop&w=1200&q=80",
  portfolio2: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
  portfolio3: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
  portfolio4: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
  portfolio5: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
  portfolio6: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1200&q=80"
};

// 1. NAVBAR COMPONENT
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
        isScrolled 
          ? 'bg-[#141414]/95 backdrop-blur-md border-b border-white/5 shadow-lg text-white' 
          : 'bg-transparent text-white'
      }`}
    >
      {/* Monogram Brand Logo */}
      <a href="#home" className="flex items-center gap-3 group">
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center font-serif text-sm tracking-widest transition-transform duration-500 group-hover:rotate-12">
          Æ
        </div>
        <span className="font-sans font-bold text-xs tracking-[0.25em] uppercase">AETHER</span>
      </a>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-[#F3C1C1] transition-colors">Home</a>
        <a href="#portfolio" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-[#F3C1C1] transition-colors">Portfolio</a>
        <a href="#about" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-[#F3C1C1] transition-colors">About</a>
        <a href="#features" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-[#F3C1C1] transition-colors">Galleries</a>
        <a href="#contact" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-[#F3C1C1] transition-colors">Contact</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-white/80">
        <button className="hover:text-white transition-colors p-1 focus:outline-none">
          <i className="fa-solid fa-magnifying-glass text-xs"></i>
        </button>
        <button className="hover:text-white transition-colors p-1 focus:outline-none">
          <i className="fa-solid fa-bars-staggered text-sm"></i>
        </button>
      </div>
    </nav>
  );
}

// 2. HERO SECTION
function Hero() {
  return (
    <section id="home" className="relative bg-[#141414] text-white min-h-screen pt-32 pb-24 px-6 md:px-12 flex items-center overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="space-y-8 text-left max-w-xl">
          <div className="inline-flex items-center gap-2 text-[#F3C1C1]">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            <span className="text-[9px] uppercase tracking-[0.35em] font-bold">Editorial Studio</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide leading-[1.15]">
            Chasing the <span className="italic font-normal">Silent Dialogue</span> of Light
          </h1>

          <p className="text-sm text-[#A3A3A3] font-sans tracking-wide leading-relaxed max-w-md">
            A premium visual playground documenting raw emotion, refined geometries, and wild romance through a minimal, editorial perspective.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#141414] hover:border-transparent transition-all duration-300"
            >
              Explore Works <i className="fa-solid fa-arrow-right-long text-xs"></i>
            </a>
          </div>
        </div>

        {/* Right Side Content (Layered / Rotated Mockups) */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Mockup Card 1: Couple (Background rotated) */}
          <motion.div 
            whileHover={{ rotate: 2, scale: 1.02 }}
            className="absolute left-6 top-16 w-60 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-[#262626] shadow-2xl z-10 border border-white/5"
            style={{ transform: 'rotate(-4deg)' }}
          >
            <img 
              src={IMAGES.hero1} 
              alt="Romantic portrait" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Mockup Card 2: Venue (Right side stacked) */}
          <motion.div 
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="absolute right-4 bottom-12 w-56 md:w-64 aspect-square rounded-2xl overflow-hidden bg-[#262626] shadow-2xl z-20 border border-white/5"
            style={{ transform: 'rotate(6deg)' }}
          >
            <img 
              src={IMAGES.hero2} 
              alt="Atmospheric shoot" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="relative w-36 h-36 flex items-center justify-center rounded-full border border-white/10 bg-[#141414]/40 backdrop-blur-sm shadow-xl"
            >
              {/* Circular Text Tag */}
              <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                <path id="textPath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="fill-white/45 text-[7px] uppercase tracking-[0.2em] font-sans font-semibold">
                  <textPath href="#textPath" startOffset="0%">• VIEW SHOWCASE • ESSENTIAL SERIES</textPath>
                </text>
              </svg>
              <div className="absolute w-12 h-12 rounded-full bg-white text-[#141414] flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
                <i className="fa-solid fa-play text-xs pl-0.5"></i>
              </div>
            </motion.div>
          </div>

          {/* Floating Badge Card bottom-left */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.6, stiffness: 200, damping: 20 }}
            className="absolute bottom-6 left-6 bg-[#1C1C1C] text-white px-5 py-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 flex items-center gap-4 z-40"
          >
            <div className="w-9 h-9 rounded-full bg-[#F3C1C1]/10 text-[#F3C1C1] flex items-center justify-center">
              <i className="fa-solid fa-camera text-xs"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider">Curated Galleries</span>
              <span className="text-[8px] text-[#A3A3A3] uppercase tracking-widest mt-0.5">Est. 2018</span>
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

  const categories = [
    { name: 'All', count: 6 },
    { name: 'Fashion', count: 2 },
    { name: 'Portrait', count: 2 },
    { name: 'Wedding', count: 2 }
  ];

  const items = [
    { id: 1, category: 'Wedding', image: IMAGES.portfolio1, title: 'Adeline & Arthur', subtitle: 'Tuscan Estate' },
    { id: 2, category: 'Fashion', image: IMAGES.portfolio2, title: 'Minimal Drape', subtitle: 'Studio Edit' },
    { id: 3, category: 'Portrait', image: IMAGES.portfolio3, title: 'Silhouette Study', subtitle: 'Natural Shadow' },
    { id: 4, category: 'Wedding', image: IMAGES.portfolio4, title: 'Coastline Vows', subtitle: 'Amalfi Coast' },
    { id: 5, category: 'Portrait', image: IMAGES.portfolio5, title: 'Aura of Light', subtitle: 'Gold Reflections' },
    { id: 6, category: 'Fashion', image: IMAGES.portfolio6, title: 'Textured Linen', subtitle: 'Editorial Series' }
  ];

  const filteredItems = items.filter(item => activeTab === 'All' || item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#FAFAFA] text-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Title & Tabs (Split layout) */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-neutral-200 pb-8">
          <div className="space-y-3 text-left">
            <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-400 font-bold block">
              PORTFOLIO CATALOG
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-[#141414]">
              Selected Works
            </h2>
          </div>

          {/* Filter Tabs with count badges */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                  activeTab === cat.name 
                    ? 'bg-[#141414] text-white border-transparent' 
                    : 'bg-white text-neutral-500 border-neutral-200 hover:text-[#141414] hover:border-neutral-300'
                }`}
              >
                {cat.name}
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] ${
                  activeTab === cat.name ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group relative overflow-hidden rounded-2xl shadow-sm bg-neutral-200 cursor-pointer aspect-[3/4]"
              >
                {/* Full-bleed image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" 
                />

                {/* Dark Overlay Caption on hover */}
                <div className="absolute inset-0 bg-[#141414]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-[#F3C1C1] font-sans font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif text-white font-light">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-white/50 text-[10px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3C1C1]"></span>
                    <span>{item.subtitle}</span>
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

// 4. ABOUT/STATEMENT SECTION
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#141414] text-white overflow-hidden relative">
      {/* Accent hairline elements */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5"></div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Statement Quote */}
        <div className="lg:col-span-7 space-y-8 text-left max-w-xl">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#F3C1C1] font-bold block">
            CREATIVE MANIFESTO
          </span>
          <h3 className="text-2xl md:text-4xl font-serif font-light tracking-wide leading-relaxed text-white">
            "To photgraph is to hold a mirror to the quiet alignments, sculpting the raw geometry of a passing second."
          </h3>
          <p className="text-sm text-[#A3A3A3] font-sans tracking-wide leading-relaxed">
            We focus on desaturated tones, architectural frames, and candid warmth to produce timeless, fine-art photographs for editorial eyes.
          </p>
          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-white hover:text-[#F3C1C1] transition-colors group"
            >
              Get in Touch 
              <span className="w-6 h-[1px] bg-current transform group-hover:translate-x-2 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        {/* Right: Framed Offset Image (5 grid-spans) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px]">
            {/* Offset outline circle decoration */}
            <div className="absolute -inset-4 border border-white/10 rounded-2xl transform -rotate-2 pointer-events-none"></div>
            
            {/* Image Container */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800 shadow-2xl relative border border-white/5">
              <img 
                src={IMAGES.about} 
                alt="Photographer candid shoot" 
                className="w-full h-full object-cover grayscale opacity-90" 
              />
            </div>
            
            {/* Badge on offset frame */}
            <div className="absolute -bottom-4 -left-4 bg-[#F3C1C1] text-[#141414] px-4 py-2.5 rounded-lg text-[9px] uppercase tracking-widest font-bold shadow-lg">
              Est. 2018 · Aether Studio
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 5. FEATURES/SERVICES STRIP
function Features() {
  const steps = [
    { icon: "fa-camera", title: "ARCHIVAL RESOLUTION", desc: "Digital medium format for museum-grade details." },
    { icon: "fa-heart", title: "CANDID MOMENTS", desc: "Capturing authentic silhouettes and genuine connections." },
    { icon: "fa-calendar-days", title: "WORLDWIDE TRAVELS", desc: "Bespoke commissions accepted globally." }
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-[#FAFAFA] text-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center justify-items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-4 max-w-[280px] flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full border border-neutral-200/60 flex items-center justify-center text-neutral-400 bg-white group-hover:bg-[#141414] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                <i className={`fa-solid ${step.icon} text-sm`}></i>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#141414]">{step.title}</h4>
              <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. CONTACT / NEWSLETTER DISPATCH
function Contact() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/60">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#F3C1C1] font-bold block">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide text-[#141414]">
            Reserve Your Celebration
          </h2>
          <p className="text-neutral-500 text-sm max-w-sm mx-auto leading-relaxed">
            Limited commission openings available globally for destination couples.
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#141414]">Inquiry Dispatched</span>
            <p className="text-xs text-neutral-400">We will follow up via email within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex bg-white border border-neutral-200 rounded-full p-2 focus-within:border-[#141414] transition-all max-w-md mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none text-xs text-[#141414] px-4 py-2 flex-grow min-w-0" 
            />
            <button 
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#141414] hover:bg-[#F3C1C1] hover:text-[#141414] text-white text-[10px] uppercase font-bold tracking-wider transition-all duration-300"
            >
              Inquire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 7. FOOTER
function Footer() {
  return (
    <footer className="bg-[#141414] text-white border-t border-white/5 py-16 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Abstract Ring Logo Mark */}
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F3C1C1]">
          <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-serif text-[10px]">
            Æ
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold text-xs tracking-[0.25em] uppercase text-white">AETHER STUDIO</h4>
          <p className="text-[9px] text-[#A3A3A3] tracking-widest uppercase mt-1">Archival Fine Art Photography</p>
        </div>

        {/* Minimal Nav */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#A3A3A3]">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="w-12 h-[1px] bg-white/5 my-4"></div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-sm text-[#A3A3A3]">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-vimeo-v"></i></a>
        </div>

        <p className="text-[9px] uppercase tracking-widest text-[#A3A3A3]/50 pt-4">
          &copy; {new Date().getFullYear()} Aether Studio. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

// 8. CONTAINER COMPONENT
export default function App() {
  return (
    <div className="bg-[#141414] text-white min-h-screen overflow-x-hidden relative select-none font-sans animate-fadeIn">
      <FontLinks />
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
