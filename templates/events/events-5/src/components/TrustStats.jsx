import React from 'react';
import { Car, Award, Wrench, ThumbsUp } from 'lucide-react';

export const TrustStats = () => {
  const stats = [
    {
      number: "12K+",
      label: "Cars Washed",
      subtext: "Precision hand & foam washes",
      icon: Car,
      color: "#7cff4f"
    },
    {
      number: "8+",
      label: "Years Experience",
      subtext: "Master detailing craftsmanship",
      icon: Award,
      color: "#25bfff"
    },
    {
      number: "25+",
      label: "Professional Equipment",
      subtext: "State-of-the-art studio tools",
      icon: Wrench,
      color: "#7cff4f"
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      subtext: "5-Star verified client reviews",
      icon: ThumbsUp,
      color: "#25bfff"
    }
  ];

  return (
    <section style={{
      background: '#0a0d10',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '40px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, #111417 0%, #0d1013 100%)'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: `rgba(${stat.color === '#7cff4f' ? '124, 255, 79' : '37, 191, 255'}, 0.1)`,
                  border: `1px solid ${stat.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 0 15px ${stat.color}33`
                }}>
                  <Icon size={26} style={{ color: stat.color }} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2.2rem',
                    fontWeight: '900',
                    lineHeight: 1,
                    color: '#f5f7f8',
                    marginBottom: '4px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.88rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: stat.color
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    marginTop: '2px'
                  }}>
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
