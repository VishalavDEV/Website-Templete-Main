import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Layers, Cpu, Zap, Globe, Smartphone, Cloud } from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';
import LucideIcon from '../components/LucideIcon';
import { slideUp, staggerContainer } from '../utils/animations';

const Services = () => {
  const [services, setServices] = useState([]);

  const fallbackServices = [
    { 
      id: 1, 
      title: 'Web Development', 
      description: 'Build lightning fast, SEO-optimized web applications using React, Next.js, and Spring Boot.', 
      iconName: 'Globe', 
      features: 'SPA / SSR Support, Responsive Mobile-First, SEO Optimizations, API Interceptions', 
      technologies: 'React, Vite, Spring Boot, PostgreSQL, Tailwind CSS', 
      benefits: 'Improve SEO ranking, load pages 3x faster, increase user conversions' 
    },
    { 
      id: 2, 
      title: 'Mobile App Development', 
      description: 'Create native-feeling cross-platform iOS and Android apps with React Native.', 
      iconName: 'Smartphone', 
      features: 'Cross-platform compatibility, Native animations, Apple Store submission, Push alerts', 
      technologies: 'React Native, Node.js, Expo, Firebase, JPA', 
      benefits: 'Launch on iOS and Android with single codebase, reduce app store time-to-market' 
    },
    { 
      id: 3, 
      title: 'UI/UX Design', 
      description: 'Craft intuitive, user-centered interface designs that ensure maximum conversion and retention.', 
      iconName: 'Layers', 
      features: 'Interactive Figma Mockups, User Journey Mapping, Visual Branding Systems, Component Design Guide', 
      technologies: 'Figma, Adobe XD, Illustrator, Tailwind CSS', 
      benefits: 'Increase retention by 40%, improve navigation structures, build immediate brand trust' 
    },
    { 
      id: 4, 
      title: 'Cloud Solutions', 
      description: 'Deploy scalable infrastructure using AWS, Docker, and Kubernetes for modern cloud reliability.', 
      iconName: 'Cloud', 
      features: 'Container Orchestration, Automated scaling rules, Secure VPC setups, Continuous CD deploys', 
      technologies: 'AWS, Docker, Kubernetes, Terraform, GitHub Actions', 
      benefits: 'Ensure 99.99% system uptime, scale dynamically on high traffic loads' 
    },
    { 
      id: 5, 
      title: 'Digital Transformation', 
      description: 'Consulting and execution for upgrading legacy systems into sleek, automated platforms.', 
      iconName: 'Cpu', 
      features: 'Legacy code audits, Database migrations, Secure endpoint proxies, Workflow consulting', 
      technologies: 'Spring Boot, JPA, Hibernate, PostgreSQL', 
      benefits: 'Upgrade system security, reduce server costs, remove technical operational bottlenecks' 
    },
    { 
      id: 6, 
      title: 'Business Automation', 
      description: 'Optimize workflows with automated email triggers, CRM systems, and AI chat assistants.', 
      iconName: 'Zap', 
      features: 'Email list integrations, CRM APIs, Webhook configurations, Automatic reporting sheets', 
      technologies: 'Node.js, Python, Zapier, SendGrid, REST APIs', 
      benefits: 'Save 20+ hours per week, automate boring repetitive emails, connect software platforms' 
    },
  ];

  useEffect(() => {
    api.getServices()
      .then(res => {
        const enriched = (res.length ? res : fallbackServices).map(s => {
          const fb = fallbackServices.find(f => f.title === s.title) || {};
          return {
            features: fb.features || 'Custom features, Full-stack support, Responsive layouts',
            technologies: fb.technologies || 'React, Spring Boot, PostgreSQL',
            benefits: fb.benefits || 'Deliver scalable digital assets, increase client retention',
            ...s
          };
        });
        setServices(enriched);
      })
      .catch(() => setServices(fallbackServices));
  }, []);

  const getBentoCardStyles = (idx) => {
    if (idx === 0 || idx === 2) {
      return 'lg:col-span-8 lg:row-span-2 bg-[#180A2B]/40';
    }
    return 'lg:col-span-4 lg:row-span-1 bg-lightAccent/60';
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[#1E1033] flex flex-col lg:flex-row overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] bg-[#7C3AED]/10 rounded-full blur-[100px] -z-10" />
        
        {/* LEFT PANEL - FIXED SOLUTION CONTEXT */}
        <div className="w-full lg:w-[45%] lg:fixed lg:top-0 lg:left-0 lg:h-screen pt-28 pb-12 px-6 sm:px-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-customBorder bg-[#180A2B] z-10 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E1033] border border-customBorder text-xs font-semibold text-primaryAccent w-fit"
            >
              <Star size={12} className="fill-primaryAccent" />
              <span>Detailed Solutions</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primaryText">
              Our In-Depth <br />
              <span className="gradient-text">Service Offerings</span>
            </h1>
            
            <p className="text-secondaryText text-sm sm:text-base leading-relaxed max-w-md">
              Explore our specialized divisions, technologies we deploy, and the operational benefits they bring to your business.
            </p>
          </div>

          <div className="pt-10 border-t border-customBorder/50 mt-10">
            <Link 
              to="/contact" 
              className="gradient-bg text-white py-3.5 px-8 rounded-full font-bold text-xs hover:opacity-95 shadow-md flex items-center justify-center gap-2 group w-full sm:w-fit"
            >
              Request Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* RIGHT PANEL - SCROLLING DETAILED CARDS TIMELINE */}
        <div className="w-full lg:w-[55%] lg:ml-[45%] pt-12 lg:pt-28 pb-20 px-6 sm:px-12 flex flex-col gap-8 overflow-x-hidden">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                variants={slideUp}
                className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 shadow-sm hover:border-purple-500/40 transition-colors flex flex-col gap-5.5 relative group"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-gradient-to-r from-primaryAccent to-purple-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E1033] text-primaryAccent flex items-center justify-center shrink-0 border border-customBorder">
                    <LucideIcon name={s.iconName || 'Globe'} size={22} />
                  </div>
                  <h2 className="text-lg font-extrabold text-primaryText">{s.title}</h2>
                </div>

                <p className="text-secondaryText text-xs leading-relaxed border-b border-customBorder pb-4.5">
                  {s.description}
                </p>

                {/* Features & Benefits details */}
                <div className="flex flex-col gap-4.5">
                  <div>
                    <h3 className="text-[10px] font-bold text-primaryText uppercase tracking-wider mb-2">Core Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-secondaryText">
                      {s.features.split(',').map((f) => (
                        <li key={f.trim()} className="flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-primaryAccent shrink-0 mt-0.5" />
                          <span>{f.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-customBorder/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-[10px] font-bold text-primaryText uppercase tracking-wider mb-1.5">Business Impact</h3>
                      <p className="text-[11px] text-[#C4B5FD] italic leading-relaxed">
                        {s.benefits}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-primaryText uppercase tracking-wider mb-1.5">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {s.technologies.split(',').map((t) => (
                          <span key={t} className="text-[10px] font-mono bg-[#1E1033] text-[#C4B5FD] px-2 py-0.5 rounded border border-customBorder">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Services;
