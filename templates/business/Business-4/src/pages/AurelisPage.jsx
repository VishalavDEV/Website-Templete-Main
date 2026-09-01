import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Award, Briefcase, Shield, Clock, Menu, X, ArrowUpRight, BarChart3 } from 'lucide-react';
import { aurelisData } from '../data/aurelisData';

// Custom Animated Counter Component
function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(value, 10) || 0;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AurelisPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroImageRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveringHeroImage, setHoveringHeroImage] = useState(false);

  const { hero, about, services, stats, leadership, caseStudies, testimonials } = aurelisData;

  // Track sticky header scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track cursor position inside Hero Image for "Explore" follower
  const handleHeroMouseMove = (e) => {
    if (!heroImageRef.current) return;
    const rect = heroImageRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      centerX: rect.width / 2,
      centerY: rect.height / 2
    });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-serif antialiased selection:bg-[#D4AF37] selection:text-white">
      {/* 1. TOP HEADER REDIRECT */}
      <div className="bg-[#FAF6EB] border-b border-[#E6DFD3] py-2.5 text-center text-[10px] font-bold tracking-[0.2em] font-sans text-stone-600 hover:text-[#B2902B] transition-colors z-50 relative">
        <Link to="/">← EXPLORE ALL TEMPLATES</Link>
      </div>

      {/* 2. STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full px-6 md:px-12 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md py-4 shadow-md border-b border-stone-200' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center space-x-2 text-[#0F172A] tracking-[0.15em] font-sans font-black text-lg">
            <Shield size={18} className="text-[#D4AF37]" />
            <span>AURELIS</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-sans font-bold tracking-widest text-[#475569] uppercase">
            {['SERVICES', 'ABOUT', 'LEADERSHIP', 'CASES'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="hover:text-[#D4AF37] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="text-[11px] font-sans font-bold tracking-widest border-b-2 border-[#D4AF37] text-[#0F172A] hover:text-[#B2902B] transition-colors pb-1 uppercase"
            >
              Discuss Engagement
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#1E293B] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl absolute left-0 right-0">
            {['SERVICES', 'ABOUT', 'LEADERSHIP', 'CASES'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="block text-xs font-sans font-bold tracking-wider text-slate-700 py-1 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#D4AF37] uppercase mb-4 block">
              {hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-normal text-[#0F172A] tracking-tight leading-[1.1] mb-6">
              {hero.headline}
            </h1>
            <p className="text-sm md:text-base text-slate-500 font-sans leading-relaxed mb-8 max-w-xl">
              {hero.paragraph}
            </p>
            <div className="flex space-x-6">
              <a
                href="#services"
                onClick={(e) => handleAnchorClick(e, 'services')}
                className="px-6 py-3 bg-[#0F172A] hover:bg-[#D4AF37] text-white font-sans text-[10px] font-bold tracking-widest transition-colors duration-300 uppercase"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, 'contact')}
                className="px-6 py-3 border border-stone-300 hover:border-[#0F172A] text-[#0F172A] font-sans text-[10px] font-bold tracking-widest transition-colors duration-300 uppercase"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Hero Image with Custom Coordinate Follower */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={heroImageRef}
              onMouseMove={handleHeroMouseMove}
              onMouseEnter={() => setHoveringHeroImage(true)}
              onMouseLeave={() => setHoveringHeroImage(false)}
              className="relative w-full aspect-[4/3] rounded shadow-2xl overflow-hidden cursor-crosshair border border-stone-200/80"
            >
              {/* Actual Image container which shifts coordinate perspective */}
              <motion.div
                animate={{
                  x: hoveringHeroImage ? (cursorPos.x - (cursorPos.centerX || 200)) * 0.06 : 0,
                  y: hoveringHeroImage ? (cursorPos.y - (cursorPos.centerY || 150)) * 0.06 : 0,
                  scale: hoveringHeroImage ? 1.03 : 1
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="w-full h-full"
              >
                <img src={hero.image} className="w-full h-full object-cover" alt="Executive Strategy Boardroom" />
              </motion.div>

              {/* Follower Badge */}
              {hoveringHeroImage && (
                <div
                  style={{
                    position: 'absolute',
                    left: cursorPos.x - 30,
                    top: cursorPos.y - 30,
                    pointerEvents: 'none'
                  }}
                  className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-white flex items-center justify-center font-sans text-[9px] font-bold tracking-widest shadow-xl uppercase z-20"
                >
                  Explore
                </div>
              )}

              {/* Stat overlay card */}
              <div className="absolute bottom-5 left-5 bg-white border border-stone-200 p-4 shadow-xl rounded z-10 flex flex-col">
                <span className="text-2xl font-bold font-sans text-[#D4AF37] leading-none mb-1">
                  {hero.floatingCard.number}
                </span>
                <span className="text-[9px] font-sans text-slate-400 font-bold uppercase tracking-wider">
                  {hero.floatingCard.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP with Scroll-Triggered Counters */}
      <section className="py-12 bg-[#0F172A] text-white border-y border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((st) => (
            <div key={st.label}>
              <span className="text-3xl md:text-4xl font-sans font-light text-[#D4AF37] block">
                <AnimatedCounter value={st.value} />
                {st.label.includes('Billion') ? 'B+' : '%'}
              </span>
              <span className="text-[9px] font-sans text-slate-400 uppercase tracking-widest mt-2 block font-semibold">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES MATRIX */}
      <section id="services" className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-b border-stone-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#D4AF37] uppercase mb-3 block">
              ADVISORY MATRIX
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#0F172A] tracking-tight">
              Enterprise Mandates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <div key={svc.number} className="bg-white border border-stone-200/60 p-8 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 group">
                <span className="text-xs font-sans font-bold text-[#D4AF37] block mb-4">{svc.number}</span>
                <h3 className="text-xl font-normal text-[#0F172A] mb-3 group-hover:text-[#D4AF37] transition-colors">{svc.title}</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT THE COMPANY */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#D4AF37] uppercase mb-4 block">
              {about.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#0F172A] tracking-tight leading-snug mb-6">
              {about.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-sans leading-relaxed mb-4">
              {about.paragraph1}
            </p>
            <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed">
              {about.paragraph2}
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <div className="overflow-hidden rounded border border-stone-200/80 shadow-2xl w-full max-w-[560px]">
              <img src={about.image} className="w-full h-full object-cover hover:scale-103 transition-transform duration-700" alt="Executive strategy session" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP BIOS (Zoom, hover effect) */}
      <section id="leadership" className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-y border-stone-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-sans font-black tracking-[0.3em] text-[#D4AF37] uppercase mb-3 block">
              MANAGEMENT TEAM
            </span>
            <h2 className="text-3xl font-normal text-[#0F172A] tracking-tight">
              Executive Partners
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead, idx) => (
              <div key={idx} className="bg-white border border-stone-200/60 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  {/* Portrait zoom */}
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay shadow bar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-lg font-normal text-[#0F172A]">{lead.name}</h3>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-[#D4AF37] uppercase mt-1 block">
                    {lead.role}
                  </span>
                  {/* Expanding gold border-bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES (Zoom scale with dynamic overlays) */}
      <section id="cases" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16">
          <span className="text-[10px] font-sans font-black tracking-[0.3em] text-[#D4AF37] uppercase mb-3 block">
            SELECTED OUTCOMES
          </span>
          <h2 className="text-3xl font-normal text-[#0F172A] tracking-tight">
            Institutional Case Records
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="relative group overflow-hidden border border-stone-200/80 rounded aspect-[16/10] shadow-md">
              {/* Background Project Image */}
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dynamic hover overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/85 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-sans font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                  {cs.category}
                </span>
                <h3 className="text-xl font-normal text-white mb-3">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6 max-w-md">
                  {cs.desc}
                </p>
                <a
                  href="#contact"
                  className="text-[10px] font-sans font-bold tracking-widest text-[#D4AF37] hover:text-white uppercase flex items-center space-x-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Non-hover indicator */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm p-4 border border-stone-100 shadow z-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[8px] font-sans font-bold tracking-wider text-slate-400 block uppercase mb-1">
                  {cs.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {cs.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-t border-stone-200/60 max-w-4xl mx-auto text-center rounded-lg my-12 shadow-sm">
        <span className="text-[10px] font-sans font-black tracking-[0.25em] text-slate-400 mb-8 block uppercase">
          TRUST STATEMENT
        </span>
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed italic max-w-2xl mb-6">
              "{t.quote}"
            </blockquote>
            <div className="text-[10px] font-sans font-bold text-slate-900 uppercase tracking-widest">
              {t.name} — <span className="text-slate-400">{t.role}, {t.company}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 10. CONTACT BRIEF */}
      <section id="contact" className="py-24 px-6 bg-[#0F172A] text-white text-center scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-[9px] font-sans font-bold tracking-[0.3em] text-[#D4AF37] mb-6 block uppercase">
            ENGAGEMENT STRATEGY
          </span>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-6">
            Partnering to Structure What Lies Ahead.
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed max-w-xl mx-auto mb-10">
            Arrange a preliminary advisory alignment to examine balance sheet optimization and merger paths with an Aurelis Senior Advisor.
          </p>
          <a
            href="mailto:partner@aurelis.com"
            className="px-10 py-3.5 bg-[#D4AF37] text-white font-sans font-bold text-xs tracking-widest hover:bg-white hover:text-[#0F172A] transition-colors uppercase inline-block"
          >
            Initiate Alignment Dialog
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-white py-12 px-6 md:px-12 border-t border-stone-200 text-slate-500 font-sans text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield size={14} className="text-[#D4AF37]" />
            <span className="text-[#0F172A] font-black tracking-widest">AURELIS PARTNERS</span>
          </div>
          <p className="font-mono text-[10px]">&copy; 2026 Aurelis Strategic Advisory Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
