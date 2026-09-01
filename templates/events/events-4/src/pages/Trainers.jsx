import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TrainerCard from '../components/TrainerCard';

const Trainers = () => {
  const trainers = [
    {
      name: 'ARIN VALE',
      role: 'Head Strength Coach',
      exp: '12 Yrs',
      spec: 'Powerlifting & Strongman',
      bio: 'Former national powerlifting champion specializing in raw strength hypertrophy and biomechanical kinetic tuning.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'KAEL RYDER',
      role: 'Performance Coach',
      exp: '9 Yrs',
      spec: 'HIIT & Athletics',
      bio: 'Expert in sports speed conditioning, metabolic rate escalation, and endurance energy distribution.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'NOVA REYES',
      role: 'Functional Fitness Coach',
      exp: '7 Yrs',
      spec: 'Calisthenics & Mobility',
      bio: 'Specialist in joint longevity, core strength, dynamic kinetic stability, and injury prevention.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'RYAN CROSS',
      role: 'Bodybuilding Coach',
      exp: '11 Yrs',
      spec: 'Contest Prep & Sculpting',
      bio: 'IFBB certified prep strategist helping athletes carve elite muscle separation and stage presence.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="WORLD CLASS COACHES" title="VORTEX FORGE TRAINERS" />
        <div className="grid-4">
          {trainers.map((t, idx) => (
            <TrainerCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
