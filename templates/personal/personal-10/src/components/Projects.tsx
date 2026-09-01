import React from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { TaskFlowPreview, WanderlustPreview, ChronoShopPreview } from './ProjectPreviews';
import { ReactIcon, NodeJsIcon, MongoDbIcon, TailwindIcon, TypeScriptIcon } from './TechIcons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onViewAllProjects }) => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  const renderProjectPreview = (id: string) => {
    switch (id) {
      case 'taskflow':
        return <TaskFlowPreview />;
      case 'wanderlust':
        return <WanderlustPreview />;
      case 'chronoshop':
        return <ChronoShopPreview />;
      default:
        return <TaskFlowPreview />;
    }
  };

  const renderTechIcon = (tech: string) => {
    switch (tech) {
      case 'react':
        return <ReactIcon className="w-5 h-5 text-sky-400" />;
      case 'nodejs':
        return <NodeJsIcon className="w-5 h-5 text-emerald-500" />;
      case 'mongodb':
        return <MongoDbIcon className="w-5 h-5 text-green-500" />;
      case 'tailwind':
        return <TailwindIcon className="w-5 h-5 text-cyan-400" />;
      case 'typescript':
        return <TypeScriptIcon className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects-section" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-3">
              Featured Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Selected Projects
            </h2>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm sm:text-base group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Preview Thumbnail Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="h-52 sm:h-56 w-full overflow-hidden bg-gray-950 cursor-pointer relative group/preview"
              >
                {renderProjectPreview(project.id)}
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center pointer-events-none backdrop-blur-2xs">
                  <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-md">
                    Open Project View ↗
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Pill Badge */}
                  <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack & Action Links */}
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  {/* Left: Tech Badges */}
                  <div className="flex items-center gap-1.5">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 border border-gray-200/60 dark:border-gray-700/60"
                        title={tech}
                      >
                        {renderTechIcon(tech)}
                      </div>
                    ))}
                  </div>

                  {/* Right: Live Demo & GitHub */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline transition-all cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
