import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Palette, ArrowRight, Menu, X, Star } from 'lucide-react';
import { vantaData } from '../data/vantaData';

export default function VantaStudioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hero, work, services, process, clients, about, team } = vantaData;

  // Custom Cursor coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isMobile, setIsMobile] = useState(true);

  // Magnetic CTA coordinates
  const magneticButtonRef = useRef(null);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Detect mobile / tablet screens to disable custom cursor
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile]);

  // Handle magnetic force calculation
  const handleMagneticMove = (e) => {
    if (!magneticButtonRef.current) return;
    const rect = magneticButtonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull toward cursor by 30% of distance if close
    setMagneticPos({
      x: distanceX * 0.35,
      y: distanceY * 0.35
    });
  };

  const handleMagneticLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen bg-[#F5F2EB] text-black font-sans antialiased selection:bg-rose-500 selection:text-white relative overflow-x-hidden ${isMobile ? '' : 'lg:cursor-none'}`}>
      
      {/* Custom Cursor Overlay (Desktop Only) */}
      {!isMobile && (
        <motion.div
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 100
          }}
          className="w-8 h-8 rounded-full border border-rose-500 flex items-center justify-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        </motion.div>
      )}

      {/* 1. TOP HEADER REDIRECT */}
      <div className="bg-[#EDE9DF] border-b border-[#DCD7C9] py-2.5 text-center text-[10px] font-bold tracking-[0.25em] font-mono text-stone-600 hover:text-rose-600 transition-colors z-50 relative">
        <Link to="/">← EXPLORE ALL TEMPLATES</Link>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#F5F2EB]/90 backdrop-blur-sm border-b border-stone-200 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center space-x-1 font-bold tracking-widest text-lg uppercase">
            <Palette size={16} className="text-rose-500" />
            <span>VANTA</span>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.25em] text-stone-600 uppercase">
            {['WORK', 'SERVICES', 'PROCESS', 'ABOUT', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="hover:text-rose-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 hover:text-rose-500 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="bg-[#F5F2EB] border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl absolute left-0 right-0">
            {['WORK', 'SERVICES', 'PROCESS', 'ABOUT', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="block text-sm font-bold tracking-widest text-stone-700 py-1 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. ASYMMETRIC TYPOGRAPHY HERO */}
      <section id="home" className="py-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left mb-12">
          {/* Headline Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col mb-10 select-none"
          >
            {hero.headline.map((line, idx) => (
              <span
                key={idx}
                className="text-5xl md:text-7xl lg:text-[7.2rem] font-black uppercase tracking-tight leading-[0.85] text-black"
              >
                {line}
              </span>
            ))}
          </motion.div>

          {/* Paragraph and CTA button */}
          <div className="max-w-md">
            <p className="text-sm md:text-base text-stone-600 leading-relaxed mb-8">
              {hero.paragraph}
            </p>
            
            {/* Magnetic CTA button wrapper container (Static box) */}
            <div
              ref={magneticButtonRef}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="inline-block p-2"
            >
              {/* Dynamic translating inner block */}
              <motion.div
                animate={{ x: magneticPos.x, y: magneticPos.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              >
                <a
                  href="#work"
                  onClick={(e) => handleAnchorClick(e, 'work')}
                  className="inline-flex items-center space-x-3 text-xs font-bold tracking-widest bg-rose-500 hover:bg-black text-white px-8 py-3.5 transition-colors duration-300 uppercase"
                >
                  <span>{hero.cta}</span>
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Asymmetric Floating Images around hero (scale-hover triggers) */}
        {hero.images[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-10 right-0 w-[240px] h-[300px] hidden lg:block overflow-hidden shadow-2xl border border-stone-200"
          >
            <img src={hero.images[0].url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Vanta design workspace" />
          </motion.div>
        )}
        {hero.images[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-16 right-[35%] w-[180px] h-[220px] hidden lg:block overflow-hidden shadow-2xl border border-stone-200"
          >
            <img src={hero.images[1].url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Editorial design sheets" />
          </motion.div>
        )}
      </section>

      {/* 4. CLIENTS TICKER */}
      <section className="py-12 bg-black text-white overflow-hidden border-y border-stone-850">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 px-6 max-w-7xl mx-auto">
          {clients.map((c) => (
            <span
              key={c}
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-stone-500 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* 5. ABOUT COLLECTIVE */}
      <section id="about" className="py-24 px-6 md:px-12 bg-stone-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase mb-4 block">
              OUR MANIFESTO
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              {about.title}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-lg">
              {about.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE DRAGGABLE HORIZONTAL GALLERY PORTFOLIO */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 select-none">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-stone-400 uppercase mb-3 block">
              ARCHIVES SELECT
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-[10px] font-mono font-bold text-rose-500 tracking-widest mt-4 sm:mt-0 uppercase">
            [DRAG OR SWIPE CAROUSEL BELOW]
          </p>
        </div>

        {/* Draggable Track Container */}
        <div className="overflow-x-hidden p-2">
          <motion.div
            drag="x"
            dragConstraints={{ left: -680, right: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="flex space-x-8 w-[1400px] cursor-grab active:cursor-grabbing"
          >
            {work.map((w, idx) => (
              <div
                key={idx}
                className="w-[380px] bg-[#FAF9F6] border border-stone-250 p-6 flex flex-col justify-between shrink-0 shadow-sm"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-stone-200 border border-stone-300/40 mb-6">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    draggable="false"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-rose-500 tracking-widest uppercase block mb-1">
                    {w.category}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-black">
                    {w.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. SERVICES SUMMARY */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white border-y border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Creative Direction
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => (
              <div key={svc.name} className="border border-stone-200 p-8 flex flex-col justify-between h-[240px] hover:border-black transition-all duration-300">
                <h3 className="text-base font-bold uppercase tracking-wider text-black">
                  {svc.name}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed mt-4">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CREATIVE PROCESS */}
      <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.3em] text-stone-400 uppercase mb-3 block">
            HOW WE BUILD
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Creative Engine
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {process.map((prc) => (
            <div key={prc.step} className="border-t-2 border-black pt-8">
              <span className="text-[10px] font-mono text-rose-500 font-bold block mb-4">
                {prc.step}
              </span>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                {prc.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {prc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. AGENCY TEAM */}
      <section id="team" className="py-24 px-6 md:px-12 bg-stone-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.25em] text-rose-500 uppercase mb-3 block">
              COLLECTIVE SQUAD
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Partners in Art
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-36 h-36 rounded-full overflow-hidden bg-stone-300 shadow-lg border border-stone-200">
                  <img src={member.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" alt={member.name} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold uppercase tracking-wide">{member.name}</h3>
                  <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mt-1 block">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section id="contact" className="py-28 px-6 bg-black text-white text-center relative overflow-hidden scroll-mt-20">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8">
            IMAGINE<br />
            SOMETHING<br />
            UNEXPECTED.
          </h2>
          <p className="text-xs md:text-sm text-stone-400 leading-relaxed max-w-md mx-auto mb-12">
            Let's reject standardized patterns. Write to Vanta to establish dynamic visual structures and product narratives.
          </p>
          <a
            href="mailto:briefs@vanta.studio"
            className="px-10 py-3.5 bg-rose-500 text-white font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-colors uppercase inline-block"
          >
            Start Campaign Brief
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-stone-905 text-stone-500 py-16 px-6 md:px-12 border-t border-stone-850">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-black tracking-widest uppercase text-base">VANTA STUDIO</span>
          </div>
          <p>&copy; 2026 Vanta Creative Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
