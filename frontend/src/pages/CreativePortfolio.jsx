import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  Cpu, 
  Send, 
  Download, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Maximize2
} from 'lucide-react';
import { portfolioData, projectFilters, filterMapping, SOCIAL_FA_MAP } from '../data/portfolio/creativeData';
import NavBarCreative from '../components/portfolio/NavBarCreative';
import GalleryModalCreative from '../components/portfolio/GalleryModalCreative';

// Reusable Section Heading component
function SectionHeading({ eyebrow, title, lightBg = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 font-sans"
    >
      <span className={`text-xs font-sans tracking-widest uppercase font-black block mb-2 ${
        lightBg ? 'text-[#e74c3c]' : 'text-white/80'
      }`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight ${
        lightBg ? 'text-[#2b2b2b]' : 'text-white'
      }`}>
        {title}
      </h2>
      <div className="w-16 h-1.5 bg-[#e74c3c] mt-4" />
    </motion.div>
  );
}

const ICON_MAP = {
  Layers: Layers,
  Sparkles: Sparkles,
  Cpu: Cpu
};

export default function CreativePortfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Testimonial Carousel Index state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Contact Form states
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

  const handleNextTestimonial = () => {
    setActiveTestimonial((activeTestimonial + 1) % portfolioData.testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((activeTestimonial - 1 + portfolioData.testimonials.length) % portfolioData.testimonials.length);
  };

  const filteredProjects = selectedFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(proj => proj.tag === filterMapping[selectedFilter]);

  return (
    <div className="min-h-screen bg-[#f5f5fb] text-[#2b2b2b] selection:bg-[#e74c3c] selection:text-white font-sans">
      
      {/* Dynamic styles injected inline for standalone catalog rendering */}
      <style>{`
        .grid-overlay {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(77, 166, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(77, 166, 255, 0.02) 1px, transparent 1px);
        }
        .border-offset {
          box-shadow: 12px 12px 0px 0px #e74c3c;
        }
        .border-offset-dark {
          box-shadow: 12px 12px 0px 0px #2b2b2b;
        }
        .geometric-pattern {
          background-size: 30px 30px;
          background-image: radial-gradient(circle, rgba(231, 76, 60, 0.15) 1px, transparent 1px);
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Syne', sans-serif !important;
        }
      `}</style>

      {/* STICKY TOP NAVBAR */}
      <NavBarCreative />

      {/* 1. HERO SECTION (Dark Charcoal Background) */}
      <section id="home" className="bg-[#2b2b2b] text-white min-h-[90vh] md:min-h-screen flex items-center p-6 md:p-12 relative overflow-hidden grid-overlay">
        
        {/* Left Side stacked social icons */}
        <div className="hidden md:flex flex-col gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-10">
          {portfolioData.socialLinks.map((soc, idx) => {
            const faClass = SOCIAL_FA_MAP[soc.name] || "fa-solid fa-link";
            return (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#e74c3c] text-lg hover:scale-110 transition-all py-1"
              >
                <i className={faClass}></i>
              </a>
            );
          })}
        </div>

        {/* Faint watermark background behind content */}
        <div className="absolute right-0 top-1/4 select-none opacity-[0.02] text-8xl md:text-[14rem] font-black tracking-tighter text-white uppercase pointer-events-none">
          {portfolioData.brand.watermark}
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-10 md:pt-0 pl-0 md:pl-16">
          
          {/* Hero Left Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[#e74c3c] text-xs font-sans tracking-[0.3em] uppercase font-black mb-3">
              {portfolioData.hero.greeting}
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              {portfolioData.hero.name}
            </h1>
            <h2 className="text-2xl md:text-4xl uppercase tracking-widest font-black mt-3 flex items-baseline gap-2">
              <span className="text-white/50">{portfolioData.hero.rolePrefix}</span>
              <span className="text-[#e74c3c]">{portfolioData.hero.roleSuffix}</span>
            </h2>
            <p className="mt-6 text-sm text-white/70 max-w-lg leading-relaxed">
              {portfolioData.hero.subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a 
                href={portfolioData.hero.cta.primary.href}
                className="px-8 py-3.5 bg-[#e74c3c] hover:bg-[#c0392b] text-white font-black text-xs tracking-widest uppercase transition-all flex items-center gap-2 rounded-none"
              >
                {portfolioData.hero.cta.primary.label} <Send size={12} />
              </a>
              <a 
                href={portfolioData.hero.cta.secondary.href}
                className="text-xs font-sans tracking-widest uppercase font-black text-white hover:text-[#e74c3c] transition-colors border-b-2 border-white/10 hover:border-[#e74c3c] pb-1"
              >
                {portfolioData.hero.cta.secondary.label}
              </a>
            </div>

            {/* Email footer display */}
            <div className="mt-16 text-[10px] font-sans tracking-widest uppercase font-black text-white/30">
              EMAIL DIRECT // <a href={`mailto:${portfolioData.brand.email}`} className="text-white/60 hover:text-[#e74c3c] transition-colors">{portfolioData.brand.email}</a>
            </div>
          </div>

          {/* Hero Right: Portrait with Overlapping Geometric Shapes */}
          <div className="col-span-12 lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]">
              
              {/* Back outlined geometric square */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-white/10 pointer-events-none" />
              
              {/* Solid Accent Red Square (offset) */}
              <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-[#e74c3c] pointer-events-none z-0" />
              
              {/* Image Frame */}
              <div className="w-full h-full relative z-10 overflow-hidden bg-zinc-800 border-4 border-[#2b2b2b]">
                <img 
                  src={portfolioData.hero.portrait} 
                  alt={portfolioData.hero.name} 
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>

              {/* Front outlined box overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/20 pointer-events-none z-20" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs font-sans tracking-widest uppercase font-black animate-bounce flex items-center gap-1">
          SCROLL DOWN <ArrowRight size={10} className="rotate-90" />
        </div>
      </section>

      {/* 2. ABOUT SECTION (Light Background) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow={portfolioData.about.eyebrow} title={portfolioData.about.heading} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Double Offset Photos with Outline behind */}
          <div className="col-span-12 lg:col-span-6 flex justify-center relative h-[360px] md:h-[450px]">
            
            {/* Outline Behind */}
            <div className="absolute left-6 top-6 w-[200px] h-[280px] border-4 border-[#e74c3c]/15 pointer-events-none" />
            
            {/* Small Photo */}
            <div className="absolute left-10 top-10 w-[180px] h-[250px] overflow-hidden bg-zinc-300 z-10 shadow-lg border-2 border-white">
              <img 
                src={portfolioData.about.photoSmall} 
                alt="Detail shoot" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent Red square overlap */}
            <div className="absolute right-12 bottom-6 w-20 h-20 bg-[#e74c3c] z-20 pointer-events-none" />

            {/* Large Photo offset */}
            <div className="absolute right-16 top-2 w-[220px] h-[310px] overflow-hidden bg-zinc-300 z-10 shadow-2xl border-4 border-white">
              <img 
                src={portfolioData.about.photoLarge} 
                alt="Studio setup" 
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>

          {/* Bio text & credentials */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-sans tracking-widest text-[#e74c3c] uppercase font-black mb-1">
              CURRENT FOCUS
            </span>
            <span className="text-[#2b2b2b] text-sm font-sans font-bold flex items-center gap-1.5 mb-6">
              <MapPin size={14} className="text-[#e74c3c]" /> {portfolioData.about.location}
            </span>

            <div className="flex flex-col gap-6 text-sm text-[#2b2b2b]/75 leading-relaxed text-justify">
              <p>{portfolioData.about.storyParagraph1}</p>
              <p>{portfolioData.about.storyParagraph2}</p>
            </div>

            <button className="mt-8 px-8 py-3.5 bg-[#2b2b2b] hover:bg-[#e74c3c] text-white font-black text-xs tracking-widest uppercase transition-all flex items-center gap-2 rounded-none">
              Download CV <Download size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION (Vibrant Red Accent Background) */}
      <section id="skills" className="bg-[#e74c3c] text-white py-24 px-6 md:px-12 relative overflow-hidden">
        
        {/* Geometric outline overlay pattern */}
        <div className="absolute inset-0 select-none opacity-5 geometric-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Intro text */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-white/80 text-xs font-sans tracking-widest uppercase font-black mb-2">
              {portfolioData.skills.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {portfolioData.skills.heading}
            </h2>
            <div className="w-12 h-1.5 bg-white mt-4 mb-6" />
            <p className="text-sm text-white/80 leading-relaxed text-justify">
              {portfolioData.skills.desc}
            </p>
          </div>

          {/* Animated Horizontal Progress Bars */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 w-full">
            {portfolioData.skills.items.map((skill, idx) => (
              <div key={idx} className="flex flex-col w-full">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-sans font-black uppercase tracking-wider text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-sans font-black text-white/90">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#2b2b2b]/30 rounded-none overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-white rounded-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Capabilities" title="My Specialties" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white hover:bg-[#2b2b2b] border border-zinc-200 hover:border-[#2b2b2b] p-8 transition-all duration-300 relative border-offset hover:shadow-2xl"
              >
                <div className="w-12 h-12 bg-[#e74c3c] text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <IconComponent size={20} />
                </div>

                <h3 className="text-xl font-black uppercase text-[#2b2b2b] group-hover:text-white mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs text-[#2b2b2b]/70 group-hover:text-white/75 font-sans leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-[#2b2b2b] text-white border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="Selected Works" title="Check my portfolio" lightBg={false} />

          {/* Filter triggers */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
            {projectFilters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 text-[10px] font-sans tracking-widest uppercase font-black transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#e74c3c] text-white'
                    : 'bg-transparent text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects masonry/grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer bg-zinc-850 p-4 border border-white/5 hover:border-[#e74c3c] transition-all flex flex-col gap-4 relative overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter brightness-85 group-hover:scale-101 group-hover:brightness-100 transition-all duration-[800ms]"
                  />
                  <div className="absolute inset-0 bg-[#e74c3c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-[#2b2b2b] px-4 py-2 text-[10px] font-sans tracking-widest uppercase flex items-center gap-1.5 font-black rounded-none shadow-md">
                      <Maximize2 size={11} /> Project Details
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-baseline mt-1 px-1">
                  <div>
                    <h4 className="text-xl font-black uppercase text-white group-hover:text-[#e74c3c] transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <span className="text-[10px] font-sans tracking-widest text-[#e74c3c] uppercase font-black mt-1 block">
                      {project.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-sans text-white/40 block uppercase">
                      YEAR
                    </span>
                    <span className="text-xs font-sans text-white/80 font-semibold">
                      {project.specs.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Guest Quotes" title="Client Testimonials" />

        <div className="max-w-3xl mx-auto relative bg-white border border-zinc-200 p-8 md:p-12 border-offset">
          
          <div className="text-5xl font-serif text-[#e74c3c] font-black absolute top-4 left-6 select-none opacity-20 pointer-events-none font-serif">
            “
          </div>

          <div className="relative min-h-[160px] md:min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-6"
              >
                <p className="text-sm md:text-base text-[#2b2b2b]/80 leading-relaxed font-sans italic text-justify">
                  {portfolioData.testimonials[activeTestimonial].quote}
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={portfolioData.testimonials[activeTestimonial].photo} 
                    alt={portfolioData.testimonials[activeTestimonial].name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#e74c3c]"
                  />
                  <div>
                    <h4 className="text-sm font-black uppercase text-[#2b2b2b]">
                      {portfolioData.testimonials[activeTestimonial].name}
                    </h4>
                    <span className="text-[10px] font-sans tracking-widest text-[#e74c3c] uppercase font-black mt-0.5 block">
                      {portfolioData.testimonials[activeTestimonial].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial slider buttons */}
          <div className="flex justify-end gap-3 mt-8 border-t border-zinc-100 pt-6">
            <button 
              onClick={handlePrevTestimonial}
              className="p-2 border border-zinc-200 hover:bg-[#e74c3c] hover:border-[#e74c3c] hover:text-white transition-colors text-[#2b2b2b] focus:outline-none"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="p-2 border border-zinc-200 hover:bg-[#e74c3c] hover:border-[#e74c3c] hover:text-white transition-colors text-[#2b2b2b] focus:outline-none"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. BLOG SECTION */}
      <section id="blog" className="py-24 bg-[#080b15]/5 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="Visual Insights" title="Creative Blog" />

          {/* Articles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white border border-zinc-200 overflow-hidden flex flex-col md:grid md:grid-cols-12 hover:shadow-xl transition-all border-offset-dark"
              >
                {/* Image */}
                <div className="col-span-12 md:col-span-5 h-[200px] md:h-full relative overflow-hidden bg-zinc-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-101 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-sans tracking-widest text-[#e74c3c] uppercase font-black block mb-2">
                      {post.date}
                    </span>
                    <h3 className="text-lg font-black uppercase text-[#2b2b2b] group-hover:text-[#e74c3c] transition-colors leading-tight mb-3">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#2b2b2b]/70 font-sans leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <a 
                    href="#blog"
                    className="text-[10px] font-sans tracking-widest uppercase font-black text-[#2b2b2b] hover:text-[#e74c3c] transition-colors flex items-center gap-1.5 mt-6 border-b border-transparent hover:border-[#e74c3c] w-fit pb-0.5"
                  >
                    Read Article <ArrowRight size={10} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#2b2b2b] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left contact card info */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading eyebrow="Direct Connection" title="Let's build together" lightBg={false} />
              
              <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-sm">
                Have a campaign, brand blueprint, or visual catalog that needs structural creative strategy? Drop me a line.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#e74c3c]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans tracking-widest text-white/30 uppercase font-black">EMAIL DIRECT</div>
                    <a href={`mailto:${portfolioData.brand.email}`} className="text-xs text-white hover:text-[#e74c3c] font-bold transition-colors">
                      {portfolioData.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#e74c3c]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans tracking-widest text-white/30 uppercase font-black">LOCATION</div>
                    <span className="text-xs text-white/80 font-semibold">
                      {portfolioData.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links footer */}
            <div className="flex gap-4 mt-12 md:mt-0">
              {portfolioData.contact.socials.map((soc, idx) => {
                const faClass = SOCIAL_FA_MAP[soc.name] || "fa-solid fa-link";
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 hover:border-[#e74c3c] hover:bg-[#e74c3c] text-white flex items-center justify-center transition-all text-sm"
                  >
                    <i className={faClass}></i>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right contact form card */}
          <div className="col-span-12 lg:col-span-7 bg-[#232323] border border-white/5 p-8 relative">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#e74c3c]" />
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[9px] font-sans tracking-widest text-white/40 uppercase font-black mb-2">YOUR NAME</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="w-full bg-[#2b2b2b] border border-white/5 focus:border-[#e74c3c] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors rounded-none"
                />
                {formErrors.name && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-semibold">{formErrors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-[9px] font-sans tracking-widest text-white/40 uppercase font-black mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className="w-full bg-[#2b2b2b] border border-white/5 focus:border-[#e74c3c] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors rounded-none"
                />
                {formErrors.email && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-semibold">{formErrors.email}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[9px] font-sans tracking-widest text-white/40 uppercase font-black mb-2">YOUR MESSAGE</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your design parameters"
                  rows={4}
                  className="w-full bg-[#2b2b2b] border border-white/5 focus:border-[#e74c3c] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors resize-none rounded-none"
                />
                {formErrors.message && <span className="text-[10px] font-sans text-rose-400 mt-1.5 font-semibold">{formErrors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-4 bg-[#e74c3c] disabled:bg-zinc-800 text-white font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#c0392b] transition-colors rounded-none"
              >
                {formStatus === 'loading' ? (
                  <span>Sending Message...</span>
                ) : formStatus === 'success' ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    Send Message <Send size={12} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#232323] text-white/30 py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-sans tracking-widest uppercase font-black">
          <span>© {new Date().getFullYear()} SASHA GREY. ALL RIGHTS RESERVED.</span>
          <span>HIGH-CONTRAST GEOMETRIC TEMPLATE</span>
        </div>
      </footer>

      {/* Project Lightbox detail modal */}
      <GalleryModalCreative
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
