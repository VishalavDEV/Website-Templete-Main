import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  GraduationCap, BookOpen, Lightbulb, Code, TrendingUp,
  Award, Users, Zap, Target, ArrowRight, ChevronRight,
  Star, PlayCircle, Globe, Shield, Clock, CheckCircle
} from 'lucide-react';
import AnimatedSection, { itemVariants, containerVariants } from '../components/AnimatedSection';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { courses } from '../data/courses';
import { stats } from '../data/stats';
import { testimonials } from '../data/testimonials';

// Floating icons for hero
const floatingItems = [
  { icon: '📚', x: '10%', y: '20%', size: '2.5rem', delay: 0 },
  { icon: '💡', x: '85%', y: '15%', size: '2rem', delay: 0.3 },
  { icon: '🎓', x: '75%', y: '70%', size: '2.8rem', delay: 0.6 },
  { icon: '✏️', x: '5%', y: '75%', size: '2rem', delay: 0.9 },
  { icon: '🧪', x: '90%', y: '45%', size: '1.8rem', delay: 1.2 },
  { icon: '📊', x: '15%', y: '55%', size: '2.2rem', delay: 0.5 },
  { icon: '🔬', x: '60%', y: '85%', size: '1.9rem', delay: 0.8 },
];

const features = [
  { icon: Users, label: 'Expert Instructors', desc: 'Learn from experienced educators and industry professionals.', color: '#6366f1' },
  { icon: Target, label: 'Practical Learning', desc: 'Learn through real-world examples, projects, and case studies.', color: '#8b5cf6' },
  { icon: Clock, label: 'Flexible Schedule', desc: 'Learn at your own pace, from anywhere, anytime.', color: '#06b6d4' },
  { icon: Award, label: 'Certifications', desc: 'Earn certificates to validate and showcase your new skills.', color: '#f59e0b' },
  { icon: Zap, label: 'Interactive Content', desc: 'Engage with modern, interactive learning materials and exercises.', color: '#ec4899' },
  { icon: TrendingUp, label: 'Career Focused', desc: 'Build in-demand skills that prepare you for your future career.', color: '#10b981' },
];

