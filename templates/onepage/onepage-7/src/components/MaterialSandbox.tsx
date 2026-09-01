import React from 'react';
import { MaterialConfig } from '../types';
import { Sliders, Copy, Check, RotateCcw, Sparkles, Eye } from 'lucide-react';

interface MaterialSandboxProps {
  config: MaterialConfig;
  onChange: (config: MaterialConfig) => void;
  fps: number;
}

export const MaterialSandbox: React.FC<MaterialSandboxProps> = ({ config, onChange, fps }) => {
  const [copied, setCopied] = React.useState(false);

  const resetDefaults = () => {
    onChange({
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.92,
      ior: 1.52,
      thickness: 1.4,
      chromaticAberration: 0.04,
      distortion: 0.28,
      wireframe: false,
      colorScheme: 'obsidian',
      speed: 1.0,
      audioReactivity: 1.0,
    });
  };

  const copyCode = () => {
    const code = `// Fonix Acoustic Core — Three.js Material Spec (PRD-Compliant)
const outerCageMaterial = new THREE.MeshPhysicalMaterial({
  color: ${config.colorScheme === 'luminescence' ? '0x5eead4' : config.colorScheme === 'nebula' ? '0x818cf8' : config.colorScheme === 'solar' ? '0xf59e0b' : '0xffffff'},
  roughness: ${config.roughness},
  metalness: ${config.metalness},
  transmission: ${config.transmission},
  ior: ${config.ior},
  thickness: ${config.thickness},
  transparent: true,
  opacity: 0.88,
  wireframe: ${config.wireframe},
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
});

// Vertex Shader Wave Deformation
// Amplitude: ${config.distortion} | Temporal Speed: ${config.speed}x`;

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="material-sandbox-panel" className="bg-[#050505]/85 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(45,212,191,0.12)] text-zinc-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-500/10 border border-teal-400/30 rounded-xl text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base tracking-tight">3D Shader & Physics Sandbox</h3>
            <p className="text-xs text-zinc-400 font-mono tracking-wide">Live PRD Material Calibration & WebGL Telemetry</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 rounded-full border border-white/15 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse" />
            <span className="text-zinc-300">{fps || 60} FPS</span>
          </div>
          <button
            onClick={resetDefaults}
            title="Reset to PRD Spec"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-transparent hover:border-white/10"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Transmission */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Optical Transmission</span>
            <span className="font-mono text-teal-400 font-semibold">{config.transmission.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={config.transmission}
            onChange={(e) => onChange({ ...config, transmission: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 0.92 (Flint Glass)</span>
        </div>

        {/* Index of Refraction (IOR) */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Refraction Index (IOR)</span>
            <span className="font-mono text-teal-400 font-semibold">{config.ior.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="2.4"
            step="0.01"
            value={config.ior}
            onChange={(e) => onChange({ ...config, ior: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 1.48 - 1.54</span>
        </div>

        {/* Roughness */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Surface Roughness</span>
            <span className="font-mono text-teal-400 font-semibold">{config.roughness.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.01"
            value={config.roughness}
            onChange={(e) => onChange({ ...config, roughness: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 0.08 - 0.18</span>
        </div>

        {/* Harmonic Distortion Amplitude */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Acoustic Wave Amplitude</span>
            <span className="font-mono text-teal-400 font-semibold">{config.distortion.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.05"
            max="0.8"
            step="0.01"
            value={config.distortion}
            onChange={(e) => onChange({ ...config, distortion: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 0.28 (Harmonic Fluidity)</span>
        </div>

        {/* Kinetic Rotation Speed */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Kinetic Velocity Speed</span>
            <span className="font-mono text-teal-400 font-semibold">{config.speed.toFixed(2)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={config.speed}
            onChange={(e) => onChange({ ...config, speed: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 1.0x (432Hz baseline)</span>
        </div>

        {/* Thickness */}
        <div className="space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-300 font-medium tracking-wide">Volumetric Depth (Thickness)</span>
            <span className="font-mono text-teal-400 font-semibold">{config.thickness.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={config.thickness}
            onChange={(e) => onChange({ ...config, thickness: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <span className="text-[11px] font-mono text-zinc-500 block">PRD Spec: 1.40</span>
        </div>
      </div>

      {/* Color Schemes & Toggles */}
      <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400 font-mono tracking-wider mr-1">Lighting Spectrum:</span>
          {(['obsidian', 'luminescence', 'nebula', 'solar'] as const).map((scheme) => (
            <button
              key={scheme}
              onClick={() => onChange({ ...config, colorScheme: scheme })}
              className={`px-3 py-1.5 text-xs rounded-xl font-medium capitalize tracking-wide transition-all ${
                config.colorScheme === scheme
                  ? 'bg-teal-500/20 border border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.25)]'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 border border-white/10'
              }`}
            >
              {scheme}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer select-none font-mono">
            <input
              type="checkbox"
              checked={config.wireframe}
              onChange={(e) => onChange({ ...config, wireframe: e.target.checked })}
              className="rounded border-white/20 bg-black text-teal-400 focus:ring-0"
            />
            <span>Wireframe Mesh</span>
          </label>

          <button
            onClick={copyCode}
            id="copy-threejs-spec-button"
            className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-100 hover:text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Three.js Spec' : 'Export Three.js Shader'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
