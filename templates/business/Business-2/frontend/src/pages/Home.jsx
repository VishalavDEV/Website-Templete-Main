import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { api } from '../utils/api';
import Counter from '../components/Counter';
import LucideIcon from '../components/LucideIcon';
import AnimatedPage from '../components/AnimatedPage';
import { 
  fadeIn, 
  slideUp, 
  staggerContainer, 
  scaleUp, 
  floatAnimation, 
  hoverScale, 
  hoverTap 
} from '../utils/animations';

const Home = () => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Fallbacks in case database is empty or server is offline
  const fallbackServices = [
    { id: 1, title: 'Web Development', description: 'Build lightning fast, SEO-optimized web applications using React, Next.js, and Spring Boot.', iconName: 'Globe' },
    { id: 2, title: 'Mobile App Development', description: 'Create native-feeling cross-platform iOS and Android apps with React Native.', iconName: 'Smartphone' },
    { id: 3, title: 'UI/UX Design', description: 'Craft intuitive, user-centered interface designs that ensure maximum conversion and retention.', iconName: 'Layers' },
  ];

  const fallbackProjects = [
    { id: 1, name: 'SaaS Analytics Dashboard', category: 'Web Development', description: 'A real-time data visualization dashboard designed for cloud business monitoring.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600' },
    { id: 2, name: 'FinTech Mobile App', category: 'Mobile App Development', description: 'A high-performance digital wallet and trading application featuring biometric authentication.', imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600' },
    { id: 3, name: 'Creative Agency Branding', category: 'UI/UX Design', description: 'Minimal design and premium interface layout designed for an architectural studio portfolio.', imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600' }
  ];

  const fallbackTestimonials = [
    { id: 1, clientName: 'Sarah Jenkins', clientPosition: 'Product Director', clientCompany: 'TechCorp', clientAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, content: 'Working with this team was an absolute game changer. They took our vague concept and designed and built a premium web app that our users love. Outstanding communication throughout the process!' },
    { id: 2, clientName: 'Michael Chen', clientPosition: 'Co-Founder', clientCompany: 'FinFlow', clientAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150', rating: 5, content: 'Their expertise in Spring Boot and security was evident from day one. They delivered a highly secure fintech solution ahead of schedule. We couldn\'t be happier with the outcome.' }
  ];

  useEffect(() => {
    // Load services
    api.getServices()
      .then(res => setServices(res.length ? res : fallbackServices))
      .catch(() => setServices(fallbackServices));

    // Load projects (preview top 3)
    api.getProjects()
      .then(res => setProjects(res.length ? res.slice(0, 3) : fallbackProjects))
      .catch(() => setProjects(fallbackProjects));

    // Load testimonials
    api.getTestimonials()
      .then(res => setTestimonials(res.length ? res : fallbackTestimonials))
      .catch(() => setTestimonials(fallbackTestimonials));
  }, []);

  const handleNextTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedPage>
      <div className="pt-24 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 md:pb-28 flex flex-col lg:flex-row items-center gap-16 z-10">
          {/* Background Decorative Gradients */}
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-200/30 rounded-full blur-[120px] -z-10" />

          {/* Left Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <motion.div 
              variants={slideUp}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primaryAccent"
            >
              <Star size={12} className="fill-primaryAccent" />
              <span>Transforming Ideas Since 2016</span>
            </motion.div>
            
            <motion.h1 
              variants={slideUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-primaryText"
            >
              Transform Ideas Into <span className="gradient-text">Digital Experiences</span>
            </motion.h1>
            
            <motion.p 
              variants={slideUp}
              className="text-secondaryText text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Build powerful digital products and experiences that help modern businesses grow, connect and stand out.
            </motion.p>
            
            <motion.div 
              variants={slideUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link 
                to="/contact" 
                className="gradient-bg text-white w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-indigo-500/15 flex items-center justify-center gap-2 hover:opacity-95 hover:shadow-indigo-500/25 transition-all"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/projects" 
                className="bg-white border border-slate-200 text-primaryText w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full max-w-xl relative"
          >
            {/* Background glowing rings */}
            <motion.div 
              animate={floatAnimation} 
              className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl -z-10" 
            />
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 w-44 h-44 bg-sky-400/20 rounded-full blur-3xl -z-10" 
            />

            {/* Dashboard Visual Frame */}
            <div className="glass-panel rounded-2xl shadow-2xl p-4 md:p-6 border customBorder relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-secondaryText bg-slate-100 px-3 py-1 rounded-md font-mono">
                  auradigital.app/analytics
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-100" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Visual Widgets */}
                <div className="col-span-2 glass-panel p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide">Growth Metrics</span>
                  <div className="text-xl font-bold text-primaryText">$24,850</div>
                  <div className="h-20 flex items-end gap-2 pt-2">
                    {[35, 45, 30, 60, 50, 75, 90].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-primaryAccent to-sky-400 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="col-span-1 glass-panel p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between items-center">
                  <span className="text-[10px] uppercase font-bold text-secondaryText text-center">Score</span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-primaryAccent" strokeDasharray="92, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute text-xs font-extrabold text-primaryText">92%</span>
                  </div>
                  <span className="text-[9px] text-secondaryText text-center mt-1">Exceptional</span>
                </div>
              </div>

              {/* Floating interactive sub-cards */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-24 right-[-20px] bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-secondaryText">Task Complete</span>
                  <span className="text-xs font-bold text-primaryText">API Integration</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-6 left-[-20px] bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-2.5 hidden sm:flex"
              >
                <span className="text-lg">🚀</span>
                <span className="text-[10px] font-bold text-primaryText">Campaign launched</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* TRUSTED COMPANIES */}
        <section className="bg-white border-y border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
            <span className="text-xs font-bold text-secondaryText tracking-widest uppercase">Trusted by forward-thinking companies</span>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-60">
              {['AcmeCorp', 'Globex', 'Initech', 'Umbrella', 'Soylent'].map((logo, index) => (
                <motion.span 
                  key={logo}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="font-extrabold text-lg text-primaryText hover:text-primaryAccent transition-colors duration-200 select-none cursor-default"
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-indigo-50 px-3.5 py-1 rounded-full">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryText max-w-lg leading-tight">
              We Offer End-to-End Digital Solutions
            </h2>
            <p className="text-secondaryText text-sm sm:text-base max-w-md">
              From creative strategies to clean execution, we build digital assets that convert visitors into loyal clients.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={slideUp}
                className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm card-glow group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center mb-6 group-hover:bg-primaryAccent group-hover:text-white transition-colors duration-300">
                  <LucideIcon name={service.iconName || 'Globe'} size={24} />
                </div>
                <h3 className="font-extrabold text-xl text-primaryText mb-3">{service.title}</h3>
                <p className="text-secondaryText text-sm leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primaryAccent hover:gap-2.5 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT SECTION (SPLIT + STATS) */}
        <section className="bg-slate-50/50 border-y border-slate-100 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column Image with floating effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primaryAccent to-sky-400 rounded-2xl rotate-2 opacity-5 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
                alt="Our Creative Agency Team" 
                className="rounded-2xl shadow-xl border border-slate-100 max-h-[420px] w-full object-cover"
              />
              
              {/* Overlay Stat Counter Badge */}
              <div className="absolute bottom-6 right-6 glass-panel rounded-xl shadow-lg p-4 border customBorder hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white text-lg">📈</div>
                <div className="flex flex-col">
                  <span className="text-xs text-secondaryText">Average growth</span>
                  <span className="text-sm font-bold text-primaryText">+124% YoY</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column Text + Stats */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-indigo-50 px-3.5 py-1 rounded-self w-fit">About AuraDigital</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryText leading-tight">
                An Agile Partner for Your Digital Expansion
              </h2>
              <p className="text-secondaryText text-sm sm:text-base leading-relaxed">
                We are a creative engineering agency that operates at the intersection of stunning aesthetics and production-grade engineering. We scale business visions into highly performant SaaS architectures.
              </p>
              
              {/* Counters Grid */}
              <div className="grid grid-cols-2 gap-8 my-4 border-t border-slate-200/60 pt-6">
                <div>
                  <div className="text-3xl font-extrabold text-primaryText mb-1">
                    <Counter value="50+" />
                  </div>
                  <div className="text-xs font-bold text-secondaryText uppercase tracking-wider">Completed Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-primaryText mb-1">
                    <Counter value="30+" />
                  </div>
                  <div className="text-xs font-bold text-secondaryText uppercase tracking-wider">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-primaryText mb-1">
                    <Counter value="10+" />
                  </div>
                  <div className="text-xs font-bold text-secondaryText uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-primaryText mb-1">
                    <Counter value="98%" />
                  </div>
                  <div className="text-xs font-bold text-secondaryText uppercase tracking-wider">Satisfaction Rate</div>
                </div>
              </div>

              <Link 
                to="/about"
                className="gradient-bg text-white w-fit px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:opacity-95 transition-opacity"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID PREVIEW */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-indigo-50 px-3.5 py-1 rounded-full w-fit">Featured Work</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryText leading-tight">
                Built to Scale. Styled to Impress.
              </h2>
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primaryAccent hover:gap-2 transition-all shrink-0 pb-1 border-b border-indigo-200"
            >
              See All Projects
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-primaryAccent tracking-wide border border-slate-100">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-lg text-primaryText mb-2 group-hover:text-primaryAccent transition-colors">{project.name}</h3>
                  <p className="text-secondaryText text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-primaryText hover:text-primaryAccent transition-colors"
                  >
                    View Project Details
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS FLOW SECTION */}
        <section className="bg-slate-50/50 border-y border-slate-100 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-20">
              <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-indigo-50 px-3.5 py-1 rounded-full">Execution Framework</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryText max-w-md leading-tight">
                Our Structured Development Process
              </h2>
            </div>

            {/* Steps Container */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-8">
              {/* Connecting Line on Desktop */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
              
              {[
                { step: '01', title: 'Discover', desc: 'We dive deep into your workflow requirements to uncover business opportunities.' },
                { step: '02', title: 'Design', desc: 'Crafting modern, interactive visual designs and mapping layout flows.' },
                { step: '03', title: 'Develop', desc: 'Writing clean code using Spring Boot and React backend-to-frontend.' },
                { step: '04', title: 'Launch', desc: 'Deploying to cloud containers (AWS/Vercel) with production security.' }
              ].map((p, index) => (
                <div key={p.step} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-extrabold text-lg shadow-md mb-6 ring-8 ring-white">
                    {p.step}
                  </div>
                  <h3 className="font-extrabold text-lg text-primaryText mb-2">{p.title}</h3>
                  <p className="text-secondaryText text-sm leading-relaxed max-w-[200px]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-xs font-bold text-primaryAccent tracking-widest uppercase bg-indigo-50 px-3.5 py-1 rounded-full">Client Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryText leading-tight">
              What Our Partners Say
            </h2>
          </div>

          <div className="w-full max-w-3xl glass-panel border border-slate-100 rounded-2xl shadow-md p-8 md:p-12 relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(testimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-6xl text-indigo-100 font-serif leading-none select-none">“</span>
            </div>

            <p className="text-primaryText text-lg md:text-xl leading-relaxed italic mb-8">
              {testimonials[currentTestimonial]?.content}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentTestimonial]?.clientAvatarUrl || 'https://via.placeholder.com/150'} 
                  alt={testimonials[currentTestimonial]?.clientName} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-primaryText text-base">{testimonials[currentTestimonial]?.clientName}</span>
                  <span className="text-secondaryText text-xs">{testimonials[currentTestimonial]?.clientPosition}, {testimonials[currentTestimonial]?.clientCompany}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex gap-2">
                <button 
                  onClick={handlePrevTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-primaryText transition-colors cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNextTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-primaryText transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <div className="gradient-bg rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl shadow-indigo-500/10 text-white relative overflow-hidden">
            {/* Background glowing circle */}
            <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base max-w-md">
                Get in touch with our engineers today for a complimentary architectural analysis of your project ideas.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="bg-white text-primaryText px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all select-none shrink-0"
            >
              Let's Talk
            </Link>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
