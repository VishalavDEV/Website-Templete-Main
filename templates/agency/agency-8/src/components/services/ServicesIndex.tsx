import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'motion/react';
import { Plus, Minus, ArrowRight, ArrowUpRight } from 'lucide-react';
import { DETAILED_SERVICES, DetailedService } from '../../data/servicesData';
import { CursorType } from '../../types';

interface ServicesIndexProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesIndex: React.FC<ServicesIndexProps> = ({
  setCursorType,
  onSelectService,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>('strategy');
  const [isHoveringIndex, setIsHoveringIndex] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth cursor-following spring coordinates for desktop floating image
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleItemClick = (service: DetailedService) => {
    const targetElement = document.getElementById(`service-detail-${service.id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onSelectService) {
      onSelectService(service.id);
    }
  };

  const activeService = DETAILED_SERVICES.find((s) => s.id === activeServiceId);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringIndex(true)}
      onMouseLeave={() => {
        setIsHoveringIndex(false);
        setActiveServiceId(null);
      }}
      className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header Metadata */}
        <div className="flex items-center justify-between border-b border-[#ffffff15] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              INTERACTIVE INDEX
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            HOVER TO PREVIEW / CLICK TO EXPLORE
          </span>
        </div>

        {/* ================= DESKTOP EDITORIAL INDEX (Hidden on mobile) ================= */}
        <div className="hidden md:block divide-y divide-[#ffffff12] relative">
          {DETAILED_SERVICES.map((service) => {
            const isSelected = activeServiceId === service.id;
            const isAnySelected = activeServiceId !== null;

            return (
              <div
                key={service.id}
                id={`service-index-row-${service.id}`}
                onClick={() => handleItemClick(service)}
                onMouseEnter={() => {
                  setActiveServiceId(service.id);
                  setCursorType('project', 'EXPLORE ↗');
                }}
                onMouseLeave={() => {
                  setCursorType('default');
                }}
                className={`group relative py-12 lg:py-16 transition-all duration-500 cursor-pointer ${
                  isAnySelected && !isSelected ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {/* Active Accent Left Border Line */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isSelected ? 1 : 0,
                    opacity: isSelected ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0066FF] origin-top"
                />

                <div className="grid grid-cols-12 gap-6 items-center pl-6 lg:pl-10">
                  {/* Number */}
                  <div className="col-span-1">
                    <span
                      className={`font-mono text-base lg:text-lg font-bold tracking-wider transition-colors duration-300 ${
                        isSelected ? 'text-[#0066FF]' : 'text-[#666666]'
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="col-span-5 lg:col-span-4">
                    <motion.h3
                      animate={{ x: isSelected ? 12 : 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className={`font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-colors duration-300 ${
                        isSelected ? 'text-[#FAF9F6]' : 'text-[#FAF9F6]/80'
                      }`}
                    >
                      {service.name}
                    </motion.h3>
                  </div>

                  {/* Short Description */}
                  <div className="col-span-4 lg:col-span-5">
                    <p
                      className={`font-sans text-sm lg:text-base leading-relaxed transition-colors duration-300 max-w-lg ${
                        isSelected ? 'text-[#FAF9F6]/90' : 'text-[#888888]'
                      }`}
                    >
                      {service.shortDesc}
                    </p>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0066FF]/80">
                      {service.metadata}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="col-span-2 lg:col-span-2 flex justify-end">
                    <motion.div
                      animate={{
                        x: isSelected ? 8 : 0,
                        backgroundColor: isSelected ? '#0066FF' : 'rgba(255,255,255,0.05)',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full border border-[#ffffff15] flex items-center justify-center text-[#FAF9F6] transition-colors group-hover:border-[#0066FF]"
                    >
                      <ArrowRight className="w-5 h-5 text-current transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Contextual Image on Desktop (Follows Cursor Smoothly) */}
        <AnimatePresence>
          {isHoveringIndex && activeService && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                x: mouseX,
                y: mouseY,
                pointerEvents: 'none',
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="hidden md:block absolute top-0 left-0 z-30 w-[380px] lg:w-[440px] h-[260px] lg:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#111111]"
            >
              <div className="relative w-full h-full">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  className="w-full h-full object-cover grayscale-[15%] contrast-110 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Image Label Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] block font-bold">
                      {activeService.number} / SPECIFICATION
                    </span>
                    <span className="font-display font-bold text-base uppercase tracking-tight">
                      {activeService.name}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono tracking-wider text-[#FAF9F6]/80 border border-white/10">
                    {activeService.relatedProject}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= MOBILE ACCORDION (Visible on screens < md) ================= */}
        <div className="md:hidden divide-y divide-[#ffffff15] border-t border-[#ffffff15]">
          {DETAILED_SERVICES.map((service) => {
            const isExpanded = expandedMobileId === service.id;

            return (
              <div key={service.id} className="py-6">
                <button
                  type="button"
                  onClick={() => setExpandedMobileId(isExpanded ? null : service.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#0066FF]">
                      {service.number}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-[#FAF9F6] tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white bg-white/5">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-[#0066FF]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
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
                      <div className="pt-5 space-y-5">
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="text-sm text-[#FAF9F6]/80 leading-relaxed font-sans">
                          {service.shortDesc}
                        </p>

                        <div className="space-y-2 pt-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                            CORE CAPABILITIES
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FAF9F6]/90 rounded"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3">
                          <button
                            type="button"
                            onClick={() => handleItemClick(service)}
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0066FF] font-bold"
                          >
                            <span>EXPLORE {service.name}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
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
    </section>
  );
};
