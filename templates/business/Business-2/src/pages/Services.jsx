import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
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

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 overflow-hidden">
        {/* HEADER */}
        <section className="relative max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
          <div className="absolute top-[-30%] left-[20%] w-96 h-96 bg-sky-100/40 rounded-full blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primaryAccent"
          >
            <Star size={12} className="fill-primaryAccent" />
            <span>Detailed Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-primaryText leading-tight max-w-2xl"
          >
            Our In-Depth <span className="gradient-text">Service Offerings</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondaryText text-sm sm:text-base max-w-lg leading-relaxed"
          >
            Explore our specialized divisions, technologies we deploy, and the operational benefits they bring to your business.
          </motion.p>
        </section>

        {/* SERVICES DETAILS GRID */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                variants={slideUp}
                className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 relative group"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-gradient-to-r from-primaryAccent to-sky-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-primaryAccent flex items-center justify-center shrink-0">
                    <LucideIcon name={s.iconName || 'Globe'} size={28} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-primaryText">{s.title}</h2>
                </div>

                <p className="text-secondaryText text-sm leading-relaxed border-b border-slate-100 pb-5">
                  {s.description}
                </p>

                {/* Features & Benefits details */}
                <div className="flex flex-col gap-5 flex-1">
                  <div>
                    <h3 className="text-xs font-bold text-primaryText uppercase tracking-wider mb-2">Core Offerings</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-secondaryText">
                      {s.features.split(',').map((f) => (
                        <li key={f.trim()} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-primaryAccent shrink-0 mt-0.5" />
                          <span>{f.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-primaryText uppercase tracking-wider mb-1.5">Business Benefits</h3>
                    <p className="text-xs text-secondaryText italic">
                      {s.benefits}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-primaryText uppercase tracking-wider mb-1.5">Technologies We Use</h3>
                    <span className="text-[11px] font-mono bg-slate-50 text-indigo-600 px-3 py-1 rounded-md inline-block">
                      {s.technologies}
                    </span>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="gradient-bg text-white py-3.5 rounded-xl font-semibold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 group mt-4"
                >
                  Request Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Services;
