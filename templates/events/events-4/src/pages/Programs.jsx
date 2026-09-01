import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
  const [filter, setFilter] = useState('ALL');

  const allPrograms = [
    {
      title: 'POWER FORGE',
      category: 'Strength Training',
      duration: '12 WEEKS',
      difficulty: 'HIGH INTENSITY',
      coach: 'Arin Vale',
      desc: 'Master powerlifting fundamentals (Squat, Bench, Deadlift) with progressive overload protocols engineered for maximum mechanical tension.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'ASCENT SHRED',
      category: 'Fat Loss & Conditioning',
      duration: '8 WEEKS',
      difficulty: 'MAX BURN',
      coach: 'Kael Ryder',
      desc: 'High-octane metabolic conditioning combining sprint intervals, kettlebell circuits, and sled pushes for total fat oxidation.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'MUSCLE ARCHITECT',
      category: 'Bodybuilding',
      duration: '16 WEEKS',
      difficulty: 'ADVANCED',
      coach: 'Ryan Cross',
      desc: 'Hypertrophy-focused training split designed to build symmetrical lean muscle volume with precise angular tension control.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'ATHLETE CORE',
      category: 'Sports Performance',
      duration: '10 WEEKS',
      difficulty: 'PRO ATHLETE',
      coach: 'Kael Ryder',
      desc: 'Enhance lateral speed, vertical jump, rotational core power, and kinetic chain efficiency for competitive team and solo sports.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'MOBILITY FLOW',
      category: 'Mobility & Recovery',
      duration: '6 WEEKS',
      difficulty: 'ALL LEVELS',
      coach: 'Nova Reyes',
      desc: 'Unlock joint range of motion, fix posture imbalances, relieve lower back compression, and accelerate post-heavy-lift recovery.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'BEAST MODE',
      category: 'Advanced Training',
      duration: '14 WEEKS',
      difficulty: 'EXTREME',
      coach: 'Arin Vale',
      desc: 'Hybrid strongman and endurance overload routine for seasoned lifters seeking maximal grip strength, stone carries, and heavy tire flips.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filtered = filter === 'ALL' ? allPrograms : allPrograms.filter(p => p.category.toUpperCase().includes(filter));

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="SYSTEMATIC TRAINING" title="FITNESS & STRENGTH PROGRAMS" />

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {['ALL', 'STRENGTH', 'FAT LOSS', 'BODYBUILDING', 'SPORTS', 'MOBILITY'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                background: filter === cat ? 'var(--color-yellow)' : 'var(--color-bg-card)',
                color: filter === cat ? '#000' : '#FFF',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '800',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((prog, idx) => (
            <ProgramCard key={idx} {...prog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
