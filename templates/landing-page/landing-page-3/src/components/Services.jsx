import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CloudLightning, 
  BrainCircuit, 
  Orbit, 
  Cpu, 
  Check, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

const SERVICES = [
  {
    id: 'srv-cloud',
    title: 'Global Serverless Neural Fabric',
    badge: 'FLAGSHIP',
    icon: CloudLightning,
    description: 'Instantly deploy state-of-the-art open source and proprietary weights to 250+ edge regions with automatic cold-start elimination in <2ms.',
    deliverables: [
      'Sub-millisecond global anycast routing',
      'Instant zero-copy model cold starts',
      'Dynamic auto-scaling from 0 to 10,000 GPUs',
      'Pre-warmed memory cache across 6 continents'
    ],
    accent: '#00E5FF',
    glow: 'rgba(0, 229, 255, 0.38)',
    pricing: 'Starts at ₹1.60 / 1M tokens'
  },
  {
    id: 'srv-spatial',
    title: 'Spatial 3D & NeRF Synthesis API',
    badge: 'SPATIAL AI',
    icon: Orbit,
    description: 'High-throughput APIs for 6-DoF visual odometry, point cloud segmentation, and real-time Neural Radiance Field streaming.',
    deliverables: [
      'Real-time 240 FPS SLAM processing',
      'LiDAR & Stereo camera depth fusion',
      'Instant 3D Gaussian Splatting conversion',
      'Sub-centimeter spatial landmark tracking'
    ],
    accent: '#8A2BE2',
    glow: 'rgba(138, 43, 226, 0.38)',
    pricing: 'Starts at ₹3,999 / month per stream'
  },
  {
    id: 'srv-agents',
    title: 'Autonomous Swarm Orchestration',
    badge: 'SWARM TECH',
    icon: BrainCircuit,
    description: 'Synchronize decentralized swarms of cognitive agents with high-speed peer-to-peer vector memory and Byzantine fault-tolerant consensus.',
    deliverables: [
      'Zero-latency shared working memory (KV Cache)',
      'Autonomous task planning & tool use',
      'Built-in rate limiter & safety guardrails',
      'Distributed multi-agent vector search'
    ],
    accent: '#00FFA3',
    glow: 'rgba(0, 255, 163, 0.38)',
    pricing: 'Starts at ₹7,999 / month cluster tier'
  },
  {
    id: 'srv-compiler',
    title: 'Precision Compiler & Quantization',
    badge: 'HARDWARE ACCEL',
    icon: Cpu,
    description: 'Automated weight compilation for Blackwell, Hopper, and edge silicon with FP8, AWQ, and speculative decoding acceleration.',
    deliverables: [
      'Automated 4x model memory compression',
      'Zero perplexity loss guarantee (<0.1%)',
      'Kernel fusion for custom transformer layers',
      'Custom Silicon ISA compilation'
    ],
    accent: '#FF007F',
    glow: 'rgba(255, 0, 127, 0.38)',
    pricing: 'On-Demand Enterprise SLA'
  }
];

export default function Services({ onOpenModal }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  return (
    <section id="services" style={{ position: 'relative', overflow: 'hidden' }}>
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
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <h2 className="section-title">
            Tailored Infrastructure for <br />
            <span className="text-gradient-emerald">Next-Gen Systems</span>
          </h2>
          <p className="section-description">
            From serverless edge inference to autonomous agent coordination, Synapse provides modular infrastructure tailored for high-demand production applications.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '26px',
          }}
        >
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = selectedService.id === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="glass-panel"
                style={{
                  padding: '32px',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  border: isSelected ? `1px solid ${service.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? `0 18px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${service.glow}` : '0 10px 28px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '350px',
                }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${service.accent}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.accent,
                        boxShadow: `0 0 18px ${service.glow}`,
                      }}
                    >
                      <Icon size={25} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        color: service.accent,
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontWeight: 600,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.28rem', color: '#FFFFFF', marginBottom: '10px' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#E2E8F0' }}>
                        <Check size={14} color={service.accent} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '20px',
                    marginTop: '22px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {service.pricing}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal && onOpenModal(`Provision ${service.title}`);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: service.accent,
                    }}
                  >
                    <span>Deploy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
