import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Nutrition = () => {
  const foodCards = [
    { title: 'PRE-WORKOUT POWER BOWL', category: 'Pre-Workout', calories: '450 kcal', protein: '32g', carbs: '55g', fat: '10g', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80' },
    { title: 'POST-WORKOUT RECOVERY SHAKE', category: 'Post-Workout', calories: '380 kcal', protein: '45g', carbs: '35g', fat: '4g', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80' },
    { title: 'HYPERTROPHY STEAK & RICE', category: 'Muscle-Building', calories: '720 kcal', protein: '58g', carbs: '65g', fat: '22g', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
    { title: 'SHREDDED SALMON SALAD', category: 'Fat-Loss', calories: '420 kcal', protein: '40g', carbs: '12g', fat: '24g', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="FUEL THE FORGE" title="SPORTS NUTRITION & FUEL" />
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {foodCards.map((food, idx) => (
            <div key={idx} className="diagonal-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px' }}>
                <img src={food.img} alt={food.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>{food.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', background: 'var(--color-bg-black)', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
                  <div><div style={{ color: 'var(--color-yellow)', fontWeight: '900' }}>{food.calories}</div><div style={{ fontSize: '0.7rem', color: '#A0A0B8' }}>CALORIES</div></div>
                  <div><div style={{ color: 'var(--color-purple)', fontWeight: '900' }}>{food.protein}</div><div style={{ fontSize: '0.7rem', color: '#A0A0B8' }}>PROTEIN</div></div>
                  <div><div style={{ color: '#FFF', fontWeight: '900' }}>{food.carbs}</div><div style={{ fontSize: '0.7rem', color: '#A0A0B8' }}>CARBS</div></div>
                  <div><div style={{ color: '#FFF', fontWeight: '900' }}>{food.fat}</div><div style={{ fontSize: '0.7rem', color: '#A0A0B8' }}>FAT</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="diagonal-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--color-bg-card-hover)', border: '2px solid var(--color-yellow)' }}>
          <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '1rem' }}>NEED A CUSTOM NUTRITION PLAN?</h3>
          <Button to="/contact" variant="primary">GET YOUR NUTRITION PLAN</Button>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
