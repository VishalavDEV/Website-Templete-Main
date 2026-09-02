import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/agencyData';
import { CursorType } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedServicesWorkProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onOpenProjectModal: () => void;
}

export const FeaturedServicesWork: React.FC<FeaturedServicesWorkProps> = ({
  setCursorType,
  onOpenProjectModal,
}) => {
  // Select first 3 featured projects (Aura, North, Form)
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-16 sm:mb-24">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              SELECTED CASE STUDIES
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            PROOF OF WORK / RECENT DELIVERABLES
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            DISCIPLINES <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              in action.
            </span>
          </motion.h2>
        </div>

        {/* Asymmetric Editorial Project Showcase */}
        <div className="space-y-24 sm:space-y-36">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image Showcase */}
                <div
                  className={`relative cursor-pointer group ${
                    isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
                  }`}
                  onClick={onOpenProjectModal}
                  onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                    {/* Metric badge if available */}
                    {project.metrics && (
                      <div className="absolute top-6 right-6 px-3.5 py-1.5 bg-black/75 backdrop-blur-md rounded-full border border-white/15 text-xs font-mono text-[#0066FF] font-semibold">
                        {project.metrics}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Text Meta */}
                <div
                  className={`space-y-6 ${
                    isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#0066FF] font-bold">
                        {project.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#FAF9F6] tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-base text-[#888888] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs font-mono text-[#FAF9F6]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onOpenProjectModal}
                      onMouseEnter={() => setCursorType('pointer')}
                      onMouseLeave={() => setCursorType('default')}
                      className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FAF9F6] hover:text-[#0066FF] transition-colors font-semibold cursor-pointer"
                    >
                      <span>VIEW PROJECT DETAILS</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#0066FF]" />
                    </button>
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
