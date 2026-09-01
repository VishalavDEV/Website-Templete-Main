import React from 'react';
import { Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EquipmentCard = ({ item }) => {
  return (
    <div className="glass-card" style={{
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative'
    }}>
      <div>
        {/* Top Image */}
        <div style={{
          width: '100%',
          height: '180px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(7, 9, 11, 0.85)',
            border: '1px solid #7cff4f',
            color: '#7cff4f',
            fontSize: '0.72rem',
            fontWeight: '800',
            padding: '4px 10px',
            borderRadius: '99px',
            letterSpacing: '0.08em'
          }}>
            {item.badge}
          </div>
        </div>

        <div style={{
          fontSize: '0.78rem',
          fontWeight: '800',
          color: '#25bfff',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '6px'
        }}>
          {item.category}
        </div>

        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.35rem',
          fontWeight: '800',
          color: '#f5f7f8',
          marginBottom: '8px'
        }}>
          {item.name}
        </h3>

        <div style={{
          background: 'rgba(255,255,255,0.04)',
          borderLeft: '3px solid #7cff4f',
          padding: '8px 12px',
          fontSize: '0.85rem',
          fontWeight: '700',
          color: '#7cff4f',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          {item.spec}
        </div>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          {item.features.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#b9c0c5' }}>
              <CheckCircle size={14} color="#7cff4f" style={{ flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Link to="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.85rem' }}>
        View Equipment Details <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default EquipmentCard;
