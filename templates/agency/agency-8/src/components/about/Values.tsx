import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { CursorType } from '../../types';

interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tagline: string;
}

const VALUES_DATA: ValueItem[] = [
  {
    id: 'curiosity',
    number: '01',
    title: 'CURIOSITY',
    description: 'We question assumptions and look for better possibilities. The standard answer is almost never the optimal one.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tagline: 'INQUISITIVE THINKING',
  },
  {
    id: 'clarity',
    number: '02',
    title: 'CLARITY',
    description: 'Complex problems deserve simple, meaningful solutions. We strip away noise until only pure signal and function remain.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    tagline: 'REDUCTIVE PRECISION',
  },
  {
    id: 'craft',
    number: '03',
    title: 'CRAFT',
    description: 'Details matter. Every interaction has a purpose. We obsess over easing curves, typographic cadence, and pixel cohesion.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    tagline: 'OBSESSIVE REFINEMENT',
  },
  {
    id: 'courage',
    number: '04',
    title: 'COURAGE',
    description: 'The most memorable work rarely comes from playing safe. We champion bold brand convictions and unconventional aesthetics.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    tagline: 'UNCOMPROMISING VISION',
  },
  {
    id: 'impact',
    number: '05',
    title: 'IMPACT',
    description: 'Beautiful work should create measurable value. Artistry and commercial performance must reinforce each other seamlessly.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tagline: 'COMMERCIAL VELOCITY',
  },
];

interface ValuesProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const Values: React.FC<ValuesProps> = ({ setCursorType }) => {
  const [hoveredValue, setHoveredValue] = useState<ValueItem | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('curiosity');
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                GUIDING PRINCIPLES
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#FAF9F6]"
            >
              WHAT WE BELIEVE
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] max-w-md text-sm sm:text-base leading-relaxed font-normal"
          >
            Our ethos guides every architectural blueprint, brand strategy, and user interface we create.
          </motion.p>
        </div>

        {/* Desktop Large Editorial Values List */}
        <div className="hidden md:block divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
          {VALUES_DATA.map((val) => {
            const isHovered = hoveredValue?.id === val.id;
            const hasAnyHover = hoveredValue !== null;

            return (
              <div
                key={val.id}
                onMouseEnter={() => {
                  setHoveredValue(val);
                  setCursorType('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredValue(null);
                  setCursorType('default');
                }}
                className={`group relative py-12 lg:py-14 transition-all duration-300 cursor-pointer ${
                  hasAnyHover && !isHovered ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <div className="flex items-start lg:items-center justify-between gap-8">
                  {/* Number & Value Title */}
                  <div className="flex items-baseline gap-8 lg:gap-16">
                    <span className="font-mono text-xs tracking-widest text-[#888888] group-hover:text-[#0066FF] group-hover:-translate-x-1 transition-all duration-300">
                      {val.number}
                    </span>
                    <h3 className="font-display text-3xl lg:text-6xl font-bold text-[#FAF9F6]/80 group-hover:text-white uppercase tracking-tight transition-all duration-300 group-hover:translate-x-3">
                      {val.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="max-w-md hidden lg:block">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#0066FF] block mb-1 font-semibold opacity-80 group-hover:opacity-100">
                      {val.tagline}
                    </span>
                    <p className="text-sm text-[#888888] group-hover:text-[#FAF9F6] leading-relaxed transition-colors">
                      {val.description}
                    </p>
                  </div>

                  {/* Indicator Arrow */}
                  <div className="w-12 h-12 rounded-full border border-[#ffffff15] flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>

                {/* Left accent bar */}
                <div className="absolute left-0 bottom-0 top-0 w-1 bg-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion List */}
        <div className="md:hidden divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
          {VALUES_DATA.map((val) => {
            const isExpanded = mobileExpandedId === val.id;

            return (
              <div key={val.id} className="py-6">
                <button
                  onClick={() => setMobileExpandedId(isExpanded ? null : val.id)}
                  className="w-full flex items-center justify-between text-left group focus:outline-hidden"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#0066FF]">{val.number}</span>
                    <span className="font-display text-2xl font-bold text-[#FAF9F6] uppercase">
                      {val.title}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full bg-white/[0.04] transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#0066FF]' : 'text-[#888888]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                          {val.tagline}
                        </span>
                        <p className="text-sm text-[#888888] leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Floating cursor-following preview for Desktop */}
        <AnimatePresence>
          {hoveredValue && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                left: mousePos.x + 30,
                top: mousePos.y - 120,
              }}
              className="pointer-events-none fixed z-30 hidden lg:block w-72 h-44 rounded-xl overflow-hidden border border-[#ffffff20] bg-[#0A0A0A]/95 shadow-2xl backdrop-blur-md"
            >
              <img
                src={hoveredValue.image}
                alt={hoveredValue.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-mono text-[#0066FF] uppercase tracking-widest block font-bold">
                    {hoveredValue.number} // {hoveredValue.title}
                  </span>
                  <p className="text-xs text-[#FAF9F6] font-medium">{hoveredValue.tagline}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
