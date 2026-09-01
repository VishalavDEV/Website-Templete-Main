import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "core" | "edge" | "compute" | "storage";
  activity: number;
  connections: number[];
}

interface Packet {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
  color: string;
}

export const SystemCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeNodes: 16,
    throughput: "54.8k req/s",
    latency: "1.18 ms",
    status: "OPTIMAL"
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate initial nodes
    const nodeLabels = [
      "Inference Core", "Vector Graph", "Consensus Engine", "Edge Mesh",
      "Event Gateway", "Data Fabric", "Zero-Trust Proxy", "Stream Ingestion",
      "Telemetry Sink", "Auth Broker", "KMS Vault", "Lakehouse",
      "Compute Cluster", "API Gateway", "Model Router", "Sovereign Node"
    ];

    const nodes: Node[] = nodeLabels.map((label, idx) => {
      const isCore = idx < 4;
      return {
        id: `node-${idx}`,
        label,
        x: (0.15 + Math.random() * 0.7) * width,
        y: (0.15 + Math.random() * 0.7) * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isCore ? 6 : 4,
        type: isCore ? "core" : idx % 3 === 0 ? "compute" : idx % 3 === 1 ? "storage" : "edge",
        activity: Math.random(),
        connections: []
      };
    });

    // Create sparse network connections
    nodes.forEach((node, i) => {
      const neighborCount = 2 + Math.floor(Math.random() * 3);
      for (let k = 0; k < neighborCount; k++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    // Active packets traveling between nodes
    const packets: Packet[] = [];
    for (let p = 0; p < 18; p++) {
      const s = Math.floor(Math.random() * nodes.length);
      const targets = nodes[s].connections;
      if (targets.length > 0) {
        const t = targets[Math.floor(Math.random() * targets.length)];
        packets.push({
          sourceIdx: s,
          targetIdx: t,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.006,
          color: Math.random() > 0.3 ? "#CCF34A" : "#0A2E23"
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle architectural matrix background dots
      ctx.fillStyle = "rgba(18, 19, 22, 0.04)";
      const dotSpacing = 28;
      for (let x = 14; x < width; x += dotSpacing) {
        for (let y = 14; y < height; y += dotSpacing) {
          ctx.fillRect(x, y, 1.5, 1.5);
        }
      }

      // Update and draw network lines
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        // Subtle drift with soft bounding boundary
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 40 || node.x > width - 40) node.vx *= -1;
        if (node.y < 40 || node.y > height - 40) node.vy *= -1;

        // Mouse attraction
        const dxMouse = mouseX - node.x;
        const dyMouse = mouseY - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 140) {
          node.x += (dxMouse / distMouse) * 0.5;
          node.y += (dyMouse / distMouse) * 0.5;
        }

        // Draw connections
        node.connections.forEach((targetIdx) => {
          const target = nodes[targetIdx];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 260) {
            const alpha = (1 - dist / 260) * 0.25;
            ctx.strokeStyle = `rgba(10, 46, 35, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw animated packets
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.sourceIdx = packet.targetIdx;
          const targets = nodes[packet.sourceIdx].connections;
          if (targets.length > 0) {
            packet.targetIdx = targets[Math.floor(Math.random() * targets.length)];
          }
        }

        const source = nodes[packet.sourceIdx];
        const target = nodes[packet.targetIdx];
        if (source && target) {
          const px = source.x + (target.x - source.x) * packet.progress;
          const py = source.y + (target.y - source.y) * packet.progress;

          // Packet glow
          ctx.beginPath();
          ctx.arc(px, py, packet.color === "#CCF34A" ? 3 : 2.5, 0, Math.PI * 2);
          ctx.fillStyle = packet.color;
          ctx.fill();
        }
      });

      // Draw nodes and labels
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.activity * 5) * 0.5 + 0.5;

        // Outer activity ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = node.type === "core" ? "rgba(204, 243, 74, 0.4)" : "rgba(10, 46, 35, 0.15)";
        ctx.stroke();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.type === "core" ? "#0A2E23" : "#24282F";
        ctx.fill();

        // Node inner pip
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = node.type === "core" ? "#CCF34A" : "#FFFFFF";
        ctx.fill();

        // Monospace technical label
        ctx.font = "9px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "#5E636E";
        ctx.fillText(node.label, node.x + 10, node.y + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Telemetry tick
    const interval = setInterval(() => {
      const req = (52 + Math.random() * 6).toFixed(1);
      const lat = (1.1 + Math.random() * 0.2).toFixed(2);
      setActiveTelemetry({
        activeNodes: 16,
        throughput: `${req}k req/s`,
        latency: `${lat} ms`,
        status: "OPTIMAL"
      });
    }, 2500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[420px] rounded-xs border border-[#E6E2D8] bg-[#FAF8F5] overflow-hidden flex flex-col justify-between p-4 ${className}`}>
      {/* Top Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider text-[#5E636E] border-b border-[#E6E2D8]/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCF34A] border border-[#0A2E23] animate-pulse" />
          <span className="font-bold text-[#0A2E23]">SYSTEM_FABRIC_LIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>THROUGHPUT: <strong className="text-[#121316]">{activeTelemetry.throughput}</strong></span>
          <span>LATENCY: <strong className="text-[#121316]">{activeTelemetry.latency}</strong></span>
        </div>
        <div className="px-1.5 py-0.5 bg-[#0A2E23] text-[#CCF34A] text-[9px] font-bold rounded-xs">
          MESH ACTIVE
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* Bottom Technical Grid Indicator */}
      <div className="relative z-10 flex items-center justify-between font-mono-tech text-[9px] uppercase tracking-widest text-[#7C828D] pt-2 border-t border-[#E6E2D8]/80">
        <span>TOPOLOGY: DISTRIBUTED_CONCURRENT</span>
        <span>PROTOCOL: VTX-EVENT-BUS // v4.2</span>
      </div>
    </div>
  );
};
