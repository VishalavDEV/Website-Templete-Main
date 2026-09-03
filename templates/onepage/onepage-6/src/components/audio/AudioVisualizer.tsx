import React, { useEffect, useRef } from 'react';
import { useAudio } from '../../context/AudioContext';

export const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isPlaying, audioFrequencyData } = useAudio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 180);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    // Floating particles state
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      speedY: Math.random() * 0.8 + 0.2,
      alpha: Math.random() * 0.5 + 0.2
    }));

    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Phase update rate depends on playback state
      phase += isPlaying ? 0.05 : 0.005;

      const numBars = 32;
      const barWidth = (width / numBars) - 6;

      // 1. Draw Vertical Frequency Bars
      for (let i = 0; i < numBars; i++) {
        const freqVal = audioFrequencyData[i % audioFrequencyData.length] || (isPlaying ? Math.floor(Math.sin(phase + i) * 60 + 80) : 10);
        const barHeight = Math.max(6, (freqVal / 255) * (height * 0.6));
        const x = i * (barWidth + 6) + 3;
        const y = height - barHeight - 20;

        // Gradient color transition: Coral -> Accent Warm -> Lavender
        const barGrad = ctx.createLinearGradient(x, y + barHeight, x, y);
        barGrad.addColorStop(0, '#633E4B');
        barGrad.addColorStop(0.5, '#D76B4A');
        barGrad.addColorStop(1, '#E89A83');

        ctx.fillStyle = barGrad;
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      // 2. Draw Smooth Oscillating Waveform Line
      ctx.beginPath();
      ctx.strokeStyle = '#B9A8C8';
      ctx.lineWidth = 2;

      for (let x = 0; x < width; x += 5) {
        const normX = x / width;
        const waveHeight = isPlaying ? Math.sin(normX * Math.PI * 6 + phase) * 20 + Math.cos(normX * Math.PI * 3 - phase) * 10 : Math.sin(normX * Math.PI * 4) * 4;
        const y = height * 0.35 + waveHeight;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 3. Draw Floating Energy Particles
      particles.forEach(p => {
        if (isPlaying) p.y -= p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(232, 154, 131, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, [isPlaying, audioFrequencyData]);

  return (
    <div style={{ width: '100%', position: 'relative', marginTop: '2rem' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '180px',
          display: 'block',
          borderRadius: '4px',
          background: 'rgba(36, 31, 35, 0.4)',
          border: '1px solid var(--border-dark)'
        }}
      />
    </div>
  );
};
