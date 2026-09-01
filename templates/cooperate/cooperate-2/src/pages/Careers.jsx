import React, { useState } from 'react';
import { MapPin, Briefcase, X, Check } from '../components/Icons';
import { CAREERS_JOBS } from '../data/content';

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplyModalJob(null);
    }, 1800);
  };

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                CAREERS AT ORION / JOIN THE PARTNERSHIP
              </p>
              <h1 className="page-hero-title">
                Do work <br />
                <span className="italic font-serif">that matters.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                We are assembling an elite global cohort of intellectual leaders, technical architects, and strategic operators to navigate the defining challenges of our generation.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="ORION Collaboration Culture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* IMMERSIVE IMAGE SECTION                                       */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container">
        <div className="careers-immersive-visual">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
            alt="ORION War Room Session"
          />
          <div className="work-badge">
            MERITOCRACY & INTELLECTUAL HONESTY
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* EXPANDABLE JOB MANDATES AS LARGE EDITORIAL ROWS                */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Opportunities</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Open Mandates</h2>
          </div>
          <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>5 Open Positions Worldwide</p>
        </div>

        <div>
          {CAREERS_JOBS.map((job) => {
            const isExpanded = expandedJob === job.id;

            return (
              <div key={job.id} className="careers-expandable-row">
                <div
                  className="careers-expandable-header"
                  onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                >
                  <div>
                    <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {job.practice} · {job.location}
                    </span>
                    <h3 className="careers-job-title" style={{ marginTop: '0.25rem' }}>
                      {job.title}
                    </h3>
                  </div>

                  <div className="careers-expandable-icon">
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {isExpanded && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '8fr 4fr', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {job.description}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-charcoal)', marginTop: '0.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><MapPin size={14} className="text-terracotta" /> {job.location}</span>
                        <span>·</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Briefcase size={14} className="text-terracotta" /> {job.type}</span>
                        <span>·</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setApplyModalJob(job)}
                        className="btn-editorial-primary"
                      >
                        Apply For Position
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CANDIDATE APPLICATION MODAL                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      {applyModalJob && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(20, 20, 19, 0.75)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-cream)', border: '1px solid var(--border-medium)', maxWidth: '520px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
            <button
              onClick={() => setApplyModalJob(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-secondary)' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
              <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Candidate Submission</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>{applyModalJob.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{applyModalJob.location} · {applyModalJob.practice}</p>
            </div>

            {appliedSuccess ? (
              <div style={{ padding: '2rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--text-charcoal)', color: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={20} />
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Application Received</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Our Talent Committee will review your background and reach out.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-underline-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-underline-label">Full Name *</label>
                  <input type="text" required placeholder="Jane Doe" className="form-underline-input" style={{ fontSize: '1rem', padding: '0.5rem 0' }} />
                </div>
                <div className="form-underline-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-underline-label">Email *</label>
                  <input type="email" required placeholder="jane@example.com" className="form-underline-input" style={{ fontSize: '1rem', padding: '0.5rem 0' }} />
                </div>
                <div className="form-underline-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-underline-label">LinkedIn / CV URL *</label>
                  <input type="url" required placeholder="https://linkedin.com/in/..." className="form-underline-input" style={{ fontSize: '1rem', padding: '0.5rem 0' }} />
                </div>
                <div className="form-underline-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-underline-label">Brief Statement of Intent</label>
                  <textarea rows={3} placeholder="Why ORION? What strategic vector excites you?" className="form-underline-textarea" style={{ fontSize: '0.9rem' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                  <button type="submit" className="btn-editorial-primary">
                    Submit Candidacy
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
