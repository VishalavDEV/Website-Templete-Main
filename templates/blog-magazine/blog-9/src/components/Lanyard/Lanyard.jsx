import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, QrCode } from 'lucide-react';
import './Lanyard.css';

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    if (isDragging) {
      const deltaX = (e.clientX - startPosRef.current.x) * 0.4;
      const deltaY = (e.clientY - startPosRef.current.y) * 0.4;
      setRotation({
        x: Math.max(-30, Math.min(30, -deltaY)),
        y: Math.max(-45, Math.min(45, deltaX))
      });
    } else {
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      setRotation({
        x: -mouseY * 12,
        y: mouseX * 16
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="lanyard-wrapper"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        ref={cardRef}
        className="lanyard-fallback-card"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y + (isFlipped ? 180 : 0)}deg) scale(${isDragging ? 1.04 : 1})`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onPointerDown={handlePointerDown}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label="Interactive Explorer Field Pass"
      >
        <div className="lanyard-clip" />

        {!isFlipped ? (
          <>
            <div className="lanyard-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Compass size={18} color="#c9933b" />
                <span className="lanyard-card-brand">ATLAS</span>
              </div>
              <span className="lanyard-card-badge">CREDENTIAL</span>
            </div>

            <div className="lanyard-card-body">
              <div className="lanyard-card-subtitle" style={{ color: 'var(--accent-ochre)', marginBottom: '8px' }}>
                DISCOVERY SERIES · 2026
              </div>
              <h3 className="lanyard-card-title">FIELD EXPLORER</h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(245,242,235,0.7)', marginTop: '8px' }}>
                Authorized for global expedition telemetry & archive access.
              </p>
            </div>

            <div className="lanyard-card-footer">
              <div className="lanyard-card-meta">
                <div>NO. AT-90284-EXP</div>
                <div>SEC: DEEP FIELD BIO</div>
              </div>
              <div className="lanyard-card-chip" />
            </div>
          </>
        ) : (
          <div style={{ transform: 'scaleX(-1)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="lanyard-card-header">
              <span className="lanyard-card-brand" style={{ fontSize: '0.9rem' }}>FIELD NOTES PASS</span>
              <QrCode size={24} color="#c9933b" />
            </div>

            <div className="lanyard-card-body">
              <div style={{ fontSize: '0.85rem', color: '#f5f2eb', lineHeight: 1.5, textAlign: 'left', paddingLeft: '8px' }}>
                <p>• Stories.</p>
                <p>• Places.</p>
                <p>• Species.</p>
                <p>• Discoveries.</p>
              </div>
              <Link
                to="/explore"
                className="atlas-btn atlas-btn-ochre"
                style={{ padding: '0.5rem 1rem', fontSize: '0.72rem', marginTop: '16px', width: '100%' }}
                onClick={(e) => e.stopPropagation()}
              >
                SCAN / EXPLORE →
              </Link>
            </div>

            <div className="lanyard-card-footer">
              <div className="lanyard-card-meta">
                <div>TAP TO FLIP BACK</div>
                <div>EXPIRATION: PERPETUAL</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
