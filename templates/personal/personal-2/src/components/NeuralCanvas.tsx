import { useEffect, useRef } from 'react';

interface NeuralCanvasProps {
  className?: string;
  nodeCount?: number;
  interactive?: boolean;
  accentColor?: string; // hex
  secondaryColor?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  layer: number; // 0: background, 1: mid, 2: foreground
  isCore?: boolean;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function NeuralCanvas({
  className = "w-full h-full",
  nodeCount = 45,
  interactive = true,
  accentColor = "#00f0ff",
  secondaryColor = "#a855f7"
}: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize Nodes
    const nodes: Node[] = [];
    const count = Math.max(25, Math.min(nodeCount, Math.floor((width * height) / 12000)));

    for (let i = 0; i < count; i++) {
      const isCore = i < 4;
      const baseRadius = isCore ? Math.random() * 2 + 4 : Math.random() * 1.8 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isCore ? 0.4 : 0.8),
        vy: (Math.random() - 0.5) * (isCore ? 0.4 : 0.8),
        radius: baseRadius,
        baseRadius,
        pulsePhase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 3),
        isCore
      });
    }

    // Data packets travelling between close nodes
    const packets: DataPacket[] = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        fromNode: Math.floor(Math.random() * count),
        toNode: Math.floor(Math.random() * count),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.009,
        color: Math.random() > 0.4 ? accentColor : secondaryColor
      });
    }

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const maxDistance = Math.min(width, height) * 0.26;
      const mouse = mouseRef.current;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        // Pulse
        node.radius = node.baseRadius + Math.sin(time + node.pulsePhase) * 0.8;
      }

      // Draw Connections (Synapses)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (n1.isCore || n2.isCore ? 0.35 : 0.18);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n1.isCore ? accentColor : secondaryColor;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = n1.isCore || n2.isCore ? 1.2 : 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Draw Connection to Mouse if active
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = (1 - dist / 130) * 0.6;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Update & Draw Data Packets
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.fromNode = Math.floor(Math.random() * nodes.length);
          packet.toNode = Math.floor(Math.random() * nodes.length);
        }

        const from = nodes[packet.fromNode];
        const to = nodes[packet.toNode];
        if (!from || !to) return;

        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const px = from.x + (to.x - from.x) * packet.progress;
          const py = from.y + (to.y - from.y) * packet.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.shadowColor = packet.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.5, node.radius), 0, Math.PI * 2);

        if (node.isCore) {
          ctx.fillStyle = accentColor;
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Outer halo
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = accentColor;
          ctx.globalAlpha = 0.25;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        } else {
          ctx.fillStyle = node.layer === 2 ? '#e0f2fe' : node.layer === 1 ? accentColor : '#94a3b8';
          ctx.globalAlpha = node.layer === 2 ? 0.9 : 0.6;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodeCount, interactive, accentColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`block pointer-events-auto ${className}`}
    />
  );
}
