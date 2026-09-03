import React, { useState, useEffect } from 'react';
import { X, Ticket, Sparkles, Plus, Minus } from 'lucide-react';
import { ticketsData } from '../data/tickets';
import DigitalTicket from './DigitalTicket';

export default function RegistrationModal({ isOpen, onClose, selectedPlan = null, showToast }) {
  const [ticketType, setTicketType] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    country: 'India'
  });
  const [errors, setErrors] = useState({});
  const [submittedRegistration, setSubmittedRegistration] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      setTicketType(selectedPlan.id);
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const currentPlanObj = ticketsData.find((t) => t.id === ticketType) || ticketsData[1];
  const subtotal = currentPlanObj.price * quantity;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.organization.trim()) errs.organization = 'Organization / College is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const reg = {
        ...formData,
        ticketId: 'EVT-2026-' + Math.floor(100000 + Math.random() * 900000),
        ticketName: currentPlanObj.name,
        quantity,
        totalAmount: subtotal,
        date: new Date().toLocaleDateString()
      };
      setSubmittedRegistration(reg);

      // Save to LocalStorage
      const existing = JSON.parse(localStorage.getItem('eventora_registrations') || '[]');
      existing.push(reg);
      localStorage.setItem('eventora_registrations', JSON.stringify(existing));

      if (showToast) {
        showToast('Registration successful! Pass issued.');
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!submittedRegistration ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="badge" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} /> TICKET REGISTRATION
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Reserve Your <span className="gradient-text">Eventora Pass</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Tech Innovation Summit 2026 | September 20–22, 2026
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Ticket Plan & Quantity Calculator */}
              <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Ticket Type</label>
                    <select
                      className="form-select"
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value)}
                    >
                      {ticketsData.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} ({plan.formattedPrice})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Quantity</label>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.25rem' }}>
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{ padding: '0.35rem 0.6rem', color: 'var(--text-main)' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ flexGrow: 1, textAlign: 'center', fontWeight: 800 }}>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        style={{ padding: '0.35rem 0.6rem', color: 'var(--text-main)' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Calculator Subtotal */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Calculated Subtotal:</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <span className="form-error">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Organization / Company *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Company or University"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                  {errors.organization && <span className="form-error">{errors.organization}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={onClose} className="btn btn-outline" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                  <Ticket size={18} /> Confirm Pass (₹{subtotal.toLocaleString()})
                </button>
              </div>
            </form>
          </div>
        ) : (
          <DigitalTicket
            registration={submittedRegistration}
            onDone={onClose}
            showToast={showToast}
          />
        )}
      </div>
    </div>
  );
}
