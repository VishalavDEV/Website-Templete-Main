import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectModal from '../ui/ProjectModal';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const { setCursorState } = useCursor();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      num: '01',
      title: 'NOVA FINANCE',
      category: 'FinTech Website & Mobile App',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      color: 'from-blue-600/40 via-purple-600/20 to-transparent',
      span: 'lg:col-span-8',
      desc: 'Next-generation decentralized finance dashboard and mobile app with real-time portfolio telemetry, AI-driven risk modeling, and seamless fiat on-ramps.',
    },
    {
      num: '02',
      title: 'ORBIT STUDIO',
      category: 'Creative Branding & Web3',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      color: 'from-cyan-600/40 via-blue-600/20 to-transparent',
      span: 'lg:col-span-4',
      desc: 'Spatial Web3 design studio identity, dynamic generative NFT token showcase, and interactive Three.js 3D gallery.',
    },
    {
      num: '03',
      title: 'VELORA',
      category: 'Fashion E-Commerce Platform',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      color: 'from-purple-600/40 via-pink-600/20 to-transparent',
      span: 'lg:col-span-4',
      desc: 'High-end luxury fashion digital runway with instant checkout, 3D fabric simulations, and hyper-personalized wardrobe recommendations.',
    },
    {
      num: '04',
      title: 'AERO',
      category: 'Travel & Booking Platform',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      color: 'from-emerald-600/40 via-teal-600/20 to-transparent',
      span: 'lg:col-span-8',
      desc: 'Frictionless private aviation and bespoke itinerary booking engine operating across 140+ countries.',
    },
    {
      num: '05',
      title: 'PULSE',
      category: 'Fitness & Health Application',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      color: 'from-rose-600/40 via-orange-600/20 to-transparent',
      span: 'lg:col-span-6',
      desc: 'Biometric wellness telemetry app integrating smartwatch streams, tailored recovery plans, and live community leaderboards.',
    },
    {
      num: '06',
      title: 'LUMINA',
      category: 'AI Technology Startup',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      color: 'from-indigo-600/40 via-blue-600/20 to-transparent',
      span: 'lg:col-span-6',
      desc: 'Enterprise generative AI visual search platform allowing rapid brand asset clustering and automated marketing variant generation.',
    },
  ];

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#070915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="SELECTED WORK"
          title="FEATURED CASE STUDIES"
          description="A showcase of digital products crafted with precision, motion, and purpose."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setCursorState('view', 'VIEW')}
              onMouseLeave={() => setCursorState('default')}
              className={`${project.span} group relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 h-[360px] sm:h-[420px] md:h-[500px] flex flex-col justify-between p-6 sm:p-8 md:p-10 cursor-pointer hover:border-cyan-500/50 transition-all duration-300`}
            >
              {/* Background Project Image with Hover Parallax Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

              {/* Header Info */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-[10px] sm:text-xs tracking-widest font-mono text-cyan-400 bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-500/30">
                  {project.num} / 06
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-300 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Footer Title & Meta */}
              <div className="relative z-10 space-y-2">
                <div className="flex justify-between items-end gap-3">
                  <div>
                    <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1 truncate max-w-[220px] sm:max-w-none">
                      {project.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-syne font-extrabold text-white group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:rotate-45 transition-all duration-500 shrink-0">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
