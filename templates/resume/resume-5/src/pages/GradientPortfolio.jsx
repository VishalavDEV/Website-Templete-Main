import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  X,
  Maximize2,
  Briefcase,
  Calendar,
  Layers,
  ArrowUp
} from 'lucide-react';
import { gradientData, projectFilters, filterMapping } from '../data/portfolio/gradientData';
import NavBarGradient from '../components/portfolio/NavBarGradient';

// Reusable Scroll to Top floating action
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
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
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#ff5722] hover:bg-[#e64a19] text-white flex items-center justify-center shadow-lg transition-colors border border-white/5 cursor-pointer focus:outline-none border-none"
    >
      <ArrowUp size={16} />
    </button>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-16 text-left">
      <span className="text-[10px] font-sans tracking-[0.25em] text-[#ff5722] uppercase font-black block mb-3 font-sans">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase font-sans">
        {title}
      </h2>
      <div className="w-12 h-1 bg-[#ff5722] mt-4" />
    </div>
  );
}

export default function GradientPortfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxProject, setLightboxProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success

  const filteredProjects = selectedFilter === 'All'
    ? gradientData.projects
    : gradientData.projects.filter(proj => proj.tag === filterMapping[selectedFilter]);

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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col selection:bg-[#ff5722] selection:text-white relative">
      
      {/* NAVBAR */}
      <NavBarGradient />

      {/* HERO SECTION */}
      <section id="home" className="hero-orange-red-gradient relative min-h-[95vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        
        {/* Silhouette overlay effect */}
        <div className="absolute inset-0 z-0 bg-black/5" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto font-sans">
          
          {/* Main Titles */}
          <div className="lg:col-span-8 flex flex-col items-start text-left font-sans">
            <span className="text-xs font-sans tracking-[0.3em] text-white/80 uppercase font-bold mb-3 block font-sans">
              {gradientData.hero.greeting}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] uppercase select-none font-sans">
              {gradientData.hero.title}
            </h1>

            {/* Sub copy tags */}
            <div className="mt-10 flex flex-col md:flex-row gap-8 items-start md:items-center max-w-2xl font-sans">
              <div className="w-16 h-[2px] bg-white/40 hidden md:block" />
              <div className="font-sans">
                <h3 className="text-xl text-white font-bold leading-normal uppercase font-sans">{gradientData.hero.tagline}</h3>
                <p className="text-xs text-white/70 leading-relaxed mt-2 text-justify font-sans font-sans">
                  {gradientData.hero.supportingDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Silhouette portrait bleed */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] bg-zinc-950 overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img 
                src={gradientData.hero.photo} 
                alt="Jared Vance Portrait" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff5722]/40 via-transparent to-transparent opacity-80" />
            </div>
          </div>

        </div>

        {/* Expertise skill tags */}
        <div className="max-w-7xl mx-auto w-full relative z-10 mt-16 border-t border-white/20 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
            {gradientData.hero.expertiseTags.map((tag, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="text-[10px] font-sans font-black text-white/50 block mb-1 font-sans">{tag.num}</span>
                <span className="text-xs md:text-sm text-white font-extrabold uppercase tracking-wide font-sans">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* TRUSTED BY LOGO STRIP SECTION */}
      <section className="px-6 md:px-12 relative z-25 -mt-8 font-sans">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] border border-zinc-900 rounded-2xl p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-4 text-left font-sans">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1 font-sans">CREDIBILITY</span>
            <h4 className="text-xs text-white font-black uppercase tracking-wider font-sans">
              {gradientData.logoStrip.label}
            </h4>
          </div>

          <div className="lg:col-span-8 flex flex-wrap items-center justify-start lg:justify-end gap-8 opacity-45 font-sans">
            {gradientData.logoStrip.logos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 filter grayscale">
                <img src={logo.image} alt={logo.name} className="w-6 h-6 rounded object-cover" />
                <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase font-sans">{logo.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto font-sans">
        <SectionHeading eyebrow={gradientData.about.eyebrow} title={gradientData.about.heading} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start font-sans">
          
          <div className="lg:col-span-7 text-left font-sans flex flex-col gap-6 text-sm text-zinc-400 leading-relaxed text-justify">
            <p className="text-white text-base font-medium leading-relaxed font-sans">
              {gradientData.about.philosophy}
            </p>
            <p className="font-sans">
              {gradientData.about.supportingParagraph}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start justify-center h-full font-sans">
            <div className="border border-zinc-900 p-8 w-full bg-[#1c1c1c] text-left relative flex flex-col gap-6 font-sans">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#ff5722]" />
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                Available for visual audits, typography consultation, and comprehensive corporate design guidelines.
              </p>
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3 rounded-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer border-none focus:outline-none w-fit font-sans"
              >
                {gradientData.about.ctaText}
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS/PORTFOLIO SECTION */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900 font-sans">
        <SectionHeading eyebrow="SELECTED WORKS" title="Creative Projects" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-zinc-900 font-sans">
          {projectFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(filter)}
              className="px-5 py-2 text-[10px] font-sans tracking-widest uppercase font-black transition-all cursor-pointer bg-transparent text-zinc-500 hover:text-white border-none"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group cursor-pointer bg-[#1c1c1c] border border-zinc-900 p-4 hover:border-zinc-800 transition-all flex flex-col gap-4"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-90 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 contrast-105"
                />
                <div className="absolute inset-0 bg-[#ff5722]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#ff5722] text-white px-4 py-2 text-[9px] font-sans tracking-widest uppercase flex items-center gap-1.5 font-bold shadow-md">
                    <Maximize2 size={11} /> Project Details
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-baseline px-1 font-sans">
                <div className="text-left font-sans">
                  <h4 className="text-lg text-white font-bold group-hover:text-[#ff5722] transition-colors uppercase leading-none font-sans">
                    {project.title}
                  </h4>
                  <span className="text-[10px] font-sans tracking-widest text-[#ff5722] uppercase font-bold mt-1.5 block font-sans">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-semibold font-sans">{project.specs.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-[#0c0c0c] border-t border-zinc-900 relative overflow-hidden font-sans">
        
        {/* Glow accent */}
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#ff5722]/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 font-sans">
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#ff5722] uppercase font-black block mb-3 font-sans">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase mb-6 font-sans">
            {gradientData.contact.heading}
          </h2>
          <p className="text-sm text-zinc-500 font-sans max-w-md mx-auto leading-relaxed mb-12 font-sans">
            {gradientData.contact.prompt}
          </p>

          <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto flex flex-col gap-6 text-left font-sans">
            
            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-1">YOUR NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
              />
              {formErrors.name && <span className="text-[10px] font-sans text-rose-400 mt-1 font-bold">{formErrors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-1">EMAIL ADDRESS</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="growth@enterprise.com"
                className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
              />
              {formErrors.email && <span className="text-[10px] font-sans text-rose-400 mt-1 font-bold">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-[9px] font-sans tracking-widest text-zinc-600 uppercase font-black mb-1">YOUR SPECIFICATION</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your design parameters"
                rows={3}
                className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-3 text-sm text-white placeholder-zinc-700 outline-none transition-colors resize-none"
              />
              {formErrors.message && <span className="text-[10px] font-sans text-rose-400 mt-1 font-bold">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="mt-6 w-full py-4 bg-[#ff5722] hover:bg-[#e64a19] disabled:bg-zinc-800 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer border-none font-sans"
            >
              {formStatus === 'loading' ? (
                <span>Establishing connection...</span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} /> Connection Established!</span>
              ) : (
                <>
                  Establish Connection <Send size={13} />
                </>
              )}
            </button>

          </form>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-zinc-900 font-sans">
            {gradientData.contact.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-[#ff5722] transition-colors text-lg"
              >
                <i className={soc.icon}></i>
              </a>
            ))}
          </div>

          <div className="text-[8px] tracking-widest text-zinc-700 uppercase font-bold mt-12 font-sans font-sans">
            © {new Date().getFullYear()} JARED VANCE. ALL RIGHTS RESERVED.
          </div>

        </div>
      </section>

      {/* Floating Scroll to Top button */}
      <ScrollToTopButton />

      {/* Lightbox modal */}
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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative bg-[#1c1c1c] border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col md:grid md:grid-cols-12 overflow-hidden text-zinc-300 font-sans"
            >
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#ff5722] hover:bg-[#e64a19] text-white transition-colors z-20 cursor-pointer border-none"
              >
                <X size={15} />
              </button>

              <div className="col-span-12 md:col-span-7 h-[250px] md:h-full relative overflow-hidden bg-zinc-950">
                <img src={lightboxProject.image} alt={lightboxProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="col-span-12 md:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-[#ff5722] uppercase font-bold mb-2 block">{lightboxProject.category}</span>
                  <h3 className="text-3xl font-black text-white tracking-tight leading-none uppercase mb-4">{lightboxProject.title}</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed text-justify mt-4">{lightboxProject.description}</p>
                </div>

                <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col gap-4 font-sans font-sans">
                  <div className="flex items-center gap-3">
                    <Briefcase size={14} className="text-[#ff5722]" />
                    <div className="text-left font-sans">
                      <div className="text-[9px] text-zinc-500 uppercase font-black font-sans">CLIENT</div>
                      <div className="text-xs text-white font-sans">{lightboxProject.specs.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-[#ff5722]" />
                    <div className="text-left font-sans font-sans">
                      <div className="text-[9px] text-zinc-500 uppercase font-black font-sans">YEAR</div>
                      <div className="text-xs text-white font-sans">{lightboxProject.specs.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
