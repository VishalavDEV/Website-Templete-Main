import React from 'react';
import { X, Printer, Download, MapPin, Mail, Award, GraduationCap } from 'lucide-react';
import { CHEF_PROFILE, CAREER_TIMELINE, EDUCATION, RECOGNITION, EXPERTISE_CATEGORIES } from '../data/culinaryData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV preview">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: 'var(--border-fine)', paddingBottom: '1rem' }}>
          <div>
            <span className="section-label">CURRICULUM VITAE PREVIEW</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-charcoal)' }}>
              Executive Culinary Resume
            </h2>
          </div>
          
          <button className="btn-primary" onClick={handlePrint} style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}>
            <Printer size={15} /> Print / Save as PDF
          </button>
        </div>

        {/* Printable CV Content Container */}
        <div style={{ padding: '2rem', backgroundColor: '#FFFFFF', border: 'var(--border-fine)', fontFamily: 'var(--font-sans)', color: '#2B2927' }}>
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid #6B1D2F', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', margin: 0, color: '#2B2927', lineHeight: 1 }}>
                {CHEF_PROFILE.name.toUpperCase()}
              </h1>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B1D2F', marginTop: '0.5rem' }}>
                {CHEF_PROFILE.title} &bull; {CHEF_PROFILE.specialization}
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#524F4B', lineHeight: '1.5' }}>
              <div><MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} /> {CHEF_PROFILE.location}</div>
              <div><Mail size={12} style={{ display: 'inline', marginRight: '4px' }} /> {CHEF_PROFILE.email}</div>
              <div>{CHEF_PROFILE.experienceYears} Years Fine Dining Leadership</div>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1D2F', marginBottom: '0.5rem' }}>
              PROFESSIONAL PROFILE
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#524F4B' }}>
              "{CHEF_PROFILE.tagline}" {CHEF_PROFILE.intro}
            </p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1D2F', marginBottom: '1rem', borderBottom: '1px solid rgba(43,41,39,0.1)', paddingBottom: '0.35rem' }}>
              CAREER TIMELINE & KITCHEN LEADERSHIP
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {CAREER_TIMELINE.map((item, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6B1D2F' }}>
                    {item.period}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#2B2927', margin: 0 }}>
                      {item.role} &mdash; <span style={{ color: '#4A5D4E', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600 }}>{item.organization}</span>
                    </h4>
                    <div style={{ fontSize: '0.75rem', color: '#7A7670', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                      {item.location} ({item.note})
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#524F4B', lineHeight: '1.5', margin: 0 }}>
                      {item.responsibilities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise & Skills */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1D2F', marginBottom: '1rem', borderBottom: '1px solid rgba(43,41,39,0.1)', paddingBottom: '0.35rem' }}>
              SPECIALIZED CULINARY COMPETENCIES
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {EXPERTISE_CATEGORIES.map((cat, idx) => (
                <div key={idx} style={{ padding: '0.85rem', backgroundColor: '#FAF8F5', border: '1px solid rgba(43,41,39,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2B2927', marginBottom: '0.35rem' }}>
                    {cat.title} ({cat.percentage}%)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#524F4B' }}>
                    {cat.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Recognition */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1D2F', marginBottom: '0.75rem' }}>
                EDUCATION & ACADEMICS
              </h3>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                  <strong style={{ color: '#2B2927' }}>{edu.degree}</strong> ({edu.year})
                  <div style={{ color: '#524F4B' }}>{edu.institution}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1D2F', marginBottom: '0.75rem' }}>
                HONORS & RECOGNITION
              </h3>
              {RECOGNITION.map((rec, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                  <strong style={{ color: '#2B2927' }}>{rec.title}</strong> ({rec.year})
                  <div style={{ color: '#524F4B' }}>{rec.organization}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(43,41,39,0.1)', fontSize: '0.7rem', color: '#7A7670', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>
            Official Executive Curriculum Vitae &bull; Fictional Demonstration Record &bull; Lucien Moreau
          </div>

        </div>
      </div>
    </div>
  );
}
