import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Music, Cpu, Award, Mic, Guitar, PenTool, Menu, X, 
  ChevronRight, Search, Mail, Phone, MapPin, Clock, 
  Check, BookOpen, GraduationCap, ArrowRight, CheckCircle
} from 'lucide-react';
import { musicData } from './data/musicData';

// Map icon names from data file to Lucide components
const IconMap = {
  Music: Music,
  Cpu: Cpu,
  Award: Award,
  Mic: Mic,
  Guitar: Guitar,
  PenTool: PenTool,
  BookOpen: BookOpen
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

// Sub-page transition layout
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-grow"
    >
      {children}
    </motion.div>
  );
}

// ---------------- HEADER COMPONENT ----------------
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Active state checker for relative paths under HashRouter
  const isActive = (path) => {
    const cleanPath = path === '/' ? '' : path.replace('/', '');
    const currentSubpath = location.pathname.replace('/', '');
    return cleanPath === currentSubpath || (cleanPath === '' && currentSubpath === 'index.html');
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-zinc-100 z-50 transition-all duration-300 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-[#0c1b33] flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
            <GraduationCap className="text-white" size={20} />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-wider text-[#0c1b33] block leading-none">{musicData.brand.name}</span>
            <span className="text-[10px] tracking-widest text-[#0c1b33]/60 uppercase font-semibold">{musicData.brand.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {musicData.navLinks.map((link) => {
            const relPath = link.path === '/' ? '' : link.path.replace('/', '');
            const active = isActive(link.path);
            return (
              <Link
                key={link.label}
                to={relPath}
                className={`relative text-xs tracking-widest uppercase font-bold transition-colors py-2 ${
                  active ? 'text-[#0c1b33]' : 'text-zinc-500 hover:text-[#0c1b33]'
                }`}
              >
                {link.label}
                {active && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0c1b33] rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#0c1b33] focus:outline-none hover:opacity-80 transition-opacity"
          aria-label="Toggle navigation drawer"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Slide-out Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0c1b33]/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl p-8 flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
                  <span className="font-extrabold tracking-widest text-[#0c1b33]">{musicData.brand.name}</span>
                  <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-[#0c1b33]"><X size={20} /></button>
                </div>
                <nav className="flex flex-col gap-6">
                  {musicData.navLinks.map((link) => {
                    const relPath = link.path === '/' ? '' : link.path.replace('/', '');
                    return (
                      <Link
                        key={link.label}
                        to={relPath}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm tracking-widest uppercase font-bold ${
                          isActive(link.path) ? 'text-[#0c1b33] pl-2 border-l-4 border-[#0c1b33]' : 'text-zinc-500 hover:text-[#0c1b33]'
                        } transition-all`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="border-t border-zinc-100 pt-5">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">Office Inquiries</span>
                <span className="text-xs text-[#0c1b33] font-bold block">{musicData.contactPage.phone}</span>
                <span className="text-xs text-zinc-500 block">{musicData.contactPage.email}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------------- HERO COMPONENT ----------------
function HeroSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 border-b border-zinc-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left column: Photographic Image with credit */}
        <ScrollReveal>
          <div className="relative group">
            <div className="absolute -inset-4 bg-zinc-100 rounded-2xl -rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-zinc-200">
              <img 
                src={musicData.hero.imageSrc} 
                alt={musicData.hero.imageAlt} 
                className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 right-4 bg-[#0c1b33]/80 backdrop-blur-md text-[10px] tracking-wider text-zinc-300 font-semibold px-2.5 py-1 rounded">
                Image from {musicData.hero.attribution}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right column: Copywriting */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-start max-w-lg">
            <span className="text-xs tracking-[0.25em] text-[#0c1b33] font-extrabold uppercase mb-4 block border-b-2 border-[#0c1b33] pb-1.5 leading-none">
              {musicData.hero.eyebrow}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-[#0c1b33] tracking-tight leading-[1.05] mb-6">
              {musicData.hero.title}
            </h1>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8">
              {musicData.hero.description}
            </p>
            <Link 
              to="about" 
              className="bg-[#0c1b33] text-white text-xs tracking-widest font-black uppercase px-8 py-4 border border-[#0c1b33] hover:bg-white hover:text-[#0c1b33] transition-all duration-300 shadow-lg shadow-[#0c1b33]/15"
            >
              {musicData.hero.ctaText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------------- HIGHLIGHT / ICON BAND COMPONENT ----------------
function HighlightBand() {
  return (
    <section className="relative bg-[#0c1b33] py-20 font-sans overflow-hidden">
      
      {/* Decorative floating shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/5 rounded-full filter blur-2xl pointer-events-none" />

      {/* Centered badge overlapping the section top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="bg-white text-[#0c1b33] text-[10px] tracking-[0.2em] font-extrabold uppercase px-6 py-2.5 rounded-full border-2 border-[#0c1b33] shadow-md">
          {musicData.highlightsBadge}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {musicData.highlights.map((item, idx) => {
            const Icon = IconMap[item.icon] || Music;
            return (
              <ScrollReveal key={item.title} delay={idx * 0.15}>
                <div className="flex flex-col items-center md:items-start group">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-white group-hover:text-[#0c1b33] transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white text-base tracking-wide font-extrabold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm">
                    {item.description}
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

// ---------------- FEATURE GRID SECTION COMPONENT ----------------
function FeatureGrid() {
  return (
    <section className="bg-zinc-50 py-20 lg:py-24 border-b border-zinc-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#0c1b33] tracking-tight mb-4">
              {musicData.featureHeader.title}
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              {musicData.featureHeader.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 4-column Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicData.features.map((feature, idx) => (
            <ScrollReveal key={feature.title} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <span className="text-[10px] tracking-widest text-[#0c1b33] font-extrabold mb-5 block">
                  SYSTEM {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-extrabold text-[#0c1b33] mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed flex-grow">
                  {feature.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- "WHAT WE DO" CTA SECTION COMPONENT ----------------
function WhatWeDoCTA({ title, description, imageSrc, ctaText, ctaLink }) {
  return (
    <section className="relative bg-[#0c1b33] py-20 lg:py-24 font-sans overflow-hidden">
      
      {/* Decorative absolute CSS circle background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Circular Cropped Image + Decorative CSS Circle Shapes */}
        <ScrollReveal>
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Spinning decorative orbit ring */}
            <div className="absolute w-[360px] h-[360px] border border-white/20 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '40s' }} />
            {/* Decorative colored backdrop circle offset */}
            <div className="absolute w-[340px] h-[340px] bg-white/5 rounded-full -translate-x-3 translate-y-3 pointer-events-none" />

            <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-white/25 shadow-2xl relative z-10">
              <img 
                src={imageSrc} 
                alt="Academy Studio Class" 
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Copywriting */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-5">
              {title}
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
              {description}
            </p>
            <Link 
              to={ctaLink} 
              className="bg-white text-[#0c1b33] text-xs tracking-widest font-black uppercase px-8 py-4 border border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl"
            >
              {ctaText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ---------------- FOOTER COMPONENT ----------------
function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 font-sans text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Left Logo Column */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded">
              <GraduationCap className="text-white" size={18} />
            </div>
            <span className="text-sm font-extrabold tracking-wider text-white leading-none">{musicData.brand.name}</span>
          </div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-500">
            {musicData.brand.tagline}
          </span>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mt-2">
            Conservatory pedagogy fused with digital tools. Empowering musicians since 2012.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Navigation</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-semibold">
            {musicData.navLinks.map(link => {
              const relPath = link.path === '/' ? '' : link.path.replace('/', '');
              return (
                <li key={link.label}>
                  <Link to={relPath} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Admissions Office</h4>
          <ul className="flex flex-col gap-3 text-xs leading-relaxed">
            <li className="flex items-start gap-2.5">
              <Phone size={13} className="mt-0.5 text-zinc-500" />
              <span>{musicData.contactPage.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={13} className="mt-0.5 text-zinc-500" />
              <span>{musicData.contactPage.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="mt-0.5 text-zinc-500" />
              <span>{musicData.contactPage.address}</span>
            </li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="text-xs font-black tracking-widest text-white uppercase mb-5">Hours</h4>
          <div className="flex items-start gap-2.5 text-xs">
            <Clock size={13} className="mt-0.5 text-zinc-500" />
            <div>
              <span className="block font-semibold">{musicData.contactPage.officeHours}</span>
              <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase block mt-1">Closed Weekends</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-zinc-600">
        <span>&copy; {new Date().getFullYear()} {musicData.brand.name} ACADEMY. All Rights Reserved.</span>
        <span>Built with React + Tailwind CSS</span>
      </div>
    </footer>
  );
}

// ---------------- PAGES ----------------

// 1. HOME PAGE
function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <HighlightBand />
      <FeatureGrid />
      <WhatWeDoCTA 
        title={musicData.ctaSection.title}
        description={musicData.ctaSection.description}
        imageSrc={musicData.ctaSection.imageSrc}
        ctaText={musicData.ctaSection.ctaText}
        ctaLink={musicData.ctaSection.ctaLink}
      />
    </PageWrapper>
  );
}

// 2. PROGRAMS PAGE
function ProgramsPage() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-2xl">
          <span className="text-[10px] tracking-[0.25em] text-[#0c1b33] font-extrabold uppercase mb-3 block leading-none">
            CURRICULUM DEPARTMENTS
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0c1b33] tracking-tight mb-4">
            {musicData.programsSection.title}
          </h1>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            {musicData.programsSection.subtitle}
          </p>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="bg-white py-16 lg:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicData.programsSection.programs.map((prog, idx) => {
              const Icon = IconMap[prog.icon] || Music;
              return (
                <ScrollReveal key={prog.title} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-xl border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                    <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center text-[#0c1b33] mb-6 border border-zinc-100 group-hover:bg-[#0c1b33] group-hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0c1b33] mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                      {prog.description}
                    </p>
                    <div className="border-t border-zinc-100 pt-4 mt-auto flex justify-between items-center text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
                      <span>{prog.duration}</span>
                      <span>{prog.level}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

// 3. ABOUT PAGE
function AboutPage() {
  const { aboutPage } = musicData;

  return (
    <PageWrapper>
      {/* Mission / Story */}
      <section className="bg-white py-16 lg:py-24 border-b border-zinc-100 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="max-w-xl">
              <span className="text-[10px] tracking-[0.25em] text-[#0c1b33] font-extrabold uppercase mb-3 block leading-none">
                OUR HISTORY
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0c1b33] tracking-tight mb-6">
                {aboutPage.missionTitle}
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                {aboutPage.missionText}
              </p>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                By fusing traditional ear training protocols with modern sequencing engines, our students gain both classical precision and composition fluency required for visual scoring or performance stages.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            {/* Visual stats grid */}
            <div className="grid grid-cols-2 gap-6 bg-zinc-50 p-8 rounded-xl border border-zinc-200/80">
              {aboutPage.stats.map(stat => (
                <div key={stat.label} className="p-6 bg-white rounded-lg border border-zinc-100 text-center">
                  <span className="text-2xl font-black text-[#0c1b33] block mb-1.5">{stat.value}</span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest block">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Directors Team Section */}
      <section className="bg-zinc-50 py-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-[#0c1b33] tracking-tight mb-4">
                {aboutPage.teamTitle}
              </h2>
              <p className="text-zinc-500 text-sm">
                {aboutPage.teamSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPage.team.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 0.15}>
                <div className="bg-white rounded-xl border border-zinc-200/80 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-100 mb-5">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0c1b33] mb-1">{member.name}</h3>
                  <span className="text-[10px] tracking-widest font-extrabold text-[#0c1b33]/60 uppercase mb-4 block leading-none">{member.role}</span>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

// 5. LIBRARY PAGE
function LibraryPage() {
  const { libraryPage } = musicData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  // Filter logic based on tab and input query
  const filteredResources = libraryPage.resources.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCat === 'All' || item.category === selectedCat;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-2xl">
          <span className="text-[10px] tracking-[0.25em] text-[#0c1b33] font-extrabold uppercase mb-3 block leading-none">
            RESEARCH & ARCHIVES
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0c1b33] tracking-tight mb-4">
            {libraryPage.title}
          </h1>
          <p className="text-zinc-500 text-sm">
            {libraryPage.subtitle}
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="bg-white py-12 font-sans border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          
          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text"
              placeholder="Search guides, tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#0c1b33] focus:bg-white pl-10 pr-4 py-2.5 rounded-lg text-xs outline-none font-semibold transition-all"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2.5">
            {libraryPage.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] tracking-wider uppercase font-bold transition-all border ${
                  selectedCat === cat 
                    ? 'bg-[#0c1b33] border-[#0c1b33] text-white' 
                    : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of files/articles */}
      <section className="bg-zinc-50/50 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.map((res, idx) => (
                <ScrollReveal key={res.title} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex justify-between items-center mb-5">
                        <span className="bg-[#0c1b33]/5 text-[#0c1b33] text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded">
                          {res.category}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-bold">{res.date}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-[#0c1b33] mb-3 group-hover:text-zinc-600 transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6">
                        {res.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
                      <span>{res.type}</span>
                      <a href="#" className="flex items-center gap-1 hover:text-[#0c1b33] transition-colors">
                        Access File <ArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-zinc-200">
              <span className="text-sm font-semibold text-zinc-400 block mb-2">No pedagogical resources match your query</span>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCat('All'); }} 
                className="text-xs text-[#0c1b33] font-bold underline hover:opacity-85"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}

// 5. CONTACT PAGE
function ContactPage() {
  const { contactPage } = musicData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <PageWrapper>
      {/* Contact header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-2xl">
          <span className="text-[10px] tracking-[0.25em] text-[#0c1b33] font-extrabold uppercase mb-3 block leading-none">
            AUDITIONS & INQUIRIES
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0c1b33] tracking-tight mb-4">
            {contactPage.title}
          </h1>
          <p className="text-zinc-500 text-sm">
            {contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Grid: Form vs Info */}
      <section className="bg-white py-16 lg:py-24 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Controlled form */}
          <ScrollReveal>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200/80">
              <h2 className="text-xl font-extrabold text-[#0c1b33] mb-6">Audition & Visit Booking</h2>
              
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-3 rounded-lg flex items-center gap-2 mb-6"
                >
                  <CheckCircle size={15} />
                  <span className="font-bold">Inquiry dispatched. Admissions team will contact you.</span>
                </motion.div>
              )}

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase mb-2">FULL NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Marcus Oswald"
                    className="bg-white border border-zinc-200 focus:border-[#0c1b33] rounded-lg px-4 py-2.5 text-xs font-semibold outline-none transition-all"
                  />
                  {errors.name && <span className="text-[10px] text-rose-500 font-bold mt-1.5">{errors.name}</span>}
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase mb-2">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="marcus@vocalise.com"
                    className="bg-white border border-zinc-200 focus:border-[#0c1b33] rounded-lg px-4 py-2.5 text-xs font-semibold outline-none transition-all"
                  />
                  {errors.email && <span className="text-[10px] text-rose-500 font-bold mt-1.5">{errors.email}</span>}
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase mb-2">CURRICULUM INQUIRY</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your skill level and musical goals..."
                    className="bg-white border border-zinc-200 focus:border-[#0c1b33] rounded-lg px-4 py-3 text-xs font-semibold outline-none transition-all resize-none"
                  />
                  {errors.message && <span className="text-[10px] text-rose-500 font-bold mt-1.5">{errors.message}</span>}
                </div>

                <button 
                  type="submit"
                  className="bg-[#0c1b33] hover:bg-[#0c1b33]/90 text-white text-xs tracking-widest font-black uppercase py-4 rounded-lg shadow-lg border border-[#0c1b33] transition-all"
                >
                  Send Dispatch
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: Contact details */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col justify-center h-full max-w-md">
              <h2 className="text-xl font-extrabold text-[#0c1b33] mb-8">Registry Headquarters</h2>
              
              <ul className="flex flex-col gap-8 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-[#0c1b33] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest font-bold text-zinc-400 uppercase block mb-1">Direct Line</span>
                    <span className="text-sm font-extrabold text-[#0c1b33]">{contactPage.phone}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-[#0c1b33] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest font-bold text-zinc-400 uppercase block mb-1">Office Email</span>
                    <span className="text-sm font-extrabold text-[#0c1b33]">{contactPage.email}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-[#0c1b33] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest font-bold text-zinc-400 uppercase block mb-1">Academy Address</span>
                    <span className="text-sm font-bold text-zinc-500 leading-relaxed">{contactPage.address}</span>
                  </div>
                </li>
              </ul>

              <div className="border-t border-zinc-100 pt-8 mt-8 flex gap-4">
                {contactPage.socials.map(soc => (
                  <a key={soc.name} href={soc.link} className="text-xs font-bold text-[#0c1b33] hover:underline uppercase tracking-wider">{soc.name}</a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}

// ---------------- MAIN ROUTER ----------------
export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 flex flex-col justify-between selection:bg-[#0c1b33] selection:text-white">
      
      {/* Navbar header */}
      <NavBar />

      {/* Pages switcher */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="index.html" element={<HomePage />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
