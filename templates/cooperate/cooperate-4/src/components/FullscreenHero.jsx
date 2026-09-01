import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export const FullscreenHero = ({ onOpenBrief }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Architectural geometric mesh nodes
    const nodes = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        z: Math.random() * 2 + 1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.03;

      // Draw subtle orbital rings
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width * 0.7 + offsetX * 2, height * 0.4 + offsetY * 2, 280, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.7 + offsetX * 2, height * 0.4 + offsetY * 2, 460, 0, Math.PI * 2);
      ctx.stroke();

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        const renderX = n1.x + offsetX * n1.z;
        const renderY = n1.y + offsetY * n1.z;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const renderX2 = n2.x + offsetX * n2.z;
          const renderY2 = n2.y + offsetY * n2.z;

          const dx = renderX - renderX2;
          const dy = renderY - renderY2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.18;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(renderX2, renderY2);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(renderX, renderY, n1.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="editorial-hero">
      <canvas ref={canvasRef} className="hero-canvas-bg" />

      <div className="editorial-container">
        <div className="hero-content-anchor">
          {/* Left Block: Meta + Massive Title + Action */}
          <div>
            <div className="hero-top-meta">
              <span className="mono-tag mono-tag-accent">●</span>
              <span className="mono-tag">GLOBAL TECHNOLOGY / 2026</span>
              <span className="mono-tag" style={{ color: "var(--text-dim)" }}>[SYS_ARCH_V5]</span>
            </div>

            <h1 className="huge-title hero-headline">
              WE ENGINEER<br />
              WHAT COMES<br />
              NEXT.
            </h1>

            <div className="hero-lead-wrap">
              <button
                className="circle-btn circle-btn-lg"
                onClick={scrollToNext}
                aria-label="Scroll to explore"
              >
                <ArrowDown size={28} />
              </button>

              <p className="hero-desc">
                From autonomous AI fabrics to sovereign cloud ecosystems, we architect
                the mission-critical digital systems powering global enterprise leaders.
              </p>
            </div>
          </div>

          {/* Right Block: Counter, Vertical Label & Animated Wire */}
          <div className="hero-indicator-column">
            <div className="hero-counter-large">01 / 07</div>

            <div className="scroll-wire-indicator">
              <span className="vertical-label">SCROLL TO EXPLORE</span>
              <div className="scroll-wire-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
