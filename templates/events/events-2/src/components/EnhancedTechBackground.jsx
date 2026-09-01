import React, { useEffect, useRef } from 'react';

export const EnhancedTechBackground = ({ activePage = 'home' }) => {
  const canvasRef = useRef(null);

  // Sync mode automatically based on active menu page
  const getEffectiveMode = () => {
    switch (activePage) {
      case 'about':
        return 'lab';
      case 'speakers':
        return 'ai';
      case 'schedule':
        return 'network';
      case 'gallery':
        return 'lab';
      case 'venue':
        return 'quantum';
      case 'contact':
        return 'network';
      case 'register':
        return 'quantum';
      case 'events':
      case 'past-events':
        return 'lab';
      case 'home':
      default:
        return 'all';
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();

    const handleResize = () => {
      setCanvasDimensions();
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive magnetic glow & particle attraction
    const mouse = { x: width / 2, y: height / 2, radius: 240, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // --- DATA & SIMULATION STATE ---

    // Palette: DeepTech & Scientific Colors
    const palette = {
      purple: '#4f46e5',
      cyan: '#0284c7',
      emerald: '#059669',
      violet: '#7c3aed',
      teal: '#0d9488',
      amber: '#d97706',
      pink: '#ec4899',
    };

    // 1. LAB EQUIPMENT: Oscilloscope Signal Lines
    let phase1 = 0;
    let phase2 = 0;

    // Laser Optics Reflection Mirrors & Beams
    const mirrors = [
      { x: width * 0.12, y: height * 0.22 },
      { x: width * 0.88, y: height * 0.22 },
      { x: width * 0.88, y: height * 0.78 },
      { x: width * 0.12, y: height * 0.78 },
    ];
    let laserHue = 0;

    // Lab Microfluidic Atomic Nodes
    const atomicClusters = [
      { x: width * 0.18, y: height * 0.35, radius: 45, angle: 0, speed: 0.02, color: palette.cyan },
      { x: width * 0.82, y: height * 0.65, radius: 55, angle: Math.PI / 3, speed: 0.015, color: palette.purple },
      { x: width * 0.5, y: height * 0.82, radius: 38, angle: Math.PI, speed: 0.022, color: palette.emerald }
    ];

    // 2. NETWORKING: Fiber Optic Nodes & Packets
    const numNetNodes = Math.min(Math.floor((width * height) / 22000), 50);
    const netNodes = Array.from({ length: numNetNodes }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
      type: i % 4 === 0 ? 'ROUTER' : i % 3 === 0 ? 'SERVER' : 'DESK_NODE',
      color: i % 2 === 0 ? palette.purple : palette.cyan,
      pulse: Math.random() * Math.PI * 2
    }));

    // Network Data Packets moving along links
    const packets = Array.from({ length: 28 }, () => ({
      fromIdx: Math.floor(Math.random() * numNetNodes),
      toIdx: Math.floor(Math.random() * numNetNodes),
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.008,
      label: ['0101', 'SYN', 'ACK', '10G', 'PKT', 'TLS', '6G'][Math.floor(Math.random() * 7)]
    }));

    // PCB Circuit Board Traces
    const pcbTraces = [
      { startX: 30, startY: height * 0.18, points: [[190, height * 0.18], [190, height * 0.38], [340, height * 0.38]], progress: 0, speed: 1.2 },
      { startX: width - 30, startY: height * 0.82, points: [[width - 210, height * 0.82], [width - 210, height * 0.62], [width - 380, height * 0.62]], progress: 0, speed: 1.4 },
      { startX: width * 0.45, startY: 20, points: [[width * 0.45, 130], [width * 0.62, 130], [width * 0.62, 250]], progress: 0, speed: 1.0 }
    ];

    // 3. DEEPTECH & QUANTUM: Qubit Bloch Spheres & Particle Collider Ring
    let ringAngle1 = 0;
    let ringAngle2 = 0;

    const qubits = [
      { x: width * 0.14, y: height * 0.58, radius: 48, spin: 0, speed: 0.03, color: palette.violet, label: '|ψ⟩ = α|0⟩ + β|1⟩' },
      { x: width * 0.86, y: height * 0.32, radius: 52, spin: Math.PI / 2, speed: 0.02, color: palette.teal, label: 'Entangled Qubit #2' }
    ];

    // 4. AI RESEARCH & NEURAL MESH: Synaptic Network Layers
    const neuralLayers = [
      Array.from({ length: 4 }, (_, i) => ({ x: width * 0.22, y: height * 0.18 + i * 70 })),
      Array.from({ length: 6 }, (_, i) => ({ x: width * 0.36, y: height * 0.14 + i * 60 })),
      Array.from({ length: 7 }, (_, i) => ({ x: width * 0.50, y: height * 0.12 + i * 55 })),
      Array.from({ length: 6 }, (_, i) => ({ x: width * 0.64, y: height * 0.14 + i * 60 })),
      Array.from({ length: 4 }, (_, i) => ({ x: width * 0.78, y: height * 0.18 + i * 70 }))
    ];

    // Synaptic Action Potential Sparks
    const actionPotentials = Array.from({ length: 22 }, () => ({
      layerIdx: Math.floor(Math.random() * (neuralLayers.length - 1)),
      fromNode: 0,
      toNode: 0,
      progress: Math.random(),
      speed: 0.01 + Math.random() * 0.015
    }));

    actionPotentials.forEach(ap => {
      ap.fromNode = Math.floor(Math.random() * neuralLayers[ap.layerIdx].length);
      ap.toNode = Math.floor(Math.random() * neuralLayers[ap.layerIdx + 1].length);
    });

    // 5. FLOATING AI & SCIENTIFIC SYMBOLS
    const deepTechSymbols = [
      '∇ × E = -∂B/∂t', 'E = mc²', 'Attention(Q,K,V)', 'σ(W·x + b)',
      '[CH1: 4.8 GHz]', 'λ = 632.8nm', 'CRYO: 3.8K', '100 Gbps Mesh',
      'Quantum Spin S₁₂', 'Tensor.dim([512, 1024])', 'LLM_Transformer',
      'Spectrometer: 520nm', '5G/6G Node', '01001001', 'Microfluidics',
      'Softmax(QKᵀ/√d)', 'OpticFiber: 1550nm', 'Radar 360° Scan'
    ];

    const floatingItems = Array.from({ length: 26 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: deepTechSymbols[Math.floor(Math.random() * deepTechSymbols.length)],
      speedY: 0.2 + Math.random() * 0.35,
      speedX: (Math.random() - 0.5) * 0.2,
      size: 11 + Math.floor(Math.random() * 3),
      alpha: 0.12 + Math.random() * 0.18,
      pulseSpeed: 0.02 + Math.random() * 0.02
    }));

    // --- MAIN ANIMATION RENDER LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mode = getEffectiveMode();

      // A. Ambient Interactive Mouse Glow
      if (mouse.active) {
        const mGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        mGlow.addColorStop(0, 'rgba(79, 70, 229, 0.10)');
        mGlow.addColorStop(0.5, 'rgba(2, 132, 199, 0.05)');
        mGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = mGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // ==========================================
      // PAGE HEADER WATERMARK HUD
      // ==========================================
      ctx.fillStyle = 'rgba(79, 70, 229, 0.22)';
      ctx.font = '700 11px "Space Grotesk", monospace';
      const pageHeaderTag = `[DOMAIN MATRIX: ${activePage.toUpperCase()} | MODE: ${mode.toUpperCase()}]`;
      ctx.fillText(pageHeaderTag, 24, 40);

      // ==========================================
      // 1. LAB EQUIPMENT & SCIENTIFIC DIAGNOSTICS
      // ==========================================
      if (mode === 'all' || mode === 'lab') {
        phase1 += 0.035;
        phase2 += 0.025;

        ctx.lineWidth = 1.2;

        // Top Channel 1 Oscilloscope (Sine + Harmonic)
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.28)';
        const oscY1 = height * 0.14;
        for (let x = 0; x < width; x += 4) {
          const y = oscY1 + Math.sin(x * 0.008 + phase1) * 20 + Math.cos(x * 0.022) * 5;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = 'rgba(2, 132, 199, 0.38)';
        ctx.font = '10px "Space Grotesk", monospace';
        ctx.fillText('[OSCILLOSCOPE CH-1: 4.8 GHz LAB SIGNAL | 120 mV/DIV]', 24, oscY1 - 25);

        // Bottom Channel 2 (Square Sweep)
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.22)';
        const oscY2 = height * 0.90;
        for (let x = 0; x < width; x += 6) {
          const sq = Math.sin(x * 0.01 + phase2) > 0 ? 14 : -14;
          if (x === 0) ctx.moveTo(x, oscY2 + sq);
          else ctx.lineTo(x, oscY2 + sq);
        }
        ctx.stroke();

        // Laser Optics Refraction Spectrum
        laserHue = (laserHue + 0.5) % 360;
        ctx.save();
        ctx.strokeStyle = `hsla(${laserHue}, 80%, 55%, 0.25)`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.moveTo(mirrors[0].x, mirrors[0].y);
        for (let i = 1; i < mirrors.length; i++) {
          ctx.lineTo(mirrors[i].x, mirrors[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        // Mirror Node Optics
        mirrors.forEach((m, idx) => {
          ctx.beginPath();
          ctx.arc(m.x, m.y, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = palette.pink;
          ctx.shadowBlur = 8;
          ctx.shadowColor = palette.pink;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(236, 72, 153, 0.45)';
          ctx.font = '9px monospace';
          ctx.fillText(`LASER_REFRACTOR_${idx + 1}`, m.x + 8, m.y + 3);
        });

        // Atomic Orbitals
        atomicClusters.forEach((cluster) => {
          cluster.angle += cluster.speed;
          ctx.beginPath();
          ctx.arc(cluster.x, cluster.y, cluster.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `${cluster.color}25`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Orbiting Electron
          const ex = cluster.x + Math.cos(cluster.angle) * cluster.radius;
          const ey = cluster.y + Math.sin(cluster.angle) * cluster.radius;
          ctx.beginPath();
          ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = cluster.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = cluster.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Nucleus
          ctx.beginPath();
          ctx.arc(cluster.x, cluster.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = cluster.color;
          ctx.fill();
        });
      }

      // ==========================================
      // 2. NETWORKING & FIBER TOPOLOGIES
      // ==========================================
      if (mode === 'all' || mode === 'network') {
        for (let i = 0; i < netNodes.length; i++) {
          const nodeA = netNodes[i];
          nodeA.pulse += 0.02;

          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
          if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

          // Mouse Attraction Magnetism
          if (mouse.active) {
            const dxM = mouse.x - nodeA.x;
            const dyM = mouse.y - nodeA.y;
            const distM = Math.sqrt(dxM * dxM + dyM * dyM);
            if (distM < mouse.radius) {
              const force = (mouse.radius - distM) / mouse.radius;
              nodeA.x += (dxM / distM) * force * 1.3;
              nodeA.y += (dyM / distM) * force * 1.3;
            }
          }

          const curRad = nodeA.radius + Math.sin(nodeA.pulse) * 0.8;
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, Math.max(1, curRad), 0, Math.PI * 2);
          ctx.fillStyle = nodeA.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = nodeA.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connection Edges
          for (let j = i + 1; j < netNodes.length; j++) {
            const nodeB = netNodes[j];
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 160;

            if (dist < maxDist) {
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              const alpha = (1 - dist / maxDist) * 0.20;
              ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }
        }

        // Fiber Data Packets
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.fromIdx = Math.floor(Math.random() * netNodes.length);
            p.toIdx = Math.floor(Math.random() * netNodes.length);
          }

          const nodeFrom = netNodes[p.fromIdx];
          const nodeTo = netNodes[p.toIdx];
          if (nodeFrom && nodeTo) {
            const px = nodeFrom.x + (nodeTo.x - nodeFrom.x) * p.progress;
            const py = nodeFrom.y + (nodeTo.y - nodeFrom.y) * p.progress;

            ctx.beginPath();
            ctx.arc(px, py, 2.8, 0, Math.PI * 2);
            ctx.fillStyle = palette.amber;
            ctx.shadowBlur = 8;
            ctx.shadowColor = palette.amber;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // PCB Circuit Board Traces
        pcbTraces.forEach((trace) => {
          trace.progress += trace.speed;
          ctx.beginPath();
          ctx.moveTo(trace.startX, trace.startY);
          trace.points.forEach((pt) => ctx.lineTo(pt[0], pt[1]));
          ctx.strokeStyle = 'rgba(79, 70, 229, 0.14)';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      // ==========================================
      // 3. DEEPTECH & QUANTUM HARDWARE
      // ==========================================
      if (mode === 'all' || mode === 'quantum' || activePage === 'venue') {
        ringAngle1 += 0.008;
        ringAngle2 -= 0.012;

        const ringCX = width * 0.80;
        const ringCY = height * 0.44;
        const ringR = Math.min(width, height) * 0.18;

        // Outer Ring HUD
        ctx.save();
        ctx.translate(ringCX, ringCY);
        ctx.rotate(ringAngle1);
        ctx.beginPath();
        ctx.arc(0, 0, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.18)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([12, 8]);
        ctx.stroke();

        // Inner Rotating Ring
        ctx.rotate(ringAngle2);
        ctx.beginPath();
        ctx.arc(0, 0, ringR * 0.72, 0, Math.PI * 1.3);
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.28)';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(2, 132, 199, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-16, 0); ctx.lineTo(16, 0);
        ctx.moveTo(0, -16); ctx.lineTo(0, 16);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = 'rgba(2, 132, 199, 0.38)';
        ctx.font = '9px "Space Grotesk", monospace';
        ctx.fillText('[PARTICLE ACCELERATOR | 14 TeV QUANTUM COLLIDER]', ringCX - 95, ringCY + ringR + 20);

        // Quantum Qubits
        qubits.forEach((q) => {
          q.spin += q.speed;

          ctx.beginPath();
          ctx.ellipse(q.x, q.y, q.radius, q.radius * 0.36, q.spin, 0, Math.PI * 2);
          ctx.strokeStyle = `${q.color}38`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          const vx = q.x + Math.cos(q.spin) * (q.radius * 0.8);
          const vy = q.y + Math.sin(q.spin) * (q.radius * 0.8);

          ctx.beginPath();
          ctx.moveTo(q.x, q.y);
          ctx.lineTo(vx, vy);
          ctx.strokeStyle = q.color;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(vx, vy, 4, 0, Math.PI * 2);
          ctx.fillStyle = q.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = q.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.fillStyle = 'rgba(124, 58, 237, 0.45)';
          ctx.font = '10px monospace';
          ctx.fillText(q.label, q.x - 50, q.y + q.radius + 16);
        });

        // Entanglement Laser Link
        if (qubits.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(qubits[0].x, qubits[0].y);
          ctx.lineTo(qubits[1].x, qubits[1].y);
          ctx.strokeStyle = 'rgba(124, 58, 237, 0.18)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // ==========================================
      // 4. AI RESEARCH & NEURAL MESH ARCHITECTURE
      // ==========================================
      if (mode === 'all' || mode === 'ai' || activePage === 'speakers') {
        // Draw Synaptic Neural Links
        for (let l = 0; l < neuralLayers.length - 1; l++) {
          const currentLayer = neuralLayers[l];
          const nextLayer = neuralLayers[l + 1];

          currentLayer.forEach((n1) => {
            nextLayer.forEach((n2) => {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = 'rgba(79, 70, 229, 0.09)';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            });
          });
        }

        // Neural Layer Nodes
        neuralLayers.forEach((layer, lIdx) => {
          layer.forEach((node) => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = lIdx === 0 ? palette.cyan : lIdx === neuralLayers.length - 1 ? palette.emerald : palette.purple;
            ctx.shadowBlur = 6;
            ctx.shadowColor = ctx.fillStyle;
            ctx.fill();
            ctx.shadowBlur = 0;
          });
        });

        // Action Potential Firing Sparks
        actionPotentials.forEach((ap) => {
          ap.progress += ap.speed;
          if (ap.progress >= 1) {
            ap.progress = 0;
            ap.layerIdx = Math.floor(Math.random() * (neuralLayers.length - 1));
            ap.fromNode = Math.floor(Math.random() * neuralLayers[ap.layerIdx].length);
            ap.toNode = Math.floor(Math.random() * neuralLayers[ap.layerIdx + 1].length);
          }

          const n1 = neuralLayers[ap.layerIdx][ap.fromNode];
          const n2 = neuralLayers[ap.layerIdx + 1][ap.toNode];
          if (n1 && n2) {
            const sx = n1.x + (n2.x - n1.x) * ap.progress;
            const sy = n1.y + (n2.y - n1.y) * ap.progress;

            ctx.beginPath();
            ctx.arc(sx, sy, 2.6, 0, Math.PI * 2);
            ctx.fillStyle = palette.emerald;
            ctx.shadowBlur = 8;
            ctx.shadowColor = palette.emerald;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      }

      // ==========================================
      // 5. FLOATING AI & SCIENTIFIC FORMULAS
      // ==========================================
      ctx.font = '11px "Space Grotesk", monospace';
      floatingItems.forEach((item) => {
        item.y -= item.speedY;
        item.x += item.speedX;
        item.alpha += Math.sin(item.pulseSpeed) * 0.003;

        if (item.y < -30) {
          item.y = height + 30;
          item.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(79, 70, 229, ${Math.max(0.08, item.alpha)})`;
        ctx.fillText(item.text, item.x, item.y);
      });

      // Special Geospatial Radar overlay on Venue Page
      if (activePage === 'venue') {
        const time = Date.now() * 0.001;
        ctx.save();
        ctx.translate(width * 0.5, height * 0.5);
        ctx.rotate(time * 0.6);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 340, 0, Math.PI / 4);
        ctx.closePath();
        const rGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 340);
        rGrad.addColorStop(0, 'rgba(2, 132, 199, 0.14)');
        rGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = rGrad;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activePage]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.88
      }}
    />
  );
};

export default EnhancedTechBackground;
