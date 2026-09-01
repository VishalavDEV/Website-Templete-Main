import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [assemblyProgress, setAssemblyProgress] = useState(0); // 0 = Chaos, 1 = Polished Creative Identity
  const [isHovered, setIsHovered] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  
  // Magnetic physics coordinates
  const canvasRef = useRef(null);
  const [magneticOffsets, setMagneticOffsets] = useState({});
  const [isMobile, setIsMobile] = useState(true);

  // Check device capabilities
  useEffect(() => {
    const checkDevice = () => {
      const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
      setIsMobile(!isDesktop);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Auto-assemble slightly as scroll increases
  useEffect(() => {
    const handleScroll = () => {
      const scrollRatio = Math.min(window.scrollY / 400, 1);
      if (!isHovered) {
        setAssemblyProgress(scrollRatio);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  // Scattered elements properties
  const elements = [
    {
      id: 1,
      type: 'text',
      label: 'V',
      scattered: { top: '15%', left: '10%', rotate: '-25deg', scale: 1.4, opacity: 0.3 },
      assembled: { top: '35%', left: '20%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--text-primary)',
      font: 'var(--font-headings)'
    },
    {
      id: 2,
      type: 'text',
      label: 'A',
      scattered: { top: '65%', left: '70%', rotate: '40deg', scale: 0.9, opacity: 0.4 },
      assembled: { top: '35%', left: '32%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--text-primary)',
      font: 'var(--font-headings)'
    },
    {
      id: 3,
      type: 'text',
      label: 'N',
      scattered: { top: '80%', left: '15%', rotate: '-15deg', scale: 1.1, opacity: 0.2 },
      assembled: { top: '35%', left: '44%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--text-primary)',
      font: 'var(--font-headings)'
    },
    {
      id: 4,
      type: 'text',
      label: 'T',
      scattered: { top: '12%', left: '80%', rotate: '35deg', scale: 1.3, opacity: 0.5 },
      assembled: { top: '35%', left: '56%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--text-primary)',
      font: 'var(--font-headings)'
    },
    {
      id: 5,
      type: 'text',
      label: 'A',
      scattered: { top: '40%', left: '55%', rotate: '-45deg', scale: 1.5, opacity: 0.3 },
      assembled: { top: '35%', left: '68%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--text-primary)',
      font: 'var(--font-headings)'
    },
    {
      id: 6,
      type: 'text',
      label: '.',
      scattered: { top: '8%', left: '45%', rotate: '90deg', scale: 2, opacity: 0.6 },
      assembled: { top: '35%', left: '78%', rotate: '0deg', scale: 1.8, opacity: 1 },
      color: 'var(--accent-color)',
      font: 'var(--font-headings)'
    },
    {
      id: 7,
      type: 'swatch',
      label: '#FF5A1F',
      scattered: { top: '55%', left: '35%', rotate: '15deg', scale: 0.9, opacity: 0.4 },
      assembled: { top: '65%', left: '20%', rotate: '0deg', scale: 1, opacity: 1 },
      bg: 'var(--accent-color)',
      color: '#FFF'
    },
    {
      id: 8,
      type: 'swatch',
      label: '#111111',
      scattered: { top: '22%', left: '30%', rotate: '-10deg', scale: 0.85, opacity: 0.3 },
      assembled: { top: '65%', left: '40%', rotate: '0deg', scale: 1, opacity: 1 },
      bg: 'var(--text-primary)',
      color: '#FFF'
    },
    {
      id: 9,
      type: 'swatch',
      label: '#F5F3EF',
      scattered: { top: '75%', left: '45%', rotate: '20deg', scale: 0.9, opacity: 0.5 },
      assembled: { top: '65%', left: '60%', rotate: '0deg', scale: 1, opacity: 1 },
      bg: '#E5E2DD',
      color: 'var(--text-primary)'
    },
    {
      id: 10,
      type: 'shape',
      shape: 'circle',
      scattered: { top: '48%', left: '8%', rotate: '0deg', scale: 1, opacity: 0.2 },
      assembled: { top: '15%', left: '20%', rotate: '0deg', scale: 1, opacity: 0.6 },
      style: { width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--text-primary)' }
    },
    {
      id: 11,
      type: 'shape',
      shape: 'plus',
      scattered: { top: '28%', left: '90%', rotate: '45deg', scale: 1.2, opacity: 0.6 },
      assembled: { top: '16%', left: '78%', rotate: '0deg', scale: 1, opacity: 0.8 },
      style: { width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--accent-color)', fontSize: '24px' }
    },
    {
      id: 12,
      type: 'shape',
      shape: 'diagonal-line',
      scattered: { top: '85%', left: '85%', rotate: '-30deg', scale: 1.5, opacity: 0.15 },
      assembled: { top: '50%', left: '50%', rotate: '0deg', scale: 1, opacity: 0.1 },
      style: { width: '100%', height: '1px', backgroundColor: 'var(--text-primary)' }
    },
    {
      id: 13,
      type: 'ui',
      label: 'button.svg',
      scattered: { top: '60%', left: '50%', rotate: '-8deg', scale: 0.9, opacity: 0.4 },
      assembled: { top: '12%', left: '44%', rotate: '0deg', scale: 1, opacity: 0.9 },
      style: { padding: '6px 16px', border: '1px solid var(--border-dark)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }
    },
    {
      id: 14,
      type: 'ui',
      label: 'Studio Status: ACTIVE',
      scattered: { top: '35%', left: '22%', rotate: '12deg', scale: 0.8, opacity: 0.3 },
      assembled: { top: '78%', left: '20%', rotate: '0deg', scale: 1, opacity: 0.7 },
      style: { fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }
    },
    {
      id: 15,
      type: 'ui',
      label: 'Wireframe Box',
      scattered: { top: '42%', left: '72%', rotate: '-18deg', scale: 1.1, opacity: 0.2 },
      assembled: { top: '10%', left: '15%', rotate: '0deg', scale: 1, opacity: 0.3 },
      style: { width: '220px', height: '140px', border: '1px dashed var(--text-primary)', backgroundColor: 'transparent' }
    }
  ];

  // Mouse move handler for calculating magnetic physics offsets
  const handleMouseMove = (e) => {
    if (isMobile || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;
    
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;

    const newOffsets = {};

    elements.forEach((el) => {
      // Interpolate center positions
      const progress = assemblyProgress;
      const topScat = parseFloat(el.scattered.top);
      const topAssem = parseFloat(el.assembled.top);
      const leftScat = parseFloat(el.scattered.left);
      const leftAssem = parseFloat(el.assembled.left);

      const targetTopPercent = topScat + (topAssem - topScat) * progress;
      const targetLeftPercent = leftScat + (leftAssem - leftScat) * progress;

      // Translate percent to pixel coordinate centers
      const elX = (targetLeftPercent / 100) * canvasWidth;
      const elY = (targetTopPercent / 100) * canvasHeight;

      // Calculate distance
      const dx = cursorX - elX;
      const dy = cursorY - elY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const attractThreshold = 160;
      const repelThreshold = 40;

      let ox = 0;
      let oy = 0;

      if (dist < repelThreshold) {
        // Repel away (push away from mouse cursor)
        const angle = Math.atan2(dy, dx);
        const force = (repelThreshold - dist) / repelThreshold;
        ox = -Math.cos(angle) * force * 35; // push away up to 35px
        oy = -Math.sin(angle) * force * 35;
      } else if (dist < attractThreshold) {
        // Attract toward (pull toward mouse cursor)
        const angle = Math.atan2(dy, dx);
        const force = (attractThreshold - dist) / (attractThreshold - repelThreshold);
        ox = Math.cos(angle) * force * 20; // pull toward up to 20px
        oy = Math.sin(angle) * force * 20;
      }

      newOffsets[el.id] = { x: ox, y: oy };
    });

    setMagneticOffsets(newOffsets);
  };

  const handleMouseLeave = () => {
    setMagneticOffsets({});
    setIsHovered(false);
    setAssemblyProgress(0);
  };

  const getStyle = (el) => {
    const progress = assemblyProgress;
    
    // Interpolate positions
    const topScat = parseFloat(el.scattered.top);
    const topAssem = parseFloat(el.assembled.top);
    const leftScat = parseFloat(el.scattered.left);
    const leftAssem = parseFloat(el.assembled.left);

    const top = topScat + (topAssem - topScat) * progress;
    const left = leftScat + (leftAssem - leftScat) * progress;

    // Interpolate rotations
    const rotScat = parseInt(el.scattered.rotate);
    const rotAssem = parseInt(el.assembled.rotate);
    const rotate = rotScat + (rotAssem - rotScat) * progress;

    // Interpolate scale & opacity
    const scale = el.scattered.scale + (el.assembled.scale - el.scattered.scale) * progress;
    const opacity = el.scattered.opacity + (el.assembled.opacity - el.scattered.opacity) * progress;

    // Magnetic offset coordinates (only apply on desktop)
    const magOffset = magneticOffsets[el.id] || { x: 0, y: 0 };

    return {
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      // Combine base coordinate translation + magnetic offset translation
      transform: `translate3d(calc(-50% + ${magOffset.x}px), calc(-50% + ${magOffset.y}px), 0) rotate(${rotate}deg) scale(${scale})`,
      opacity: opacity,
      transition: isHovered ? 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease' : 'none',
      zIndex: activeElement === el.id ? 10 : 2,
      pointerEvents: 'auto',
      cursor: 'pointer'
    };
  };

  const handleManualSlider = (e) => {
    setAssemblyProgress(parseFloat(e.target.value));
  };

  const triggerAutoAssemble = () => {
    setIsHovered(true);
    let start = assemblyProgress;
    const target = assemblyProgress > 0.5 ? 0 : 1;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setAssemblyProgress(start + (target - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsHovered(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              textAlign: 'left'
            }}
          >
            <div>
              <div 
                className="text-meta"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.8rem'
                }}
              >
                <Sparkles size={14} />
                <span>INDEPENDENT CREATIVE STUDIO</span>
              </div>
              
              <h1 
                className="text-huge" 
                style={{ 
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem' 
                }}
              >
                We build <br />
                brands people <br />
                <span style={{ color: 'var(--accent-color)' }}>remember.</span>
              </h1>

              <p 
                style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: '1.6', 
                  maxWidth: '520px',
                  color: 'var(--text-secondary)'
                }}
              >
                We partner with ambitious brands to create identities, digital experiences, and ideas that move people and businesses forward.
              </p>
            </div>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              <a href="#contact" className="btn-primary">
                <span>Start a project</span>
                <ArrowRight size={16} />
              </a>
              
              <a href="#work" className="btn-secondary">
                Explore our work
              </a>
            </div>
          </div>

          {/* Hero Right Visual: Magnetic Creative Canvas */}
          <div 
            ref={canvasRef}
            data-cursor="explore"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              backgroundColor: 'rgba(17, 17, 17, 0.02)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setIsHovered(true);
              setAssemblyProgress(1);
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Inner Grid Lines mapping the composition boundary */}
            <div 
              style={{
                position: 'absolute',
                top: '10%',
                bottom: '10%',
                left: '10%',
                right: '10%',
                border: '1px solid rgba(17,17,17,0.03)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                right: '10%',
                height: '1px',
                backgroundColor: 'rgba(17,17,17,0.03)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '10%',
                bottom: '10%',
                width: '1px',
                backgroundColor: 'rgba(17,17,17,0.03)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Interactive Canvas Guide Text */}
            <div 
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                zIndex: 5,
                pointerEvents: 'none'
              }}
            >
              <div 
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.65rem', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase', 
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Interactive Concept Visual</span>
              </div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-headings)', 
                  fontSize: '0.9rem', 
                  fontWeight: 800, 
                  color: 'var(--text-primary)',
                  marginTop: '0.2rem'
                }}
              >
                {assemblyProgress < 0.25 ? 'Chaos' : assemblyProgress < 0.75 ? 'Creativity' : 'Identity'}
              </div>
            </div>

            {/* Instant Assemble trigger for mobile */}
            <button
              onClick={triggerAutoAssemble}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 5,
                transition: 'var(--transition-fast)'
              }}
              title="Toggle Assembly"
            >
              <RefreshCw size={12} style={{ color: 'var(--text-primary)' }} />
            </button>

            {/* Render scattered elements with optional mobile float animations */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {elements.map((el) => {
                const elementStyle = getStyle(el);
                
                // Add unique mobile float delays
                const animationClass = isMobile ? `float-anim-${el.id % 4}` : '';

                if (el.type === 'text') {
                  return (
                    <div 
                      key={el.id}
                      className={animationClass}
                      style={{
                        ...elementStyle,
                        fontFamily: el.font,
                        fontWeight: 800,
                        color: el.color,
                        userSelect: 'none'
                      }}
                      onMouseEnter={() => setActiveElement(el.id)}
                      onMouseLeave={() => setActiveElement(null)}
                    >
                      {el.label}
                    </div>
                  );
                }

                if (el.type === 'swatch') {
                  return (
                    <div
                      key={el.id}
                      className={animationClass}
                      style={{
                        ...elementStyle,
                        backgroundColor: el.bg,
                        color: el.color,
                        width: '75px',
                        height: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '4px 6px',
                        fontSize: '0.55rem',
                        fontWeight: 600,
                        fontFamily: 'monospace',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                        userSelect: 'none'
                      }}
                      onMouseEnter={() => setActiveElement(el.id)}
                      onMouseLeave={() => setActiveElement(null)}
                    >
                      <span style={{ opacity: 0.75 }}>{el.label}</span>
                    </div>
                  );
                }

                if (el.type === 'shape') {
                  return (
                    <div
                      key={el.id}
                      className={animationClass}
                      style={{
                        ...elementStyle,
                        ...el.style,
                        pointerEvents: 'auto'
                      }}
                      onMouseEnter={() => setActiveElement(el.id)}
                      onMouseLeave={() => setActiveElement(null)}
                    >
                      {el.shape === 'plus' ? '+' : null}
                    </div>
                  );
                }

                if (el.type === 'ui') {
                  return (
                    <div
                      key={el.id}
                      className={animationClass}
                      style={{
                        ...elementStyle,
                        ...el.style,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                        userSelect: 'none',
                        pointerEvents: 'auto'
                      }}
                      onMouseEnter={() => setActiveElement(el.id)}
                      onMouseLeave={() => setActiveElement(null)}
                    >
                      {el.label}
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Slider control container */}
            <div 
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 1rem',
                borderRadius: '30px',
                border: '1px solid var(--border-color)',
                zIndex: 5
              }}
              onMouseEnter={(e) => e.stopPropagation()} 
            >
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chaos</span>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={assemblyProgress} 
                onChange={handleManualSlider}
                style={{
                  flex: 1,
                  accentColor: 'var(--accent-color)',
                  height: '3px',
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Creativity</span>
            </div>

          </div>

        </div>
      </div>

      {/* Floats styling for mobile fallback */}
      <style>{`
        @keyframes float-0 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-6px) rotate(1deg); }
          100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
        }
        @keyframes float-1 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-10px) rotate(-1.5deg); }
          100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
        }
        @keyframes float-2 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-8px) rotate(2deg); }
          100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
        }
        @keyframes float-3 {
          0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-5px) rotate(-1deg); }
          100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
        }
        .float-anim-0 { animation: float-0 6s ease-in-out infinite; }
        .float-anim-1 { animation: float-1 8s ease-in-out infinite; }
        .float-anim-2 { animation: float-2 7s ease-in-out infinite; }
        .float-anim-3 { animation: float-3 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
