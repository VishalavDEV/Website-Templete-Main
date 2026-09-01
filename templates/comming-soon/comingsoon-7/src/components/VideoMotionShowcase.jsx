import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCw, RotateCcw, Compass, 
  Layers, ShieldAlert, Zap, Wind, Eye, Activity, 
  Sparkles, CheckCircle2, ChevronRight, Sliders, Maximize, Orbit
} from 'lucide-react';

export const VideoMotionShowcase = ({ 
  product, 
  activeColorway,
  onOpenSpecsModal
}) => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(45); // 0 to 360 degrees
  const [rotationSpeed, setRotationSpeed] = useState(1); // 0.5x, 1x, 2x
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isCinematicExpanded, setIsCinematicExpanded] = useState(false);
  const [viewMode, setViewMode] = useState('360'); // '360' | 'detail'
  
  const canvasRef = useRef(null);
  const turntableStageRef = useRef(null);

  // Auto rotation loop
  useEffect(() => {
    let animationFrame;
    if (isAutoRotating && !isDragging) {
      const step = () => {
        setRotationAngle((prev) => (prev + 0.35 * rotationSpeed) % 360);
        animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoRotating, isDragging, rotationSpeed]);

  // Determine active shoe image and phase based on rotation angle (0 - 360 degrees)
  // 0 - 89 deg: Front 3/4 Perspective
  // 90 - 179 deg: Lateral Profile
  // 180 - 269 deg: Rear Heel Counter & Spoiler
  // 270 - 359 deg: Outsole & Carbon Plate
  const getAngleState = (deg) => {
    const normalized = ((deg % 360) + 360) % 360;
    if (normalized >= 0 && normalized < 90) {
      return {
        image: '/assets/images/shoe-360-front.jpg',
        name: 'Front 3/4 Perspective',
        phase: 'PHASE 01 • TOE-BOX & SPEEDLOCK FIT',
        title: 'AEROKNIT™ 360 TOE-BOX',
        desc: 'Seamless biomimetic weave expands anatomically with foot splay while stabilizing lateral toe-off.',
        metric: '0.3mm Ultrathin Matrix',
        icon: 'Wind'
      };
    } else if (normalized >= 90 && normalized < 180) {
      return {
        image: activeColorway.heroImage,
        name: 'Lateral Speed Profile',
        phase: 'PHASE 02 • CARBON LEVER GEOMETRY',
        title: 'CARBON FLIGHTPLATE™ 3.0',
        desc: 'Full-length 3D spoon geometry stores kinetic ground force and redirects momentum horizontally.',
        metric: '3.2x Torsional Rigidity',
        icon: 'Layers'
      };
    } else if (normalized >= 180 && normalized < 270) {
      return {
        image: '/assets/images/shoe-heel-detail.jpg',
        name: 'Rear Heel & Aerodynamic Spoiler',
        phase: 'PHASE 03 • HEEL STRIKE & DAMPENING',
        title: 'NITRO-INFUSED HEEL DAMPER',
        desc: 'Molded carbon spoiler cuts air drag while supercritical nitrogen foam absorbs 94% of heel strike load.',
        metric: '-42% Joint Impact',
        icon: 'ShieldAlert'
      };
    } else {
      return {
        image: '/assets/images/shoe-outsole.jpg',
        name: 'Traction Outsole & Carbon Grid',
        phase: 'PHASE 04 • ROAD GRIP & PROPULSION',
        title: 'LIQUIDTACK™ WET-ROAD COMPOUND',
        desc: 'Micro-lug rubber matrix with exposed carbon bridges delivers high traction on wet asphalt.',
        metric: '88.4% Elastic Rebound',
        icon: 'Zap'
      };
    }
  };

  const activeState = getAngleState(rotationAngle);

  // Mouse & Touch Drag-to-Rotate handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX));
    setDragStartAngle(rotationAngle);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - dragStartX;
    // Map drag distance to angle rotation
    const newAngle = (dragStartAngle - deltaX * 0.75 + 360) % 360;
    setRotationAngle(newAngle);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Canvas Turntable Particle & Holographic Rings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.82;
      const radiusX = canvas.width * 0.42;
      const radiusY = canvas.height * 0.16;

      // Draw Turntable Base Ellipses
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = activeColorway.primaryHex + '44';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Outer Glowing Ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX * 1.15, radiusY * 1.15, 0, 0, Math.PI * 2);
      ctx.strokeStyle = activeColorway.primaryHex + '22';
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Rotating Angle Indicator Dot
      const rad = (rotationAngle * Math.PI) / 180;
      const dotX = centerX + Math.cos(rad) * radiusX;
      const dotY = centerY + Math.sin(rad) * radiusY;

      ctx.beginPath();
      ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
      ctx.fillStyle = activeColorway.primaryHex;
      ctx.shadowBlur = 12;
      ctx.shadowColor = activeColorway.primaryHex;
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [rotationAngle, activeColorway]);

  const getPhaseIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Wind': return <Wind size={20} />;
      default: return <Activity size={20} />;
    }
  };

  return (
    <section id="motion-lab" className="motion-showcase-section">
      <div className="motion-container">
        
        {/* Section Header */}
        <div className="motion-header">
          <div className="motion-header-left">
            <span className="badge-tag">
              <Orbit size={14} /> 360° 3D SHOE TURNTABLE & MOTION LAB
            </span>
            <h2 className="motion-title">
              INTERACTIVE 360° ROTATION & GAIT BIOMECHANICS
            </h2>
            <p className="motion-sub">
              Drag horizontally to smoothly inspect every angle of the shoe. Front technical display updates dynamically with rotation.
            </p>
          </div>

          <div className="motion-header-right">
            {/* View Mode Toggle */}
            <div className="view-mode-toggle glass-card">
              <button 
                className={`toggle-tab-btn ${viewMode === '360' ? 'active' : ''}`}
                onClick={() => setViewMode('360')}
              >
                <Orbit size={15} />
                <span>360° Turntable</span>
              </button>
              <button 
                className={`toggle-tab-btn ${viewMode === 'detail' ? 'active' : ''}`}
                onClick={() => setViewMode('detail')}
              >
                <Layers size={15} />
                <span>Exploded Detail</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Split-Screen Synchronized Showcase Zone */}
        <div className={`motion-pairing-grid ${isCinematicExpanded ? 'cinematic-expanded' : ''}`}>
          
          {/* ========================================================
              LEFT: Interactive 360° Rotating Shoe Stage
              ======================================================== */}
          <div className="video-player-container glass-panel">
            
            <div className="video-viewport">
              
              {/* Interactive Turntable Stage */}
              <div 
                ref={turntableStageRef}
                className="turntable-stage"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
              >
                {/* 360 Shoe Image on Turntable */}
                <div className="shoe-turntable-visual">
                  <img 
                    src={activeState.image} 
                    alt={activeState.name}
                    className="turntable-shoe-img"
                    draggable="false"
                  />
                  <div className="turntable-shadow"></div>
                </div>

                {/* Canvas Overlay for Turntable Scan Ring */}
                <canvas 
                  ref={canvasRef} 
                  width={720} 
                  height={420} 
                  className="kinetic-canvas-overlay"
                />

                {/* 360 Angle Badge */}
                <div className="viewport-overlay-badge">
                  <Compass size={14} className="spin-icon" />
                  <span className="perspective-text font-mono">
                    VIEW ANGLE: <strong>{String(Math.round(rotationAngle)).padStart(3, '0')}°</strong> • {activeState.name}
                  </span>
                </div>

                {/* Telemetry HUD Widget */}
                <div className="telemetry-hud glass-card">
                  <div className="hud-metric">
                    <span className="hud-label">ROTATION</span>
                    <span className="hud-value font-mono">{String(Math.round(rotationAngle)).padStart(3, '0')}° DEG</span>
                  </div>
                  <div className="hud-divider"></div>
                  <div className="hud-metric">
                    <span className="hud-label">TELEMETRY</span>
                    <span className="hud-value font-mono" style={{ color: activeColorway.primaryHex }}>
                      {activeState.metric}
                    </span>
                  </div>
                </div>

                {/* Interactive Hotspot Pins on Shoe */}
                <button 
                  className={`motion-hotspot heel-hotspot ${activeHotspot === 'heel' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(activeHotspot === 'heel' ? null : 'heel');
                    setRotationAngle(220);
                  }}
                  title="Inspect Heel Counter & Nitrogen Cell"
                >
                  <span className="hotspot-ping"></span>
                  <span className="hotspot-center">+</span>
                </button>

                <button 
                  className={`motion-hotspot plate-hotspot ${activeHotspot === 'plate' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(activeHotspot === 'plate' ? null : 'plate');
                    setRotationAngle(135);
                  }}
                  title="Inspect Carbon FlightPlate"
                >
                  <span className="hotspot-ping"></span>
                  <span className="hotspot-center">+</span>
                </button>

                <button 
                  className={`motion-hotspot toe-hotspot ${activeHotspot === 'toe' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(activeHotspot === 'toe' ? null : 'toe');
                    setRotationAngle(45);
                  }}
                  title="Inspect AeroKnit Toe Spring"
                >
                  <span className="hotspot-ping"></span>
                  <span className="hotspot-center">+</span>
                </button>

                {/* Drag to Rotate Instruction Pill */}
                <div className="drag-hint-pill">
                  <RotateCw size={13} className="spin-icon" />
                  <span>Drag left / right to rotate 360°</span>
                </div>

              </div>

              {/* Player Bottom Control Deck */}
              <div className="player-control-deck">
                
                {/* 360° Angle Scrubber Bar */}
                <div className="scrubber-bar-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="1"
                    value={rotationAngle}
                    onChange={(e) => setRotationAngle(parseFloat(e.target.value))}
                    className="timeline-slider"
                    style={{
                      '--fill-percentage': `${(rotationAngle / 360) * 100}%`
                    }}
                  />
                  
                  {/* Preset Angle Markers */}
                  <div className="phase-markers-bar">
                    {[
                      { deg: 45, label: '01 FRONT 3/4' },
                      { deg: 135, label: '02 LATERAL' },
                      { deg: 225, label: '03 REAR HEEL' },
                      { deg: 315, label: '04 OUTSOLE' }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        className={`phase-marker-tick ${Math.abs(rotationAngle - item.deg) < 45 ? 'current' : ''}`}
                        style={{ left: `${(item.deg / 360) * 100}%` }}
                        onClick={() => setRotationAngle(item.deg)}
                      >
                        <span className="marker-dot"></span>
                        <span className="marker-label font-mono">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Controls Row */}
                <div className="controls-row">
                  
                  <div className="controls-left">
                    {/* Auto-Rotation Play / Pause */}
                    <button 
                      className="control-btn play-pause-btn"
                      onClick={() => setIsAutoRotating(!isAutoRotating)}
                      title={isAutoRotating ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
                    >
                      {isAutoRotating ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Step Rotation Buttons */}
                    <button 
                      className="control-btn"
                      onClick={() => setRotationAngle((prev) => (prev - 45 + 360) % 360)}
                      title="Rotate -45°"
                    >
                      <RotateCcw size={16} />
                    </button>
                    <button 
                      className="control-btn"
                      onClick={() => setRotationAngle((prev) => (prev + 45) % 360)}
                      title="Rotate +45°"
                    >
                      <RotateCw size={16} />
                    </button>

                    {/* Angle readout */}
                    <div className="timecode-display font-mono">
                      <span className="time-curr">{String(Math.round(rotationAngle)).padStart(3, '0')}°</span>
                      <span className="time-sep">/</span>
                      <span className="time-total">360°</span>
                    </div>
                  </div>

                  <div className="controls-right">
                    {/* Speed Selector */}
                    <div className="speed-pills">
                      {[0.5, 1, 2].map((spd) => (
                        <button
                          key={spd}
                          className={`speed-pill ${rotationSpeed === spd ? 'active' : ''}`}
                          onClick={() => setRotationSpeed(spd)}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>

                    {/* Expand Mode */}
                    <button 
                      className="control-btn"
                      onClick={() => setIsCinematicExpanded(!isCinematicExpanded)}
                      title="Toggle Expanded Mode"
                    >
                      <Maximize size={18} />
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================================
              RIGHT: Front-Facing Display Panel Synchronously Updating
              ======================================================== */}
          <div className="front-display-panel glass-panel">
            
            {/* Top Sync State Indicator */}
            <div className="sync-status-header">
              <div className="sync-live-pill">
                <span className="sync-pulse-dot"></span>
                <span className="sync-text font-mono">SYNCHRONIZED ANGLE TELEMETRY</span>
              </div>
              <span className="phase-id-badge font-mono">
                {String(Math.round(rotationAngle)).padStart(3, '0')}° PERSPECTIVE
              </span>
            </div>

            {/* Active Headline */}
            <div className="phase-headline-wrap">
              <div className="phase-focus-title font-mono">{activeState.phase}</div>
              <h3 className="callout-main-title">
                {activeState.title}
              </h3>
              <p className="callout-subtitle">
                Current View: <strong>{activeState.name}</strong>
              </p>
            </div>

            {/* Synchronized Front Photography & Exploded Component Preview */}
            <div className="front-visual-card glass-card">
              <div className="front-card-stage">
                <img 
                  src={activeState.image} 
                  alt={activeState.title}
                  className="front-synced-image"
                />
                
                {/* Active Dynamic Callout Hotspot Box */}
                <div className="dynamic-annotation-tag">
                  <div className="annotation-icon-circle" style={{ color: activeColorway.primaryHex }}>
                    {getPhaseIcon(activeState.icon)}
                  </div>
                  <div className="annotation-meta">
                    <span className="annotation-label">TELEMETRY READING</span>
                    <span className="annotation-metric font-mono" style={{ color: activeColorway.primaryHex }}>
                      {activeState.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Narrative Storytelling Block */}
              <div className="front-story-body">
                <p className="front-narrative-text">
                  {activeState.desc}
                </p>
              </div>
            </div>

            {/* Interactive Angle Quick Jump Buttons */}
            <div className="phase-nav-strip">
              {[
                { deg: 45, label: 'Front 3/4 Toe', num: '01' },
                { deg: 135, label: 'Lateral Profile', num: '02' },
                { deg: 225, label: 'Rear Heel Counter', num: '03' },
                { deg: 315, label: 'Traction Outsole', num: '04' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`phase-nav-pill ${Math.abs(rotationAngle - item.deg) < 45 ? 'active' : ''}`}
                  onClick={() => setRotationAngle(item.deg)}
                >
                  <span className="phase-nav-num">{item.num}</span>
                  <span className="phase-nav-name">{item.label}</span>
                  {Math.abs(rotationAngle - item.deg) < 45 && <ChevronRight size={14} className="nav-arrow" />}
                </button>
              ))}
            </div>

            {/* Engineering Blueprint Button */}
            <div className="front-panel-footer">
              <button 
                className="btn-secondary full-width-btn"
                onClick={onOpenSpecsModal}
              >
                <Sliders size={16} />
                <span>View Full Engineering Blueprint</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
