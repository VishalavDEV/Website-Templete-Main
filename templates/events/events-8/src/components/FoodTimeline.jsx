import React from 'react';
import { Utensils, Coffee, Pizza, Sun, Moon, Sparkles } from 'lucide-react';

const FoodTimeline = () => {
  const foodSchedule = [
    { time: '19:30', title: 'Grand Welcome Dinner', menu: 'Paneer Butter Masala, Biryani, Naan, Salad, & Ice Cream', type: 'DINNER', icon: Utensils, status: 'INCLUDED' },
    { time: '00:00', title: 'Midnight Pizza & Synthwave Party', menu: 'Fresh Hot Veggie & Cheese Pizzas + Cold Beverages', type: 'MIDNIGHT BREAK', icon: Pizza, status: 'INCLUDED' },
    { time: '03:00', title: 'Midnight Coffee & Energy Station', menu: 'Unlimited Espresso, Cold Brews, Red Bull & Energy Bars', type: 'ENERGY BAR', icon: Coffee, status: 'UNLIMITED 24/7' },
    { time: '08:00', title: 'Power Breakfast', menu: 'Hot Idli, Vada, Masala Dosa, Filter Coffee & Fresh Juices', type: 'BREAKFAST', icon: Sun, status: 'INCLUDED' },
    { time: '13:00', title: 'Pre-Submission Victory Lunch', menu: 'South Indian & North Indian Executive Thali + Dessert', type: 'LUNCH', icon: Utensils, status: 'INCLUDED' }
  ];

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}
      >
        {foodSchedule.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '1.75rem 1.25rem',
                backgroundColor: 'rgba(10, 16, 12, 0.85)',
                textAlign: 'center'
              }}
            >
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <div
                style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 255, 102, 0.12)',
                  border: '1px solid #00ff66',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  margin: '0 auto 1rem auto',
                  boxShadow: '0 0 15px rgba(0, 255, 102, 0.3)'
                }}
              >
                <IconComp size={26} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00ff66', letterSpacing: '1px', marginBottom: '0.25rem' }}>
                ● {item.time} — {item.type}
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h4>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                {item.menu}
              </p>

              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid rgba(0, 255, 102, 0.3)',
                  color: '#00ff66',
                  borderRadius: '4px'
                }}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodTimeline;
