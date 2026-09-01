import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #07090b 0%, #111417 50%, #07090b 100%)',
      borderBottom: '1px solid rgba(124, 255, 79, 0.2)',
      padding: '8px 16px',
      fontSize: '0.82rem',
      fontWeight: '600',
      letterSpacing: '0.04em',
      color: '#f5f7f8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      position: 'relative',
      zIndex: 1001
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles size={14} style={{ color: '#7cff4f' }} />
        <span>NEW CUSTOMER OFFER — GET <strong style={{ color: '#7cff4f' }}>15% OFF</strong> YOUR FIRST DETAILING SERVICE</span>
      </div>
      <Link 
        to="/booking" 
        style={{
          color: '#7cff4f',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontWeight: '800',
          fontSize: '0.8rem',
          marginLeft: '8px',
          textTransform: 'uppercase'
        }}
      >
        Book Now <ArrowRight size={13} />
      </Link>
    </div>
  );
};

export default AnnouncementBar;
