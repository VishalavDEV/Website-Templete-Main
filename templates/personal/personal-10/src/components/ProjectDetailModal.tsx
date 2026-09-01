import React from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { TaskFlowPreview, WanderlustPreview, ChronoShopPreview } from './ProjectPreviews';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const renderArtwork = (id: string) => {
    switch (id) {
      case 'taskflow':
        return <TaskFlowPreview />;
      case 'wanderlust':
        return <WanderlustPreview />;
      case 'chronoshop':
        return <ChronoShopPreview />;
      default:
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Preview Canvas */}
        <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-inner mb-6 relative">
          {renderArtwork(project.id)}
        </div>

        {/* Project Meta Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.detailedDescription || project.description}
          </p>

          {/* Key Feature Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Features & Architecture:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-medium text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
