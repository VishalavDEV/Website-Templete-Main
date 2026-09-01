import React, { useEffect, useRef, useState } from 'react';

/**
 * ParticleText - Full Interactive Particle Typography Component
 * Supports:
 * - particleSize, density, color, highlightColor, scatter, gatherDuration
 * - stagger, pointerRepel, repelRadius, idleDrift, trigger, fontSize, fontWeight, fontFamily, glow
 * - Theme-matched warm editorial colors (#201c18, #d96c4a, #ffb05a)
 */
export function ParticleText({
  text = 'The Stories Behind the Discoveries.',
  particleSize = 2,
  density = 4,
  color = '#201c18',
  highlightColor = '#d96c4a',
  scatter = 160,
  gatherDuration = 1400,
  stagger = 320,
  pointerRepel = 35,
  repelRadius = 100,
  idleDrift = 0.6,
  trigger = 'hover',
  fontSize = 'clamp(2.5rem, 5.5vw, 4.4rem)',
  fontWeight = 700,
  fontFamily = '"Fraunces", Georgia, serif',
  glow = true,
  className = '',
  style = {}
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isTriggered, setIsTriggered] = useState(trigger === 'load' || trigger === 'mount');

  useEffect(() => {
    setIsTriggered(true);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth || 900);

    // Compute font size in px
    let computedFontSize = 54;
    if (typeof fontSize === 'number') {
      computedFontSize = fontSize;
    } else if (typeof fontSize === 'string') {
      const tempEl = document.createElement('div');
      tempEl.style.fontSize = fontSize;
      tempEl.style.position = 'absolute';
      tempEl.style.visibility = 'hidden';
      document.body.appendChild(tempEl);
      computedFontSize = parseFloat(window.getComputedStyle(tempEl).fontSize) || 54;
      document.body.removeChild(tempEl);
    }

    const lineHeight = computedFontSize * 1.25;

    // Word wrap text into lines
    const offscreen = document.createElement('canvas');
    const offCtx = offscreen.getContext('2d');
    offCtx.font = `${fontWeight} ${computedFontSize}px ${fontFamily}`;

    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      const metrics = offCtx.measureText(testLine);
      if (metrics.width > width - 40 && i > 0) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    const totalTextHeight = lines.length * lineHeight;
    let height = (canvas.height = Math.max(totalTextHeight + 40, 120));
    offscreen.width = width;
    offscreen.height = height;

    // Render offscreen text
    offCtx.fillStyle = '#000000';
    offCtx.font = `${fontWeight} ${computedFontSize}px ${fontFamily}`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';

    const startY = (height - totalTextHeight) / 2 + lineHeight / 2;
    lines.forEach((line, index) => {
      offCtx.fillText(line, width / 2, startY + index * lineHeight);
    });

    const imgData = offCtx.getImageData(0, 0, width, height);
    const pixels = imgData.data;

    const particles = [];
    const step = Math.max(2, Math.floor(6 - density));

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = pixels[index + 3];
        if (alpha > 128) {
          const isHighlight = Math.random() > 0.82;
          const angle = Math.random() * Math.PI * 2;
          const scatterDist = Math.random() * scatter;

          particles.push({
            targetX: x,
            targetY: y,
            x: prefersReducedMotion ? x : x + Math.cos(angle) * scatterDist,
            y: prefersReducedMotion ? y : y + Math.sin(angle) * scatterDist,
            vx: 0,
            vy: 0,
            baseColor: isHighlight ? highlightColor : color,
            color: isHighlight ? highlightColor : color,
            size: (Math.random() * 0.8 + 0.8) * particleSize,
            ease: Math.random() * 0.04 + 0.04,
            noiseOffset: Math.random() * 100,
            scatterDelay: (x / width) * stagger
          });
        }
      }
    }

    let mouse = { x: -1000, y: -1000, active: false };
    let animationFrameId;
    let startTime = performance.now();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);
      const elapsed = time - startTime;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (prefersReducedMotion) {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.targetX, p.targetY, p.size, p.size);
          continue;
        }

        // Idle drift
        p.noiseOffset += 0.015;
        const driftX = Math.sin(p.noiseOffset) * idleDrift;
        const driftY = Math.cos(p.noiseOffset) * idleDrift;

        const effectiveTargetX = p.targetX + driftX;
        const effectiveTargetY = p.targetY + driftY;

        // Pointer repulsion
        let repelX = 0;
        let repelY = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < repelRadius && dist > 0) {
            const force = (1 - dist / repelRadius) * pointerRepel;
            repelX = (dx / dist) * force;
            repelY = (dy / dist) * force;
          }
        }

        // Spring towards target
        const dx = effectiveTargetX + repelX - p.x;
        const dy = effectiveTargetY + repelY - p.y;

        p.vx += dx * p.ease;
        p.vy += dy * p.ease;
        p.vx *= 0.85;
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null;
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth || 900;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [
    text,
    particleSize,
    density,
    color,
    highlightColor,
    scatter,
    gatherDuration,
    stagger,
    pointerRepel,
    repelRadius,
    idleDrift,
    fontSize,
    fontWeight,
    fontFamily,
    glow
  ]);

  return (
    <div
      ref={containerRef}
      className={`particle-text-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
    >
      <h1 className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        {text}
      </h1>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          cursor: 'pointer'
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default ParticleText;
