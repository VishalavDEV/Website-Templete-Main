import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export const HomeSelectedWork: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const activeProject = PROJECTS.find((p) => p.slug === hoveredProject) || PROJECTS[0];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#CFC7BE]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#CFC7BE]">
        <div>
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-2">
            // 01 — SELECTED WORK
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight uppercase text-[#2B2727]">
            IDEAS TURNED IMPOSSIBLE TO IGNORE.
          </h2>
        </div>

        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase hover:text-[#D65F3F] transition-colors"
          data-cursor="link"
        >
          <span>EXPLORE ALL PROJECTS ({PROJECTS.length})</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Editorial Project List Container */}
      <div className="relative space-y-0">
        {PROJECTS.slice(0, 5).map((project, idx) => {
          const numberFormatted = `0${idx + 1}`;
          const isHovered = hoveredProject === project.slug;

          return (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group block border-b border-[#CFC7BE] py-10 transition-colors hover:bg-[#FAF7F1]/80 px-4 md:px-8 relative"
              data-cursor="project"
              data-cursor-text="VIEW →"
            >
              <div className="grid grid-cols-12 items-center gap-4">
                {/* Number */}
                <div className="col-span-2 md:col-span-1 font-mono text-sm text-[#77716D] group-hover:text-[#D65F3F] transition-colors">
                  {numberFormatted}
                </div>

                {/* Project Title */}
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-[#2B2727] group-hover:translate-x-3 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Category tags */}
                <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 font-mono text-xs text-[#77716D] uppercase tracking-wider">
                  {project.category.join(' / ')}
                </div>

                {/* Year & Arrow */}
                <div className="hidden md:flex col-span-2 items-center justify-end gap-4 font-mono text-sm text-[#77716D]">
                  <span>{project.year}</span>
                  <div className="w-10 h-10 rounded-full border border-[#CFC7BE] flex items-center justify-center group-hover:bg-[#D65F3F] group-hover:border-[#D65F3F] group-hover:text-[#FAF7F1] transition-all">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Hover Floating Image Revealer (Desktop) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 20,
              y: mousePos.y - 140
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.3 }}
            className="hidden lg:block absolute pointer-events-none z-30 w-[380px] bg-[#332832] p-3 text-[#FAF7F1] shadow-2xl border border-[#FAF7F1]/20"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-3">
              <img
                src={activeProject.heroImage}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#2B2727]/80 text-[#FAF7F1] font-mono text-[10px] px-2 py-1 uppercase">
                {activeProject.client}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[11px] text-[#B8A8BD]">
                <span>{activeProject.category.join(' / ')}</span>
                <span>{activeProject.year}</span>
              </div>
              <p className="text-xs text-[#FAF7F1] line-clamp-2 leading-relaxed font-sans">
                {activeProject.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
