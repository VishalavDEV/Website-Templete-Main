import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  Award,
  TrendingUp,
  CheckCircle2,
  Layers,
  Sparkles,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl text-white p-6 sm:p-10 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            id="project-modal-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-950/80 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 border border-neutral-800 transition-colors z-20 shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Header Metadata */}
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3 flex-wrap">
            <span className="text-amber-400 font-semibold px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
              {project.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {project.year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {project.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User size={13} />
              {project.client}
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-mono text-neutral-300 mb-6">
            {project.subtitle}
          </p>

          {/* 4K Hero Project Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 border border-neutral-800 shadow-2xl relative bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-center"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-400">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans mb-8">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Executive Overview & Architecture
              </h3>
              <p>{project.fullStory}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-bold mb-2">
                  The Engineering Challenge
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-bold mb-2">
                  The Architectural Solution
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 1 && (
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Additional Visual Artifacts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800">
                      <img src={img} alt="Gallery artifact" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="font-display font-bold text-base text-white mb-3">
                Full Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs border border-neutral-800 transition-all flex items-center gap-2"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white"
            >
              Close Window (ESC)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
