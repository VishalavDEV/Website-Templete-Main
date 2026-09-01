import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';

export default function EducationSection({ educationData }) {
  const pages = educationData || [];

  return (
    <section id="education" style={{ backgroundColor: 'var(--soft-gray)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">
            <GraduationCap size={14} /> ACADEMIC DEGREES
          </span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Formal Computer Science education & continuous specialization fellowships.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {pages.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="website-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GraduationCap size={18} /> {edu.institution}
                </span>

                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} color="#F97316" /> {edu.year}
                </span>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', marginBottom: '6px' }}>
                {edu.degree}
              </h3>

              <p style={{ fontSize: '14px', color: 'var(--bright-orange)', fontWeight: 700, marginBottom: '20px' }}>
                Specialization: {edu.specialization} (GPA / Honors: {edu.gpa})
              </p>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  MAJOR LEARNING AREAS
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {edu.keyLearnings.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
