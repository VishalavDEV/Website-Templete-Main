import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Code, 
  Cpu, 
  Send, 
  Briefcase, 
  Calendar,
  CheckCircle,
  Eye,
  MapPin,
  Mail,
  ArrowRight,
  Maximize2,
  X
} from 'lucide-react';
import { portfolioData, projectFilters, filterMapping } from './data/portfolioData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop, { ScrollToTopButton } from './components/ScrollToTop';

// Helper for page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full min-h-[75vh]"
    >
      {children}
    </motion.div>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-16 text-left">
      <span className="text-[10px] font-sans tracking-[0.25em] text-[#e8583f] uppercase font-black block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-[#e8583f] mt-4" />
    </div>
  );
}

const ICON_MAP = {
  Layers: Layers,
  Code: Code,
  Cpu: Cpu
};

// ---------------- PAGES ----------------

// 1. HOME PAGE
function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center p-6 md:p-12 border-b border-zinc-900">
        {/* Dimmed Portrait Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={portfolioData.hero.backgroundPortrait} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-15 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-16">
          <span className="text-xs font-sans tracking-[0.3em] text-[#e8583f] uppercase font-black mb-4 block">
            • MULTIPAGE ROUTED SYSTEM
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-none max-w-4xl">
            {portfolioData.hero.tagline}
          </h1>
          <p className="mt-6 text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed font-sans">
            {portfolioData.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link 
              to="/portfolio"
              className="px-8 py-3.5 bg-[#e8583f] hover:bg-[#cf472f] text-white font-bold text-xs tracking-widest uppercase transition-colors"
            >
              View Work
            </Link>
            <Link 
              to="/contact"
              className="text-xs font-sans tracking-widest uppercase font-bold text-white hover:text-[#e8583f] transition-colors border-b border-white/20 hover:border-[#e8583f] pb-0.5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser section: Services */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <SectionHeading eyebrow="CAPABILITIES" title="Core Solutions" />
          <Link to="/services" className="text-xs font-sans tracking-widest uppercase font-bold text-[#e8583f] hover:text-white transition-colors flex items-center gap-1">
            View All Services <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.services.slice(0, 3).map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Layers;
            return (
              <div key={idx} className="bg-[#141414] border border-zinc-900 p-8">
                <div className="w-10 h-10 bg-[#e8583f]/10 border border-[#e8583f]/25 text-[#e8583f] flex items-center justify-center mb-6">
                  <IconComponent size={18} />
                </div>
                <h3 className="text-xl text-white font-serif mb-3 uppercase">{item.title}</h3>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}

// 2. ABOUT PAGE
function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow={portfolioData.about.eyebrow} title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Circular photo with red border ring */}
          <div className="col-span-12 lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full p-2.5 bg-gradient-to-tr from-[#e8583f] to-zinc-900 shadow-xl">
              <img 
                src={portfolioData.hero.avatar} 
                alt="Evelyn Vance portrait" 
                className="w-full h-full object-cover rounded-full border border-black"
              />
              <span className="absolute bottom-6 right-6 w-5 h-5 rounded-full bg-emerald-400 border-4 border-black" />
            </div>
          </div>

          {/* Biography text */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[9px] font-sans tracking-widest text-[#e8583f] bg-[#e8583f]/10 border border-[#e8583f]/20 px-3 py-1.5 font-bold uppercase mb-4">
              VISUAL DESIGNER & SOFTWARE ENGINEER
            </span>
            <h3 className="text-2xl md:text-3xl text-white font-serif tracking-tight leading-snug mb-6">
              {portfolioData.about.heading}
            </h3>

            <div className="flex flex-col gap-6 text-sm text-zinc-400 leading-relaxed text-justify font-sans">
              <p>{portfolioData.about.narrative1}</p>
              <p>{portfolioData.about.narrative2}</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-900 mt-10 w-full">
              {portfolioData.about.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-serif font-black text-white">{stat.value}</span>
                  <span className="text-[9px] font-sans tracking-widest uppercase font-bold text-zinc-600 mt-1.5 leading-snug">{stat.label}</span>
                </div>
              ))}
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
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="MY TIMELINE" title="Resume & Experience" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work experience timeline */}
          <div>
            <h3 className="text-xl text-white font-serif uppercase mb-10 pb-2 border-b border-zinc-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e8583f] rounded-full" /> Professional Journey
            </h3>
            
            <div className="relative border-l border-zinc-800 pl-6 ml-2 flex flex-col gap-10">
              {portfolioData.resume.experience.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0d0d0d] border-2 border-[#e8583f]" />
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-base text-white font-serif font-semibold">{item.role}</h4>
                    <span className="text-[9px] font-sans tracking-widest text-[#e8583f] font-bold uppercase bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">{item.dates}</span>
                  </div>
                  <div className="text-xs text-zinc-500 font-sans mb-3">{item.company}</div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline + Skills */}
          <div className="flex flex-col gap-16">
            <div>
              <h3 className="text-xl text-white font-serif uppercase mb-10 pb-2 border-b border-zinc-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#e8583f] rounded-full" /> Academic Studies
              </h3>

              <div className="relative border-l border-zinc-800 pl-6 ml-2 flex flex-col gap-10">
                {portfolioData.resume.education.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0d0d0d] border-2 border-[#e8583f]" />
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-base text-white font-serif font-semibold">{item.degree}</h4>
                      <span className="text-[9px] font-sans tracking-widest text-[#e8583f] font-bold uppercase bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">{item.dates}</span>
                    </div>
                    <div className="text-xs text-zinc-500 font-sans mb-3">{item.institution}</div>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Bars */}
            <div>
              <h3 className="text-xl text-white font-serif uppercase mb-8 pb-2 border-b border-zinc-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#e8583f] rounded-full" /> Technical Aptitudes
              </h3>

              <div className="flex flex-col gap-5">
                {portfolioData.resume.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-sans font-bold text-[#e8583f]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-900 overflow-hidden rounded-none">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#e8583f] to-rose-400 rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="WHAT I OFFER" title="Services & Solutions" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.services.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Layers;
            return (
              <div key={idx} className="bg-[#141414] border border-zinc-900 p-10 hover:border-zinc-800 transition-colors">
                <div className="w-12 h-12 bg-[#e8583f]/10 border border-[#e8583f]/25 text-[#e8583f] flex items-center justify-center mb-8">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-2xl text-white font-serif mb-4 uppercase">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed text-justify">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}

// 5. PORTFOLIO PAGE
function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxProject, setLightboxProject] = useState(null);

  const filteredProjects = selectedFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(proj => proj.tag === filterMapping[selectedFilter]);

  return (
    <PageWrapper>
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="CREATIVE WORK" title="Selected Projects" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-900">
          {projectFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-[10px] font-sans tracking-widest uppercase font-black transition-all ${
                selectedFilter === filter
                  ? 'bg-[#e8583f] text-white'
                  : 'bg-transparent text-zinc-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group cursor-pointer bg-[#141414] border border-zinc-900 p-4 hover:border-zinc-800 transition-all flex flex-col gap-4"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-90 group-hover:opacity-100 filter brightness-95"
                />
                <div className="absolute inset-0 bg-[#e8583f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#e8583f] text-white px-4 py-2 text-[9px] font-sans tracking-widest uppercase flex items-center gap-1.5 font-bold shadow-md">
                    <Maximize2 size={11} /> Project Details
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-baseline px-1 font-sans">
                <div>
                  <h4 className="text-lg text-white font-serif group-hover:text-[#e8583f] transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-[10px] font-sans tracking-widest text-[#e8583f] uppercase font-bold mt-0.5 block">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-semibold">{project.specs.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable inline Lightbox modal */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0" onClick={() => setLightboxProject(null)} />
            
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 25, opacity: 0 }}
              className="relative bg-[#141414] border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col md:grid md:grid-cols-12 overflow-hidden text-zinc-300 font-sans"
            >
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#e8583f] hover:bg-[#cf472f] text-white transition-colors z-20"
              >
                <X size={16} />
              </button>

              <div className="col-span-12 md:col-span-7 h-[250px] md:h-full relative overflow-hidden bg-zinc-900">
                <img src={lightboxProject.image} alt={lightboxProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="col-span-12 md:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-[#e8583f] uppercase font-bold mb-2 block">{lightboxProject.category}</span>
                  <h3 className="text-3xl font-serif text-white tracking-tight leading-none uppercase mb-4">{lightboxProject.title}</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed text-justify mt-4">{lightboxProject.description}</p>
                </div>

                <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Briefcase size={14} className="text-[#e8583f]" />
                    <div>
                      <div className="text-[9px] text-zinc-500 uppercase font-black">ROLE</div>
                      <div className="text-xs text-white font-sans">{lightboxProject.specs.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-[#e8583f]" />
                    <div>
                      <div className="text-[9px] text-zinc-500 uppercase font-black">YEAR</div>
                      <div className="text-xs text-white font-sans">{lightboxProject.specs.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

// 6. PRICING SUBPAGE (Dropdown item)
function PricingPage() {
  return (
    <PageWrapper>
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="PLAN PRICING" title="Consultation Packages" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.pricing.map((plan, idx) => (
            <div key={idx} className="bg-[#141414] border border-zinc-900 p-8 flex flex-col justify-between relative">
              {idx === 1 && (
                <span className="absolute top-4 right-4 bg-[#e8583f] text-white text-[9px] font-sans tracking-widest uppercase font-black px-2.5 py-1">
                  POPULAR
                </span>
              )}
              
              <div>
                <h3 className="text-xl text-white font-serif uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-serif text-white">{plan.price}</span>
                  <span className="text-xs text-zinc-500 font-sans">/ {plan.period}</span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6 pb-6 border-b border-zinc-900">{plan.desc}</p>
                
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-zinc-300 font-sans flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#e8583f] rounded-full" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full text-center py-3 bg-zinc-900 hover:bg-[#e8583f] hover:text-white text-zinc-300 font-bold text-xs tracking-widest uppercase transition-colors"
              >
                Choose Package
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// 7. TEAM SUBPAGE (Dropdown item)
function TeamPage() {
  return (
    <PageWrapper>
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="PARTNERS" title="Creative Team" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {portfolioData.team.map((member, idx) => (
            <div key={idx} className="bg-[#141414] border border-zinc-900 p-6 flex items-center gap-6">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-20 h-20 rounded-full object-cover filter grayscale border-2 border-zinc-800"
              />
              <div className="font-sans">
                <h4 className="text-lg text-white font-serif uppercase">{member.name}</h4>
                <span className="text-[10px] font-sans tracking-widest text-[#e8583f] uppercase font-bold block mt-1">
                  {member.role}
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
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Info Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
          <div>
            <SectionHeading eyebrow="GET IN TOUCH" title="Let's build together" />
            <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-8 max-w-md">
              Constructing visual ecosystems, structural page routers, and custom hooks. Send a brief of your project constraints.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#e8583f]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black">EMAIL DIRECT</div>
                  <a href={`mailto:${portfolioData.brand.email}`} className="text-xs text-white hover:text-[#e8583f] font-bold transition-colors">
                    {portfolioData.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#e8583f]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black">LOCATION</div>
                  <span className="text-xs text-white/80 font-semibold font-sans">
                    {portfolioData.brand.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="col-span-12 lg:col-span-7 bg-[#141414] border border-zinc-900 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#e8583f]" />
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 font-sans">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-2">YOUR NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#e8583f] px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
              />
              {formErrors.name && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-bold">{formErrors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-2">EMAIL ADDRESS</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#e8583f] px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
              />
              {formErrors.email && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-bold">{formErrors.email}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-2">YOUR MESSAGE</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your design parameters"
                rows={4}
                className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#e8583f] px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors resize-none"
              />
              {formErrors.message && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-bold">{formErrors.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full py-4 bg-[#e8583f] disabled:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#cf472f] transition-colors"
            >
              {formStatus === 'loading' ? (
                <span>Sending Message...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Message Sent!</span>
              ) : (
                <>
                  Send Message <Send size={12} />
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
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-300 flex flex-col justify-between selection:bg-[#e8583f] selection:text-white">
      
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
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
