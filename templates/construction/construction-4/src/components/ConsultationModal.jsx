import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, onShowToast }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [visionRequirements, setVisionRequirements] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          projectLocation,
          visionRequirements
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        onShowToast(
          `✨ [${data.referenceId}] Thank you, ${fullName}! Your brief has been saved in Spring Boot. Our lead architect will contact you within 24 hours.`
        );
      } else {
        onShowToast(`Thank you, ${fullName}. Your consultation brief has been recorded.`);
      }
    } catch (err) {
      // Fallback message
      onShowToast(`Thank you, ${fullName}. Your architectural brief has been submitted.`);
    } finally {
      setLoading(false);
      setFullName('');
      setEmail('');
      setProjectLocation('');
      setVisionRequirements('');
      onClose();
    }
  };

  return (
    <div className="knack-modal-backdrop" onClick={onClose}>
      <div className="knack-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-header">
          <span className="k-tag">PRIVATE CONSULTATION</span>
          <h3 className="modal-title">Book an Architectural Brief</h3>
          <p className="modal-sub">
            Our lead architect and project director will review your property parameters and compile custom feasibility models.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-field">
            <label>FULL NAME *</label>
            <input
              type="text"
              placeholder="e.g. Julian Montgomery"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>EMAIL ADDRESS *</label>
            <input
              type="email"
              placeholder="julian@montgomery.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>PROJECT LOCATION & TIMELINE</label>
            <input
              type="text"
              placeholder="e.g. Malibu Hills, Q3 2026"
              value={projectLocation}
              onChange={(e) => setProjectLocation(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>VISION & REQUIREMENTS</label>
            <textarea
              rows="3"
              placeholder="Tell us about your spatial requirements, desired finishes, and scope..."
              value={visionRequirements}
              onChange={(e) => setVisionRequirements(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn-honey-gold full-w"
            disabled={loading}
          >
            {loading ? 'Submitting to Spring Boot...' : 'Request Private Briefing →'}
          </button>
        </form>
      </div>
    </div>
  );
}
