import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  BookOpen, Award, Cpu, Layout, Compass, Flame, Play, Terminal, 
  Search, ArrowRight, User, PlusCircle, CheckCircle, BarChart3, 
  TrendingUp, Users, DollarSign, Edit, Trash, ArrowUpRight, 
  FileText, Shield, Sparkles, BookOpenCheck, Calendar, Bell, Menu, X,
  Phone, Mail, MapPin
} from 'lucide-react';
import { edtechData } from './data/edtechData';

// Map icon names to Lucide icons
const IconMap = {
  Compass: Compass,
  BookOpen: BookOpen,
  Cpu: Cpu,
  Layout: Layout,
  Award: Award,
  Play: Play,
  Terminal: Terminal,
  Flame: Flame,
  Users: Users,
  BookOpenCheck: BookOpenCheck,
  Calendar: Calendar,
  Bell: Bell
};

// Reusable scroll reveal component using standard intersection observer hooks
function ScrollReveal({ children, delay = 0 }) {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div 
      ref={setRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// ---------------- CUSTOM CURSOR ----------------
function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('.interactive-card');
      setIsHovered(!!isInteractive);
    };

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: isHovered ? '48px' : '20px',
        height: isHovered ? '48px' : '20px',
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(249, 217, 73, 0.3)' : 'rgba(255, 183, 3, 0.8)',
        border: isHovered ? '1px solid #FFB703' : 'none',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: `translate3d(${position.x - (isHovered ? 24 : 10)}px, ${position.y - (isHovered ? 24 : 10)}px, 0)`,
        transition: 'width 0.2s ease-out, height 0.2s ease-out, transform 0.05s ease-out, background-color 0.2s',
      }}
    />
  );
}

