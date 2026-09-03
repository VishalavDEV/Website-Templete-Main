import React, { useEffect, useRef } from 'react';
import '../styles/background.css';
import aiCloudBg from '../assets/ai_cloud_bg.jpg';
import roboticsCyberBg from '../assets/robotics_cyber_bg.jpg';

export default function AnimatedBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const isDark = false;

    // Color definitions for Light Clean Tech Aesthetic
    const primaryRgb = '99, 102, 241';
    const secondaryRgb = '14, 165, 233';
    const accentRgb = '168, 85, 247';
    const cyanRgb = '6, 182, 212';

    // 1. AI Neural Network Nodes
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles = [];

    const colors = [primaryRgb, secondaryRgb, accentRgb, cyanRgb];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // 2. AI Synapse Pulse Signals traveling along lines
    const pulses = [];
    for (let i = 0; i < 12; i++) {
      pulses.push({
        from: Math.floor(Math.random() * particleCount),
        to: Math.floor(Math.random() * particleCount),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 3. Floating AI / Cloud / Robotics Code Streams & Matrix Tech Tokens
    const techWords = [
      'AI', 'CLOUD', 'ROBOTICS', 'NEURAL_NET', 'GPU_CLUSTER',
      'QUANTUM', 'CYBER', 'LLM_CORE', '010101', 'SYNAPSE',
      'DEEP_LEARNING', 'AUTOMATION', 'MODEL_V5', 'DATA_STREAM'
    ];

    const matrixItems = [];
    const matrixCount = Math.min(Math.floor(width / 120), 16);
    for (let i = 0; i < matrixCount; i++) {
      matrixItems.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 0.4 + Math.random() * 0.8,
        text: techWords[Math.floor(Math.random() * techWords.length)],
        opacity: 0.15 + Math.random() * 0.25,
        fontSize: Math.floor(10 + Math.random() * 4),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 4. Holographic HUD Rings Angle
    let hudAngle = 0;

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      hudAngle += 0.005;
      const mouse = mouseRef.current;

      // Draw Interactive Holographic HUD Reticle on Mouse Cursor
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.translate(mouse.x, mouse.y);

        // Outer rotating dashed HUD ring
        ctx.beginPath();
        ctx.arc(0, 0, 45, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${secondaryRgb}, ${isDark ? 0.35 : 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Inner counter-rotating ring
        ctx.beginPath();
        ctx.arc(0, 0, 28, hudAngle * 2, hudAngle * 2 + Math.PI * 1.5);
        ctx.strokeStyle = `rgba(${primaryRgb}, ${isDark ? 0.45 : 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Target Crosshairs
        ctx.beginPath();
        ctx.moveTo(-10, 0); ctx.lineTo(-4, 0);
        ctx.moveTo(4, 0);  ctx.lineTo(10, 0);
        ctx.moveTo(0, -10); ctx.lineTo(0, -4);
        ctx.moveTo(0, 4);  ctx.lineTo(0, 10);
        ctx.strokeStyle = `rgba(${cyanRgb}, ${isDark ? 0.7 : 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();

        // Mouse Radial Spotlight Glow
        const spotGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
        spotGlow.addColorStop(0, `rgba(${primaryRgb}, ${isDark ? 0.16 : 0.1})`);
        spotGlow.addColorStop(0.5, `rgba(${secondaryRgb}, ${isDark ? 0.08 : 0.04})`);
        spotGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw Floating AI / Cloud / Robotics Matrix Text Streams
      ctx.textAlign = 'center';
      for (let i = 0; i < matrixItems.length; i++) {
        const item = matrixItems[i];
        item.y += item.vy;
        if (item.y > height + 20) {
          item.y = -20;
          item.x = Math.random() * width;
          item.text = techWords[Math.floor(Math.random() * techWords.length)];
        }

        ctx.font = `600 ${item.fontSize}px monospace`;
        ctx.fillStyle = `rgba(${item.color}, ${isDark ? item.opacity : item.opacity * 0.8})`;
        ctx.fillText(item.text, item.x, item.y);
      }

      // Draw & Update Neural Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.pulse += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulse) * 0.8;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const force = (160 - dist) / 160;
            p.x -= (dx / dist) * force * 0.7;
            p.y -= (dy / dist) * force * 0.7;
          }
        }

        // Particle Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${isDark ? 0.8 : 0.6})`;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Neural Connecting Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.28 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw AI Neural Synapse Pulses traveling along lines
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.from = Math.floor(Math.random() * particles.length);
          pulse.to = Math.floor(Math.random() * particles.length);
        }

        const pFrom = particles[pulse.from];
        const pTo = particles[pulse.to];
        if (pFrom && pTo) {
          const dx = pTo.x - pFrom.x;
          const dy = pTo.y - pFrom.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const currX = pFrom.x + dx * pulse.progress;
            const currY = pFrom.y + dy * pulse.progress;

            ctx.beginPath();
            ctx.arc(currX, currY, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${pulse.color}, 0.95)`;
            ctx.shadowColor = `rgba(${pulse.color}, 1)`;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className="animated-bg-wrapper">
      {/* Precision Cybernetic Tech Mesh */}
      <div className="bg-grid-mesh" />

      {/* Floating Holographic AI & Robotics Background Art Overlay */}
      <div
        className="bg-tech-image image-ai-cloud"
        style={{ backgroundImage: `url(${aiCloudBg})` }}
      />
      <div
        className="bg-tech-image image-robotics"
        style={{ backgroundImage: `url(${roboticsCyberBg})` }}
      />

      {/* Floating AI & Robotics Tech Icons */}
      <div className="tech-float-icon icon-ai-brain">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
          <path d="M12 6v12M6 12h12M8 8l8 8M16 8l-8 8" />
        </svg>
      </div>

      <div className="tech-float-icon icon-cloud-compute">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.5 19h-11A4.5 4.5 0 0 1 2 14.5c0-2.26 1.67-4.14 3.87-4.44A6 6 0 0 1 17.5 6c3.04 0 5.5 2.46 5.5 5.5 0 .42-.05.83-.14 1.22A4.5 4.5 0 0 1 17.5 19z" />
          <path d="M12 12v5m-3-3l3 3 3-3" />
        </svg>
      </div>

      <div className="tech-float-icon icon-robotics-chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 12h6M12 9v6M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      </div>

      {/* Ambient Glowing Orbs */}
      <div className="bg-orb orb-primary" />
      <div className="bg-orb orb-secondary" />
      <div className="bg-orb orb-accent" />

      {/* Animated Laser Grid Scan Line */}
      <div className="bg-scan-line" />

      {/* Interactive HTML5 Canvas Layer */}
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
}
