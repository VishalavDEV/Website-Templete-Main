import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import EquipmentCard from '../components/EquipmentCard';

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const equipmentList = [
    { name: 'Olympic Barbell', category: 'Strength', desc: 'IPF/IWF certified 20kg chrome barbell with 215,000 PSI tensile strength.', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { name: 'Competition Power Rack', category: 'Strength', desc: 'Heavy-duty 3x3 11-gauge steel cage with laser-cut numbers.', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80' },
    { name: 'Urethane Dumbbell Set', category: 'Free Weights', desc: 'Precision dumbbells ranging from 2.5kg to 100kg.', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Smith Machine', category: 'Machines', desc: 'Linear bearing guidance with counterbalanced bar weight.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Cable Crossover', category: 'Functional', desc: 'Dual independent weight stacks with 180-degree swiveling pulleys.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
    { name: 'Leg Press', category: 'Machines', desc: 'Heavy load capacity up to 800kg with quad-linear track system.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80' },
    { name: 'Woodway Treadmill', category: 'Cardio', desc: 'Motorless curved treadmill powered by human stride.', image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=600&q=80' },
    { name: 'Concept2 Rower', category: 'Cardio', desc: 'PM5 air-resistance rower offering precise wattage tracking.', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = activeCategory === 'ALL' ? equipmentList : equipmentList.filter(e => e.category === activeCategory);

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="ENGINEERED PRECISION" title="EQUIPMENT SHOWCASE" />
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {['ALL', 'Strength', 'Free Weights', 'Machines', 'Cardio', 'Functional'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                background: activeCategory === cat ? 'var(--color-yellow)' : 'var(--color-bg-card)',
                color: activeCategory === cat ? '#000' : '#FFF',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '800',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid-3">
          {filtered.map((item, idx) => (
            <EquipmentCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
