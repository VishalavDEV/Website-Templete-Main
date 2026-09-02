import React, { useState } from 'react';
import { BODY_REGIONS, DOCTORS } from '../data/medicalData';
import { Activity, Brain, Heart, Wind, Bone, Eye, Sparkles, ChevronRight, UserCheck, ShieldCheck, Stethoscope } from 'lucide-react';

export default function AnatomyExplorer({ onOpenBooking, onViewDoctorCard }) {
  const [selectedRegionId, setSelectedRegionId] = useState('heart');

  const activeRegion = BODY_REGIONS.find((r) => r.id === selectedRegionId) || BODY_REGIONS[1];
  const leadDoctor = DOCTORS.find((d) => d.id === activeRegion.leadDoctorId);

  const getRegionIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain size={20} />;
      case 'Heart': return <Heart size={20} />;
      case 'Wind': return <Wind size={20} />;
      case 'Bone': return <Bone size={20} />;
      case 'Eye': return <Eye size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      default: return <Activity size={20} />;
    }
  };

  return (
    <section id="anatomy" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Activity size={14} />
            <span>Interactive Diagnostic Visualizer</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Human Anatomy — <span className="gradient-text">Reimagined</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Select any organ system on our interactive body map to explore advanced clinical treatments, 
            specialized technology, and lead faculty doctors.
          </p>
        </div>

        {/* Explorer Layout: SVG Map + Interactive Detail Panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left: SVG Human Anatomy Body Map */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="glass-panel" style={{
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tap Body Region to Focus
              </div>

              {/* Anatomy SVG Graphic */}
              <div className="anatomy-svg-container">
                <svg viewBox="0 0 400 520" style={{ width: '100%', height: 'auto', maxHeight: '460px' }}>
                  {/* Subtle Body Contour Silhouette */}
                  <path
                    d="M 200 40 C 175 40 165 65 165 90 C 165 110 170 120 155 130 C 140 140 120 160 115 190 C 110 220 120 270 125 310 C 130 350 140 380 140 430 L 160 500 L 185 500 L 195 380 L 205 380 L 215 500 L 240 500 L 260 430 C 260 380 270 350 275 310 C 280 270 290 220 285 190 C 280 160 260 140 245 130 C 230 120 235 110 235 90 C 235 65 225 40 200 40 Z"
                    fill="rgba(226, 232, 240, 0.45)"
                    stroke="rgba(148, 163, 184, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Body Hotspot Nodes */}
                  {BODY_REGIONS.map((region) => {
                    const isSelected = region.id === selectedRegionId;
                    return (
                      <g
                        key={region.id}
                        className={`anatomy-node ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedRegionId(region.id)}
                      >
                        {/* Pulse Effect for Active Region */}
                        {isSelected && (
                          <circle
                            cx={region.svgCoords.cx}
                            cy={region.svgCoords.cy}
                            className="pulse-ring"
                            fill="none"
                            stroke={region.id === 'heart' ? '#e11d48' : '#0284c7'}
                          />
                        )}
                        {/* Main Node Circle */}
                        <circle
                          cx={region.svgCoords.cx}
                          cy={region.svgCoords.cy}
                          r={region.svgCoords.r}
                          fill={isSelected ? '#0284c7' : 'rgba(255, 255, 255, 0.95)'}
                          stroke={isSelected ? '#0d9488' : '#0284c7'}
                          strokeWidth="3"
                          style={{
                            boxShadow: '0 4px 15px rgba(2, 132, 199, 0.3)',
                            filter: isSelected ? 'drop-shadow(0 0 12px rgba(2, 132, 199, 0.7))' : 'none'
                          }}
                        />
                        {/* Text Label on Circle */}
                        <text
                          x={region.svgCoords.cx}
                          y={region.svgCoords.cy + 4}
                          textAnchor="middle"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize="11"
                          fontWeight="700"
                          pointerEvents="none"
                        >
                          {region.shortName.substring(0, 4)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Quick Region Switcher Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                justifyContent: 'center',
                marginTop: '1.5rem'
              }}>
                {BODY_REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegionId(r.id)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      border: '1px solid',
                      borderColor: r.id === selectedRegionId ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: r.id === selectedRegionId ? 'var(--primary-cyan)' : 'white',
                      color: r.id === selectedRegionId ? 'white' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {r.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Active Region Clinical Deep Dive */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="glass-panel" style={{
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              borderColor: 'rgba(255, 255, 255, 0.9)'
            }}>
              {/* Region Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--primary-cyan-light)',
                    color: 'var(--primary-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getRegionIcon(activeRegion.iconName)}
                  </div>
                  <div>
                    <h3 className="heading-editorial" style={{ fontSize: '1.8rem', lineHeight: 1.1 }}>
                      {activeRegion.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {activeRegion.system}
                    </div>
                  </div>
                </div>

                <span className="badge-pill" style={{ background: 'var(--accent-teal-light)', color: 'var(--accent-teal)' }}>
                  {activeRegion.badge}
                </span>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                {activeRegion.description}
              </p>

              {/* Key Clinical Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '1.75rem',
                background: 'rgba(241, 245, 249, 0.7)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>SUCCESS RATE</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
                    {activeRegion.stats.successRate}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>ANNUAL SURGERIES</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-cyan)' }}>
                    {activeRegion.stats.surgeriesYearly}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>AVG RECOVERY</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent-teal)' }}>
                    {activeRegion.stats.avgRecoveryDays} Days
                  </div>
                </div>
              </div>

              {/* Conditions Treated & Tech */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Specialized Treatments
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeRegion.conditions.map((cond, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <ChevronRight size={14} style={{ color: 'var(--primary-cyan)' }} />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Surgical Tech Suite
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeRegion.technologies.map((tech, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <ShieldCheck size={14} style={{ color: 'var(--accent-teal)' }} />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lead Doctor Highlight Card */}
              {leadDoctor && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                      src={leadDoctor.avatar}
                      alt={leadDoctor.name}
                      style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)', fontWeight: '700', textTransform: 'uppercase' }}>
                        Lead Department Faculty
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)' }}>
                        {leadDoctor.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {leadDoctor.title} • {leadDoctor.experienceYears} Years Exp.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => onViewDoctorCard(leadDoctor)}
                      className="btn-secondary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    >
                      <UserCheck size={14} />
                      <span>Visiting Card</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking(leadDoctor.specialtyId, leadDoctor.id)}
                      className="btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    >
                      <Stethoscope size={14} />
                      <span>Book Doctor</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
