import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Sparkles } from 'lucide-react';

export const PricingCard = ({ pkg }) => {
  return (
    <div className={`pricing-card ${pkg.popular ? 'popular-card' : ''}`} style={{
      background: pkg.popular 
        ? 'linear-gradient(180deg, #161c22 0%, #0d1013 100%)' 
        : 'linear-gradient(180deg, #111417 0%, #07090b 100%)',
      border: pkg.popular ? '2px solid #7cff4f' : '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '20px',
      padding: '36px 28px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'all 0.35s ease',
      boxShadow: pkg.popular ? '0 15px 40px rgba(124, 255, 79, 0.15)' : 'none'
    }}>
      {/* Popular Badge */}
      {pkg.popular && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#7cff4f',
          color: '#07090b',
          fontSize: '0.75rem',
          fontWeight: '900',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '6px 18px',
          borderRadius: '99px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 0 15px rgba(124, 255, 79, 0.5)'
        }}>
          <Sparkles size={13} /> {pkg.badgeText}
        </div>
      )}

      <div>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '800',
          color: pkg.popular ? '#7cff4f' : '#25bfff',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          {pkg.badgeText}
        </div>

        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.8rem',
          fontWeight: '900',
          color: '#f5f7f8',
          marginBottom: '6px'
        }}>
          {pkg.name}
        </h3>

        <p style={{
          color: '#b9c0c5',
          fontSize: '0.88rem',
          marginBottom: '24px',
          minHeight: '40px'
        }}>
          {pkg.subtitle}
        </p>

        {/* Pricing Number */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          marginBottom: '28px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '3rem',
            fontWeight: '900',
            color: pkg.popular ? '#7cff4f' : '#f5f7f8',
            lineHeight: 1
          }}>
            {pkg.price}
          </span>
          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: '600' }}>
            / {pkg.period}
          </span>
        </div>

        {/* Features List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
          {pkg.features.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: pkg.popular ? 'rgba(124, 255, 79, 0.15)' : 'rgba(37, 191, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check size={13} style={{ color: pkg.popular ? '#7cff4f' : '#25bfff' }} />
              </div>
              <span style={{ color: '#f5f7f8', fontSize: '0.92rem', fontWeight: '500' }}>
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link 
        to="/booking" 
        className={pkg.popular ? "btn-primary" : "btn-secondary"}
        style={{
          width: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          padding: '14px 20px'
        }}
      >
        {pkg.buttonText}
      </Link>

      <style>{`
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default PricingCard;
