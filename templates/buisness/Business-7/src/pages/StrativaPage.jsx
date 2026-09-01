import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, HelpCircle, Menu, X, ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { strativaData } from '../data/strativaData';

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
    const end = parseFloat(value) || 0;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime || 40);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StrativaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeExpertiseIdx, setActiveExpertiseIdx] = useState(0);
  const [expandedCaseIdx, setExpandedCaseIdx] = useState(null);

  const { hero, expertise, industries, approach, metricsList, caseStudies, leadership, testimonials } = strativaData;

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
    <div className="min-h-screen bg-[#F9F9F7] text-slate-800 font-sans antialiased border-stone-300">
      {/* 1. TOP HEADER REDIRECT */}
      <div className="bg-[#F0F0EC] border-b border-[#E1E1DC] py-2.5 text-center text-[10px] font-bold tracking-[0.25em] font-mono text-stone-600 hover:text-emerald-600 transition-colors z-50 relative">
        <Link to="/">← EXPLORE ALL TEMPLATES</Link>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#F9F9F7]/95 backdrop-blur-sm border-b border-stone-200/60 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center space-x-2 font-bold tracking-widest text-slate-900 text-lg uppercase">
            <BarChart3 size={18} className="text-emerald-600" />
            <span>STRATIVA</span>
          </a>

          {/* Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-widest text-slate-600 uppercase font-mono">
            {['EXPERTISE', 'INDUSTRIES', 'APPROACH', 'METRICS', 'CASES'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase().replace(' ', '-'))}
                className="hover:text-emerald-600 transition-colors duration-200"
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
              className="text-[10px] font-bold tracking-widest bg-slate-900 text-white px-5 py-2.5 hover:bg-emerald-600 transition-all duration-300 uppercase rounded-sm"
            >
              Discuss Engagement
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F9F7] border-t border-stone-200 px-6 py-4 space-y-3 shadow-md absolute left-0 right-0">
            {['EXPERTISE', 'INDUSTRIES', 'APPROACH', 'METRICS', 'CASES'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleAnchorClick(e, item.toLowerCase().replace(' ', '-'))}
                className="block text-xs font-bold tracking-widest text-slate-700 py-1 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. SPLIT HERO */}
      <section id="home" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-4 block font-mono">
              MANAGEMENT CONSULTING
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {hero.headline}
            </h1>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
              {hero.paragraph}
            </p>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="px-8 py-3.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs tracking-widest transition-colors duration-300 text-center uppercase"
            >
              {hero.cta}
            </a>
          </motion.div>

          {/* Right SVG simulation screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[460px] bg-white border border-stone-200 shadow-md p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-[9px] font-bold tracking-widest font-mono text-slate-400 uppercase">
                  SIMULATION FORECAST
                </span>
                <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  EBITDA MODEL
                </span>
              </div>

              {/* SVG Graphic */}
              <div className="relative h-44 flex items-end w-full border-b border-stone-100 my-4">
                <svg className="w-full h-full stroke-emerald-600 fill-none" viewBox="0 0 100 50">
                  <line x1="0" y1="10" x2="100" y2="10" stroke="#F1F1EF" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#F1F1EF" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="#F1F1EF" strokeWidth="0.5" />
                  
                  {/* Trend Line */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    d="M 0 45 L 20 40 L 40 28 L 60 22 L 80 12 L 100 4" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                  <circle cx="80" cy="12" r="3" fill="#D4A253" className="animate-ping" />
                  <circle cx="80" cy="12" r="2" fill="#D4A253" />
                </svg>

                {/* Overlays */}
                <div className="absolute top-2 left-2 bg-white border border-stone-200 p-2 shadow-md flex items-center space-x-2">
                  <TrendingUp size={14} className="text-emerald-600 animate-pulse" />
                  <div>
                    <span className="text-[8px] text-slate-400 font-mono uppercase block">{hero.metrics[0].label}</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">{hero.metrics[0].value}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-2 bg-white border border-stone-200 p-2 shadow-md flex items-center space-x-2">
                  <div>
                    <span className="text-[8px] text-slate-400 font-mono uppercase block">{hero.metrics[1].label}</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">{hero.metrics[1].value}</span>
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-400">
                EBITDA forecast models based on active advisory margins.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP (Animated Counters) */}
      <section id="metrics" className="py-16 bg-white border-y border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {metricsList.map((m) => (
            <div key={m.label} className="p-6 bg-[#F9F9F7] border border-stone-200/60 rounded-sm">
              <span className="text-3xl font-extrabold font-mono text-emerald-600 block">
                {m.value.includes('$') && '$'}
                <AnimatedCounter value={m.value.replace(/[^0-9.]/g, '')} />
                {m.value.includes('B') && 'B'}
                {m.value.includes('X') && 'X'}
                {m.value.includes('%') && '%'}
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-2 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE EXPERTISE MATRIX (Click swappable content) */}
      <section id="expertise" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-3 block font-mono">
            EXPERTISE FIELDS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Advisory Vectors
          </h2>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 border-b border-stone-200 pb-6">
          {expertise.map((exp, idx) => (
            <button
              key={exp.title}
              onClick={() => setActiveExpertiseIdx(idx)}
              className={`px-6 py-2.5 text-xs font-mono font-bold uppercase transition-all border-b-2 ${
                activeExpertiseIdx === idx
                  ? 'border-emerald-600 text-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {exp.title}
            </button>
          ))}
        </div>

        {/* Dynamic Swapped Card */}
        <div className="bg-white border border-stone-200 rounded-lg p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[360px]">
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <span className="text-[9px] font-mono text-emerald-600 font-bold uppercase block mb-3">
              {expertise[activeExpertiseIdx].stat}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {expertise[activeExpertiseIdx].title} Advisory
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              {expertise[activeExpertiseIdx].desc}
            </p>
            <a href="#contact" className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-900 hover:text-emerald-600 uppercase">
              <span>Request Sector Brief</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded border border-stone-200 aspect-[16/10] bg-stone-100 w-full relative shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeExpertiseIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={expertise[activeExpertiseIdx].image}
                className="w-full h-full object-cover"
                alt={expertise[activeExpertiseIdx].title}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE ADVISE */}
      <section id="industries" className="py-20 px-6 md:px-12 bg-white border-y border-stone-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-600 uppercase mb-3 block font-mono">
              SECTORS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Sectors We Advise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind) => (
              <div key={ind} className="border-t border-stone-300 pt-6">
                <h3 className="text-xs font-bold text-slate-800 tracking-wider mb-2 font-mono uppercase">
                  {ind}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Structuring cost reduction strategies, logistic inventory sharding, and board governance models.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY TRANSITION STEPS */}
      <section id="approach" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-3 block font-mono">
            METHODOLOGY
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Advisory Progression
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approach.map((app) => (
            <div key={app.num} className="p-6 border-l border-emerald-600/30 bg-white shadow-sm border border-stone-200/40">
              <span className="text-[10px] font-mono text-emerald-600 font-bold block mb-2">
                {app.num}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{app.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. EXPANDABLE CASE STUDIES (Accordion Collapse) */}
      <section id="cases" className="py-24 px-6 md:px-12 bg-white border-t border-stone-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-600 uppercase mb-3 block font-mono">
              ADVISORY OUTCOMES
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Strategic Case Audits
            </h2>
          </div>

          <div className="space-y-6">
            {caseStudies.map((cs, idx) => {
              const isExpanded = expandedCaseIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-lg overflow-hidden bg-[#F9F9F7] transition-all"
                >
                  {/* Summary Bar Trigger */}
                  <div
                    onClick={() => setExpandedCaseIdx(isExpanded ? null : idx)}
                    className="p-6 flex items-center justify-between cursor-pointer hover:bg-stone-50 select-none"
                  >
                    <div className="flex items-center space-x-6 min-w-0">
                      <span className="text-[9px] font-mono text-emerald-600 font-bold uppercase shrink-0">
                        {cs.category}
                      </span>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 truncate">
                        {cs.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-500 shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 border-t border-stone-200 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          <div className="lg:col-span-7 space-y-4">
                            <div>
                              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase">CHALLENGE</h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{cs.challenge}</p>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase">STRATEGY</h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{cs.strategy}</p>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase">RESULT</h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-bold">{cs.result}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-5 rounded overflow-hidden border border-stone-200 aspect-[16/10] bg-stone-50">
                            <img src={cs.image} className="w-full h-full object-cover" alt={cs.title} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. LEADERSHIP */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F7] border-y border-stone-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-3 block font-mono">
              SENIOR DIRECTORS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Expert Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((lead) => (
              <div key={lead.name} className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 border border-stone-200/60">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                  <img src={lead.image} className="w-full h-full object-cover" alt={lead.name} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-base font-bold text-slate-900">{lead.name}</h3>
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-0.5 block">
                    {lead.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 bg-white max-w-4xl mx-auto text-center border-b border-stone-200/60">
        <span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 mb-8 block uppercase">
          CLIENT STATEMENT
        </span>
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed italic max-w-3xl mb-6">
              "{t.quote}"
            </blockquote>
            <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest">
              {t.name} — <span className="text-slate-400">{t.role}, {t.company}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 11. CONTACT BRIEF */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-[9px] font-bold tracking-[0.3em] text-emerald-500 mb-6 block uppercase">
            REQUEST ENGAGEMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let’s Turn Operational Friction Into EBITDA Yield.
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
            Reach out to schedule a preliminary operations audit and map core cost savings with our senior advisory team.
          </p>
          <a
            href="mailto:partner@strativa.consulting"
            className="px-10 py-3.5 bg-emerald-600 text-white font-bold text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-colors uppercase inline-block rounded-sm"
          >
            Schedule Advisory Audit
          </a>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#F9F9F7] py-12 px-6 md:px-12 border-t border-stone-200/60 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BarChart3 size={14} className="text-emerald-600" />
            <span className="text-slate-950 font-bold uppercase tracking-wider">STRATIVA ADVISORS</span>
          </div>
          <p>&copy; 2026 Strativa Management Advisors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
