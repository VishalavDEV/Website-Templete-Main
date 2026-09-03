import React, { useState, useEffect } from 'react';

/**
 * 26 — Project Inquiry Modal
 * Complete architectural commission intake form with validation & success state
 */
export const ProjectInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architecture',
    location: '',
    budgetRange: '$500K — $1.5M',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Architecture',
    'Interior',
    'Hospitality',
    'Cultural',
    'Experimental',
    'Other',
  ];

  const budgetRanges = [
    '$250K — $500K',
    '$500K — $1.5M',
    '$1.5M — $3.5M',
    '$3.5M+',
    'Undetermined',
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      // Reset after closing
      setTimeout(() => {
        setSubmitted(false);
        setErrors({});
      }, 400);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please specify the project site or city.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief description of the spatial vision (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief precise architectural transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`inquiry-modal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Commission Inquiry Form"
    >
      <div 
        className="inquiry-modal-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="inquiry-close-btn"
          onClick={onClose}
          aria-label="Close Inquiry Modal (ESC)"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="inquiry-header">
              <span className="inquiry-eyebrow">COMMISSION // MONOGRAPH INTAKE</span>
              <h2 className="inquiry-title">START A PROJECT</h2>
              <p className="inquiry-lead">
                We accept a select number of architectural, interior, and experimental commissions annually.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
              <div className="form-grid">
                {/* Name */}
                <div className="form-field">
                  <label htmlFor="inquiry-name" className="field-label">NAME *</label>
                  <input
                    id="inquiry-name"
                    type="text"
                    className={`field-input ${errors.name ? 'has-error' : ''}`}
                    placeholder="E.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-field">
                  <label htmlFor="inquiry-email" className="field-label">EMAIL *</label>
                  <input
                    id="inquiry-email"
                    type="email"
                    className={`field-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="elena@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                {/* Project Type */}
                <div className="form-field">
                  <label htmlFor="inquiry-type" className="field-label">PROJECT TYPE *</label>
                  <select
                    id="inquiry-type"
                    className="field-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="form-field">
                  <label htmlFor="inquiry-location" className="field-label">LOCATION *</label>
                  <input
                    id="inquiry-location"
                    type="text"
                    className={`field-input ${errors.location ? 'has-error' : ''}`}
                    placeholder="E.g. Kyoto, Japan / Mumbai, India"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                  {errors.location && <span className="field-error">{errors.location}</span>}
                </div>

                {/* Budget Range */}
                <div className="form-field form-field-full">
                  <label htmlFor="inquiry-budget" className="field-label">BUDGET RANGE *</label>
                  <select
                    id="inquiry-budget"
                    className="field-select"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-field form-field-full">
                  <label htmlFor="inquiry-message" className="field-label">MESSAGE *</label>
                  <textarea
                    id="inquiry-message"
                    rows="4"
                    className={`field-textarea ${errors.message ? 'has-error' : ''}`}
                    placeholder="Describe your site context, spatial requirements, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
              </div>

              {/* Submit Action */}
              <div className="form-action-row">
                <button 
                  type="submit" 
                  className="btn-submit-inquiry"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND INQUIRY →'}
                </button>
                <span className="inquiry-disclaimer">
                  Frontend simulation • No real data sent
                </span>
              </div>
            </form>
          </>
        ) : (
          /* Success State (26) */
          <div className="inquiry-success-box">
            <span className="success-badge">COMMISSION TRANSMITTED // 2026</span>
            <h3 className="success-heading">INQUIRY RECEIVED.</h3>
            <p className="success-sub">We'll be in touch.</p>
            <p className="success-body">
              Our spatial studio in Zurich and Kyoto will review your site context, topography, and program scope.
            </p>
            <button 
              className="btn-submit-inquiry" 
              onClick={onClose}
              style={{ marginTop: '2rem' }}
            >
              RETURN TO EXHIBITION
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
