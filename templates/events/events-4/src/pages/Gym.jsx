import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Gym = () => {
  const zones = [
    {
      title: 'STRENGTH & POWER ZONE',
      subtitle: 'HEAVY IRON & COMPETITION RIGS',
      desc: 'Features 12 Rogue power racks, Eleiko calibrated powerlifting plates, Texas power bars, and dumbbell racks up to 100kg.',
      items: ['Squat Racks', 'Olympic Benches', 'Deadlift Platforms', 'Calibrated Plates', 'Heavy Dumbbells'],
      img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'CARDIO & METABOLIC ZONE',
      subtitle: 'HIGH ENDURANCE CONDITIONING',
      desc: 'Equipped with Woodway treadmills, Assault AirBikes, Concept2 rowing machines, SkiErgs, and StairMaster climbers.',
      items: ['Woodway Treadmills', 'Concept2 Rowers', 'Assault AirBikes', 'SkiErgs', 'Stair Climbers'],
      img: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'FUNCTIONAL & ATHLETIC ZONE',
      subtitle: 'EXPLOSIVE PERFORMANCE & TURF',
      desc: '30-meter indoor sprint turf, weighted sleds, battle ropes, plyometric box stations, and kettlebells.',
      items: ['Sprint Turf', 'Weighted Sleds', 'Battle Ropes', 'Kettlebell Racks', 'Plyo Boxes'],
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'RECOVERY & MOBILITY LOUNGE',
      subtitle: 'REPAIR, REGENERATE, RECHARGE',
      desc: 'Theragun percussive therapy, foam rolling mobility zones, infrared sauna, and cold plunge therapy tubs.',
      items: ['Stretching Area', 'Percussive Therapy', 'Infrared Sauna', 'Cold Plunge Tubs', 'Relaxation Lounge'],
      img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="WORLD CLASS FACILITIES" title="VORTEX FORGE GYM ARENA" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {zones.map((zone, idx) => (
            <div key={idx} className="diagonal-card" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'var(--color-yellow)', fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '0.85rem' }}>{zone.subtitle}</div>
                <h3 style={{ fontSize: '1.6rem', color: '#FFF', margin: '0.5rem 0 1rem' }}>{zone.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{zone.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {zone.items.map((item, i) => (
                    <span key={i} style={{ background: 'rgba(255,230,0,0.1)', color: 'var(--color-yellow)', border: '1px solid var(--color-yellow)', padding: '0.3rem 0.8rem', fontSize: '0.8rem', fontWeight: '800' }}>✓ {item}</span>
                  ))}
                </div>
              </div>
              <div>
                <img src={zone.img} alt={zone.title} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gym;
