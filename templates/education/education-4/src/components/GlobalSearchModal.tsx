import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Calendar, Users, Newspaper, ArrowRight } from 'lucide-react';
import { COURSES_DATA, TEACHERS_DATA, UPCOMING_EVENTS, NEWS_STORIES } from '../data/universityData';
import { Course, Teacher, UniversityEvent, NewsItem } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onSelectEvent: (event: UniversityEvent) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onSelectEvent,
  onSelectNews
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return {
        courses: COURSES_DATA.slice(0, 3),
        events: UPCOMING_EVENTS.slice(0, 2),
        news: NEWS_STORIES.slice(0, 2),
        teachers: TEACHERS_DATA.slice(0, 2),
        isDefault: true
      };
    }

    const q = query.toLowerCase();
    const courses = COURSES_DATA.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
    const events = UPCOMING_EVENTS.filter(
      (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
    );
    const news = NEWS_STORIES.filter(
      (n) => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
    );
    const teachers = TEACHERS_DATA.filter(
      (t) => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q) || t.bio.toLowerCase().includes(q)
    );

    return { courses, events, news, teachers, isDefault: false };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/75 backdrop-blur-md overflow-y-auto font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#ec1c4e] shrink-0" />
          <input
            id="global-search-input"
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, professors, events, academic news..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 max-h-[65vh] overflow-y-auto space-y-6 text-slate-700">
          {searchResults.isDefault && (
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Popular Searches & Recommended Topics
            </div>
          )}

          {/* Courses Matches */}
          {searchResults.courses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ec1c4e] mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Courses & Diplomas ({searchResults.courses.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      onSelectCourse(course);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#ec1c4e]">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {course.category} • {course.price} • {course.duration}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#ec1c4e] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teachers */}
          {searchResults.teachers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Faculty & Instructors ({searchResults.teachers.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {teacher.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {teacher.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Events Matches */}
          {searchResults.events.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#ec1c4e]" />
                <span>Events & Seminars ({searchResults.events.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => {
                      onSelectEvent(event);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#ec1c4e]">
                        {event.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {event.date} • {event.location}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#ec1c4e] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Matches */}
          {searchResults.news.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                <Newspaper className="w-3.5 h-3.5 text-[#ec1c4e]" />
                <span>Latest News & Articles ({searchResults.news.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.news.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      onSelectNews(n);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#ec1c4e] truncate max-w-md">
                        {n.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {n.date} • {n.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#ec1c4e] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
