import React, { useState } from 'react';
import { Course, PageId } from '../types';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { GradientText } from './reactbits/GradientText';
import {
  Star,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface FeaturedCoursesSectionProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onNavigate: (page: PageId) => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({
  courses,
  onSelectCourse,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories = [
    'All',
    'Data & Analytics',
    'Marketing & Growth',
    'Creative Arts & Writing',
    'Design & User Experience',
  ];

  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      activeCategory === 'All' || course.category === activeCategory;
    const matchLevel =
      selectedLevel === 'All' || course.level === selectedLevel;
    return matchCategory && matchLevel;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED CURRICULA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Featured{' '}
              <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
                Courses
              </GradientText>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore high-impact courses led by industry veterans and distinguished professors.
            </p>
          </div>

          <button
            onClick={() => onNavigate('courses')}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-indigo-600 hover:text-indigo-700 font-bold text-xs border border-slate-200 shadow-xs transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <SpotlightCard
              key={course.id}
              onClick={() => onSelectCourse(course)}
              spotlightColor="rgba(79, 70, 229, 0.08)"
              borderColor="rgba(79, 70, 229, 0.35)"
              className="rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl text-left"
            >
              <div>
                {/* Course Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />

                  {/* Level & Category Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800 uppercase font-mono tracking-wider shadow-xs border border-white/80">
                      {course.level}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-xs font-black text-white font-mono shadow-md">
                      {course.price === 0 ? 'FREE' : `$${course.price}`}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-indigo-600 font-mono font-bold">
                    <span>{course.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold font-sans">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating.toFixed(1)}</span>
                      <span className="text-slate-400 text-[10px]">
                        ({course.reviewsCount})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Instructor Pill */}
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-xs"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-800">
                        {course.instructor.name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {course.instructor.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.durationMinutes}m
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    {course.lessonsCount} lessons
                  </span>
                </div>

                <span className="text-xs font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1 transition-colors">
                  Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
