import React from 'react';
import GlitchText from '../components/GlitchText';
import FoodTimeline from '../components/FoodTimeline';
import { Utensils, Coffee, Pizza, Zap, Sparkles } from 'lucide-react';

const Food = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● 100% FREE UNLIMITED REFRESHMENTS</div>
          <GlitchText text="FOOD & OVERNIGHT BREAKS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Fuel your midnight commits with gourmet meals, hot pizza, continuous coffee stations, and energy drinks.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● OVERNIGHT CATERING TIMELINE</div>
            <h2 className="section-title text-gradient">MEAL SCHEDULE</h2>
            <p className="section-subtitle">All meals and continuous snack stations are completely free for registered hackers.</p>
          </div>

          <FoodTimeline />

          {/* Highlights Grid */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '4rem' }}>
            <div className="cyber-card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
              <Coffee size={36} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>24/7 ESPRESSO BAR</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Unlimited hot espresso, cappuccino, South Indian filter coffee, and cold brew served continuously through the night.
              </p>
            </div>

            <div className="cyber-card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
              <Pizza size={36} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>MIDNIGHT PIZZA PARTY</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Hot oven-fresh pizzas delivered directly to coding tables at 00:00 alongside retro synthwave DJ tunes.
              </p>
            </div>

            <div className="cyber-card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
              <Zap size={36} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>ENERGY SNACK DECK</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Unlimited Red Bull, protein bars, chocolates, potato chips, and mineral water available at workstation hubs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
