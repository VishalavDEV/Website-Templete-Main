import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ArrowRight, Layers, Users, Globe, Menu, X, ArrowUpRight, Smile } from 'lucide-react';
import { lumoraData } from '../data/lumoraData';

// Custom 3D Tilt Card Component
function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Scale rotations to maximum 12 degrees
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: tilt.x !== 0 ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LumoraLabsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);

  const { hero, whatWeBuild, portfolio, products, howWeWork, numbers, team, successStories } = lumoraData;

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 95,
        behavior: 'smooth'
      });
    }
  };

  const springTransition = { type: 'spring', stiffness: 100, damping: 15 };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased relative overflow-hidden">
      
      {/* Drifting Floating Shapes in background */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="absolute top-36 -left-10 w-24 h-24 rounded-full border border-violet-100 bg-violet-50/20 pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        className="absolute top-1/2 -right-16 w-32 h-32 rounded-3xl border border-pink-100 bg-pink-50/10 pointer-events-none z-0"
      />

      {/* 1. TOP HEADER REDIRECT */}
      <div className="bg-[#FAF9FF] border-b border-[#EBE8FC] py-2.5 text-center text-[10px] font-bold tracking-[0.25em] font-mono text-indigo-500 hover:text-indigo-700 transition-colors z-50 relative">
        <Link to="/">← EXPLORE ALL TEMPLATES</Link>
      </div>

      {/* 2. FLOATING HEADER */}
      <header className="sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/90 backdrop-blur border border-indigo-50 shadow-md rounded-2xl px-6 py-3.5">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center space-x-2 font-bold tracking-tight text-slate-900 text-lg">
            <Rocket size={18} className="text-indigo-600 animate-bounce" />
            <span className="font-extrabold text-indigo-600 font-mono">LUMORA LABS</span>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold text-slate-500 font-mono">
            {['IDEAS', 'PORTFOLIO', 'PRODUCTS', 'PROCESS', 'TEAM'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="text-xs font-bold tracking-wide bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 uppercase shadow-md shadow-indigo-100"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border border-indigo-50 rounded-2xl px-6 py-4 mt-2 space-y-3 shadow-xl absolute left-6 right-6 z-40">
            {['IDEAS', 'PORTFOLIO', 'PRODUCTS', 'PROCESS', 'TEAM'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="block text-xs font-bold text-slate-600 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. CENTERED HERO */}
      <section id="home" className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto text-center relative z-10">
        
        {/* Floating SaaS Widget Left */}
        {hero.floatingCards[0] && (
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="absolute left-6 bottom-16 bg-white p-4 border border-indigo-100 shadow-xl rounded-2xl max-w-[210px] hidden lg:flex items-start space-x-3 text-left z-10 select-none"
          >
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 shrink-0">
              <Globe size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">{hero.floatingCards[0].title}</h4>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-none">{hero.floatingCards[0].desc}</p>
              <span className="text-[9px] font-bold text-emerald-600 mt-2 block font-mono">{hero.floatingCards[0].raised}</span>
            </div>
          </motion.div>
        )}

        {/* Floating SaaS Widget Right */}
        {hero.floatingCards[1] && (
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ...springTransition, delay: 0.7 }}
            whileHover={{ y: -5 }}
            className="absolute right-6 top-10 bg-white p-4 border border-indigo-100 shadow-xl rounded-2xl max-w-[210px] hidden lg:flex items-start space-x-3 text-left z-10 select-none"
          >
            <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600 shrink-0">
              <Layers size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">{hero.floatingCards[1].title}</h4>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-none">{hero.floatingCards[1].desc}</p>
              <span className="text-[9px] font-bold text-indigo-600 mt-2 block font-mono">{hero.floatingCards[1].raised}</span>
            </div>
          </motion.div>
        )}

        {/* Hero Content */}
        <div className="relative z-0 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-6 inline-block uppercase font-mono">
              VENTURE BUILDER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-6 max-w-3xl font-mono uppercase"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-sm md:text-base text-slate-500 leading-relaxed mb-10 max-w-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
          >
            <a
              href="#portfolio"
              onClick={(e) => handleAnchorClick(e, 'portfolio')}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs tracking-widest rounded-xl transition-all duration-300 text-center uppercase shadow-lg shadow-indigo-100"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="px-8 py-3 border border-slate-200 text-slate-600 font-bold text-xs tracking-widest rounded-xl hover:bg-slate-50 transition-all duration-300 text-center uppercase"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="py-16 bg-[#FAF9FF] border-y border-indigo-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {numbers.map((n) => (
            <div key={n.label}>
              <span className="text-3xl md:text-4xl font-extrabold text-indigo-600 block font-mono">
                {n.value}
              </span>
              <span className="text-[10px] tracking-wider uppercase mt-2 block opacity-70 font-mono font-bold">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE 3D TILT CARDS CATEGORIES */}
      <section id="ideas" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-600 uppercase mb-3 block font-mono">
            CATEGORIES
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
            Venture Scope
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeBuild.map((item, idx) => {
            const IconComp = [Layers, Rocket, Globe][idx] || Layers;
            return (
              <TiltCard
                key={item.title}
                className="bg-white p-8 border border-slate-100 rounded-2xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit group-hover:scale-105 transition-transform">
                  <IconComp size={20} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 6. INTERACTIVE TAB-FILTERED SHOWCASE PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-600 uppercase mb-3 block font-mono">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-mono">
              Active Studio Launches
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {portfolio.map((port, idx) => (
              <button
                key={port.name}
                onClick={() => setActiveShowcaseIdx(idx)}
                className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeShowcaseIdx === idx
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'bg-white text-slate-500 hover:text-slate-700 border border-slate-200/60'
                }`}
              >
                {`0${idx + 1} ${port.tag}`}
              </button>
            ))}
          </div>

          {/* Dynamic Card Display */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[360px] shadow-sm">
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit block mb-3">
                {portfolio[activeShowcaseIdx].raised}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                {portfolio[activeShowcaseIdx].name}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                {portfolio[activeShowcaseIdx].desc}
              </p>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 font-bold uppercase">
                <span>KPI Metrics:</span>
                <span className="text-indigo-600">{portfolio[activeShowcaseIdx].metrics}</span>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-100 aspect-[16/10] bg-slate-50 w-full relative shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShowcaseIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  src={portfolio[activeShowcaseIdx].image}
                  className="w-full h-full object-cover"
                  alt={portfolio[activeShowcaseIdx].name}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCTS UTILITIES */}
      <section id="products" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3 block font-mono">
            PROPRIETARY PLUGINS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-mono">
            Venture Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.name} className="bg-[#FAF9FF] p-8 border border-indigo-50/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[8px] font-mono font-bold text-indigo-500 uppercase tracking-widest mb-2 block">
                {p.type}
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mb-3">{p.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOUNDER CO-BUILDING ENGINE */}
      <section id="process" className="py-24 px-6 md:px-12 bg-[#FAF9FF] border-t border-indigo-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3 block font-mono">
              STUDIO PIPELINE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-mono">
              Co-Building Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howWeWork.map((step) => (
              <div key={step.step} className="bg-white p-8 border border-slate-100 rounded-2xl relative shadow-sm">
                <span className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-md">
                  {step.step.substring(1, 2)}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-2 mb-3">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VENTURE PARTNERS (Hover social expand) */}
      <section id="team" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-600 uppercase mb-3 block font-mono">
            VENTURE COLLABORATORS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-mono">
            Core Squad
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((lead) => (
            <div key={lead.name} className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-slate-100 rounded-2xl bg-[#FAF9FF]/50 hover:bg-white hover:shadow-md transition-all duration-300 group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 border border-indigo-100 shadow-md shrink-0 transition-transform group-hover:scale-105">
                <img src={lead.image} className="w-full h-full object-cover" alt={lead.name} />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-base font-extrabold text-slate-900">{lead.name}</h3>
                <span className="text-[10px] font-mono tracking-widest text-indigo-600 uppercase mt-0.5 block font-bold">
                  {lead.role}
                </span>
                <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                  Directing validation metrics and early pre-seed scaling models.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="py-24 px-6 md:px-12 bg-white max-w-4xl mx-auto text-center border-t border-slate-100">
        <span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 mb-8 block uppercase font-mono">
          FOUNDER STATEMENTS
        </span>
        {successStories.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed italic max-w-3xl mb-6">
              "{t.quote}"
            </blockquote>
            <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">
              {t.author} — <span className="text-indigo-600 font-bold font-mono">{t.company} Founder</span>
            </div>
          </div>
        ))}
      </section>

      {/* 11. PARTNER CTA */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center rounded-t-3xl scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-[9px] font-bold tracking-[0.3em] text-indigo-400 mb-6 block uppercase font-mono">
            VENTURE APPLICATION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-mono uppercase">
            Ready to Accelerate Your Concept?
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
            Apply to our next cohort. Let's write clean code, secure seed funding, and build a massive user pipeline together.
          </p>
          <a
            href="mailto:build@lumora.labs"
            className="px-10 py-3.5 bg-indigo-600 text-white font-bold text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-colors uppercase inline-block rounded-xl shadow-md font-mono"
          >
            Apply to Cohort
          </a>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-slate-950 py-12 px-6 md:px-12 border-t border-slate-900 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Rocket size={14} className="text-indigo-600" />
            <span className="text-white font-bold uppercase tracking-wider">LUMORA LABS DEPLOYMENTS</span>
          </div>
          <p>&copy; 2026 Lumora Labs Innovation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
