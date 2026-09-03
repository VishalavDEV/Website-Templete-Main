import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Instant Edge Topology Initialization',
    desc: 'Connect your Git repository or model registry. Synapse automatically compiles weights, shards KV-cache, and spins up nearest edge nodes.',
    tag: 'T+0.8 SECONDS'
  },
  {
    step: '02',
    title: 'Autonomous Spatial Routing',
    desc: 'Requests are automatically routed through lowest-RTT fiber backbones with zero packet fragmentation and dynamic geo-fencing.',
    tag: '0.42MS LATENCY'
  },
  {
    step: '03',
    title: 'Multi-Agent Memory Synchronization',
    desc: 'Shared KV-cache states propagate across global GPU pools using hardware NVLink over optical transceivers.',
    tag: '900 GB/S MESH'
  },
  {
    step: '04',
    title: 'Continuous Autonomous Auto-Healing',
    desc: 'Zero-downtime hot-swapping guarantees 99.999% uptime SLA with hardware fault prediction and automated rerouting.',
    tag: '99.999% SLA'
  }
];

const COMPARISON_DATA = [
  { metric: 'Global First Token Latency (TTFT)', legacy: '120ms - 350ms', synapse: '< 18ms', win: true },
  { metric: 'Cold Start Latency', legacy: '45s - 180s', synapse: '0.00ms (Pre-warmed)', win: true },
  { metric: 'Inter-Node Bandwidth', legacy: '100 Gbps Ethernet', synapse: '900 GB/s Pooled NVLink', win: true },
  { metric: 'Hardware Enclave Isolation', legacy: 'Optional Addon (₹₹₹)', synapse: 'Standard by Default', win: true },
  { metric: 'Autonomous Swarm Sync', legacy: 'Custom Redis Glue Code', synapse: 'Native Zero-Copy Mesh', win: true },
];

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="why-us" style={{ position: 'relative', overflow: 'hidden' }}>
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
            <span>UNCOMPROMISING ADVANTAGES</span>
          </div>
          <h2 className="section-title">
            Why Visionaries Choose <br />
            <span className="text-gradient-neon">Synapse Neural Fabric</span>
          </h2>
          <p className="section-description">
            Comparing legacy hyperscalers against the modern spatial compute architecture built specifically for generative workloads and real-time robotics.
          </p>
        </motion.div>

        {/* Part 1: Interactive Execution Timeline */}
        <div style={{ marginBottom: '64px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    position: 'relative',
                    padding: '28px',
                    borderRadius: '22px',
                    background: isActive ? 'rgba(0, 229, 255, 0.1)' : 'rgba(13, 17, 28, 0.45)',
                    border: isActive ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.07)',
                    boxShadow: isActive ? '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.22)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        color: isActive ? 'var(--neon-cyan)' : 'var(--text-muted)',
                      }}
                    >
                      {step.step}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 10px',
                        borderRadius: '100px',
                        background: isActive ? 'rgba(0, 229, 255, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? '#00E5FF' : 'var(--text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Feature Matrix Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-elevated"
          style={{
            padding: '36px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflowX: 'auto',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF' }}>Architectural Comparison</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Synapse vs Conventional Cloud Hyperscalers</p>
          </div>

          <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <th style={{ padding: '16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>CAPABILITY / BENCHMARK</th>
                <th style={{ padding: '16px', color: '#94A3B8', fontSize: '0.92rem' }}>Legacy Hyperscalers</th>
                <th style={{ padding: '16px', color: 'var(--neon-cyan)', fontSize: '1.02rem', fontWeight: 700 }}>SYNAPSE FABRIC</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                  }}
                >
                  <td style={{ padding: '18px 16px', fontWeight: 600, color: '#F1F5F9', fontSize: '0.94rem' }}>
                    {row.metric}
                  </td>
                  <td style={{ padding: '18px 16px', color: '#64748B', fontSize: '0.92rem' }}>
                    {row.legacy}
                  </td>
                  <td style={{ padding: '18px 16px', color: 'var(--neon-emerald)', fontWeight: 700, fontSize: '0.98rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={17} color="var(--neon-emerald)" />
                      <span>{row.synapse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
