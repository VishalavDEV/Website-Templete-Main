import React, { useState, useEffect, useRef, useCallback } from 'react';

const GALLERY_ITEMS = [
  { img: '/buliding-jpg/ezgif-frame-005.jpg', title: 'Lobby Entrance' },
  { img: '/buliding-jpg/ezgif-frame-010.jpg', title: 'Tower Exterior Detail' },
  { img: '/buliding-jpg/ezgif-frame-020.jpg', title: 'Penthouse Apartment Living Room' },
  { img: '/buliding-jpg/ezgif-frame-030.jpg', title: 'Rooftop Glass Balcony' },
  { img: '/buliding-jpg/ezgif-frame-040.jpg', title: 'Infinity Swimming Pool' },
  { img: '/buliding-jpg/ezgif-frame-050.jpg', title: 'Panoramic Sky Lounge' }
];

export default function App() {
  // -------------------------------------------------------------
  // 1. Web Audio Ambient Synthesizer
  // -------------------------------------------------------------
  const [isAudioOn, setIsAudioOn] = useState(false);
  const audioCtxRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const lfoRef = useRef(null);
  const gainNodeRef = useRef(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Synth Low Luxury Pad (C2: 65.41Hz, G2: 98.00Hz)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 65.41;
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.value = 98.0;
      osc2Ref.current = osc2;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 180;
      filter.Q.value = 4;

      // Slow LFO for filter wash sweep
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.15;
      lfoRef.current = lfo;

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 60;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.0;
      gainNodeRef.current = gainNode;

      osc1.connect(filter);
      osc2.connect(filter);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      lfo.start();
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }, []);

  const playClickSound = useCallback(() => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (err) {
      console.warn('Click audio error:', err);
    }
  }, [initAudio]);

  const toggleAudio = () => {
    playClickSound();
    if (!isAudioOn) {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 0.8);
      }
      setIsAudioOn(true);
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0, audioCtxRef.current.currentTime + 0.4);
      }
      setIsAudioOn(false);
    }
  };

  // -------------------------------------------------------------
  // 2. Navigation Scroll Solidify & Mobile Drawer
  // -------------------------------------------------------------
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // -------------------------------------------------------------
  // 3. Countdown Timer State
  // -------------------------------------------------------------
  const [countdown, setCountdown] = useState({ days: 118, hours: 7, mins: 42, secs: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // -------------------------------------------------------------
  // 4. Gallery Lightbox Modal
  // -------------------------------------------------------------
  const [activeLightbox, setActiveLightbox] = useState(null);

  const openLightbox = (item) => {
    playClickSound();
    setActiveLightbox(item);
  };

  const closeLightbox = () => {
    playClickSound();
    setActiveLightbox(null);
  };

  // -------------------------------------------------------------
  // 5. Enquiry Form State
  // -------------------------------------------------------------
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    playClickSound();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-brand-charcoal text-white font-sans antialiased overflow-x-hidden relative">
      <div className="film-grain"></div>

      {/* TRANSPARENT BLUR NAVBAR */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-sm ${
          isScrolled ? 'nav-solidify' : 'bg-black/10'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3" onClick={playClickSound}>
          <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center">
            <span className="font-serif text-xs font-bold text-brand-gold">A</span>
          </div>
          <span className="font-serif text-lg tracking-[0.25em] font-bold text-white hover:text-brand-gold transition-colors">
            AURA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest text-zinc-300">
          <a href="#hero" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>HOME</a>
          <a href="#about" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>ABOUT</a>
          <a href="#features" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>FEATURES</a>
          <a href="#gallery" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>GALLERY</a>
          <a href="#location" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>LOCATION</a>
          <a href="#contact" className="nav-link hover:text-brand-gold transition-colors" onClick={playClickSound}>CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleAudio}
            className={`transition-colors text-sm font-mono tracking-widest flex items-center gap-2 ${
              isAudioOn ? 'text-brand-gold' : 'text-zinc-400 hover:text-brand-gold'
            }`}
          >
            <i className={`fa-solid ${isAudioOn ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
            <span className="hidden sm:inline">{isAudioOn ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>
          <a
            href="#contact"
            onClick={playClickSound}
            className="hidden sm:inline-block border border-brand-gold/40 hover:border-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-black text-brand-gold transition-all duration-300 text-xs font-bold tracking-widest py-3 px-6 rounded-sm"
          >
            ENQUIRE NOW
          </a>
          {/* Mobile Menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle mobile menu"
          >
            <i className="fa-solid fa-bars-staggered text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-brand-charcoal z-50 flex flex-col justify-center items-center gap-8 text-lg font-semibold tracking-widest text-zinc-300 transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        <a href="#hero" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>HOME</a>
        <a href="#about" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
        <a href="#features" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>FEATURES</a>
        <a href="#gallery" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>GALLERY</a>
        <a href="#location" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>LOCATION</a>
        <a href="#contact" className="mobile-nav-link hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
      </div>

      {/* 1. HERO SECTION */}
      <header id="hero" className="relative w-full min-h-screen flex flex-col justify-between items-center py-24 px-6 text-center z-10">
        {/* Background Cinematic Video Loop GIF */}
        <img
          id="bg-video"
          src="/bg-building.gif"
          alt="Aura Sky Residences Video Background"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-100 transition-opacity duration-1000"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-brand-charcoal z-10 pointer-events-none"></div>

        <div></div>

        {/* Hero Central HUD content */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
            <span className="text-xs font-bold text-brand-gold tracking-[0.3em] uppercase">COMING SOON</span>
          </div>

          <span className="font-serif text-sm tracking-[0.4em] text-zinc-400 uppercase mt-2">
            A NEW LANDMARK IS COMING
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.1em] text-white leading-tight">
            AURA SKY RESIDENCES
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Experience a new standard of modern architecture, comfort and premium luxury living rising in the heart of the metropolis.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#about"
              onClick={playClickSound}
              className="bg-brand-gold text-black hover:bg-brand-goldHover hover:shadow-neon font-bold text-xs tracking-widest py-4 px-8 rounded-sm transition-all duration-300"
            >
              EXPLORE PROJECT
            </a>
            <a
              href="#contact"
              onClick={playClickSound}
              className="border border-white/20 hover:border-brand-gold hover:bg-white/5 font-bold text-xs tracking-widest py-4 px-8 rounded-sm transition-all duration-300"
            >
              CONTACT US
            </a>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="relative z-20 w-full max-w-xl mx-auto border-t border-white/10 pt-8 mt-12">
          <div id="countdown-display" className="grid grid-cols-4 gap-4 text-center font-mono">
            <div className="flex flex-col">
              <span id="days" className="text-3xl sm:text-4xl font-light text-brand-gold">
                {String(countdown.days).padStart(3, '0')}
              </span>
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mt-1">DAYS</span>
            </div>
            <div className="flex flex-col">
              <span id="hours" className="text-3xl sm:text-4xl font-light text-brand-gold">
                {String(countdown.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mt-1">HOURS</span>
            </div>
            <div className="flex flex-col">
              <span id="minutes" className="text-3xl sm:text-4xl font-light text-brand-gold">
                {String(countdown.mins).padStart(2, '0')}
              </span>
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mt-1">MINUTES</span>
            </div>
            <div className="flex flex-col">
              <span id="seconds" className="text-3xl sm:text-4xl font-light text-brand-gold">
                {String(countdown.secs).padStart(2, '0')}
              </span>
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mt-1">SECONDS</span>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="relative z-20 flex flex-col items-center gap-2 mt-8 opacity-75">
          <span className="text-[9px] tracking-[0.35em] text-zinc-500 font-bold uppercase">SCROLL TO DISCOVER</span>
          <div className="w-[18px] h-[32px] rounded-full border border-zinc-600 flex justify-center py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* 2. ABOUT THE BUILDING SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">INTRODUCTION</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight">
              AURA SKY RESIDENCES
            </h2>
            <div className="w-20 h-0.5 bg-brand-gold"></div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Aura Sky Residences redefines the city's skyline with its state-of-the-art aerodynamic glass architecture and ultra-luxurious private residences. Standing as a symbol of architectural achievement, every unit is meticulously crafted to integrate breathtaking panoramic views with high-end comforts.
            </p>

            {/* Highlights Info Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8 mt-4">
              <div>
                <span className="text-zinc-500 text-xs tracking-widest uppercase">CONSTRUCTION STATUS</span>
                <p className="text-white font-semibold text-sm mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Interior Finishes
                </p>
              </div>
              <div>
                <span className="text-zinc-500 text-xs tracking-widest uppercase">EXPECTED LAUNCH</span>
                <p className="text-white font-semibold text-sm mt-1">October 2026</p>
              </div>
              <div>
                <span className="text-zinc-500 text-xs tracking-widest uppercase">PROJECT TYPE</span>
                <p className="text-white font-semibold text-sm mt-1">Mixed-Use Residential</p>
              </div>
              <div>
                <span className="text-zinc-500 text-xs tracking-widest uppercase">ARCHITECTURE FIRM</span>
                <p className="text-white font-semibold text-sm mt-1">Vertex Studio Tokyo</p>
              </div>
            </div>
          </div>

          {/* Elegant Image Wrapper */}
          <div className="relative group overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img
              src="/buliding-jpg/ezgif-frame-001.jpg"
              alt="Aura Sky Residences Rendering"
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20 flex flex-col">
              <span className="font-serif text-lg font-bold text-white tracking-widest">VERTEX TOWER APARTMENTS</span>
              <span className="text-brand-gold text-xs tracking-widest uppercase">65 FLOORS OF PURE LUXURY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUILDING FEATURES SECTION */}
      <section id="features" className="bg-brand-darkGray/40 py-24 px-6 md:px-12 border-t border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">AMENITIES & DESIGN</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              EXQUISITE HIGHLIGHTS
            </h2>
            <div className="w-20 h-0.5 bg-brand-gold"></div>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide max-w-lg mx-auto">
              Designed for the discerning few who seek complete comfort, privacy, and sustainable modern aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-hotel text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Modern Architecture</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Aerodynamic wind-resistant glass structure minimizing structural heat absorption and offering 360 views.
              </p>
            </div>

            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-couch text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Premium Interiors</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Imported Italian marble finishes, premium oak panels, and bespoke floor-to-ceiling glass panoramic frames.
              </p>
            </div>

            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-fingerprint text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Smart Home Tech</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Fully automated climate control, integrated facial-recognition door locks, and voice-command utilities.
              </p>
            </div>

            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-bolt-lightning text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">High-Speed Elevators</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Six secure, custom-built pneumatic lifts traveling at 10 meters per second with destination-dispatch control.
              </p>
            </div>

            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-dumbbell text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Rooftop Lounge & Gym</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                65th-floor glass-cantilever infinity pool, cocktail lounge, and fully equipped gym facing the city skyline.
              </p>
            </div>

            <div className="glass-panel group p-8 rounded-lg border border-white/5 bg-brand-charcoal hover:border-brand-gold/40 hover:shadow-neon transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                <i className="fa-solid fa-seedling text-lg"></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Sustainable Design</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Solar-absorbing external panels, automated greywater recycling, and integrated local green garden systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT DETAILS GRID SECTION */}
      <section id="details" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">FACTS & SPECS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
              PROJECT DETAILS
            </h2>
            <div className="w-20 h-0.5 bg-brand-gold"></div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              Browse the critical metrics and architectural specifications that define Aura Sky Residences.
            </p>
          </div>

          <div className="lg:col-span-2 glass-panel p-8 sm:p-12 rounded-xl border border-white/5 bg-brand-darkGray/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono">
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">PROJECT NAME</span>
                <span className="text-white text-base font-semibold mt-2 block">Aura Sky Residences</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">LOCATION</span>
                <span className="text-white text-base font-semibold mt-2 block">Downtown Central District, L4</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">DEVELOPER</span>
                <span className="text-white text-base font-semibold mt-2 block">TechnoSprint Infrastructure Inc.</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">TOTAL FLOORS</span>
                <span className="text-white text-base font-semibold mt-2 block">65 Floors</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">TOTAL UNITS</span>
                <span className="text-white text-base font-semibold mt-2 block">240 Premium Suites</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">STARTING PRICE</span>
                <span className="text-white text-base font-semibold mt-2 block text-brand-gold">$1,250,000 USD</span>
              </div>
              <div className="border-b border-white/5 pb-4 sm:border-none sm:pb-0">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">EXPECTED COMPLETION</span>
                <span className="text-white text-base font-semibold mt-2 block">September 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase block">LAUNCH EVENT DATE</span>
                <span className="text-white text-base font-semibold mt-2 block">October 15, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE SHOWCASE & GALLERY */}
      <section id="gallery" className="bg-brand-darkGray/40 py-24 px-6 md:px-12 border-t border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">GALLERY SHOWCASE</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              VISUAL RENDERINGS
            </h2>
            <div className="w-20 h-0.5 bg-brand-gold"></div>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide max-w-lg mx-auto">
              Click on any image to open the high-definition architectural lightbox preview.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(item)}
                className="gallery-item cursor-pointer overflow-hidden rounded-lg border border-white/10 group relative"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <i className="fa-solid fa-magnifying-glass-plus text-2xl text-brand-gold"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          id="lightbox"
          className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center p-6 active"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors text-2xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="max-w-4xl w-full flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeLightbox.img}
              alt={activeLightbox.title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-white/10"
            />
            <div className="flex justify-between items-center text-sm font-semibold tracking-wider text-zinc-300 font-mono">
              <span className="text-brand-gold uppercase">{activeLightbox.title}</span>
              <span>AURA SKY DESIGN</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. NEIGHBORHOOD LOCATION SECTION */}
      <section id="location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">PRIME LOCATION</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            NEIGHBORHOOD MAP
          </h2>
          <div className="w-20 h-0.5 bg-brand-gold"></div>
          <p className="text-zinc-400 text-xs sm:text-sm tracking-wide max-w-lg mx-auto">
            Rising in the Downtown Central district, connected to elite business, healthcare, and educational hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-panel relative w-full h-[380px] rounded-lg overflow-hidden border border-white/5 bg-brand-darkGray/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
            <div className="relative z-10 text-center flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center bg-black/60 shadow-neon">
                <i className="fa-solid fa-location-crosshairs text-2xl text-brand-gold"></i>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-widest mt-2 block">
                DOWNTOWN CENTRAL PLAZA
              </span>
              <span className="text-zinc-400 text-xs tracking-wider">Coordinates: 35.6762° N, 139.6503° E</span>
              <button
                onClick={() => {
                  playClickSound();
                  alert('Fetching real-estate coordinates... opening directions overlay.');
                }}
                className="mt-4 border border-brand-gold hover:bg-brand-gold hover:text-black text-brand-gold text-xs font-semibold tracking-widest py-3 px-6 rounded transition-all duration-300"
              >
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wider">Transit Details & Landmarks</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              Every landmark is easily accessible from Aura Sky Residences, securing a highly connected luxury lifestyle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-plane text-brand-gold mt-1 text-sm"></i>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">Central Int. Airport</h4>
                  <p className="text-zinc-500 text-xs mt-1">15 mins drive (12 km away)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-train text-brand-gold mt-1 text-sm"></i>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">Expressway Terminal</h4>
                  <p className="text-zinc-500 text-xs mt-1">4 mins walk (350 m away)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-graduation-cap text-brand-gold mt-1 text-sm"></i>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">International Academy</h4>
                  <p className="text-zinc-500 text-xs mt-1">8 mins drive (3 km away)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-square-h text-brand-gold mt-1 text-sm"></i>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">Metropolitan Medical</h4>
                  <p className="text-zinc-500 text-xs mt-1">6 mins drive (2.1 km away)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENQUIRY / CONTACT FORM SECTION */}
      <section id="contact" className="bg-brand-darkGray/40 py-24 px-6 md:px-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">REGISTER INTEREST</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight">
              SCHEDULE A VISIT
            </h2>
            <div className="w-20 h-0.5 bg-brand-gold"></div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Register your contact details to gain priority booking access, exclusive pre-launch pricing catalogues, and notifications for the official luxury showroom launch.
            </p>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-8 mt-4 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-brand-gold"></i>
                <span>+1 (800) 555-AURA</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-brand-gold"></i>
                <span>sales@auraskyresidences.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-building text-brand-gold"></i>
                <span>Suite 1200, Plaza Tower One, Central Plaza, NY</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-brand-gold"></i>
                <span>Mon - Sat: 09:00 AM - 06:00 PM</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/18005552872"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-green-500/40 hover:border-green-500 bg-green-500/10 hover:bg-green-500 hover:text-black transition-all duration-300 text-xs font-bold tracking-widest py-3 px-6 rounded-sm text-green-400"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> WHATSAPP US
              </a>
              <a
                href="tel:+18005552872"
                className="flex items-center gap-2 border border-zinc-500 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-xs font-bold tracking-widest py-3 px-6 rounded-sm text-zinc-400"
              >
                <i className="fa-solid fa-phone text-sm"></i> CALL SALES
              </a>
            </div>
          </div>

          {/* Form Card Wrapper */}
          {!formSubmitted ? (
            <div className="glass-panel p-8 sm:p-12 rounded-xl border border-white/5 bg-brand-charcoal hover:border-brand-gold/25 transition-all duration-300">
              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-widest text-zinc-500 uppercase font-semibold mb-2">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-darkGray/60 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-widest text-zinc-500 uppercase font-semibold mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-darkGray/60 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] tracking-widest text-zinc-500 uppercase font-semibold mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-darkGray/60 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-widest text-zinc-500 uppercase font-semibold mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-darkGray/60 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-brand-gold text-black hover:bg-brand-goldHover hover:shadow-neon font-bold text-xs tracking-widest py-4 px-8 rounded-sm transition-all duration-300 mt-2"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            </div>
          ) : (
            <div className="glass-panel p-8 sm:p-12 rounded-xl border border-brand-gold/30 bg-brand-charcoal text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center text-brand-gold shadow-neon">
                <i className="fa-solid fa-check text-2xl"></i>
              </div>
              <h3 className="font-serif text-xl font-bold text-white tracking-widest">Enquiry Received</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-sm">
                Thank you for your interest in Aura Sky Residences. Our dedicated luxury sales representative will contact you within the next 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center">
                <span className="font-serif text-xs font-bold text-brand-gold">A</span>
              </div>
              <span className="font-serif text-lg tracking-[0.25em] font-bold text-white">AURA</span>
            </a>
            <p className="text-zinc-500 text-xs leading-relaxed font-light mt-2">
              A luxurious, state-of-the-art skyscraper offering modern residences and sky suites designed for premium comfort.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-widest text-brand-gold uppercase">QUICK LINKS</h4>
            <div className="flex flex-col gap-2 text-zinc-500 text-xs font-semibold">
              <a href="#hero" className="hover:text-white transition-colors">HOME</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              <a href="#features" className="hover:text-white transition-colors">FEATURES</a>
              <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-widest text-brand-gold uppercase">SOCIAL NETWORKS</h4>
            <div className="flex gap-4 text-lg text-zinc-500">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-widest text-brand-gold uppercase">HEADQUARTERS</h4>
            <p className="text-zinc-500 text-xs leading-relaxed font-light">
              TechnoSprint Plaza Towers, Central Avenue Road, Midtown Office Center, NYC
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-zinc-600 font-mono">
          <span>&copy; 2026 AURA SKY RESIDENCES. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">TERMS & CONDITIONS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
