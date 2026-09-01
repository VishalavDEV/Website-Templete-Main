import React from 'react';
import { Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #E92B2B 0%, #FF6B2C 50%, #E92B2B 100%)',
      color: '#FFFFFF',
      fontSize: '0.82rem',
      fontWeight: '600',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      letterSpacing: '0.5px',
      position: 'relative',
      zIndex: 1001,
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles size={14} className="animate-spin-slow" />
        <span>EARLY BIRD SLOTS OPEN — 21.1 KM HALF MARATHON FILLING FAST!</span>
      </div>

      <div className="announcement-meta" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
          <Calendar size={13} /> SUN, 15 NOV 2026
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
          <MapPin size={13} /> CHENNAI, INDIA
        </span>
        <Link 
          to="/register" 
          style={{
            color: '#FFFFFF',
            background: 'rgba(0,0,0,0.3)',
            padding: '2px 10px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontSize: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'background 0.2s'
          }}
        >
          CLAIM TICKET <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}