// ---------------- HEADER COMPONENT ----------------
function NavBar({ currentRole, setCurrentRole }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Active link check
  const isActive = (path) => {
    const cleanPath = path === '/' ? '' : path.replace('/', '');
    const currentSubpath = location.pathname.split('/').filter(Boolean).pop() || '';
    if (cleanPath === '') {
      return currentSubpath === '' || currentSubpath === 'education-5' || currentSubpath === 'index.html';
    }
    return cleanPath === currentSubpath;
  };

  return (
    <header className="sticky top-0 bg-[#FFFDF2]/85 backdrop-blur-md border-b border-[#FFF4B8] z-50 transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#F9D949] flex items-center justify-center rounded-xl border-2 border-[#202020] shadow-[3px_3px_0px_#202020] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_#202020] transition-all">
            <Sparkles className="text-[#202020]" size={20} />
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-[#202020] block leading-none">{edtechData.brand.name}</span>
            <span className="text-[9px] tracking-widest text-[#FFB703] uppercase font-black">{edtechData.brand.tagline}</span>
          </div>
        </Link>

        {/* Desktop Links (Only shown when not in a dashboard) */}
        {currentRole === 'guest' ? (
          <nav className="hidden lg:flex items-center gap-8">
            {edtechData.navLinks.map((link) => {
              const relPath = link.path === '/' ? '' : link.path.replace('/', '');
              const active = isActive(link.path);
              return (
                <Link
                  key={link.label}
                  to={relPath}
                  className={`relative text-xs tracking-widest uppercase font-black transition-colors py-2 ${
                    active ? 'text-[#FFB703]' : 'text-[#666666] hover:text-[#202020]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div 
                      layoutId="activeEdtechTab" 
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FFB703] rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        ) : (
          <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-[#666666]">
            <span>Authenticated Portal:</span>
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] px-3 py-1 rounded-full uppercase tracking-wider font-black text-[10px]">
              {currentRole} Role
            </span>
          </div>
        )}

        {/* Action Buttons & Portal Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Quick role switcher dropdown for live demonstration of dashboards */}
          <div className="relative">
            <select 
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className="bg-[#FFF4B8] hover:bg-[#FFF4B8]/80 text-[#202020] border-2 border-[#202020] rounded-xl px-3.5 py-1.5 text-xs font-black uppercase tracking-wider outline-none cursor-pointer shadow-[3px_3px_0px_#202020] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#202020] transition-all"
            >
              <option value="guest">Landing Page</option>
              <option value="student">Student Portal</option>
              <option value="instructor">Instructor view</option>
              <option value="admin">Admin Panel</option>
            </select>
          </div>

          {currentRole === 'guest' && (
            <button 
              onClick={() => setCurrentRole('student')}
              className="bg-[#202020] text-white hover:bg-[#202020]/90 text-xs font-black uppercase px-5 py-2.5 rounded-xl border-2 border-[#202020] hover:border-black transition-all shadow-[3px_3px_0px_#FFB703]"
            >
              Get Started
            </button>
          )}
        </div>

        {/* Mobile Hamburger menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-[#202020] focus:outline-none hover:opacity-85"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#202020]/25 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#FFFDF2] z-50 shadow-2xl p-8 flex flex-col justify-between lg:hidden"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-[#FFF4B8] pb-5">
                  <span className="font-black tracking-widest text-[#202020]">{edtechData.brand.name}</span>
                  <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-[#202020]"><X size={20} /></button>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-[9px] font-black uppercase text-[#666666] tracking-widest block">Demonstrate Views:</span>
                  <div className="grid grid-cols-1 gap-2">
                    {['guest', 'student', 'instructor', 'admin'].map((role) => (
                      <button
                        key={role}
                        onClick={() => { setCurrentRole(role); setIsOpen(false); }}
                        className={`text-xs font-black uppercase tracking-wider py-2.5 rounded-xl border-2 border-[#202020] text-center transition-all ${
                          currentRole === role 
                            ? 'bg-[#F9D949] shadow-[2px_2px_0px_#202020]' 
                            : 'bg-white hover:bg-zinc-50'
                        }`}
                      >
                        {role === 'guest' ? 'Landing Page' : `${role} Dashboard`}
                      </button>
                    ))}
                  </div>
                </div>

                {currentRole === 'guest' && (
                  <nav className="flex flex-col gap-5 pt-5 border-t border-[#FFF4B8]">
                    {edtechData.navLinks.map((link) => {
                      const relPath = link.path === '/' ? '' : link.path.replace('/', '');
                      return (
                        <Link
                          key={link.label}
                          to={relPath}
                          onClick={() => setIsOpen(false)}
                          className={`text-xs tracking-widest uppercase font-black ${
                            isActive(link.path) ? 'text-[#FFB703]' : 'text-[#666666] hover:text-[#202020]'
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                )}
              </div>

              <div className="border-t border-[#FFF4B8] pt-5">
                <span className="text-[9px] text-[#666666] uppercase tracking-widest block font-black mb-1">SUPPORT LINE</span>
                <span className="text-xs text-[#202020] font-black block">{edtechData.contactInfo.phone}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------------- HERO SECTION ----------------
function HeroSection({ onStartLearning, onExploreCourses }) {
  const centerpieceRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Parallax mouse hover effect
  const handleMouseMove = (e) => {
    if (!centerpieceRef.current) return;
    const rect = centerpieceRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[#FFFDF2] py-16 lg:py-24 border-b border-[#FFF4B8] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column Copywriting */}
        <ScrollReveal>
          <div className="flex flex-col items-start max-w-xl">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-6">
              {edtechData.hero.eyebrow}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#202020] tracking-tight leading-[1.0] mb-6">
              {edtechData.hero.title}
            </h1>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-8">
              {edtechData.hero.supportingText}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStartLearning}
                className="bg-[#F9D949] text-[#202020] text-xs font-black uppercase px-8 py-4 border-2 border-[#202020] rounded-xl hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_#202020] transition-all shadow-[6px_6px_0px_#202020]"
              >
                Start Learning
              </button>
              <button 
                onClick={onExploreCourses}
                className="bg-white text-[#202020] text-xs font-black uppercase px-8 py-4 border-2 border-[#202020] rounded-xl hover:bg-zinc-50 transition-all"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Interactive centerpiece with floating particles */}
        <ScrollReveal delay={0.2}>
          <div 
            ref={centerpieceRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center h-[420px] w-full"
          >
            {/* Center reactive wheel */}
            <motion.div 
              style={{
                rotateX: -tilt.y,
                rotateY: tilt.x,
                transformStyle: 'preserve-3d'
              }}
              className="w-72 h-72 rounded-3xl bg-[#FFF4B8] border-4 border-[#202020] flex flex-col items-center justify-center p-8 relative shadow-[10px_10px_0px_#202020] transition-transform duration-200"
            >
              <Sparkles size={48} className="text-[#FFB703] mb-4 animate-pulse" />
              <span className="text-2xl font-black tracking-widest text-[#202020]">{edtechData.hero.centerpieceText}</span>
              <span className="text-[8px] tracking-[0.2em] font-extrabold text-[#666666] uppercase text-center mt-2">{edtechData.hero.centerpieceSub}</span>
            </motion.div>

            {/* Floating particle elements */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 left-12 bg-white border-2 border-[#202020] rounded-xl p-3 flex items-center gap-2.5 shadow-[4px_4px_0px_#202020]"
            >
              <BookOpen size={16} className="text-[#FFB703]" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#202020]">Textbooks</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 bg-white border-2 border-[#202020] rounded-xl p-3 flex items-center gap-2.5 shadow-[4px_4px_0px_#202020]"
            >
              <Award size={16} className="text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#202020]">Credentials</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white border-2 border-[#202020] rounded-xl p-3 flex items-center gap-2.5 shadow-[4px_4px_0px_#202020]"
            >
              <Terminal size={16} className="text-indigo-500" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#202020]">Code Sandbox</span>
            </motion.div>

            {/* Background revolving circles */}
            <div className="absolute w-[360px] h-[360px] border border-[#FFF4B8] rounded-full -z-10 pointer-events-none" />
            <div className="absolute w-[440px] h-[440px] border border-[#FFF4B8]/50 rounded-full -z-10 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------------- ANIMATED STATISTICS ----------------
function StatisticsSection() {
  const [activated, setActivated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActivated(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFF4B8] py-16 border-b border-[#202020] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {edtechData.stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-[#202020] block mb-2 leading-none">
                {activated ? (
                  <CountUpNumber value={stat.value} suffix={stat.suffix} speed={1.5 + idx * 0.2} />
                ) : (
                  `0${stat.suffix}`
                )}
              </span>
              <span className="text-[10px] tracking-widest text-[#666666] uppercase font-black">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpNumber({ value, suffix, speed }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = speed * 1000;
    const increment = value / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, speed]);

  return <>{current.toLocaleString()}{suffix}</>;
}

// ---------------- LEARNING ROADMAP SECTION ----------------
function RoadmapSection() {
  return (
    <section id="roadmap-section" className="bg-white py-20 lg:py-24 border-b border-[#FFF4B8] font-sans relative overflow-hidden">
      
      {/* Background visual shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#FFF4B8]/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-4 inline-block">
              CURRICULUM PATH
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#202020] tracking-tight mb-4">
              {edtechData.roadmap.title}
            </h2>
            <p className="text-[#666666] text-sm">
              {edtechData.roadmap.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Roadmap path wrapper */}
        <div className="relative">
          
          {/* Vertical dashed line for mobile/tablet, horizontal line for desktop */}
          <div className="absolute left-[33px] top-4 bottom-4 w-1 bg-dashed border-l-2 border-dashed border-[#FFB703] lg:hidden" />
          <div className="hidden lg:block absolute left-12 right-12 top-[34px] h-[3px] bg-dashed border-t-2 border-dashed border-[#FFB703] -z-10" />

          {/* Roadmap nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {edtechData.roadmap.steps.map((step, idx) => {
              const Icon = IconMap[step.icon] || Compass;
              return (
                <ScrollReveal key={step.id} delay={idx * 0.15}>
                  <div className="flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-4 group">
                    
                    {/* Node circle */}
                    <div className="w-16 h-16 rounded-2xl bg-[#FFFDF2] border-4 border-[#202020] flex items-center justify-center text-[#202020] group-hover:bg-[#F9D949] shadow-[4px_4px_0px_#202020] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[3px_3px_0px_#202020] transition-all shrink-0">
                      <Icon size={24} />
                    </div>

                    {/* Step details */}
                    <div>
                      <span className="text-[10px] tracking-widest text-[#FFB703] font-black uppercase block mb-1">
                        STAGE {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-black text-[#202020] mb-2">
                        {step.label}
                      </h3>
                      <p className="text-[#666666] text-xs leading-relaxed max-w-[220px]">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- FEATURED COURSES & EXPLORER ----------------
function FeaturedCoursesSection({ onEnroll }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  // Filter logic
  const filteredCourses = edtechData.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'All' || course.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="courses-explorer" className="bg-zinc-50 py-20 lg:py-24 border-b border-[#FFF4B8] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-4 inline-block">
              ACADEMY COURSE CATALOG
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#202020] tracking-tight mb-4">
              Explore Our Live Programs
            </h2>
            <p className="text-[#666666] text-sm">
              Discover interactive courses led by conservatory teachers and software engineers.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Toolbar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-12">
            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                type="text"
                placeholder="Search programs, authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FFFDF2] border-2 border-[#202020] focus:border-[#FFB703] pl-10 pr-4 py-2.5 rounded-xl text-xs outline-none font-bold transition-all shadow-[2px_2px_0px_#202020]"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {edtechData.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] tracking-wider uppercase font-black transition-all border-2 border-[#202020] ${
                    selectedCat === cat 
                      ? 'bg-[#F9D949] text-[#202020] shadow-[2px_2px_0px_#202020]' 
                      : 'bg-white hover:bg-zinc-50 text-[#666666] hover:text-[#202020]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, idx) => (
                <ScrollReveal key={course.id} delay={idx * 0.1}>
                  <div className="interactive-card bg-white border-4 border-[#202020] rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 shadow-[8px_8px_0px_#202020] hover:shadow-[10px_10px_0px_#FFB703] flex flex-col h-full">
                    
                    {/* Thumbnail */}
                    <div className="relative h-44 overflow-hidden border-b-2 border-[#202020]">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 bg-[#FFF4B8] border border-[#202020] text-[#202020] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                        {course.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Instructor Details */}
                        <div className="flex items-center gap-2.5 mb-4">
                          <img src={course.instructorImage} alt={course.instructor} className="w-6 h-6 rounded-full border border-[#202020]" />
                          <span className="text-[10px] text-[#666666] font-bold">{course.instructor}</span>
                        </div>

                        <h3 className="text-sm font-black text-[#202020] mb-3 leading-tight block hover:text-[#FFB703] transition-colors">
                          {course.title}
                        </h3>
                      </div>

                      <div className="mt-4">
                        {/* Progress meter */}
                        <div className="flex justify-between items-center text-[9px] font-black uppercase text-[#666666] mb-1.5">
                          <span>Syllabus Completed</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="h-2 bg-[#FFFDF2] border border-[#202020] rounded-full overflow-hidden">
                          <div className="h-full bg-[#FFB703]" style={{ width: `${course.progress}%` }} />
                        </div>

                        {/* Price vs Button */}
                        <div className="border-t border-[#FFF4B8] pt-4 mt-5 flex items-center justify-between">
                          <span className="text-base font-black text-[#202020]">${course.price}</span>
                          <button 
                            onClick={() => onEnroll(course.title)}
                            className="bg-[#F9D949] text-[#202020] text-[9px] tracking-widest font-black uppercase px-4 py-2 border-2 border-[#202020] rounded-lg hover:bg-white hover:text-[#202020] transition-colors"
                          >
                            Enroll Program
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border-4 border-[#202020] shadow-[6px_6px_0px_#202020]">
              <span className="text-sm font-black text-zinc-400 block mb-2">No educational courses match your query</span>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCat('All'); }} 
                className="text-xs text-[#FFB703] font-black underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ---------------- WHY CHOOSE US SECTION ----------------
function WhyChooseUsSection() {
  return (
    <section id="why-choose-us-section" className="bg-[#FFFDF2] py-20 lg:py-24 border-b border-[#FFF4B8] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-4 inline-block">
              OUR FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#202020] tracking-tight mb-4">
              Why Choose AuraLearn?
            </h2>
            <p className="text-[#666666] text-sm">
              We replace static course tutorials with modular compilations, active Discord clans, and live codeshares.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edtechData.features.map((feat, idx) => {
            const Icon = IconMap[feat.icon] || Cpu;
            return (
              <ScrollReveal key={feat.title} delay={idx * 0.1}>
                <div className="bg-[#FFFDF2] p-8 rounded-2xl border-2 border-[#202020] hover:bg-[#FFF4B8]/40 transition-colors shadow-[4px_4px_0px_#202020]">
                  <div className="w-12 h-12 bg-[#F9D949] border-2 border-[#202020] flex items-center justify-center text-[#202020] rounded-xl mb-6 shadow-[2px_2px_0px_#202020]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-black text-[#202020] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-[#666666] text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------- INTERACTIVE INSTRUCTORS ----------------
function InstructorsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="instructors-section" className="bg-zinc-50 py-20 lg:py-24 border-b border-[#FFF4B8] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-4 inline-block">
              EXPERT MENTORS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#202020] tracking-tight mb-4">
              Conservatory Directors
            </h2>
            <p className="text-[#666666] text-sm">
              Learn directly from Grammy nominees and former Google Brain developers.
            </p>
          </div>
        </ScrollReveal>

        {/* Instructor layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {edtechData.instructors.map((inst, idx) => (
            <ScrollReveal key={inst.name} delay={idx * 0.15}>
              <div 
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`bg-white border-4 border-[#202020] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[6px_6px_0px_#202020] ${
                  hoveredIdx === idx ? 'bg-[#FFF4B8]/40 scale-102 shadow-[8px_8px_0px_#FFB703]' : ''
                }`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#202020] mb-5 shadow-[4px_4px_0px_#202020]">
                  <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-black text-[#202020] mb-1">{inst.name}</h3>
                <span className="text-[9px] tracking-widest font-black text-[#FFB703] uppercase mb-4 block leading-none">{inst.role}</span>
                <p className="text-[#666666] text-xs leading-relaxed mb-6">
                  {inst.bio}
                </p>

                {/* Additional metrics that reveal on hover */}
                <div className="border-t border-[#FFF4B8] w-full pt-4 mt-auto flex items-center justify-between text-[10px] font-black uppercase text-zinc-400">
                  <span>{inst.coursesCount} Programs</span>
                  <span>{inst.studentsCount} Students</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- STUDENT TESTIMONIALS ----------------
function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-[#FFF4B8] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="bg-[#FFF4B8] border border-[#FFB703] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-3 py-1.5 rounded-full mb-4 inline-block">
              GUILD VERDICTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#202020] tracking-tight mb-4">
              Student Experiences
            </h2>
            <p className="text-[#666666] text-sm">
              Don't take our word for it. Here is the feedback from our global community.
            </p>
          </div>
        </ScrollReveal>

        {/* Rotated Testimonial Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {edtechData.testimonials.map((test, idx) => (
            <ScrollReveal key={test.name} delay={idx * 0.15}>
              <div 
                style={{ transform: `rotate(${test.rotate})` }}
                className="bg-[#FFFDF2] border-2 border-[#202020] rounded-2xl p-8 flex flex-col justify-between h-full shadow-[5px_5px_0px_#202020] hover:shadow-[7px_7px_0px_#202020] hover:rotate-0 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Sparkles key={i} size={14} className="text-[#FFB703] fill-[#FFB703]" />
                    ))}
                  </div>
                  <p className="text-[#202020] text-xs font-semibold leading-relaxed mb-6">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-[#FFF4B8] pt-4">
                  <img src={test.image} alt={test.name} className="w-8 h-8 rounded-full border border-[#202020]" />
                  <div>
                    <span className="text-xs font-black text-[#202020] block">{test.name}</span>
                    <span className="text-[9px] text-[#666666] font-bold uppercase">{test.course}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CALL-TO-ACTION SECTION ----------------
function CTASection({ onStartLearning, onExploreCourses }) {
  return (
    <section className="bg-[#F9D949] py-20 border-b-4 border-[#202020] font-sans overflow-hidden relative">
      
      {/* Absolute floating shapes */}
      <div className="absolute top-0 right-10 w-44 h-44 rounded-full border-4 border-[#202020]/10 pointer-events-none" />
      <div className="absolute -bottom-10 left-12 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <span className="bg-white border-2 border-[#202020] text-[#202020] text-[9px] tracking-[0.2em] font-black uppercase px-4 py-2 rounded-full mb-6 inline-block">
            IMMEDIATE ACTION
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#202020] tracking-tight leading-tight mb-5">
            Your Next Skill Starts Here.
          </h2>
          <p className="text-[#202020]/75 text-sm md:text-base font-semibold mb-8 max-w-md mx-auto">
            Stop scrolling. Start learning. Grab your certification path now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onStartLearning}
              className="bg-[#202020] text-white hover:bg-black text-xs font-black uppercase px-8 py-4 rounded-xl border-2 border-[#202020] shadow-[5px_5px_0px_#FFFFFF] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_#FFFFFF] transition-all"
            >
              Start Learning
            </button>
            <button 
              onClick={onExploreCourses}
              className="bg-white text-[#202020] hover:bg-zinc-50 text-xs font-black uppercase px-8 py-4 rounded-xl border-2 border-[#202020] transition-all"
            >
              Browse Courses
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------------- FOOTER COMPONENT ----------------
function Footer({ addToast }) {
  const [email, setEmail] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    addToast(`Subscribed ${email} to our weekly curriculum updates!`);
    setEmail('');
  };

  return (
    <footer className="bg-[#171717] py-16 border-t-2 border-[#202020] font-sans text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#F9D949] flex items-center justify-center rounded-lg border border-black">
              <Sparkles className="text-[#202020]" size={16} />
            </div>
            <span className="text-sm font-black tracking-wider text-white leading-none">{edtechData.brand.name}</span>
          </div>
          <span className="text-[9px] tracking-widest text-[#FFB703] uppercase font-black">
            {edtechData.brand.tagline}
          </span>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mt-2">
            Futuristic learning roadmap and active sandbox environments.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Navigation</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-bold">
            {edtechData.navLinks.map(link => {
              const relPath = link.path === '/' ? '' : link.path.replace('/', '');
              return (
                <li key={link.label}>
                  <Link to={relPath} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Admissions</h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li className="flex items-start gap-2.5">
              <Phone size={13} className="mt-0.5 text-zinc-600" />
              <span>{edtechData.contactInfo.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={13} className="mt-0.5 text-zinc-600" />
              <span>{edtechData.contactInfo.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="mt-0.5 text-zinc-600" />
              <span>{edtechData.contactInfo.address}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Newsletter</h4>
          <p className="text-xs text-zinc-500 mb-4">Stay tuned for new program releases.</p>
          <form onSubmit={handleJoin} className="flex gap-2">
            <input 
              type="email" 
              placeholder="e.g. user@domain.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-white rounded-lg px-3 py-2 text-[10px] w-full outline-none"
            />
            <button 
              type="submit"
              className="bg-[#F9D949] text-[#202020] text-[9px] font-black uppercase px-3 py-2 rounded-lg border border-black cursor-pointer"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black tracking-widest uppercase text-zinc-600">
        <span>&copy; {new Date().getFullYear()} {edtechData.brand.name} ACADEMY. All Rights Reserved.</span>
        <span>Built with React + Tailwind CSS</span>
      </div>
    </footer>
  );
}

// ---------------- LANDING VIEW ----------------
function LandingView({ onStartLearning, onExploreCourses, onEnroll, addToast }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let targetId = '';
    
    if (path.endsWith('/courses') || path.endsWith('courses')) {
      targetId = 'courses-explorer';
    } else if (path.endsWith('/paths') || path.endsWith('paths')) {
      targetId = 'roadmap-section';
    } else if (path.endsWith('/instructors') || path.endsWith('instructors')) {
      targetId = 'instructors-section';
    } else if (path.endsWith('/about') || path.endsWith('about')) {
      targetId = 'why-choose-us-section';
    } else {
      // scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId) {
      // Small timeout to allow render frame to complete mounting
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location.pathname]);

  return (
    <>
      <HeroSection onStartLearning={onStartLearning} onExploreCourses={onExploreCourses} />
      <StatisticsSection />
      <RoadmapSection />
      <FeaturedCoursesSection onEnroll={onEnroll} />
      <WhyChooseUsSection />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection onStartLearning={onStartLearning} onExploreCourses={onExploreCourses} />
      <Footer addToast={addToast} />
    </>
  );
}

// ---------------- STUDENT DASHBOARD ----------------
function StudentDashboard() {
  return (
    <div className="bg-[#FFFDF2] py-12 font-sans flex-grow">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#FFF4B8] pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#666666] mb-1.5">
              <span>WELCOME BACK, STUDENT</span>
            </div>
            <h1 className="text-3xl font-black text-[#202020]">Jared Oswald</h1>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white border-2 border-[#202020] rounded-xl px-4 py-3 shadow-[3px_3px_0px_#202020] text-center">
              <span className="text-xl font-black text-[#202020] block">8 Days</span>
              <span className="text-[9px] font-bold text-[#666666] uppercase tracking-wider block">Learning Streak</span>
            </div>
            <div className="bg-[#F9D949] border-2 border-[#202020] rounded-xl px-4 py-3 shadow-[3px_3px_0px_#202020] text-center">
              <span className="text-xl font-black text-[#202020] block">3</span>
              <span className="text-[9px] font-bold text-[#666666] uppercase tracking-wider block">Verified Certificates</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Columns: Courses & Activity */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Continue Learning card */}
            <div className="bg-white border-4 border-[#202020] rounded-2xl p-6 shadow-[6px_6px_0px_#202020]">
              <span className="text-[9px] font-black text-[#FFB703] uppercase tracking-wider mb-2 block">RESUME SESSION</span>
              <h2 className="text-lg font-black text-[#202020] mb-4">React 19 & Next.js: Futuristic Frontend Engines</h2>
              
              <div className="flex justify-between items-center text-[10px] font-black uppercase text-[#666666] mb-2">
                <span>Course Progress</span>
                <span>68% Complete</span>
              </div>
              <div className="h-3 bg-[#FFFDF2] border-2 border-[#202020] rounded-full overflow-hidden mb-6">
                <div className="h-full bg-[#F9D949]" style={{ width: '68%' }} />
              </div>

              <div className="flex gap-4">
                <button className="bg-[#F9D949] text-[#202020] border-2 border-[#202020] text-xs font-black uppercase px-6 py-3 rounded-lg hover:shadow-[2px_2px_0px_#202020] transition-all">
                  Launch Sandbox Lesson
                </button>
                <button className="bg-white text-[#666666] text-xs font-bold px-4 py-3 hover:text-[#202020]">
                  Syllabus details
                </button>
              </div>
            </div>

            {/* Enrolled Courses list */}
            <div>
              <h3 className="text-base font-black text-[#202020] mb-5 uppercase tracking-wide">Enrolled Programs</h3>
              <div className="flex flex-col gap-4">
                {edtechData.courses.slice(0, 3).map(course => (
                  <div key={course.id} className="bg-white border-2 border-[#202020] rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <img src={course.thumbnail} alt="" className="w-12 h-12 rounded-lg object-cover border border-[#202020]" />
                      <div>
                        <h4 className="text-xs font-black text-[#202020] mb-1">{course.title}</h4>
                        <span className="text-[9px] text-[#666666] font-bold block">{course.instructor} • {course.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="text-right">
                        <span className="text-xs font-black text-[#202020] block">{course.progress}%</span>
                        <span className="text-[8px] text-[#666666] font-bold block uppercase">Progress</span>
                      </div>
                      <button className="bg-[#FFF4B8] border border-[#202020] hover:bg-[#F9D949] text-[#202020] text-[9px] font-black uppercase px-4 py-2 rounded-lg transition-colors">
                        Launch
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Achievements & Streaks */}
          <div className="flex flex-col gap-8">
            
            {/* Achievements Card with custom radial indicator */}
            <div className="bg-[#FFF4B8] border-2 border-[#202020] rounded-2xl p-6 shadow-[6px_6px_0px_#202020]">
              <h3 className="text-sm font-black text-[#202020] uppercase tracking-wide mb-6">Course Completion Stats</h3>
              
              {/* Fake circular chart */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/50" />
                  {/* Spinner border simulation */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFB703] border-r-[#FFB703] animate-spin" style={{ animationDuration: '6s' }} />
                  <div className="flex flex-col items-center z-10">
                    <span className="text-2xl font-black text-[#202020]">78%</span>
                    <span className="text-[8px] text-[#666666] font-bold uppercase">Accuracy</span>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5 text-xs text-[#202020]">
                <li className="flex justify-between items-center border-b border-[#FFFDF2] pb-2">
                  <span className="font-bold">Total Learning Hours</span>
                  <span className="font-black">48.5 hrs</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#FFFDF2] pb-2">
                  <span className="font-bold">Sandbox Submissions</span>
                  <span className="font-black">24</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold">Rank Placement</span>
                  <span className="font-black text-[#FFB703]">Top 5%</span>
                </li>
              </ul>
            </div>

            {/* Upcoming live checkpoints */}
            <div className="bg-white border-2 border-[#202020] rounded-2xl p-6">
              <h3 className="text-sm font-black text-[#202020] uppercase tracking-wide mb-4">Live Checkpoints</h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 border-l-2 border-[#FFB703] pl-3">
                  <div>
                    <span className="text-[9px] text-[#666666] font-bold block">TODAY, 4:00 PM</span>
                    <span className="text-xs font-black text-[#202020] block">React Server Components review</span>
                  </div>
                </div>
                <div className="flex gap-3 border-l-2 border-zinc-300 pl-3">
                  <div>
                    <span className="text-[9px] text-[#666666] font-bold block">TOMORROW, 2:00 PM</span>
                    <span className="text-xs font-black text-[#202020] block">AI agentic prompt sandbox review</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// ---------------- INSTRUCTOR DASHBOARD ----------------
function InstructorDashboard() {
  const [courses, setCourses] = useState(edtechData.courses);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Development');
  const [newPrice, setNewPrice] = useState('99');

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newCourse = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      instructor: "Marcus Vance (You)",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5.0,
      students: 0,
      price: parseInt(newPrice) || 0,
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    };
    setCourses([newCourse, ...courses]);
    setNewTitle('');
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="bg-[#FFFDF2] py-12 font-sans flex-grow">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#FFF4B8] pb-8 mb-8">
          <div>
            <span className="text-[9px] font-black uppercase text-[#666666] tracking-widest block mb-1">CONSOLE PANEL</span>
            <h1 className="text-3xl font-black text-[#202020]">Instructor Dashboard</h1>
          </div>

          <div className="flex gap-4">
            <div className="bg-white border-2 border-[#202020] rounded-xl px-5 py-3 shadow-[3px_3px_0px_#202020]">
              <span className="text-sm font-bold text-[#666666] block">Active Students</span>
              <span className="text-2xl font-black text-[#202020]">34,500</span>
            </div>
            <div className="bg-[#F9D949] border-2 border-[#202020] rounded-xl px-5 py-3 shadow-[3px_3px_0px_#202020]">
              <span className="text-sm font-bold text-[#666666] block">Monthly Earnings</span>
              <span className="text-2xl font-black text-[#202020]">$12,480</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* List of courses */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-base font-black text-[#202020] uppercase tracking-wide">Manage Your Courses</h2>
            
            <div className="flex flex-col gap-4">
              {courses.map(course => (
                <div key={course.id} className="bg-white border-2 border-[#202020] rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={course.thumbnail} alt="" className="w-12 h-12 rounded-lg object-cover border border-[#202020]" />
                    <div>
                      <h3 className="text-xs font-black text-[#202020] mb-0.5">{course.title}</h3>
                      <span className="text-[9px] text-[#666666] font-bold block">{course.category} • {course.students.toLocaleString()} enrolled</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-xs font-black text-[#202020]">${course.price}</span>
                    <button 
                      onClick={() => handleDeleteCourse(course.id)}
                      className="text-rose-500 hover:text-rose-700 p-2 transition-colors border border-zinc-100 hover:border-rose-200 rounded-lg"
                      aria-label="Delete course program"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Create new course form */}
          <div>
            <div className="bg-white border-4 border-[#202020] rounded-2xl p-6 shadow-[6px_6px_0px_#202020]">
              <h2 className="text-base font-black text-[#202020] uppercase tracking-wide mb-5">Create New Program</h2>
              
              <form onSubmit={handleAddCourse} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">COURSE TITLE</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Mastering Rust Web Servers"
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">CATEGORY</label>
                  <select 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none cursor-pointer"
                  >
                    {edtechData.categories.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">PRICE ($)</label>
                  <input 
                    type="number" 
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#F9D949] text-[#202020] border-2 border-[#202020] text-xs font-black uppercase py-3 rounded-lg hover:shadow-[2px_2px_0px_#202020] transition-all mt-2"
                >
                  Create Program
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ---------------- ADMIN DASHBOARD ----------------
function AdminDashboard() {
  const [users, setUsers] = useState([
    { name: "Jared Oswald", role: "Student", email: "jared@oswald.com", status: "Active" },
    { name: "Alan Turing Jr.", role: "Instructor", email: "turing@data.com", status: "Active" },
    { name: "Evelyn Oswald", role: "Instructor", email: "evelyn@auralearn.edu", status: "Active" },
    { name: "Sasha Grey", role: "Instructor", email: "sasha@grey.design", status: "Active" },
    { name: "Marcus Vance", role: "Instructor", email: "marcus@vance.com", status: "Active" }
  ]);

  const [newUser, setNewUser] = useState({ name: '', role: 'Student', email: '' });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name.trim() || !newUser.email.trim()) return;
    setUsers([...users, { ...newUser, status: 'Active' }]);
    setNewUser({ name: '', role: 'Student', email: '' });
  };

  const handleDeleteUser = (email) => {
    setUsers(users.filter(u => u.email !== email));
  };

  return (
    <div className="bg-[#FFFDF2] py-12 font-sans flex-grow">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#FFF4B8] pb-8 mb-8">
          <div>
            <span className="text-[9px] font-black uppercase text-[#666666] tracking-widest block mb-1">ROOT COMMANDER</span>
            <h1 className="text-3xl font-black text-[#202020]">Admin Control Board</h1>
          </div>
        </div>

        {/* Global Analytics stats band */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border-2 border-[#202020] rounded-xl p-5 shadow-[4px_4px_0px_#202020]">
            <span className="text-xs font-bold text-[#666666] block mb-1">Total Users</span>
            <span className="text-2xl font-black text-[#202020]">52,240</span>
          </div>
          <div className="bg-white border-2 border-[#202020] rounded-xl p-5 shadow-[4px_4px_0px_#202020]">
            <span className="text-xs font-bold text-[#666666] block mb-1">Verified Programs</span>
            <span className="text-2xl font-black text-[#202020]">586</span>
          </div>
          <div className="bg-white border-2 border-[#202020] rounded-xl p-5 shadow-[4px_4px_0px_#202020]">
            <span className="text-xs font-bold text-[#666666] block mb-1">Active Sandbox Sessions</span>
            <span className="text-2xl font-black text-[#202020]">1,280</span>
          </div>
          <div className="bg-[#F9D949] border-2 border-[#202020] rounded-xl p-5 shadow-[4px_4px_0px_#202020]">
            <span className="text-xs font-bold text-[#666666] block mb-1">Total Platform Earnings</span>
            <span className="text-2xl font-black text-[#202020]">$324,800</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* User management list */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-base font-black text-[#202020] uppercase tracking-wide">Registered Accounts</h2>
            
            <div className="bg-white border-2 border-[#202020] rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-xs font-semibold">
                <thead>
                  <tr className="bg-[#FFF4B8] border-b-2 border-[#202020] text-[#202020]">
                    <th className="p-4 font-black">User Details</th>
                    <th className="p-4 font-black">Role</th>
                    <th className="p-4 font-black text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.email} className="border-b border-[#FFF4B8]">
                      <td className="p-4">
                        <div className="font-bold text-[#202020]">{user.name}</div>
                        <div className="text-[10px] text-[#666666]">{user.email}</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${
                          user.role === 'Instructor' 
                            ? 'bg-[#FFF4B8] border-[#FFB703] text-[#202020]' 
                            : 'bg-zinc-50 border-zinc-200 text-[#666666]'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDeleteUser(user.email)}
                          className="text-rose-500 hover:text-rose-700 transition-colors p-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Register new user form */}
          <div>
            <div className="bg-white border-4 border-[#202020] rounded-2xl p-6 shadow-[6px_6px_0px_#202020]">
              <h2 className="text-base font-black text-[#202020] uppercase tracking-wide mb-5">Register New Account</h2>
              
              <form onSubmit={handleAddUser} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">FULL NAME</label>
                  <input 
                    type="text" 
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="e.g. Clara Oswald"
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="e.g. clara@oswald.com"
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase mb-2">ACCOUNT ROLE</label>
                  <select 
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="bg-[#FFFDF2] border-2 border-[#202020] rounded-lg px-3 py-2 text-xs font-bold outline-none cursor-pointer"
                  >
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="bg-[#F9D949] text-[#202020] border-2 border-[#202020] text-xs font-black uppercase py-3 rounded-lg hover:shadow-[2px_2px_0px_#202020] transition-all mt-2"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ---------------- MAIN ROUTER COMPONENT ----------------
export default function EdTechInteractiveTemplate() {
  const [currentRole, setCurrentRole] = useState('guest'); // Live role toggle: guest, student, instructor, admin
  const [toasts, setToasts] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleStartLearning = () => {
    setCurrentRole('student');
    addToast('Welcome to your Student Portal! Start exploring sandbox lessons.');
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      addToast('Scrolled to Course Catalog');
    }
  };

  const handleEnroll = (courseTitle) => {
    addToast(`Successfully enrolled in: ${courseTitle}!`);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF2] text-[#202020] flex flex-col justify-between selection:bg-[#F9D949] selection:text-[#202020]">
      
      {/* Custom mouse trailing cursor */}
      <CustomCursor />

      {/* Floating Toast Notification Alerts */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="bg-[#FFF4B8] border-4 border-[#202020] text-[#202020] px-5 py-3 rounded-2xl shadow-[4px_4px_0px_#202020] pointer-events-auto flex items-center gap-2.5 max-w-sm"
            >
              <CheckCircle size={16} className="text-[#FFB703] shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-wider">{t.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation bar header */}
      <NavBar currentRole={currentRole} setCurrentRole={setCurrentRole} />

      {/* Conditional View Renders */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentRole === 'guest' ? (
            <motion.div
              key="guest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col"
            >
              <LandingView 
                onStartLearning={handleStartLearning}
                onExploreCourses={handleExploreCourses}
                onEnroll={handleEnroll}
                addToast={addToast}
              />
            </motion.div>
          ) : currentRole === 'student' ? (
            <motion.div
              key="student"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-grow flex flex-col"
            >
              <StudentDashboard />
            </motion.div>
          ) : currentRole === 'instructor' ? (
            <motion.div
              key="instructor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-grow flex flex-col"
            >
              <InstructorDashboard />
            </motion.div>
          ) : (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-grow flex flex-col"
            >
              <AdminDashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
