import React, { useEffect, useState } from 'react';
import { Users, Code, Clock, Trophy } from 'lucide-react';

const Stats = () => {
  const [counts, setCounts] = useState({
    hackers: 0,
    teams: 0,
    hours: 0,
    prizes: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        hackers: Math.floor(progress * 500),
        teams: Math.floor(progress * 100),
        hours: Math.floor(progress * 24),
        prizes: Math.floor(progress * 5)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({ hackers: 500, teams: 100, hours: 24, prizes: 5 });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    { icon: Users, label: 'Hackers', value: `${counts.hackers}+`, subtext: 'Student Innovators' },
    { icon: Code, label: 'Teams', value: `${counts.teams}+`, subtext: '2-4 Hackers per Team' },
    { icon: Clock, label: 'Hours', value: `${counts.hours}`, subtext: 'Non-Stop Overnight' },
    { icon: Trophy, label: 'Prizes', value: `₹${counts.prizes}L+`, subtext: 'Cash & Swag Pool' }
  ];

  return (
    <div
      className="stats-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        margin: '3rem 0'
      }}
    >
      {statItems.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={idx}
            className="cyber-card"
            style={{
              textAlign: 'center',
              padding: '2rem 1.5rem',
              backgroundColor: 'rgba(10, 16, 12, 0.8)'
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                margin: '0 auto 1rem auto',
                backgroundColor: 'rgba(0, 255, 102, 0.1)',
                border: '1px solid #00ff66',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00ff66',
                boxShadow: '0 0 15px rgba(0, 255, 102, 0.3)'
              }}
            >
              <IconComponent size={26} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.4rem',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.1',
                marginBottom: '0.35rem'
              }}
            >
              {stat.value}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: '#00ff66',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              {stat.label}
            </div>

            <div
              style={{
                fontSize: '0.8rem',
                color: '#94a3b8',
                marginTop: '0.25rem'
              }}
            >
              {stat.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
