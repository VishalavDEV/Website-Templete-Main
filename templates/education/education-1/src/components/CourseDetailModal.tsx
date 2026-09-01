import React, { useState } from 'react';
import { Course } from '../types';
import {
  X,
  Star,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Play,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnrollSuccess?: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnrollSuccess,
}) => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!isOpen || !course) return null;

  const handleEnroll = () => {
    setIsEnrolled(true);
    if (onEnrollSuccess) {
      onEnrollSuccess(course.id);
    }
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] text-slate-900">
        {/* Modal Header Bar with Close Button */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-wider font-mono">
              {course.category}
            </span>
            <span className="text-xs text-slate-500 font-mono font-semibold">{course.level}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-300/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Video Preview or Poster */}
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-200">
            {isPlayingDemo ? (
              <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-white p-6 space-y-3">
                <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
                <p className="text-sm font-semibold text-slate-200">Streaming Interactive Lesson Preview...</p>
                <button
                  onClick={() => setIsPlayingDemo(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Close Video Player
                </button>
              </div>
            ) : (
              <>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/50 flex flex-col items-center justify-center">
                  <button
                    onClick={() => setIsPlayingDemo(true)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white flex items-center justify-center shadow-2xl shadow-indigo-600/50 transform hover:scale-110 transition-all cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                  <span className="text-xs font-bold text-white mt-3 uppercase tracking-wider drop-shadow-md font-mono">
                    Watch Free 2-Min Course Preview
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Title & Metadata */}
          <div className="space-y-2 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {course.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{course.rating.toFixed(1)}</span>
                <span className="text-slate-400">({course.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{course.durationMinutes} minutes total duration</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>{course.lessonsCount} interactive lessons</span>
              </div>
              <div className="flex items-center gap-1 text-indigo-700 font-semibold font-mono">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Skillora Verified Certificate</span>
              </div>
            </div>
          </div>

          {/* Instructor Brief */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-3.5">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-xs"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{course.instructor.name}</h4>
                <p className="text-xs text-slate-500">{course.instructor.role}</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700">
              Verified Faculty
            </span>
          </div>

          {/* Syllabus Accordion */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div className="space-y-3 text-left">
              <h3 className="text-base font-extrabold text-slate-900 font-display">
                Curriculum & Syllabus
              </h3>
              <div className="space-y-2.5">
                {course.syllabus.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        {module.title}
                      </span>
                      <span className="text-[11px] font-semibold text-indigo-600 font-mono">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc">
                      {module.lessons.map((lesson, lIdx) => (
                        <li key={lIdx}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-left">
            <span className="text-xs text-slate-500 block font-mono">Enrollment Tier</span>
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono">
              {course.price === 0 ? 'Free Access' : `$${course.price} USD`}
            </span>
          </div>

          {isEnrolled ? (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Enrolled! Active in Progress Tracker</span>
            </div>
          ) : (
            <button
              onClick={handleEnroll}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enroll & Start Course Now</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
