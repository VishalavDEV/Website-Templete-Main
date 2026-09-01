import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { OFFERS } from '../data/offers';

export default function Offers() {
  const navigate = useNavigate();

  const handleBookOffer = (offerTitle) => {
    navigate('/booking', { state: { selectedOffer: offerTitle } });
  };

  return (
    <div
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Exclusive Habilitat Packages
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Special Offers & Packages
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          Discover curated wellness stays, family wilderness packages, and romantic retreats planned with premium additions.
        </p>
      </div>

      {/* Offers Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {OFFERS.map((offer, idx) => (
          <div
            key={offer.id}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(197, 168, 128, 0.15)',
              alignItems: 'center'
            }}
          >
            {/* Image Column */}
            <div style={{
              overflow: 'hidden',
              aspectRatio: '16/10',
              height: '100%'
            }}>
              <img
                src={offer.image}
                alt={offer.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Info details */}
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  color: '#c5a880',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(197, 168, 128, 0.3)',
                  padding: '4px 10px',
                  backgroundColor: '#faf8f5'
                }}>
                  {offer.badge}
                </span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: '#1e1e1e', fontWeight: '500' }}>
                  {offer.price}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: '400',
                margin: 0,
                color: '#1e1e1e'
              }}>
                {offer.title}
              </h2>

              <p style={{
                fontSize: '0.88rem',
                lineHeight: '1.6',
                color: '#666666',
                margin: 0
              }}>
                {offer.description}
              </p>

              {/* Benefits Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {offer.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#555555' }}>
                    <Check size={12} style={{ color: '#c5a880', flexShrink: 0 }} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() => handleBookOffer(offer.title)}
                  style={{
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    border: '1px solid #111111',
                    padding: '12px 24px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c5a880';
                    e.currentTarget.style.borderColor = '#c5a880';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#111111';
                    e.currentTarget.style.borderColor = '#111111';
                  }}
                >
                  Book Package <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
