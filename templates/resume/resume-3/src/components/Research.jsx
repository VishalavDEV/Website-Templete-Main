import React, { useState } from 'react';
import { RESEARCH_PROJECTS, TECHNICAL_PAPERS } from '../data/resumeData';
import { BookOpen, FileText, FlaskConical, ExternalLink, X, Zap } from 'lucide-react';

export default function Research() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <section id="research" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>05 / RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Research &amp; <span className="text-sky-800">Innovation</span>
          </h2>
          <p className="text-slate-500 font-mono-tech text-xs mt-2 uppercase tracking-wider">
            ADVANCED FICTIONAL RESEARCH INITIATIVES &amp; PEER-REVIEWED TECHNICAL PUBLICATIONS.
          </p>
        </div>

        {/* Research Initiatives Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {RESEARCH_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between tech-corner-box group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-mono-tech font-bold text-sky-700 uppercase">
                    {project.code}
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block font-semibold">
                  KEY FINDINGS
                </span>
                {project.highlights.map((h, i) => (
                  <div key={i} className="text-xs font-sans text-slate-700 flex items-start space-x-2">
                    <Zap className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Technical Papers Section */}
        <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl border border-slate-800">
          <div className="flex items-center space-x-2 text-sky-400 font-mono-tech text-xs uppercase tracking-widest mb-6">
            <BookOpen className="w-4 h-4" />
            <span>SELECTED TECHNICAL PAPERS</span>
          </div>

          <div className="divide-y divide-slate-800">
            {TECHNICAL_PAPERS.map((paper, idx) => (
              <div
                key={idx}
                className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono-tech text-sky-400 font-bold">[{paper.year}]</span>
                    <h4 className="text-base font-heading font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      "{paper.title}"
                    </h4>
                  </div>
                  <p className="text-xs font-mono-tech text-slate-400">
                    {paper.journal} • DOI: {paper.doi}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPaper(paper)}
                  className="self-start sm:self-center inline-flex items-center space-x-1.5 bg-slate-800 hover:bg-sky-600 text-white font-mono-tech text-xs uppercase tracking-wider px-3.5 py-2 rounded transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Abstract</span>
                </button>
              </div>
            ))}
          </div>

          {/* Mandatory Fictional Disclaimer Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs font-mono-tech text-slate-400 italic">
            "All research projects and publication titles displayed in this template are fictional demonstration content."
          </div>
        </div>

      </div>

      {/* Technical Paper Abstract Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-sky-400" />
                <span className="font-mono-tech text-xs text-sky-400 font-bold uppercase">
                  ABSTRACT // {selectedPaper.year}
                </span>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-heading font-bold text-white">
                "{selectedPaper.title}"
              </h3>
              <p className="text-xs font-mono-tech text-sky-300">
                Published in: {selectedPaper.journal}
              </p>
              <div className="p-4 bg-slate-950 rounded border border-slate-800 text-sm text-slate-300 leading-relaxed font-sans">
                {selectedPaper.abstract}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono-tech text-slate-500">
              <span>DOI: {selectedPaper.doi}</span>
              <button
                onClick={() => setSelectedPaper(null)}
                className="px-4 py-2 bg-sky-600 text-white rounded font-bold uppercase tracking-wider text-xs"
              >
                Close Abstract
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
