import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { SpecularButton } from './SpecularButton';
import '../styles/forms.css';

export const Tickets = ({ onSelectTicket, selectedTicket }) => {
  const [selectedId, setSelectedId] = useState(selectedTicket ? selectedTicket.id : 'early-bird');

  const ticketTiers = [
    {
      id: 'early-bird',
      name: 'EARLY BIRD',
      price: '1,499',
      symbol: '₹',
      popular: false,
      features: [
        'Access to all Mainstage Keynotes',
        'Technical Track Sessions Access',
        'Exhibition Hall & Partner Booths',
        'Official Summit Delegate Kit',
        'Networking Coffee & Lunch'
      ]
    },
    {
      id: 'standard',
      name: 'STANDARD PASS',
      price: '2,499',
      symbol: '₹',
      popular: false,
      features: [
        'Everything in Early Bird',
        'Hands-on Workshop Access',
        '1-on-1 Investor Office Hours',
        'Verified Certificate of Attendance',
        'Post-Summit Recorded Video Access'
      ]
    },
    {
      id: 'vip',
      name: 'VIP EXECUTIVE',
      price: '4,999',
      symbol: '₹',
      popular: true,
      ribbonText: 'MOST POPULAR',
      features: [
        'Everything in Standard Pass',
        'Front-Row VIP Mainstage Seating',
        'Exclusive Speaker & Founder Dinner',
        'VIP Executive Lounge Access',
        'Premium Leather Swag & Kit'
      ]
    }
  ];

  const handleCardSelect = (ticket) => {
    setSelectedId(ticket.id);
    if (onSelectTicket) {
      onSelectTicket(ticket);
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">SUMMIT PASSES</div>
          <h2 className="section-title">Select Your Pass Tier</h2>
          <p className="section-subtitle">
            Flexible registration options tailored for individual developers, enterprise leaders, and VIP delegates.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="tickets-grid">
          {ticketTiers.map((ticket) => {
            const isSelected = selectedId === ticket.id;
            return (
              <div
                key={ticket.id}
                onClick={() => handleCardSelect(ticket)}
                className={`glass-card ticket-card ${isSelected ? 'selected-blue' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  boxShadow: isSelected ? '0 0 25px rgba(37, 99, 235, 0.4), 0 12px 30px -5px rgba(37, 99, 235, 0.3)' : undefined
                }}
              >
                {ticket.popular && (
                  <div className="ticket-ribbon">
                    <Star size={12} fill="#ffffff" style={{ marginRight: '4px' }} />
                    {ticket.ribbonText}
                  </div>
                )}

                <h3 className="ticket-title" style={{ color: isSelected ? '#2563eb' : 'var(--text-primary)' }}>
                  {ticket.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {ticket.popular ? 'Full VIP privileges & speaker dinner' : 'Complete access pass'}
                </p>

                <div className="ticket-price-box">
                  <span className="ticket-currency" style={{ color: '#2563eb' }}>
                    {ticket.symbol}
                  </span>
                  <span className="ticket-price">{ticket.price}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ delegate</span>
                </div>

                <ul className="ticket-features">
                  {ticket.features.map((feat, idx) => (
                    <li key={idx} className="ticket-feature-item">
                      <Check size={18} className="ticket-feature-icon" style={{ color: '#2563eb' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <SpecularButton
                  size="md"
                  radius={14}
                  lineColor="#2563eb"
                  baseColor={isSelected ? '#2563eb' : '#1e293b'}
                  textColor="#ffffff"
                  tint="#2563eb"
                  tintOpacity={0.3}
                  autoAnimate={isSelected || ticket.popular}
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardSelect(ticket);
                  }}
                >
                  {isSelected ? 'Pass Selected ✓' : 'Get Ticket →'}
                </SpecularButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

