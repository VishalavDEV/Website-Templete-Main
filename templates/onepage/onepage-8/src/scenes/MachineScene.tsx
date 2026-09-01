import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../utils/webgl';
import { CursorState } from '../types';

interface MachineSceneProps {
  scrollProgress: number;
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onMachineSound: (phase: number) => void;
}

export const MachineScene: React.FC<MachineSceneProps> = ({
  scrollProgress,
  setCursorState,
  onHoverSound,
  onMachineSound,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualPhase, setManualPhase] = useState<number | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const machineGroupRef = useRef<THREE.Group | null>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const streamParticlesRef = useRef<THREE.Points | null>(null);
  const lasersRef = useRef<THREE.LineSegments | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Derive current machine phase (0 to 4)
  const effectivePhase =
    manualPhase !== null
      ? manualPhase
      : Math.min(4, Math.max(0, Math.floor(scrollProgress * 5)));

  const phases = [
    { label: '0% DORMANT', desc: 'Core idling at nominal baseline frequency (4.2 Hz).', color: '#38bdf8' },
    { label: '25% ACTIVATING', desc: 'Quantum orbital rings aligning along magnetic flux lines.', color: '#06b6d4' },
    { label: '50% PROCESSING', desc: 'Spatio-temporal neural weight streaming initialized.', color: '#818cf8' },
    { label: '75% INTELLIGENCE FORMING', desc: 'Synaptic cross-attention resonance achieved.', color: '#a855f7' },
    { label: '100% FULLY ACTIVATED', desc: 'Singularity operational. Continuous inference unlocked.', color: '#22c55e' },
  ];

  useEffect(() => {
    if (!isWebGLAvailable()) return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambient);

    const cyanLight = new THREE.PointLight(0x06b6d4, 6, 20);
    cyanLight.position.set(3, 4, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 5, 20);
    purpleLight.position.set(-4, -3, -2);
    scene.add(purpleLight);

    const machineGroup = new THREE.Group();
    machineGroupRef.current = machineGroup;
    scene.add(machineGroup);

    // 1. Central Quantum Core (Octahedron Lattice)
    const coreGeo = new THREE.OctahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    coreRef.current = core;
    machineGroup.add(core);

    // 2. Multi-tier Counter-Rotating Mechanical Rings
    const ringMeshes: THREE.Mesh[] = [];
    const ringRadii = [2.0, 2.7, 3.4, 4.1];

    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.TorusGeometry(r, 0.04 + idx * 0.015, 16, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0x38bdf8 : 0xa855f7,
        emissive: idx % 2 === 0 ? 0x0284c7 : 0x7e22ce,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.85,
        wireframe: idx === 1 || idx === 3,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 4 + idx * 0.35;
      ringMesh.rotation.y = (Math.PI / 3) * idx;
      machineGroup.add(ringMesh);
      ringMeshes.push(ringMesh);
    });
    ringsRef.current = ringMeshes;

    // 3. Glowing Laser Data Streams
    const laserCount = 36;
    const laserGeo = new THREE.BufferGeometry();
    const laserPos = new Float32Array(laserCount * 6);
    for (let i = 0; i < laserCount; i++) {
      laserPos[i * 6] = 0;
      laserPos[i * 6 + 1] = 0;
      laserPos[i * 6 + 2] = 0;

      const angle = (i / laserCount) * Math.PI * 2;
      const rad = 3.5;
      laserPos[i * 6 + 3] = Math.cos(angle) * rad;
      laserPos[i * 6 + 4] = Math.sin(angle) * rad;
      laserPos[i * 6 + 5] = (Math.random() - 0.5) * 2;
    }
    laserGeo.setAttribute('position', new THREE.BufferAttribute(laserPos, 3));
    const laserMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
    });
    const lasers = new THREE.LineSegments(laserGeo, laserMat);
    lasersRef.current = lasers;
    machineGroup.add(lasers);

    // 4. Data Particle Vortex Streams
    const pCount = 800;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const radius = 1.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      pPos[i * 3] = Math.cos(theta) * radius;
      pPos[i * 3 + 1] = Math.sin(theta) * radius;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const streamParticles = new THREE.Points(pGeo, pMat);
    streamParticlesRef.current = streamParticles;
    machineGroup.add(streamParticles);

    // Resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let clock = new THREE.Clock();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotation multiplier depends on active phase (1x to 5x)
      const currentPhaseMultiplier = 1 + effectivePhase * 0.8;

      if (coreRef.current) {
        coreRef.current.rotation.y = elapsed * 0.4 * currentPhaseMultiplier;
        coreRef.current.rotation.x = elapsed * 0.3 * currentPhaseMultiplier;
      }

      ringsRef.current.forEach((ring, idx) => {
        const dir = idx % 2 === 0 ? 1 : -1;
        ring.rotation.z += 0.008 * dir * (idx + 1) * currentPhaseMultiplier;
        ring.rotation.y += 0.004 * (idx + 1);
      });

      if (lasersRef.current) {
        lasersRef.current.rotation.z = -elapsed * 0.2 * currentPhaseMultiplier;
      }

      if (streamParticlesRef.current) {
        streamParticlesRef.current.rotation.z = elapsed * 0.3 * currentPhaseMultiplier;
      }

      if (machineGroupRef.current) {
        machineGroupRef.current.rotation.y = Math.sin(elapsed * 0.15) * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
    };
  }, [effectivePhase]);

  const handleSelectPhase = (idx: number) => {
    setManualPhase(idx);
    onMachineSound(idx);
  };

  return (
    <div className="relative w-full rounded-2xl glass-panel-glow border border-cyan-500/30 overflow-hidden min-h-[550px] md:min-h-[640px] flex flex-col md:flex-row items-center">
      {/* 3D Canvas Canvas Left/Center */}
      <div
        ref={containerRef}
        id="the-machine-canvas-container"
        onMouseEnter={() => {
          onHoverSound();
          setCursorState({ variant: 'interact', text: 'MACHINE' });
        }}
        onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
        className="w-full md:w-3/5 h-[360px] md:h-[640px] relative"
      />

      {/* Control Telemetry & Phase Selectors Right */}
      <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>KINETIC CORE TELEMETRY</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight uppercase">
            THE MACHINE
          </h3>
          <p className="text-sm text-slate-400 mt-2 font-body leading-relaxed">
            The neural computation core orchestrating data ingestion, tensor graph transformations, and inference quantization.
          </p>

          {/* Current Phase Readout */}
          <div className="mt-6 p-4 rounded-xl bg-[#070b12]/90 border border-slate-800">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-slate-400 uppercase">CURRENT STATE</span>
              <span className="font-bold text-cyan-300">{phases[effectivePhase].label}</span>
            </div>
            <p className="text-xs text-slate-300 mt-2 font-mono">
              {phases[effectivePhase].desc}
            </p>
          </div>
        </div>

        {/* Interactive Phase Selectors */}
        <div className="mt-8 space-y-2">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            OVERRIDE RESONANCE FREQUENCY:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {phases.map((p, idx) => {
              const isCurrent = effectivePhase === idx;
              return (
                <button
                  key={p.label}
                  onClick={() => handleSelectPhase(idx)}
                  onMouseEnter={onHoverSound}
                  className={`px-3 py-2 rounded-lg font-mono text-[11px] font-semibold border transition-all text-left truncate ${
                    isCurrent
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {p.label.split(' ')[0]} {p.label.split(' ')[1]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
