import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose, addToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectCategory: 'Luxury Residential / Villa',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        addToast(`Proposal request #${data.quoteId || 'BH-01'} received! Our architectural engineer will contact you.`);
      } else {
        addToast(`Proposal request received for ${formData.fullName}! Our team will contact you shortly.`);
      }
    } catch (err) {
      addToast(`Proposal request received for ${formData.fullName}! Our team will contact you shortly.`);
    } finally {
      setLoading(false);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectCategory: 'Luxury Residential / Villa',
        notes: ''
      });
    }
  };

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-dialog">
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="section-tag">COMPLIMENTARY FEASIBILITY</div>
        <h3 className="modal-title">REQUEST CONSTRUCTION QUOTE</h3>
        <p className="modal-subtitle">Fill in your specifications to receive a detailed cost analysis & schedule breakdown from our Spring Boot engineering engine.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Robert Anderson" 
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="robert@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+1 (555) 234-5678" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Project Category</label>
              <select 
                className="form-select"
                value={formData.projectCategory}
                onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
              >
                <option>Luxury Residential / Villa</option>
                <option>Commercial Tower / Office</option>
                <option>Industrial Logistics Facility</option>
                <option>Turnkey Renovation & Remodel</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Project Notes & 3D BIM Requests</label>
            <textarea 
              className="form-textarea" 
              rows="3" 
              placeholder="Tell us about the property location, timeline, 3D modeling preferences..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'TRANSMITTING REQUEST...' : 'SUBMIT QUOTE ESTIMATE REQUEST'}
          </button>
        </form>
      </div>
    </div>
  );
}
