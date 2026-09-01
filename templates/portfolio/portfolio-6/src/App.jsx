import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  Layout, 
  Activity, 
  ShieldAlert, 
  Zap, 
  LineChart, 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  ArrowRight,
  BookOpen,
  Calendar,
  X,
  Maximize2
} from 'lucide-react';
import { agencyData } from './data/agencyData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop, { ScrollToTopButton } from './components/ScrollToTop';

// Helper for page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="w-full min-h-[70vh]"
    >
      {children}
    </motion.div>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mb-14 text-left max-w-2xl font-sans">
      <span className="text-[10px] tracking-[0.25em] text-[#3ecf6e] uppercase font-bold block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
        {title}
      </h2>
      {desc && <p className="mt-4 text-xs md:text-sm text-zinc-500 leading-relaxed">{desc}</p>}
    </div>
  );
}

// Reusable count-up counter component
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
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endVal]);

  return (
    <div className="flex flex-col">
      <span className="text-4xl md:text-6xl font-black text-[#3ecf6e] tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500 mt-2">
        {label}
      </span>
    </div>
  );
}

// Rotating 3D CSS shape component
function WireframeCube() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      <motion.div
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border border-[#3ecf6e] relative opacity-85"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 border border-[#3ecf6e]/30 bg-[#3ecf6e]/5" style={{ transform: 'translateZ(32px)' }} />
        <div className="absolute inset-0 border border-[#3ecf6e]/30 bg-[#3ecf6e]/5" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
        <div className="absolute inset-0 border border-[#3ecf6e]/30 bg-[#3ecf6e]/5" style={{ transform: 'rotateY(180deg) translateZ(32px)' }} />
        <div className="absolute inset-0 border border-[#3ecf6e]/30 bg-[#3ecf6e]/5" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
      </motion.div>
    </div>
  );
}

const ICON_MAP = {
  ShieldAlert: ShieldAlert,
  Zap: Zap,
  LineChart: LineChart,
  Cpu: Cpu,
  Terminal: Terminal,
  Layout: Layout,
  Activity: Activity
};

// ---------------- PAGES ----------------

