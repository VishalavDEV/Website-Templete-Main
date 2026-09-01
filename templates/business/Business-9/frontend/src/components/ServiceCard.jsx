import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index, onLearnMore }) {
  const { title, description, iconName, category, benefits } = service;

  // Resolve Lucide icon dynamically
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: 'var(--glass-shadow-hover)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '340px'
      }}
    >
      {/* Category tag */}
      <span style={{
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--primary)',
        background: 'rgba(249, 115, 22, 0.08)',
        padding: '0.25rem 0.6rem',
        borderRadius: '4px'
      }}>
        {category}
      </span>

      {/* Icon Area */}
      <div style={{
        background: 'var(--primary-gradient)',
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        marginBottom: '1.75rem',
        boxShadow: '0 4px 15px rgba(249, 115, 22, 0.25)'
      }}>
        <IconComponent size={24} />
      </div>

      {/* Text Info */}
      <h3 style={{
        fontSize: '1.35rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
        fontFamily: 'var(--font-title)'
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        flexGrow: 1
      }}>
        {description}
      </p>

      {/* Mini-benefits list */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        width: '100%',
        marginBottom: '1.5rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        {benefits && benefits.slice(0, 2).map((benefit, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }}></span>
            {benefit}
          </div>
        ))}
      </div>

      {/* Interactive Action Link */}
      <button
        onClick={() => onLearnMore && onLearnMore(service)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary)',
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          padding: 0,
          transition: 'var(--transition-fast)'
        }}
        className="learn-more-btn"
      >
        Explore Service <ArrowRight size={15} className="arrow-icon" />
      </button>

      <style>{`
        .learn-more-btn:hover {
          color: var(--primary-hover);
        }
        .learn-more-btn:hover .arrow-icon {
          transform: translateX(5px);
        }
        .arrow-icon {
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
}
