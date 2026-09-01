import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { triggerCelebration } from '../../utils/confetti';

export default function EmailCapture({
  variant = 'minimalist',
  discountText = '40% OFF Early Pass',
  deadlineText = 'Limited to first 500 registrants',
  onRegisterSuccess,
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid business or personal email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      triggerCelebration();
      if (onRegisterSuccess) {
        onRegisterSuccess({
          name: name.trim() || 'Distinguished Attendee',
          email: email.trim(),
          vipNumber: `VIP-${Math.floor(1000 + Math.random() * 9000)}`,
          timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        });
      }
    }, 900);
  };

  return (
    <div className={`email-capture-wrapper email-capture-${variant}`}>
      <div className="early-bird-badge-bar">
        <span className="badge-icon"><Sparkles size={14} /></span>
        <span className="badge-highlight">{discountText}</span>
        <span className="badge-divider">•</span>
        <span className="badge-deadline">{deadlineText}</span>
      </div>

      <form onSubmit={handleSubmit} className="capture-form">
        <div className="form-row">
          <div className="input-group name-group">
            <input
              type="text"
              placeholder="Your Full Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="capture-input"
              aria-label="Your Full Name"
            />
          </div>
          <div className="input-group email-group">
            <input
              type="email"
              placeholder="Enter your work email address..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              required
              className={`capture-input ${status === 'error' ? 'input-error' : ''}`}
              aria-label="Email address for event early access"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="submit-cta-btn"
          >
            {status === 'loading' ? (
              <span className="loading-spinner">Claiming Pass...</span>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={18} />
                <span>Pass Reserved!</span>
              </>
            ) : (
              <>
                <span>Claim VIP Early Access</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        {status === 'error' && (
          <div className="form-alert alert-error">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {status === 'success' && (
          <div className="form-alert alert-success">
            <CheckCircle2 size={16} />
            <span>Success! Your VIP Priority Pass has been generated. Check below or view your pass.</span>
          </div>
        )}

        <div className="privacy-guarantee">
          <ShieldCheck size={14} />
          <span>Zero spam. Instant calendar invite & exclusive keynote access sent directly.</span>
        </div>
      </form>
    </div>
  );
}
