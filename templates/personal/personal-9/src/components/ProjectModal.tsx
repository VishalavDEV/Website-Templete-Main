import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">{project.title}</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-left space-y-6">
          {/* Banner Image */}
          <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Overview</h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.overview || project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">{metric.value}</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Architectural Highlights</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Tech Stack & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
