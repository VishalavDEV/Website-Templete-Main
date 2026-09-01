import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  aspectOverride?: string;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, aspectOverride, isFeatured }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block w-full transition-transform duration-300 ease-out"
      style={{
        perspective: '1000px',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      data-cursor="VIEW"
    >
      <Link to={`/work/${project.id}`} className="block">
        {/* Card Image Container */}
        <div
          className={`relative w-full overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-900 shadow-lg ${
            aspectOverride || project.coverAspect || 'aspect-[16/10]'
          }`}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />

          {/* Hover Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Category Badge & Year */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs z-10">
            <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 uppercase tracking-widest text-[10px] font-bold">
              {project.category}
            </span>
            <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 text-[10px]">
              {project.year}
            </span>
          </div>

          {/* Bottom Card Content */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="font-mono text-[10px] uppercase text-blue-400 font-bold tracking-wider">
              {project.client}
            </div>
            <div className="flex items-center justify-between mt-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h3>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md group-hover:bg-blue-600 transition-colors">
                <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <p className="mt-1 text-xs text-neutral-300 line-clamp-2 font-light hidden sm:block">
              {project.tagline}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
