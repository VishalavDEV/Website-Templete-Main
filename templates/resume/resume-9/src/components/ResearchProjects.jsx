import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/researchData';
import { ArrowRight, Calendar, Tag, Layers, X, Sparkles, Database, Check } from 'lucide-react';

export default function ResearchProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 03 &bull; FIVE SELECTED FICTIONAL RESEARCH INITIATIVES
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
              03 / PROJECTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
              Selected Research
            </h2>
          </div>
          <p className="text-sm text-[#6B7280] max-w-md font-light">
            Empirical inquiry frameworks examining human decision processes, attentional dynamics, and social signals. All study models presented are fictional demonstration projects.
          </p>
        </div>

        {/* PROJECTS LIST WITH ALTERNATING EDITORIAL LAYOUTS */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E6E6E0] shadow-paper overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* PROJECT VISUAL WITH HORIZONTAL MASK ASPECT */}
                  <div className={`lg:col-span-6 relative overflow-hidden bg-[#F5F3EF] min-h-[300px] lg:min-h-[400px] ${isEven ? '' : 'lg:order-2'}`}>
                    <img
                      src={project.visual}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter contrast-[102%] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 border border-[#E6E6E0]">
                      <span className="font-mono-tag text-[10px] text-[#1E1B4B] font-semibold">
                        {project.code}
                      </span>
                    </div>
                  </div>

                  {/* PROJECT EDITORIAL CONTENT */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    
                    <div className="space-y-4">
                      {/* METADATA TAGS */}
                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <span className="flex items-center space-x-1.5 font-mono-tag text-[#4A6B5D] bg-[#E8EFEB] px-2.5 py-1 rounded-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{project.year}</span>
                        </span>

                        <span className="flex items-center space-x-1.5 font-mono-tag text-[#2A2F45] bg-[#EEECF8] px-2.5 py-1 rounded-sm">
                          <Tag className="w-3.5 h-3.5" />
                          <span>{project.focus}</span>
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B4B] leading-tight">
                        {project.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-base text-[#4B5563] leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* SUMMARY */}
                      <p className="text-xs text-[#6B7280] leading-relaxed bg-[#FAFAFA] p-4 border-l-2 border-[#1E1B4B]">
                        {project.summary}
                      </p>

                      {/* METHODOLOGY LIST */}
                      <div className="space-y-2 pt-2">
                        <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase tracking-wider block">
                          FICTIONAL METHODOLOGY
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.methods.map((method, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#F4F4F3] text-[#1E1B4B] px-3 py-1 rounded-full border border-[#E6E6E0] font-mono-tag"
                            >
                              &bull; {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <div className="pt-4 border-t border-[#E6E6E0]">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] hover:text-[#4A6B5D] group"
                      >
                        <span>Explore Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* PROJECT EXPLORE MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1B4B]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="bg-white border border-[#E6E6E0] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-[#6B7280] hover:text-[#1E1B4B] rounded-full border border-[#E6E6E0]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                <div>
                  <span className="font-mono-tag text-xs text-[#4A6B5D] uppercase tracking-widest font-semibold block mb-1">
                    {selectedProject.code} &bull; RESEARCH SPECIFICATION
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B4B]">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2 font-mono-tag text-xs text-[#6B7280]">
                    <span>YEAR: {selectedProject.year}</span>
                    <span>&bull;</span>
                    <span>FOCUS: {selectedProject.focus}</span>
                  </div>
                </div>

                {/* VISUAL PREVIEW */}
                <div className="relative aspect-video bg-[#F5F3EF] overflow-hidden border border-[#E6E6E0]">
                  <img
                    src={selectedProject.visual}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* HYPOTHESIS & FINDINGS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-[#FAFAFA] border border-[#E6E6E0] space-y-2">
                    <span className="font-mono-tag text-xs font-semibold text-[#1E1B4B] uppercase flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" />
                      <span>Primary Hypothesis</span>
                    </span>
                    <p className="text-xs text-[#4B5563] leading-relaxed italic">
                      "{selectedProject.details.hypothesis}"
                    </p>
                  </div>

                  <div className="p-5 bg-[#EEECF8]/50 border border-[#E6E6E0] space-y-2">
                    <span className="font-mono-tag text-xs font-semibold text-[#1E1B4B] uppercase flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#2A2F45]" />
                      <span>Key Empirical Finding</span>
                    </span>
                    <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                      {selectedProject.details.findings}
                    </p>
                  </div>
                </div>

                {/* DATASET SPECIFICATION */}
                <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#4A6B5D] flex items-center space-x-3">
                  <Database className="w-4 h-4 text-[#4A6B5D]" />
                  <span className="font-mono-tag text-xs text-[#1E1B4B]">
                    {selectedProject.details.fictionalDataset}
                  </span>
                </div>

                {/* CLOSE BUTTON */}
                <div className="pt-4 border-t border-[#E6E6E0] flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-[#1E1B4B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45]"
                  >
                    Close Detail View
                  </button>
                </div>

                <p className="font-mono-tag text-[10px] text-center text-[#9CA3AF]">
                  *All research metrics and findings shown are fictional demonstration data.
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