const processSteps = [
  { num: '01', title: 'Choose a Course', desc: 'Browse our curated catalog and find your perfect course.' },
  { num: '02', title: 'Start Learning', desc: 'Dive into structured, expert-crafted lessons at your pace.' },
  { num: '03', title: 'Practice Skills', desc: 'Reinforce learning with hands-on exercises and projects.' },
  { num: '04', title: 'Complete Projects', desc: 'Build real-world portfolio projects to prove your skills.' },
  { num: '05', title: 'Earn Certificate', desc: 'Get certified and showcase your achievement to the world.' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating icons
      floatingItems.forEach((_, i) => {
        gsap.to(`.hero-float-${i}`, {
          y: '-=20',
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero" ref={heroRef} aria-label="Hero section">
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          {floatingItems.map((item, i) => (
            <div
              key={i}
              className={`hero-float-${i}`}
              style={{
                position: 'absolute',
                left: item.x,
                top: item.y,
                fontSize: item.size,
                opacity: 0.35,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            {/* Left: Text */}
            <div className="hero-text">
              <motion.div
                className="hero-tag"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Star size={14} fill="#6366f1" color="#6366f1" />
                Rated #1 EdTech Platform 2024
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Learn Today.{' '}
                <span className="text-gradient">Build Your</span>
                {' '}Future.
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover premium courses crafted by industry experts. Master in-demand skills, 
                build real projects, and earn certifications that open career doors.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/courses" className="btn btn-primary btn-lg">
                  Explore Courses <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  <PlayCircle size={18} /> Start Learning
                </Link>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { value: '50+', label: 'Courses' },
                  { value: '25K+', label: 'Students' },
                  { value: '95%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label} className="hero-stat-item">
                    <div className="hero-stat-number">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Illustration */}
            <div className="hero-visual">
              <motion.div
                className="hero-scene"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Center graphic */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <div className="hero-center-graphic" aria-hidden="true">
                    <GraduationCap size={80} color="white" />
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  className="floating-card"
                  style={{ top: '5%', left: '-5%' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BookOpen size={18} color="#6366f1" />
                  <span>50+ Courses</span>
                </motion.div>

                <motion.div
                  className="floating-card"
                  style={{ bottom: '10%', right: '-5%' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <Users size={18} color="#8b5cf6" />
                  <span>25K+ Students</span>
                </motion.div>

                <motion.div
                  className="floating-card"
                  style={{ top: '45%', right: '-8%' }}
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Award size={18} color="#f59e0b" />
                  <span>Certificates</span>
                </motion.div>

                <motion.div
                  className="floating-card"
                  style={{ bottom: '30%', left: '-8%' }}
                  animate={{ x: [0, -8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                >
                  <Star size={18} color="#ec4899" fill="#ec4899" />
                  <span>4.8 Rating</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats-section" aria-label="Platform statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StatCard stat={stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section features-section" aria-label="Why choose us">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><Zap size={12} /> Why Choose Us</span>
            <h2 className="heading-1">
              Everything You Need to{' '}
              <span className="text-gradient">Succeed</span>
            </h2>
            <p>Our platform is designed with your success in mind — giving you the tools, guidance, and community to reach your learning goals.</p>
          </AnimatedSection>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.label}
                className="feature-card"
                variants={itemVariants}
              >
                <div
                  className="feature-icon"
                  style={{ background: `${feature.color}18` }}
                  aria-hidden="true"
                >
                  <feature.icon size={28} color={feature.color} />
                </div>
                <h3>{feature.label}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED COURSES ============ */}
      <section className="section courses-section" aria-label="Featured courses">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><BookOpen size={12} /> Featured Courses</span>
            <h2 className="heading-1">
              Explore Our{' '}
              <span className="text-gradient">Top Courses</span>
            </h2>
            <p>Handpicked courses taught by world-class instructors to help you master skills that matter most in today's world.</p>
          </AnimatedSection>

          <motion.div
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {courses.slice(0, 6).map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link to="/courses" className="btn btn-primary btn-lg">
              View All Courses <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section process-section" aria-label="How it works">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><CheckCircle size={12} /> How It Works</span>
            <h2 className="heading-1">
              Your Learning{' '}
              <span className="text-gradient">Journey</span>
            </h2>
            <p>A clear, simple path from choosing your first course to earning your certificate and launching your new career.</p>
          </AnimatedSection>

          <div className="process-steps">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <motion.div
                  className="process-number"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.num}
                </motion.div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS PREVIEW ============ */}
      <section className="section" style={{ background: 'var(--gray-50)' }} aria-label="Student testimonials">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><Star size={12} /> Student Stories</span>
            <h2 className="heading-1">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p>Thousands of learners have transformed their careers through EduLearn. Here are some of their stories.</p>
          </AnimatedSection>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.slice(0, 3).map((t) => (
              <motion.div key={t.id} variants={itemVariants}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link to="/testimonials" className="btn btn-secondary btn-lg">
              Read All Stories <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CERTIFICATE SECTION ============ */}
      <section className="section certificate-section" aria-label="Certification">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'center' }}>
            <AnimatedSection>
              <span className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                <Award size={12} /> Certification
              </span>
              <h2 className="heading-1" style={{ color: 'white', marginBottom: 'var(--space-lg)' }}>
                Earn Your Certificate & Prove Your Skills
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: 'var(--space-2xl)' }}>
                Complete your learning journey and earn a verified digital certificate. 
                Share it on LinkedIn, add it to your resume, and show the world what you've achieved.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
                {['Industry-recognized certificates', 'Shareable on LinkedIn & resume', 'Digital badge included', 'Lifetime validity'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
                    <CheckCircle size={16} color="#86efac" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/courses" className="btn btn-ghost btn-lg">
                Explore Courses <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            {/* Certificate mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="certificate-mockup">
                <div className="certificate-seal">
                  <Award size={30} />
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>
                  Certificate of Completion
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                  EduLearn
                </h3>
                <div style={{ width: 60, height: 2, background: 'var(--gradient-primary)', margin: 'var(--space-md) auto' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: 'var(--space-sm)' }}>This is to certify that</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: 'var(--primary)', marginBottom: 'var(--space-sm)' }}>Your Name</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>has successfully completed</p>
                <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginTop: 'var(--space-xs)' }}>Web Development Bootcamp</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--gray-100)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <span>EduLearn</span>
                  <span>2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section" aria-label="Call to action">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <span className="section-badge"><Globe size={12} /> Join EduLearn</span>
            <h2 className="heading-1" style={{ marginBottom: 'var(--space-md)' }}>
              Ready to Start Your{' '}
              <span className="text-gradient">Learning Journey?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto var(--space-2xl)' }}>
              Join over 25,000 students who have already transformed their careers with EduLearn. Your future starts today.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/courses" className="btn btn-primary btn-lg">
                Browse Courses <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
