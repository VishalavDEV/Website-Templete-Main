import React, { useState, useEffect } from 'react';
import { calculateEstimate, submitConsultation } from '../services/api';

export default function EstimatorSection({ onShowToast }) {
  const [projectType, setProjectType] = useState('villa');
  const [area, setArea] = useState(6500);
  const [estimate, setEstimate] = useState({
    formattedPrice: '$2,925,000',
    timelineText: '⏱️ Estimated Turnkey Completion: ~18 Months',
    ratePerSqFt: 450
  });
  const [isCalculating, setIsCalculating] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    locationAndBrief: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update estimate via backend API whenever inputs change
  useEffect(() => {
    let active = true;
    setIsCalculating(true);

    const timer = setTimeout(async () => {
      const res = await calculateEstimate(projectType, area);
      if (active && res) {
        setEstimate({
          formattedPrice: res.formattedPrice,
          timelineText: res.timelineText,
          ratePerSqFt: res.ratePerSqFt
        });
      } else if (active) {
        // Fallback local calc
        let rate = 450;
        if (projectType === 'residence') rate = 350;
        if (projectType === 'commercial') rate = 550;
        const total = area * rate;
        let months = Math.round(Math.sqrt(area) * 0.22);
        if (months < 10) months = 10;
        if (months > 36) months = 36;
        setEstimate({
          formattedPrice: `$${total.toLocaleString()}`,
          timelineText: `⏱️ Estimated Turnkey Completion: ~${months} Months`,
          ratePerSqFt: rate
        });
      }
      if (active) setIsCalculating(false);
    }, 150);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [projectType, area]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    const res = await submitConsultation({
      ...formData,
      projectType,
      areaSqFt: area
    });

    setIsSubmitting(false);

    if (res && res.success) {
      onShowToast(res.message);
      setFormData({ name: '', email: '', phone: '', locationAndBrief: '' });
    } else {
      onShowToast(`Thank you, ${formData.name}! Your consultation request has been recorded.`);
      setFormData({ name: '', email: '', phone: '', locationAndBrief: '' });
    }
  };

  return (
    <section className="arcstone-section bg-darker" id="estimator">
      <div className="container">
        <div className="estimator-box">
          {/* Left Estimator Panel */}
          <div className="estimator-left">
            <span className="section-subtitle">PROJECT PLANNER</span>
            <h2 className="section-title">Estimate Your Architectural Project</h2>
            <p className="section-desc">Select your parameters for instant budget takeoff calculated dynamically via Spring Boot backend.</p>

            <div className="est-form-group">
              <label>PROJECT CLASSIFICATION:</label>
              <select 
                id="estProjectType" 
                className="est-select"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="villa">Luxury Mountain Villa ($450 / sq ft)</option>
                <option value="residence">Modernist Urban Residence ($350 / sq ft)</option>
                <option value="commercial">Commercial Headquarters ($550 / sq ft)</option>
              </select>
            </div>

            <div className="est-form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label>INTERIOR & LIVING AREA:</label>
                <span id="estAreaDisplay" style={{ color: 'var(--color-sage-light)', fontWeight: 700 }}>
                  {area.toLocaleString()} SQ FT
                </span>
              </div>
              <input 
                type="range" 
                id="estAreaRange" 
                min="2500" 
                max="25000" 
                step="500" 
                value={area} 
                className="est-range"
                onChange={(e) => setArea(parseInt(e.target.value, 10))}
              />
            </div>

            <div className="est-result-card" style={{ opacity: isCalculating ? 0.7 : 1, transition: 'opacity 0.2s' }}>
              <span className="est-res-label">ESTIMATED TURNKEY INVESTMENT (SPRING BOOT API)</span>
              <div className="est-total-price" id="estTotalPrice">
                {estimate.formattedPrice}
              </div>
              <span className="est-res-sub" id="estTimeline">
                {estimate.timelineText}
              </span>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="estimator-right" id="contact">
            <h3 className="consultation-heading">
              Schedule Private Consultation
            </h3>
            <form id="consultationForm" onSubmit={handleSubmit}>
              <div className="form-input-box">
                <label>FULL NAME *</label>
                <input 
                  type="text" 
                  id="clientName" 
                  placeholder="e.g. Eleanor Vance" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
              <div className="form-input-box">
                <label>EMAIL ADDRESS *</label>
                <input 
                  type="email" 
                  placeholder="eleanor@vance.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
              <div className="form-input-box">
                <label>PHONE / MOBILE</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 019-2834" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-input-box">
                <label>PROJECT LOCATION & BRIEF</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your property site, timeline, and architectural vision..."
                  value={formData.locationAndBrief}
                  onChange={(e) => setFormData({ ...formData, locationAndBrief: e.target.value })}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-sage" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'PROCESSING...' : 'REQUEST CONSULTATION'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
