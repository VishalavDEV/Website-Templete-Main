import React, { useState } from 'react';
import { beforeAfterItems } from '../data/galleryData';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

export const BeforeAfter = () => {
  const [activeItem, setActiveItem] = useState(beforeAfterItems[0]);
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section style={{ padding: '90px 0', background: '#07090b', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">BEFORE & AFTER COMPARISON</span>
          <h2 className="section-title">SEE THE DIFFERENCE.</h2>
          <p className="section-subtitle">
            Drag the interactive slider back and forth to inspect exact detailing & restoration results.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {beforeAfterItems.map((item) => {
            const isActive = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setSliderPos(50);
                }}
                className={isActive ? "btn-primary" : "btn-secondary"}
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Draggable Comparison Card */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(124, 255, 79, 0.3)',
              cursor: 'ew-resize',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
            }}
          >
            {/* After Image (Background layer) */}
            <img
              src={activeItem.afterImage}
              alt="After"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* After Label Badge */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#7cff4f',
              color: '#07090b',
              fontWeight: '900',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              padding: '6px 14px',
              borderRadius: '6px',
              zIndex: 5
            }}>
              AFTER: RESTORED & POLISHED
            </div>

            {/* Before Image (Clipped layer) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${sliderPos}%`,
              height: '100%',
              overflow: 'hidden',
              borderRight: '3px solid #7cff4f'
            }}>
              <img
                src={activeItem.beforeImage}
                alt="Before"
                style={{
                  width: '900px',
                  maxWidth: 'none',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.3) brightness(0.8)'
                }}
              />
              {/* Before Label Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(7,9,11,0.9)',
                color: '#f5f7f8',
                fontWeight: '900',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                padding: '6px 14px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                BEFORE: UNTREATED
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              width: '4px',
              background: '#7cff4f',
              zIndex: 10,
              boxShadow: '0 0 15px #7cff4f'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#7cff4f',
                color: '#07090b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(124, 255, 79, 0.8)'
              }}>
                <ArrowLeftRight size={20} />
              </div>
            </div>
          </div>

          {/* Description Below */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div style={{
              background: '#111417',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Before Condition</span>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#f5f7f8', marginTop: '4px' }}>
                {activeItem.beforeText}
              </div>
            </div>

            <div style={{
              background: '#111417',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(124,255,79,0.3)'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#7cff4f', fontWeight: '700', textTransform: 'uppercase' }}>AQUAVEXA Result</span>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#7cff4f', marginTop: '4px' }}>
                {activeItem.afterText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
