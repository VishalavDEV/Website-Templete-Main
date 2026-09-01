import React, { useState } from 'react';
import { PageId, Course } from '../types';
import { COURSES_DATA } from '../data/edupathData';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { GradientText } from '../components/reactbits/GradientText';
import {
  Search,
  Filter,
  Star,
  Clock,
  BookOpen,
  PlayCircle,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

interface CoursesPageProps {
  initialSearchQuery?: string;
  onNavigate: (page: PageId) => void;
  onSelectCourse: (course: Course) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialSearchQuery = '',
  onNavigate,
  onSelectCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'duration'>('popular');

  const categories = [
    'All',
    'Data & Analytics',
    'Marketing & Growth',
    'Creative Arts & Writing',
    'Design & User Experience',
    'Engineering & Code',
    'AI & Machine Learning',
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesLevel && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'duration') return a.durationMinutes - b.durationMinutes;
    return b.reviewsCount - a.reviewsCount;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-10 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>500+ VERIFIED MASTERCLASSES & LABS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Explore All{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Courses
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From foundational algorithms and cloud infrastructure to design systems and neural agents, master production skills with world-class faculty.
          </p>

          {/* Search bar within course page */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, or topics..."
                className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 rounded-full text-xs font-medium focus:outline-hidden shadow-sm placeholder:text-slate-400 border border-slate-200 focus:border-indigo-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Category Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Category horizontal scroll bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Level and Sort Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono font-bold text-slate-500">Level:</span>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-500">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg font-bold text-slate-700 focus:outline-hidden focus:border-indigo-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Shortest Duration</option>
            </select>
          </div>
        </div>
      </section>

      {/* Courses Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <SpotlightCard
              key={course.id}
              onClick={() => onSelectCourse(course)}
              spotlightColor="rgba(99, 102, 241, 0.08)"
              className="rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5 text-left">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider">
                    {course.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display leading-snug group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {course.instructor.name}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>

                <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{course.durationMinutes}m</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No matching courses found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your category or search query to explore other tracks.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
