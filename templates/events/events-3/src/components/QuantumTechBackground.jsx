import React, { useRef, useEffect } from 'react';

export default function QuantumTechBackground({ mode = 'unified' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking with smooth damping
    let mouse = {
      x: width * 0.75,
      y: height * 0.4,
      targetX: width * 0.75,
      targetY: height * 0.4
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 1. NEURAL PROCESSOR MESH INITIALIZATION ---
    const neuralNodes = [];
    const nodeCount = 55;
    for (let i = 0; i < nodeCount; i++) {
      neuralNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#00f0ff' : '#a855f7',
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // --- 2. QUANTUM QUBIT RINGS & ENTANGLEMENT BEAMS ---
    const qubits = [];
    const qubitCount = 12;
    for (let i = 0; i < qubitCount; i++) {
      qubits.push({
        angle: (i / qubitCount) * Math.PI * 2,
        radius: 120 + (i % 3) * 70,
        speed: 0.005 * (i % 2 === 0 ? 1 : -1),
        stateVector: Math.random() > 0.5 ? 1 : 0,
        phase: Math.random() * Math.PI * 2
      });
    }

    // --- 3. SPATIAL COMPUTING GRID & ANCHORS ---
    let spatialGridOffset = 0;
    const spatialAnchors = [
      { x: 0.12, y: 0.22, label: 'QPU CORE // 128 QUBITS', val: '99.98% COHERENCE' },
      { x: 0.82, y: 0.18, label: 'NEURAL TENSOR // 4096 TLOPS', val: '0.4ms LATENCY' },
      { x: 0.15, y: 0.78, label: 'SPATIAL RETICLE // 120Hz AR', val: '6DoF TRACKING' },
      { x: 0.85, y: 0.82, label: 'PEPPER OS v4.2 // ONLINE', val: 'SYNAPSE SYNC: OK' }
    ];

    // --- 4. PEPPER ROBOT ANIMATION STATE ---
    let eyeBlinkTimer = 0;
    let isBlinking = false;
    let blinkProgress = 0;
    let headHoverAngle = 0;

    // --- RENDER LOOP ---
    const render = (time) => {
      // Damped mouse smooth follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Crisp White Background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Subtle Soft Cyan/Purple Ambient Glow on White
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.4, 10,
        width * 0.5, height * 0.5, Math.max(width, height)
      );
      bgGrad.addColorStop(0, 'rgba(0, 180, 216, 0.04)');
      bgGrad.addColorStop(0.5, 'rgba(124, 58, 237, 0.02)');
      bgGrad.addColorStop(1, 'rgba(255, 255, 255, 1)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // --- SECTION A: SPATIAL COMPUTING AR GRID ---
      if (mode === 'spatial' || mode === 'unified') {
        ctx.save();
        ctx.strokeStyle = 'rgba(0, 102, 204, 0.12)';
        ctx.lineWidth = 1;

        spatialGridOffset = (spatialGridOffset + 0.3) % 40;

        // Perspective Horizon Grid Lines
        const gridHorizon = height * 0.5;
        const perspectiveLines = 18;
        for (let i = -perspectiveLines; i <= perspectiveLines; i++) {
          const startX = width * 0.5 + i * (width / perspectiveLines);
          ctx.beginPath();
          ctx.moveTo(startX, height);
          ctx.lineTo(width * 0.5 + i * 15, gridHorizon);
          ctx.stroke();
        }

        // Horizontal Scanning Lines
        for (let y = gridHorizon; y < height; y += 30) {
          const adjustedY = y + (spatialGridOffset % 30);
          ctx.beginPath();
          ctx.moveTo(0, adjustedY);
          ctx.lineTo(width, adjustedY);
          ctx.stroke();
        }

        // Render Spatial AR Anchor Targets
        spatialAnchors.forEach((anchor) => {
          const ax = anchor.x * width;
          const ay = anchor.y * height;

          ctx.strokeStyle = 'rgba(0, 102, 204, 0.45)';
          ctx.lineWidth = 1.2;

          // Corner Reticle Box
          const boxSize = 24;
          ctx.beginPath();
          // Top Left
          ctx.moveTo(ax - boxSize, ay - boxSize + 6);
          ctx.lineTo(ax - boxSize, ay - boxSize);
          ctx.lineTo(ax - boxSize + 6, ay - boxSize);
          // Top Right
          ctx.moveTo(ax + boxSize - 6, ay - boxSize);
          ctx.lineTo(ax + boxSize, ay - boxSize);
          ctx.lineTo(ax + boxSize, ay - boxSize + 6);
          // Bottom Right
          ctx.moveTo(ax + boxSize, ay + boxSize - 6);
          ctx.lineTo(ax + boxSize, ay + boxSize);
          ctx.lineTo(ax + boxSize - 6, ay + boxSize);
          // Bottom Left
          ctx.moveTo(ax - boxSize + 6, ay + boxSize);
          ctx.lineTo(ax - boxSize, ay + boxSize);
          ctx.lineTo(ax - boxSize, ay + boxSize - 6);
          ctx.stroke();

          // Center Crosshair
          ctx.fillStyle = '#0066cc';
          ctx.fillRect(ax - 2, ay - 2, 4, 4);

          // Spatial HUD Labels
          ctx.font = '600 10px "Inter", sans-serif';
          ctx.fillStyle = '#0f172a';
          ctx.fillText(anchor.label, ax + boxSize + 10, ay - 4);
          ctx.fillStyle = '#6b21a8';
          ctx.fillText(anchor.val, ax + boxSize + 10, ay + 10);
        });

        ctx.restore();
      }

      // --- SECTION B: NEURAL PROCESSOR MESH NETWORKS ---
      if (mode === 'neural' || mode === 'unified') {
        ctx.save();
        for (let i = 0; i < neuralNodes.length; i++) {
          for (let j = i + 1; j < neuralNodes.length; j++) {
            const dx = neuralNodes[i].x - neuralNodes[j].x;
            const dy = neuralNodes[i].y - neuralNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              const alpha = (1 - dist / 140) * 0.35;
              ctx.beginPath();
              ctx.moveTo(neuralNodes[i].x, neuralNodes[i].y);
              ctx.lineTo(neuralNodes[j].x, neuralNodes[j].y);
              ctx.strokeStyle = `rgba(0, 102, 204, ${alpha})`;
              ctx.lineWidth = 1.0;
              ctx.stroke();

              // Synaptic action potential pulse traveling along synapse
              if (Math.random() < 0.008) {
                const pulseT = (time * 0.002) % 1;
                const px = neuralNodes[i].x + (neuralNodes[j].x - neuralNodes[i].x) * pulseT;
                const py = neuralNodes[i].y + (neuralNodes[j].y - neuralNodes[i].y) * pulseT;

                ctx.beginPath();
                ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = '#8b5cf6';
                ctx.shadowBlur = 6;
                ctx.shadowColor = '#8b5cf6';
                ctx.fill();
                ctx.shadowBlur = 0;
              }
            }
          }
        }


        // Render Neural Nodes
        neuralNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          node.pulse += node.pulseSpeed;
          const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;

          ctx.beginPath();
          ctx.arc(node.x, node.y, Math.max(1, currentRadius), 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = node.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        ctx.restore();
      }

      // --- SECTION C: QUANTUM HARDWARE QPU RINGS ---
      if (mode === 'quantum' || mode === 'unified') {
        ctx.save();
        const qpuCenterX = width * 0.28;
        const qpuCenterY = height * 0.52;

        // Superconducting Cryogenic Chamber Glow
        const qpuGlow = ctx.createRadialGradient(qpuCenterX, qpuCenterY, 10, qpuCenterX, qpuCenterY, 320);
        qpuGlow.addColorStop(0, 'rgba(168, 85, 247, 0.12)');
        qpuGlow.addColorStop(0.5, 'rgba(0, 240, 255, 0.05)');
        qpuGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = qpuGlow;
        ctx.beginPath();
        ctx.arc(qpuCenterX, qpuCenterY, 320, 0, Math.PI * 2);
        ctx.fill();

        // 3D Superposition Qubit Orbital Rings
        qubits.forEach((qubit, idx) => {
          qubit.angle += qubit.speed;
          const rotAngle = time * 0.0003 * (idx % 2 === 0 ? 1 : -1);

          ctx.save();
          ctx.translate(qpuCenterX, qpuCenterY);
          ctx.rotate(rotAngle + (idx * Math.PI) / 6);
          ctx.scale(1, 0.35 + (idx % 3) * 0.1);

          ctx.beginPath();
          ctx.arc(0, 0, qubit.radius, 0, Math.PI * 2);
          ctx.strokeStyle = idx % 2 === 0 ? 'rgba(0, 240, 255, 0.35)' : 'rgba(168, 85, 247, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([8, 12]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Orbiting Qubit State Particle
          const qx = Math.cos(qubit.angle) * qubit.radius;
          const qy = Math.sin(qubit.angle) * qubit.radius;

          ctx.beginPath();
          ctx.arc(qx, qy, 5, 0, Math.PI * 2);
          ctx.fillStyle = idx % 2 === 0 ? '#00f0ff' : '#a855f7';
          ctx.shadowBlur = 15;
          ctx.shadowColor = ctx.fillStyle;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Quantum Entanglement Pulse Line to center
          if (idx % 3 === 0) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(qx, qy);
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          ctx.restore();
        });

        // Center Superconducting Qubit Chip Core
        ctx.save();
        ctx.translate(qpuCenterX, qpuCenterY);
        ctx.rotate(time * 0.0005);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-25, -25, 50, 50);
        ctx.strokeStyle = '#a855f7';
        ctx.strokeRect(-15, -15, 30, 30);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00f0ff';
        ctx.fillRect(-6, -6, 12, 12);
        ctx.shadowBlur = 0;
        ctx.restore();

        ctx.restore();
      }

      // --- SECTION D: PEPPER HUMANOID ROBOT CANVAS ANIMATION ---
      if (mode === 'pepper' || mode === 'unified') {
        ctx.save();

        // Position Pepper in bottom-right desktop quadrant (responsive scaling)
        const isMobile = width < 768;
        const robotScale = isMobile ? Math.min(width / 500, 0.75) : Math.min(width / 1300, 1.0);
        const robotCenterX = isMobile ? width * 0.5 : width * 0.82;
        const robotCenterY = isMobile ? height * 0.78 : height * 0.65;

        // Hover bobbing animation
        headHoverAngle += 0.02;
        const floatY = Math.sin(headHoverAngle) * 8;

        // Head angle tracking towards cursor position
        const neckX = robotCenterX;
        const neckY = robotCenterY - 40 + floatY;
        const angleToMouse = Math.atan2(mouse.y - neckY, mouse.x - neckX);
        const clampedHeadTurn = Math.max(-0.4, Math.min(0.4, angleToMouse * 0.35));
        const headTilt = (mouse.x - robotCenterX) * 0.0003;

        // Eyelid blinking physics
        eyeBlinkTimer++;
        if (eyeBlinkTimer > 220 && !isBlinking) {
          isBlinking = true;
          eyeBlinkTimer = 0;
        }
        if (isBlinking) {
          blinkProgress += 0.15;
          if (blinkProgress >= Math.PI) {
            isBlinking = false;
            blinkProgress = 0;
          }
        }
        const lidFactor = isBlinking ? Math.sin(blinkProgress) : 0;

        ctx.translate(robotCenterX, robotCenterY + floatY);
        ctx.scale(robotScale, robotScale);

        // --- 1. Soft Robotic Shadow Glow underneath ---
        const shadowGlow = ctx.createRadialGradient(0, 220, 10, 0, 220, 160);
        shadowGlow.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
        shadowGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.08)');
        shadowGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = shadowGlow;
        ctx.beginPath();
        ctx.ellipse(0, 220, 160, 40, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 2. Pepper White Glossy Torso & Shoulders ---
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.moveTo(-110, 180);
        ctx.bezierCurveTo(-120, 100, -90, 40, -50, 25);
        ctx.lineTo(50, 25);
        ctx.bezierCurveTo(90, 40, 120, 100, 110, 180);
        ctx.closePath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.2)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Torso Surface Shading & Gloss highlight
        const torsoGrad = ctx.createLinearGradient(-100, 30, 100, 180);
        torsoGrad.addColorStop(0, '#ffffff');
        torsoGrad.addColorStop(0.5, '#e2e8f0');
        torsoGrad.addColorStop(1, '#cbd5e1');
        ctx.fillStyle = torsoGrad;
        ctx.fill();

        // Shoulder Articulator Joints & LED Accents
        [-85, 85].forEach((sx) => {
          ctx.fillStyle = '#1e293b';
          ctx.beginPath();
          ctx.arc(sx, 48, 22, 0, Math.PI * 2);
          ctx.fill();

          // Cyan Shoulder Ring LED
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 3;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00f0ff';
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // --- 3. Pepper Chest Interactive Interface Tablet Screen ---
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.roundRect(-55, 60, 110, 80, 12);
        ctx.fill();

        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00f0ff';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Screen Waveform & Quantum Pulse on Chest
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let x = -45; x <= 45; x += 3) {
          const waveY = 100 + Math.sin(x * 0.15 + time * 0.006) * 12 + Math.cos(x * 0.08) * 4;
          if (x === -45) ctx.moveTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.stroke();

        ctx.font = '700 9px "Inter", sans-serif';
        ctx.fillStyle = '#a855f7';
        ctx.fillText('PEPPER OS v4.2', -42, 76);
        ctx.fillStyle = '#00f0ff';
        ctx.fillText('STATUS: ONLINE', -42, 130);

        // --- 4. Pepper Neck Joint ---
        ctx.fillStyle = '#334155';
        ctx.fillRect(-22, -8, 44, 34);
        ctx.fillStyle = '#00f0ff';
        ctx.fillRect(-18, 8, 36, 4);

        // --- 5. Pepper Head Assembly (Rotates with mouse) ---
        ctx.save();
        ctx.translate(0, -10);
        ctx.rotate(clampedHeadTurn + headTilt);

        // Smooth White Ergonomic Head Shell matching photo
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(-90, -30);
        ctx.bezierCurveTo(-110, -80, -75, -145, 0, -145);
        ctx.bezierCurveTo(75, -145, 110, -80, 90, -30);
        ctx.bezierCurveTo(75, 25, 45, 30, 0, 30);
        ctx.bezierCurveTo(-45, 30, -75, 25, -90, -30);
        ctx.closePath();

        ctx.shadowBlur = 25;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.25)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Head Gloss & Depth Overlay
        const headGrad = ctx.createRadialGradient(-20, -90, 10, 0, -50, 120);
        headGrad.addColorStop(0, '#ffffff');
        headGrad.addColorStop(0.7, '#f1f5f9');
        headGrad.addColorStop(1, '#cbd5e1');
        ctx.fillStyle = headGrad;
        ctx.fill();

        // Ear Contour Cyan Glowing LED Trim Strip (Characteristic Pepper Feature)
        [-84, 84].forEach((earX, sideIdx) => {
          ctx.save();
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 4;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#00f0ff';
          ctx.beginPath();
          ctx.arc(earX, -45, 16, sideIdx === 0 ? Math.PI * 0.4 : -Math.PI * 0.4, sideIdx === 0 ? Math.PI * 1.4 : Math.PI * 0.4);
          ctx.stroke();
          ctx.restore();
        });

        // Top Head Camera Sensor Pill (Pepper Photo Feature)
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(0, -125, 4, 0, Math.PI * 2);
        ctx.fill();

        // --- 6. Pepper Expressive Eyes & Pupil Tracking ---
        const eyeOffset = 36;
        const eyeY = -55;
        const eyeRadius = 24;

        [-eyeOffset, eyeOffset].forEach((ex) => {
          // Dark Inner Eye Chamber
          ctx.fillStyle = '#0b0f19';
          ctx.beginPath();
          ctx.arc(ex, eyeY, eyeRadius, 0, Math.PI * 2);
          ctx.fill();

          // Outer Eye Ring Accent Glow
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Pupil Mouse Vector Offset
          const pupilLookX = Math.max(-8, Math.min(8, (mouse.x - robotCenterX) * 0.015));
          const pupilLookY = Math.max(-6, Math.min(6, (mouse.y - robotCenterY) * 0.015));

          const pupilX = ex + pupilLookX;
          const pupilY = eyeY + pupilLookY;

          // Glowing Cyan Inner Pupil Iris
          ctx.fillStyle = '#00f0ff';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00f0ff';
          ctx.beginPath();
          ctx.arc(pupilX, pupilY, 11, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Deep Dark Core Pupil
          ctx.fillStyle = '#030712';
          ctx.beginPath();
          ctx.arc(pupilX, pupilY, 6, 0, Math.PI * 2);
          ctx.fill();

          // White Catchlight Specular Reflections (Makes eyes look alive!)
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(pupilX - 4, pupilY - 4, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(pupilX + 4, pupilY + 3, 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Smooth Eyelid Animation for Blinking
          if (lidFactor > 0.01) {
            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.rect(ex - eyeRadius - 2, eyeY - eyeRadius - 2, (eyeRadius + 2) * 2, (eyeRadius + 2) * 2 * lidFactor);
            ctx.fill();
          }
        });

        // --- 7. Pepper Mouth Line ---
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(0, -22, 10, 0.25, Math.PI - 0.25);
        ctx.stroke();

        ctx.restore(); // End Head Transform
        ctx.restore(); // End Pepper Base Transform
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
