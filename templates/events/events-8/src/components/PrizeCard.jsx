import React from 'react';
import { Trophy, Award, Gift, Zap, Star, ShieldCheck, Flame, Heart } from 'lucide-react';

const PrizeCard = () => {
  const mainPrizes = [
    {
      place: '1ST PLACE',
      amount: '₹2,00,000',
      tag: 'GRAND CHAMPIONS',
      perks: ['Cash Prize ₹2,00,000', 'Winner Trophies & Medals', 'Direct Incubator Entry', 'Cloud Credits worth $5,000', 'VIP Mentor Session'],
      highlight: true,
      color: '#00ff66',
      icon: Trophy
    },
    {
      place: '2ND PLACE',
      amount: '₹1,00,000',
      tag: 'RUNNER UP',
      perks: ['Cash Prize ₹1,00,000', 'Runner-up Trophies', 'Cloud Credits worth $2,500', 'Premium Dev Tools', 'Incubator Interview'],
      highlight: false,
      color: '#00f0ff',
      icon: Award
    },
    {
      place: '3RD PLACE',
      amount: '₹50,000',
      tag: 'SECOND RUNNER UP',
      perks: ['Cash Prize ₹50,000', 'Bronze Trophies', 'Cloud Credits worth $1,000', 'Mechanical Keyboards', 'Certificates of Merit'],
      highlight: false,
      color: '#ffb700',
      icon: Gift
    }
  ];

  const specialAwards = [
    { title: 'Best AI Project', prize: '₹25,000 + AI Hardware Kit', icon: Zap },
    { title: 'Best UI/UX Design', prize: '₹20,000 + Design Suite Pass', icon: Star },
    { title: 'Best Cybersecurity Solution', prize: '₹25,000 + Hardware Key', icon: ShieldCheck },
    { title: 'Best Student Startup Idea', prize: '₹25,000 + VC Pitch Desk', icon: Flame },
    { title: 'Best Social Impact', prize: '₹20,000 + Impact Fellowship', icon: Heart },
    { title: 'Best Innovation Track', prize: '₹20,000 + Dev Swag Pack', icon: Award },
    { title: "People's Choice Award", prize: '₹15,000 + Mechanical Keyboards', icon: Trophy }
  ];

  return (
    <div>
      {/* Main 3 Podium Prize Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}
      >
        {mainPrizes.map((prize, idx) => {
          const IconComponent = prize.icon;
          return (
            <div
              key={idx}
              className="cyber-card"
              style={{
                backgroundColor: prize.highlight ? 'rgba(0, 255, 102, 0.08)' : 'rgba(10, 16, 12, 0.8)',
                border: `1px solid ${prize.color}`,
                boxShadow: prize.highlight ? `0 0 30px rgba(0, 255, 102, 0.25)` : 'none',
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                transform: prize.highlight ? 'scale(1.04)' : 'none'
              }}
            >
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: `${prize.color}20`,
                  border: `2px solid ${prize.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: prize.color,
                  margin: '0 auto 1.25rem auto',
                  boxShadow: `0 0 20px ${prize.color}50`
                }}
              >
                <IconComponent size={32} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: prize.color, letterSpacing: '2px', marginBottom: '0.25rem' }}>
                {prize.tag}
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                {prize.place}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: prize.color,
                  marginBottom: '1.5rem',
                  textShadow: `0 0 15px ${prize.color}60`
                }}
              >
                {prize.amount}
              </div>

              <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0, margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
                {prize.perks.map((perk, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: prize.color }}>✔</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Special Category Awards */}
      <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem', color: '#fff' }}>
        SPECIAL CATEGORY AWARDS
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {specialAwards.map((award, idx) => {
          const IconComp = award.icon;
          return (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(10, 16, 12, 0.8)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid #00ff66',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  flexShrink: 0
                }}
              >
                <IconComp size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.2rem' }}>{award.title}</h4>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#00ff66' }}>{award.prize}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrizeCard;
