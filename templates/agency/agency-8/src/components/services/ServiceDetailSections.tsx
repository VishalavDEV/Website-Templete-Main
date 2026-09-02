import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DETAILED_SERVICES, DetailedService } from '../../data/servicesData';
import { CursorType } from '../../types';

interface ServiceDetailSectionsProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenProjectModal: () => void;
  onNavigateDetail?: (slug: string) => void;
}

const ServiceSectionItem: React.FC<{
  service: DetailedService;
  index: number;
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenProjectModal: () => void;
  onNavigateDetail?: (slug: string) => void;
}> = ({ service, index, setCursorType, onOpenProjectModal, onNavigateDetail }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleCtaClick = () => {
    if (onNavigateDetail) {
      onNavigateDetail(service.slug);
    } else {
      onOpenProjectModal();
    }
  };

  return (
    <div
      id={`service-detail-${service.id}`}
      ref={containerRef}
      className="py-24 sm:py-36 border-t border-[#ffffff10] relative overflow-hidden"
    >
      {/* Subtle ambient spotlight for experimental / creative technology section */}
      {service.id === 'creative-technology' && (
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Index Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#0066FF]">
              {service.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              {service.name}
            </span>
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            {service.metadata}
          </span>
        </motion.div>

        {/* Asymmetric Content Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Left / Text Column (7 cols) */}
          <div className={`space-y-8 ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-[#FAF9F6] tracking-tight leading-[0.96]"
              >
                {service.largeStatement}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-base sm:text-lg text-[#888888] leading-relaxed max-w-xl"
              >
                {service.fullDesc}
              </motion.p>
            </div>

            {/* Capabilities Bullet/Tag Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 pt-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
                DELIVERABLES &amp; CAPABILITIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#FAF9F6]/90 bg-white/[0.02] border border-white/[0.08] px-3.5 py-2.5 rounded-sm hover:border-[#0066FF]/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <button
                type="button"
                onClick={handleCtaClick}
                onMouseEnter={() => setCursorType('button')}
                onMouseLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-white/[0.04] hover:bg-white text-xs font-mono uppercase tracking-widest text-[#FAF9F6] hover:text-black border border-[#ffffff15] hover:border-white rounded-full transition-all duration-300 cursor-pointer font-bold"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Right / Visual Column (6 cols) with subtle Parallax */}
          <div className={`${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'}`}>
            <motion.div
              style={{ y: yParallax }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
              onMouseLeave={() => setCursorType('default')}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#111111] border border-white/15 shadow-2xl group cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Image Overlay Details */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                    SAMPLE OUTPUT / BENCHMARK
                  </span>
                  <p className="text-xs sm:text-sm text-[#FAF9F6] font-semibold">
                    {service.relatedProject}
                  </p>
                </div>
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase rounded-full">
                  FIG. {service.number}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceDetailSections: React.FC<ServiceDetailSectionsProps> = ({
  setCursorType,
  onOpenProjectModal,
  onNavigateDetail,
}) => {
  return (
    <section className="bg-[#080808]">
      {DETAILED_SERVICES.map((service, idx) => (
        <ServiceSectionItem
          key={service.id}
          service={service}
          index={idx}
          setCursorType={setCursorType}
          onOpenProjectModal={onOpenProjectModal}
          onNavigateDetail={onNavigateDetail}
        />
      ))}
    </section>
  );
};
