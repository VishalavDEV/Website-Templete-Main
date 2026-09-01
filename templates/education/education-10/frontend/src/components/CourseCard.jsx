import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, BarChart2, BookOpen, Star, User, ArrowRight } from 'lucide-react';

const difficultyClass = {
  Beginner: 'badge-beginner',
  Intermediate: 'badge-intermediate',
  Advanced: 'badge-advanced',
};

const courseIcons = {
  'web-dev': '💻',
  'data-analytics': '📊',
  'python': '🐍',
  'digital-marketing': '📱',
  'uiux': '🎨',
  'ai': '🤖',
  'business': '📈',
  'communication': '🗣️',
};

export default function CourseCard({ course }) {
  const { id, title, category, description, instructor, duration, difficulty, lessons, rating, color, image } = course;

  return (
    <motion.div
      className="course-card"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Course image area */}
      <div
        className="course-image"
        style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)` }}
      >
        <div className="course-image-overlay" />
        <span style={{ fontSize: '4rem', zIndex: 1 }} aria-hidden="true">
          {courseIcons[image] || '📚'}
        </span>
      </div>

      <div className="course-body">
        <div
          className="course-category"
          style={{ color }}
        >
          {category}
        </div>

        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>

        {/* Meta */}
        <div className="course-meta">
          <span className="course-meta-item">
            <Clock size={13} /> {duration}
          </span>
          <span className="course-meta-item">
            <BookOpen size={13} /> {lessons} lessons
          </span>
          <span className={`badge ${difficultyClass[difficulty]}`}>
            {difficulty}
          </span>
        </div>

        {/* Footer */}
        <div className="course-footer">
          <div className="course-instructor">
            <User size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            {instructor}
          </div>
          <div className="course-rating">
            <Star size={13} fill="#fbbf24" color="#fbbf24" />
            {rating}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/courses/${id}`}
          className="btn btn-primary w-full"
          style={{ marginTop: 'var(--space-md)', justifyContent: 'center' }}
          aria-label={`View course: ${title}`}
        >
          View Course <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
