import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publications } from '../data/researchData';
import { FileText, Copy, Check, ExternalLink, X, BookOpen, Quote } from 'lucide-react';

export default function Publications() {
  const [selectedPub, setSelectedPub] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyBibtex = (pub) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 bg-[#FAFAFA] border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute right-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-r border-[#E6E6E0] pr-3 text-right">
        SEC 06 &bull; PEER-REVIEWED MANUSCRIPTS & JOURNAL ARTICLES
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
              06 / PUBLICATIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B]">
              Selected Writing
            </h2>
          </div>
          <div className="bg-[#EEECF8] px-4 py-2 rounded-sm border border-[#E6E6E0]">
            <p className="font-mono-tag text-xs text-[#1E1B4B]">
              All publications and journals displayed in this template are fictional demonstration content.
            </p>
          </div>
        </div>

        {/* PUBLICATIONS PAPER-STYLE LIST */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPub(pub)}
              className="bg-white border border-[#E6E6E0] p-6 sm:p-8 shadow-paper hover:border-[#1E1B4B] transition-all duration-200 cursor-pointer group relative"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                <div className="space-y-3 max-w-3xl">
                  {/* METADATA */}
                  <div className="flex flex-wrap items-center gap-3 font-mono-tag text-xs text-[#6B7280]">
                    <span className="font-bold text-[#1E1B4B] bg-[#F4F4F3] px-2.5 py-0.5 border border-[#E6E6E0]">
                      {pub.year}
                    </span>
                    <span className="italic text-[#4A6B5D] font-serif text-sm">
                      {pub.journal}
                    </span>
                    <span>&bull;</span>
                    <span className="text-[11px] text-[#9CA3AF]">
                      {pub.volume}
                    </span>
                  </div>

                  {/* PAPER TITLE */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B] group-hover:text-[#2A2F45] transition-colors leading-snug">
                    "{pub.title}"
                  </h3>

                  {/* ABSTRACT SNIPPET */}
                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2 font-light">
                    {pub.abstract}
                  </p>

                  {/* KEYWORD TAGS */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {pub.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="font-mono-tag text-[10px] bg-[#FAFAFA] text-[#6B7280] px-2 py-0.5 border border-[#E6E6E0]"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT ACTION READ LINK */}
                <div className="flex items-center space-x-3 text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] shrink-0 pt-2 md:pt-0">
                  <span className="group-hover:translate-x-1 transition-transform">Read Paper Preview</span>
                  <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-[#1E1B4B]" />
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* PAPER PREVIEW MODAL */}
      <AnimatePresence>
        {selectedPub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1B4B]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="bg-white border border-[#E6E6E0] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
            >
              <button
                onClick={() => setSelectedPub(null)}
                className="absolute top-6 right-6 p-2 text-[#6B7280] hover:text-[#1E1B4B] rounded-full border border-[#E6E6E0]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                
                {/* PAPER HEADER */}
                <div>
                  <span className="font-mono-tag text-xs text-[#4A6B5D] uppercase tracking-widest font-semibold block mb-1">
                    FICTIONAL ACADEMIC MANUSCRIPT PREVIEW
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B4B] leading-tight">
                    "{selectedPub.title}"
                  </h3>
                  
                  <div className="mt-3 flex flex-wrap items-center gap-3 font-mono-tag text-xs text-[#6B7280]">
                    <span className="font-semibold text-[#1E1B4B]">Author: Dr. Mira Ellison</span>
                    <span>&bull;</span>
                    <span className="italic font-serif text-sm text-[#4A6B5D]">{selectedPub.journal}</span>
                    <span>&bull;</span>
                    <span>{selectedPub.year}</span>
                  </div>
                </div>

                {/* ABSTRACT BOX */}
                <div className="p-6 bg-[#F5F3EF] border-l-4 border-[#1E1B4B] space-y-3">
                  <div className="flex items-center space-x-2 text-[#1E1B4B]">
                    <Quote className="w-4 h-4 text-[#4A6B5D]" />
                    <span className="font-mono-tag text-xs font-semibold uppercase">
                      Abstract
                    </span>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                    {selectedPub.abstract}
                  </p>
                </div>

                {/* METADATA STRIP */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono-tag text-xs p-4 bg-[#FAFAFA] border border-[#E6E6E0]">
                  <div>
                    <span className="text-[#9CA3AF] block text-[10px] uppercase">CITATION DOI</span>
                    <span className="text-[#1E1B4B]">{selectedPub.doi}</span>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] block text-[10px] uppercase">PAGES</span>
                    <span className="text-[#1E1B4B]">{selectedPub.pages}</span>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] block text-[10px] uppercase">JOURNAL STATUS</span>
                    <span className="text-[#4A6B5D] font-semibold">{selectedPub.journalType}</span>
                  </div>
                </div>

                {/* BIBTEX EXPORT CARD */}
                <div className="bg-[#1E1B4B] text-white p-6 space-y-3 rounded-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag text-xs text-[#EEECF8] uppercase tracking-wider font-semibold">
                      BibTeX Citation
                    </span>
                    <button
                      onClick={() => handleCopyBibtex(selectedPub)}
                      className="inline-flex items-center space-x-1.5 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-white transition-colors"
                    >
                      {copiedId === selectedPub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy BibTeX</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono-tag text-[11px] text-gray-300 overflow-x-auto p-3 bg-black/30 rounded border border-white/10">
                    {selectedPub.bibtex}
                  </pre>
                </div>

                {/* FOOTER DISCLAIMER */}
                <p className="font-mono-tag text-[10px] text-center text-[#9CA3AF]">
                  *All publications, DOI references, and journals displayed are fictional demonstration content.
                </p>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
