import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  DollarSign, 
  Filter,
  GraduationCap
} from 'lucide-react';
import { AcademicProgram } from '../types';

interface AcademicProgramsSectionProps {
  programs: AcademicProgram[];
  selectedProgramId?: string | null;
  onSelectProgram: (program: AcademicProgram) => void;
  onApplyForProgram: (program: AcademicProgram) => void;
  activeFilter?: { query: string; degree: string; faculty: string } | null;
}

export const AcademicProgramsSection: React.FC<AcademicProgramsSectionProps> = ({
  programs,
  onSelectProgram,
  onApplyForProgram,
  activeFilter
}) => {
  const [selectedFacultyTab, setSelectedFacultyTab] = useState<string>('All');
  const [degreeTypeFilter, setDegreeTypeFilter] = useState<string>('All');

  const facultyCategories = [
    'All',
    'Engineering & Computing',
    'Health & Medical Sciences',
    'Business & Economics',
    'Arts & Humanities',
    'Law & Public Policy',
    'Natural Sciences'
  ];

  const filteredPrograms = useMemo(() => {
    return programs.filter((prog) => {
      // Direct prop filter if set from DegreeFinder
      if (activeFilter) {
        if (activeFilter.query && !prog.title.toLowerCase().includes(activeFilter.query.toLowerCase()) && !prog.description.toLowerCase().includes(activeFilter.query.toLowerCase())) {
          return false;
        }
        if (activeFilter.degree !== 'All' && prog.degree !== activeFilter.degree) {
          return false;
        }
        if (activeFilter.faculty !== 'All' && prog.faculty !== activeFilter.faculty) {
          return false;
        }
      }

      // Tab filter
      if (selectedFacultyTab !== 'All' && prog.faculty !== selectedFacultyTab) {
        return false;
      }

      // Degree filter
      if (degreeTypeFilter !== 'All' && prog.degree !== degreeTypeFilter) {
        return false;
      }

      return true;
    });
  }, [programs, selectedFacultyTab, degreeTypeFilter, activeFilter]);

  return (
    <section id="programs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence & Disciplines</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Explore World-Class Academic Programs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our interdisciplinary curriculum blends rigorous foundational theory with hands-on laboratory research, industry internships, and global fieldwork.
          </p>
        </div>

        {/* Faculty Category Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {facultyCategories.map((faculty) => (
            <button
              key={faculty}
              onClick={() => setSelectedFacultyTab(faculty)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedFacultyTab === faculty
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {faculty}
            </button>
          ))}
        </div>

        {/* Degree Filter Chips */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Filter className="w-4 h-4 text-emerald-600" />
            <span>Filter Degree Type:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Bachelor', 'Master', 'Doctorate'].map((d) => (
              <button
                key={d}
                onClick={() => setDegreeTypeFilter(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  degreeTypeFilter === d
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d === 'All' ? 'All Degrees' : `${d} Programs`}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredPrograms.length}</strong> programs
          </span>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Programs Found</h3>
            <p className="text-sm text-slate-500 mb-4">
              Try adjusting your search criteria or resetting filters to view our full degree catalog.
            </p>
            <button
              onClick={() => {
                setSelectedFacultyTab('All');
                setDegreeTypeFilter('All');
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Program Header Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                  
                  {/* Degree Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{prog.degree}</span>
                  </div>

                  {/* Format Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-semibold">
                    {prog.format}
                  </div>

                  {/* Faculty Title Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium truncate text-emerald-300">
                    {prog.faculty}
                  </div>
                </div>

                {/* Program Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2.5">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {prog.description}
                    </p>

                    {/* Program Stats Pill */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4 bg-slate-50/70 px-3 rounded-lg">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span><strong>{prog.duration}</strong> ({prog.credits} credits)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                        <span><strong>{prog.tuitionPerSemester}</strong> / sem</span>
                      </div>
                    </div>

                    {/* Career Trajectories */}
                    <div className="mb-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Sample Career Trajectories:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.careerPaths.slice(0, 2).map((path, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700"
                          >
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            {path}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onSelectProgram(prog)}
                      className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors text-center"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => onApplyForProgram(prog)}
                      className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
