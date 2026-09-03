import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../services/api';

export default function ContactForm({ initialPlan = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: initialPlan || 'Business Consulting',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const servicesOptions = [
    'Business Consulting',
    'Digital Transformation',
    'Technology Solutions',
    'Marketing & Branding',
    'Business Analytics',
    'Growth Strategy'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await submitContactForm(formData);
      setNotification({
        type: 'success',
        message: response.message
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: 'Business Consulting',
        message: ''
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: error.message || 'Failed to submit form. Please check your inputs.'
      });
    } finally {
      setLoading(false);
      // Auto-clear notification after 6 seconds
      setTimeout(() => {
        setNotification(null);
      }, 6000);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Toast Notification Alert */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            style={{
              position: 'fixed',
              top: '90px',
              right: '20px',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--border-radius-md)',
              background: notification.type === 'success' ? '#ECFDF5' : '#FEF2F2',
              border: notification.type === 'success' ? '1.5px solid #10B981' : '1.5px solid #EF4444',
              color: notification.type === 'success' ? '#065F46' : '#991B1B',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              maxWidth: '450px'
            }}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 size={22} color="#10B981" style={{ flexShrink: 0 }} />
            ) : (
              <AlertCircle size={22} color="#EF4444" style={{ flexShrink: 0 }} />
            )}
            <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2.5rem 2rem' }}>
        
        {/* Name & Email Group */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="form-row">
          <div>
            <label htmlFor="fullName" className="form-label">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
              placeholder="Elena Vance"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              placeholder="elena@company.com"
              className="form-input"
            />
          </div>
        </div>

        {/* Phone & Company Group */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="form-row">
          <div>
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
              placeholder="+1 (555) 123-4567"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="company" className="form-label">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
              placeholder="OranGrow Space"
              className="form-input"
            />
          </div>
        </div>

        {/* Service Selector Dropdown */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="service" className="form-label">Requested Solution Tiers</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={loading}
            className="form-input"
            style={{ appearance: 'none', cursor: 'pointer' }}
          >
            {servicesOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message area */}
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="message" className="form-label">How can we help your business? *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            placeholder="Tell us about your conversion bottlenecks or digital infrastructure challenges..."
            className="form-input"
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ width: '100%', gap: '0.75rem' }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="spinner" />
              Verifying and Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </motion.button>

      </form>

      <style>{`
        .form-label {
          display: block;
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--border-radius-sm);
          border: 1.5px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.75);
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.15);
          background: #FFF;
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
