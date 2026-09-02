import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';
import { CursorType } from '../../types';

interface ServiceVisualProps {
  service: ServiceDetailConfig;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({
  service,
  setCursorType,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] px-4 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(10% 5% 10% 5% round 16px)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
          onMouseLeave={() => setCursorType('default')}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl group cursor-pointer"
        >
          <motion.img
            style={{ scale, y: yImage }}
            src={service.featuredImage}
            alt={service.title}
            className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

          {/* Top Left Metadata Badge */}
          <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/15 text-xs font-mono text-[#0066FF] uppercase tracking-widest pointer-events-none font-semibold">
            {service.featuredMetadata}
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#888888] block">
                EDITORIAL PERSPECTIVE
              </span>
              <p className="font-sans text-sm sm:text-base text-[#FAF9F6] font-medium">
                {service.featuredCaption}
              </p>
            </div>
            <span className="font-mono text-xs text-[#666666] uppercase tracking-wider">
              {service.number} // ARTIFACT ARCHIVE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
