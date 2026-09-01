import React, { useState } from 'react';
import type { Doctor } from '../types';
import { dataStore } from '../services/dataStore';
import { X, Star, Calendar, MapPin, BookOpen, Languages, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({ doctor, onClose, onBookAppointment }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'schedule' | 'reviews'>('about');

  if (!doctor) return null;

  const reviews = dataStore.getReviewsForDoctor(doctor.id);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
          color: '#ffffff',
          padding: '1.5rem 1.75rem',
          position: 'relative',
          borderTopLeftRadius: 'var(--radius-xl)',
          borderTopRightRadius: 'var(--radius-xl)'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <img
              src={doctor.avatar}
              alt={doctor.name}
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '20px',
                objectFit: 'cover',
                border: '3px solid #ffffff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
              }}
            />
            <div>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {doctor.specialty}
                </span>
                <span style={{ background: '#ecfdf5', color: '#047857', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                  Available Consultation
                </span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>{doctor.name}</h2>
              <p style={{ opacity: 0.9, fontSize: '0.9rem', marginTop: '0.1rem' }}>{doctor.title}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Star size={15} fill="#f59e0b" color="#f59e0b" /> <strong>{doctor.rating.toFixed(1)}</strong> ({doctor.reviewCount} reviews)
                </span>
                <span>•</span>
                <span><strong>{doctor.experienceYears} Yrs</strong> Exp</span>
                <span>•</span>
                <span><strong>${doctor.fee}</strong> Consultation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', padding: '0 1.75rem' }}>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '1rem 1.25rem',
              fontWeight: activeTab === 'about' ? 700 : 500,
              color: activeTab === 'about' ? '#0d9488' : '#64748b',
              borderBottom: activeTab === 'about' ? '3px solid #0d9488' : '3px solid transparent'
            }}
          >
            Overview & Bio
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            style={{
              padding: '1rem 1.25rem',
              fontWeight: activeTab === 'schedule' ? 700 : 500,
              color: activeTab === 'schedule' ? '#0d9488' : '#64748b',
              borderBottom: activeTab === 'schedule' ? '3px solid #0d9488' : '3px solid transparent'
            }}
          >
            Schedule & Slots ({doctor.timeSlots.length})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            style={{
              padding: '1rem 1.25rem',
              fontWeight: activeTab === 'reviews' ? 700 : 500,
              color: activeTab === 'reviews' ? '#0d9488' : '#64748b',
              borderBottom: activeTab === 'reviews' ? '3px solid #0d9488' : '3px solid transparent'
            }}
          >
            Patient Reviews ({reviews.length})
          </button>
        </div>

        {/* Tab Body */}
        <div style={{ padding: '1.75rem' }}>
          {activeTab === 'about' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>About Doctor</h4>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.92rem' }}>{doctor.bio}</p>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    <BookOpen size={16} color="#0d9488" /> Education & Training
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{doctor.education}</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    <Languages size={16} color="#0d9488" /> Languages Spoken
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{doctor.languages.join(', ')}</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    <MapPin size={16} color="#0d9488" /> Clinic Location
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{doctor.location} ({doctor.hospital})</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    <ShieldCheck size={16} color="#0d9488" /> Hospital Affiliation
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>{doctor.hospital}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Weekly Working Days</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
                  const isAvailable = doctor.availableDays.includes(day);
                  return (
                    <span
                      key={day}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        background: isAvailable ? '#f0fdfa' : '#f1f5f9',
                        color: isAvailable ? '#0d9488' : '#94a3b8',
                        border: isAvailable ? '1px solid #ccfbf1' : '1px solid #e2e8f0'
                      }}
                    >
                      {day} {isAvailable ? '✓' : ''}
                    </span>
                  );
                })}
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Daily Consultation Slots</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.6rem' }}>
                {doctor.timeSlots.map((slot, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid #0d9488',
                      color: '#0d9488',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Clock size={14} /> {slot}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {reviews.length === 0 ? (
                <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>No reviews submitted yet.</p>
              ) : (
                reviews.map(r => (
                  <div key={r.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>{r.patientName}</span>
                        {r.verified && (
                          <span style={{ fontSize: '0.72rem', color: '#047857', background: '#ecfdf5', padding: '0.1rem 0.4rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                            <CheckCircle size={10} /> Verified Patient
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{r.date}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.2rem', color: '#f59e0b', marginBottom: '0.4rem' }}>
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="#f59e0b" />
                      ))}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: '#475569' }}>"{r.comment}"</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div style={{ padding: '1.25rem 1.75rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Consultation Fee</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>${doctor.fee}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookAppointment(doctor);
            }}
            className="btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <Calendar size={18} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
