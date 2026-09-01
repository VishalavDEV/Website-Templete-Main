import React, { useState } from 'react';
import { submitRfq } from '../services/api';

export default function RfqSection() {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    organization: '',
    projectType: 'Monolithic Commercial HQ',
    location: '',
    estimatedBudgetMln: 25.0,
    timeline: '2027 – 2029',
    technicalNotes: ''
  });

  const [statusMsg, setStatusMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitRfq(formData);
    setLoading(false);
    setStatusMsg({
      type: 'success',
      text: `RFQ Tender #${res.id || '208'} successfully submitted to Chronos Structural Board. Status: ${res.status}`
    });
    setFormData({
      clientName: '',
      clientEmail: '',
      organization: '',
      projectType: 'Monolithic Commercial HQ',
      location: '',
      estimatedBudgetMln: 25.0,
      timeline: '2027 – 2029',
      technicalNotes: ''
    });
  };

  return (
    <section id="rfq" className="section-padding" style={{ background: 'var(--bg-surface-elevated)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="brutalist-badge">
            // STRUCTURAL COMMISSION INTAKE
          </span>
          <h2 className="section-title">
            INITIATE MONOLITHIC TENDER / RFQ
          </h2>
          <p className="section-desc">
            Directly connect your engineering team with the Chronos structural atelier. Submit initial site metrics and architectural requirements for feasibility assessment.
          </p>
        </div>

        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          background: 'var(--bg-surface)',
          border: '2px solid var(--border-strong)',
          padding: '40px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {statusMsg && (
            <div style={{
              padding: '16px 20px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#10b981',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              marginBottom: '28px'
            }}>
              ✓ {statusMsg.text}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                PRIMARY CONTACT NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Elena Lindqvist"
                value={formData.clientName}
                onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                CORPORATE EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. e.lindqvist@skanska-group.se"
                value={formData.clientEmail}
                onChange={e => setFormData({ ...formData, clientEmail: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                ORGANIZATION / AGENCY
              </label>
              <input
                type="text"
                placeholder="e.g. Nordic Port Infrastructure Auth"
                value={formData.organization}
                onChange={e => setFormData({ ...formData, organization: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                PROPOSED TYPOLOGY
              </label>
              <select
                value={formData.projectType}
                onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              >
                <option value="Monolithic Commercial HQ">Monolithic Commercial HQ</option>
                <option value="Brutalist Museum Pavilion">Brutalist Museum Pavilion</option>
                <option value="Industrial Civic Terminal">Industrial Civic Terminal</option>
                <option value="High-Altitude Alpine Overlook">High-Altitude Alpine Overlook</option>
                <option value="Private Brutalist Estate">Private Brutalist Estate</option>
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                GEOGRAPHIC LOCATION & SITE COORDINATES
              </label>
              <input
                type="text"
                placeholder="e.g. Gothenburg Harbor Sector 4, Sweden (57°42'N 11°58'E)"
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '8px', color: 'var(--text-dim)' }}>
                STRUCTURAL & GEOTECHNICAL NOTES
              </label>
              <textarea
                rows={4}
                placeholder="Describe site soil conditions, seismic requirements, architectural volume preferences, or specific concrete finish requests..."
                value={formData.technicalNotes}
                onChange={e => setFormData({ ...formData, technicalNotes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '12px' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '0.95rem' }}
              >
                {loading ? 'TRANSMITTING RFQ TO CHRONOS ENGINE...' : 'TRANSMIT STRUCTURAL COMMISSION RFQ →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
