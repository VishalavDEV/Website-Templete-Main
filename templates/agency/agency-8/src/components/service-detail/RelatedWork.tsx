import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceDetailConfig, ServiceRelatedProject } from '../../data/serviceDetailData';
import { CursorType } from '../../types';

interface RelatedWorkProps {
  service: ServiceDetailConfig;
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenProjectModal: () => void;
}

export const RelatedWork: React.FC<RelatedWorkProps> = ({
  service,
  setCursorType,
  onOpenProjectModal,
}) => {
  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              SELECTED EVIDENCE
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            03 FEATURED ARTIFACTS
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            {service.workHeading.line1} <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              {service.workHeading.line2}
            </span>
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#888888] font-sans">
            {service.workSubtitle}
          </p>
        </div>

        {/* Projects Grid: Asymmetric Editorial Composition */}
        <div className="space-y-24 sm:space-y-36">
          {service.selectedProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={onOpenProjectModal}
                onMouseEnter={() => setCursorType('project', 'VIEW CASE ↗')}
                onMouseLeave={() => setCursorType('default')}
                className="group cursor-pointer"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Asset Container */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Top Metric Badge if exists */}
                      {project.metrics && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/15 text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
                          {project.metrics}
                        </div>
                      )}

                      {/* Floating View Badge on Hover */}
                      <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#0066FF] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Narrative Info Container */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#0066FF] font-bold">
                        {project.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#FAF9F6] tracking-tight group-hover:text-[#0066FF] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-editorial italic text-lg sm:text-xl text-[#FAF9F6]/80 lowercase">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#888888] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#FAF9F6]/80 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
