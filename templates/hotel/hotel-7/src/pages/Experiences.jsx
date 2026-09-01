import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { EXPERIENCES } from '../data/experiences';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -15 }
};

export default function Experiences() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Wild Sanctuary Hikes & Leisure
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Curated Experiences
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          Reconnect with forest depths, trace coastal cliff path views, and navigate Golden Hour lagoon waters with custom activities.
        </p>
      </div>

      {/* Grid List */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px'
      }}>
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(197, 168, 128, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Image Wrap */}
            <div style={{ overflow: 'hidden', aspectRatio: '16/10', position: 'relative' }}>
              <img
                src={exp.image}
                alt={exp.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              <span style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: 'rgba(17, 17, 17, 0.8)',
                color: '#c5a880',
                fontSize: '0.68rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '6px 12px',
                border: '1px solid rgba(197, 168, 128, 0.3)'
              }}>
                {exp.category}
              </span>
            </div>

            {/* Content Details */}
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '15px' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: '400',
                margin: 0,
                color: '#1e1e1e'
              }}>
                {exp.title}
              </h2>

              <p style={{
                fontSize: '0.88rem',
                lineHeight: '1.65',
                color: '#666666',
                margin: 0
              }}>
                {exp.description}
              </p>

              {/* Specs */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: '#777777',
                borderTop: '1px solid #f1f5f9',
                paddingTop: '15px',
                marginTop: 'auto'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={12} style={{ color: '#c5a880' }} /> {exp.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600', color: '#1e1e1e' }}>
                  <Tag size={12} style={{ color: '#c5a880' }} /> {exp.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
