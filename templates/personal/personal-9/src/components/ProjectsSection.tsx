import React, { useState, useRef } from 'react';
import { ArrowRight, Github, ExternalLink, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  darkMode: boolean;
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  darkMode,
  onSelectProject,
  onViewAllProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'AI', 'ML', 'Web', 'Computer Vision', 'Generative AI'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getBadgeStyle = (badge: 'LIVE' | 'PROTOTYPE' | 'EXPERIMENT') => {
    switch (badge) {
      case 'LIVE':
        return 'bg-emerald-500 text-white shadow-xs';
      case 'PROTOTYPE':
        return 'bg-indigo-600 text-white shadow-xs';
      case 'EXPERIMENT':
        return 'bg-amber-500 text-white shadow-xs';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <section
      id="projects"
      className={`py-16 scroll-mt-24 transition-colors relative ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="flex flex-col items-start text-left">
            <span
              id="projects-eyebrow-tag"
              className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
            >
              FEATURED PROJECTS
            </span>
            <h2
              id="projects-main-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white"
            >
              Things I've Built
            </h2>
            <p
              className={`text-sm sm:text-base max-w-xl font-normal ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              A selection of projects where AI meets real-world problems and creates real impact.
            </p>
          </div>

          {/* View All Projects link on right */}
          <button
            id="view-all-projects-btn"
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors cursor-pointer group shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm font-bold'
                    : darkMode
                      ? 'bg-[#111827] border border-gray-800 text-gray-400 hover:text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Carousel Container */}
        <div className="relative group">
          {/* Scrollable Project Cards Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`snap-start shrink-0 w-[290px] sm:w-[320px] md:w-[345px] rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  darkMode
                    ? 'bg-[#111827] border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-100 shadow-xs hover:border-gray-200'
                }`}
              >
                {/* Card Image Area with Status Badge */}
                <div
                  className="relative h-44 w-full overflow-hidden bg-gray-950 group/img cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  
                  {/* Status Badge in Upper Left Corner */}
                  <span
                    className={`absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${getBadgeStyle(
                      project.badge
                    )}`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 text-left justify-between">
                  <div>
                    {/* Project Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-bold text-base tracking-tight mb-1.5 cursor-pointer hover:text-indigo-600 transition-colors text-gray-900 dark:text-white"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-xs leading-relaxed line-clamp-2 mb-4 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                            darkMode
                              ? 'bg-gray-800/80 border-gray-700 text-gray-300'
                              : 'bg-gray-50 border-gray-200 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-[11px]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </button>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-[11px]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </button>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-[11px]"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button on carousel */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next Projects"
            className={`absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border shadow-md transition-all cursor-pointer ${
              darkMode
                ? 'bg-gray-900 border-gray-700 text-white hover:bg-gray-800'
                : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
