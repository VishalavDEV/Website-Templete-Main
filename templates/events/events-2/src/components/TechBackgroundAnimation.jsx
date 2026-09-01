import React, { useEffect, useRef } from 'react';

export const TechBackgroundAnimation = () => {
  const canvasRef = useRef(null);

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

    // Particle nodes for Neural Network constellation
    const numNodes = Math.min(Math.floor(width / 22), 70);
    const nodes = [];
    const colors = ['#4f46e5', '#2563eb', '#0284c7', '#7c3aed'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Floating Tech Floating Data Tags (AI, Code, Quantum, Cloud)
    const techTags = ['{ AI }', '0101', '< />', 'LLM', 'CLOUD', 'QUANTUM', '2026', 'DATA', 'NEURAL', 'SYS'];
    const floatingItems = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: techTags[Math.floor(Math.random() * techTags.length)],
      speed: 0.3 + Math.random() * 0.4,
      size: 10 + Math.floor(Math.random() * 4),
      alpha: 0.15 + Math.random() * 0.2
    }));

    // Pulsing Rings
    let pulseRadius = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw dynamic neural constellation lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Draw node point
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = nodeA.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            const alpha = (1 - dist / maxDist) * 0.2;
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Render floating tech symbols / binary code
      ctx.font = '12px "Space Grotesk", sans-serif';
      floatingItems.forEach((item) => {
        item.y -= item.speed;
        if (item.y < -20) {
          item.y = height + 20;
          item.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(79, 70, 229, ${item.alpha})`;
        ctx.fillText(item.text, item.x, item.y);
      });

      // 3. Render expanding cyber energy pulse ring
      pulseRadius = (pulseRadius + 0.8) % 400;
      ctx.beginPath();
      ctx.arc(width / 2, height / 3, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(2, 132, 199, ${Math.max(0, 0.12 - pulseRadius / 400)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        opacity: 0.6
      }}
    />
  );
};
