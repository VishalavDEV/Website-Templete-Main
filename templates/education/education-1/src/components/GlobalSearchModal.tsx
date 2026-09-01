import React, { useState } from 'react';
import { PageId, Course, LearningPath, Mentor } from '../types';
import { COURSES_DATA, LEARNING_PATHS_DATA, MENTORS_DATA } from '../data/edupathData';
import { Search, X, BookOpen, Map, Users, ArrowRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectCourse: (course: Course) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectCourse,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchingCourses = COURSES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query) ||
      c.tags.some((t) => t.toLowerCase().includes(query))
  );

  const matchingPaths = LEARNING_PATHS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
  );

  const matchingMentors = MENTORS_DATA.filter(
    (m) =>
      m.name.toLowerCase().includes(query) ||
      m.company.toLowerCase().includes(query) ||
      m.specialties.some((s) => s.toLowerCase().includes(query))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search disciplines (AI, Python, Cloud), professors, or programs..."
            className="w-full text-sm font-medium bg-transparent focus:outline-hidden text-slate-900 placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer px-2 py-1 bg-slate-200/80 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-300/60 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Quick Category Suggestions */}
          {!searchTerm && (
            <div className="space-y-3 text-left">
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Popular Search Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Data Science Essentials',
                  'Cloud Architecture',
                  'Cybersecurity',
                  'UI/UX Design',
                  'Generative AI Agents',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-indigo-200 transition-all cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Courses */}
          {matchingCourses.length > 0 && (
            <div className="space-y-3 text-left">
              <span className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Courses ({matchingCourses.length})</span>
              </span>
              <div className="space-y-2">
                {matchingCourses.slice(0, 4).map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      onSelectCourse(course);
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                          {course.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-mono">
                          {course.instructor.name} • {course.durationMinutes} min
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Paths */}
          {matchingPaths.length > 0 && (
            <div className="space-y-3 text-left">
              <span className="text-[11px] font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
                <Map className="w-3.5 h-3.5" />
                <span>Career Programs ({matchingPaths.length})</span>
              </span>
              <div className="space-y-2">
                {matchingPaths.slice(0, 2).map((path) => (
                  <div
                    key={path.id}
                    onClick={() => {
                      onNavigate('paths');
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:bg-purple-50/40 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {path.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono">
                        {path.estimatedWeeks} weeks • {path.careerRole}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Mentors */}
          {matchingMentors.length > 0 && (
            <div className="space-y-3 text-left">
              <span className="text-[11px] font-mono font-bold text-cyan-700 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Professors & Mentors ({matchingMentors.length})</span>
              </span>
              <div className="space-y-2">
                {matchingMentors.slice(0, 2).map((mentor) => (
                  <div
                    key={mentor.id}
                    onClick={() => {
                      onNavigate('mentorship');
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/40 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {mentor.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-mono">
                          {mentor.role} at {mentor.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchTerm &&
            matchingCourses.length === 0 &&
            matchingPaths.length === 0 &&
            matchingMentors.length === 0 && (
              <div className="text-center py-10 space-y-2">
                <p className="text-sm font-semibold text-slate-700">
                  No direct matches for "{searchTerm}"
                </p>
                <p className="text-xs text-slate-500">
                  Try searching for "Artificial Intelligence", "Data Science", "Python", or "Design".
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
