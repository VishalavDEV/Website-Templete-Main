import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Database, Cloud, Layers, Server, Activity, Radio } from 'lucide-react';

const NODES = [
  { id: 'cloud', name: 'CLOUD', x: 260, y: 70, icon: Cloud, status: 'STABLE', throughput: '1.2 GB/s', latency: '2.1ms' },
  { id: 'ai', name: 'AI', x: 410, y: 150, icon: Cpu, status: 'INFERENCING', throughput: '8,400 TFLOPS', latency: '8.4ms' },
  { id: 'data', name: 'DATA', x: 370, y: 290, icon: Database, status: 'STREAMING', throughput: '2.4 PB/day', latency: '4.1ms' },
  { id: 'infra', name: 'INFRASTRUCTURE', x: 150, y: 300, icon: Server, status: 'RUNNING', throughput: '400 Gbps Core', latency: '0.9ms' },
  { id: 'security', name: 'SECURITY', x: 110, y: 160, icon: Shield, status: 'SECURED', throughput: 'Zero Trust', latency: '< 0.1ms' },
  { id: 'apps', name: 'APPLICATIONS', x: 260, y: 200, isCenter: true, icon: Layers, status: 'SYNCHRONIZED', throughput: '85k TPS', latency: '12ms' },
];

const CONNECTIONS = [
  { from: 'cloud', to: 'apps' },
  { from: 'ai', to: 'apps' },
  { from: 'data', to: 'apps' },
  { from: 'infra', to: 'apps' },
  { from: 'security', to: 'apps' },
  { from: 'cloud', to: 'ai' },
  { from: 'ai', to: 'data' },
  { from: 'data', to: 'infra' },
  { from: 'infra', to: 'security' },
  { from: 'security', to: 'cloud' },
];

export default function SystemVisualizer() {
  const [selectedNode, setSelectedNode] = useState(NODES[5]); // Default to Applications Center
  const [pulseTick, setPulseTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick(prev => (prev + 1) % 1000);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual-card">
      {/* Top Telemetry Header */}
      <div className="visual-top-bar">
        <div className="visual-title">
          <Activity size={14} className="pulse-dot" />
          <span>SYS_TOPOLOGY // MESH RUNTIME</span>
        </div>
        <div className="visual-signal">
          <Radio size={13} />
          <span>LIVE TELEMETRY</span>
        </div>
      </div>

      {/* SVG Topology Visualizer */}
      <div className="system-canvas-wrap">
        <svg viewBox="0 0 520 370" className="system-svg">
          <defs>
            {/* Cyan Glow Filters */}
            <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="meshGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#27D3E6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#27D3E6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Grid Mesh Radar Circles */}
          <circle cx="260" cy="190" r="160" stroke="#1D354E" strokeWidth="1" fill="none" strokeDasharray="3 3" />
          <circle cx="260" cy="190" r="100" stroke="#1D354E" strokeWidth="1" fill="none" />
          <circle cx="260" cy="190" r="40" stroke="#27D3E6" strokeWidth="1" fill="url(#meshGradient)" opacity="0.6" />

          {/* Coordinate Crosshairs */}
          <line x1="260" y1="20" x2="260" y2="360" stroke="#14283C" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="40" y1="190" x2="480" y2="190" stroke="#14283C" strokeWidth="1" strokeDasharray="2 4" />

          {/* Connection Lines with Animated Cyan Data Pulses */}
          {CONNECTIONS.map((conn, idx) => {
            const source = NODES.find(n => n.id === conn.from);
            const target = NODES.find(n => n.id === conn.to);
            const isConnActive = selectedNode.id === conn.from || selectedNode.id === conn.to;

            return (
              <g key={idx}>
                {/* Background base wire */}
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={isConnActive ? '#27D3E6' : '#1F3A56'}
                  strokeWidth={isConnActive ? '2' : '1'}
                  opacity={isConnActive ? '0.9' : '0.4'}
                  transition="all 0.3s ease"
                />
                {/* Animated traveling packet line */}
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#27D3E6"
                  strokeWidth="1.5"
                  strokeDasharray="6, 12"
                  className="conn-line"
                  opacity={isConnActive ? '1' : '0.6'}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <g
                key={node.id}
                className="node-circle"
                onClick={() => setSelectedNode(node)}
                transform={`translate(${node.x}, ${node.y})`}
              >
                {/* Outer Glow Halo for Selected */}
                {isSelected && (
                  <circle
                    r="32"
                    fill="none"
                    stroke="#27D3E6"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="map-node-ping"
                  />
                )}

                {/* Node Hexagon / Circle Background */}
                <rect
                  x="-22"
                  y="-22"
                  width="44"
                  height="44"
                  rx={node.isCenter ? '22' : '4'}
                  fill={isSelected ? '#15304C' : '#0B1726'}
                  stroke={isSelected ? '#27D3E6' : '#234465'}
                  strokeWidth={isSelected ? '2' : '1.5'}
                  filter={isSelected ? 'url(#cyan-glow)' : 'none'}
                />

                {/* Center Node Indicator */}
                <circle
                  cx="0"
                  cy="0"
                  r={node.isCenter ? '5' : '3'}
                  fill={isSelected ? '#27D3E6' : '#8FA0B3'}
                />

                {/* Node Label Text */}
                <text
                  x="0"
                  y="36"
                  textAnchor="middle"
                  fill={isSelected ? '#27D3E6' : '#A0B4C8'}
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="0.08em"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Telemetry Banner */}
      <div style={{ background: '#0F2134', border: '1px solid #1D3752', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-cyan)', fontWeight: 600 }}>
            NODE: {selectedNode.name}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8FA0B3', marginLeft: '10px' }}>
            STATUS: <strong style={{ color: '#F3F5F7' }}>{selectedNode.status}</strong>
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8FA0B3' }}>
          LATENCY: <strong style={{ color: 'var(--color-cyan)' }}>{selectedNode.latency}</strong>
        </div>
      </div>

      {/* Floating Data Panels */}
      <div className="floating-telemetry-grid">
        <div className="telemetry-item">
          <div className="telemetry-item-label">SYSTEM HEALTH</div>
          <div className="telemetry-item-val">99.98%</div>
        </div>
        <div className="telemetry-item">
          <div className="telemetry-item-label">ACTIVE NODES</div>
          <div className="telemetry-item-val">4,820</div>
        </div>
        <div className="telemetry-item">
          <div className="telemetry-item-label">DATA PROCESSED</div>
          <div className="telemetry-item-val">2.4 PB</div>
        </div>
      </div>
    </div>
  );
}
        <div style={{ background: 'var(--bg-navy-deep)', border: '1px solid var(--border-dark)', padding: '10px', borderRadius: '4px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-light-muted)', textTransform: 'uppercase' }}>ACTIVE NODES</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>4,820</div>
        </div>
        <div style={{ background: 'var(--bg-navy-deep)', border: '1px solid var(--border-dark)', padding: '10px', borderRadius: '4px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-light-muted)', textTransform: 'uppercase' }}>THROUGHPUT</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'var(--accent-teal)' }}>2.4 PB</div>
        </div>
      </div >
    </div >
  );
}
