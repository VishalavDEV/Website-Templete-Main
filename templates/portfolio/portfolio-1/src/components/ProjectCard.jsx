import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function ProjectCard({ project, onImageClick }) {
  return (
    <div className="group flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 py-12 border-b border-navy/5 items-center">
      {/* Blueprint / Sketch Side */}
      <motion.div 
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-12 md:col-span-5 w-full aspect-[4/3] bg-white blueprint-bg border border-[#1a2b4a]/10 p-6 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="text-[10px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase">FL-PLAN SKETCH // STRUCTURAL DATA</div>
        <img 
          src={project.blueprint} 
          alt="Blueprint sketch" 
          className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-25 group-hover:scale-102 transition-transform duration-700 pointer-events-none"
        />
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto z-10">
          <div>
            <div className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase font-bold">AREA</div>
            <div className="text-xs font-sans font-medium text-[#1a2b4a]">{project.specs.area}</div>
          </div>
          <div>
            <div className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase font-bold">YEAR</div>
            <div className="text-xs font-sans font-medium text-[#1a2b4a]">{project.specs.year}</div>
          </div>
          <div>
            <div className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase font-bold">LOCATION</div>
            <div className="text-xs font-sans font-medium text-[#1a2b4a]">{project.specs.location}</div>
          </div>
        </div>
      </motion.div>

      {/* Photography Side */}
      <motion.div 
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-12 md:col-span-7 w-full flex flex-col gap-4"
      >
        <div 
          onClick={() => onImageClick(project.images, 0)}
          className="relative aspect-[16/10] bg-zinc-100 overflow-hidden cursor-pointer group/img"
        >
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2b4a]/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/95 text-[#1a2b4a] px-4 py-2 text-xs font-sans tracking-widest uppercase flex items-center gap-2 rounded-sm shadow-md font-semibold transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
              <Maximize2 size={12} /> Expand Gallery
            </div>
          </div>
        </div>
        
        {/* Project details below */}
        <div className="mt-2 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="max-w-xl">
            <h3 className="text-2xl font-light text-[#1a2b4a] tracking-tight">{project.title}</h3>
            <p className="mt-2 text-sm text-[#1a2b4a]/75 leading-relaxed font-sans">{project.description}</p>
          </div>
          <div className="border-l border-[#1a2b4a]/10 pl-4 py-1 flex-shrink-0">
            <span className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase block mb-1">MATERIALS</span>
            <p className="text-xs font-sans font-medium text-[#1a2b4a]/80 max-w-[200px] leading-tight">{project.specs.materials}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
