import React from 'react';
import type { Doctor } from '../types';
import { Star, Clock, MapPin, Award, Calendar } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctor: Doctor) => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onViewProfile, onBookAppointment }) => {
  return (
    <div className="card-elevated" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
      {/* Card Header & Avatar */}
      <div style={{ position: 'relative', padding: '1.25rem 1.25rem 0.5rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <img
          src={doctor.avatar}
          alt={doctor.name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '16px',
            objectFit: 'cover',
            border: '2px solid #ffffff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            flexShrink: 0
          }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
            <span className="badge badge-teal" style={{ fontSize: '0.72rem' }}>
              {doctor.specialty}
            </span>
            {doctor.isFeatured && (
              <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                Featured
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {doctor.name}
          </h3>

          <p style={{ fontSize: '0.82rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.3rem' }}>
            {doctor.title}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#f59e0b', fontWeight: 700 }}>
              <Star size={14} fill="#f59e0b" /> {doctor.rating.toFixed(1)}
            </div>
            <span style={{ color: '#94a3b8' }}>({doctor.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Doctor Meta Info */}
      <div style={{ padding: '0.75rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: '#475569' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={14} color="#0d9488" />
          <span><strong>{doctor.experienceYears} Years</strong> Experience</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} color="#0d9488" />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.hospital}</span>
        </div>

        {/* Slot preview pills */}
        <div style={{ marginTop: '0.4rem', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.78rem' }}>
            <span style={{ fontWeight: 600, color: '#0f766e', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={12} /> Available Today:
            </span>
            <span style={{ fontWeight: 700, color: '#0f172a' }}>${doctor.fee} fee</span>
          </div>
          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
            {doctor.timeSlots.slice(0, 3).map((slot, idx) => (
              <span key={idx} style={{
                background: '#f0fdfa',
                color: '#0d9488',
                border: '1px solid #ccfbf1',
                padding: '0.15rem 0.45rem',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 600
              }}>
                {slot}
              </span>
            ))}
            {doctor.timeSlots.length > 3 && (
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', padding: '0.15rem 0.2rem' }}>
                +{doctor.timeSlots.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div style={{ padding: '0.85rem 1.25rem', background: '#f8fafc', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => onViewProfile(doctor)}
          className="btn-outline"
          style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem' }}
        >
          View Profile
        </button>
        <button
          onClick={() => onBookAppointment(doctor)}
          className="btn-primary"
          style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem' }}
        >
          <Calendar size={14} /> Book Visit
        </button>
      </div>
    </div>
  );
};
