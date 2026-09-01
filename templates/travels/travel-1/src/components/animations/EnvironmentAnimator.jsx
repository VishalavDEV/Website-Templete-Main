import React, { useEffect, useRef } from 'react';

export default function EnvironmentAnimator({ type, active = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Setup Particles based on type
    const particles = [];
    const particleCount = type === 'snow' ? 50 : type === 'campfire' ? 40 : 25;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        
        if (type === 'snow') {
          this.y = Math.random() * -canvas.height;
          this.vy = 1 + Math.random() * 2;
          this.vx = (Math.random() - 0.5) * 1;
          this.radius = 1.5 + Math.random() * 3;
          this.color = 'rgba(255, 255, 255, 0.8)';
        } else if (type === 'campfire') {
          this.x = canvas.width / 2 + (Math.random() - 0.5) * 30;
          this.y = canvas.height - 10;
          this.vy = -1.5 - Math.random() * 2.5;
          this.vx = (Math.random() - 0.5) * 1.5;
          this.radius = 1 + Math.random() * 3;
          this.color = `rgba(${230 + Math.floor(Math.random() * 25)}, ${100 + Math.floor(Math.random() * 100)}, 10, ${0.4 + Math.random() * 0.6})`;
          this.life = 1.0;
          this.decay = 0.01 + Math.random() * 0.02;
        } else if (type === 'waves' || type === 'ship-ripple') {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height - 20 - Math.random() * 40;
          this.vy = 0;
          this.vx = -0.5 - Math.random() * 1;
          this.radius = 1 + Math.random() * 2;
          this.color = 'rgba(13, 148, 136, 0.4)';
        } else { // stars / sparkles
          this.y = Math.random() * canvas.height;
          this.radius = 0.8 + Math.random() * 1.5;
          this.color = 'rgba(255, 255, 255, 0.9)';
          this.alpha = Math.random();
          this.alphaSpeed = 0.01 + Math.random() * 0.02;
        }
      }

      update() {
        if (type === 'snow') {
          this.y += this.vy;
          this.x += this.vx;
          if (this.y > canvas.height) this.reset();
        } else if (type === 'campfire') {
          this.y += this.vy;
          this.x += this.vx;
          this.life -= this.decay;
          if (this.life <= 0) this.reset();
        } else if (type === 'waves' || type === 'ship-ripple') {
          this.x += this.vx;
          if (this.x < 0) this.x = canvas.width;
        } else { // stars
          this.alpha += this.alphaSpeed;
          if (this.alpha > 1 || this.alpha < 0) {
            this.alphaSpeed = -this.alphaSpeed;
          }
        }
      }

      draw() {
        ctx.beginPath();
        if (type === 'campfire') {
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = this.life;
        } else if (type === 'stars') {
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = Math.max(0.1, this.alpha);
        } else if (type === 'waves' || type === 'ship-ripple') {
          // horizontal wave lines
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + 30, this.y);
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.3)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          return;
        } else {
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = 0.8;
        }
        ctx.fill();
        ctx.globalAlpha = 1.0; // reset
      }
    }

    // Populate
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Additional styling like drawing a campfire base / wave base
      if (type === 'campfire') {
        // Draw wood logs base
        ctx.fillStyle = '#78350f';
        ctx.fillRect(canvas.width / 2 - 15, canvas.height - 12, 30, 8);
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [active, type]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full rounded-2xl"
    />
  );
}
