import React, { useEffect, useState, useRef } from 'react';
import { Users, Route, Music, Shield, PartyPopper, Award } from 'lucide-react';

const STATS_DATA = [
  { label: 'REGISTERED RUNNERS', target: 25000, suffix: '+', icon: Users },
  { label: 'MAIN COURSE DISTANCE', target: 21.1, suffix: ' KM', isDecimal: true, icon: Route },
  { label: 'ELECTRIC CHEERING ZONES', target: 40, suffix: '+', icon: PartyPopper },
  { label: 'HYDRATION & AID STATIONS', target: 18, suffix: '', icon: Shield },
  { label: 'LIVE MUSIC & DRUM POINTS', target: 12, suffix: '', icon: Music },
  { label: 'FINISH-LINE CELEBRATIONS', target: 6, suffix: '', icon: Award }
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #15171B 0%, #090A0D 100%)',
        padding: '80px 24px',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            EVENT NUMBERS
          </div>
          <h2 className="section-title">
            THE SCALE OF VAYORA RUNFEST
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px'
        }}>
          {STATS_DATA.map((stat, idx) => (
            <CounterCard key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ stat, isVisible }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = stat.target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.target) {
        setCount(stat.target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.target]);

  const formattedValue = stat.isDecimal 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '30px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'rgba(255, 107, 44, 0.12)',
        border: '1px solid rgba(255, 107, 44, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px auto',
        color: 'var(--bright-orange)'
      }}>
        <Icon size={24} />
      </div>

      <div 
        className="font-display text-gradient-fire"
        style={{
          fontSize: '3rem',
          lineHeight: 1,
          fontWeight: 900,
          marginBottom: '8px'
        }}
      >
        {formattedValue}{stat.suffix}
      </div>

      <div style={{
        fontSize: '0.75rem',
        fontWeight: 800,
        color: 'var(--soft-grey)',
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
      }}>
        {stat.label}
      </div>
    </div>
  );
}
