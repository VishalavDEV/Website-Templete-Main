import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Download,
  Send,
  MapPin,
  CheckCircle,
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolio/minimalData';
import NavBarMinimal from '../components/portfolio/NavBarMinimal';
import GalleryModalMinimal from '../components/portfolio/GalleryModalMinimal';

// Reusable Section Heading component
function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-left font-sans"
    >
      <span className="text-[10px] font-sans tracking-[0.25em] text-[#262626]/50 uppercase font-bold block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif text-[#262626] tracking-tight leading-tight">
        {title}
      </h2>
      <div className="w-10 h-[1px] bg-zinc-300 mt-4" />
    </motion.div>
  );
}

export default function MinimalPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-[#262626] selection:bg-zinc-200 selection:text-zinc-900 font-sans">
      
      {/* Dynamic styles injected inline for standalone catalog rendering */}
      <style>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', Georgia, serif !important;
          font-weight: 300 !important;
        }
        .thin-text-shadow {
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      {/* NAVBAR */}
      <NavBarMinimal />

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Hero Left Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#262626]/50 uppercase font-black mb-4 block">
              {portfolioData.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#262626] tracking-tight leading-[1.1] font-light">
              {portfolioData.hero.headline}
            </h1>
            <p className="mt-6 text-sm md:text-base text-zinc-500 max-w-lg leading-relaxed font-sans">
              {portfolioData.hero.subtext}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a 
                href={portfolioData.hero.cta.primary.href}
                className="px-6 py-3 border border-[#262626] hover:bg-[#262626] hover:text-white text-[#262626] text-xs font-sans tracking-widest uppercase font-bold transition-all flex items-center gap-1.5 rounded-none"
              >
                {portfolioData.hero.cta.primary.label} <ArrowRight size={12} />
              </a>
              <a 
                href={portfolioData.hero.cta.secondary.href}
                className="text-xs font-sans tracking-widest uppercase font-bold text-[#262626] hover:opacity-60 transition-opacity border-b border-[#262626] pb-0.5"
              >
                {portfolioData.hero.cta.secondary.label}
              </a>
            </div>

            {/* Location + Availability Indicators */}
            <div className="mt-12 pt-8 border-t border-zinc-150 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                <MapPin size={14} className="text-zinc-400" />
                <span>{portfolioData.hero.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 animate-pulse border border-emerald-500/20" />
                <span>{portfolioData.hero.availability}</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Portrait with floating stat pill badge */}
          <div className="col-span-12 lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px]">
              
              {/* Photo Card with soft shadow */}
              <div className="w-full h-full overflow-hidden bg-zinc-100 rounded-[20px] shadow-sm border border-zinc-150">
                <img 
                  src={portfolioData.hero.portrait} 
                  alt={portfolioData.brand.siteName} 
                  className="w-full h-full object-cover filter saturate-75 contrast-95"
                />
              </div>

              {/* Floating Stat Pill Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-zinc-200/80 px-5 py-2.5 shadow-md flex items-center gap-2.5 rounded-full w-max">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="text-[9px] font-sans tracking-widest uppercase font-bold text-[#262626]">
                  {portfolioData.hero.credibilityStat}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-150">
        <SectionHeading eyebrow={portfolioData.about.eyebrow} title={portfolioData.about.heading} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Stats summary + Second portrait */}
          <div className="col-span-12 lg:col-span-6 flex flex-col md:flex-row gap-8 items-center lg:items-start justify-center">
            
            {/* Stat Counters Column */}
            <div className="flex flex-col gap-6 md:w-1/2 justify-center">
              {portfolioData.about.stats.map((stat, idx) => (
                <div key={idx} className="pb-6 border-b border-zinc-150 last:border-0">
                  <div className="text-4xl font-serif text-[#262626] font-light tracking-tight">{stat.value}</div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Small Portrait Column */}
            <div className="w-[200px] h-[260px] overflow-hidden bg-zinc-100 rounded-2xl shadow-sm border border-zinc-150 md:w-1/2">
              <img 
                src={portfolioData.about.portraitSecondary} 
                alt="Workspace preview" 
                className="w-full h-full object-cover filter grayscale opacity-80"
              />
            </div>
          </div>

          {/* Narrative text and CV */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] font-sans tracking-widest text-[#262626]/40 uppercase font-black mb-3">
              METHODOLOGY
            </span>
            <div className="flex flex-col gap-6 text-sm text-zinc-500 leading-relaxed text-justify font-sans">
              <p>{portfolioData.about.storyParagraph1}</p>
              <p>{portfolioData.about.storyParagraph2}</p>
            </div>

            <button className="mt-8 px-6 py-3 bg-[#262626] hover:bg-zinc-800 text-white text-xs font-sans tracking-widest uppercase font-bold transition-colors flex items-center gap-2 rounded-none">
              Download CV <Download size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO / WORKS SECTION */}
      <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-150">
        <SectionHeading eyebrow="• SELECTION" title="Selected Work" />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer bg-white border border-zinc-200/80 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-50 rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#262626] text-white px-4 py-2 text-[9px] font-sans tracking-widest uppercase flex items-center gap-1.5 font-bold shadow-md">
                    <Eye size={11} /> Project Details
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-1 font-sans">
                <span className="text-[9px] font-sans tracking-widest text-[#262626]/40 uppercase font-black mb-1">
                  {project.category}
                </span>
                <h4 className="text-xl font-serif text-[#262626] group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APPROACH SECTION */}
      <section id="approach" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-150">
        <SectionHeading eyebrow="• PROCESS" title="My Approach" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {portfolioData.approach.map((item, idx) => (
            <div key={idx} className="flex flex-col pt-6 border-t border-zinc-150 font-sans">
              <span className="text-[10px] font-sans tracking-widest text-[#262626]/40 uppercase font-black mb-4">
                0{idx + 1} // CONCEPT
              </span>
              <h3 className="text-xl font-serif text-[#262626] mb-3">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#262626]/50 uppercase font-bold mb-4 block">
            • GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#262626] tracking-tight mb-6">
            Let's build together.
          </h2>
          <p className="text-sm text-zinc-500 font-sans leading-relaxed mb-8 max-w-md">
            {portfolioData.contact.tagline}
          </p>

          {/* Form underlight styling */}
          <form onSubmit={handleFormSubmit} className="w-full max-w-lg flex flex-col gap-6 text-left mb-12 font-sans">
            <div className="flex flex-col">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-zinc-200 focus:border-[#262626] py-3 text-xs tracking-widest placeholder-zinc-400 outline-none transition-colors font-sans uppercase font-bold"
              />
              {formErrors.name && <span className="text-[9px] font-sans text-rose-500 mt-1 font-bold">{formErrors.name}</span>}
            </div>

            <div className="flex flex-col">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-zinc-200 focus:border-[#262626] py-3 text-xs tracking-widest placeholder-zinc-400 outline-none transition-colors font-sans uppercase font-bold"
              />
              {formErrors.email && <span className="text-[9px] font-sans text-rose-500 mt-1 font-bold">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="YOUR MESSAGE"
                rows={3}
                className="w-full bg-transparent border-b border-zinc-200 focus:border-[#262626] py-3 text-xs tracking-widest placeholder-zinc-400 outline-none transition-colors resize-none font-sans uppercase font-bold"
              />
              {formErrors.message && <span className="text-[9px] font-sans text-rose-500 mt-1 font-bold">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="mt-4 py-3 bg-[#262626] hover:bg-zinc-800 disabled:bg-zinc-300 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-none transition-colors"
            >
              {formStatus === 'loading' ? (
                <span>Sending Message...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Message Sent Successfully!</span>
              ) : (
                <>
                  Send Message <Send size={11} />
                </>
              )}
            </button>
          </form>

          {/* Socials footer displaying text links */}
          <div className="flex gap-8 items-center border-t border-zinc-100 pt-8 w-full justify-center">
            {portfolioData.contact.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-sans tracking-widest uppercase font-bold text-zinc-400 hover:text-[#262626] transition-colors"
              >
                {soc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#fafafc] text-zinc-400 py-10 px-6 border-t border-zinc-150">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-sans tracking-widest uppercase font-bold">
          <span>© {new Date().getFullYear()} CLARA OSWALD. ALL RIGHTS RESERVED.</span>
          <span>AIRY MINIMAL EDITORIAL DESIGN</span>
        </div>
      </footer>

      {/* Project Lightbox detail modal */}
      <GalleryModalMinimal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
