import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';
import { CursorType } from '../../types';

interface NextServiceProps {
  service: ServiceDetailConfig;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const NextService: React.FC<NextServiceProps> = ({
  service,
  onNavigate,
  setCursorType,
}) => {
  const next = service.nextService;

  const handleClick = () => {
    onNavigate(`/services/${next.slug}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              CONTINUE EXPLORING
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
            CAPABILITY SEQUENCE
          </span>
        </div>

        {/* Big Interactive Next Capability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
          onMouseLeave={() => setCursorType('default')}
          className="group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/15 p-8 sm:p-14 lg:p-20 cursor-pointer shadow-2xl"
        >
          {/* Background image preview with smooth zoom on hover */}
          <div className="absolute inset-0 z-0">
            <img
              src={next.image}
              alt={next.title}
              className="w-full h-full object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[30%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0066FF] font-bold">
                  NEXT CAPABILITY // {next.number}
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#FAF9F6] tracking-tight group-hover:text-[#0066FF] transition-colors duration-300">
                {next.title}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#888888] max-w-xl group-hover:text-[#FAF9F6]/90 transition-colors duration-300">
                {next.tagline}
              </p>
            </div>

            {/* Action Bubble */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0066FF] group-hover:bg-[#0052cc] text-white flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
