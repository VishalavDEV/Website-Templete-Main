import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { WorkProject } from '../../data/workProjectsData';
import { CursorType } from '../../types';

interface HorizontalProjectsProps {
  projects: WorkProject[];
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const HorizontalProjects: React.FC<HorizontalProjectsProps> = ({
  projects,
  onNavigate,
  setCursorType,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Take a curated selection of 5-6 projects for horizontal spotlight
  const spotlightProjects = projects.slice(1, 7);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-y border-[#ffffff10] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                CURATED SPOTLIGHT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FAF9F6] tracking-tight uppercase leading-[0.95]">
              A FEW<br />
              THINGS WE’RE<br />
              <span className="text-[#0066FF]">PROUD OF.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-sm sm:text-base text-[#888888] max-w-md font-normal leading-relaxed">
              Explorations pushing the boundaries of interaction design, spatial computing, and high-frequency digital commerce.
            </p>

            {/* Navigation Buttons for the horizontal strip */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={scrollLeft}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="w-12 h-12 rounded-full border border-[#ffffff18] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-[#FAF9F6] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="w-12 h-12 rounded-full border border-[#ffffff18] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-[#FAF9F6] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Project Strip */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-8 lg:px-12 py-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        {spotlightProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => onNavigate(`/work/${project.slug}`)}
            onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="group relative flex-none w-[320px] sm:w-[420px] lg:w-[500px] snap-start cursor-pointer rounded-2xl overflow-hidden bg-[#0e0e12] border border-[#ffffff14] hover:border-[#0066FF]/60 transition-all duration-500 shadow-2xl select-none"
          >
            {/* Visual Container */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#141418]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-black/30 pointer-events-none" />

              {/* Tag pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase">
                  {project.categoryDisplay}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#888888]">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#0066FF] tracking-widest uppercase font-semibold">
                  {project.client}
                </span>
                <span className="text-[#888888] tracking-wider uppercase">
                  {project.industryDisplay}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF9F6] group-hover:text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="w-9 h-9 rounded-full border border-[#ffffff15] flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#0066FF] group-hover:rotate-45 transition-transform" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#888888] line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-8">
        <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0066FF] transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
