import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Clock, Layers, BookOpen, Award, CheckCircle, Globe, Play } from 'lucide-react';
import { api } from '../services/api';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourse() {
      try {
        const data = await api.getCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold">Course Not Found</h2>
        <Link to="/courses" className="text-sky-500 font-semibold flex items-center gap-1">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Back Link */}
        <Link to="/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-education-navy/70 hover:text-sky-500 transition-colors">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>

        {/* Hero split panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 rounded-lg bg-sky-100/50 text-sky-600 text-xs font-bold uppercase tracking-wider">
              {course.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-education-navy leading-tight">
              {course.title}
            </h1>
            <p className="text-sm text-education-navy/80 leading-relaxed">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-education-navy/70 pt-2">
              <span className="flex items-center gap-1">
                <Star size={14} className="text-amber-500" fill="currentColor" />
                {course.rating} Rating
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Layers size={14} />
                {course.difficulty}
              </span>
            </div>

            {/* Instructor Details */}
            <div className="p-4.5 rounded-2xl border border-sky-100/40 bg-white/40 backdrop-blur-sm flex items-center gap-3.5 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex-shrink-0 flex items-center justify-center text-sky-600 font-bold overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${course.instructor}`} alt={course.instructor} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs text-education-navy/60 font-semibold uppercase tracking-wider">Instructor</h4>
                <p className="font-bold text-sm text-education-navy">{course.instructor}</p>
              </div>
            </div>
          </div>

          {/* Stats card panel */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-lg space-y-5">
            <div className="aspect-video rounded-2xl overflow-hidden relative group">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <button className="w-12 h-12 rounded-full bg-white text-sky-500 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-3 bg-sky-50/50 rounded-xl">
                <span className="text-[10px] text-gray-400 block mb-0.5">Lectures</span>
                <span className="text-education-navy font-bold">{course.stats.lecturesCount}</span>
              </div>
              <div className="p-3 bg-sky-50/50 rounded-xl">
                <span className="text-[10px] text-gray-400 block mb-0.5">Language</span>
                <span className="text-education-navy font-bold">{course.stats.language}</span>
              </div>
              <div className="p-3 bg-sky-50/50 rounded-xl col-span-2">
                <span className="text-[10px] text-gray-400 block mb-0.5">Certificate</span>
                <span className="text-education-navy font-bold">{course.stats.certificateName}</span>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="block w-full py-3 rounded-2xl text-center text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 shadow-md hover:shadow-lg transition-all"
            >
              Start Learning Now
            </Link>
          </div>
        </div>

        {/* Learning Outcomes and Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 rounded-3xl border border-sky-100 bg-white/50 backdrop-blur-sm space-y-4">
            <h3 className="font-bold text-base text-education-navy flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              What you will learn
            </h3>
            <ul className="space-y-2.5 text-xs text-education-navy/80">
              {course.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl border border-sky-100 bg-white/50 backdrop-blur-sm space-y-4">
            <h3 className="font-bold text-base text-education-navy flex items-center gap-2">
              <BookOpen size={18} className="text-sky-500" />
              Requirements
            </h3>
            <ul className="space-y-2.5 text-xs text-education-navy/80">
              {course.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. INTERACTIVE CURRICULUM TIMELINE */}
        <div className="space-y-6 pt-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-education-navy text-center">
            Curriculum Roadmap
          </h2>
          
          {/* Animated module stage line */}
          <div className="relative">
            <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
              {course.curriculum.map((mod, index) => {
                const isSelected = selectedModule === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedModule(index)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? 'bg-sky-500 text-white border-transparent shadow-md'
                        : 'bg-white/60 backdrop-blur-sm border-sky-100 text-education-navy/70 hover:text-sky-500'
                    }`}
                  >
                    Module 0{index + 1}
                  </button>
                );
              })}
            </div>
            
            {/* Horizontal timeline connector bar for design visual */}
            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-0.5 bg-sky-100 -translate-y-1/2 z-0" />
          </div>

          {/* Module details animated pane */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl border border-sky-100 bg-sky-50/40 backdrop-blur-sm text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-xs font-extrabold mb-1">
                  0{selectedModule + 1}
                </div>
                <h4 className="font-extrabold text-base text-education-navy">
                  {course.curriculum[selectedModule]}
                </h4>
                <p className="text-xs text-education-navy/70 max-w-md mx-auto leading-relaxed">
                  Dive deep into the fundamentals of this module. Explore hands-on projects, visual animations, and self-assessments to solidify your understanding.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6 pt-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-education-navy text-center">
            Student Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.reviews.map((rev, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-xs font-bold">
                      {rev.studentName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-education-navy">{rev.studentName}</h4>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs text-amber-500 font-bold">
                    <Star size={12} fill="currentColor" />
                    {rev.rating}
                  </div>
                </div>
                <p className="text-xs text-education-navy/85 italic leading-relaxed font-outfit">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
