import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitRfq } from '../services/api';

export default function RfqSection({ initialData, onClose, isModal = false }) {
  const [formData, setFormData] = useState({
    clientName: '',
    organization: '',
    email: '',
    typology: 'Supertall Aerodynamic Skyrise',
    siteLocation: '',
    targetGfaSqm: 120000,
    targetBudgetMln: 380,
    flythroughRenderingPackage: 'Real-Time Unreal Engine 5 Orbit',
    projectBrief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        targetGfaSqm: initialData.grossFloorAreaSqm || prev.targetGfaSqm,
        targetBudgetMln: initialData.estimatedStructuralBudgetMln || prev.targetBudgetMln,
        projectBrief: initialData.projectBrief || prev.projectBrief
      }));
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitRfq(formData);
    setLoading(false);
    setSubmitted(true);
  };

  const content = (
    <div className="aero-card" style={{ maxWidth: '780px', margin: '0 auto', padding: '36px', background: 'var(--bg-surface)' }}>
      
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--card-subtle-bg)',
              border: '1px solid var(--border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'var(--text-main)'
            }}
          >
            <CheckCircle2 size={28} />
          </div>

          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--text-main)' }}>
            Inquiry Received
          </h3>

          <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
            Thank you for contacting Aerovision. Our architectural team has received your inquiry and will be in touch within one business day.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              if (onClose) onClose();
            }}
            className="btn btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>
              Inquiries
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'var(--text-main)' }}>
              Start a Conversation
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Tell us about your project vision, site location, or request a preliminary design proposal.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Marcus Sterling"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Company or Organization *
              </label>
              <input
                type="text"
                required
                placeholder="Sterling Developments"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="marcus@sterling.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Site Location *
              </label>
              <input
                type="text"
                required
                placeholder="London, Tokyo, or Singapore"
                value={formData.siteLocation}
                onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Project Overview & Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about the project goals, target square footage, or any specific architectural and environmental objectives..."
              value={formData.projectBrief}
              onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: isModal ? 'space-between' : 'flex-end', alignItems: 'center' }}>
            {isModal && (
              <button type="button" onClick={onClose} className="btn btn-secondary">
                Cancel
              </button>
            )}
            <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <Send size={15} /> {loading ? 'Submitting...' : 'Send Inquiry'}
            </button>
          </div>
        </form>
      )}

      <style>{`
        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );

  if (isModal) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'var(--bg-overlay)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={onClose}
      >
        <div style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {content}
      </div>
    </section>
  );
}
