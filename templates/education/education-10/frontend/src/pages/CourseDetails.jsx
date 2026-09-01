import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BookOpen, BarChart2, Star, User, Award, ChevronDown, ChevronUp, CheckCircle, ArrowLeft, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { courses } from '../data/courses';

const difficultyColor = { Beginner: '#10b981', Intermediate: '#f59e0b', Advanced: '#ef4444' };
const courseIcons = { 'web-dev': '💻', 'data-analytics': '📊', 'python': '🐍', 'digital-marketing': '📱', 'uiux': '🎨', 'ai': '🤖', 'business': '📈', 'communication': '🗣️' };

function CurriculumModule({ module }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="curriculum-module">
      <button
        className="module-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="module-number">{module.module}</div>
        <div className="module-title">{module.title}</div>
        <div className="module-meta">
          <span>{module.lessons} lessons</span>
          <span>{module.duration}</span>
        </div>
        {open ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="module-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p>This module covers <strong>{module.title}</strong> with {module.lessons} interactive lessons ({module.duration} of content).</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CourseDetails() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <Navigate to="/404" replace />;

  const { title, description, instructor, duration, difficulty, lessons, rating, students, color, image, outcomes, curriculum } = course;

  return (
    <main>
      {/* Header */}
      <header className="course-detail-hero">
        <div className="container">
          <Link to="/courses" className="btn btn-secondary btn-sm" style={{ marginBottom: 'var(--space-xl)', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> Back to Courses
          </Link>
          <div className="course-detail-grid">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="badge badge-primary" style={{ marginBottom: 'var(--space-md)' }}>{course.category}</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 'var(--space-lg)' }}>
                {title}
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: 'var(--space-xl)' }}>{description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', fontWeight: 500 }}>
                  <Star size={16} fill="#fbbf24" color="#fbbf24" /> {rating} rating ({students.toLocaleString()} students)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <User size={16} /> {instructor}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <span className={`badge badge-${difficulty.toLowerCase()}`} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>{difficulty}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <Clock size={14} /> {duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <BookOpen size={14} /> {lessons} lessons
                </span>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="course-detail-sidebar"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="course-sidebar-top" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }} aria-hidden="true">
                  {courseIcons[image]}
                </div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85, marginBottom: 'var(--space-sm)' }}>Complete Course</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 900 }}>Free</div>
              </div>
              <div className="course-sidebar-body">
                <div className="course-meta-list">
                  {[
                    { key: 'Instructor', value: instructor, icon: User },
                    { key: 'Duration', value: duration, icon: Clock },
                    { key: 'Lessons', value: `${lessons} lessons`, icon: BookOpen },
                    { key: 'Difficulty', value: difficulty, icon: BarChart2 },
                    { key: 'Rating', value: `${rating} / 5.0`, icon: Star },
                    { key: 'Certificate', value: 'Yes, included', icon: Award },
                  ].map(({ key, value, icon: Icon }) => (
                    <div key={key} className="course-meta-row">
                      <span className="course-meta-key"><Icon size={14} /> {key}</span>
                      <span className="course-meta-value">{value}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-primary w-full"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setShowModal(true)}
                  aria-label={`Enroll in ${title}`}
                >
                  <Award size={18} /> Enroll Now — It's Free
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                  No credit card required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* What you'll learn */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-2xl)', border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-xl)' }}>What You'll Learn</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
                {outcomes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)', fontSize: '0.9rem' }}
                  >
                    <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section">
        <div className="container">
          <AnimatedSection style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 className="heading-2" style={{ marginBottom: 'var(--space-xl)' }}>Course Curriculum</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.9rem' }}>
              {curriculum.length} modules · {lessons} lessons · {duration} total
            </p>
            {curriculum.map((module) => (
              <CurriculumModule key={module.module} module={module} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Enrollment confirmation"
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Close modal"
              >
                <X size={20} color="var(--text-muted)" />
              </button>
              <motion.div
                className="modal-success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.1, stiffness: 300 }}
                aria-hidden="true"
              >
                🎉
              </motion.div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>
                You're Enrolled!
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                Welcome to <strong>{title}</strong>! Your learning journey begins now. 
                You'll receive a certificate upon successful completion.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>Start Learning</button>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Browse More Courses</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
