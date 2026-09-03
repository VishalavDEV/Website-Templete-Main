import React, { useState } from 'react';
import { submitConsultationDossier } from '../services/api';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Mass Timber Tower',
    targetSquareMeters: 5000,
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMsg, setResultMsg] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitConsultationDossier(formData);
      setResultMsg({
        success: true,
        text: res.message || 'Biophilic design consultation scheduled! Our mass-timber architectural engineers will contact you within 24 hours.'
      });
      setFormData({ name: '', email: '', projectType: 'Commercial Mass Timber Tower', targetSquareMeters: 5000, notes: '' });
      setTimeout(() => {
        setResultMsg(null);
        onClose();
      }, 2500);
    } catch {
      setResultMsg({
        success: false,
        text: 'Error transmitting consultation request. Please verify network connectivity.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h3 className="modalTitle">Commission Biophilic Project</h3>
          <button className="closeBtn" onClick={onClose}>&times;</button>
        </div>

        {resultMsg ? (
          <div style={{
            padding: '24px 16px',
            textAlign: 'center',
            background: resultMsg.success ? 'rgba(82, 183, 136, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: resultMsg.success ? '#74c69d' : '#f87171',
            borderRadius: '16px',
            border: `1px solid ${resultMsg.success ? '#52b788' : '#ef4444'}`,
            fontSize: '0.95rem',
            lineHeight: 1.6
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
              {resultMsg.success ? '🌿' : '⚠️'}
            </div>
            <strong>{resultMsg.text}</strong>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label className="formLabel">YOUR NAME / CLIENT REPRESENTATIVE</label>
              <input
                type="text"
                className="formInput"
                required
                placeholder="e.g. Dr. Maya Lin, Principal Architect"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="formGroup">
              <label className="formLabel">OFFICIAL EMAIL</label>
              <input
                type="email"
                className="formInput"
                required
                placeholder="contact@architecturedomain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="formGroup">
              <label className="formLabel">PROJECT TYPE</label>
              <select
                className="formInput"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="Commercial Mass Timber Tower">Commercial Mass Timber Tower</option>
                <option value="Biophilic Residential Atrium">Biophilic Residential Atrium</option>
                <option value="Net-Zero Botanical Campus">Net-Zero Botanical Campus</option>
                <option value="Urban Living Facade Retrofit">Urban Living Facade Retrofit</option>
              </select>
            </div>

            <div className="formGroup">
              <label className="formLabel">TARGET FOOTPRINT (SQ METERS)</label>
              <input
                type="number"
                className="formInput"
                placeholder="5000"
                value={formData.targetSquareMeters}
                onChange={(e) => setFormData({ ...formData, targetSquareMeters: Number(e.target.value) })}
              />
            </div>

            <button
              type="submit"
              className="modalSubmitBtn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'TRANSMITTING TO ATELIER...' : 'SCHEDULE BIOPHILIC CONSULTATION →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
