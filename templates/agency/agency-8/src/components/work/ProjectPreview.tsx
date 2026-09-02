import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { WorkProject } from '../../data/workProjectsData';
import { CursorType } from '../../types';

interface ProjectPreviewProps {
  projects: WorkProject[];
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  projects,
  onNavigate,
  setCursorType,
}) => {
  // Use first 8 projects for the kinetic typography index
  const previewList = projects.slice(0, 8);
  const [activeProject, setActiveProject] = useState<WorkProject>(previewList[0]);
  const [isHoveringList, setIsHoveringList] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse coordinate tracker for floating cursor-following image on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    setIsTouch(checkTouch());

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleRowHover = (proj: WorkProject) => {
    setActiveProject(proj);
    setIsHoveringList(true);
    setCursorType('project', 'VIEW ↗');
  };

  const handleRowLeave = () => {
    setIsHoveringList(false);
    setCursorType('default');
  };

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                INTERACTIVE ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#FAF9F6] tracking-tight uppercase">
              Project Index
            </h2>
          </div>

          <p className="text-xs font-mono text-[#888888] uppercase tracking-widest max-w-xs">
            Hover title on desktop to reveal art-directed visual artifacts.
          </p>
        </div>

        {/* Project List / Index Rows */}
        <div className="border-t border-[#ffffff15] divide-y divide-[#ffffff10]">
          {previewList.map((project, idx) => {
            const isSelected = activeProject.id === project.id;

            return (
              <div
                key={project.id}
                id={`preview-row-${project.slug}`}
                onClick={() => onNavigate(`/work/${project.slug}`)}
                onMouseEnter={() => handleRowHover(project)}
                onMouseLeave={handleRowLeave}
                className="group relative py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-all duration-300 hover:px-4 rounded-xl hover:bg-white/[0.02]"
              >
                {/* Left: Index Number & Title */}
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="font-mono text-xs sm:text-sm text-[#888888] group-hover:text-[#0066FF] transition-colors duration-300 w-8">
                    0{idx + 1}
                  </span>

                  <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#FAF9F6] group-hover:text-white uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Center / Right Metadata */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-12 pl-14 md:pl-0">
                  <div className="text-left md:text-right space-y-0.5">
                    <span className="block text-xs sm:text-sm font-mono text-[#FAF9F6] font-medium group-hover:text-[#0066FF] transition-colors">
                      {project.categoryDisplay}
                    </span>
                    <span className="block text-[11px] font-mono text-[#888888]">
                      {project.client} // {project.year}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#ffffff18] flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                {/* Mobile Preview Image Inline (for touch devices) */}
                {isTouch && isSelected && (
                  <div className="md:hidden mt-4 rounded-xl overflow-hidden aspect-[16/9] border border-white/15">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Floating Image Follower */}
      {!isTouch && (
        <motion.div
          className="fixed pointer-events-none z-40 top-0 left-0 w-[420px] aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 bg-[#111115]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: isHoveringList ? 1 : 0,
            scale: isHoveringList ? 1 : 0.85,
          }}
          transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.25 } }}
        >
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover grayscale-[10%] contrast-[110%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white pointer-events-none">
            <span className="font-bold tracking-widest uppercase">{activeProject.title}</span>
            <span className="text-[#0066FF] font-semibold">{activeProject.categoryDisplay}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};
