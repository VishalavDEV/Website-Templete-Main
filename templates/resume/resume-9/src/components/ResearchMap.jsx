import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { researchAreas } from '../data/researchData';
import { X, ArrowUpRight, HelpCircle, Layers, CheckCircle2, FileText } from 'lucide-react';

export default function ResearchMap() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section id="research" className="py-24 bg-white border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute right-8 top-24 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-r border-[#E6E6E0] pr-3 text-right">
        SEC 02 &bull; INTERACTIVE COGNITIVE & BEHAVIORAL MAP
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION TITLE */}
        <div className="mb-12 space-y-2">
          <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
            02 / RESEARCH
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
            Areas of Inquiry
          </h2>
          <p className="text-base text-[#6B7280] max-w-2xl font-light">
            Interactive research map connecting fundamental cognitive domains. Click any node to inspect fictional research questions, applied methodologies, and study models.
          </p>
        </div>

        {/* INTERACTIVE RESEARCH MAP GRAPH CONTAINER */}
        <div className="relative bg-[#FAFAFA] border border-[#E6E6E0] rounded-sm p-6 sm:p-12 min-h-[500px] lg:min-h-[560px] flex items-center justify-center overflow-hidden notebook-grid shadow-paper">
          
          {/* SVG CONNECTING LINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2F45" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4A6B5D" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* CENTRAL LINES TO 4 CORNERS */}
            <g stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4">
              <line x1="50%" y1="50%" x2="50%" y2="20%" className={hoveredNode === 'decision-making' ? 'stroke-[#1E1B4B] stroke-2 stroke-none' : ''} />
              <line x1="50%" y1="50%" x2="80%" y2="50%" className={hoveredNode === 'cognitive-adaptation' ? 'stroke-[#1E1B4B] stroke-2 stroke-none' : ''} />
              <line x1="50%" y1="50%" x2="50%" y2="80%" className={hoveredNode === 'social-behavior' ? 'stroke-[#1E1B4B] stroke-2 stroke-none' : ''} />
              <line x1="50%" y1="50%" x2="20%" y2="50%" className={hoveredNode === 'human-technology' ? 'stroke-[#1E1B4B] stroke-2 stroke-none' : ''} />
            </g>

            {/* CIRCULAR BACKGROUND RADIAL RINGS */}
            <circle cx="50%" cy="50%" r="140" stroke="#E6E6E0" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="220" stroke="#EEECF8" strokeWidth="1" fill="none" />
          </svg>

          {/* CENTRAL NODE: HUMAN BEHAVIOR */}
          <motion.div
            className="relative z-10 w-40 h-40 rounded-full bg-[#1E1B4B] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-mono-tag text-[9px] uppercase tracking-widest text-[#EEECF8] mb-1">
              CORE CONCEPT
            </span>
            <h3 className="font-serif text-lg font-bold leading-tight">
              HUMAN<br />BEHAVIOR
            </h3>
            <span className="font-mono-tag text-[8px] text-[#9CA3AF] mt-1">
              INQUIRY CENTER
            </span>
          </motion.div>

          {/* NODE 1: DECISION-MAKING (TOP) */}
          <motion.div
            className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 z-20"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredNode('decision-making')}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <button
              onClick={() => setSelectedArea(researchAreas[0])}
              className="bg-white border border-[#E6E6E0] p-4 rounded-sm shadow-paper hover:border-[#1E1B4B] transition-all text-left max-w-xs group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tag text-[10px] text-[#4A6B5D] font-semibold">01 / DECISION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#1E1B4B] transition-colors" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E1B4B] group-hover:text-[#2A2F45]">
                DECISION-MAKING
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                How people evaluate choices and uncertainty.
              </p>
            </button>
          </motion.div>

          {/* NODE 2: COGNITIVE ADAPTATION (RIGHT) */}
          <motion.div
            className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredNode('cognitive-adaptation')}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <button
              onClick={() => setSelectedArea(researchAreas[1])}
              className="bg-white border border-[#E6E6E0] p-4 rounded-sm shadow-paper hover:border-[#1E1B4B] transition-all text-left max-w-xs group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tag text-[10px] text-[#4A6B5D] font-semibold">02 / ADAPTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#1E1B4B] transition-colors" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E1B4B] group-hover:text-[#2A2F45]">
                COGNITIVE ADAPTATION
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                How people adjust to changing environments.
              </p>
            </button>
          </motion.div>

          {/* NODE 3: SOCIAL BEHAVIOR (BOTTOM) */}
          <motion.div
            className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredNode('social-behavior')}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <button
              onClick={() => setSelectedArea(researchAreas[2])}
              className="bg-white border border-[#E6E6E0] p-4 rounded-sm shadow-paper hover:border-[#1E1B4B] transition-all text-left max-w-xs group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tag text-[10px] text-[#4A6B5D] font-semibold">03 / SOCIAL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#1E1B4B] transition-colors" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E1B4B] group-hover:text-[#2A2F45]">
                SOCIAL BEHAVIOR
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                How groups influence individual decisions.
              </p>
            </button>
          </motion.div>

          {/* NODE 4: HUMAN-TECHNOLOGY INTERACTION (LEFT) */}
          <motion.div
            className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredNode('human-technology')}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <button
              onClick={() => setSelectedArea(researchAreas[3])}
              className="bg-white border border-[#E6E6E0] p-4 rounded-sm shadow-paper hover:border-[#1E1B4B] transition-all text-left max-w-xs group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-tag text-[10px] text-[#4A6B5D] font-semibold">04 / DIGITAL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#1E1B4B] transition-colors" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E1B4B] group-hover:text-[#2A2F45]">
                HUMAN-TECH INTERACTION
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                How digital environments influence attention.
              </p>
            </button>
          </motion.div>

        </div>

        {/* BOTTOM QUICK AREA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {researchAreas.map((area, idx) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className="bg-[#FAFAFA] border border-[#E6E6E0] p-5 cursor-pointer hover:border-[#1E1B4B] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-[10px] text-[#9CA3AF]">
                  AREA 0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-[#4A6B5D] group-hover:underline">
                  Inspect &rarr;
                </span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#1E1B4B]">
                {area.title}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {area.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* DETAIL MODAL / DRAWER FOR RESEARCH AREA */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1B4B]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[#E6E6E0] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-6 right-6 p-2 text-[#6B7280] hover:text-[#1E1B4B] rounded-full border border-[#E6E6E0]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="font-mono-tag text-xs text-[#4A6B5D] uppercase tracking-widest font-semibold block mb-1">
                    RESEARCH DOMAIN SPECIFICATION
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#1E1B4B]">
                    {selectedArea.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mt-1 italic">
                    "{selectedArea.subtitle}"
                  </p>
                </div>

                {/* RESEARCH QUESTION */}
                <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#1E1B4B]">
                  <div className="flex items-center space-x-2 text-[#1E1B4B] mb-1">
                    <HelpCircle className="w-4 h-4 text-[#4A6B5D]" />
                    <span className="font-mono-tag text-xs font-semibold uppercase">
                      Central Research Question
                    </span>
                  </div>
                  <p className="font-serif text-base italic text-[#1E1B4B]">
                    "{selectedArea.question}"
                  </p>
                </div>

                {/* APPLIED METHODS */}
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1E1B4B] mb-2 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#4A6B5D]" />
                    <span>Applied Fictional Methodology</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedArea.methods.map((method, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-[#4B5563]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B5D]" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KEY AREA INTEREST */}
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1E1B4B] mb-1">
                    Key Interest & Conceptual Focus
                  </h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {selectedArea.keyInterest}
                  </p>
                </div>

                {/* FICTIONAL PROJECT LINK */}
                <div className="pt-4 border-t border-[#E6E6E0] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#2A2F45]" />
                    <span className="font-mono-tag text-xs text-[#1E1B4B] font-medium">
                      Related Study: {selectedArea.projectExample}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedArea(null)}
                    className="px-4 py-2 bg-[#1E1B4B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45]"
                  >
                    Close Panel
                  </button>
                </div>

                <p className="font-mono-tag text-[10px] text-center text-[#9CA3AF]">
                  *Fictional demonstration research domain model.
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
