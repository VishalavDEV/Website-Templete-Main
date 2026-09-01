import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { TaskFlowPreview, WanderlustPreview, ChronoShopPreview } from './ProjectPreviews';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  if (!isOpen) return null;

  const renderThumb = (project: Project) => {
    switch (project.id) {
      case 'taskflow':
        return <TaskFlowPreview />;
      case 'wanderlust':
        return <WanderlustPreview />;
      case 'chronoshop':
        return <ChronoShopPreview />;
      default:
        return (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-6">
          <div>
            <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-2">
              PORTFOLIO ARCHIVE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              All Projects & Works
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs"
            >
              <div
                onClick={() => {
                  onClose();
                  onSelectProject(project);
                }}
                className="h-44 w-full overflow-hidden bg-gray-950 cursor-pointer relative"
              >
                {renderThumb(project)}
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h4
                    onClick={() => {
                      onClose();
                      onSelectProject(project);
                    }}
                    className="font-bold text-lg text-gray-900 dark:text-white mt-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProject(project);
                    }}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details & Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
