import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, 
  BookOpen, Users, Award, TrendingUp, Star, ChevronLeft, ChevronRight,
  GraduationCap, Laptop, Cpu, Code2, Calendar, Clock
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import InstructorCard from '../components/InstructorCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import StatsCounter from '../components/StatsCounter';

import { coursesData } from '../data/courses';
import { instructorsData } from '../data/instructors';
import { eventsData } from '../data/events';
import { blogsData } from '../data/blogs';
import { testimonialsData, platformStats } from '../data/testimonials';

export default function Home({ onEnroll, onViewInstructor, onRegisterEvent }) {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const popularCourses = coursesData.filter((c) => c.featured).slice(0, 3);
  const featuredInstructors = instructorsData.slice(0, 4);
  const upcomingEvents = eventsData.slice(0, 3);
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] pt-32 pb-20 bg-slate-950 text-white flex items-center overflow-hidden">
        {/* Soft Animated Background Blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-600/25 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none"></div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-sky-400 animate-spin" />
                <span>Next-Generation Global Education Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Learn Today.{' '}
                <span className="gradient-text-light block sm:inline">Lead Tomorrow.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Unlock career-defining knowledge from world-class researchers and engineers. Accredited courses in AI, Full-Stack Development, Data Science, and Cybersecurity designed for tomorrow's industry leaders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2 group text-sm"
                >
                  Explore 500+ Courses
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/admissions"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <GraduationCap className="w-4 h-4 text-sky-300" />
                  Apply For Admission
                </Link>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No Prerequisites Required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credentials</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>1-on-1 Mentorship</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="Students Learning Together"
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent rounded-2xl"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-primary-600 text-white uppercase tracking-wider mb-2 inline-block">
                      Top Featured Program
                    </span>
                    <h3 className="font-extrabold text-xl line-clamp-1">AI & Deep Learning Masterclass</h3>
                    <p className="text-xs text-slate-300 mt-1">Instructor: Dr. Elena Rostova • Stanford AI Lab</p>
                  </div>
                </div>

                {/* Floating Card 1: Live Enrolled Stat */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -left-6 glass-card-dark p-4 rounded-2xl shadow-2xl border border-white/10 hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-white">50,000+</span>
                    <span className="text-[10px] text-slate-300 font-medium">Active Enrolled Students</span>
                  </div>
                </motion.div>

                {/* Floating Card 2: Rating Star Badge */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -right-6 glass-card-dark p-4 rounded-2xl shadow-2xl border border-white/10 hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-white">4.9 / 5.0</span>
                    <span className="text-[10px] text-slate-300 font-medium">Over 25,000+ Reviews</span>
                  </div>
                </motion.div>

                {/* Animated Graduation Cap Icon Blob */}
                <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-white shadow-glow animate-float-medium hidden lg:flex">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY INSTITUTIONS LOGO WALL */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-8">
            Graduates Employed By & Partnered With Global Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            {['Google', 'Meta', 'Amazon', 'McKinsey', 'Stripe', 'Figma', 'Microsoft', 'Stanford'].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-slate-700 tracking-tighter hover:text-primary-600 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR COURSES SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Top Rated Curriculums"
              title="Explore Popular"
              highlight="Certificate Programs"
              subtitle="Industry-validated courses engineered to accelerate your career in high-demand fields."
            />
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm mb-12 md:mb-0"
            >
              Browse All 500+ Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Excellence"
            title="Why Students Choose"
            highlight="EduPrime Platform"
            subtitle="We combine rigorous academic theory with real-world industry execution."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Accredited Certifications",
                desc: "Gain industry-recognized digital credentials shareable on LinkedIn and verified by employers."
              },
              {
                icon: Users,
                title: "World-Class Faculty",
                desc: "Learn directly from researchers, chief architects, and senior directors with 10+ years field experience."
              },
              {
                icon: Laptop,
                title: "Hands-on Capstones",
                desc: "Build real production web apps, deep learning models, and security penetration test suites."
              },
              {
                icon: TrendingUp,
                title: "Career Placement Suite",
                desc: "Get 1-on-1 resume reviews, mock interviews, and direct referral access to 350+ corporate partners."
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LEARNING PROCESS (4 STEPS) */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="Proven Methodology"
            title="Our 4-Step"
            highlight="Learning Framework"
            subtitle="From total beginner to senior industry practitioner in structured milestones."
            center
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-12">
            {[
              { step: "01", title: "Enroll & Plan", desc: "Select your desired track and receive a customized learning roadmap based on your goals." },
              { step: "02", title: "Interactive Learning", desc: "Watch bite-sized HD video lectures and solve guided coding challenges." },
              { step: "03", title: "Build Projects", desc: "Construct enterprise-grade capstones under the guidance of staff engineers." },
              { step: "04", title: "Get Certified & Placed", desc: "Earn digital verified certificates and receive interview drops with hiring partners." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass-card-dark p-6 rounded-2xl border border-white/10 relative group"
              >
                <span className="text-4xl font-black text-primary-500/30 group-hover:text-primary-400 transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED INSTRUCTORS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Distinguished Faculty"
              title="Learn From Industry"
              highlight="Pioneers & Executives"
              subtitle="Our instructors hold senior roles at Fortune 500 companies and Ivy League research labs."
            />
            <Link
              to="/instructors"
              className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm mb-12 md:mb-0"
            >
              View Full Instructor Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredInstructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                onViewProfile={onViewInstructor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. ANIMATED STATISTICS COUNTER */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={platformStats} />
        </div>
      </section>

      {/* 8. TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Student Testimonials"
            title="Transformative Student"
            highlight="Success Stories"
            subtitle="Hear directly from our graduates who now work at top tech companies worldwide."
            center
            light
          />

          <div className="relative mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard testimonial={testimonialsData[activeTestimonialIdx]} />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
                className="p-3 rounded-full bg-slate-800 hover:bg-primary-600 text-white transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeTestimonialIdx ? 'w-8 bg-primary-500' : 'w-2.5 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length)}
                className="p-3 rounded-full bg-slate-800 hover:bg-primary-600 text-white transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. UPCOMING EVENTS TEASER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Live Interactive Events"
              title="Upcoming Workshops &"
              highlight="Tech Conferences"
              subtitle="Participate in live coding hackathons, webinars, and employer speed interviewing."
            />
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm mb-12 md:mb-0"
            >
              See Calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} onRegister={onRegisterEvent} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. LATEST BLOG ARTICLES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Educational Insights"
              title="Latest Articles &"
              highlight="Research Papers"
              subtitle="Stay ahead of market trends with tutorial guides and tech opinion pieces."
            />
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 text-sm mb-12 md:mb-0"
            >
              Browse All Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-primary-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary-500/20 text-sky-300 border border-primary-500/30 uppercase tracking-widest mb-6 inline-block">
            Start Your Journey Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Ready to Build Your Career in Tech & Business?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join over 50,000 students worldwide. Gain immediate access to 500+ top-rated courses, 1-on-1 mentor guidance, and lifetime learning resources.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-primary-600 hover:bg-primary-500 text-white shadow-xl shadow-primary-600/30 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Apply For Admission Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-sm"
            >
              Browse Course Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
