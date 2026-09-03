import React from 'react';
import { CaseStudy } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: CaseStudy;
  onViewCaseStudy: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewCaseStudy }) => {
  return (
    <div
      id={`project-card-${project.id}`}
      className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      <div>
        {/* Project Thumbnail Image with Subtle Zoom */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white font-mono text-[11px] font-medium border border-white/15">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold">
              {project.clientIndustry}
            </span>
          </div>

          {/* Key Metric overlay at bottom of image */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-mono text-slate-300">{project.client}</span>
            <span className="text-xs font-bold text-emerald-300 bg-slate-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
              {project.metrics[0]?.value} {project.metrics[0]?.label}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech stack badges */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-slate-50 text-[10px] font-mono text-slate-600">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-auto">
        <span className="text-[11px] font-mono text-slate-600 font-medium">
          Deployed {project.year}
        </span>
        <button
          onClick={() => onViewCaseStudy(project.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
