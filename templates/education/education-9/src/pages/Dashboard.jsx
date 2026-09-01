import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Flame, Calendar, Clock, BookOpen, ChevronRight, CheckCircle2, Play } from 'lucide-react';
import { api } from '../services/api';

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await api.getDashboard();
        setDashboard(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm font-semibold">Failed to load dashboard. Please try again.</p>
      </div>
    );
  }

  // Circular progress calculations
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (dashboard.overallProgress / 100) * circumference;

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Welcome Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-400 to-cyan-400 text-white shadow-xl shadow-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Welcome Back, {dashboard.studentName}!
            </h1>
            <p className="text-xs sm:text-sm opacity-90 max-w-md">
              Keep floating forward! You have a 🔥 {dashboard.learningStreak}-day learning streak active. Complete a module to keep the flame alive.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/quiz"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-sky-600 bg-white hover:bg-sky-50 transition-colors shadow-sm text-center"
            >
              Take Today's Quiz
            </Link>
          </div>
        </div>

        {/* Stats Grid & Circular Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Courses & Statistics */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick stats box */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-sky-100 bg-white/50 text-center space-y-1">
                <Flame className="text-orange-500 mx-auto" size={20} />
                <span className="text-[10px] text-gray-400 block font-semibold">Streak</span>
                <span className="text-sm font-bold text-education-navy">{dashboard.learningStreak} Days</span>
              </div>
              <div className="p-4 rounded-2xl border border-sky-100 bg-white/50 text-center space-y-1">
                <CheckCircle2 className="text-green-500 mx-auto" size={20} />
                <span className="text-[10px] text-gray-400 block font-semibold">Completed</span>
                <span className="text-sm font-bold text-education-navy">{dashboard.completedCoursesCount} Courses</span>
              </div>
              <div className="p-4 rounded-2xl border border-sky-100 bg-white/50 text-center space-y-1">
                <BookOpen className="text-sky-500 mx-auto" size={20} />
                <span className="text-[10px] text-gray-400 block font-semibold">Active</span>
                <span className="text-sm font-bold text-education-navy">{dashboard.activeCoursesCount} Courses</span>
              </div>
            </div>

            {/* Active Courses */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-education-navy">Active Courses</h2>
              <div className="space-y-4">
                {dashboard.currentCourses.map(course => (
                  <div 
                    key={course.id}
                    className="p-5 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-sky-100">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 rounded bg-sky-50 text-[10px] font-bold text-sky-600 uppercase">
                          {course.category}
                        </span>
                        <h3 className="font-bold text-sm text-education-navy">{course.title}</h3>
                        <p className="text-xs text-education-navy/60">{course.instructor}</p>
                      </div>
                    </div>

                    <div className="w-full sm:w-48 space-y-2">
                      <div className="flex justify-between text-[10px] text-education-navy/70 font-semibold">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <Link 
                          to={`/courses/${course.id}`}
                          className="text-[10px] font-bold text-sky-500 hover:text-sky-600 flex items-center gap-0.5"
                        >
                          Resume Learning <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Circular Progress & Schedule */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Animated Circular Chart */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm text-center space-y-4">
              <h3 className="font-bold text-sm text-education-navy">Overall Curriculum Completion</h3>
              
              <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    className="stroke-sky-100"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="72"
                    cy="72"
                    r={radius}
                    className="stroke-sky-500"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-education-navy font-mono">
                    {dashboard.overallProgress}%
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Completed</span>
                </div>
              </div>
            </div>

            {/* Upcoming Lessons */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-education-navy flex items-center gap-1.5">
                <Calendar size={16} className="text-sky-500" />
                Upcoming Lessons
              </h3>
              <div className="space-y-4">
                {dashboard.upcomingLessons.map(lesson => (
                  <div key={lesson.id} className="p-3.5 rounded-xl bg-sky-50/50 space-y-2 border border-sky-100/30">
                    <div className="flex items-center justify-between text-[10px] text-sky-600 font-bold uppercase">
                      <span>{lesson.date} @ {lesson.time}</span>
                    </div>
                    <h4 className="font-bold text-xs text-education-navy">{lesson.topic}</h4>
                    <div className="flex items-center justify-between pt-1 text-[10px] text-education-navy/70">
                      <span>{lesson.courseTitle}</span>
                      <span className="font-semibold">{lesson.instructorName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
