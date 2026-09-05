import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ServiceModal from '../ui/ServiceModal';
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
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      num: '01',
      title: 'Brand Strategy',
      desc: 'Defining authentic brand identities, messaging frameworks, and strategic positioning to resonate in saturated markets.',
      icon: Compass,
      deliverables: [
        'Market & Competitor Positioning Analysis',
        'Core Brand Values, Tone of Voice & Narrative Messaging',
        'Customer Persona Journey Architecture',
        'Brand Identity Guidelines & Asset System',
      ],
      techStack: ['Figma', 'Brand Matrix', 'Content Strategy', 'Telemetry Analysis'],
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Crafting intuitive, highly responsive, user-centered digital interfaces and design systems that delight users.',
      icon: Palette,
      deliverables: [
        'Wireframing, User Flow & Information Architecture',
        'Design Systems Tokenization & Component Libraries',
        'High-Fidelity Interactive Prototypes in Figma',
        'Usability Testing & Micro-Interaction Choreography',
      ],
      techStack: ['Figma', 'Framer', 'Design Tokens', 'UserTesting'],
    },
    {
      num: '03',
      title: 'Web Development',
      desc: 'Building lightning-fast, secure, scalable web applications with React, Next.js, and high-performance WebGL animations.',
      icon: Code2,
      deliverables: [
        'Modern JAMstack Architecture (React, Vite, Next.js)',
        'Custom WebGL & Three.js Canvas Visualizers',
        'Headless CMS (Sanity, Strapi) & REST/GraphQL APIs',
        'Performance Auditing & 99+ Lighthouse Optimization',
      ],
      techStack: ['React', 'Next.js', 'WebGL / Three.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      num: '04',
      title: 'Mobile App Design',
      desc: 'Designing fluid, native iOS and Android application experiences engineered for engagement and smooth gestures.',
      icon: Smartphone,
      deliverables: [
        'iOS & Android Native Design Architecture',
        'Fluid Touch Gestures & Kinetic Feedback Loops',
        'App Store Screenshots & Marketing Collateral',
        'Developer Handover Specifications & Asset Kits',
      ],
      techStack: ['React Native', 'SwiftUI', 'Figma', 'Lottie'],
    },
    {
      num: '05',
      title: 'Digital Marketing',
      desc: 'Data-driven marketing campaigns, social media strategies, and performance acquisition pipelines built for ROI.',
      icon: TrendingUp,
      deliverables: [
        'Full-Funnel Paid Acquisition (Meta, Google, LinkedIn)',
        'Conversion Rate Optimization (CRO) & A/B Split Testing',
        'Marketing Automation & CRM Funnel Architecture',
        'Real-Time Attribution Analytics Dashboards',
      ],
      techStack: ['Google Ads', 'Meta Suite', 'HubSpot', 'PostHog'],
    },
    {
      num: '06',
      title: 'SEO & Growth',
      desc: 'Technical search engine optimization, content strategy, and algorithmic conversion rate optimization.',
      icon: Search,
      deliverables: [
        'Deep Technical SEO & Core Web Vitals Audits',
        'Programmatic Keyword Strategy & Content Clusters',
        'Structured Data, Rich Snippets & Schema Markup',
        'International Multi-Lingual SEO Deployment',
      ],
      techStack: ['Ahrefs', 'Semrush', 'Schema.org', 'Google Search Console'],
    },
    {
      num: '07',
      title: 'Content Creation',
      desc: 'High-impact multimedia content creation, editorial storytelling, copywriting, and dynamic asset generation.',
      icon: Video,
      deliverables: [
        'Brand Manifesto & Commercial Copywriting',
        '3D Rendered Product Stills & Lifestyle Photography',
        'Motion Graphics & Video Storyboarding',
        'Social Media Campaign Asset Packs',
      ],
      techStack: ['Blender', 'Cinema 4D', 'After Effects', 'Figma'],
    },
    {
      num: '08',
      title: 'Motion Design',
      desc: 'Captivating 2D/3D motion graphics, kinetic typography, micro-interactions, and 3D brand visualizations.',
      icon: Film,
      deliverables: [
        'Custom UI Micro-Interactions with Framer Motion & GSAP',
        'Kinetic Typography & 3D Interactive Web Visuals',
        'Lottie Animations for Native Mobile Integration',
        'Brand Reveal & 3D Cinematic Entrance Sequences',
      ],
      techStack: ['GSAP', 'Framer Motion', 'Three.js', 'Lottie'],
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#05070f] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="WHAT WE DO"
          title="TRANSFORMING IDEAS INTO DIGITAL REALITY"
          description="We deliver full-spectrum creative and engineering solutions tailored to scale your brand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.num}
              service={service}
              index={idx}
              setCursorState={setCursorState}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}

// Individual Interactive Card Component with Radial Mouse Spot Glow
function ServiceCard({ service, index, setCursorState, onSelect }) {
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
      onClick={onSelect}
      onMouseEnter={() => setCursorState('button')}
      onMouseLeave={() => setCursorState('default')}
      className="group relative glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_10px_40px_rgba(6,182,212,0.25)] cursor-pointer"
    >
      {/* Mouse Spot Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 70%)`,
        }}
      />

      <div>
        {/* Number & Icon Header */}
        <div className="flex justify-between items-start mb-5 sm:mb-6">
          <span className="text-2xl sm:text-3xl font-syne font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors duration-300">
            {service.num}
          </span>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:rotate-12 transition-all duration-500">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6 sm:mb-8">
          {service.desc}
        </p>
      </div>

      {/* Footer Arrow Action */}
      <div className="pt-3 sm:pt-4 border-t border-white/5 flex justify-between items-center text-xs tracking-wider font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
        <span className="group-hover:underline text-[11px] sm:text-xs">LEARN MORE ↗️</span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>
    </motion.div>
  );
}
