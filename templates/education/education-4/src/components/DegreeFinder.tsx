import React, { useState } from 'react';
import { Search, BookOpen, Layers, Award, ArrowRight } from 'lucide-react';

interface DegreeFinderProps {
  onSearch: (filters: { query: string; degree: string; faculty: string }) => void;
  facultyList: string[];
}

export const DegreeFinder: React.FC<DegreeFinderProps> = ({ onSearch, facultyList }) => {
  const [query, setQuery] = useState('');
  const [degree, setDegree] = useState('All');
  const [faculty, setFaculty] = useState('All');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, degree, faculty });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto -mt-10 sm:-mt-12 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-5 sm:p-6 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-emerald-700">
          <BookOpen className="w-4 h-4" />
          <span>Academic Degree & Program Explorer</span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Keyword Input */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Major or Keyword
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                id="degree-finder-keyword"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Artificial Intelligence, Finance..."
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Degree Level */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Degree Level
            </label>
            <div className="relative flex items-center">
              <Award className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                id="degree-finder-level"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="All">All Degrees</option>
                <option value="Bachelor">Bachelor Degrees (Undergrad)</option>
                <option value="Master">Master Programs (Graduate)</option>
                <option value="Doctorate">Doctorate / Ph.D.</option>
                <option value="Professional Certificate">Certificates & Online</option>
              </select>
            </div>
          </div>

          {/* Faculty / School */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              School / Faculty
            </label>
            <div className="relative flex items-center">
              <Layers className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                id="degree-finder-faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="All">All Academic Schools</option>
                {facultyList.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="flex items-end">
            <button
              id="degree-finder-submit"
              type="submit"
              className="w-full py-2.5 px-5 bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-slate-950/10 group cursor-pointer"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
