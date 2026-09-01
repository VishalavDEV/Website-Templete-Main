import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowUp, 
  ArrowRight,
  Maximize2,
  X,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Send
} from 'lucide-react';
import { photographyData, galleryFilters, galleryFilterMapping } from './data/photographyData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Scroll reset logic
function ScrollToTopInside() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll to Top floating action
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#d4af37] hover:bg-[#b8952c] text-black flex items-center justify-center shadow-lg transition-colors border border-white/5 cursor-pointer focus:outline-none"
    >
      <ArrowUp size={16} />
    </button>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mb-14 text-left font-sans">
      <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-3 font-sans">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif-heading font-black text-black tracking-tight leading-tight uppercase font-sans">
        {title}
      </h2>
      {desc && <p className="mt-4 text-xs md:text-sm text-zinc-500 leading-relaxed font-sans">{desc}</p>}
    </div>
  );
}

// Animated count-up counter component
function CounterItem({ endVal, label, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(endVal);
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endVal]);

  return (
    <div className="flex flex-col font-sans">
      <span className="text-4xl md:text-6xl font-serif-heading font-black text-black tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-[9px] font-bold tracking-wider uppercase text-zinc-400 mt-2">
        {label}
      </span>
    </div>
  );
}

// Helper for page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="w-full min-h-[75vh]"
    >
      {children}
    </motion.div>
  );
}

// ---------------- SUBPAGES ----------------