// 1. HOME PAGE
function HomePage() {
  return (
    <PageWrapper>
      {/* Hero with radial glow background */}
      <section className="green-radial-glow relative min-h-[90vh] flex items-center px-6 md:px-12 py-16 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[10px] tracking-[0.25em] text-[#3ecf6e] uppercase font-bold mb-4 block">
              • ENTERPRISE SOFTWARE NODE
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] uppercase">
              {agencyData.hero.title}
            </h1>
            <p className="mt-6 text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed font-sans">
              {agencyData.hero.paragraph}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 font-sans">
              <Link 
                to="/contact"
                className="px-6 py-3.5 bg-[#3ecf6e] hover:bg-[#34b65f] text-black font-extrabold text-xs tracking-wider uppercase transition-colors"
              >
                {agencyData.hero.primaryCTA}
              </Link>
              <Link 
                to="/services"
                className="text-xs tracking-wider uppercase font-bold text-white hover:text-[#3ecf6e] transition-colors flex items-center gap-1 border-b border-white/20 hover:border-[#3ecf6e] pb-0.5"
              >
                {agencyData.hero.secondaryCTA} <ArrowRight size={13} />
              </Link>
            </div>

            {/* Trust Row */}
            <div className="mt-12 flex items-center gap-4 border-t border-zinc-900 pt-8 w-full font-sans">
              <div className="flex -space-x-3">
                {agencyData.hero.avatars.map((av, idx) => (
                  <img 
                    key={idx}
                    src={av} 
                    alt="Trust avatar" 
                    className="w-8 h-8 rounded-full object-cover border border-black"
                  />
                ))}
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-zinc-500 uppercase block font-bold">
                  {agencyData.hero.trustedText}
                </span>
                <span className="text-xs text-white font-black block mt-0.5">
                  ★ {agencyData.hero.starScore}
                </span>
              </div>
            </div>
          </div>

          {/* Asymmetric floating info cards grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="flex flex-col gap-4">
              {/* Card 1: Metric */}
              <div className="bg-[#101010]/80 border border-zinc-900/60 p-6 flex flex-col justify-between h-40">
                <span className="text-3xl font-serif text-white font-black">99.9%</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-normal">System Uptime SLA</span>
              </div>
              {/* Card 2: 3D animated shape */}
              <div className="bg-[#101010]/80 border border-zinc-900/60 p-6 flex items-center justify-center h-44 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-[8px] font-bold text-zinc-600 uppercase tracking-widest">3D Shape Module</div>
                <WireframeCube />
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              {/* Card 3: Team Photo Card */}
              <div className="bg-[#101010]/80 border border-zinc-900/60 p-4 flex flex-col justify-between h-44">
                <img 
                  src={agencyData.about.team[1].photo} 
                  alt="Team lead" 
                  className="w-10 h-10 rounded-full object-cover filter grayscale"
                />
                <div>
                  <span className="text-white text-xs block font-bold font-sans">Evelyn Oswald</span>
                  <span className="text-[9px] text-[#3ecf6e] uppercase font-bold block mt-0.5 tracking-wider font-sans">DevOps Engineer Node</span>
                </div>
              </div>
              {/* Card 4: Secondary Stat */}
              <div className="bg-[#101010]/80 border border-zinc-900/60 p-6 flex flex-col justify-between h-36">
                <span className="text-3xl text-[#3ecf6e] font-black">8.2M</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-normal">API Calls Processed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client partner logo strip */}
      <section className="py-12 bg-zinc-950/60 border-b border-zinc-900/60 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-8">
          {agencyData.partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2 filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-pointer">
              <img src={partner.logo} alt={partner.name} className="w-8 h-8 rounded object-cover" />
              <span className="text-xs tracking-wider uppercase font-bold text-zinc-400 font-sans">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-900/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {agencyData.stats.counters.map((cnt, idx) => (
            <CounterItem 
              key={idx} 
              endVal={cnt.value} 
              suffix={cnt.suffix} 
              label={cnt.label} 
            />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="PRODUCT SHIELD" 
          title={agencyData.features.heading} 
          desc={agencyData.features.paragraph} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Highlight feature card */}
          <div className="lg:col-span-5 bg-[#101010]/80 border border-[#3ecf6e]/20 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#3ecf6e]/5 rounded-full filter blur-xl" />
            
            <div>
              <div className="w-10 h-10 bg-[#3ecf6e]/10 border border-[#3ecf6e]/20 text-[#3ecf6e] flex items-center justify-center mb-6">
                <Cpu size={18} />
              </div>
              <h3 className="text-2xl text-white font-black uppercase mb-4">{agencyData.features.highlightCard.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans text-justify">{agencyData.features.highlightCard.desc}</p>
            </div>

            <div className="mt-8 font-sans">
              <Link 
                to="/services" 
                className="text-xs tracking-wider uppercase font-extrabold text-[#3ecf6e] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Inspect Infrastructure <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Regular feature cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {agencyData.features.list.map((feat, idx) => {
              const IconComponent = ICON_MAP[feat.icon] || Zap;
              return (
                <div key={idx} className="bg-[#101010]/50 border border-zinc-900 p-8 hover:border-zinc-800 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 text-[#3ecf6e] flex items-center justify-center mb-6">
                      <IconComponent size={16} />
                    </div>
                    <h3 className="text-lg text-white font-bold uppercase mb-3">{feat.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-sans text-justify">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}

// 2. SERVICES PAGE
function ServicesPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="OUR ENGINE" 
          title="Professional Services" 
          desc="We configure front-end, DevOps, and cloud systems to sustain business operations." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agencyData.services.map((srv, idx) => {
            const IconComponent = ICON_MAP[srv.icon] || Cpu;
            return (
              <div key={idx} className="bg-[#101010]/60 border border-zinc-900 p-10 hover:border-zinc-800 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#3ecf6e]/10 border border-[#3ecf6e]/25 text-[#3ecf6e] flex items-center justify-center mb-8">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-2xl text-white font-black uppercase mb-4">{srv.title}</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed text-justify">{srv.desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900/60 font-sans">
                  <Link 
                    to="/contact"
                    className="text-xs tracking-wider uppercase font-bold text-[#3ecf6e] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    Build System Node <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}

// 3. ABOUT PAGE
function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="OUR STORY" title="About Synthetix" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Corporate narrative story timeline */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 text-left">
            <h3 className="text-2xl text-white uppercase font-black tracking-tight leading-snug">
              Constructing Scale Platforms Since 2026.
            </h3>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed text-justify">
              {agencyData.about.story}
            </p>

            <div className="relative border-l border-zinc-900 pl-6 ml-2 flex flex-col gap-8 mt-4 font-sans">
              {agencyData.about.timeline.map((time, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-[#3ecf6e]" />
                  <span className="text-[10px] font-bold text-[#3ecf6e] block tracking-widest uppercase">{time.year}</span>
                  <p className="text-xs text-white font-medium mt-1 font-sans">{time.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <h3 className="text-xl text-white uppercase font-black border-b border-zinc-900 pb-3 mb-8">
              Executive Engineers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              {agencyData.about.team.map((member, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-900 p-4 flex flex-col gap-4">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover filter grayscale border border-zinc-800"
                  />
                  <div className="text-left font-sans">
                    <h4 className="text-xs text-white font-bold uppercase">{member.name}</h4>
                    <span className="text-[9px] text-[#3ecf6e] uppercase tracking-wide font-medium mt-0.5 block">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}

// 4. NEWS PAGE
function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <PageWrapper>
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="READING MODULE" title="News & Articles" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agencyData.news.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer bg-[#101010]/50 border border-zinc-900 hover:border-zinc-800 p-4 transition-all flex flex-col gap-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#3ecf6e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#3ecf6e] text-black px-3.5 py-1.5 text-[9px] font-sans tracking-widest uppercase font-extrabold shadow-md flex items-center gap-1">
                    <Maximize2 size={11} /> Read Article
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 px-1 font-sans">
                <div className="flex items-center gap-3.5 text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-1"><Calendar size={11} /> {art.date}</span>
                  <span>• {art.readTime}</span>
                </div>
                <h4 className="text-lg text-white font-bold group-hover:text-[#3ecf6e] transition-colors leading-tight mt-2 uppercase">
                  {art.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2 text-justify line-clamp-3">
                  {art.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Lightbox modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0" onClick={() => setSelectedArticle(null)} />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative bg-[#101010] border border-zinc-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10 flex flex-col text-zinc-300 font-sans"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-[#3ecf6e] hover:bg-[#34b65f] text-black transition-colors z-20"
              >
                <X size={15} />
              </button>

              <div className="h-[240px] md:h-[300px] relative overflow-hidden bg-zinc-900">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3.5 text-[9px] text-[#3ecf6e] uppercase tracking-widest font-bold mb-4">
                  <span className="flex items-center gap-1"><Calendar size={11} /> {selectedArticle.date}</span>
                  <span>• {selectedArticle.readTime}</span>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight uppercase mb-6">{selectedArticle.title}</h3>
                <p className="text-sm text-zinc-400 font-sans leading-relaxed text-justify mb-4">{selectedArticle.excerpt}</p>
                <div className="w-12 h-1 bg-[#3ecf6e] my-6" />
                <p className="text-xs text-zinc-500 font-sans leading-relaxed text-justify">{selectedArticle.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

// 5. CONTACT PAGE
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
            <SectionHeading eyebrow="PARTNER LINK" title="Start your project node" />
            <p className="text-xs md:text-sm text-zinc-500 font-sans leading-relaxed mb-8 max-w-md text-justify">
              Contact our engineering team to design custom cloud infrastructures, front-end software views, or automated deployment scripts.
            </p>

            <div className="flex flex-col gap-6 font-sans">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#3ecf6e]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black">EMAIL INBOX</div>
                  <a href={`mailto:${agencyData.brand.email}`} className="text-xs text-white hover:text-[#3ecf6e] font-bold transition-colors">
                    {agencyData.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#3ecf6e]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black">OFFICE NODE</div>
                  <span className="text-xs text-white/80 font-bold">
                    {agencyData.brand.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="col-span-12 lg:col-span-7 bg-zinc-950/80 border border-zinc-900 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#3ecf6e]" />
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 font-sans">
            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-600 uppercase font-black mb-2">FULL NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-[#0a0a0a] border border-zinc-900 focus:border-[#3ecf6e] px-4 py-3 text-sm text-white placeholder-zinc-800 outline-none transition-colors"
              />
              {formErrors.name && <span className="text-[10px] text-rose-400 mt-1.5 font-bold">{formErrors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-600 uppercase font-black mb-2">BUSINESS EMAIL</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="growth@enterprise.com"
                className="w-full bg-[#0a0a0a] border border-zinc-900 focus:border-[#3ecf6e] px-4 py-3 text-sm text-white placeholder-zinc-800 outline-none transition-colors"
              />
              {formErrors.email && <span className="text-[10px] text-rose-400 mt-1.5 font-bold">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] tracking-widest text-zinc-600 uppercase font-black mb-2">SYSTEM PARAMETERS</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your serverless or dashboard specifications"
                rows={4}
                className="w-full bg-[#0a0a0a] border border-zinc-900 focus:border-[#3ecf6e] px-4 py-3 text-sm text-white placeholder-zinc-800 outline-none transition-colors resize-none"
              />
              {formErrors.message && <span className="text-[10px] text-rose-400 mt-1.5 font-bold">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full py-4 bg-[#3ecf6e] disabled:bg-zinc-800 text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#34b65f] transition-all"
            >
              {formStatus === 'loading' ? (
                <span>Registering Node...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} /> Connection Established!</span>
              ) : (
                <>
                  Establish Node <Send size={13} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}

// ---------------- MAIN CONTAINER ----------------

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 flex flex-col justify-between selection:bg-[#3ecf6e] selection:text-black">
      
      {/* Reset Scroll position on route changes */}
      <ScrollToTop />

      {/* NAVBAR */}
      <NavBar />

      {/* ROUTE DEFINITIONS */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="index.html" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Scroll to Top floating action */}
      <ScrollToTopButton />
    </div>
  );
}
