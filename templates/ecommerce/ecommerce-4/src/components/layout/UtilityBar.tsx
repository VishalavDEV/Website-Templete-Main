import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const UtilityBar: React.FC = () => {
  const { navigate } = useShop();

  return (
    <div
      style={{
        backgroundColor: '#161616',
        color: '#FFFFFF',
        padding: '0.45rem 1rem',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        flexWrap: 'wrap'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <Truck size={14} style={{ color: 'var(--accent-amber)' }} />
        <span>COMPLIMENTARY EXPRESS DELIVERY ON ORDERS OVER ₹999</span>
      </div>

      <span style={{ color: '#444444' }}>|</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <RotateCcw size={14} style={{ color: 'var(--accent-amber)' }} />
        <span>EASY 30-DAY DOORSTEP RETURNS</span>
      </div>

      <span style={{ color: '#444444' }}>|</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <ShieldCheck size={14} style={{ color: 'var(--accent-amber)' }} />
        <span>100% VERIFIED AUTHENTIC PRODUCTS</span>
      </div>

      <button
        onClick={() => navigate('/deals')}
        style={{
          color: 'var(--accent-amber)',
          textDecoration: 'underline',
          fontWeight: 800,
          marginLeft: '0.5rem'
        }}
      >
        EXPLORE DEALS →
      </button>
    </div>
  );
};
