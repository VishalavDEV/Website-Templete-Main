import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Calendar, HeartHandshake } from 'lucide-react';

function StatCounter({ target, label, suffix = '', icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // Total duration of count-up in ms
    const duration = 2000;
    // Calculate increment interval based on speed
    const stepTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2.25rem 1.75rem',
        borderRadius: 'var(--border-radius-md)',
        background: 'rgba(255, 255, 255, 0.5)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, boxShadow: 'var(--glass-shadow-hover)' }}
    >
      <div style={{
        background: 'rgba(249, 115, 22, 0.08)',
        border: '1px solid rgba(249, 115, 22, 0.15)',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        color: 'var(--primary)'
      }}>
        {Icon && <Icon size={26} className="float-anim" />}
      </div>

      <span style={{
        fontFamily: 'var(--font-title)',
        fontSize: '2.5rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        lineHeight: 1.1,
        marginBottom: '0.4rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        {count}{suffix}
      </span>

      <span style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  const statsList = [
    { target: '150', suffix: '+', label: 'Projects Completed', icon: Award },
    { target: '50', suffix: '+', label: 'Business Clients', icon: Users },
    { target: '10', suffix: '+', label: 'Years Experience', icon: Calendar },
    { target: '98', suffix: '%', label: 'Client Satisfaction', icon: HeartHandshake }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
      <div className="container">
        <div className="grid-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          {statsList.map((stat, idx) => (
            <StatCounter
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .grid-4 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
