import React, { useState } from 'react';
import type { EventItem } from '../../data/events';
import { useToast } from '../../context/ToastContext';
import { X, CheckCircle, Ticket } from 'lucide-react';

interface TicketModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ event, onClose }) => {
  const { showToast } = useToast();
  const [step, setStep] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [confirmationRef, setConfirmationRef] = useState<string>('');

  if (!event) return null;

  const validateStep3 = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (validateStep3()) {
        const ref = `NX-${Math.floor(1000 + Math.random() * 9000)}`;
        setConfirmationRef(ref);
        setStep(4);
        showToast('TICKET RESERVED', 'accent');
      }
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 995,
        backgroundColor: 'rgba(36, 31, 35, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: 'var(--bg-light)',
          color: 'var(--text-main)',
          borderRadius: '8px',
          padding: '36px',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
          border: '1px solid var(--border-light)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-warm)' }}>
            <Ticket size={18} />
            <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 700 }}>
              RESERVATION // STEP 0{step} OF 04
            </span>
          </div>

          <button
            onClick={onClose}
            style={{ padding: '6px', color: 'var(--text-main)' }}
            data-cursor="CLOSE"
            aria-label="Close Ticket Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* STEP 1: Event Review */}
        {step === 1 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '8px' }}>
              {event.city} // {event.venue}
            </h3>
            <p style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              DATE: {event.date} • TIME: {event.time} • STATUS: {event.status}
            </p>
            <div style={{ padding: '16px', backgroundColor: 'rgba(39, 35, 38, 0.04)', borderRadius: '4px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>General Entry Pass</span>
                <span style={{ color: 'var(--accent-warm)' }}>{event.price}</span>
              </div>
            </div>
            <button
              onClick={handleNextStep}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--bg-light)',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}
              data-cursor="NEXT STEP"
            >
              CONTINUE TO QUANTITY →
            </button>
          </div>
        )}

        {/* STEP 2: Quantity Selector */}
        {step === 2 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1rem' }}>
              SELECT QUANTITY
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', margin: '2rem 0' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid var(--border-light)', fontSize: '1.2rem', fontWeight: 700 }}
              >
                -
              </button>
              <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '2.5rem', color: 'var(--accent-warm)' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(6, quantity + 1))}
                style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid var(--border-light)', fontSize: '1.2rem', fontWeight: 700 }}
              >
                +
              </button>
            </div>
            <button
              onClick={handleNextStep}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--bg-light)',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}
              data-cursor="NEXT STEP"
            >
              PROCEED TO DETAILS →
            </button>
          </div>
        )}

        {/* STEP 3: User Info Form */}
        {step === 3 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1rem' }}>
              ATTENDEE DETAILS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-grotesk)', marginBottom: '4px' }}>
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: errors.name ? '1px solid var(--accent-warm)' : '1px solid var(--border-light)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
                {errors.name && <span style={{ color: 'var(--accent-warm)', fontSize: '0.75rem' }}>{errors.name}</span>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-grotesk)', marginBottom: '4px' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: errors.email ? '1px solid var(--accent-warm)' : '1px solid var(--border-light)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
                {errors.email && <span style={{ color: 'var(--accent-warm)', fontSize: '0.75rem' }}>{errors.email}</span>}
              </div>
            </div>
            <button
              onClick={handleNextStep}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--accent-warm)',
                color: '#FFF',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}
              data-cursor="CONFIRM"
            >
              CONFIRM RESERVATION
            </button>
          </div>
        )}

        {/* STEP 4: Confirmation */}
        {step === 4 && (
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={48} style={{ color: 'var(--accent-warm)', margin: '0 auto 12px auto' }} />
            <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.8rem', letterSpacing: '0.1em' }}>
              RESERVATION CONFIRMED
            </h3>
            <div style={{ padding: '20px', backgroundColor: 'var(--bg-dark)', color: 'var(--bg-light)', borderRadius: '4px', margin: '1.5rem 0', textAlign: 'left' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--coral)' }}>
                NOVA//ECHO {event.city} LIVE
              </p>
              <p style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.9rem', marginTop: '4px' }}>
                {quantity} × General Entry Pass
              </p>
              <div style={{ borderTop: '1px solid var(--border-dark)', marginTop: '12px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-grotesk)', fontSize: '0.85rem' }}>
                <span>Reference Code:</span>
                <span style={{ color: 'var(--accent-warm)', fontWeight: 700 }}>{confirmationRef}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--bg-light)',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 700
              }}
            >
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
