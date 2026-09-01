import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, FileText, Briefcase, Cpu, Layers } from 'lucide-react';
import { searchAllContent } from '../../services/api';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<{ services: any[]; caseStudies: any[]; blog: any[]; jobs: any[]; solutions: any[] }>({
    services: [],
    caseStudies: [],
    blog: [],
    jobs: [],
    solutions: []
  });
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered by layout listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ services: [], caseStudies: [], blog: [], jobs: [], solutions: [] });
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearching(true);
      const res = await searchAllContent(query);
      setResults(res);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  const totalResults = results.services.length + results.caseStudies.length + results.blog.length + results.jobs.length + results.solutions.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-900"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, case studies, solutions, careers, insights..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base sm:text-lg"
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-700 mr-2">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200 hover:bg-slate-200"
              >
                ESC
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {isSearching && (
                <div className="py-8 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  Searching Straventa directory...
                </div>
              )}

              {!isSearching && !query && (
                <div className="py-8 text-center text-slate-500 text-sm">
                  <p className="font-medium text-slate-700">Quick Searches:</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {['AI & Machine Learning', 'Cloud Solutions', 'Fraud Detection', 'Cybersecurity', 'React Developer'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 rounded-lg border border-slate-200 transition cursor-pointer"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!isSearching && query && totalResults === 0 && (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No matching results found for <span className="text-slate-900 font-semibold">"{query}"</span>.
                </div>
              )}

              {!isSearching && totalResults > 0 && (
                <div className="space-y-4">
                  {results.services.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-slate-700" /> Services ({results.services.length})
                      </div>
                      <div className="space-y-1">
                        {results.services.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/services/${item.slug}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer group transition border border-transparent hover:border-slate-200"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-zinc-800">{item.title}</div>
                              <div className="text-xs text-slate-500 line-clamp-1">{item.shortDescription}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.solutions.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-700" /> Solutions ({results.solutions.length})
                      </div>
                      <div className="space-y-1">
                        {results.solutions.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/solutions/${item.slug}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer group transition border border-transparent hover:border-slate-200"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-zinc-800">{item.title}</div>
                              <div className="text-xs text-slate-500 line-clamp-1">{item.tagline}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.caseStudies.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-slate-700" /> Case Studies ({results.caseStudies.length})
                      </div>
                      <div className="space-y-1">
                        {results.caseStudies.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/case-studies/${item.slug}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer group transition border border-transparent hover:border-slate-200"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-zinc-800">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.industry} · {item.heroMetric.value} {item.heroMetric.label}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.jobs.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-700" /> Careers ({results.jobs.length})
                      </div>
                      <div className="space-y-1">
                        {results.jobs.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/careers/${item.jobId}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer group transition border border-transparent hover:border-slate-200"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-zinc-800">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.department} · {item.location}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.blog.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider px-2 mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-700" /> Insights & Blog ({results.blog.length})
                      </div>
                      <div className="space-y-1">
                        {results.blog.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/blog/${item.slug}`)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer group transition border border-transparent hover:border-slate-200"
                          >
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-zinc-800">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.category} · {item.readTime}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600">ESC</kbd> to close</span>
              <span className="font-medium text-slate-600">Straventa Directory Search</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
