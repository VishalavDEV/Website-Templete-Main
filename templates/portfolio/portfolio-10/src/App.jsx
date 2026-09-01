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
import { creativeData, creativeFilters, creativeFilterMapping } from './data/creativeData';
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
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white flex items-center justify-center shadow-lg transition-colors border border-white/5 cursor-pointer focus:outline-none"
    >
      <ArrowUp size={16} />
    </button>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mb-14 text-left font-sans">
      <span className="text-[10px] tracking-[0.25em] text-[#ec4899] uppercase font-bold block mb-3 font-sans">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif-heading font-black text-zinc-900 tracking-tight leading-tight uppercase font-sans">
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
      <span className="text-4xl md:text-6xl font-serif-heading font-black text-zinc-900 tracking-tight">
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
      <section className="relative h-[90vh] bg-zinc-900 flex items-center justify-center px-6 text-center overflow-hidden">
        {/* BG Image with low opacity overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 filter contrast-105"
          style={{ backgroundImage: `url(${creativeData.hero.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        <div className="relative z-10 font-sans max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif-heading font-black text-white uppercase tracking-tight leading-none">
            {creativeData.hero.greeting}
          </h1>
          <p className="mt-6 text-xs md:text-sm font-sans tracking-[0.25em] uppercase text-zinc-300 font-bold">
            {creativeData.hero.tagline}
          </p>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={handleScrollDown}
          className="absolute bottom-10 z-10 bounce-slow text-white hover:text-[#ec4899] transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
        >
          <ChevronDown size={30} />
        </button>
      </section>

      {/* About Preview Section */}
      <section id="home-about-preview" className="py-32 px-6 md:px-12 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 text-left font-sans">
            <span className="text-[10px] tracking-[0.25em] text-[#ec4899] uppercase font-bold block mb-3">
              THE VISION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-heading font-black text-zinc-900 tracking-tight uppercase mb-6 font-sans">
              {creativeData.about.heading}
            </h2>
            <p className="text-xs md:text-sm text-zinc-500 max-w-xl leading-relaxed text-justify mb-8 font-sans">
              {creativeData.about.intro}
            </p>
            <Link 
              to="/about"
              className="text-xs tracking-widest uppercase font-bold text-zinc-900 hover:text-[#ec4899] transition-colors flex items-center gap-1.5 font-sans"
            >
              Learn More About Sasha <ArrowRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="w-full aspect-[4/5] max-w-[300px] overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
              <img 
                src={creativeData.about.photo} 
                alt="Sasha profile portrait" 
                className="w-full h-full object-cover filter contrast-105"
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
            <p className="text-zinc-900 text-base font-medium leading-relaxed font-sans">
              {creativeData.about.intro}
            </p>
            <p>
              {creativeData.about.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-zinc-100 pt-8 mt-6">
              {creativeData.about.stats.map((st, idx) => (
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
                src={creativeData.about.photo} 
                alt="Sasha Grey Profile" 
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}

// 3. SERVICES PAGE
function ServicesPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="OFFERINGS" 
          title={creativeData.services.heading} 
          desc={creativeData.services.accent} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {creativeData.services.packages.map((srv, idx) => (
            <div key={idx} className="border border-zinc-200 hover:border-zinc-900 transition-colors bg-white p-6 flex flex-col gap-6 text-left">
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={srv.image} 
                  alt={srv.name} 
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif-heading font-black uppercase text-zinc-900 mb-3">{srv.name}</h3>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed text-justify">{srv.desc}</p>
              </div>
              <div className="mt-4 border-t border-zinc-100 pt-4">
                <Link 
                  to="/contact"
                  className="text-[10px] tracking-widest uppercase font-black text-zinc-900 hover:text-[#ec4899] transition-colors flex items-center gap-1 font-sans"
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

// 4. PORTFOLIO PAGE
function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedFilter === 'All'
    ? creativeData.portfolio
    : creativeData.portfolio.filter(item => item.tag === creativeFilterMapping[selectedFilter]);

  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="GALLERY" title="Selected Portfolios" />

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-zinc-100 font-sans">
          {creativeFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-[10px] font-sans tracking-widest uppercase font-black transition-all cursor-pointer border-none ${
                selectedFilter === filter
                  ? 'bg-zinc-900 text-white'
                  : 'bg-transparent text-zinc-500 hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
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
                  <h4 className="text-sm text-zinc-900 font-bold group-hover:text-[#ec4899] transition-colors uppercase leading-none font-sans">{img.title}</h4>
                  <span className="text-[9px] font-sans tracking-widest text-[#ec4899] uppercase font-bold mt-1.5 block font-sans">{img.category}</span>
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
                className="absolute top-4 right-4 p-2 bg-[#ec4899] hover:bg-[#db2777] text-white transition-colors z-20 cursor-pointer border-none"
              >
                <X size={15} />
              </button>

              <div className="overflow-hidden bg-black flex items-center justify-center max-h-[70vh]">
                <img 
                  src={filteredImages[lightboxIndex].image} 
                  alt={filteredImages[lightboxIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain filter contrast-105"
                />
              </div>

              <div className="p-6 bg-black text-left text-zinc-400 font-sans border-t border-zinc-900 flex justify-between items-center">
                <div>
                  <h4 className="text-sm text-white font-bold uppercase">{filteredImages[lightboxIndex].title}</h4>
                  <span className="text-[9px] text-[#ec4899] uppercase font-bold tracking-wider block mt-0.5">{filteredImages[lightboxIndex].category}</span>
                </div>
                <span className="text-xs text-zinc-600 font-bold uppercase font-sans">PLATE {lightboxIndex + 1} OF {filteredImages.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

// 5. TEAM PAGE
function TeamPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto font-sans">
        <SectionHeading eyebrow="PARTNERS" title="Our Design Team" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto font-sans">
          {creativeData.team.map((member, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 p-6 flex flex-col gap-6 text-left">
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale contrast-105"
                />
              </div>
              <div className="font-sans">
                <h4 className="text-lg font-serif-heading font-black text-zinc-900 uppercase font-sans">{member.name}</h4>
                <span className="text-xs text-[#ec4899] font-bold uppercase tracking-wider block mt-1 font-sans">{member.role}</span>
              </div>

              {/* Member Socials */}
              <div className="flex gap-4 border-t border-zinc-100 pt-4">
                {member.socials.map((soc, sIdx) => (
                  <a
                    key={sIdx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs"
                  >
                    <i className={soc.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
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
          {creativeData.pricing.map((pr, idx) => (
            <div key={idx} className="border border-zinc-200 bg-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
              <div>
                <h4 className="text-lg font-serif-heading font-black uppercase text-zinc-900">{pr.tier}</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1.5">{pr.scope}</p>
              </div>
              <span className="text-2xl md:text-3xl font-serif-heading font-black text-[#ec4899]">{pr.price}</span>
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
          {creativeData.testimonials.map((test, idx) => (
            <div key={idx} className="border border-zinc-200 bg-white p-8 md:p-10 flex flex-col justify-between h-64 relative">
              <span className="absolute top-4 left-4 text-6xl text-zinc-100 font-serif-normal font-black select-none pointer-events-none">“</span>
              <p className="text-sm font-serif-italic text-zinc-650 leading-relaxed text-justify relative z-10 font-sans">
                {test.quote}
              </p>
              <div className="border-t border-zinc-100 pt-4 mt-6">
                <span className="text-[10px] font-sans tracking-widest uppercase font-black text-zinc-900">
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
            <SectionHeading eyebrow="STUDIO LINK" title="Start a Project" />
            <p className="text-xs md:text-sm text-zinc-500 font-sans leading-relaxed mb-8 max-w-md text-justify font-sans">
              Contact our design studio to coordinate branding systems, fashion campaigns, or corporate portals.
            </p>

            <div className="flex flex-col gap-6 font-sans">
              <div className="flex items-center gap-4 font-sans">
                <div className="w-9 h-9 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#ec4899]">
                  <Mail size={16} />
                </div>
                <div className="text-left font-sans">
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">EMAIL INBOX</div>
                  <a href={`mailto:${creativeData.brand.email}`} className="text-xs text-zinc-900 hover:text-[#ec4899] font-bold transition-colors">
                    {creativeData.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 font-sans">
                <div className="w-9 h-9 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#ec4899]">
                  <MapPin size={16} />
                </div>
                <div className="text-left font-sans font-sans">
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">STUDIO LOCAL</div>
                  <span className="text-xs text-zinc-700 font-bold font-sans">
                    {creativeData.brand.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="col-span-12 lg:col-span-7 bg-white border border-zinc-200 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ec4899]" />
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 font-sans text-left">
            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-400 uppercase font-bold mb-2">FULL NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-zinc-900 px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors"
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
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-zinc-900 px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors"
              />
              {formErrors.email && <span className="text-[10px] text-rose-500 mt-1.5 font-bold">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-400 uppercase font-bold mb-2">PROJECT PARAMETERS</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="State your campaign design parameters"
                rows={4}
                className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-zinc-900 px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition-colors resize-none font-sans"
              />
              {formErrors.message && <span className="text-[10px] text-rose-500 mt-1.5 font-bold">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full py-4 bg-zinc-900 disabled:bg-zinc-200 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all font-sans cursor-pointer border-none font-sans"
            >
              {formStatus === 'loading' ? (
                <span>Registering Campaign...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1.5 font-sans"><CheckCircle2 size={13} /> Message Dispatched!</span>
              ) : (
                <>
                  Send Message <Send size={13} />
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
    <div className="min-h-screen bg-white text-zinc-800 flex flex-col justify-between selection:bg-[#ec4899] selection:text-white">
      
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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/team" element={<TeamPage />} />
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
