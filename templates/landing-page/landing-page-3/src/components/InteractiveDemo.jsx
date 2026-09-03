import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Cpu, 
  Zap, 
  Terminal, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const MODELS = [
  { id: 'spatial-70b', name: 'Synapse-Spatial 70B', baseTflops: 840, baseLatency: 0.42, speed: 'Superfast' },
  { id: 'omni-vision', name: 'Synapse-OmniVision 34B', baseTflops: 620, baseLatency: 0.38, speed: 'Ultra-Low Latency' },
  { id: 'quantum-core', name: 'Synapse-Quantum-MoE 120B', baseTflops: 1450, baseLatency: 0.65, speed: 'Max Precision' },
];

const PRESET_PROMPTS = [
  'Synthesize 6-DoF spatial collision map for autonomous warehouse swarm.',
  'Optimize real-time NeRF radiance field stream at 120 FPS 4K.',
  'Distribute tensor weights across 8 global NVLink clusters with zero packet loss.',
];

export default function InteractiveDemo({ onShowToast }) {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [batchSize, setBatchSize] = useState(16);
  const [activePrompt, setActivePrompt] = useState(PRESET_PROMPTS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [streamedTokens, setStreamedTokens] = useState('');
  const [telemetry, setTelemetry] = useState({
    latency: selectedModel.baseLatency,
    tflops: selectedModel.baseTflops,
    tokensPerSec: 142000,
    costPerMillion: '$0.04',
  });

  const runSimulation = () => {
    setIsRunning(true);
    setStreamedTokens('');

    // Dynamic calculated metrics based on sliders
    const latencyCalc = (selectedModel.baseLatency * (1 + (batchSize - 1) * 0.03)).toFixed(2);
    const tflopsCalc = Math.round(selectedModel.baseTflops * (batchSize / 16));
    const tokensSecCalc = Math.round((142000 * (batchSize / 16)) / (latencyCalc / 0.42));

    setTelemetry({
      latency: latencyCalc,
      tflops: tflopsCalc,
      tokensPerSec: tokensSecCalc,
      costPerMillion: `$${(0.04 * (batchSize / 16)).toFixed(3)}`,
    });

    const fullResponse = `[SYNAPSE-KERNEL // STREAM INITIALIZED]
>> Allocating pooled NVLink cluster across ${batchSize} virtual tensor instances...
>> Spatial geometry synthesized: 1,024,800 vertices processed.
>> Ray-marched SLAM coordinates: x: +42.189, y: -18.231, z: +104.992
>> Status: 0 packet drops | Execution completed in ${latencyCalc}ms.
[INFERENCE PASS READY]`;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullResponse.length) {
        setStreamedTokens(fullResponse.substring(0, currentIndex));
        currentIndex += 4;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        // Delight micro-interaction
        confetti({
          particleCount: 45,
          spread: 65,
          origin: { y: 0.8 },
          colors: ['#00E5FF', '#8A2BE2', '#00FFA3']
        });
        if (onShowToast) {
          onShowToast(`⚡ Simulation completed in ${latencyCalc}ms!`);
        }
      }
    }, 18);
  };

  useEffect(() => {
    // Initial short preview
    runSimulation();
  }, [selectedModel]);

  return (
    <section id="playground" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>REAL-TIME INFERENCE SIMULATOR</span>
          </div>
          <h2 className="section-title">
            Test Drive the <br />
            <span className="text-gradient-cyan">Live Neural Playground</span>
          </h2>
          <p className="section-description">
            Experience the real-time execution speeds of Synapse edge nodes. Adjust parameters, select spatial models, and benchmark compute performance in real time.
          </p>
        </motion.div>

        {/* Playground Container */}
        <div
          className="glass-panel-elevated"
          style={{
            padding: '36px',
            border: '1px solid rgba(0, 229, 255, 0.35)',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 229, 255, 0.15)',
            borderRadius: '28px',
          }}
        >
          {/* Controls Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              paddingBottom: '28px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '32px',
            }}
          >
            {/* Model Architecture Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
                1. SELECT NEURAL ARCHITECTURE
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: selectedModel.id === model.id ? 'rgba(0, 229, 255, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                      border: selectedModel.id === model.id ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.06)',
                      color: selectedModel.id === model.id ? '#FFFFFF' : 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <span>{model.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)' }}>{model.speed}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Batch Size & Prompt Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    2. CONCURRENT BATCH SIZE
                  </label>
                  <span style={{ fontSize: '0.86rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    {batchSize} Threads
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="64"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--neon-cyan)',
                    cursor: 'pointer',
                    marginBottom: '18px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  3. TEST PROMPT INSTRUCTION
                </label>
                <select
                  value={activePrompt}
                  onChange={(e) => setActivePrompt(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(8, 12, 22, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                >
                  {PRESET_PROMPTS.map((prompt, idx) => (
                    <option key={idx} value={prompt}>
                      {prompt}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: '18px' }}>
                <button
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', borderRadius: '12px' }}
                >
                  <Play size={16} fill="currentColor" />
                  <span>{isRunning ? 'Synthesizing Stream...' : 'Trigger Neural Inference'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Telemetry Output & Live Terminal */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Live Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.22)' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>REAL-TIME LATENCY</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--neon-cyan)', marginTop: '4px' }}>{telemetry.latency} ms</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--neon-emerald)', marginTop: '4px' }}>↓ 89% vs AWS g5</div>
              </div>

              <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(138, 43, 226, 0.05)', border: '1px solid rgba(138, 43, 226, 0.22)' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EFFECTIVE TFLOPS</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#8A2BE2', marginTop: '4px' }}>{telemetry.tflops}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--neon-cyan)', marginTop: '4px' }}>FP8 Precision Active</div>
              </div>

              <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 255, 163, 0.05)', border: '1px solid rgba(0, 255, 163, 0.22)' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>THROUGHPUT</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--neon-emerald)', marginTop: '4px' }}>
                  {(telemetry.tokensPerSec / 1000).toFixed(0)}k <span style={{ fontSize: '0.9rem' }}>tok/s</span>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Stream Parallelism</div>
              </div>

              <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EST. INFERENCE COST</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>{telemetry.costPerMillion}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--neon-emerald)', marginTop: '4px' }}>Per 1M Tokens</div>
              </div>
            </div>

            {/* Terminal Stream Display */}
            <div
              style={{
                borderRadius: '18px',
                background: '#040508',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                minHeight: '210px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={14} color="var(--neon-cyan)" />
                  <span style={{ color: 'var(--text-secondary)' }}>LIVE TOKEN STREAM</span>
                </div>
                <span style={{ color: isRunning ? 'var(--neon-emerald)' : 'var(--text-muted)', fontSize: '0.74rem' }}>
                  {isRunning ? '● ACTIVE STREAM' : '✓ COMPLETE'}
                </span>
              </div>

              <pre style={{ whiteSpace: 'pre-wrap', color: '#00E5FF', margin: '12px 0', lineHeight: 1.55, flex: 1 }}>
                {streamedTokens}
                {isRunning && <span className="animate-pulse" style={{ color: '#00FFA3' }}> ▋</span>}
              </pre>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Instruction: "{activePrompt.substring(0, 45)}..."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
