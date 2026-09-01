import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Hammer, Settings } from 'lucide-react';

export default function GalleryModal({ isOpen, project, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#05070f]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
      >
        {/* Backdrop close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Sheet */}
        <motion.div
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative bg-[#0d1326] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl flex flex-col md:grid md:grid-cols-12 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-white/10 text-white/70 hover:text-white transition-colors z-20 border border-white/5"
          >
            <X size={18} />
          </button>

          {/* Left: Project Image */}
          <div className="col-span-12 md:col-span-7 aspect-video md:aspect-auto md:h-full relative overflow-hidden bg-slate-900 flex items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1326] via-transparent to-transparent md:hidden" />
          </div>

          {/* Right: Project Specs & Description */}
          <div className="col-span-12 md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans tracking-widest text-[#4da6ff] uppercase font-bold px-2.5 py-1 rounded-full bg-[#4da6ff]/10 border border-[#4da6ff]/15 inline-block mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h3>
              
              <p className="mt-4 text-xs font-sans text-slate-300 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Spec items list */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <User size={14} className="text-[#4da6ff]" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-slate-500 uppercase font-bold">MY ROLE</div>
                  <div className="text-xs text-slate-300 font-sans">{project.specs.role}</div>
                </div>
              </div>

              {project.specs.stack && (
                <div className="flex items-center gap-3">
                  <Hammer size={14} className="text-[#4da6ff]" />
                  <div>
                    <div className="text-[9px] font-sans tracking-widest text-slate-500 uppercase font-bold">TECH STACK</div>
                    <div className="text-xs text-slate-300 font-sans">{project.specs.stack}</div>
                  </div>
                </div>
              )}

              {project.specs.tools && (
                <div className="flex items-center gap-3">
                  <Settings size={14} className="text-[#4da6ff]" />
                  <div>
                    <div className="text-[9px] font-sans tracking-widest text-slate-500 uppercase font-bold">CREATIVE TOOLS</div>
                    <div className="text-xs text-slate-300 font-sans">{project.specs.tools}</div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-[#4da6ff]" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-slate-500 uppercase font-bold">YEAR</div>
                  <div className="text-xs text-slate-300 font-sans">{project.specs.year}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
