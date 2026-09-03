import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Play } from 'lucide-react';

const socialIcons = { linkedin: ExternalLink, twitter: MessageSquare, youtube: Play, instagram: null };

export default function InstructorCard({ instructor }) {
  const { name, designation, expertise, experience, courses, students, rating, bio, avatar, color, social } = instructor;

  return (
    <motion.div
      className="instructor-card"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="instructor-avatar-wrap">
        <motion.div
          className="instructor-avatar"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
          whileHover={{ scale: 1.08 }}
        >
          {avatar}
        </motion.div>
      </div>

      <div className="instructor-body">
        <h3 className="instructor-name">{name}</h3>
        <p className="instructor-designation">{designation}</p>
        <span
          className="instructor-tag"
          style={{ background: `${color}18`, color }}
        >
          {expertise}
        </span>

        <div className="instructor-stats">
          <div className="instructor-stat">
            <div className="instructor-stat-value">{experience}</div>
            <div className="instructor-stat-label">Experience</div>
          </div>
          <div className="instructor-stat">
            <div className="instructor-stat-value">{courses}</div>
            <div className="instructor-stat-label">Courses</div>
          </div>
          <div className="instructor-stat">
            <div className="instructor-stat-value">{(students / 1000).toFixed(1)}K</div>
            <div className="instructor-stat-label">Students</div>
          </div>
        </div>

        <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-md)' }}>
          {bio}
        </p>

        <div className="social-links">
          {Object.entries(social).map(([platform, href]) => {
            const Icon = socialIcons[platform];
            if (!Icon) return null;
            return (
              <motion.a
                key={platform}
                href={href}
                className="social-link"
                aria-label={`${name} on ${platform}`}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={15} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
