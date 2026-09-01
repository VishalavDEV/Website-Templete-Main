import { useEffect, useRef, useState, useCallback } from 'react';
import config from '../data/site-config.json';

const { frameCount, framePath, frameExtension, zeroPadding } = config.hero;

const pad = (num, size) => String(num).padStart(size, '0');
const getFrameUrl = (index) => `${framePath}${pad(index, zeroPadding)}.${frameExtension}`;

const STAGES = [
  { start: 0, end: 0.16, title: 'VOID', text: 'Before intelligence, there was information.' },
  { start: 0.16, end: 0.33, title: 'DATA', text: 'Information began to move.' },
  { start: 0.33, end: 0.50, title: 'NETWORK', text: 'Connections created complexity.' },
  { start: 0.50, end: 0.66, title: 'BRAIN', text: 'Complexity became intelligence.' },
  { start: 0.66, end: 0.83, title: 'AI', text: 'Intelligence became programmable.' },
  { start: 0.83, end: 1.0, title: 'FUTURE', text: 'And intelligence began shaping civilization.' },
];

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const rafRef = useRef(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const activeStage = STAGES.find(s => scrollProgress >= s.start && scrollProgress < s.end) || STAGES[STAGES.length - 1];
  const stageProgress = activeStage ? (scrollProgress - activeStage.start) / (activeStage.end - activeStage.start) : 0;

  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameIndex];
    if (!canvas || !img) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    let dw, dh, dx, dy;

    if (canvasRatio > imgRatio) {
      dw = rect.width; dh = rect.width / imgRatio;
      dx = 0; dy = (rect.height - dh) / 2;
    } else {
      dw = rect.height * imgRatio; dh = rect.height;
      dx = (rect.width - dw) / 2; dy = 0;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Smooth frame interpolation loop
  useEffect(() => {
    const lerp = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      // Smoothing factor
      const next = current + (target - current) * 0.12;
      currentFrameRef.current = next;
      const roundedNext = Math.min(frameCount, Math.max(1, Math.round(next)));
      
      if (imagesRef.current[roundedNext]) {
        drawFrame(roundedNext);
      }
      rafRef.current = requestAnimationFrame(lerp);
    };
    rafRef.current = requestAnimationFrame(lerp);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [drawFrame]);

  // Load frames with high priority chunking
  useEffect(() => {
    let loaded = 0;
    const total = frameCount;
    
    // Load first 15 frames immediately
    for (let i = 1; i <= Math.min(15, total); i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loaded++;
        imagesRef.current[i] = img;
        setLoadProgress(loaded / total);
        if (i === 1) drawFrame(1);
        if (loaded >= total) setIsLoaded(true);
      };
    }
    // Batch load remaining frames quickly
    for (let i = 16; i <= total; i++) {
      setTimeout(() => {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loaded++;
          imagesRef.current[i] = img;
          setLoadProgress(loaded / total);
          if (loaded >= total) setIsLoaded(true);
        };
      }, Math.floor((i - 16) / 5) * 6);
    }
  }, [drawFrame]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      if (scrollHeight <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
      
      setScrollProgress(progress);
      const target = Math.min(frameCount, Math.max(1, Math.floor(progress * (frameCount - 1)) + 1));
      targetFrameRef.current = target;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const frame = Math.min(frameCount, Math.max(1, Math.round(currentFrameRef.current)));
      if (imagesRef.current[frame]) drawFrame(frame);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  const showFinalCopy = scrollProgress > 0.88;

  return (
    <div ref={containerRef} style={{ height: '850vh', position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', width: '100%',
        overflow: 'hidden', background: 'transparent',
      }}>
        {/* Loading overlay */}
        {!isLoaded && loadProgress < 0.1 && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 30,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-color)',
          }}>
            <p className="text-xs" style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
              INITIALIZING THE FUTURE
            </p>
            <div style={{ width: '180px', height: '1px', background: 'var(--border-color)', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                width: `${loadProgress * 100}%`, height: '100%',
                background: 'var(--accent-cyan)', boxShadow: '0 0 12px var(--accent-cyan-glow)',
                transition: 'width 0.3s ease',
              }} />
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              {Math.round(loadProgress * 100)}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas ref={canvasRef} style={{
          width: '100%', height: '100%', display: 'block',
          opacity: 0.55, filter: 'brightness(0.9) contrast(1.1)',
        }} />

        {/* Gradient overlays */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            linear-gradient(to bottom, rgba(16,14,11,0.2) 0%, transparent 30%, transparent 60%, rgba(16,14,11,1) 100%),
            linear-gradient(to right, rgba(16,14,11,0.3) 0%, transparent 30%, transparent 70%, rgba(16,14,11,0.3) 100%)
          `
        }} />

        {/* Cinematic text overlay */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem', pointerEvents: 'none',
        }}>
          {!showFinalCopy ? (
            <div key={activeStage.title} style={{
              animation: 'fadeIn 0.7s var(--ease-out-expo)',
              maxWidth: '700px',
            }}>
              <p style={{
                fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontWeight: 600,
              }}>{activeStage.title}</p>
              <h1 style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: 300, lineHeight: 1.2, color: 'var(--text-primary)',
              }}>{activeStage.text}</h1>
            </div>
          ) : (
            <div style={{ animation: 'fadeInUp 1s var(--ease-out-expo)', maxWidth: '800px' }}>
              <h1 style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
                fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, var(--text-primary), var(--accent-cyan))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>THE FUTURE IS BEING BUILT NOW.</h1>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)',
                color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '550px', margin: '0 auto',
              }}>A magazine about artificial intelligence and the technologies shaping tomorrow.</p>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        {scrollProgress < 0.05 && (
          <div style={{
            position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            animation: 'float 2.5s ease-in-out infinite', pointerEvents: 'none',
          }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll to explore</p>
            <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)' }} />
          </div>
        )}

        {/* Progress bar at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'var(--border-color)',
        }}>
          <div style={{
            width: `${scrollProgress * 100}%`, height: '100%',
            background: 'var(--accent-cyan)',
            boxShadow: '0 0 10px var(--accent-cyan-glow)',
            transition: 'width 0.1s linear',
          }} />
        </div>
      </div>
    </div>
  );
}
