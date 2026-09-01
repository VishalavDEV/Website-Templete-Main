import React, { useState } from 'react';
import { submitQuote } from '../api/client';

export default function QuoteModal({ isOpen, onClose, showToast }) {
  const [formData, setFormData] = useState({
    entityName: '',
    directorEmail: '',
    phone: '',
    projectType: 'Commercial High-Rise Complex',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await submitQuote(formData);
      showToast(res.message || `Tender inquiry for "${res.entityName}" registered! Tracking: ${res.referenceId}`);
      setFormData({
        entityName: '',
        directorEmail: '',
        phone: '',
        projectType: 'Commercial High-Rise Complex',
        notes: ''
      });
      onClose();
    } catch (err) {
      showToast(`Error dispatching tender: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="futurix-modal-backdrop active" onClick={onClose}>
      <div className="modal-card-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="smart-tech-pill" style={{ marginBottom: '10px' }}>
          <span>OFFICIAL EPC INQUIRY (SPRING BOOT BACKED)</span>
        </div>
        <h3 style={{ color: 'var(--text-heading)', marginBottom: '14px', fontSize: '1.4rem' }}>
          Request Smart Construction Tender
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              CORPORATE ENTITY *
            </label>
            <input 
              type="text" 
              className="tech-select" 
              placeholder="e.g. Apex Global Infrastructure" 
              value={formData.entityName}
              onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
              required 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            <div>
              <label style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                DIRECTOR EMAIL *
              </label>
              <input 
                type="email" 
                className="tech-select" 
                placeholder="director@apex.com" 
                value={formData.directorEmail}
                onChange={(e) => setFormData({ ...formData, directorEmail: e.target.value })}
                required 
              />
            </div>
            <div>
              <label style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                PHONE *
              </label>
              <input 
                type="tel" 
                className="tech-select" 
                placeholder="+1 (555) 019-2834" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
              />
            </div>
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              PROJECT CLASSIFICATION
            </label>
            <select 
              className="tech-select"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="Commercial High-Rise Complex">Commercial High-Rise Complex</option>
              <option value="Smart Residential Smart-Tower">Smart Residential Smart-Tower</option>
              <option value="Hyperscale Modular Data Center">Hyperscale Modular Data Center</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn-cyan-gradient" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
            disabled={submitting}
          >
            {submitting ? 'DISPATCHING TO SPRING BOOT...' : 'DISPATCH TENDER INQUIRY'}
          </button>
        </form>
      </div>
    </div>
  );
}
