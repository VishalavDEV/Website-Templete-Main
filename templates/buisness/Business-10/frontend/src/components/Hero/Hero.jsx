import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Globe, Award } from 'lucide-react';
import Button from '../Button/Button';
import './Hero.css';

const floatingBadges = [
  { icon: <TrendingUp size={14} />, text: '200+ Clients', delay: 0.8, pos: { top: '18%', right: '8%' } },
  { icon: <Globe size={14} />,     text: '30+ Countries', delay: 1.0, pos: { top: '60%', right: '4%' } },
  { icon: <Award size={14} />,     text: '98% Satisfaction', delay: 1.2, pos: { bottom: '20%', left: '2%' } },
];

/**
 * Animated hero section for the Home page.
 * Features: floating blobs, staggered text reveal, floating badges, mouse-parallax orb.
 */
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const orbY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__grid" />
      </div>

      {/* Parallax orb */}
      <motion.div
        className="hero__orb"
        style={{ x: orbX, y: orbY }}
        aria-hidden="true"
      />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Trusted by Fortune 500 Companies
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="hero__headline font-display">
            Engineering the
            <br />
            <span className="text-gradient">Digital Future</span>
            <br />
            of Your Business
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="hero__subheadline">
            We build enterprise-grade software, mobile apps, and cloud infrastructure
            that powers ambitious businesses to scale without limits.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="hero__actions">
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary" size="lg" icon={<Play size={14} />} iconPosition="left">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p variants={itemVariants} className="hero__trust">
            No commitment required · Dedicated project team · Results guaranteed
          </motion.p>
        </motion.div>

        {/* Visual side */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden="true"
        >
          {/* Main card */}
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-dots">
                <span /><span /><span />
              </div>
              <span className="hero__card-title">Project Dashboard</span>
            </div>
            <div className="hero__card-body">
              {[
                { label: 'FinEdge App', pct: 87, color: '#6366F1' },
                { label: 'LogiFlow Platform', pct: 64, color: '#8B5CF6' },
                { label: 'MediCore API', pct: 95, color: '#06B6D4' },
              ].map(({ label, pct, color }) => (
                <div key={label} className="hero__card-row">
                  <div className="hero__card-row-header">
                    <span className="hero__card-row-label">{label}</span>
                    <span className="hero__card-row-pct">{pct}%</span>
                  </div>
                  <div className="hero__card-bar">
                    <motion.div
                      className="hero__card-bar-fill"
                      style={{ background: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
              <div className="hero__card-metric">
                <div className="hero__card-metric-item">
                  <span className="hero__card-metric-val">$4.2B</span>
                  <span className="hero__card-metric-lbl">Client Revenue</span>
                </div>
                <div className="hero__card-metric-sep" />
                <div className="hero__card-metric-item">
                  <span className="hero__card-metric-val">99.97%</span>
                  <span className="hero__card-metric-lbl">Avg. Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          {floatingBadges.map(({ icon, text, delay, pos }) => (
            <motion.div
              key={text}
              className="hero__floating-badge"
              style={pos}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, type: 'spring', stiffness: 200 }}
            >
              <span className="hero__floating-badge-icon">{icon}</span>
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-hidden="true"
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
