import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Save, Shield, User, CreditCard } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FormWizardPage = () => {
  const { addToast, navigateTo } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountName: '',
    email: '',
    company: '',
    role: 'Administrator',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      addToast(`Proceeded to Step ${step + 1}`, 'info');
    } else {
      addToast('Wizard completed! Account and Billing setup successfully.', 'success');
      navigateTo('dashboards', 'overview');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="forms-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24, textAlign: 'center' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Multi-Step Setup Wizard</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Guided step-by-step account configuration and billing onboarding.</p>
      </div>

      {/* Step Indicator Bar */}
      <div className="glass-card" style={{ marginBottom: 24, padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          {[
            { num: 1, title: 'Account Info', icon: User },
            { num: 2, title: 'Role & Org', icon: Shield },
            { num: 3, title: 'Payment SLA', icon: CreditCard }
          ].map(s => {
            const Icon = s.icon;
            const isActive = step === s.num;
            const isDone = step > s.num;
            return (
              <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 2 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isDone ? 'var(--brand-success)' : isActive ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                  color: (isActive || isDone) ? '#ffffff' : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  {isDone ? <CheckCircle size={20} /> : <Icon size={20} />}
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)' }}>{s.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wizard Step Content */}
      <div className="glass-card" style={{ padding: 32 }}>
        <form onSubmit={handleNext}>
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Step 1: Account Information</h3>
              <div className="form-group">
                <label>Full User Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.accountName}
                  onChange={e => setFormData({ ...formData, accountName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex.morgan@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Step 2: Organization & Permission Role</h3>
              <div className="form-group">
                <label>Company / Organization Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. TechCorp Enterprise"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Permission Role</label>
                <select
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                >
                  <option>Administrator</option>
                  <option>Senior Developer</option>
                  <option>Finance Manager</option>
                  <option>Support Representative</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Step 3: Billing & SLA Setup</h3>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={formData.cardName}
                  onChange={e => setFormData({ ...formData, cardName: e.target.value })}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    required
                    placeholder="•••• •••• •••• 4821"
                    value={formData.cardNumber}
                    onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    required
                    placeholder="12/28"
                    value={formData.expDate}
                    onChange={e => setFormData({ ...formData, expDate: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
              disabled={step === 1}
              style={{ opacity: step === 1 ? 0.5 : 1 }}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button type="submit" className="btn btn-primary">
              {step === 3 ? 'Complete Setup & Finish' : 'Next Step'} <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
