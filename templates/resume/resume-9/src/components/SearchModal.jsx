import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { publications, projects, researchNotes } from '../data/researchData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredPubs = query.trim()
    ? publications.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.abstract.toLowerCase().includes(query.toLowerCase()) || p.journal.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredProjects = query.trim()
    ? projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()) || p.focus.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredNotes = query.trim()
    ? researchNotes.filter(n => n.quote.toLowerCase().includes(query.toLowerCase()) || n.annotation.toLowerCase().includes(query.toLowerCase()))
    : [];

  const hasResults = filteredPubs.length > 0 || filteredProjects.length > 0 || filteredNotes.length > 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#1E1B4B]/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white border border-[#E6E6E0] w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative rounded-sm"
        >
          {/* SEARCH INPUT HEADER */}
          <div className="relative border-b border-[#E6E6E0] pb-4 flex items-center">
            <Search className="w-5 h-5 text-[#6B7280] mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search publications, research projects, or notebook entries..."
              className="w-full text-base font-serif text-[#1E1B4B] placeholder-[#9CA3AF] focus:outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="p-2 text-[#6B7280] hover:text-[#1E1B4B] rounded-full border border-[#E6E6E0] ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* SEARCH RESULTS BODY */}
          <div className="py-6 space-y-6">
            {!query.trim() ? (
              <div className="text-center py-8 text-[#9CA3AF] font-mono-tag text-xs space-y-2">
                <p>Type to search across Dr. Mira Ellison's research repository.</p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <button onClick={() => setQuery('Decision')} className="bg-[#FAFAFA] border border-[#E6E6E0] px-2.5 py-1 text-[11px] hover:text-[#1E1B4B]">
                    "Decision"
                  </button>
                  <button onClick={() => setQuery('Attention')} className="bg-[#FAFAFA] border border-[#E6E6E0] px-2.5 py-1 text-[11px] hover:text-[#1E1B4B]">
                    "Attention"
                  </button>
                  <button onClick={() => setQuery('Signals')} className="bg-[#FAFAFA] border border-[#E6E6E0] px-2.5 py-1 text-[11px] hover:text-[#1E1B4B]">
                    "Signals"
                  </button>
                </div>
              </div>
            ) : !hasResults ? (
              <div className="text-center py-8 text-[#9CA3AF] font-mono-tag text-xs">
                No research records match "{query}".
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* PUBLICATIONS RESULTS */}
                {filteredPubs.length > 0 && (
                  <div className="space-y-3">
                    <span className="font-mono-tag text-[10px] text-[#4A6B5D] uppercase tracking-wider block font-semibold">
                      PUBLICATIONS ({filteredPubs.length})
                    </span>
                    <div className="space-y-2">
                      {filteredPubs.map(pub => (
                        <a
                          key={pub.id}
                          href="#publications"
                          onClick={onClose}
                          className="block p-3 bg-[#FAFAFA] border border-[#E6E6E0] hover:border-[#1E1B4B] transition-colors"
                        >
                          <h4 className="font-serif font-bold text-sm text-[#1E1B4B]">"{pub.title}"</h4>
                          <p className="font-mono-tag text-[10px] text-[#6B7280]">{pub.journal} &bull; {pub.year}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* PROJECTS RESULTS */}
                {filteredProjects.length > 0 && (
                  <div className="space-y-3">
                    <span className="font-mono-tag text-[10px] text-[#2A2F45] uppercase tracking-wider block font-semibold">
                      PROJECTS ({filteredProjects.length})
                    </span>
                    <div className="space-y-2">
                      {filteredProjects.map(proj => (
                        <a
                          key={proj.id}
                          href="#projects"
                          onClick={onClose}
                          className="block p-3 bg-[#FAFAFA] border border-[#E6E6E0] hover:border-[#1E1B4B] transition-colors"
                        >
                          <h4 className="font-serif font-bold text-sm text-[#1E1B4B]">{proj.code}: {proj.title}</h4>
                          <p className="text-xs text-[#6B7280]">{proj.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* NOTES RESULTS */}
                {filteredNotes.length > 0 && (
                  <div className="space-y-3">
                    <span className="font-mono-tag text-[10px] text-[#6B7280] uppercase tracking-wider block font-semibold">
                      RESEARCH NOTES ({filteredNotes.length})
                    </span>
                    <div className="space-y-2">
                      {filteredNotes.map(note => (
                        <div key={note.id} className="p-3 bg-[#FFFDF9] border border-[#E6E6E0]">
                          <p className="font-serif italic text-xs text-[#1E1B4B]">"{note.quote}"</p>
                          <p className="font-mono-tag text-[10px] text-[#9CA3AF] mt-1">{note.number} &bull; {note.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

          <div className="border-t border-[#E6E6E0] pt-3 text-right">
            <span className="font-mono-tag text-[10px] text-[#9CA3AF]">
              Press ESC or click close to exit
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
