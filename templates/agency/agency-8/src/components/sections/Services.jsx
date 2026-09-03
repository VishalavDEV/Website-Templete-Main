import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useCursor } from '../../context/CursorContext';
import {
  Compass,
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
  Search,
  Video,
  Film,
  ArrowUpRight,
} from 'lucide-react';

export default function Services() {
  const { setCursorState } = useCursor();

  const services = [
    {
      num: '01',
      title: 'Brand Strategy',
      desc: 'Defining authentic brand identities, messaging frameworks, and strategic positioning to resonate in saturated markets.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Crafting intuitive, highly responsive, user-centered digital interfaces and design systems that delight users.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Web Development',
      desc: 'Building lightning-fast, secure, scalable web applications with React, Next.js, and high-performance WebGL animations.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'Mobile App Design',
      desc: 'Designing fluid, native iOS and Android application experiences engineered for engagement and smooth gestures.',
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'Digital Marketing',
      desc: 'Data-driven marketing campaigns, social media strategies, and performance acquisition pipelines built for ROI.',
      icon: TrendingUp,
    },
    {
      num: '06',
      title: 'SEO & Growth',
      desc: 'Technical search engine optimization, content strategy, and algorithmic conversion rate optimization.',
      icon: Search,
    },
    {
      num: '07',
      title: 'Content Creation',
      desc: 'High-impact multimedia content creation, editorial storytelling, copywriting, and dynamic asset generation.',
      icon: Video,
    },
    {
      num: '08',
      title: 'Motion Design',
      desc: 'Captivating 2D/3D motion graphics, kinetic typography, micro-interactions, and 3D brand visualizations.',
      icon: Film,
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 bg-[#05070f] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="WHAT WE DO"
          title="TRANSFORMING IDEAS INTO DIGITAL REALITY"
          description="We deliver full-spectrum creative and engineering solutions tailored to scale your brand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.num} service={service} index={idx} setCursorState={setCursorState} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Interactive Card Component with Radial Mouse Spot Glow
function ServiceCard({ service, index, setCursorState }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorState('button')}
      onMouseLeave={() => setCursorState('default')}
      className="group relative glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_10px_40px_rgba(6,182,212,0.25)]"
    >
      {/* Mouse Spot Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 70%)`,
        }}
      />

      <div>
        {/* Number & Icon Header */}
        <div className="flex justify-between items-start mb-6">
          <span className="text-3xl font-syne font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors duration-300">
            {service.num}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:rotate-12 transition-all duration-500">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-syne font-bold text-white mb-3 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
          {service.desc}
        </p>
      </div>

      {/* Footer Arrow Action */}
      <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs tracking-wider font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
        <span>LEARN MORE</span>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
