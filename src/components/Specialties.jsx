import React, { useState } from 'react';
import { SPECIALTIES, DOCTORS } from '../data/medicalData';
import { HeartPulse, BrainCircuit, Activity, Wind, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Specialties({ onOpenBooking, onViewDoctorCard }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', 'Surgical & Interventional', 'Advanced Surgery', 'Reconstructive Surgery', 'Medical Care'];

  const filteredSpecialties = activeTab === 'all'
    ? SPECIALTIES
    : SPECIALTIES.filter((s) => s.category === activeTab);

  const getSpecialtyIcon = (name) => {
    switch (name) {
      case 'HeartPulse': return <HeartPulse size={24} />;
      case 'BrainCircuit': return <BrainCircuit size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Wind': return <Wind size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      default: return <Activity size={24} />;
    }
  };

  return (
    <section id="specialties" style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.5)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Clinical Care Centers</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Specialties & <span className="gradient-text">Medical Excellence</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Explore our world-renowned clinical departments equipped with cutting-edge robotic instrumentation 
            and multi-disciplinary medical teams.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={activeTab === cat ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem',
                textTransform: 'capitalize'
              }}
            >
              {cat === 'all' ? 'All Care Centers' : cat}
            </button>
          ))}
        </div>

        {/* Grid of Specialty Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '2rem'
        }}>
          {filteredSpecialties.map((spec) => {
            const headDoctor = DOCTORS.find((d) => d.id === spec.headDoctorId);

            return (
              <div key={spec.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: `${spec.accentColor}15`,
                    color: spec.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getSpecialtyIcon(spec.iconName)}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-subtle)',
                    padding: '4px 10px',
                    borderRadius: '12px'
                  }}>
                    {spec.category}
                  </span>
                </div>

                <h3 className="heading-editorial" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {spec.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', minHeight: '40px' }}>
                  {spec.tagline}
                </p>

                {/* Key Services List */}
                <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Key Procedures & Interventions
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {spec.keyServices.slice(0, 3).map((serv, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-teal)' }} />
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment Badge */}
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-main)',
                  background: 'rgba(2, 132, 199, 0.06)',
                  border: '1px solid rgba(2, 132, 199, 0.15)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}>
                  🔬 Tech: {spec.equipment}
                </div>

                {/* Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
                  {headDoctor && (
                    <button
                      onClick={() => onViewDoctorCard(headDoctor)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-cyan)',
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span>Dr. {headDoctor.name.split(',')[0]}</span>
                    </button>
                  )}

                  <button
                    onClick={() => onOpenBooking(spec.id)}
                    className="btn-primary"
                    style={{ padding: '0.5rem 1.1rem', fontSize: '0.8125rem' }}
                  >
                    <span>Book Care</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
