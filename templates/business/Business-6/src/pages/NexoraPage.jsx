import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Shield, Cpu, Terminal, Layers, Activity, Menu, X, ArrowRight } from 'lucide-react';
import { nexoraData } from '../data/nexoraData';

export default function NexoraPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const [hoveredArchStep, setHoveredArchStep] = useState(null);

  const { hero, platform, features, architecture, stats, products, techStack, stories } = nexoraData;

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. TOP HEADER REDIRECT */}
      <div className="bg-[#030712] border-b border-slate-900 py-2.5 text-center text-[10px] font-bold tracking-[0.25em] font-mono text-slate-500 hover:text-cyan-400 transition-colors z-50 relative">
        <Link to="/">← EXPLORE ALL TEMPLATES</Link>
      </div>

      {/* 2. STICKY GLASS HEADER */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center space-x-2.5 font-bold tracking-tight text-white text-lg">
            <div className="p-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg text-slate-950">
              <Cpu size={16} />
            </div>
            <span className="font-mono tracking-widest text-slate-100">NEXORA</span>
          </a>

          {/* Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            {['PLATFORM', 'PRODUCTS', 'ARCHITECTURE', 'STACK'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="text-[11px] font-mono tracking-widest bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-slate-950 font-bold px-6 py-2.5 rounded-lg transition-all duration-300 uppercase shadow-lg shadow-cyan-500/10"
            >
              Initialize Node
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-slate-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-slate-900 px-6 py-4 space-y-3.5 shadow-2xl absolute left-0 right-0">
            {['PLATFORM', 'PRODUCTS', 'ARCHITECTURE', 'STACK'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
                className="block text-xs font-mono tracking-wider text-slate-300 py-1 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (With Floating Widgets) */}
      <section id="home" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded mb-6 uppercase">
              DISTRIBUTED SYSTEMS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-black text-white tracking-tight leading-[1.05] mb-6">
              {hero.headline}
            </h1>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 max-w-lg">
              {hero.paragraph}
            </p>
            <div className="flex space-x-6">
              <a
                href="#products"
                onClick={(e) => handleAnchorClick(e, 'products')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs rounded-lg transition-colors duration-300 uppercase shadow-lg shadow-cyan-500/20"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#architecture"
                onClick={(e) => handleAnchorClick(e, 'architecture')}
                className="px-6 py-3 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-bold text-xs rounded-lg transition-colors duration-300 uppercase"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Right Interface Visualization (Floating Widgets around graphic) */}
          <div className="lg:col-span-6 flex justify-center relative min-h-[380px] w-full">
            {/* Background cyber radial glow */}
            <div className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Primary Visual Screen Mockup */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                <span className="text-[8px] font-mono text-slate-500 uppercase">core-telemetry.log</span>
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              </div>
              <div className="flex-1 my-4 flex items-center justify-center">
                <img src={hero.image} className="w-full h-full object-cover opacity-80 rounded border border-slate-800" alt="Tech Datacenter Infrastructure" />
              </div>
              <div className="text-[8px] font-mono text-cyan-400">
                system: active | cluster-load: 12% | nodes: 14/14
              </div>
            </div>

            {/* Floating Widget 1: AI SYSTEM */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 left-6 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl z-20 flex items-center space-x-2 text-left"
            >
              <Activity size={14} className="text-cyan-400" />
              <div>
                <span className="text-[8px] text-slate-500 block leading-none font-mono">AI ENGINE</span>
                <span className="text-[10px] font-bold text-white leading-none">AI PIPELINE READY</span>
              </div>
            </motion.div>

            {/* Floating Widget 2: UPTIME */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-4 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl z-20 flex items-center space-x-2 text-left"
            >
              <Server size={14} className="text-cyan-400" />
              <div>
                <span className="text-[8px] text-slate-500 block leading-none font-mono">{hero.floatingWidget1.title}</span>
                <span className="text-[10px] font-bold text-white leading-none">{hero.floatingWidget1.value}</span>
              </div>
            </motion.div>

            {/* Floating Widget 3: LATENCY */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-1/3 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl z-20 flex items-center space-x-2 text-left"
            >
              <Terminal size={14} className="text-cyan-400" />
              <div>
                <span className="text-[8px] text-slate-500 block leading-none font-mono">{hero.floatingWidget2.title}</span>
                <span className="text-[10px] font-bold text-white leading-none">{hero.floatingWidget2.value}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS */}
      <section className="py-14 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((st) => (
            <div key={st.label}>
              <span className="text-2xl md:text-3xl font-mono font-bold text-white block">
                {st.value}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-2 block">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE PRODUCTS SHOWCASE */}
      <section id="products" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase mb-3 block">
            PRODUCT SUITE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Available Modules
          </h2>
        </div>

        {/* Product tabs selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {products.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setActiveProductIdx(idx)}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeProductIdx === idx
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="text-[8px] font-mono font-bold text-cyan-400 tracking-wider mb-2 block uppercase">
              LIVE INSTANCE
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {products[activeProductIdx].name}
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
              {products[activeProductIdx].desc}
            </p>
            <a href="#contact" className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300">
              <span>View API Spec</span>
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="lg:col-span-7 flex justify-center overflow-hidden rounded-xl border border-slate-800 relative aspect-[16/10] bg-slate-950 w-full shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProductIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={products[activeProductIdx].image}
                className="w-full h-full object-cover opacity-90"
                alt={products[activeProductIdx].name}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY CARDS (Border glow hover, Description expand) */}
      <section id="platform" className="py-24 px-6 md:px-12 bg-slate-900/60 border-y border-slate-900/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase mb-3 block">
              PLATFORM DESIGN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {platform.title}
            </h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto mt-4">
              {platform.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((ft, idx) => {
              const IconComp = [Layers, Server, Shield][idx] || Layers;
              return (
                <div
                  key={ft.title}
                  className="bg-slate-950 border border-slate-850 p-8 rounded-xl hover:border-cyan-500/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[250px] relative overflow-hidden group"
                >
                  {/* Subtle top card gradient border highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="p-3 bg-slate-900 text-cyan-400 rounded-lg w-fit group-hover:scale-105 group-hover:rotate-3 transition-transform">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{ft.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ft.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE ARCHITECTURE DIAGRAM (SVG highlights from step hover) */}
      <section id="architecture" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Steps list */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4 block">
              DIAGRAM MAPPING
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
              {architecture.title}
            </h2>
            <div className="space-y-6">
              {architecture.steps.map((st, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredArchStep(idx)}
                  onMouseLeave={() => setHoveredArchStep(null)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    hoveredArchStep === idx
                      ? 'bg-slate-900 border-cyan-500/40 shadow'
                      : 'bg-slate-950 border-slate-900/60'
                  }`}
                >
                  <h3 className={`text-sm font-bold font-mono transition-colors ${hoveredArchStep === idx ? 'text-cyan-400' : 'text-slate-200'}`}>
                    {st.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SVG Topology display highlights */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[460px] bg-slate-950 border border-slate-900 rounded-xl p-8 flex items-center justify-center shadow-2xl">
              <svg className="w-full h-full stroke-slate-800 fill-none" viewBox="0 0 100 80">
                {/* Node Connection Lines */}
                <line x1="15" y1="40" x2="50" y2="20" stroke={hoveredArchStep === 0 || hoveredArchStep === 1 ? '#06B6D4' : '#1E293B'} strokeWidth="1.5" className="transition-colors duration-300" />
                <line x1="15" y1="40" x2="50" y2="60" stroke={hoveredArchStep === 0 || hoveredArchStep === 1 ? '#06B6D4' : '#1E293B'} strokeWidth="1.5" className="transition-colors duration-300" />
                <line x1="50" y1="20" x2="85" y2="40" stroke={hoveredArchStep === 1 || hoveredArchStep === 2 ? '#06B6D4' : '#1E293B'} strokeWidth="1.5" className="transition-colors duration-300" />
                <line x1="50" y1="60" x2="85" y2="40" stroke={hoveredArchStep === 1 || hoveredArchStep === 2 ? '#06B6D4' : '#1E293B'} strokeWidth="1.5" className="transition-colors duration-300" />

                {/* Node 1: Edge Router */}
                <circle
                  cx="15"
                  cy="40"
                  r={hoveredArchStep === 0 ? '7' : '5'}
                  fill={hoveredArchStep === 0 ? '#06B6D4' : '#1E293B'}
                  stroke={hoveredArchStep === 0 ? '#22D3EE' : '#334155'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                
                {/* Node 2A: Event Gateway */}
                <circle
                  cx="50"
                  cy="20"
                  r={hoveredArchStep === 1 ? '7' : '5'}
                  fill={hoveredArchStep === 1 ? '#06B6D4' : '#1E293B'}
                  stroke={hoveredArchStep === 1 ? '#22D3EE' : '#334155'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Node 2B: Queue */}
                <circle
                  cx="50"
                  cy="60"
                  r={hoveredArchStep === 1 ? '7' : '5'}
                  fill={hoveredArchStep === 1 ? '#06B6D4' : '#1E293B'}
                  stroke={hoveredArchStep === 1 ? '#22D3EE' : '#334155'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Node 3: DB Shards */}
                <circle
                  cx="85"
                  cy="40"
                  r={hoveredArchStep === 2 ? '7' : '5'}
                  fill={hoveredArchStep === 2 ? '#06B6D4' : '#1E293B'}
                  stroke={hoveredArchStep === 2 ? '#22D3EE' : '#334155'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Labels */}
                <text x="15" y="52" fill="#64748B" fontSize="3" textAnchor="middle" fontFamily="monospace">EDGE</text>
                <text x="50" y="11" fill="#64748B" fontSize="3" textAnchor="middle" fontFamily="monospace">GATEWAY</text>
                <text x="50" y="71" fill="#64748B" fontSize="3" textAnchor="middle" fontFamily="monospace">QUEUE</text>
                <text x="85" y="52" fill="#64748B" fontSize="3" textAnchor="middle" fontFamily="monospace">DATABASE</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECH STACK STRIP */}
      <section id="stack" className="py-16 bg-slate-900 border-t border-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-8">
            SUPPORTED INTEGRATIONS
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-slate-950 border border-slate-800 px-4 py-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 cursor-pointer transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-slate-950 max-w-4xl mx-auto text-center border-t border-slate-900">
        <span className="text-[9px] font-mono tracking-widest text-slate-500 mb-8 block uppercase">
          CLUSTER REVIEWS
        </span>
        {stories.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed italic max-w-3xl mb-6">
              "{t.quote}"
            </blockquote>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {t.author} — <span className="text-cyan-400">{t.role}, {t.company}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 10. CONTACT BRIEF */}
      <section id="contact" className="py-24 px-6 bg-slate-900 border-t border-slate-800 text-center scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-[9px] font-mono tracking-widest text-cyan-400 mb-6 block uppercase">
            ESTABLISH LINK
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Deploy Your Solution Stack with Nexora.
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
            Submit a connection brief to coordinate edge integrations or database sharding options with our engineers.
          </p>
          <a
            href="mailto:dev@nexora.io"
            className="px-10 py-3.5 bg-cyan-500 text-slate-950 font-mono font-bold text-xs tracking-widest hover:bg-white transition-colors uppercase inline-block rounded-lg shadow-lg shadow-cyan-500/10"
          >
            Open Connection Node
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-950 py-12 px-6 md:px-12 border-t border-slate-900 text-slate-600 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Cpu size={14} className="text-cyan-400" />
            <span className="text-white font-bold uppercase tracking-wider">NEXORA DEPLOYMENTS</span>
          </div>
          <p className="text-[10px]">&copy; 2026 Nexora Distributed Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
