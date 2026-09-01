import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  className?: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectRatio = 'landscape',
  className = '',
  index = 0
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/10]',
    wide: 'aspect-[21/9]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className={`group relative flex flex-col ${className}`}
    >
      <Link to={`/work/${project.id}`} className="block overflow-hidden rounded-2xl bg-[#EAE6DF] relative">
        <div className={`w-full ${aspectClasses[aspectRatio]} overflow-hidden relative`}>
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs uppercase tracking-widest text-[#D96B43] bg-white/90 px-3 py-1 rounded-full font-semibold mb-2 inline-block">
                {project.category}
              </span>
              <p className="text-sm text-gray-200 line-clamp-2 mt-1">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Floating Action Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#1A1918] flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-[#D96B43] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#6B6863] font-medium mb-1">
            <span>{project.client}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <Link to={`/work/${project.id}`}>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#1A1918] group-hover:text-[#D96B43] transition-colors duration-300 flex items-center">
              {project.title}
            </h3>
          </Link>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#EAE6DF] text-[#6B6863]">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};
