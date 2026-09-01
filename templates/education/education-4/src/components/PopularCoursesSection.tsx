import React, { useState, useMemo } from 'react';
import { 
  Star, 
  Clock, 
  BookOpen, 
  Users, 
  ShoppingCart, 
  Check, 
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { Course } from '../types';

interface PopularCoursesSectionProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onAddToCart: (course: Course) => void;
  cartCourseIds?: string[];
}

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  courses,
  onSelectCourse,
  onAddToCart,
  cartCourseIds = []
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Computer Science',
    'Medical Science',
    'Business & Finance',
    'Design & Arts',
    'Natural Science'
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
      const matchesQuery = !searchQuery || 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <section id="courses" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffb606] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>POPULAR COURSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#132238] tracking-tight leading-tight mb-4">
            Explore Our Top Rated Courses
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Gain in-demand skills and accredited certifications guided by international professors, researchers, and industry specialists.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ffb606] text-slate-950 shadow-md shadow-[#ffb606]/20 font-black'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const isInCart = cartCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-none overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Course Image & Badges */}
                <div 
                  onClick={() => onSelectCourse(course)}
                  className="relative h-56 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/70 via-transparent to-transparent" />
                  
                  {/* Price Tag Badge (Golden Yellow Theme) */}
                  <div className="absolute top-3 right-3 bg-[#ffb606] text-slate-950 text-xs font-black px-3.5 py-1.5 shadow-md">
                    {course.price}
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-3 left-3 bg-[#132238]/90 text-white text-[11px] font-semibold px-2.5 py-1">
                    {course.level}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-[#ffb606] uppercase tracking-wide">
                    {course.category}
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Instructor Info */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          {course.instructor.name}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          {course.instructor.title}
                        </span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 
                      onClick={() => onSelectCourse(course)}
                      className="text-base sm:text-lg font-black text-[#132238] group-hover:text-[#ffb606] transition-colors leading-snug mb-2 cursor-pointer"
                    >
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Meta stats (Lessons, Duration, Students) */}
                    <div className="flex items-center justify-between text-xs text-slate-500 py-3 border-y border-slate-100 mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.lessonsCount} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.studentsCount}+</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Bar: Rating & Enroll / Cart */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-[#ffb606]">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-bold text-slate-900">{course.rating}</span>
                      <span className="text-[11px] text-slate-400">({course.reviewsCount})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(course)}
                        className={`p-2 rounded-none text-xs font-semibold transition-all cursor-pointer ${
                          isInCart
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        title={isInCart ? 'In Cart' : 'Add to Cart'}
                      >
                        {isInCart ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingCart className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => onSelectCourse(course)}
                        className="px-4 py-2 bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Enroll</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
