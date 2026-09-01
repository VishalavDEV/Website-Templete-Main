import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export default function ReservationModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    audioEngine.playClick();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    audioEngine.playClick();
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div className="modal-inner">
            <div className="modal-badge">
              <Zap size={14} />
              <span>HTM 350 DUDE ALLOCATION</span>
            </div>

            <h3 className="modal-title">RESERVE YOUR BUILD SLOT</h3>
            <p className="modal-subtitle">
              Register now for the next-generation HTM 350 DUDE to receive early booking privileges, track day invites, and direct concierge notifications.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-input-group">
                <input
                  type="email"
                  id="vip-email-input"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modal-email-input"
                />
              </div>

              <button type="submit" id="btn-submit-reserve" className="modal-submit-btn">
                <span>SECURE PRIORITY ALLOCATION</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="modal-footnote">
              <ShieldCheck size={14} className="footnote-icon" />
              <span>Zero obligation. Direct concierge notification prior to public dealership rollout.</span>
            </div>
          </div>
        ) : (
          <div className="modal-success-inner">
            <div className="success-icon-wrap">
              <CheckCircle size={44} className="success-icon" />
            </div>
            <h3 className="modal-title">ALLOCATION LOGGED</h3>
            <p className="modal-subtitle">
              Your priority reservation for the <strong>HTM 350 DUDE</strong> has been confirmed for <strong>{email}</strong>.
            </p>
            <button className="modal-submit-btn" onClick={handleClose}>
              RETURN TO 360° EXPERIENCE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
