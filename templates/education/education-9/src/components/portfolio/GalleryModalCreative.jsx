import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Calendar, Award } from 'lucide-react';

export default function GalleryModalCreative({ isOpen, project, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#2b2b2b]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 select-none font-sans"
      >
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Sheet */}
        <motion.div
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative bg-[#f5f5fb] border border-zinc-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl flex flex-col md:grid md:grid-cols-12 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-none bg-[#e74c3c] hover:bg-[#c0392b] text-white transition-colors z-20"
          >
            <X size={16} />
          </button>

          {/* Left Side Image with solid Red overlay geometric borders */}
          <div className="col-span-12 md:col-span-7 h-[250px] md:h-full relative overflow-hidden bg-zinc-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Outline shape */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-white/30 pointer-events-none" />
          </div>

          {/* Right Side Specs & Description */}
          <div className="col-span-12 md:col-span-5 p-8 flex flex-col justify-between text-[#2b2b2b]">
            <div>
              <span className="text-[10px] font-sans tracking-widest text-[#e74c3c] uppercase font-black mb-3 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-black tracking-tight leading-none text-[#2b2b2b] uppercase mb-4">
                {project.title}
              </h3>
              
              <p className="text-xs text-[#2b2b2b]/70 font-sans leading-relaxed text-justify mt-4">
                {project.description}
              </p>
            </div>

            {/* Spec lines */}
            <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <User size={14} className="text-[#e74c3c]" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-[#2b2b2b]/40 uppercase font-black">ROLE</div>
                  <div className="text-xs text-[#2b2b2b]/80 font-sans font-semibold">{project.specs.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award size={14} className="text-[#e74c3c]" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-[#2b2b2b]/40 uppercase font-black">CLIENT</div>
                  <div className="text-xs text-[#2b2b2b]/80 font-sans font-semibold">{project.specs.client}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-[#e74c3c]" />
                <div>
                  <div className="text-[9px] font-sans tracking-widest text-[#2b2b2b]/40 uppercase font-black">YEAR</div>
                  <div className="text-xs text-[#2b2b2b]/80 font-sans font-semibold">{project.specs.year}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
