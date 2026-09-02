import React, { useState } from 'react';
import { DOCTORS } from '../data/medicalData';
import { UserCheck, Star, Calendar, Search, Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function DoctorDirectory({ onOpenBooking, onViewDoctorCard }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const departments = ['all', 'Cardiovascular System', 'Brain & Nervous System', 'Respiratory & Pulmonary', 'Musculoskeletal & Joint Care', 'Gastrointestinal & Digestive', 'Dermatology & Cutaneous Science'];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <section id="doctors" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Award size={14} />
            <span>World-Class Medical Faculty</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Meet Our <span className="gradient-text">Specialist Faculty</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Board-certified surgeons, researchers, and department leaders. Tap any doctor's profile 
            to open their interactive 3D digital visiting card.
          </p>
        </div>

        {/* Filter Controls */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          marginBottom: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', flexGrow: 1, maxWidth: '360px' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input
              type="text"
              placeholder="Search doctor by name, specialty, or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Department Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  border: '1px solid',
                  borderColor: selectedDept === dept ? 'var(--primary-cyan)' : 'var(--border-light)',
                  background: selectedDept === dept ? 'var(--primary-cyan)' : 'white',
                  color: selectedDept === dept ? 'white' : 'var(--text-muted)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {dept === 'all' ? 'All Departments' : dept.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>
                {/* Doctor Avatar */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: 'var(--radius-md)',
                      objectFit: 'cover',
                      border: '2px solid white',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    background: '#10b981',
                    border: '2px solid white',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%'
                  }} title="Accepting Patients"></span>
                </div>

                {/* Doctor Bio Snippet */}
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-cyan)', textTransform: 'uppercase' }}>
                    {doc.department}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {doc.name}
                  </h3>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {doc.title}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#d97706', fontWeight: '700' }}>
                      <Star size={14} fill="#d97706" /> {doc.rating} ({doc.reviewsCount})
                    </span>
                    <span style={{ color: 'var(--text-light)' }}>• {doc.experienceYears} Yrs Exp</span>
                  </div>
                </div>
              </div>

              {/* Education snippet */}
              <div style={{
                background: 'var(--bg-subtle)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '2px' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-teal)' }} />
                  <span>{doc.hospitalAffiliation}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}>
                  <CheckCircle2 size={12} style={{ color: 'var(--accent-emerald)' }} />
                  <span>Next slot: {doc.nextAvailableSlot}</span>
                </div>
              </div>

              {/* Card Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                <button
                  onClick={() => onViewDoctorCard(doc)}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.8125rem' }}
                >
                  <UserCheck size={15} />
                  <span>Visiting Card</span>
                </button>

                <button
                  onClick={() => onOpenBooking(doc.specialtyId, doc.id)}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.8125rem' }}
                >
                  <Calendar size={15} />
                  <span>Book Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
