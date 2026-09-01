import React, { useState, useEffect, useRef } from 'react';

export default function VideoPlayerModal({ isOpen, onClose, onOpenQuote, addToast }) {
  const [activeChannel, setActiveChannel] = useState('video');
  const [musicActive, setMusicActive] = useState(true);

  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const audioCtxRef = useRef(null);
  const musicTimerRef = useRef(null);
  const animFrameRef = useRef(null);

  const channels = [
    {
      id: 'video',
      label: '🏡 01: Luxury Villa Tour',
      title: 'Malibu Luxury Villa Architectural Drone Tour',
      desc: 'Ultra-HD 4K aerial survey showcasing cantilevered structural engineering and panoramic coastal architecture.',
      videoSrc: './assets/videos/luxury-villa.mp4'
    },
    {
      id: 'commercial',
      label: '🏢 02: Commercial Complex',
      title: 'Metropolitan Commercial High-Rise Complex',
      desc: 'Ultra-HD 4K architectural drone survey of a 12-story commercial complex with double-glazed acoustic glass curtain walls.',
      imageSrc: './assets/images/commercial.jpg'
    },
    {
      id: 'construction',
      label: '🏗️ 03: Construction Site Drone',
      title: 'Tower Crane & High-Rise Steel Superstructure Survey',
      desc: 'Live high-altitude drone inspection of active tower cranes, jump-form concrete core climbing, and structural steel erection.',
      imageSrc: './assets/images/interior.jpg'
    }
  ];

  const currentChannel = channels.find(c => c.id === activeChannel) || channels[0];

  // Ambient chord synthesizer
  const playLuxuryChord = () => {
    if (!musicActive) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
        [220.00, 261.63, 329.63, 392.00, 440.00], // Am9
        [174.61, 261.63, 329.63, 369.99, 523.25], // Fmaj7#11
        [164.81, 246.94, 329.63, 392.00, 493.88]  // Em7
      ];
      const chord = chords[Math.floor(Math.random() * chords.length)];
      const startTime = audioCtxRef.current.currentTime;

      chord.forEach((freq, idx) => {
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        const filter = audioCtxRef.current.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, startTime);

        const delay = idx * 0.18;
        gain.gain.setValueAtTime(0, startTime + delay);
        gain.gain.linearRampToValueAtTime(0.035, startTime + delay + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + delay + 4.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start(startTime + delay);
        osc.stop(startTime + delay + 4.8);
      });
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      if (musicTimerRef.current) clearInterval(musicTimerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (videoRef.current) videoRef.current.pause();
      return;
    }

    if (musicActive) {
      playLuxuryChord();
      musicTimerRef.current = setInterval(playLuxuryChord, 4000);
    }

    if (activeChannel === 'video') {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    } else {
      // Canvas Drone Simulation
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = 960;
        canvas.height = 480;

        const img = new Image();
        img.src = currentChannel.imageSrc;

        let time = 0;
        const render = () => {
          time += 0.008;
          ctx.clearRect(0, 0, 960, 480);

          const scale = 1.08 + Math.sin(time * 0.8) * 0.06;
          const offsetX = Math.sin(time * 0.5) * 40;
          const offsetY = Math.cos(time * 0.4) * 25;
          const drawW = 960 * scale;
          const drawH = 480 * scale;
          const drawX = (960 - drawW) / 2 + offsetX;
          const drawY = (480 - drawH) / 2 + offsetY;

          if (img.complete && img.naturalWidth > 0) {
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
          } else {
            ctx.fillStyle = '#060911';
            ctx.fillRect(0, 0, 960, 480);
          }

          // Vignette
          const grad = ctx.createRadialGradient(480, 240, 150, 480, 240, 520);
          grad.addColorStop(0, 'rgba(0,0,0,0)');
          grad.addColorStop(1, 'rgba(4,7,13,0.65)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 960, 480);

          // Reticle
          ctx.strokeStyle = activeChannel === 'commercial' ? 'rgba(0, 240, 255, 0.4)' : 'rgba(229, 169, 60, 0.5)';
          ctx.lineWidth = 1.5;
          const cx = 480 + Math.sin(time * 1.2) * 15;
          const cy = 240 + Math.cos(time * 1.0) * 10;
          ctx.beginPath();
          ctx.arc(cx, cy, 32, 0, Math.PI * 2);
          ctx.moveTo(cx - 45, cy); ctx.lineTo(cx - 15, cy);
          ctx.moveTo(cx + 15, cy); ctx.lineTo(cx + 45, cy);
          ctx.moveTo(cx, cy - 45); ctx.lineTo(cx, cy - 15);
          ctx.moveTo(cx, cy + 15); ctx.lineTo(cx, cy + 45);
          ctx.stroke();

          // Telemetry Text
          ctx.fillStyle = activeChannel === 'commercial' ? '#00f0ff' : '#e5a93c';
          ctx.font = '11px Space Grotesk, monospace';
          const alt = Math.round(145 + Math.sin(time) * 15);
          const spd = (24.5 + Math.cos(time) * 2.1).toFixed(1);
          ctx.fillText(`ALT: ${alt}m`, 40, 240);
          ctx.fillText(`SPD: ${spd} kts`, 40, 260);
          ctx.fillText(`PITCH: -4.2°`, 840, 240);
          ctx.fillText(`YAW: 128° SE`, 840, 260);

          animFrameRef.current = requestAnimationFrame(render);
        };
        render();
      }
    }

    return () => {
      if (musicTimerRef.current) clearInterval(musicTimerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isOpen, activeChannel, musicActive]);

  if (!isOpen) return null;

  const toggleMusic = () => {
    setMusicActive(prev => {
      const next = !prev;
      addToast(next ? 'Instrumental Ambient Music Enabled' : 'Music Muted');
      return next;
    });
  };

  return (
    <div className="modal-overlay active" style={{ zIndex: 99999 }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div 
        className="modal-dialog video-player-modal-dialog" 
        style={{
          maxWidth: '960px',
          padding: 0,
          overflow: 'hidden',
          background: '#080d18',
          border: '1.5px solid var(--gold-primary)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.95)'
        }}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          style={{ zIndex: 30, top: '14px', right: '14px', background: 'rgba(0,0,0,0.7)', border: '1px solid var(--gold-primary)' }}
        >
          ✕
        </button>

        {/* Video Channel Selector Bar */}
        <div style={{ display: 'flex', gap: '8px', padding: '14px 20px', background: '#060911', borderBottom: '1px solid var(--border-gold)', overflowX: 'auto', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-primary)', textTransform: 'uppercase', marginRight: '6px', whiteSpace: 'nowrap' }}>
            SELECT VIDEO:
          </span>
          {channels.map((c) => (
            <button
              key={c.id}
              className={`filter-btn video-stream-tab ${activeChannel === c.id ? 'active' : ''}`}
              onClick={() => {
                setActiveChannel(c.id);
                addToast(`Loaded Channel: ${c.title}`, 'info');
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Video / Drone Viewport */}
        <div style={{ position: 'relative', width: '100%', height: '480px', background: '#000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {activeChannel === 'video' ? (
            <video
              ref={videoRef}
              src="./assets/videos/luxury-villa.mp4"
              controls
              autoPlay
              playsInline
              loop
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
            />
          ) : (
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}

          <div className="video-hud-telemetry" style={{ pointerEvents: 'none', zIndex: 10 }}>
            <span>📹 4K HDR • 60 FPS • {currentChannel.title.toUpperCase()}</span>
            <span>ALT: 145M | WIND: 8 KTS | GPS: 34.0259° N</span>
          </div>
        </div>

        {/* Controls & Description */}
        <div style={{ padding: '16px 24px', background: '#060911', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', color: 'white', fontSize: '1.05rem', marginBottom: '2px' }}>
              {currentChannel.title}
            </h4>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              {currentChannel.desc}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexShrink: 0, alignItems: 'center' }}>
            <button
              className="btn-outline-gold"
              onClick={toggleMusic}
              style={{
                padding: '8px 16px',
                fontSize: '0.78rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderColor: musicActive ? 'var(--gold-primary)' : '#64748b',
                color: musicActive ? 'var(--gold-primary)' : '#94a3b8'
              }}
            >
              <span>{musicActive ? '🎵' : '🔇'}</span>
              <span>{musicActive ? 'INSTRUMENTAL MUSIC: ON' : 'MUSIC MUTED'}</span>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
            >
              GET PROJECT ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
