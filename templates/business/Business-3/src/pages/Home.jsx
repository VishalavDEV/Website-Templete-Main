import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Star, Sparkles, Monitor, ShieldCheck } from 'lucide-react';
import { api } from '../utils/api';
import Counter from '../components/Counter';
import LucideIcon from '../components/LucideIcon';
import AnimatedPage from '../components/AnimatedPage';
import { 
  fadeIn, 
  slideUp, 
  staggerContainer 
} from '../utils/animations';

const Home = () => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Fallbacks in case database is empty or server is offline
  const fallbackServices = [
    { id: 1, title: 'Web Development', description: 'React, Next.js, and Spring Boot.', iconName: 'Globe' },
    { id: 2, title: 'Mobile App Development', description: 'Cross-platform iOS and Android.', iconName: 'Smartphone' },
    { id: 3, title: 'UI/UX Design', description: 'Intuitive user interface layout design.', iconName: 'Layers' },
  ];

  const fallbackProjects = [
    { id: 1, name: 'SaaS Analytics Dashboard', category: 'Web Development', description: 'A real-time data visualization dashboard designed for cloud business monitoring.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800' }
  ];

  const fallbackTestimonials = [
    { id: 1, clientName: 'Sarah Jenkins', clientPosition: 'Product Director', clientCompany: 'TechCorp', clientAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, content: 'Working with this team was an absolute game changer. They built a premium web app that our users love.' },
    { id: 2, clientName: 'Michael Chen', clientPosition: 'Co-Founder', clientCompany: 'FinFlow', clientAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150', rating: 5, content: 'Their expertise in Spring Boot and security was evident. They delivered a highly secure fintech solution.' }
  ];

  useEffect(() => {
    api.getServices()
      .then(res => setServices(res.length ? res : fallbackServices))
      .catch(() => setServices(fallbackServices));

    api.getProjects()
      .then(res => setProjects(res.length ? res.slice(0, 3) : fallbackProjects))
      .catch(() => setProjects(fallbackProjects));

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

  const featuredProject = projects[0] || fallbackProjects[0];

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[#1E1033] flex flex-col lg:flex-row overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] bg-[#7C3AED]/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-[#4C1D95]/15 rounded-full blur-[100px] -z-10" />

        {/* LEFT PANEL - FIXED PAGE CONTEXT & HEADER */}
        <div className="w-full lg:w-[45%] lg:fixed lg:top-0 lg:left-0 lg:h-screen pt-28 pb-12 px-6 sm:px-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-customBorder bg-[#180A2B] z-10 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E1033] border border-customBorder text-xs font-semibold text-primaryAccent w-fit">
              <Sparkles size={12} className="text-primaryAccent animate-pulse" />
              <span>Modern Web & Cloud Engineering</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primaryText">
              Transform Ideas Into <br />
              <span className="gradient-text">Digital Masterpieces</span>
            </h1>
            
            <p className="text-secondaryText text-sm sm:text-base leading-relaxed max-w-md">
              We design and build production-grade web systems, premium interfaces, and scalable microservice backends that help forward-thinking companies stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4.5 mt-2">
              <Link 
                to="/contact" 
                className="gradient-bg text-white w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs shadow-lg shadow-purple-500/20 hover:opacity-95 transition-all text-center flex items-center justify-center gap-1.5"
              >
                Start Project <ArrowRight size={14} />
              </Link>
              <Link 
                to="/projects" 
                className="bg-[#1E1033] border border-customBorder hover:bg-[#2E1A47] text-primaryText w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs transition-colors text-center"
              >
                Explore Work
              </Link>
            </div>
          </div>

          {/* Quick Counter Stats (2x2 grid) */}
          <div className="grid grid-cols-2 gap-6 pt-10 border-t border-customBorder/50 mt-10">
            <div>
              <span className="text-2xl font-mono font-extrabold text-primaryText"><Counter value="50+" /></span>
              <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide block mt-0.5">Projects Completed</span>
            </div>
            <div>
              <span className="text-2xl font-mono font-extrabold text-primaryText"><Counter value="30+" /></span>
              <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide block mt-0.5">Active Partners</span>
            </div>
            <div>
              <span className="text-2xl font-mono font-extrabold text-primaryText"><Counter value="10+" /></span>
              <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide block mt-0.5">Years Expertise</span>
            </div>
            <div>
              <span className="text-2xl font-mono font-extrabold text-primaryText"><Counter value="98%" /></span>
              <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide block mt-0.5">Satisfaction Rate</span>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL - SCROLLING CARDS TIMELINE */}
        <div className="w-full lg:w-[55%] lg:ml-[45%] pt-12 lg:pt-28 pb-20 px-6 sm:px-12 flex flex-col gap-10 overflow-x-hidden">

          {/* CARD 1: GROWTH METRICS WIDGET */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 flex flex-col gap-6 shadow-sm group hover:border-purple-500/40 transition-colors"
          >
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider flex items-center gap-1.5">
                <Monitor size={14} className="text-primaryAccent" />
                Growth Analytics
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-0.5 rounded-full font-mono font-bold">+124% YoY</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-secondaryText">Monthly Active Enquiries</span>
              <div className="text-3xl font-extrabold text-primaryText font-mono">$18,430<span className="text-xs text-secondaryText font-normal"> /mo</span></div>
            </div>

            <div className="h-24 flex items-end gap-2.5 pt-2">
              {[45, 30, 60, 50, 75, 90, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-[#1E1033] rounded-md h-full relative overflow-hidden border border-customBorder/30">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primaryAccent to-purple-400"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-customBorder text-[10px] text-secondaryText/80">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span>Secure database endpoints verified</span>
            </div>
          </motion.div>

          {/* CARD 2: FEATURED PROJECT SPOTLIGHT */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-lightAccent border border-customBorder rounded-3xl overflow-hidden shadow-sm group hover:border-purple-500/40 transition-colors flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={featuredProject.imageUrl} 
                alt={featuredProject.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4.5 left-4.5 bg-[#2E1A47]/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-[9px] font-bold uppercase text-primaryAccent tracking-wider border border-customBorder">
                Spotlight Project
              </div>
            </div>
            <div className="p-6.5 flex flex-col gap-2.5">
              <h3 className="font-extrabold text-lg text-primaryText group-hover:text-primaryAccent transition-colors">
                {featuredProject.name}
              </h3>
              <p className="text-secondaryText text-sm leading-relaxed">
                {featuredProject.description}
              </p>
              <Link 
                to={`/projects/${featuredProject.id}`} 
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-primaryText hover:text-primaryAccent transition-colors mt-2"
              >
                Inspect Project Specifications
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: SERVICE CAPABILITIES SUMMARY */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 flex flex-col gap-4 shadow-sm group hover:border-purple-500/40 transition-colors"
          >
            <div>
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider block mb-3">Core Expertise Capabilities</span>
              <div className="flex flex-wrap gap-2.5">
                {services.map((s) => (
                  <span key={s.id} className="text-xs font-semibold bg-[#1E1033] border border-customBorder text-primaryText px-3.5 py-1.5 rounded-full">
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-primaryAccent hover:text-purple-300 transition-colors pt-2.5 border-t border-customBorder"
            >
              Learn more about offerings <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* CARD 4: TESTIMONIAL CAROUSEL */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 flex flex-col gap-5.5 shadow-sm group hover:border-purple-500/40 transition-colors relative"
          >
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider">Client Testimonials</span>
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(testimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400" />
                ))}
              </div>
            </div>

            <div className="my-1">
              <p className="text-primaryText text-sm leading-relaxed italic">
                “{testimonials[currentTestimonial]?.content}”
              </p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-customBorder gap-3">
              <div className="flex items-center gap-3 truncate">
                <img 
                  src={testimonials[currentTestimonial]?.clientAvatarUrl || 'https://via.placeholder.com/150'} 
                  alt={testimonials[currentTestimonial]?.clientName} 
                  className="w-10 h-10 rounded-full object-cover border border-customBorder shrink-0"
                />
                <div className="flex flex-col truncate">
                  <span className="font-extrabold text-primaryText text-xs truncate">{testimonials[currentTestimonial]?.clientName}</span>
                  <span className="text-secondaryText text-[10px] truncate">{testimonials[currentTestimonial]?.clientCompany}</span>
                </div>
              </div>

              <div className="flex gap-1.5 shrink-0">
                <button 
                  onClick={handlePrevTestimonial}
                  className="w-8 h-8 rounded-full border border-customBorder flex items-center justify-center text-secondaryText hover:bg-[#1E1033] hover:text-primaryText transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={handleNextTestimonial}
                  className="w-8 h-8 rounded-full border border-customBorder flex items-center justify-center text-secondaryText hover:bg-[#1E1033] hover:text-primaryText transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: CONVERSION CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="gradient-bg rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl shadow-purple-500/10 text-white relative overflow-hidden"
          >
            <div className="absolute top-[-50%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />
            
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-extrabold">Ready to build your system?</h2>
              <p className="text-purple-200 text-xs max-w-sm">
                Get in touch for a complimentary code/architecture audit.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="bg-white text-[#1E1033] hover:bg-purple-100 px-7 py-3.5 rounded-full font-extrabold text-xs shadow-md transition-all select-none shrink-0"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
