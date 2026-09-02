import React from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Users, Award, ExternalLink } from 'lucide-react';

export default function InstructorCard({ instructor, onViewProfile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="relative mb-5 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500 p-1 transition-colors">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {instructor.rating}
          </span>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-primary-600 transition-colors">
            {instructor.name}
          </h3>
          <p className="text-xs font-semibold text-primary-600 mb-1">
            {instructor.designation}
          </p>
          <p className="text-xs text-slate-500">
            {instructor.institution}
          </p>
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 text-center mb-4 leading-relaxed">
          {instructor.bio}
        </p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-5">
          {instructor.expertise.slice(0, 3).map((exp, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-slate-100 text-center mb-4 text-xs text-slate-600">
          <div>
            <span className="font-extrabold text-slate-900 block text-sm">{instructor.coursesCount}</span>
            <span className="text-[11px] text-slate-400">Courses</span>
          </div>
          <div>
            <span className="font-extrabold text-slate-900 block text-sm">{(instructor.studentsCount / 1000).toFixed(0)}k+</span>
            <span className="text-[11px] text-slate-400">Students</span>
          </div>
        </div>

        <button
          onClick={() => onViewProfile && onViewProfile(instructor)}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-primary-600 text-white transition-colors duration-200 flex items-center justify-center gap-1.5"
        >
          View Full Profile
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
