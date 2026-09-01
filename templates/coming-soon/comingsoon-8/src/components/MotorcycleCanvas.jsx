import React, { useEffect, useRef, useState } from 'react';
import { RotateCw, Compass, Sliders, Eye } from 'lucide-react';
import { audioEngine } from './AudioEngine';
import frontImg from '../assets/images/ktm_front.jpg';
import front34Img from '../assets/images/ktm_front_34.jpg';
import sideImg from '../assets/images/ktm_side.jpg';
import rear34Img from '../assets/images/ktm_rear_34.jpg';
import rearImg from '../assets/images/ktm_rear.jpg';

// Authentic Multi-Angle Studio Sequence for full 360° turntable
const ANGLE_FRAMES = [
  { id: 'front', label: 'FRONT', src: frontImg, angleDeg: 0, isMirrored: false },
  { id: 'front-34-r', label: 'FRONT 3/4', src: front34Img, angleDeg: 45, isMirrored: false },
  { id: 'side-r', label: 'SIDE PROFILE', src: sideImg, angleDeg: 90, isMirrored: false },
  { id: 'rear-34-r', label: 'REAR 3/4', src: rear34Img, angleDeg: 135, isMirrored: false },
  { id: 'rear', label: 'REAR', src: rearImg, angleDeg: 180, isMirrored: false },
  { id: 'rear-34-l', label: 'REAR 3/4', src: rear34Img, angleDeg: 225, isMirrored: true },
  { id: 'side-l', label: 'SIDE PROFILE', src: sideImg, angleDeg: 270, isMirrored: true },
  { id: 'front-34-l', label: 'FRONT 3/4', src: front34Img, angleDeg: 315, isMirrored: true }
];

export default function MotorcycleCanvas({
  scrollYProgress = 0,
  onAngleChange
}) {
  const [currentAngleIndex, setCurrentAngleIndex] = useState(1); // Default to aggressive Front 3/4 (45°)
  const [currentRotationDeg, setCurrentRotationDeg] = useState(45);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ startX: 0, lastX: 0 });

  // Preload all real dark studio multi-angle images
  useEffect(() => {
    ANGLE_FRAMES.forEach(frame => {
      const img = new Image();
      img.src = frame.src;
    });
  }, []);

  // Compute nearest angle frame from continuous manual rotation degrees (0..360)
  useEffect(() => {
    const totalFrames = ANGLE_FRAMES.length;
    const step = 360 / totalFrames;
    const rawIdx = Math.round(currentRotationDeg / step) % totalFrames;
    const activeIdx = rawIdx < 0 ? rawIdx + totalFrames : rawIdx;

    if (activeIdx !== currentAngleIndex) {
      setCurrentAngleIndex(activeIdx);
      if (onAngleChange) {
        onAngleChange(ANGLE_FRAMES[activeIdx].label);
      }
    }
  }, [currentRotationDeg]);

  // Manual Mouse & Touch Drag Controls (NO auto-rotation)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartRef.current.startX = clientX;
    dragStartRef.current.lastX = clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartRef.current.lastX;
    dragStartRef.current.lastX = clientX;

    setCurrentRotationDeg(prev => {
      const next = (prev - deltaX * 0.7) % 360;
      return next < 0 ? next + 360 : next;
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleAngleQuickSelect = (deg) => {
    audioEngine.playClick();
    setCurrentRotationDeg(deg);
  };

  const handleSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    setCurrentRotationDeg(val);
  };

  const activeFrame = ANGLE_FRAMES[currentAngleIndex] || ANGLE_FRAMES[0];

  // Headlight illumination brightness factor: peak when facing FRONT (0° or 360°)
  const angleRad = (currentRotationDeg * Math.PI) / 180;
  const headlightFactor = Math.max(0.15, Math.cos(angleRad));

  // Dynamic zoom scale based on scroll
  const zoomScale = 1.0 + scrollYProgress * 0.25;

  return (
    <div 
      className="real-motorcycle-turntable-container"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* Studio Background & Atmospheric Lighting */}
      <div className="turntable-studio-backdrop">
        <div className="studio-light-overhead" />
        <div 
          className="studio-rim-glow"
          style={{ opacity: 0.4 + (1 - headlightFactor) * 0.5 }}
        />
        {/* Dynamic Front Headlight Glow Projection */}
        <div 
          className="headlight-volumetric-flare"
          style={{ 
            opacity: Math.max(0, headlightFactor - 0.2) * 0.85,
            transform: `scale(${0.8 + headlightFactor * 0.4})`
          }}
        />
      </div>

      {/* 360° Real Motorcycle Display Frame */}
      <div 
        className="turntable-stage"
        style={{ transform: `scale(${zoomScale}) translateY(-2%)` }}
      >
        {/* Real Bike Image Element */}
        <div className="bike-image-wrapper">
          <img 
            key={activeFrame.id + (activeFrame.isMirrored ? '-m' : '')}
            src={activeFrame.src}
            alt={`KTM 390 Duke - ${activeFrame.label}`}
            className={`real-bike-photo ${activeFrame.isMirrored ? 'mirrored' : ''}`}
            draggable={false}
          />
        </div>

        {/* Real Studio Turntable Platform & Floor Reflection */}
        <div className="turntable-disc-platform">
          <div 
            className="turntable-rotor-ring"
            style={{ transform: `rotate(${currentRotationDeg}deg)` }}
          />
          <div className="turntable-contact-shadow" />
        </div>
      </div>

      {/* Atmospheric Fog Particles */}
      <div className="studio-fog-overlay" />

      {/* Top Right Turntable HUD Status */}
      <div className="turntable-hud-indicator">
        <div className="hud-pulse-dot" />
        <span className="hud-label">MANUAL 360°:</span>
        <span className="hud-angle-val">{activeFrame.label} ({Math.round(currentRotationDeg)}°)</span>
      </div>

      {/* Manual 360° Interactive Scrubber & Quick Angle Controls */}
      <div className="manual-360-control-panel">
        <div className="manual-slider-row">
          <span className="slider-label">
            <Compass size={14} className="slider-icon" />
            <span>ROTATE 360°</span>
          </span>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={Math.round(currentRotationDeg)}
            onChange={handleSliderChange}
            className="turntable-360-slider"
            aria-label="360 Degree Rotation Angle"
          />
          <span className="slider-deg-val">{Math.round(currentRotationDeg)}°</span>
        </div>

        <div className="quick-buttons-row">
          {[
            { label: 'FRONT', deg: 0 },
            { label: 'FRONT 3/4', deg: 45 },
            { label: 'SIDE', deg: 90 },
            { label: 'REAR 3/4', deg: 135 },
            { label: 'REAR', deg: 180 }
          ].map(view => {
            const isSelected = Math.abs(currentRotationDeg - view.deg) < 25;
            return (
              <button
                key={view.label}
                className={`angle-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAngleQuickSelect(view.deg);
                }}
              >
                {view.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Manual Drag Prompt */}
      <div className="interactive-drag-hint">
        <span className="drag-icon">↔</span>
        <span>DRAG ANYWHERE OR USE SLIDER TO ROTATE</span>
      </div>
    </div>
  );
}
