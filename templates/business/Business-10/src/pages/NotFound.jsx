import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <main id="main-content" className="notfound">
      {/* Background blobs */}
      <div className="notfound__bg" aria-hidden="true">
        <div className="notfound__blob notfound__blob--1" />
        <div className="notfound__blob notfound__blob--2" />
      </div>

      <div className="container notfound__content">
        {/* Animated 404 number */}
        <motion.div
          className="notfound__number font-display"
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          aria-hidden="true"
        >
          404
        </motion.div>

        {/* Floating orbits */}
        <div className="notfound__orbits" aria-hidden="true">
          <motion.div
            className="notfound__orbit notfound__orbit--1"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="notfound__orbit notfound__orbit--2"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <motion.div
          className="notfound__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="notfound__title font-display">Page Not Found</h1>
          <p className="notfound__subtitle">
            Looks like this page took an unscheduled detour. It may have been moved, deleted, or never existed in the first place.
          </p>

          <div className="notfound__actions">
            <Link to="/">
              <motion.div
                className="notfound__btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Home size={16} />
                Back to Home
              </motion.div>
            </Link>
            <motion.button
              className="notfound__btn-secondary"
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft size={16} />
              Go Back
            </motion.button>
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="notfound__particle"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${6 + i * 2}px`,
              height: `${6 + i * 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </main>
  );
};

export default NotFound;
