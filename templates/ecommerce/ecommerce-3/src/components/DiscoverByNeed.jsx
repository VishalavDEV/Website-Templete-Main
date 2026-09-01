import React, { useState } from 'react';
import { Camera, Laptop, Gamepad2, Headphones, Tv, Smartphone, ArrowRight } from 'lucide-react';

export default function DiscoverByNeed({ onSelectCategory }) {
  const [activeNeed, setActiveNeed] = useState('CREATE');

  const needs = [
    {
      id: 'CREATE',
      icon: Camera,
      label: 'CREATE',
      category: 'LAPTOPS',
      subtitle: 'High-bandwidth rendering, color-accurate displays, neural video processors.',
      image: '/images/nova_book_pro_open.webp',
      featured: 'NOVA BOOK PRO'
    },
    {
      id: 'WORK',
      icon: Laptop,
      label: 'WORK',
      category: 'LAPTOPS',
      subtitle: 'Silent fanless computing with 18-hour battery longevity.',
      image: '/images/nova_book_air_open.webp',
      featured: 'NOVA BOOK AIR'
    },
    {
      id: 'PLAY',
      icon: Gamepad2,
      label: 'PLAY',
      category: 'GAMING',
      subtitle: 'Zero latency Hall Effect sensors, liquid cooling, high frame rate displays.',
      image: '/images/nova_gamepad_front.webp',
      featured: 'NOVA GAMEPAD & CORE PC'
    },
    {
      id: 'LISTEN',
      icon: Headphones,
      label: 'LISTEN',
      category: 'AUDIO',
      subtitle: 'Planarmagnetic planar drivers and 50dB active noise cancellation.',
      image: '/images/nova_buds_pro_open.webp',
      featured: 'NOVA BUDS PRO'
    },
    {
      id: 'WATCH',
      icon: Tv,
      label: 'WATCH',
      category: 'SMART HOME',
      subtitle: '150-inch 4K laser cinema projection with spatial acoustics.',
      image: '/images/nova_beam_hero.webp',
      featured: 'NOVA BEAM 4K'
    },
    {
      id: 'CONNECT',
      icon: Smartphone,
      label: 'CONNECT',
      category: 'PHONES',
      subtitle: 'Precision-milled titanium flagship mobile hardware with Neural OS.',
      image: '/images/nova_x1_pro_front.webp',
      featured: 'NOVA X1 PRO'
    }
  ].map(item => ({
    ...item,
    image: item.image.startsWith('/') ? import.meta.env.BASE_URL + item.image.slice(1) : item.image
  }));

  const activeItem = needs.find(n => n.id === activeNeed);

  return (
    <section style={{
      padding: '6rem 0',
      background: '#08090B',
      position: 'relative',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.2em',
            marginBottom: '0.5rem'
          }}>
            01 / PURPOSE ENGINE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F4F4F1' }}>
            WHAT ARE YOU LOOKING FOR?
          </h2>
        </div>

        {/* Grid Layout: Needs Buttons Left, Interactive Spec Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="discover-grid">

          {/* Left: Interactive Need Option Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {needs.map((item) => {
              const Icon = item.icon;
              const isSelected = activeNeed === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveNeed(item.id)}
                  onClick={() => onSelectCategory(item.category)}
                  style={{
                    padding: '1.2rem 1.6rem',
                    borderRadius: '6px',
                    background: isSelected ? 'rgba(0, 240, 255, 0.08)' : 'rgba(16, 18, 22, 0.5)',
                    border: `1px solid ${isSelected ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 255, 255, 0.06)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <Icon size={20} color={isSelected ? '#00F0FF' : '#8E94A0'} />
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: isSelected ? '#F4F4F1' : '#8E94A0',
                      letterSpacing: '0.05em'
                    }}>
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight size={16} color={isSelected ? '#00F0FF' : 'transparent'} />
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Preview Card */}
          <div style={{
            background: 'rgba(16, 18, 22, 0.8)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '12px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#00F0FF',
                marginBottom: '0.8rem'
              }}>
                RECOMMENDED ARCHITECTURE
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#F4F4F1', marginBottom: '0.8rem' }}>
                {activeItem.featured}
              </h3>
              <p style={{ color: '#8E94A0', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px' }}>
                {activeItem.subtitle}
              </p>
            </div>

            <div style={{
              marginTop: '2rem',
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative'
            }}>
              <img
                src={activeItem.image}
                alt={activeItem.label}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px', background: '#08090B' }}
              />
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => onSelectCategory(activeItem.category)}
                className="btn-primary"
                style={{ padding: '0.7rem 1.4rem', fontSize: '0.78rem' }}
              >
                EXPLORE {activeItem.label} CATEGORY →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
