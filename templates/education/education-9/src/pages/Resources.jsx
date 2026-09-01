import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Download, FileText, Eye, X, Book, HelpCircle, FolderArchive, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const CATEGORIES = [
  'All', 'E-Books', 'Study Materials', 'Practice Tests', 'Projects'
];

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResources() {
      try {
        const data = await api.getResources();
        setResources(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadResources();
  }, []);

  const filteredResources = resources.filter(res => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Resource Library
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Download Study Materials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            Access our hand-curated blueprints, visual cheatsheets, mathematical outlines, and starter design files.
          </motion.p>
        </div>

        {/* Filter controls */}
        <div className="space-y-6">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search materials, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={16} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-400 border-transparent text-white'
                    : 'bg-white/60 backdrop-blur-sm border-sky-100/50 text-education-navy/70 hover:text-sky-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map(res => (
              <div
                key={res.id}
                className="p-5 rounded-3xl border border-sky-100/60 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-sky-300/30 transition-all duration-300 flex flex-col justify-between h-64"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 text-[10px] font-bold uppercase">
                      {res.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">{res.format}</span>
                  </div>
                  
                  <h3 className="font-extrabold text-sm text-education-navy leading-snug line-clamp-2">
                    {res.title}
                  </h3>
                  
                  <p className="text-xs text-education-navy/70 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-sky-50/50 mt-4">
                  <button
                    onClick={() => setSelectedResource(res)}
                    className="flex-1 py-2 rounded-xl border border-sky-200 text-sky-500 hover:bg-sky-50 text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <Eye size={12} /> Preview
                  </button>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert("File download started! Simulated size: " + res.fileSize); }}
                    className="p-2 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-400 text-white hover:shadow-md transition-all"
                  >
                    <Download size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredResources.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <BookOpen size={40} className="mx-auto text-sky-200 animate-pulse" />
            <h3 className="font-bold text-lg text-education-navy">No Resources Found</h3>
            <p className="text-sm text-education-navy/60">Try searching for other keywords.</p>
          </div>
        )}

        {/* 2. ANIMATED OVERLAY MODAL PREVIEW */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedResource(null)}
                className="absolute inset-0 bg-education-navy/20 backdrop-blur-sm pointer-events-auto"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative z-10 w-full max-w-md p-6 rounded-3xl border border-sky-100 bg-white/95 shadow-2xl space-y-5 pointer-events-auto"
              >
                <button
                  onClick={() => setSelectedResource(null)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shadow-inner">
                    {selectedResource.format === 'PDF' ? <FileText size={20} /> : <FolderArchive size={20} />}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 text-[10px] font-bold uppercase block w-max mb-0.5">
                      {selectedResource.category}
                    </span>
                    <h3 className="font-bold text-sm text-education-navy">{selectedResource.title}</h3>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-education-navy/80">
                  <p className="leading-relaxed">
                    {selectedResource.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-sky-50">
                    <div>
                      <span className="text-[10px] text-gray-400 block">File Size</span>
                      <span className="font-bold">{selectedResource.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Format</span>
                      <span className="font-bold">{selectedResource.format}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Author</span>
                      <span className="font-bold">{selectedResource.author}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Licence</span>
                      <span className="font-bold">Creative Commons</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => { setSelectedResource(null); alert("Simulating file download!"); }}
                    className="flex-1 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center gap-1.5 shadow-md shadow-sky-100"
                  >
                    <Download size={14} /> Download File
                  </button>
                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
