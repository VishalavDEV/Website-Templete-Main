import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';

export default function CourseCard({ course, onEnroll }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group"
    >
      {/* Thumbnail Header */}
      <div className="relative overflow-hidden aspect-video bg-slate-900">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
        
        {/* Category & Badge Pills */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white shadow-sm">
              {course.badge}
            </span>
          )}
        </div>

        {/* Level Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-900/80 backdrop-blur-md text-sky-200">
            {course.level}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Instructor line */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-6 h-6 rounded-full object-cover border border-primary-200"
            />
            <span className="text-xs font-medium text-slate-600 truncate">
              {course.instructor.name}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-lg line-clamp-2 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </h3>

          <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        <div>
          {/* Rating & Enrolled Stats */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-1 font-semibold text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
              <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.studentsCount.toLocaleString()} enrolled</span>
            </div>
          </div>

          {/* Duration & Price Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-baseline gap-1.5">
              {course.originalPrice && (
                <span className="text-xs text-slate-400 line-through font-normal">
                  ${course.originalPrice}
                </span>
              )}
              <span className="text-lg font-extrabold text-slate-900">
                ${course.price}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-50">
            <Link
              to={`/courses/${course.id}`}
              className="w-full text-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center justify-center gap-1"
            >
              Details
            </Link>
            <button
              onClick={() => onEnroll && onEnroll(course)}
              className="w-full px-3 py-2 rounded-xl text-xs font-bold bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow transition-all flex items-center justify-center gap-1 group/btn"
            >
              Enroll Now
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
