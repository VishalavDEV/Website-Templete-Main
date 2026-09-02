import React, { useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { Service, CursorType } from '../types';

interface ServicesPreviewProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
  onNavigate?: (path: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(SERVICES[0].id);

  // Floating hover preview coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 250 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 250 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const toggleMobile = (id: string) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="py-28 sm:py-36 border-t border-[#ffffff10] relative bg-[#080808] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0066FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                WHAT WE DO
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold text-[#FAF9F6] tracking-tight uppercase"
            >
              Full-Spectrum Digital Craft
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] max-w-md text-sm sm:text-base leading-relaxed"
          >
            We operate as an integrated partner across the full product lifecycle, bridging strategy, bespoke design, and modern code.
          </motion.p>
        </div>

        {/* Desktop Editorial Services List */}
        <div className="hidden md:block divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
          {SERVICES.map((service) => {
            const isHovered = hoveredService?.id === service.id;

            return (
              <div
                key={service.id}
                id={`service-item-${service.id}`}
                onMouseEnter={() => {
                  setHoveredService(service);
                  setCursorType('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredService(null);
                  setCursorType('default');
                }}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(`/services/${service.id}`);
                  } else {
                    onOpenProjectModal();
                  }
                }}
                className="group relative py-10 lg:py-14 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start lg:items-center justify-between gap-8">
                  {/* Left Column: Number and Service Title */}
                  <div className="flex items-baseline gap-8 lg:gap-16">
                    <span className="font-mono text-xs tracking-widest text-[#888888] group-hover:text-[#0066FF] transition-colors duration-300">
                      {service.number}
                    </span>
                    <h3 className="font-display text-3xl lg:text-5xl font-bold text-[#FAF9F6]/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 uppercase">
                      {service.name}
                    </h3>
                  </div>

                  {/* Center Column: Description & Tagline */}
                  <div className="max-w-md hidden lg:block">
                    <p className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-[#888888] leading-relaxed group-hover:text-[#FAF9F6] transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow Action */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#ffffff15] group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>

                {/* Subtle Hover Gradient Bar */}
                <div className="absolute left-0 bottom-0 top-0 w-1 bg-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion List */}
        <div className="md:hidden divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
          {SERVICES.map((service) => {
            const isExpanded = mobileExpandedId === service.id;

            return (
              <div key={service.id} className="py-6">
                <button
                  onClick={() => toggleMobile(service.id)}
                  className="w-full flex items-center justify-between text-left group focus:outline-hidden"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#0066FF]">{service.number}</span>
                    <span className="font-display text-2xl font-bold text-[#FAF9F6] uppercase">
                      {service.name}
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
                      className="overflow-hidden pt-4 space-y-4"
                    >
                      <div className="rounded-xl overflow-hidden aspect-[16/9] border border-white/10">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs uppercase font-mono tracking-wider text-[#0066FF]">
                        {service.tagline}
                      </p>
                      <p className="text-sm text-[#888888] leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] block">
                          Key Deliverables:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((deliv, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-[#FAF9F6] flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#0066FF]" />
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Floating Image Preview following cursor */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              x: springX,
              y: springY,
              top: -140,
              left: 40,
            }}
            className="pointer-events-none fixed z-30 hidden lg:block w-80 h-52 rounded-xl overflow-hidden border border-[#ffffff20] bg-[#080808]/90 shadow-2xl shadow-black/90 backdrop-blur-md"
          >
            <img
              src={hoveredService.image}
              alt={hoveredService.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
              <div>
                <span className="text-[10px] font-mono text-[#0066FF] uppercase tracking-widest">
                  {hoveredService.number} // {hoveredService.name}
                </span>
                <p className="text-xs text-[#FAF9F6] font-medium">{hoveredService.tagline}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
