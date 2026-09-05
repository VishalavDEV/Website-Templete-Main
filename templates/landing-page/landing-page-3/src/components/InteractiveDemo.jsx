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
    costPerMillion: '₹3.20',
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
      costPerMillion: `₹${(3.20 * (batchSize / 16)).toFixed(2)}`,
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
          className="glass-panel-elevated demo-card-container"
          style={{
            padding: 'clamp(20px, 4vw, 36px)',
            border: '1px solid rgba(0, 229, 255, 0.35)',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 229, 255, 0.15)',
            borderRadius: '28px',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          {/* Controls Bar */}
          <div
            className="demo-controls-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '28px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Model Architecture Selector */}
            <div style={{ width: '100%', minWidth: 0 }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
                1. SELECT NEURAL ARCHITECTURE
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '4px',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: selectedModel.id === model.id ? 'rgba(0, 229, 255, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                      border: selectedModel.id === model.id ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.06)',
                      color: selectedModel.id === model.id ? '#FFFFFF' : 'var(--text-secondary)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span>{model.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)' }}>{model.speed}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Batch Size & Prompt Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', minWidth: 0 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
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
                    marginBottom: '16px',
                    boxSizing: 'border-box',
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
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: 'rgba(8, 12, 22, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '0.86rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                  }}
                >
                  {PRESET_PROMPTS.map((prompt, idx) => (
                    <option key={idx} value={prompt}>
                      {prompt}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: '16px' }}>
                <button
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="btn-primary"
                  style={{ width: '100%', padding: '13px', borderRadius: '12px', fontSize: '0.94rem' }}
                >
                  <Play size={16} fill="currentColor" />
                  <span>{isRunning ? 'Synthesizing Stream...' : 'Trigger Neural Inference'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Telemetry Output & Live Terminal */}
          <div
            className="demo-telemetry-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Live Metrics Grid */}
            <div className="demo-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '14px', width: '100%' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.22)', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>REAL-TIME LATENCY</div>
                <div style={{ fontSize: 'clamp(1.3rem, 3.2vw, 1.65rem)', fontWeight: 800, color: 'var(--neon-cyan)', marginTop: '4px' }}>{telemetry.latency} ms</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', marginTop: '4px' }}>↓ 89% vs AWS g5</div>
              </div>

              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(138, 43, 226, 0.05)', border: '1px solid rgba(138, 43, 226, 0.22)', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EFFECTIVE TFLOPS</div>
                <div style={{ fontSize: 'clamp(1.3rem, 3.2vw, 1.65rem)', fontWeight: 800, color: '#8A2BE2', marginTop: '4px' }}>{telemetry.tflops}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--neon-cyan)', marginTop: '4px' }}>FP8 Precision Active</div>
              </div>

              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(0, 255, 163, 0.05)', border: '1px solid rgba(0, 255, 163, 0.22)', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>THROUGHPUT</div>
                <div style={{ fontSize: 'clamp(1.3rem, 3.2vw, 1.65rem)', fontWeight: 800, color: 'var(--neon-emerald)', marginTop: '4px' }}>
                  {(telemetry.tokensPerSec / 1000).toFixed(0)}k <span style={{ fontSize: '0.82rem' }}>tok/s</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Stream Parallelism</div>
              </div>

              <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EST. INFERENCE COST</div>
                <div style={{ fontSize: 'clamp(1.3rem, 3.2vw, 1.65rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>{telemetry.costPerMillion}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', marginTop: '4px' }}>Per 1M Tokens</div>
              </div>
            </div>

            {/* Terminal Stream Display */}
            <div
              className="demo-terminal-box"
              style={{
                borderRadius: '18px',
                background: '#040508',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={14} color="var(--neon-cyan)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.76rem', fontWeight: 600 }}>LIVE TOKEN STREAM</span>
                </div>
                <span style={{ color: isRunning ? 'var(--neon-emerald)' : 'var(--text-muted)', fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
                  {isRunning ? '● ACTIVE' : '✓ COMPLETE'}
                </span>
              </div>

              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere',
                  color: '#00E5FF',
                  margin: '12px 0',
                  lineHeight: 1.5,
                  fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                  flex: 1,
                  maxWidth: '100%',
                  overflowX: 'auto',
                }}
              >
                {streamedTokens}
                {isRunning && <span className="animate-pulse" style={{ color: '#00FFA3' }}> ▋</span>}
              </pre>

              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                Instruction: "{activePrompt.substring(0, 40)}..."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
