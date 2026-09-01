import React, { useState, useEffect } from 'react';
import { MaterialConfig } from '../types';
import { FonixCanvas3D } from './FonixCanvas3D';
import { MaterialSandbox } from './MaterialSandbox';
import { audioEngine } from '../utils/audioEngine';
import { 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Sparkles, 
  Radio, 
  Layers, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Code2, 
  Copy, 
  Check, 
  Sliders, 
  Terminal,
  Activity,
  Maximize2
} from 'lucide-react';

interface LiveWebsiteProps {
  onOpenPRD: () => void;
  materialConfig: MaterialConfig;
  onMaterialChange: (cfg: MaterialConfig) => void;
}

export const LiveWebsite: React.FC<LiveWebsiteProps> = ({
  onOpenPRD,
  materialConfig,
  onMaterialChange,
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [fps, setFps] = useState<number>(60);
  const [activeTabCode, setActiveTabCode] = useState<'ts' | 'cpp' | 'unreal'>('ts');
  const [copiedCode, setCopiedCode] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  // Track page scroll progress for 3D continuous spatial transformations
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = audioEngine.toggle();
    setIsAudioActive(active);
    onMaterialChange({
      ...materialConfig,
      audioReactivity: active ? 2.2 : 1.0,
      speed: active ? 1.4 : 1.0,
    });
  };

  const handleCopyCode = () => {
    const snippets = {
      ts: `import { FonixSpatialEngine } from '@fonix/spatial-core';

// Initialize 64-channel 432Hz acoustic pipeline
const engine = new FonixSpatialEngine({
  sampleRate: 48000,
  latencyMode: 'ultra-low', // 0.8ms
  dispersionRefraction: 1.52,
  spatialResolution: 64,
});

await engine.bindAudioContext(audioCtx);
engine.synthesizeKineticResonance();`,
      cpp: `#include <fonix/spatial_dsp.hpp>

fonix::SpatialPipeline pipeline(48000, 64);
pipeline.set_viscoelastic_damping(0.05f);
pipeline.process_multichannel_stream(input_buffer, output_buffer);`,
      unreal: `// Unreal Engine 5 Fonix Spatial Node
UFonixSpatialSubsystem* FonixAudio = GEngine->GetEngineSubsystem<UFonixSpatialSubsystem>();
FonixAudio->EnableHarmonicDiffraction(EChromaticModel::FlintGlass);`
    };

    navigator.clipboard.writeText(snippets[activeTabCode]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.includes('@')) return;
    setEmailSubmitted(true);
  };

  return (
    <div id="fonix-live-website-root" className="relative min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-teal-500/30 selection:text-teal-200">
      {/* 1. Global Persistent 3D WebGL Background Canvas with Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FonixCanvas3D
          scrollProgress={scrollProgress}
          materialConfig={materialConfig}
          onFpsUpdate={setFps}
        />
        {/* Immersive UI Ambient Blurs & Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-950/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/30 to-[#050505]/85 pointer-events-none" />
      </div>

      {/* 2. Top Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-3xl bg-[#050505]/75 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 via-teal-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              <Radio className="w-4 h-4 text-black font-bold" />
            </div>
            <span className="font-extrabold text-lg tracking-wider text-white uppercase">
              fonix<span className="text-teal-400">.</span>
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/15 text-[10px] font-mono tracking-widest uppercase text-teal-300">
              Acoustic 3D Engine
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Drone Toggle */}
            <button
              onClick={toggleAudio}
              id="audio-drone-toggle-btn"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                isAudioActive
                  ? 'bg-teal-500/20 border border-teal-400 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] animate-pulse'
                  : 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-zinc-300'
              }`}
            >
              {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-teal-400" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-400" />}
              <span className="hidden md:inline">{isAudioActive ? '432Hz Sound Active' : 'Enable 432Hz Audio'}</span>
            </button>

            {/* Inspect PRD Spec Button */}
            <button
              onClick={onOpenPRD}
              id="open-prd-spec-nav-btn"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspect PRD Spec</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Section 1: Hero — The Sonic Monolith */}
      <section id="hero-section" className="relative z-10 min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-400/30 rounded-full text-xs font-mono tracking-[0.2em] uppercase text-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.15)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Next-Generation Acoustic Intelligence & Spatial Synthesis</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sound rendered as <br />
            <span className="bg-gradient-to-r from-teal-300 via-teal-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(45,212,191,0.25)]">
              viscoelastic geometry.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Fonix fuses optical flint glass caustics with sub-millisecond DSP spatial audio. Experience real-time acoustic physics in a seamless 3D WebGL continuum.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#architecture-section"
              className="flex items-center gap-2 px-7 py-3.5 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-2xl text-sm shadow-[0_0_30px_rgba(45,212,191,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Engine Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#resonance-lab-section"
              className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white font-medium rounded-2xl text-sm transition-all hover:scale-105 backdrop-blur-xl"
            >
              <Sliders className="w-4 h-4 text-teal-400" />
              <span>Interactive Shader Lab</span>
            </a>
          </div>

          {/* Telemetry Bar */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono tracking-wider">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
              <span>WebGL 2.0: Active ({fps} FPS)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span>Refraction IOR: {materialConfig.ior}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <span>Phase Coherence: 99.98%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 2: Core Architecture — Exploded 3D Core */}
      <section id="architecture-section" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full">
            Section 02 // Spatial Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Three Pillars of Fonix Acoustic Physics
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            As you navigate, the 3D monolith separates into its core computational layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 0,
              icon: Layers,
              title: "Neural Acoustic Mesh",
              tag: "Layer 01 // Diffraction",
              desc: "Simulates real-time binaural occlusion and volumetric reverberation using custom GLSL compute shaders.",
              specs: "64-channel Ray Diffraction • 0.8ms latency"
            },
            {
              id: 1,
              icon: Cpu,
              title: "Zero-Latency DSP Kernel",
              tag: "Layer 02 // Harmonic DSP",
              desc: "Transforms standard polyphonic audio streams into viscoelastic spatial vectors with 432Hz harmonic alignment.",
              specs: "48kHz / 24-bit float • WebAssembly SIMD"
            },
            {
              id: 2,
              icon: Zap,
              title: "Optical Dispersion Shader",
              tag: "Layer 03 // Caustic Glass",
              desc: "Renders physical flint glass refraction with three-channel RGB wavelength separation and internal specular caustics.",
              specs: "Abbe Number 32.4 • 0.92 Optical Transmission"
            }
          ].map((card) => {
            const Icon = card.icon;
            const isSelected = activeLayer === card.id;
            return (
              <div
                key={card.id}
                onClick={() => {
                  setActiveLayer(card.id);
                  onMaterialChange({
                    ...materialConfig,
                    distortion: card.id === 0 ? 0.45 : card.id === 1 ? 0.28 : 0.15,
                    colorScheme: card.id === 0 ? 'luminescence' : card.id === 1 ? 'nebula' : 'solar',
                  });
                }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-2xl ${
                  isSelected
                    ? 'bg-white/[0.08] border-teal-400 shadow-[0_0_40px_rgba(45,212,191,0.2)] scale-[1.02]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-teal-500/20 text-teal-300' : 'bg-white/[0.06] text-zinc-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-zinc-500">{card.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{card.desc}</p>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-teal-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{card.specs}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Section 3: Telemetry & Spatial Benchmarks */}
      <section id="telemetry-section" className="relative z-10 py-20 bg-[#050505]/90 backdrop-blur-3xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]">0.8ms</span>
              <p className="text-xs font-semibold text-white uppercase tracking-widest">DSP Latency</p>
              <p className="text-[11px] text-zinc-500 font-mono">Real-time kernel processing</p>
            </div>
            <div className="space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">64 Ch</span>
              <p className="text-xs font-semibold text-white uppercase tracking-widest">Spatial Channels</p>
              <p className="text-[11px] text-zinc-500 font-mono">Full 360° spherical field</p>
            </div>
            <div className="space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">99.98%</span>
              <p className="text-xs font-semibold text-white uppercase tracking-widest">Phase Coherence</p>
              <p className="text-[11px] text-zinc-500 font-mono">Zero harmonic cancellation</p>
            </div>
            <div className="space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-teal-300 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]">60 FPS</span>
              <p className="text-xs font-semibold text-white uppercase tracking-widest">Locked 3D Pipeline</p>
              <p className="text-[11px] text-zinc-500 font-mono">&lt;11ms GPU frame budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 4: Interactive Resonance Laboratory */}
      <section id="resonance-lab-section" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full">
            Section 04 // Interactive Calibration Lab
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Live 3D Material & Physics Sandbox
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Tweak refractive transmission, IOR, harmonic wave amplitude, and velocity in real-time. Export the exact Three.js configuration.
          </p>
        </div>

        <MaterialSandbox
          config={materialConfig}
          onChange={onMaterialChange}
          fps={fps}
        />
      </section>

      {/* 7. Section 5: Developer SDK & Ecosystem */}
      <section id="developer-section" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="px-3.5 py-1 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full">
              Section 05 // Integration Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              One Unified API for Web, Native & XR Environments
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Integrate Fonix's viscoelastic sound engine directly into your React, Three.js, C++, or Unreal Engine 5 pipelines with minimal computational footprint.
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Zero runtime asset downloads — 100% procedural WebGL</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Multi-threaded WebAudio / WebWorker DSP calculations</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Native spatial audio support for Apple VisionOS & Meta Quest 3</span>
              </div>
            </div>
          </div>

          {/* Code Window */}
          <div className="bg-black/90 border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-teal-400/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400">fonix-pipeline.ts</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-black/60 p-0.5 rounded-lg border border-white/10 text-[11px]">
                  {(['ts', 'cpp', 'unreal'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTabCode(tab)}
                      className={`px-2.5 py-1 rounded-md uppercase font-mono transition-colors ${
                        activeTabCode === tab ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-4 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed bg-[#050505]/70">
              <pre className="text-teal-300">
                {activeTabCode === 'ts' && `import { FonixSpatialEngine } from '@fonix/spatial-core';

// Initialize 64-channel 432Hz acoustic pipeline
const engine = new FonixSpatialEngine({
  sampleRate: 48000,
  latencyMode: 'ultra-low', // 0.8ms
  dispersionRefraction: 1.52,
  spatialResolution: 64,
});

await engine.bindAudioContext(audioCtx);
engine.synthesizeKineticResonance();`}
                {activeTabCode === 'cpp' && `#include <fonix/spatial_dsp.hpp>

fonix::SpatialPipeline pipeline(48000, 64);
pipeline.set_viscoelastic_damping(0.05f);
pipeline.process_multichannel_stream(input_buffer, output_buffer);`}
                {activeTabCode === 'unreal' && `// Unreal Engine 5 Fonix Spatial Node
UFonixSpatialSubsystem* FonixAudio = 
  GEngine->GetEngineSubsystem<UFonixSpatialSubsystem>();

FonixAudio->EnableHarmonicDiffraction(
  EChromaticModel::FlintGlass
);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 6: Quantum Singularity CTA */}
      <section id="cta-section" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-white/[0.03] border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-3xl shadow-[0_0_80px_rgba(45,212,191,0.1)] space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-teal-500/10 border border-teal-400/30 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build with Fonix Spatial Intelligence?
          </h2>

          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Join leading acoustic studios, game architects, and spatial hardware developers pioneering the future of 3D audio.
          </p>

          {emailSubmitted ? (
            <div className="p-4 bg-teal-500/10 border border-teal-400/30 rounded-2xl text-teal-300 text-sm font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>Access key dispatched. Check your inbox for the developer SDK bundle.</span>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter enterprise email..."
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-400/60 transition-colors"
              />
              <button
                type="submit"
                id="request-developer-access-btn"
                className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                Request SDK
              </button>
            </form>
          )}

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={onOpenPRD}
              className="text-teal-400 hover:text-teal-300 font-medium underline underline-offset-4 tracking-wide"
            >
              Read full AI Studio PRD Specification →
            </button>
          </div>
        </div>
      </section>

      {/* 9. Minimalist Brand Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#030303] py-12 px-4 sm:px-6 lg:px-8 text-zinc-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-widest">FONIX</span>
            <span>— Spatial Sound Synthesis & Computational 3D Architecture</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>v1.0.0-PROD</span>
            <span>•</span>
            <span>WebGL 2.0 Physical Shaders</span>
            <span>•</span>
            <span>© 2026 Fonix Acoustic Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
