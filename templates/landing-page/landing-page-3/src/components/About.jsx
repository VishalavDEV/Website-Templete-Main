import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Gauge, 
  ArrowUpRight,
  Orbit,
  CheckCircle2,
  Copy
} from 'lucide-react';

const ARCHITECTURE_TABS = [
  {
    id: 'neural-fabric',
    title: 'Cognitive Neural Fabric',
    icon: BrainCircuit,
    description: 'Dynamic neural routing automatically selects the lowest-latency edge GPU cluster across 250+ points of presence, achieving unprecedented sub-millisecond execution times.',
    metrics: [
      { label: 'Latency Reduction', value: '87%' },
      { label: 'Context Processing', value: '2.5M tok/s' },
      { label: 'Auto-Failover', value: '4ms' }
    ],
    codeSnippet: `// Instant Autonomous Neural Pipeline
import { SynapseCluster } from '@synapse/neural-sdk';

const cluster = new SynapseCluster({
  meshId: 'geo-auto-ultra',
  precision: 'fp8-dynamic',
  redundancy: 3
});

await cluster.spawnAutonomousNode({
  model: 'spatial-cognition-v3',
  targetLatencyMs: 0.5
});`
  },
  {
    id: 'spatial-engine',
    title: 'Spatial 3D Cognition',
    icon: Orbit,
    description: 'Real-time ray-traced spatial point clouds, SLAM synthesis, and neural radiance field processing powered by high-throughput matrix cores.',
    metrics: [
      { label: 'Point Cloud FPS', value: '240 FPS' },
      { label: 'Spatial Precision', value: '0.01mm' },
      { label: 'Pooled Bandwidth', value: '900 GB/s' }
    ],
    codeSnippet: `// 3D Spatial SLAM Synthesis
const spatialStream = synapse.spatial.createStream({
  depthSensors: ['lidar-primary', 'vision-stereo'],
  renderTarget: 'neural-radiance-v2'
});

spatialStream.onSpatialAnchor((anchor) => {
  console.log("Synthesized 3D mesh at:", anchor.coordinates);
});`
  },
  {
    id: 'quantum-security',
    title: 'Quantum-Resistant Enclave',
    icon: ShieldCheck,
    description: 'Zero-knowledge confidential computing enclaves with hardware-isolated memory encryption and post-quantum lattice cryptography.',
    metrics: [
      { label: 'Enclave Isolation', value: '100%' },
      { label: 'Key Rotation', value: 'Every 60s' },
      { label: 'Compliance Level', value: 'Military Spec' }
    ],
    codeSnippet: `// Confidential Zero-Knowledge Enclave
const enclave = await synapse.security.createEnclave({
  cryptography: 'lattice-kyber-1024',
  memoryIsolation: 'hardware-guaranteed'
});

const verifiedExecution = await enclave.runPrivateInference(weights);`
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState(ARCHITECTURE_TABS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-tag">
            <Sparkles size={14} />
            <span>DEEP ARCHITECTURAL BLUEPRINT</span>
          </div>
          <h2 className="section-title">
            Engineering the Infrastructure for <br className="hero-br" />
            <span className="text-gradient-cyan">Autonomous Synthetic Cognition</span>
          </h2>
          <p className="section-description">
            Traditional cloud platforms were never designed for real-time spatial cognition and continuous multi-agent inference. Synapse redesigns computing from silicon to global network edge.
          </p>
        </motion.div>

        {/* Split Interactive Showcase */}
        <div className="about-grid">
          {/* Left Column: Interactive Tab Selectors */}
          <div className="about-tabs-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', minWidth: 0 }}>
            {ARCHITECTURE_TABS.map((tab) => {
              const isSelected = activeTab.id === tab.id;
              const TabIcon = tab.icon;

              return (
                <motion.div
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`about-tab-card ${isSelected ? 'active' : ''}`}
                  style={{
                    background: isSelected ? 'rgba(15, 20, 36, 0.92)' : 'rgba(13, 17, 28, 0.5)',
                    border: isSelected ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isSelected ? '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.18)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="about-tab-header">
                    <div
                      className="about-tab-icon"
                      style={{
                        background: isSelected ? 'linear-gradient(135deg, #00E5FF, #8A2BE2)' : 'rgba(255, 255, 255, 0.05)',
                        color: isSelected ? '#040508' : '#00E5FF',
                        transition: 'all 0.3s ease',
                        boxShadow: isSelected ? '0 0 18px rgba(0, 229, 255, 0.35)' : 'none',
                      }}
                    >
                      <TabIcon size={22} />
                    </div>

                    <div className="about-tab-content" style={{ flex: 1, minWidth: 0 }}>
                      <div className="about-tab-title-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', gap: '8px' }}>
                        <h3 className="about-tab-title" style={{ color: isSelected ? '#FFFFFF' : '#CBD5E1' }}>{tab.title}</h3>
                        {isSelected && <ArrowUpRight size={18} color="var(--neon-cyan)" style={{ flexShrink: 0 }} />}
                      </div>

                      <p className="about-tab-desc" style={{ color: isSelected ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
                        {tab.description}
                      </p>

                      {/* Tab Dynamic Metrics Bar */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="about-metrics-bar"
                        >
                          {tab.metrics.map((m, idx) => (
                            <div key={idx} className="about-metric-item">
                              <div className="about-metric-label">
                                {m.label}
                              </div>
                              <div className="about-metric-value">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Code Editor & Telemetry Inspector */}
          <motion.div
            className="glass-panel about-code-panel"
            style={{
              borderRadius: '26px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              background: 'linear-gradient(180deg, rgba(14, 18, 32, 0.9) 0%, rgba(6, 8, 14, 0.98) 100%)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 229, 255, 0.12)',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal Window Header */}
            <div>
              <div
                className="about-code-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
                  </div>
                  <span style={{ marginLeft: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', overflowWrap: 'anywhere' }}>
                    synapse://cluster/{activeTab.id}.ts
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: copied ? 'var(--neon-emerald)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copied ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'COPIED' : 'COPY CODE'}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <pre
                className="about-code-pre"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: '1.65',
                  color: '#A5B4FC',
                  overflowX: 'auto',
                  padding: '18px',
                  borderRadius: '14px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <code>{activeTab.codeSnippet}</code>
              </pre>
            </div>

            {/* Live Telemetry Radar Card */}
            <div
              className="about-telemetry-box"
              style={{
                marginTop: '24px',
                padding: '16px 18px',
                borderRadius: '18px',
                background: 'rgba(0, 229, 255, 0.05)',
                border: '1px solid rgba(0, 229, 255, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(0, 229, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00E5FF',
                    flexShrink: 0,
                  }}
                >
                  <Gauge size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', wordBreak: 'break-word' }}>Live Cluster Telemetry</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)', wordBreak: 'break-word' }}>● 0 packet drops in last 24h</div>
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>THROUGHPUT</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00E5FF' }}>99.999%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
