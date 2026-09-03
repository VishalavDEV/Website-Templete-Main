import React, { useState, useEffect, useRef } from 'react';

export const Process = () => {
  // Material state
  const [selectedMaterial, setSelectedMaterial] = useState('CLAY');

  // Process timeline state
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);

  const materials = [
    {
      id: 'CONCRETE',
      name: 'CONCRETE',
      essence: 'Permanence. Mass. Brutal Honesty.',
      description: 'Cast in timber formwork, retaining the wood grain and deliberate imperfections of its making. A raw structural mass that anchors silence.',
      origin: 'Limestone Aggregates & Slag',
      finish: 'Timber Board-Formed Rough',
      compressive: '55 MPa Structural Load',
      tactile: 'Porous, Cool, Unyielding',
      textureStyle: {
        backgroundColor: '#2e2b29',
        backgroundImage: `radial-gradient(circle at 40% 40%, rgba(201, 193, 181, 0.25) 0%, transparent 60%),
                          url('./images/hero.jpg')`,
        backgroundBlendMode: 'luminosity, normal',
        filter: 'contrast(1.15) brightness(0.85)',
      },
    },
    {
      id: 'CLAY',
      name: 'CLAY',
      essence: 'Warmth. Imperfection. Memory.',
      description: 'Used to create surfaces that age with the building. Hand-pressed terracotta tiles and sun-baked bricks that absorb coastal heat and release it into the cool night air.',
      origin: 'Riverbed Silt of Thanjavur',
      finish: 'Unglazed Hand-Pressed Matte',
      compressive: '18 MPa Thermal Cladding',
      tactile: 'Warm, Earthy, Velvety Texture',
      textureStyle: {
        backgroundColor: '#522b22',
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(169, 103, 80, 0.4) 0%, transparent 70%),
                          linear-gradient(45deg, rgba(135, 76, 60, 0.3) 0%, rgba(48, 40, 37, 0.8) 100%),
                          url('./images/house_of_silence_interior.jpg')`,
        backgroundBlendMode: 'overlay, multiply, normal',
        filter: 'sepia(0.35) contrast(1.2) brightness(0.9)',
      },
    },
    {
      id: 'WOOD',
      name: 'WOOD',
      essence: 'Grain. Resonance. Living Breath.',
      description: 'Charred cedar treated with Shou Sugi Ban fire preservation and reclaimed coastal teak. A living organic material that contracts, expands, and hums in sympathy with human touch.',
      origin: 'Salvaged Nilgiri Teak & Hinoki',
      finish: 'Deep Charred Shou Sugi Ban & Linseed Oil',
      compressive: 'Flexible Tensile Joinery',
      tactile: 'Deep Fissured Grain, Velvety Charcoal',
      textureStyle: {
        backgroundColor: '#1f1a18',
        backgroundImage: `repeating-linear-gradient(90deg, rgba(48, 40, 37, 0.9) 0px, rgba(48, 40, 37, 0.9) 3px, rgba(82, 43, 34, 0.6) 4px, rgba(30, 26, 24, 0.9) 8px),
                          url('./images/house_of_silence.jpg')`,
        backgroundBlendMode: 'multiply, luminosity',
        filter: 'contrast(1.3) brightness(0.75)',
      },
    },
    {
      id: 'STONE',
      name: 'STONE',
      essence: 'Geological Time. Deep Gravity.',
      description: 'Massive basalt blocks cleaved along natural volcanic rift lines. Providing an unyielding geological datum from which pure architectural volumes emerge.',
      origin: 'Deccan Traps Basalt Formations',
      finish: 'Thermal Split-Face Honed',
      compressive: '120 MPa High-Density Base',
      tactile: 'Cold, Chiseled, Micro-Granular',
      textureStyle: {
        backgroundColor: '#1c1b1a',
        backgroundImage: `radial-gradient(circle at 60% 30%, rgba(207, 199, 188, 0.25) 0%, transparent 50%),
                          url('./images/hero.jpg')`,
        backgroundBlendMode: 'hard-light, normal',
        filter: 'grayscale(0.8) contrast(1.3) brightness(0.8)',
      },
    },
    {
      id: 'GLASS',
      name: 'GLASS',
      essence: 'Transparency. Void. Threshold.',
      description: 'Heavy structural fluted glass that shears coastal daylight into rhythmic vertical louvers, turning tropical rainstorms into painterly watercolor impressions.',
      origin: 'Low-Iron Silica Float Melt',
      finish: 'Fluted Reeded Prism Distortion',
      compressive: '28mm Triple-Laminated Acoustic',
      tactile: 'Smooth Fluted Ridges, Crystalline',
      textureStyle: {
        backgroundColor: '#23282b',
        backgroundImage: `repeating-linear-gradient(90deg, rgba(238, 233, 225, 0.15) 0px, rgba(238, 233, 225, 0.15) 6px, transparent 6px, transparent 18px),
                          url('./images/house_of_silence.jpg')`,
        backgroundBlendMode: 'screen, overlay, luminosity',
        filter: 'contrast(1.2) brightness(0.95)',
      },
    },
    {
      id: 'STEEL',
      name: 'STEEL',
      essence: 'Tension. Blade. Slender Edge.',
      description: 'Hot-rolled unlacquered structural steel that oxidizes with maritime moisture. Extremely thin knife-edge fascias that define crisp shadows against heavy raw concrete.',
      origin: 'Recycled Electric Arc Furnace',
      finish: 'Natural Chemical Gunmetal Patina',
      compressive: '355 MPa High-Yield Tension',
      tactile: 'Cold, Sharp-Edged, Satin Oxide',
      textureStyle: {
        backgroundColor: '#181716',
        backgroundImage: `linear-gradient(120deg, rgba(135, 76, 60, 0.25) 0%, rgba(30, 26, 24, 0.9) 60%),
                          url('./images/hero.jpg')`,
        backgroundBlendMode: 'color-dodge, multiply, normal',
        filter: 'contrast(1.4) brightness(0.7)',
      },
    },
  ];

  // 19 — Process Timeline Stages
  const timelineStages = [
    {
      id: '01',
      title: 'OBSERVE',
      desc: 'Every project begins with understanding its environment. We map solar trajectories, soil geology, acoustic currents, and local material traditions.',
      schematic: 'SKETCH',
    },
    {
      id: '02',
      title: 'IMAGINE',
      desc: 'Synthesizing light, topography, and human ritual into spatial possibilities. We carve empty negative space before deciding where solid matter resides.',
      schematic: 'GRID',
    },
    {
      id: '03',
      title: 'DRAW',
      desc: 'Translating intangible impulses into rigorous geometric blueprints, dimensional matrices, and structural tension calculations.',
      schematic: 'STRUCTURE',
    },
    {
      id: '04',
      title: 'BUILD',
      desc: 'Direct tectonic engagement with timber formwork, stone carving, and raw monolithic casting. Physical craft confronting immutable gravity.',
      schematic: 'VOLUME',
    },
    {
      id: '05',
      title: 'LIVE',
      desc: 'The finished structure is surrendered to time, ocean breezes, shifting sunlight, and the quiet choreography of everyday human life.',
      schematic: 'SPACE',
    },
  ];

  // Scroll listener for timeline progression
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (rect.height + windowHeight * 0.5)));
        const index = Math.min(Math.floor(progress * timelineStages.length), timelineStages.length - 1);
        setActiveStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMat = materials.find((m) => m.id === selectedMaterial) || materials[0];

  return (
    <section className="material-process-section" id="process" aria-label="Material and Process">
      {/* =====================================================================
          PART 17 & 18: MATERIAL IS LANGUAGE
          ===================================================================== */}
      <div className="material-header-bar">
        <span className="section-number" style={{ color: 'var(--color-clay)' }}>05 / 08</span>
        <span className="section-category" style={{ color: 'var(--color-stone)' }}>Tectonics & Methodology</span>
      </div>

      <div className="material-title-wrap">
        <h2 className="material-section-title">
          MATERIAL<br />IS LANGUAGE.
        </h2>
      </div>

      {/* Selectable Material Labels (17) */}
      <nav className="material-nav-pills" aria-label="Select Architectural Material">
        {materials.map((mat) => (
          <button
            key={mat.id}
            className={`material-tab-btn ${selectedMaterial === mat.id ? 'active' : ''}`}
            onClick={() => setSelectedMaterial(mat.id)}
            aria-pressed={selectedMaterial === mat.id}
          >
            {mat.name}
          </button>
        ))}
      </nav>

      {/* Large Interactive Material Surface Canvas (18) */}
      <div className="material-hero-surface">
        <div 
          className="material-macro-canvas"
          style={currentMat.textureStyle}
          aria-hidden="true"
        />
        <div className="material-lighting-overlay" aria-hidden="true" />

        <div className="material-surface-content">
          <div>
            <h3 className="mat-title">{currentMat.name}</h3>
            <p className="mat-essence">{currentMat.essence}</p>
            <p className="mat-description">{currentMat.description}</p>
          </div>

          <div className="mat-metadata-card">
            <div className="mat-meta-item">
              <span className="mat-meta-label">Geological Origin / Spec</span>
              <span className="mat-meta-value">{currentMat.origin}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">Surface Tectonics</span>
              <span className="mat-meta-value">{currentMat.finish}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">Structural Metric</span>
              <span className="mat-meta-value">{currentMat.compressive}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">Tactile Sensation</span>
              <span className="mat-meta-value">{currentMat.tactile}</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          PART 19 & 20: FROM IDEA TO SPACE (Timeline & Drawing Animation)
          ===================================================================== */}
      <div ref={timelineRef} className="process-methodology-area" style={{ marginTop: 'clamp(6rem, 12vh, 10rem)' }}>
        <div className="process-headline-wrap" style={{ marginBottom: '3rem' }}>
          <span className="index-supertitle" style={{ color: 'var(--color-clay)' }}>METHODOLOGY</span>
          <h2 className="material-section-title" style={{ marginTop: '0.5rem' }}>
            FROM<br />IDEA<br />TO<br />SPACE.
          </h2>
        </div>

        {/* 20 — Architectural Technical Drawing Animation */}
        <div className="drawing-schematic-wrapper">
          <div className="schematic-header">
            <div className="schematic-breadcrumbs">
              {['SKETCH', 'GRID', 'STRUCTURE', 'VOLUME', 'SPACE'].map((step, idx) => (
                <span 
                  key={step} 
                  className={`schematic-crumb ${activeStep === idx ? 'active' : ''}`}
                >
                  {step} {idx < 4 && '→'}
                </span>
              ))}
            </div>
            <span className="schematic-indicator">DRAWING REF: SEC-05.{activeStep + 1}</span>
          </div>

          <div className="schematic-canvas-box">
            <svg 
              className="schematic-svg" 
              viewBox="0 0 800 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Architectural Technical Schematic Drawing Animation"
            >
              {/* Background blueprint grid lines */}
              <defs>
                <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(248, 245, 239, 0.08)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#archGrid)" />

              {/* Step 0: SKETCH (Gestural lines) */}
              <g className={`schematic-layer layer-sketch ${activeStep >= 0 ? 'visible' : ''}`}>
                <path d="M 120 280 Q 240 180 400 220 T 680 180" stroke="var(--color-stone)" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M 180 310 C 260 270 540 330 620 270" stroke="rgba(201, 193, 181, 0.6)" strokeWidth="1" />
                <text x="130" y="270" fill="var(--color-stone)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">DATUM LINE ±0.00</text>
              </g>

              {/* Step 1: GRID (Precision axes & dimensions) */}
              <g className={`schematic-layer layer-grid ${activeStep >= 1 ? 'visible' : ''}`}>
                <line x1="200" y1="80" x2="200" y2="340" stroke="var(--color-clay)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="400" y1="80" x2="400" y2="340" stroke="var(--color-clay)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="600" y1="80" x2="600" y2="340" stroke="var(--color-clay)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="120" y1="200" x2="680" y2="200" stroke="var(--color-clay)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="200" cy="200" r="4" fill="var(--color-clay)" />
                <circle cx="400" cy="200" r="4" fill="var(--color-clay)" />
                <circle cx="600" cy="200" r="4" fill="var(--color-clay)" />
                <text x="190" y="70" fill="var(--color-clay)" fontSize="11" fontFamily="JetBrains Mono">GRID-A</text>
                <text x="390" y="70" fill="var(--color-clay)" fontSize="11" fontFamily="JetBrains Mono">GRID-B</text>
                <text x="590" y="70" fill="var(--color-clay)" fontSize="11" fontFamily="JetBrains Mono">GRID-C</text>
              </g>

              {/* Step 2: STRUCTURE (Columns & cantilevers) */}
              <g className={`schematic-layer layer-structure ${activeStep >= 2 ? 'visible' : ''}`}>
                <rect x="195" y="140" width="10" height="160" fill="var(--color-ivory)" stroke="var(--color-rust)" />
                <rect x="395" y="140" width="10" height="160" fill="var(--color-ivory)" stroke="var(--color-rust)" />
                <rect x="595" y="140" width="10" height="160" fill="var(--color-ivory)" stroke="var(--color-rust)" />
                <line x1="150" y1="140" x2="650" y2="140" stroke="var(--color-rust)" strokeWidth="3" />
                <text x="415" y="130" fill="var(--color-rust)" fontSize="10" fontFamily="JetBrains Mono">TENSION SLAB SPAN 7.8M</text>
              </g>

              {/* Step 3: VOLUME (Massing extrusion) */}
              <g className={`schematic-layer layer-volume ${activeStep >= 3 ? 'visible' : ''}`}>
                <polygon points="170,140 260,80 560,80 470,140" fill="rgba(169, 103, 80, 0.25)" stroke="var(--color-ivory)" strokeWidth="1.5" />
                <polygon points="470,140 560,80 560,240 470,300" fill="rgba(48, 40, 37, 0.5)" stroke="var(--color-ivory)" strokeWidth="1.5" />
                <polygon points="170,140 470,140 470,300 170,300" fill="rgba(201, 193, 181, 0.18)" stroke="var(--color-ivory)" strokeWidth="2" />
              </g>

              {/* Step 4: SPACE (Light rays and void) */}
              <g className={`schematic-layer layer-space ${activeStep >= 4 ? 'visible' : ''}`}>
                <polygon points="260,80 340,140 310,260 210,220" fill="rgba(248, 245, 239, 0.25)" />
                <line x1="260" y1="80" x2="310" y2="260" stroke="var(--color-ivory)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="230" y="200" fill="var(--color-ivory)" fontSize="13" fontFamily="Syne" fontWeight="bold">LIGHT VOID</text>
                <circle cx="310" cy="260" r="3" fill="var(--color-ivory)" />
              </g>
            </svg>
          </div>
        </div>

        {/* 19 — Horizontal Timeline Stages */}
        <div className="horizontal-process-timeline">
          {timelineStages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`timeline-stage-card ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setActiveStep(idx);
              }}
            >
              <div className="stage-top-meta">
                <span className="stage-number">{stage.id}</span>
                <span className="stage-schematic-tag">{stage.schematic}</span>
              </div>
              <h3 className="stage-title">{stage.title}</h3>
              <p className="stage-desc">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