// 1. HOME PAGE
function HomePage() {
  const handleScrollDown = () => {
    const el = document.getElementById('home-about-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      {/* Full bleed black hero */}
      <section className="relative h-[90vh] bg-black flex items-center justify-center px-6 text-center overflow-hidden">
        {/* BG Image with low opacity overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale contrast-110"
          style={{ backgroundImage: `url(${photographyData.hero.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

        <div className="relative z-10 font-sans max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-serif-heading font-black text-white uppercase tracking-tight leading-none">
            {photographyData.hero.title}
          </h1>
          <p className="mt-6 text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-zinc-400 font-bold">
            {photographyData.hero.subheading}
          </p>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={handleScrollDown}
          className="absolute bottom-10 z-10 bounce-slow text-white hover:text-[#d4af37] transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
        >
          <ChevronDown size={30} />
        </button>
      </section>

      {/* Light background About Preview Section with ghost text */}
      <section id="home-about-preview" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        
        {/* Ghost text watermark layered behind */}
        <div className="absolute -left-12 top-10 select-none pointer-events-none z-0">
          <span className="ghost-watermark-text">ABOUT ME</span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8 text-left font-sans">
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-3">
              THE VISION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-heading font-black text-black tracking-tight uppercase mb-6 font-sans">
              {photographyData.about.heading}
            </h2>
            <p className="text-xs md:text-sm text-zinc-500 max-w-xl leading-relaxed text-justify mb-8 font-sans">
              {photographyData.about.intro}
            </p>
            <Link 
              to="/about"
              className="text-xs tracking-widest uppercase font-bold text-black hover:text-[#d4af37] transition-colors flex items-center gap-1.5 font-sans"
            >
              View More About Sasha <ArrowRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="w-full aspect-[4/5] max-w-[300px] overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
              <img 
                src={photographyData.about.photo} 
                alt="Sasha working" 
                className="w-full h-full object-cover filter grayscale contrast-105"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

// 2. ABOUT PAGE
function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="THE CREATIVE" title="About Sasha" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7 text-left font-sans flex flex-col gap-6 text-sm text-zinc-500 leading-relaxed text-justify">
            <p className="text-black text-base font-medium leading-relaxed font-sans">
              {photographyData.about.intro}
            </p>
            <p>
              {photographyData.about.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-zinc-100 pt-8 mt-6">
              {photographyData.about.stats.map((st, idx) => (
                <CounterItem 
                  key={idx}
                  endVal={st.value}
                  suffix={st.suffix}
                  label={st.label}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-[380px] aspect-[3/4] overflow-hidden border border-zinc-200 shadow-2xl">
              <img 
                src={photographyData.about.photo} 
                alt="Sasha Grey Profile" 
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}

// 3. RESUME PAGE
function ResumePage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="TIMELINES" title="Resume & Skills" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          
          {/* Experience */}
          <div className="col-span-12 lg:col-span-5 text-left flex flex-col gap-8 font-sans">
            <h3 className="text-xl font-serif-heading font-black uppercase tracking-tight border-b border-zinc-200 pb-3 flex items-center gap-2">
              <Briefcase size={16} /> Work History
            </h3>
            <div className="flex flex-col gap-8">
              {photographyData.resume.work.map((wk, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="text-sm font-bold text-black uppercase">{wk.role}</h4>
                    <span className="text-[10px] font-sans font-medium text-zinc-400">{wk.dates}</span>
                  </div>
                  <span className="text-[10px] font-sans text-zinc-400 font-bold uppercase mt-0.5 tracking-wider">{wk.company}</span>
                  <p className="text-xs text-zinc-500 font-sans mt-2.5 text-justify leading-relaxed">{wk.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-span-12 lg:col-span-5 text-left flex flex-col gap-8 font-sans">
            <h3 className="text-xl font-serif-heading font-black uppercase tracking-tight border-b border-zinc-200 pb-3 flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h3>
            <div className="flex flex-col gap-8">
              {photographyData.resume.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="text-sm font-bold text-black uppercase">{edu.degree}</h4>
                    <span className="text-[10px] font-sans font-medium text-zinc-400">{edu.dates}</span>
                  </div>
                  <span className="text-[10px] font-sans text-zinc-400 font-bold uppercase mt-0.5 tracking-wider">{edu.institution}</span>
                  <p className="text-xs text-zinc-500 font-sans mt-2.5 text-justify leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Circular Photo */}
          <div className="col-span-12 lg:col-span-2 flex justify-center lg:justify-end">
            <img 
              src={photographyData.resume.circularPhoto} 
              alt="Sasha Grey Thumbnail" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover filter grayscale border-2 border-zinc-200 shadow-lg"
            />
          </div>

        </div>

        {/* Skill Progress Bars */}
        <div className="border-t border-zinc-100 pt-16 font-sans">
          <SectionHeading eyebrow="PROFICIENCY" title="Equipment & Software" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl text-left">
            {photographyData.resume.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col font-sans">
                <div className="flex justify-between text-xs font-bold text-black mb-2 uppercase tracking-wide">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-1 bg-zinc-100 rounded-none overflow-hidden">
                  <div 
                    className="h-full bg-black"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </PageWrapper>
  );
}

// 4. SERVICES PAGE
function ServicesPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="OFFERINGS" 
          title={photographyData.services.heading} 
          desc={photographyData.services.accent} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photographyData.services.packages.map((srv, idx) => (
            <div key={idx} className="border border-zinc-200 hover:border-black transition-colors bg-white p-6 flex flex-col gap-6 text-left">
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={srv.image} 
                  alt={srv.name} 
                  className="w-full h-full object-cover filter grayscale contrast-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif-heading font-black uppercase text-black mb-3">{srv.name}</h3>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed text-justify">{srv.desc}</p>
              </div>
              <div className="mt-4 border-t border-zinc-100 pt-4">
                <Link 
                  to="/contact"
                  className="text-[10px] tracking-widest uppercase font-black text-black hover:text-[#d4af37] transition-colors flex items-center gap-1 font-sans"
                >
                  Book Session <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// 5. PORTFOLIO PAGE
function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedFilter === 'All'
    ? photographyData.portfolio
    : photographyData.portfolio.filter(item => item.tag === galleryFilterMapping[selectedFilter]);

  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="GALLERY" title="Selected Portfolios" />

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-zinc-100 font-sans">
          {galleryFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-[10px] font-sans tracking-widest uppercase font-black transition-all cursor-pointer border-none ${
                selectedFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-transparent text-zinc-500 hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-white border border-zinc-100 p-3 hover:border-zinc-200 transition-all flex flex-col gap-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 contrast-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-black px-3.5 py-2 text-[9px] font-sans tracking-widest uppercase flex items-center gap-1 font-bold shadow-md">
                    <Maximize2 size={11} /> View Plate
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-baseline px-1 font-sans text-left">
                <div>
                  <h4 className="text-sm text-black font-bold group-hover:text-[#d4af37] transition-colors uppercase leading-none">{img.title}</h4>
                  <span className="text-[9px] font-sans tracking-widest text-[#d4af37] uppercase font-bold mt-1.5 block">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox viewer modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col bg-zinc-950 border border-zinc-900"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 p-2 bg-[#d4af37] hover:bg-[#b8952c] text-black transition-colors z-20 cursor-pointer border-none"
              >
                <X size={15} />
              </button>

              <div className="overflow-hidden bg-black flex items-center justify-center max-h-[70vh]">
                <img 
                  src={filteredImages[lightboxIndex].image} 
                  alt={filteredImages[lightboxIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain filter grayscale contrast-105"
                />
              </div>

              <div className="p-6 bg-black text-left text-zinc-400 font-sans border-t border-zinc-900 flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-white font-bold uppercase">{filteredImages[lightboxIndex].title}</h4>
                  <span className="text-[9px] text-[#d4af37] uppercase font-bold tracking-wider block mt-0.5">{filteredImages[lightboxIndex].category}</span>
                </div>
                <span className="text-xs text-zinc-600 font-bold uppercase">PLATE {lightboxIndex + 1} OF {filteredImages.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

// 6. PRICING PAGE (Dropdown child)
function PricingPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="FINANCIALS" title="Pricing Structure" />

        <div className="max-w-3xl mx-auto flex flex-col gap-6 font-sans">
          {photographyData.pricing.map((pr, idx) => (
            <div key={idx} className="border border-zinc-200 bg-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
              <div>
                <h4 className="text-lg font-serif-heading font-black uppercase text-black">{pr.tier}</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1.5">{pr.scope}</p>
              </div>
              <span className="text-2xl md:text-3xl font-serif-heading font-black text-[#d4af37]">{pr.price}</span>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// 7. TESTIMONIALS PAGE (Dropdown child)
function TestimonialsPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="ENDORSEMENTS" title="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-sans">
          {photographyData.testimonials.map((test, idx) => (
            <div key={idx} className="border border-zinc-200 bg-white p-8 md:p-10 flex flex-col justify-between h-64 relative">
              <span className="absolute top-4 left-4 text-6xl text-zinc-100 font-serif-normal font-black select-none pointer-events-none">“</span>
              <p className="text-sm font-serif-italic text-zinc-600 leading-relaxed text-justify relative z-10">
                {test.quote}
              </p>
              <div className="border-t border-zinc-100 pt-4 mt-6">
                <span className="text-[10px] font-sans tracking-widest uppercase font-black text-black">
                  — {test.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// 8. CONTACT PAGE
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Info detail block */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
          <div>
            <SectionHeading eyebrow="STUDIO LINK" title="Start a Campaign" />
            <p className="text-xs md:text-sm text-zinc-500 font-sans leading-relaxed mb-8 max-w-md text-justify font-sans">
              Contact our studio to coordinate portrait profiles, fashion lookbooks, or editorial catalogs.
            </p>

            <div className="flex flex-col gap-6 font-sans">
              <div className="flex items-center gap-4 font-sans">
                <div className="w-9 h-9 bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[#d4af37]">
                  <Mail size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">EMAIL STUDIO</div>
                  <a href={`mailto:${photographyData.brand.email}`} className="text-xs text-black hover:text-[#d4af37] font-bold transition-colors">
                    {photographyData.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 font-sans">
                <div className="w-9 h-9 bg-zinc-955 border border-zinc-900 flex items-center justify-center text-[#d4af37]">
                  <MapPin size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">STUDIO LOCAL</div>
                  <span className="text-xs text-zinc-700 font-bold">
                    {photographyData.brand.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="col-span-12 lg:col-span-7 bg-white border border-zinc-200 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4af37]" />
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 font-sans text-left">
            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-400 uppercase font-bold mb-2">FULL NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors"
              />
              {formErrors.name && <span className="text-[10px] text-rose-500 mt-1.5 font-bold">{formErrors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-400 uppercase font-bold mb-2">EMAIL ADDRESS</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="studio@enterprise.com"
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors"
              />
              {formErrors.email && <span className="text-[10px] text-rose-500 mt-1.5 font-bold">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-400 uppercase font-bold mb-2">PROJECT PARAMETERS</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="State your shoot goals or lookup timeline limits"
                rows={4}
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors resize-none"
              />
              {formErrors.message && <span className="text-[10px] text-rose-500 mt-1.5 font-bold">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full py-4 bg-black disabled:bg-zinc-200 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all font-sans cursor-pointer border-none"
            >
              {formStatus === 'loading' ? (
                <span>Registering Request...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} /> Message Dispatched!</span>
              ) : (
                <>
                  Send Request <Send size={13} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}

// ---------------- MAIN ROUTER ----------------

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#0d0d0d] flex flex-col justify-between selection:bg-[#d4af37] selection:text-black">
      
      {/* Scroll to Top on route changes */}
      <ScrollToTopInside />

      {/* NAVBAR */}
      <NavBar />

      {/* ROUTING PATHS */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="index.html" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating circular scroll up button */}
      <ScrollToTopButton />
    </div>
  );
}
