import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, Clock, BookOpen, Layers, Search, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const CATEGORIES = [
  'All',
  'Programming',
  'Artificial Intelligence',
  'Data Science',
  'Web Development',
  'Business',
  'Mathematics',
  'Science',
  'Design',
  'Languages'
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await api.getCourses();
        setCourses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  // Filter courses based on category selection and search keyword
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Title and Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Explore Catalog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Discover Knowledge in Motion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            Browse courses spanning code, calculus, creative designs, and neural networks. Select categories to filter your path.
          </motion.p>
        </div>

        {/* Search bar and Filters */}
        <div className="space-y-6">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={16} />
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-400 border-transparent text-white shadow-sm shadow-sky-100'
                    : 'bg-white/60 backdrop-blur-sm border-sky-100/50 text-education-navy/70 hover:text-sky-500 hover:border-sky-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map(course => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className="group rounded-3xl overflow-hidden border border-sky-100/60 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-sky-100/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-white/95 text-[10px] font-bold text-sky-600 uppercase tracking-wide shadow-sm font-outfit border border-sky-50">
                      {course.category}
                    </span>
                    
                    {/* Educational particles mock hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Layers size={12} />
                          {course.difficulty}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {course.duration}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-base text-education-navy line-clamp-1 group-hover:text-sky-600 transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs text-education-navy/70 leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-sky-50/50">
                      {/* Rating and Enrolled */}
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={14} fill="currentColor" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-education-navy/70">
                          <Users size={14} />
                          <span>{course.studentsEnrolled.toLocaleString()} enrolled</span>
                        </div>
                      </div>

                      {/* Progress bar mock */}
                      {course.progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[10px] text-education-navy/70 font-semibold">
                            <span>Your Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-sky-100 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Action View button */}
                      <Link
                        to={`/courses/${course.id}`}
                        className="block w-full text-center py-2.5 rounded-xl text-xs font-bold text-sky-600 bg-sky-50 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-md group-hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        View Course Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && filteredCourses.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <BookOpen size={40} className="mx-auto text-sky-200" />
            <h3 className="font-bold text-lg text-education-navy">No Courses Found</h3>
            <p className="text-sm text-education-navy/60">Try revising your search term or select another category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
