import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, RotateCcw, BookOpen, Check } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import { coursesData, courseCategories } from '../data/courses';

export default function Courses({ onEnroll }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Search
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory =
        selectedCategory === 'All Categories' || course.category === selectedCategory;

      // Level
      const matchesLevel =
        selectedLevel === 'All Levels' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      // Default popular
      return b.studentsCount - a.studentsCount;
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedLevel('All Levels');
    setSortBy('popular');
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionTitle
          badge="Explore Knowledge"
          title="Industry-Accredited"
          highlight="Course Discovery"
          subtitle="Browse 500+ top-rated courses taught by industry pioneers and distinguished academic researchers."
        />

        {/* Search & Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, skills, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer"
              >
                <option value="All Levels">All Skill Levels</option>
                <option value="Beginner">Beginner Level</option>
                <option value="Intermediate">Intermediate Level</option>
                <option value="Advanced">Advanced Level</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-2 flex-shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Category:
            </span>
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Showing <span className="text-primary-600">{filteredCourses.length}</span> Courses
          </p>

          {(searchQuery || selectedCategory !== 'All Categories' || selectedLevel !== 'All Levels') && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto my-12">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Courses Found</h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find any courses matching your current search query or filter selections.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              Clear Search & Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
