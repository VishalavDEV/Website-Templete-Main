import React from 'react';
import { 
  X, 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  CheckCircle, 
  Award, 
  ShoppingCart, 
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
  onAddToCart: (course: Course) => void;
  isInCart?: boolean;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
  onAddToCart,
  isInCart = false
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto font-['Plus_Jakarta_Sans',sans-serif]">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Hero image header */}
        <div className="relative h-60 w-full bg-slate-900 shrink-0">
          <img
            src={course.image}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ec1c4e] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-[#ec1c4e] text-white font-bold text-xs rounded-md">
                {course.price}
              </span>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white font-semibold text-xs rounded-md">
                {course.level}
              </span>
              <span className="text-xs text-rose-300 font-semibold uppercase tracking-wider">
                {course.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-900">
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">DURATION</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{course.duration}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">LESSONS</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{course.lessonsCount} Modules</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">ENROLLED</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{course.studentsCount}+ Students</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">RATING</span>
              <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{course.rating} ({course.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Course Overview & Description
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Instructor Card */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
            />
            <div>
              <span className="text-[11px] font-bold text-[#ec1c4e] uppercase tracking-wider block">
                Course Instructor
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                {course.instructor.name}
              </h4>
              <p className="text-xs text-slate-500">
                {course.instructor.role}
              </p>
            </div>
          </div>

          {/* Syllabus Modules */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Curriculum & Weekly Syllabus
              </h3>
              <div className="space-y-2.5">
                {course.syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#ec1c4e] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                        <span className="text-[11px] text-slate-500">{item.duration}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Sticky Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Tuition Fee:</span>
            <span className="text-xl font-extrabold text-[#ec1c4e]">{course.price}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onAddToCart(course)}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
                isInCart
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isInCart ? 'In Cart' : 'Add to Cart'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="px-6 py-2.5 bg-[#ec1c4e] hover:bg-[#d81544] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
