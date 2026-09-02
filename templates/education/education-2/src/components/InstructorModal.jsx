import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, BookOpen, Users, Award, Globe, Share2, ExternalLink, Mail } from 'lucide-react';

export default function InstructorModal({ instructor, onClose, onEnrollCourse }) {
  if (!instructor) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-primary-100 shadow-md"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {instructor.rating} Rating ({instructor.reviews} reviews)
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700">
                    {instructor.experience}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{instructor.name}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-2">{instructor.designation}</p>
                <p className="text-xs text-slate-500 mb-4">{instructor.institution}</p>

                {/* Social icons */}
                <div className="flex items-center justify-center sm:justify-start gap-3 text-slate-400">
                  <a href="#" className="p-2 rounded-lg bg-slate-100 hover:bg-primary-600 hover:text-white transition-colors" title="Personal Website">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-slate-100 hover:bg-primary-600 hover:text-white transition-colors" title="Share Profile">
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-slate-100 hover:bg-primary-600 hover:text-white transition-colors" title="Academic Network">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-slate-100 hover:bg-primary-600 hover:text-white transition-colors" title="Direct Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-center">
              <div>
                <span className="block text-xl font-extrabold text-slate-900">{instructor.coursesCount}</span>
                <span className="text-xs text-slate-500 font-medium">Courses Taught</span>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-slate-900">{instructor.studentsCount.toLocaleString()}</span>
                <span className="text-xs text-slate-500 font-medium">Global Students</span>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-slate-900">4.9/5</span>
                <span className="text-xs text-slate-500 font-medium">Average Score</span>
              </div>
            </div>

            {/* Biography */}
            <div className="mb-6">
              <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">Biography</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{instructor.bio}</p>
            </div>

            {/* Areas of Expertise */}
            <div className="mb-6">
              <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">Expertise & Specialization</h4>
              <div className="flex flex-wrap gap-2">
                {instructor.expertise.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
