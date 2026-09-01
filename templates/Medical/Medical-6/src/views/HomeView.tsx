import React, { useState } from 'react';
import type { Doctor } from '../types';
import { dataStore } from '../services/dataStore';
import { DoctorCard } from '../components/DoctorCard';
import {
  Search, Calendar, Stethoscope, Building2,
  Star, ArrowRight, CheckCircle2, PhoneCall, Sparkles
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: (doctor?: Doctor) => void;
  onViewDoctorProfile: (doctor: Doctor) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenBooking, onViewDoctorProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const cms = dataStore.getCMS();
  const featuredDoctors = dataStore.getDoctors().filter(d => d.isFeatured);
  const departments = dataStore.getDepartments();
  const reviews = dataStore.getReviews();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('doctors');
  };

  return (
    <div>
      {/* Announcement Banner */}
      {cms.announcement && (
        <div style={{ background: 'linear-gradient(90deg, #0d9488 0%, #0284c7 100%)', color: '#ffffff', padding: '0.55rem 1rem', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>
          {cms.announcement}
        </div>
      )}

      {/* Hero Section */}
      <section style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(204, 251, 241, 0.4) 0%, rgba(248, 250, 252, 1) 70%)',
        padding: '4.5rem 0 3.5rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            {/* Left Hero Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#f0fdfa', color: '#0d9488', border: '1px solid #ccfbf1', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                <Sparkles size={14} /> {cms.heroBadge}
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
                {cms.heroTitle.split('Dynamic Care').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <span className="text-gradient">Dynamic Care</span>}
                  </React.Fragment>
                ))}
              </h1>

              <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                {cms.heroSubtitle}
              </p>

              {/* Smart Search Bar */}
              <form onSubmit={handleHeroSearch} style={{
                background: '#ffffff',
                padding: '0.5rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.8rem' }}>
                  <Search size={18} color="#0d9488" />
                  <input
                    type="text"
                    placeholder="Search doctor, condition, or specialty..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.92rem', background: 'transparent' }}
                  />
                </div>

                <select
                  value={selectedSpecialty}
                  onChange={e => setSelectedSpecialty(e.target.value)}
                  style={{ border: 'none', outline: 'none', background: '#f8fafc', padding: '0.4rem 0.8rem', borderRadius: '10px', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}
                >
                  <option value="All">All Specialties</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Dermatology">Dermatology</option>
                </select>

                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.25rem', borderRadius: '12px' }}>
                  Find Doctors
                </button>
              </form>

              {/* Quick Trust Badges */}
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" /> Zero Wait Time
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" /> Verified Specialists
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#0d9488" /> Instant E-Receipts
                </span>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div style={{ position: 'relative' }}>
              <div className="glass-card" style={{ padding: '1.5rem', position: 'relative', zIndex: 2 }}>
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Healthcare Center"
                  style={{ width: '100%', height: '320px', borderRadius: '14px', objectFit: 'cover', marginBottom: '1.25rem' }}
                />

                {/* Floating Doctor Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '2.5rem',
                  left: '0.5rem',
                  background: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ background: '#ecfdf5', color: '#047857', padding: '0.5rem', borderRadius: '10px' }}>
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'block' }}>120+ Active Doctors</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Ready for Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Tiles */}
      <section style={{ padding: '2.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '1.25rem' }}>
            <div
              onClick={() => onOpenBooking()}
              style={{
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                color: '#ffffff',
                padding: '1.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 8px 20px rgba(13, 148, 136, 0.2)'
              }}
            >
              <Calendar size={28} style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.2rem' }}>Book Visit</h4>
              <p style={{ fontSize: '0.82rem', opacity: 0.9 }}>Schedule real-time consultation</p>
            </div>

            <div
              onClick={() => onNavigate('doctors')}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                padding: '1.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Stethoscope size={28} color="#0d9488" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>Find Doctor</h4>
              <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Browse by rating & specialty</p>
            </div>

            <div
              onClick={() => onNavigate('departments')}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                padding: '1.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Building2 size={28} color="#0284c7" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>Departments</h4>
              <p style={{ fontSize: '0.82rem', color: '#64748b' }}>25 Specialized centers</p>
            </div>

            <a
              href="tel:+18009994325"
              style={{
                background: '#fff1f2',
                border: '1.5px solid #fecdd3',
                padding: '1.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <PhoneCall size={28} color="#e11d48" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#be123c', marginBottom: '0.2rem' }}>24/7 Emergency</h4>
              <p style={{ fontSize: '0.82rem', color: '#9f1239' }}>Immediate trauma dispatch</p>
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Platform Statistics Bar */}
      <section style={{ padding: '3.5rem 0', background: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '2rem', textAlign: 'center' }}>
            {cms.stats.map((stat, idx) => (
              <div key={idx} style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2dd4bf', marginBottom: '0.2rem' }}>{stat.value}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>{stat.label}</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Top Medical Board</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Meet Our Featured Doctors</h2>
            </div>
            <button onClick={() => onNavigate('doctors')} className="btn-secondary">
              Explore All 120+ Doctors <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {featuredDoctors.slice(0, 3).map(doc => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onViewProfile={onViewDoctorProfile}
                onBookAppointment={onOpenBooking}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Clinical Departments */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Specialized Care</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Clinical Departments</h2>
            <p style={{ color: '#64748b' }}>Equipped with advanced diagnostic labs and multidisciplinary surgical teams.</p>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {departments.slice(0, 6).map(dept => (
              <div key={dept.id} className="card-elevated" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#f0fdfa',
                  color: '#0d9488',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Building2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>{dept.name}</h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1rem', flex: 1 }}>{dept.description}</p>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0d9488', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Head: {dept.headDoctor}</span>
                  <span>{dept.doctorCount} Doctors</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Patient Testimonials */}
      <section style={{ padding: '4rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-success" style={{ marginBottom: '0.5rem' }}>Patient Trust</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Real Patient Experiences</h2>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {reviews.map(rev => (
              <div key={rev.id} className="card-elevated" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b', marginBottom: '0.75rem' }}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontSize: '0.92rem', color: '#334155', fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{rev.comment}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>{rev.patientName}</span>
                  <span style={{ color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <CheckCircle2 size={12} /> Verified Visit
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
