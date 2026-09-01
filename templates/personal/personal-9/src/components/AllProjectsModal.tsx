import React, { useState } from 'react';
import { X, Search, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onSelectProject: (p: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onSelectProject,
}) => {
  if (!isOpen) return null;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI', 'ML', 'Web', 'Computer Vision', 'Generative AI'];

  const filtered = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = filter === 'All' || p.category === filter || p.tags.includes(filter);
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <h2 className="font-bold text-lg">All Projects & Repositories</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, stacks, tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer ${
                    filter === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-400">{project.category}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{project.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
