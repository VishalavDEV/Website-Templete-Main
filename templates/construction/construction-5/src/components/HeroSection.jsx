import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';

export default function HeroSection({ isDarkMode, toggleTheme }) {
  const canvasRef = useRef(null);
  const turbulenceRef = useRef(null);
  const displacementRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth * 0.62);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth * 0.62;
      height = canvas.height = canvas.offsetHeight || 300;
    };
    window.addEventListener('resize', handleResize);

    let ripples = [];
    let time = 0;
    let currentDispScale = 14;
    let targetDispScale = 14;

    const handleMouseMove = (e) => {
      targetDispScale = 22;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        ripples.push({
          x: x,
          y: y,
          r: 2,
          maxR: Math.random() * 45 + 25,
          alpha: 0.6,
          speed: Math.random() * 1.1 + 0.7
        });
      }
    };

    const handleMouseLeave = () => {
      targetDispScale = 14;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Specular sparkles in water basin
    const sparkles = Array.from({ length: 24 }, () => ({
      normX: Math.random() * 0.8 + 0.1,
      normY: Math.random() * 0.8 + 0.1,
      size: Math.random() * 2.0 + 1,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1
    }));

    // Flowing water stream filaments
    const flowStreams = Array.from({ length: 42 }, () => ({
      normX: Math.random() * 0.75 + 0.12,
      normY: Math.random(),
      length: Math.random() * 24 + 18,
      speed: Math.random() * 0.0035 + 0.002,
      curve: (Math.random() - 0.5) * 0.08,
      width: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.25
    }));

    const waveLayers = [
      { yRatio: 0.15, amp: 2.8, freq: 0.014, speed: 1.2, color: 'rgba(200, 138, 88, 0.30)', width: 1.4 },
      { yRatio: 0.32, amp: 3.8, freq: 0.011, speed: 0.9, color: 'rgba(240, 185, 135, 0.25)', width: 1.6 },
      { yRatio: 0.52, amp: 5.2, freq: 0.009, speed: 1.4, color: 'rgba(200, 138, 88, 0.35)', width: 1.8 },
      { yRatio: 0.72, amp: 6.8, freq: 0.007, speed: 1.0, color: 'rgba(255, 215, 175, 0.28)', width: 2.0 },
      { yRatio: 0.88, amp: 8.2, freq: 0.006, speed: 1.5, color: 'rgba(200, 138, 88, 0.40)', width: 2.2 }
    ];

    const animate = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // SVG displacement filter modulation
      if (turbulenceRef.current) {
        const baseFreqX = 0.012 + Math.sin(time * 0.9) * 0.003;
        const baseFreqY = 0.038 + Math.cos(time * 0.7) * 0.007;
        turbulenceRef.current.setAttribute('baseFrequency', `${baseFreqX} ${baseFreqY}`);
      }

      if (displacementRef.current) {
        currentDispScale += (targetDispScale - currentDispScale) * 0.05;
        displacementRef.current.setAttribute('scale', currentDispScale.toFixed(1));
      }

      // 1. Flowing streams
      flowStreams.forEach((stream) => {
        stream.normY += stream.speed;
        if (stream.normY > 1.0) {
          stream.normY = 0;
          stream.normX = Math.random() * 0.75 + 0.12;
        }

        const y = stream.normY * height;
        const normalizedY = stream.normY;
        const startXBound = (0.09 - 0.09 * normalizedY) * width;
        const endXBound = (0.91 + 0.09 * normalizedY) * width;
        const x = startXBound + stream.normX * (endXBound - startXBound);

        const streamLength = stream.length * (0.6 + normalizedY * 0.8);
        const streamWidth = stream.width * (0.6 + normalizedY * 1.2);

        const grad = ctx.createLinearGradient(x, y - streamLength, x, y);
        grad.addColorStop(0, 'rgba(200, 138, 88, 0)');
        grad.addColorStop(0.7, `rgba(245, 195, 145, ${stream.alpha * (0.4 + normalizedY * 0.6)})`);
        grad.addColorStop(1, `rgba(255, 230, 200, ${stream.alpha * (0.6 + normalizedY * 0.4)})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, y - streamLength);
        ctx.quadraticCurveTo(
          x + Math.sin(time * 2 + y * 0.02) * 6,
          y - streamLength * 0.5,
          x + Math.cos(time * 1.5 + y * 0.01) * 3,
          y
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = streamWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      });

      // 2. Continuous Layered Water Waves
      waveLayers.forEach((layer) => {
        const baseY = height * layer.yRatio;
        const normalizedY = layer.yRatio;
        const startX = (0.09 - 0.09 * normalizedY) * width;
        const endX = (0.91 + 0.09 * normalizedY) * width;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = layer.width;

        for (let x = startX; x <= endX; x += 5) {
          const wave1 = Math.sin(x * layer.freq + time * layer.speed) * layer.amp;
          const wave2 = Math.cos(x * layer.freq * 1.6 - time * 0.8) * (layer.amp * 0.35);
          const yPos = baseY + wave1 + wave2;

          if (x === startX) {
            ctx.moveTo(x, yPos);
          } else {
            ctx.lineTo(x, yPos);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // 3. Shimmering Water Sparkles
      sparkles.forEach((sp) => {
        const y = sp.normY * height;
        const normalizedY = sp.normY;
        const minX = (0.09 - 0.09 * normalizedY) * width;
        const maxX = (0.91 + 0.09 * normalizedY) * width;
        const x = minX + sp.normX * (maxX - minX);

        const sparkleAlpha = (Math.sin(time * sp.speed + sp.phase) + 1) / 2;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y + Math.sin(time * 2 + x * 0.01) * 2.5, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 200, ${sparkleAlpha * 0.65})`;
        ctx.shadowColor = 'rgba(255, 200, 140, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // 4. Front Cascade Overflow Lip
      const lipY = height * 0.98;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, lipY);
      ctx.lineTo(width, lipY);
      ctx.strokeStyle = 'rgba(255, 220, 180, 0.45)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(200, 138, 88, 0.8)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // 5. Expanding Mouse Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.r += rip.speed;
        rip.alpha -= 0.008;

        if (rip.alpha <= 0 || rip.r >= rip.maxR) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(rip.x, rip.y, rip.r, rip.r * 0.32, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(240, 185, 135, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(rip.x, rip.y, rip.r * 0.65, rip.r * 0.21, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* SVG Liquid Water Wave & Optical Refraction Filter */}
      <svg className="water-svg-filter" aria-hidden="true">
        <filter id="liquidWaterFilter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            ref={turbulenceRef}
            id="waterTurbulence"
            type="fractalNoise"
            baseFrequency="0.012 0.04"
            numOctaves="3"
            result="noise"
            seed="5"
          />
          <feDisplacementMap
            ref={displacementRef}
            in="SourceGraphic"
            in2="noise"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Hero Image */}
      <div className="hero-image-wrapper">
        <img
          src="./assets/images/hero-villa.jpg"
          alt="New House Luxury Villa"
          className="hero-img"
          id="heroImg"
        />

        {/* Authentic Liquid Water Wave Flow Layer */}
        <div className="pool-liquid-layer" id="poolLiquidLayer">
          <img
            src="./assets/images/hero-villa.jpg"
            alt="Liquid Water Reflection"
            className="liquid-water-img"
          />
          <div className="water-caustic-stream"></div>
          <div className="water-surface-flow"></div>
        </div>

        <div className="hero-vignette"></div>
      </div>

      {/* Interactive Water Ripple Canvas over Reflection Pool */}
      <canvas ref={canvasRef} id="reflectionCanvas" className="reflection-canvas"></canvas>

      {/* Top Minimalist Brand Header */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Bottom Signature Text Overlay */}
      <div className="hero-bottom-overlay">
        <div className="container-fluid">
          <div className="company-developer-block">
            <div className="accent-bar-wrap">
              <span className="copper-vertical-line"></span>
              <div className="company-dev-text">
                <h2 className="company-dev-title">Company developer</h2>
                <span className="company-dev-sub">Web Site Concept</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
