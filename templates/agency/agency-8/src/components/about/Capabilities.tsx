import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CursorType } from '../../types';

interface CapabilityItem {
  id: string;
  name: string;
  category: string;
  details: string;
  image: string;
}

const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'strategy',
    name: 'Strategy',
    category: 'FOUNDATIONAL ARCHITECTURE',
    details: 'Digital Positioning • Technical Scoping • Market Differentiation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    category: 'VISUAL SYSTEMS',
    details: 'Design Systems • Typographic Frameworks • Editorial Guidelines',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-direction',
    name: 'Art Direction',
    category: 'CREATIVE LEADERSHIP',
    details: 'Concept Exploration • Visual Narrative • Curated Imagery',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ux-ui-design',
    name: 'UX / UI Design',
    category: 'INTERFACE CRAFT',
    details: 'Product Prototyping • Design Systems • Micro-Interactions',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'FULL-STACK ENGINEERING',
    details: 'React 19 • Next-Gen TS Architecture • Scalable Cloud Systems',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'creative-technology',
    name: 'Creative Technology',
    category: 'EXPERIMENTAL LABS',
    details: 'WebGL Shaders • Spatial Computing • Kinetic Interactive Canvases',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'digital-experiences',
    name: 'Digital Experiences',
    category: 'IMMERSIVE PLATFORMS',
    details: 'Flagship Web Portals • E-Commerce Platforms • Global Launches',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'content-motion',
    name: 'Content & Motion',
    category: 'KINETIC MEDIA',
    details: 'Motion Design • Interactive Storytelling • Sonic FX & Easing',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  },
];

interface CapabilitiesProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ setCursorType }) => {
  const [hoveredCap, setHoveredCap] = useState<CapabilityItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="py-28 sm:py-40 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                STUDIO EXPERTISE
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#FAF9F6]"
            >
              WHAT WE BRING TO THE TABLE
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] max-w-md text-sm sm:text-base leading-relaxed font-normal"
          >
            A multi-disciplinary stack engineered to execute end-to-end vision without vendor fragmentation.
          </motion.p>
        </div>

        {/* Large Typographic Capabilities Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {CAPABILITIES_DATA.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => {
                setHoveredCap(cap);
                setCursorType('pointer');
              }}
              onMouseLeave={() => {
                setHoveredCap(null);
                setCursorType('default');
              }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-[#ffffff10] hover:border-[#0066FF]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[190px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                  {cap.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#0066FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#FAF9F6] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {cap.name}
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-2 group-hover:text-[#FAF9F6]/80 transition-colors">
                  {cap.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cursor Floating Visual for Desktop */}
        <AnimatePresence>
          {hoveredCap && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                left: mousePos.x + 30,
                top: mousePos.y - 100,
              }}
              className="pointer-events-none fixed z-30 hidden lg:block w-64 h-40 rounded-xl overflow-hidden border border-[#ffffff20] bg-[#0A0A0A] shadow-2xl backdrop-blur-md"
            >
              <img
                src={hoveredCap.image}
                alt={hoveredCap.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-mono text-[#FAF9F6] uppercase tracking-wider font-semibold">
                  {hoveredCap.name} // CAPABILITY
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
