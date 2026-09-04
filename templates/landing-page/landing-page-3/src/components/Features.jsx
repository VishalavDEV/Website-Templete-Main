import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Sparkles, 
  ArrowRight,
  Server
} from 'lucide-react';

const FEATURES = [
  {
    id: 'bento-1',
    title: 'Autonomous Multi-Agent Swarms',
    category: 'COGNITIVE FABRIC',
    description: 'Coordinate millions of autonomous neural workers with real-time peer-to-peer memory sync and Byzantine fault consensus.',
    icon: Network,
    gradient: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(138, 43, 226, 0.2))',
    glowColor: 'rgba(0, 229, 255, 0.45)',
    accent: '#00E5FF',
    featured: true,
    metric: '14.8M active swarm nodes',
  },
  {
    id: 'bento-2',
    title: 'Sub-Millisecond Edge Routing',
    category: 'GLOBAL LATENCY',
    description: 'Anycast neural gateway routes inference requests to the geographically nearest physical matrix tensor core in <0.5ms.',
    icon: Zap,
    gradient: 'linear-gradient(135deg, rgba(0, 255, 163, 0.2), rgba(0, 229, 255, 0.2))',
    glowColor: 'rgba(0, 255, 163, 0.45)',
    accent: '#00FFA3',
    featured: false,
    metric: '0.42ms average global RTT',
  },
  {
    id: 'bento-3',
    title: 'Hardware Zero-Copy Memory Mesh',
    category: 'HIGH BANDWIDTH',
    description: 'Unified NVLink memory pooling eliminates PCI bottlenecks, delivering 900 GB/s inter-GPU tensor sharing.',
    icon: Cpu,
    gradient: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 0, 127, 0.2))',
    glowColor: 'rgba(138, 43, 226, 0.45)',
    accent: '#8A2BE2',
    featured: false,
    metric: '900 GB/s pooled throughput',
  },
  {
    id: 'bento-4',
    title: 'Autonomous Model Quantization',
    category: 'AUTO-OPTIMIZE',
    description: 'Automatic FP8, INT4, and AWQ compilation preserves 99.9% model perplexity while cutting memory footprints by 4x.',
    icon: Server,
    gradient: 'linear-gradient(135deg, rgba(255, 158, 0, 0.2), rgba(255, 0, 127, 0.2))',
    glowColor: 'rgba(255, 158, 0, 0.45)',
    accent: '#FF9E00',
    featured: false,
    metric: '4x speedup on commodity GPUs',
  },
  {
    id: 'bento-5',
    title: 'Hardware Enclave Security',
    category: 'CONFIDENTIAL COMPUTE',
    description: 'Zero-knowledge confidential computing isolates execution memory from host operating systems and cloud administrators.',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 255, 163, 0.2))',
    glowColor: 'rgba(0, 229, 255, 0.45)',
    accent: '#00E5FF',
    featured: false,
    metric: 'SOC2 & HIPAA Compliant',
  },
  {
    id: 'bento-6',
    title: 'Spatial Perception & 3D SLAM',
    category: 'SPATIAL INTELLIGENCE',
    description: 'Real-time ray-traced point clouds and 6-DoF visual odometry designed for robotics, AR glass displays, and autonomous drones.',
    icon: Eye,
    gradient: 'linear-gradient(135deg, rgba(255, 0, 127, 0.2), rgba(138, 43, 226, 0.2))',
    glowColor: 'rgba(255, 0, 127, 0.45)',
    accent: '#FF007F',
    featured: true,
    metric: '240 FPS spatial synthesis',
  },
];

export default function Features({ onOpenModal }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="features" style={{ position: 'relative', overflow: 'hidden' }}>
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
            <span>UNRIVALED COMPUTING CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Built for Extreme Throughput and <br />
            <span className="text-gradient-neon">Autonomous Scale</span>
          </h2>
          <p className="section-description">
            Discover a comprehensive suite of neural acceleration primitives engineered to surpass the limitations of legacy hyperscalers.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '26px',
          }}
        >
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'relative',
                  borderRadius: '26px',
                  padding: '34px',
                  background: 'rgba(13, 17, 28, 0.72)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: isHovered ? `1px solid ${feature.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered ? `0 18px 40px rgba(0, 0, 0, 0.6), 0 0 32px ${feature.glowColor}` : '0 10px 28px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '310px',
                  overflow: 'hidden',
                }}
              >
                {/* Dynamic Background Sheen */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: feature.gradient,
                    opacity: isHovered ? 0.35 : 0.08,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                    filter: 'blur(45px)',
                  }}
                />

                {/* Card Top: Icon & Category */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${isHovered ? feature.accent : 'rgba(255, 255, 255, 0.12)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: feature.accent,
                        boxShadow: isHovered ? `0 0 22px ${feature.glowColor}` : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: feature.accent,
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {feature.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontSize: '1.38rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '12px',
                      lineHeight: 1.28,
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Card Bottom: Metric & Action */}
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
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--neon-emerald)',
                      fontWeight: 600,
                    }}
                  >
                    ⚡ {feature.metric}
                  </span>

                  <button
                    onClick={() => onOpenModal && onOpenModal(`Explore ${feature.title}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: isHovered ? '#FFFFFF' : 'var(--text-muted)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>Inspect</span>
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
