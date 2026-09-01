import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';

interface HyperspeedProps {
  headline?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hyperspeed: React.FC<HyperspeedProps> = ({
  headline = 'BEYOND THE MAP',
  subtitle = 'Some places are easier to imagine than to reach.',
  ctaText = 'EXPLORE EXPEDITIONS',
  ctaLink = '/explore'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoized configuration options to prevent recreation
  const options = useMemo(() => ({
    speed: 1.8,
    starCount: 1600,
    starColor: '#ffffff',
    glowColor: '#3b82f6',
    warmAccent: '#c98a3e',
    fieldOfView: 65,
    tunnelRadius: 18,
    tunnelLength: 800
  }), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090b, 0.0035);

    const camera = new THREE.PerspectiveCamera(options.fieldOfView, width / height, 0.1, 1000);
    camera.position.z = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Particle Stars Geometry
    const count = options.starCount;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    const colorChoices = [
      new THREE.Color('#38bdf8'), // Cyan
      new THREE.Color('#3b82f6'), // Deep Blue
      new THREE.Color('#e0a358'), // Subtle Warm Ochre
      new THREE.Color('#f8fafc'), // White
      new THREE.Color('#818cf8')  // Indigo
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * options.tunnelRadius;
      
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = Math.sin(theta) * radius;
      positions[i * 3 + 2] = -Math.random() * options.tunnelLength;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      speeds[i] = 1.0 + Math.random() * 2.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Material with circular points
    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Light streaks (hyperspeed lines)
    const lineCount = 80;
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 6);
    const lineColors = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * (options.tunnelRadius - 2);
      const z = -Math.random() * options.tunnelLength;
      const length = 20 + Math.random() * 60;

      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;

      // Start
      linePositions[i * 6] = x;
      linePositions[i * 6 + 1] = y;
      linePositions[i * 6 + 2] = z;

      // End
      linePositions[i * 6 + 3] = x;
      linePositions[i * 6 + 4] = y;
      linePositions[i * 6 + 5] = z - length;

      const c = colorChoices[i % colorChoices.length];
      lineColors[i * 6] = c.r;
      lineColors[i * 6 + 1] = c.g;
      lineColors[i * 6 + 2] = c.b;
      lineColors[i * 6 + 3] = c.r * 0.1;
      lineColors[i * 6 + 4] = c.g * 0.1;
      lineColors[i * 6 + 5] = c.b * 0.1;
    }

    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let speedBoost = 1.0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Camera lerp towards mouse
      targetCameraX += (mouseX * 1.5 - targetCameraX) * 0.05;
      targetCameraY += (-mouseY * 1.5 - targetCameraY) * 0.05;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.rotation.z += 0.0008;

      // Move particle stars forward
      const pos = geometry.attributes.position.array as Float32Array;
      const effectiveSpeed = options.speed * speedBoost * 3.5;

      for (let i = 0; i < count; i++) {
        pos[i * 3 + 2] += speeds[i] * effectiveSpeed;
        if (pos[i * 3 + 2] > 10) {
          pos[i * 3 + 2] = -options.tunnelLength;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Move lines forward
      const lPos = lineGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < lineCount; i++) {
        lPos[i * 6 + 2] += effectiveSpeed * 2.2;
        lPos[i * 6 + 5] += effectiveSpeed * 2.2;
        if (lPos[i * 6 + 2] > 20) {
          const newZ = -options.tunnelLength;
          const len = Math.abs(lPos[i * 6 + 2] - lPos[i * 6 + 5]);
          lPos[i * 6 + 2] = newZ;
          lPos[i * 6 + 5] = newZ - len;
        }
      }
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, [options]);

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] overflow-hidden rounded-3xl bg-[#0a0a0a] border border-zinc-800 select-none">
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-auto" />

      {/* Subtle vignette scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60 pointer-events-none z-10" />

      {/* Centered Editorial Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 sm:p-12 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 backdrop-blur-md text-[#F27D26] text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-6 pointer-events-auto shadow-lg">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '14s' }} />
          <span>EXPEDITION VECTOR · UNMAPPED REALMS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9] max-w-3xl drop-shadow-2xl">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mt-4 leading-relaxed drop-shadow">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black text-xs font-mono tracking-widest uppercase transition-all transform active:scale-95 shadow-xl shadow-[#F27D26]/30 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
