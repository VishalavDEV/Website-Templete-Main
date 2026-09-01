import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const EventCategories = () => {
  const categories = [
    { name: 'POWER LIFT', tagline: 'Maximum Strength Challenge', desc: '3 attempts for 1-rep max in Squat, Bench Press, and Deadlift.', duration: '3 HOURS', difficulty: 'MAXIMAL STRENGTH', fee: '₹799' },
    { name: 'ENDURANCE RUSH', tagline: 'Timed Conditioning Challenge', desc: '500m row, 50 kettlebell swings, 100m sled push, 30 box jumps.', duration: '45 MINS', difficulty: 'HIGH BURN', fee: '₹799' },
    { name: 'BEAST CIRCUIT', tagline: 'Full-Body Fitness Challenge', desc: 'Sandbag carries, farmer walks, pull-up sprints, giant tire flips.', duration: '60 MINS', difficulty: 'HYBRID HARDCORE', fee: '₹799' },
    { name: 'ATHLETE ASCENT', tagline: 'Advanced Performance Challenge', desc: 'Muscle-ups, handstand walks, snatch ladders, rope climbs.', duration: '2 HOURS', difficulty: 'PRO ELITE', fee: '₹1,499' },
    { name: 'ROOKIE RISE', tagline: 'Beginner-Friendly Challenge', desc: 'First-time competitors stage lifting with scaled weights.', duration: '1 HOUR', difficulty: 'BEGINNER', fee: '₹799' }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="COMPETITION DIVISIONS" title="EVENT CATEGORIES" />
        <div className="grid-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="diagonal-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--color-yellow)', fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '0.8rem' }}>{cat.tagline.toUpperCase()}</div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF', margin: '0.4rem 0 1rem' }}>{cat.name}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{cat.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--color-yellow)' }}>{cat.fee}</div>
                <Button to="/registration" variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>REGISTER</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
