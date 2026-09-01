import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function JourneySection({ journeyData }) {
  const routeNodes = journeyData || [];

  return (
    <section id="journey">
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">
            <Navigation size={14} /> CAREER TIMELINE
          </span>
          <h2 className="section-title">My Journey & Milestones</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Evolution from computer science lab foundations to senior full-stack engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Connecting Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, #2563EB 0%, #F97316 50%, #10B981 100%)',
            borderRadius: '99px'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {routeNodes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                style={{ position: 'relative', paddingLeft: '64px' }}
              >
                {/* Node Circle Icon */}
                <div style={{
                  position: 'absolute',
                  left: '6px',
                  top: '0px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: item.id === 'current' ? '#F97316' : '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
                  zIndex: 2
                }}>
                  <MapPin size={20} />
                </div>

                <div className="website-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{
                      backgroundColor: item.id === 'current' ? 'rgba(249, 115, 22, 0.12)' : 'rgba(37, 99, 235, 0.12)',
                      color: item.id === 'current' ? '#F97316' : '#2563EB',
                      fontWeight: 800,
                      fontSize: '12px',
                      padding: '4px 12px',
                      borderRadius: '99px'
                    }}>
                      📍 {item.node} ({item.year})
                    </span>

                    <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Building2 size={14} color="#F97316" /> {item.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
