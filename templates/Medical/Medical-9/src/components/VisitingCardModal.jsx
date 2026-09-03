import React, { useState } from 'react';
import { X, Phone, Mail, Award, BookOpen, Clock, Calendar, CheckCircle2, RotateCw, Download, MapPin, Globe } from 'lucide-react';

export default function VisitingCardModal({ doctor, onClose, onOpenBooking }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');

  if (!doctor) return null;

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${doctor.name}
TITLE:${doctor.title}
ORG:Aura Health Medical Center
TEL;TYPE=WORK,VOICE:${doctor.contact.phone}
EMAIL:${doctor.contact.email}
NOTE:${doctor.bio}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doctor.id}_visiting_card.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="visiting-card-perspective"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '640px', minHeight: '480px' }}
      >
        <div className={`visiting-card-inner ${isFlipped ? 'flipped' : ''}`}>
          
          {/* FRONT OF VISITING CARD */}
          <div className="visiting-card-front glass-panel" style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.92) 100%)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: 'var(--shadow-lg), 0 0 40px rgba(2, 132, 199, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Top Bar: Close & Flip Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-pill" style={{ fontSize: '0.75rem' }}>
                  FACULTY VISITING CARD
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setIsFlipped(true)}
                  className="btn-secondary"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
                  title="Flip Card for Credentials"
                >
                  <RotateCw size={14} /> Flip Details
                </button>
                <button
                  onClick={onClose}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', color: 'var(--text-muted)' }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Profile Info */}
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  border: '3px solid white'
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <h3 className="heading-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {doctor.name}
                </h3>
                <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>
                  {doctor.title}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} style={{ color: 'var(--accent-teal)' }} />
                  <span>{doctor.hospitalAffiliation}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(2, 132, 199, 0.08)', padding: '2px 8px', borderRadius: '6px', fontWeight: '600', color: 'var(--primary-cyan)' }}>
                    {doctor.experienceYears} Years Experience
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(217, 119, 6, 0.1)', padding: '2px 8px', borderRadius: '6px', fontWeight: '600', color: '#d97706' }}>
                    ★ {doctor.rating} Patient Score
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(13, 148, 136, 0.1)', padding: '2px 8px', borderRadius: '6px', fontWeight: '600', color: 'var(--accent-teal)' }}>
                    {doctor.surgeriesCount} Surgeries
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Info Grid */}
            <div style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(226,232,240,0.8)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              fontSize: '0.8125rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} style={{ color: 'var(--primary-cyan)' }} />
                <span>{doctor.contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} style={{ color: 'var(--accent-teal)' }} />
                <span>{doctor.contact.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={14} style={{ color: 'var(--accent-gold)' }} />
                <span>Languages: {doctor.languages.join(', ')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={14} style={{ color: 'var(--accent-emerald)' }} />
                <span>Next Available: {doctor.nextAvailableSlot}</span>
              </div>
            </div>

            {/* Card Action Row */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <button
                onClick={handleDownloadVCard}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.7rem 0.9rem', fontSize: '0.85rem' }}
              >
                <Download size={16} />
                <span>Download vCard</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(doctor.specialtyId, doctor.id);
                }}
                className="btn-primary"
                style={{ flex: 1.3, padding: '0.7rem 0.9rem', fontSize: '0.85rem' }}
              >
                <Calendar size={16} />
                <span>Book Doctor Visit ({doctor.consultationFee})</span>
              </button>
            </div>

          </div>

          {/* BACK OF VISITING CARD (CREDENTIALS & RESEARCH) */}
          <div className="visiting-card-back glass-panel" style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(240,253,250,0.95) 0%, rgba(255,255,255,0.95) 100%)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: 'var(--shadow-lg), 0 0 40px rgba(13, 148, 136, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Back Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} /> Board Credentials & Academic Background
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
              >
                <RotateCw size={14} /> Front Card
              </button>
            </div>

            {/* Scrollable Detailed Credentials */}
            <div style={{ overflowY: 'auto', maxHeight: '300px', paddingRight: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Education & Fellowship
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {doctor.education.map((edu, idx) => (
                    <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--accent-teal)' }} />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Honors & Awards
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {doctor.awards.map((award, idx) => (
                    <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Award size={13} style={{ color: 'var(--accent-gold)' }} />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Clinical Biography
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {doctor.bio}
                </p>
              </div>
            </div>

            {/* Back Action Row */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <button
                onClick={() => setIsFlipped(false)}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.65rem 0.9rem', fontSize: '0.85rem' }}
              >
                Back to Front Profile
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(doctor.specialtyId, doctor.id);
                }}
                className="btn-primary"
                style={{ flex: 1.3, padding: '0.65rem 0.9rem', fontSize: '0.85rem' }}
              >
                <Calendar size={16} />
                <span>Confirm Booking</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
