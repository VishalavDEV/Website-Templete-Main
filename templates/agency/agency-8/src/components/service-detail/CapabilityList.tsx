import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { ServiceDetailConfig, ServiceCapabilityItem } from '../../data/serviceDetailData';
import { CursorType } from '../../types';

interface CapabilityListProps {
  service: ServiceDetailConfig;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const CapabilityList: React.FC<CapabilityListProps> = ({
  service,
  setCursorType,
}) => {
  const [activeCapId, setActiveCapId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(
    service.capabilities[0]?.number || '01'
  );
  const [isHoveringList, setIsHoveringList] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const activeCapability = service.capabilities.find((c) => c.number === activeCapId);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringList(true)}
      onMouseLeave={() => {
        setIsHoveringList(false);
        setActiveCapId(null);
      }}
      className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              {service.capabilitiesHeading}
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            0{service.capabilities.length} CORE CAPABILITIES
          </span>
        </div>

        {/* ================= DESKTOP EDITORIAL LIST ================= */}
        <div className="hidden md:block divide-y divide-[#ffffff12] relative">
          {service.capabilities.map((cap) => {
            const isSelected = activeCapId === cap.number;
            const isAnySelected = activeCapId !== null;

            return (
              <div
                key={cap.number}
                onMouseEnter={() => {
                  setActiveCapId(cap.number);
                  setCursorType('project', 'EXPLORE ↗');
                }}
                onMouseLeave={() => setCursorType('default')}
                className={`group relative py-10 lg:py-14 transition-all duration-400 cursor-pointer ${
                  isAnySelected && !isSelected ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {/* Active blue left indicator line */}
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
                      {cap.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-4">
                    <motion.h3
                      animate={{ x: isSelected ? 10 : 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                        isSelected ? 'text-[#FAF9F6]' : 'text-[#FAF9F6]/85'
                      }`}
                    >
                      {cap.title}
                    </motion.h3>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="col-span-5 space-y-2">
                    <p
                      className={`font-sans text-sm lg:text-base leading-relaxed transition-colors duration-300 ${
                        isSelected ? 'text-[#FAF9F6]/90' : 'text-[#888888]'
                      }`}
                    >
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cap.deliverables.map((del) => (
                        <span
                          key={del}
                          className="px-2 py-0.5 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#FAF9F6]/75 uppercase rounded"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Action Indicator */}
                  <div className="col-span-2 flex justify-end">
                    <motion.div
                      animate={{
                        x: isSelected ? 6 : 0,
                        backgroundColor: isSelected ? '#0066FF' : 'rgba(255,255,255,0.03)',
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

        {/* Floating Contextual Visual on Desktop (Follows Cursor) */}
        <AnimatePresence>
          {isHoveringList && activeCapability && (
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
              className="hidden md:block absolute top-0 left-0 z-30 w-[360px] lg:w-[400px] h-[240px] lg:h-[270px] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#111111]"
            >
              <div className="relative w-full h-full">
                <img
                  src={activeCapability.image}
                  alt={activeCapability.title}
                  className="w-full h-full object-cover grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px]">
                  <span className="uppercase tracking-widest text-[#0066FF] font-bold">
                    {activeCapability.number} / {activeCapability.title}
                  </span>
                  <span className="text-white/60">CAPABILITY SPEC</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden divide-y divide-[#ffffff15] border-t border-[#ffffff15]">
          {service.capabilities.map((cap) => {
            const isExpanded = expandedMobileId === cap.number;

            return (
              <div key={cap.number} className="py-6">
                <button
                  type="button"
                  onClick={() => setExpandedMobileId(isExpanded ? null : cap.number)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#0066FF]">
                      {cap.number}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-[#FAF9F6] tracking-tight">
                      {cap.title}
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
                      <div className="pt-5 space-y-4">
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10">
                          <img
                            src={cap.image}
                            alt={cap.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="text-sm text-[#FAF9F6]/80 leading-relaxed font-sans">
                          {cap.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {cap.deliverables.map((del) => (
                            <span
                              key={del}
                              className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FAF9F6]/90 rounded"
                            >
                              {del}
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
    </section>
  );
};
