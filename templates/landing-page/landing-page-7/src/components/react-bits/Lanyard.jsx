import React, { useState, useRef } from 'react';

/**
 * Lanyard — Studio / Project Credential Exhibition Pass
 * Interactive 3D physical pass with strap and metallic clip.
 */
export const Lanyard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -18;
    const rotY = ((x - centerX) / centerX) * 18;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="lanyard-container">
      {/* Hanging Fabric Strap */}
      <div className="lanyard-strap" />
      {/* Metallic Clasp */}
      <div className="lanyard-clip" />

      {/* Interactive 3D Credential Pass Card */}
      <div
        ref={cardRef}
        className={`lanyard-card ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s var(--ease-architectural)',
        }}
      >
        <div className="lanyard-card-inner">
          <div className="card-top-slot" />
          
          <div className="card-badge-header">
            <span className="card-brand">MONOLITH</span>
            <span className="card-year">2026</span>
          </div>

          <div className="card-pass-type">
            <span className="pass-title">STUDIO PASS</span>
            <span className="pass-meta">EXHIBITION CREDENTIAL</span>
          </div>

          <div className="card-barcode-box">
            <div className="barcode-bars" />
            <span className="barcode-code">MLTH-SEC-001</span>
          </div>

          <div className="card-footer-project">
            <span className="proj-label">FEATURED ACCESS</span>
            <span className="proj-val">PROJECT 001 // HOUSE OF SILENCE</span>
            <span className="proj-loc">CHENNAI, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
