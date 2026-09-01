import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Calendar, Briefcase } from 'lucide-react';

export default function GalleryModal({ isOpen, project, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#fafafc]/95 flex items-center justify-center p-4 md:p-8 select-none font-sans"
      >
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Content Sheet */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 220 }}
          className="relative bg-white border border-zinc-200/80 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-lg flex flex-col md:grid md:grid-cols-12 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors z-20 border border-zinc-100"
          >
            <X size={16} />
          </button>

          {/* Left image column */}
          <div className="col-span-12 md:col-span-7 h-[250px] md:h-full relative overflow-hidden bg-zinc-50 border-r border-zinc-150">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right specs column */}
          <div className="col-span-12 md:col-span-5 p-8 flex flex-col justify-between text-[#262626]">
            <div>
              <span className="text-[10px] font-sans tracking-widest text-[#262626]/50 uppercase font-bold mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-serif tracking-tight leading-tight text-[#262626] mb-4">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed text-justify mt-4">
                {project.description}
              </p>
            </div>

            {/* Spec lines */}
            <div className="mt-12 pt-6 border-t border-zinc-150 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Briefcase size={14} className="text-zinc-400" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">ROLE</div>
                  <div className="text-xs text-zinc-700 font-sans">{project.specs.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={14} className="text-zinc-400" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">CLIENT</div>
                  <div className="text-xs text-zinc-700 font-sans">{project.specs.client}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-zinc-400" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-zinc-400 uppercase font-bold">YEAR</div>
                  <div className="text-xs text-zinc-700 font-sans">{project.specs.year}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
