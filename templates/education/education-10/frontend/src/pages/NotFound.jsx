import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found" aria-label="404 Not Found">
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        {/* Floating book animation */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '5rem', marginBottom: 'var(--space-xl)' }}
          aria-hidden="true"
        >
          📖
        </motion.div>

        <motion.div
          className="not-found-number"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: 'var(--space-md)' }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: 'var(--space-2xl)' }}
        >
          Looks like this lesson hasn't been created yet! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/courses" className="btn btn-secondary btn-lg">
            <BookOpen size={18} /> Browse Courses
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
