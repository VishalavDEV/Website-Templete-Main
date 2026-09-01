import React from 'react';
import { Course, PageId } from '../types';
import { Star, Clock, ArrowRight, PlayCircle, BookOpen, Check } from 'lucide-react';

interface FeaturedCoursesProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onViewAllCourses: () => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
  courses,
  onSelectCourse,
  onViewAllCourses,
}) => {
  // Take the 4 primary featured courses
  const featuredList = courses.filter((c) => c.isFeatured).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-display tracking-tight uppercase">
            FEATURED COURSES
          </h2>
        </div>
        <button
          onClick={onViewAllCourses}
          className="text-xs sm:text-sm font-bold text-[#FF7657] hover:text-[#fa6341] flex items-center gap-1.5 transition-colors cursor-pointer group"
        >
          <span>View All Courses</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 4-Column Course Cards Grid matching picture exactly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredList.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#FF7657]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            {/* Card Thumbnail Image */}
            <div>
              <div className="relative h-44 sm:h-40 overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-[#FF7657] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <PlayCircle className="w-6 h-6" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug group-hover:text-[#FF7657] transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {course.instructor.name}
                </p>
              </div>
            </div>

            {/* Card Footer: Rating & Duration */}
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(course.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-700 ml-0.5">
                  {course.rating.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center gap-1 text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{course.durationMinutes} min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
