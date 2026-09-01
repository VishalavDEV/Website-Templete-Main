import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Activity, ShieldCheck, Zap, X } from 'lucide-react';

export const AIRobotCompanion = ({ activePage = 'home' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [statusMessage, setStatusMessage] = useState('AI COMPANION ONLINE');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Dynamic speech dialog quotes based on current menu page
  const pageQuotes = {
    home: 'Welcome to CYBERNEXUS 2026! I am your AI Research Assistant.',
    about: 'Scanning DeepTech Lab Equipments & Quantum Physics Roster...',
    events: 'Loading Historic Summit Archives & Past Keynotes...',
    speakers: 'Analyzing 40+ Keynote Speakers & AI Neural Faculty...',
    schedule: 'Synchronizing 3-Day Technical Workshops & Demo Timelines...',
    gallery: 'Refracting Holographic Optics & High-Res Summit Photos...',
    venue: 'Establishing Geospatial GPS Coordinates for Bengaluru Hub...',
    contact: 'Connecting 6G Fiber Mesh to Summit Support Desks...',
    register: 'Securing Quantum Cryptographic Registration Passes...'
  };

  useEffect(() => {
    setStatusMessage(pageQuotes[activePage] || 'AI Assistant Active');
    setIsSpeaking(true);
    const timer = setTimeout(() => setIsSpeaking(false), 5000);
    return () => clearTimeout(timer);
  }, [activePage]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      setMousePos({ x: e.clientX, y: e.clientY });
      // Calculate subtle 3D tilt angles (max +- 15 deg)
      setTilt({
        rx: -dy * 12,
        ry: dx * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        style={{
          position: 'fixed',
          bottom: '85px',
          right: '24px',
          zIndex: 95,
          background: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(79, 70, 229, 0.4)',
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '0.82rem',
          fontWeight: '700'
        }}
      >
        <Bot size={18} />
        <span>AI Robot Guide</span>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '24px',
        zIndex: 95,
        pointerEvents: 'auto',
        perspective: '1000px'
      }}
    >
      {/* Laser Scanning Line Overlay from Robot Eyes to Mouse */}
      <svg
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -1
        }}
      >
        <line
          x1={window.innerWidth - 120}
          y1={window.innerHeight - 180}
          x2={mousePos.x}
          y2={mousePos.y}
          stroke="rgba(2, 132, 199, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="8"
          fill="none"
          stroke="rgba(2, 132, 199, 0.6)"
          strokeWidth="1.5"
        />
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="2.5"
          fill="#0284c7"
        />
      </svg>

      {/* Futuristic Floating Robot Card Container */}
      <div
        style={{
          width: '240px',
          background: 'rgba(15, 23, 42, 0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(2, 132, 199, 0.35)',
          borderRadius: '20px',
          padding: '14px',
          boxShadow: '0 15px 40px rgba(2, 132, 199, 0.25), inset 0 0 15px rgba(2, 132, 199, 0.1)',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: 'transform 0.15s ease-out',
          position: 'relative'
        }}
      >
        {/* Minimize Button */}
        <button
          onClick={() => setIsMinimized(true)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#94a3b8',
            borderRadius: '50%',
            width: '22px',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '0.75rem'
          }}
          title="Minimize AI Robot"
        >
          <X size={13} />
        </button>

        {/* Robot Header Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#0284c7',
                boxShadow: '0 0 10px #0284c7'
              }}
            />
            <span
              style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '1px solid #0284c7',
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
              }}
            />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', color: '#38bdf8', textTransform: 'uppercase', fontFamily: '"Space Grotesk", monospace' }}>
            AI ROBOT ASSISTANT
          </span>
        </div>

        {/* High-Resolution Animated Robot Image Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '190px',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 0 20px rgba(2, 132, 199, 0.3)'
          }}
        >
          <img
            src="/ai_robot.jpg"
            alt="Futuristic AI Humanoid Robot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(1.08) contrast(1.05)',
              transform: `scale(1.05) translate(${tilt.ry * 0.5}px, ${-tilt.rx * 0.5}px)`,
              transition: 'transform 0.15s ease-out'
            }}
          />

          {/* Glowing Hologram Laser Scan Beam across image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
              boxShadow: '0 0 12px #38bdf8',
              animation: 'robotScan 2.8s ease-in-out infinite'
            }}
          />

          {/* LED Eye Ring Glow Effect Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '26%',
              left: '42%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(56, 189, 248, 0.5)',
              boxShadow: '0 0 15px #38bdf8',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '26%',
              right: '42%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(56, 189, 248, 0.5)',
              boxShadow: '0 0 15px #38bdf8',
              pointerEvents: 'none'
            }}
          />

          {/* Overlay Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '0.65rem',
              fontWeight: '700',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Zap size={10} color="#38bdf8" />
            <span>4.8 GHz EYE SCAN</span>
          </div>
        </div>

        {/* Dynamic Holographic Dialogue Speech Bubble */}
        <div
          style={{
            marginTop: '10px',
            background: 'rgba(30, 41, 59, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '10px',
            padding: '8px 10px',
            fontSize: '0.74rem',
            color: '#f8fafc',
            lineHeight: 1.4,
            fontFamily: '"Space Grotesk", sans-serif',
            animation: isSpeaking ? 'pulseGlow 1s ease-in-out infinite' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#38bdf8', fontSize: '0.68rem', fontWeight: 800, marginBottom: '2px' }}>
            <Sparkles size={11} /> AI VOICE SYNTH
          </div>
          {statusMessage}
        </div>
      </div>

      <style>{`
        @keyframes robotScan {
          0% { top: 0%; opacity: 0.2; }
          50% { top: 95%; opacity: 0.9; }
          100% { top: 0%; opacity: 0.2; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { border-color: rgba(56, 189, 248, 0.25); }
          50% { border-color: rgba(56, 189, 248, 0.7); box-shadow: 0 0 10px rgba(56, 189, 248, 0.3); }
        }
      `}</style>
    </div>
  );
};

export default AIRobotCompanion;
