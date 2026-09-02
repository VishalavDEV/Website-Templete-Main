import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Calendar, User, Clock, Sparkles } from 'lucide-react';
import { Project } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { GithubIcon } from '../common/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl z-10 bg-white text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 backdrop-blur-md transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cover Header Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.title}
              fallbackTitle={project.title}
              category={project.category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-600/30 text-blue-200 border border-blue-400/40 mb-3 backdrop-blur-md">
                <Sparkles className="w-3 h-3" />
                {project.category}
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-sans">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Project Meta Details Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                  Client / Company
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                  Year
                </span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                  My Role
                </span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-600" />
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                  Duration
                </span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Overview Story */}
            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold text-slate-900">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                  The Challenge
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  The Solution
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Outcomes & Metrics */}
            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold text-slate-900">
                Key Results & Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.results.map((res) => (
                  <div
                    key={res}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 border border-slate-200 text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote if present */}
            {project.testimonial && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-transparent border border-blue-200">
                <p className="italic text-sm text-slate-700 mb-4 font-medium">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {project.testimonial.author}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200 font-semibold text-xs text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                Close breakdown
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
