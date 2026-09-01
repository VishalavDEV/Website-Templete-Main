import React, { useState } from 'react';
import { X, CheckCircle, ShieldAlert, Award } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suiteType, setSuiteType] = useState('Palace Suite');
  const [checkIn, setCheckIn] = useState(initialData.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialData.checkOut || '');
  const [guests, setGuests] = useState(initialData.guests || '2 Guests');
  const [requests, setRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking registration
    setIsSubmitted(true);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(15, 9, 6, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
        padding: '1.5rem',
        animation: 'fadeInSimple 0.3s ease-out'
      }}
    >
      <div 
        className="glass-card-dark"
        style={{
          width: '100%',
          maxWidth: '650px',
          borderRadius: '4px',
          border: '1px solid rgba(194, 155, 79, 0.4)',
          position: 'relative',
          padding: '2.5rem',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-sandstone-light)',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.7'}
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          /* Success State */
          <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-ivory)', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
              <CheckCircle size={64} style={{ color: 'var(--color-brass)' }} className="animate-float" />
            </div>
            
            <h3 style={{ fontFamily: 'var(--font-serif-header)', fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              Royal Reservation Requested
            </h3>
            
            <p style={{ color: 'var(--color-sandstone-light)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '480px', margin: '0 auto 2.5rem auto', fontWeight: 300 }}>
              Pranām, {fullName}. Your request for the <strong style={{ color: 'var(--color-brass)' }}>{suiteType}</strong> has been logged in our registry. Our Royal Butler Service will call you within 2 hours to confirm your residency arrangements.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', alignItems: 'center', color: 'var(--color-brass)', marginBottom: '2.5rem' }}>
              <Award size={18} />
              <span style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.85rem', letterSpacing: '0.15em' }}>
                ANANTHARA CONCIERGE EXCLUSIVITY
              </span>
            </div>

            <button onClick={() => { setIsSubmitted(false); onClose(); }} className="btn-gold" style={{ padding: '0.8rem 2.5rem' }}>
              RETURN TO SANCTUM
            </button>
          </div>
        ) : (
          /* Form State */
          <div style={{ color: 'var(--color-ivory)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Exclusive Registry
              </span>
              <h3 style={{ fontSize: '2rem', color: 'var(--color-ivory)', marginTop: '0.3rem' }}>
                Request Royal Residency
              </h3>
              <p style={{ color: 'var(--color-sandstone-light)', fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem', fontWeight: 300 }}>
                Please provide your contact details. Our hospitality desk operates on strict personalized verification.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Form Row 1: Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  Full Name (Honorific Included)
                </label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Maharaja Vikram Singh"
                  required
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(194, 155, 79, 0.25)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-ivory)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              {/* Form Row 2: Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-cols">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="royal@lineage.com"
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(194, 155, 79, 0.25)',
                      padding: '0.7rem 1rem',
                      color: 'var(--color-ivory)',
                      outline: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(194, 155, 79, 0.25)',
                      padding: '0.7rem 1rem',
                      color: 'var(--color-ivory)',
                      outline: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              {/* Form Row 3: Residency Category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  Preferred Suite Category
                </label>
                <select 
                  value={suiteType}
                  onChange={(e) => setSuiteType(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(35, 18, 11, 0.95)',
                    border: '1px solid rgba(194, 155, 79, 0.25)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-ivory)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Palace Suite" style={{ color: 'var(--color-ivory)' }}>Palace Suite (Palace View)</option>
                  <option value="Maharani Suite" style={{ color: 'var(--color-ivory)' }}>Maharani Suite (Lake/Garden View)</option>
                  <option value="Courtyard Room" style={{ color: 'var(--color-ivory)' }}>Courtyard Heritage Room</option>
                  <option value="Garden Villa" style={{ color: 'var(--color-ivory)' }}>Garden Villa with Private Pool</option>
                </select>
              </div>

              {/* Form Row 4: Dates & Guests */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="form-dates">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>Check-In</label>
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(194, 155, 79, 0.25)',
                      padding: '0.7rem 0.5rem',
                      color: 'var(--color-ivory)',
                      outline: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>Check-Out</label>
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(194, 155, 79, 0.25)',
                      padding: '0.7rem 0.5rem',
                      color: 'var(--color-ivory)',
                      outline: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>Guests</label>
                  <input 
                    type="text" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="2 Guests"
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(194, 155, 79, 0.25)',
                      padding: '0.7rem 1rem',
                      color: 'var(--color-ivory)',
                      outline: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              {/* Form Row 5: Requests */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  Dietary Preferences / Butler Instructions / Special Demands
                </label>
                <textarea 
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="e.g., Ayurvedic tea upon arrival, airport escort request, or dietary restrictions..."
                  rows={3}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(194, 155, 79, 0.25)',
                    padding: '0.7rem 1rem',
                    color: 'var(--color-ivory)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-gold" 
                style={{ 
                  marginTop: '1rem', 
                  padding: '1rem 0', 
                  fontSize: '1rem',
                  display: 'block',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                SUBMIT RESERVATION REQUEST
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 576px) {
          .form-cols, .form-dates {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .glass-card-dark {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
