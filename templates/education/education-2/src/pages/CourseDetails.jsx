import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Users, Clock, Award, CheckCircle2, ChevronDown, ChevronUp, 
  Play, BookOpen, ShieldCheck, FileText, ArrowLeft, Lock, Sparkles
} from 'lucide-react';

import { coursesData } from '../data/courses';
import SectionTitle from '../components/SectionTitle';

export default function CourseDetails({ onEnroll }) {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id) || coursesData[0];

  const [expandedModules, setExpandedModules] = useState([0]); // First module open by default
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleModule = (index) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-950 text-white pt-10 pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-sky-300 font-bold line-clamp-1">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-200 border border-white/15">
                  {course.level}
                </span>
                {course.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Rating & Stats row */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1 font-bold text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviewsCount} verified reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>{course.studentsCount.toLocaleString()} Enrolled Students</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Instructor badge */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">Created By</span>
                  <span className="text-xs font-bold text-white">{course.instructor.name}</span>
                  <span className="text-[11px] text-slate-400 block">{course.instructor.title}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN LAYOUT WITH STICKY SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tabs Bar */}
            <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'instructor', label: 'Instructor' },
                { id: 'faqs', label: 'FAQs & Reviews' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-xs font-bold rounded-t-xl transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600 bg-white shadow-sm'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Learning Outcomes Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    What You Will Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900">Included With This Program</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {course.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-semibold">
                        <Sparkles className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-900">Requirements & Prerequisites</h3>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-2 leading-relaxed">
                    {course.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: Curriculum Accordion */}
            {activeTab === 'curriculum' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Course Curriculum</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {course.curriculum.length} Modules • {course.lessonsCount} HD Video Lessons
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (expandedModules.length === course.curriculum.length) {
                        setExpandedModules([]);
                      } else {
                        setExpandedModules(course.curriculum.map((_, i) => i));
                      }
                    }}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700"
                  >
                    {expandedModules.length === course.curriculum.length ? 'Collapse All' : 'Expand All'}
                  </button>
                </div>

                <div className="space-y-4">
                  {course.curriculum.map((module, idx) => {
                    const isOpen = expandedModules.includes(idx);
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-left transition-colors"
                        >
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                              {module.moduleTitle}
                            </h4>
                            <span className="text-xs font-medium text-slate-500">
                              {module.duration}
                            </span>
                          </div>
                          {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="divide-y divide-slate-100 bg-white"
                            >
                              {module.lessons.map((lesson, lIdx) => (
                                <div key={lIdx} className="p-4 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-[11px]">
                                      {lIdx + 1}
                                    </div>
                                    <span className="font-semibold text-slate-800">{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="text-slate-400 font-medium">{lesson.duration}</span>
                                    {lesson.preview ? (
                                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Free Preview
                                      </span>
                                    ) : (
                                      <Lock className="w-3.5 h-3.5 text-slate-300" />
                                    )}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: Instructor info */}
            {activeTab === 'instructor' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center gap-5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-primary-500 shadow"
                  />
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{course.instructor.name}</h3>
                    <p className="text-xs font-semibold text-primary-600">{course.instructor.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {course.instructor.rating} Instructor Rating
                      </span>
                      <span>•</span>
                      <span>{course.instructor.students.toLocaleString()} Students</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leading researcher and educator with over a decade of hands-on software development experience. Focused on teaching complex topics with practical industry applications.
                </p>
              </div>
            )}

            {/* Tab 4: FAQs & Reviews */}
            {activeTab === 'faqs' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {[
                    { q: "How long do I have access to the course content?", a: "You get full lifetime access to all video lectures, resource code notebooks, and future curriculum updates." },
                    { q: "Will I receive a verified certificate upon completion?", a: "Yes! Once you complete all modules and pass the final capstone assessment, a digital certificate will be issued." },
                    { q: "What if I am unhappy with the course?", a: "We offer a 30-day no-questions-asked money-back guarantee." },
                  ].map((faq, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{faq.q}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Enrolment Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6">
              
              {/* Thumbnail with Play Overlay */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 group">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-white">
                  Course Preview
                </span>
              </div>

              {/* Price Row */}
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-extrabold text-slate-900">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-sm text-slate-400 line-through font-normal">
                      ${course.originalPrice}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                    Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  30-Day Money-Back Guarantee • Full Lifetime Access
                </p>
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => onEnroll && onEnroll(course)}
                className="w-full py-4 rounded-2xl font-bold bg-primary-600 hover:bg-primary-700 text-white text-sm shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all flex items-center justify-center gap-2"
              >
                Enroll Now In Masterclass
              </button>

              {/* Included Highlights */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-primary-600" />
                  <span>{course.lessonsCount} HD Video Lessons</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-primary-600" />
                  <span>Downloadable Code Notebooks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-primary-600" />
                  <span>Official Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>1-on-1 Discord Mentorship</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
