import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TECH_STACK_LAYERS } from '../data/corporateData';

export default function TechnologyPage() {
  const [activeLayer, setActiveLayer] = useState(TECH_STACK_LAYERS[0]);
  const [concurrencyRate, setConcurrencyRate] = useState(60000);
  const [regionCount, setRegionCount] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const computedLatency = (3.2 + (concurrencyRate / 100000) * 1.5 - regionCount * 0.2).toFixed(2);
  const computedThroughput = ((concurrencyRate * 1.8) / 1000).toFixed(1);
  const egressCostSaving = (28 + regionCount * 3.5).toFixed(0);

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* 1. Header */}
      <section style={{ padding: '80px 0 90px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-editorial">
          <div className="edit-meta-copper" style={{ marginBottom: '14px' }}>
            ENTERPRISE TOPOLOGY // MULTI-TIER
          </div>
          <h1 className="edit-heading-display">
            Deterministic stack for scale.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--c-eucalyptus)', maxWidth: '780px', marginTop: '20px', lineHeight: '1.6' }}>
            Explore the multi-tier engineering topology that powers sub-millisecond execution, autonomous intelligence inference, and multi-region resilience.
          </p>
        </div>
      </section>

      {/* 2. Topology Platform (Charcoal Background) */}
      <section style={{ background: 'var(--c-charcoal)', color: 'var(--c-ivory)', padding: '110px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-editorial">
          <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
            <div className="edit-meta-copper" style={{ marginBottom: '14px' }}>MODULAR TOPOLOGY</div>
            <h2 className="edit-heading-section" style={{ color: '#FFFFFF' }}>COMMAND ARCHITECTURE</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {TECH_STACK_LAYERS.map((layer) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <div
                  key={layer.id}
                  style={{
                    background: isSelected ? 'var(--c-charcoal-elevated)' : 'var(--c-charcoal-surface)',
                    border: `1px solid ${isSelected ? 'var(--c-copper)' : 'var(--border-dark)'}`,
                    padding: '34px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onClick={() => setActiveLayer(layer)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--c-copper)' }}>
                      {layer.layerNumber}
                    </span>
                    <span className="edit-meta-label" style={{ color: 'var(--c-stone)' }}>
                      99.999% SLA
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                    {layer.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--c-copper)', marginBottom: '10px' }}>
                    {layer.role}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--c-stone)', lineHeight: '1.55' }}>
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Simulation Lab */}
      <section style={{ padding: '120px 0' }}>
        <div className="container-editorial">
          <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
            <div className="edit-meta-copper" style={{ marginBottom: '14px' }}>SIMULATION LAB</div>
            <h2 className="edit-heading-section" style={{ color: 'var(--c-charcoal)' }}>TELEMETRY BENCHMARK ENGINE</h2>
          </div>

          <div style={{ background: 'var(--c-ivory-pure)', border: '1px solid var(--border-light)', padding: '50px', borderRadius: '2px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <div style={{ marginBottom: '36px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label className="edit-meta-label">Peak Concurrency Rate (TPS)</label>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: 700, color: 'var(--c-copper)' }}>
                    {concurrencyRate.toLocaleString()} TPS
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  step="5000"
                  value={concurrencyRate}
                  onChange={(e) => setConcurrencyRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--c-copper)' }}
                />
              </div>

              <div style={{ marginBottom: '36px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label className="edit-meta-label">Active Sovereign Cloud Regions</label>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: 700, color: 'var(--c-copper)' }}>
                    {regionCount} REGIONS
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={regionCount}
                  onChange={(e) => setRegionCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--c-copper)' }}
                />
              </div>

              <div style={{ padding: '24px', background: 'var(--c-ivory)', border: '1px solid var(--border-light)', borderRadius: '2px' }}>
                <span className="edit-meta-copper" style={{ display: 'block', marginBottom: '6px' }}>
                  ROUTING CORE:
                </span>
                <span style={{ fontSize: '14px', color: 'var(--c-charcoal)', fontWeight: 600 }}>
                  eBPF Kernel BGP Anycast with Raft State Consensus & Temporal Workflows
                </span>
              </div>
            </div>

            <div style={{ background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '40px', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="edit-meta-copper" style={{ marginBottom: '24px' }}>PROJECTED TELEMETRY</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <div className="edit-meta-label" style={{ color: 'var(--c-stone)' }}>END-TO-END P99 LATENCY</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 700, color: 'var(--c-copper)' }}>
                      {computedLatency} ms
                    </div>
                  </div>

                  <div>
                    <div className="edit-meta-label" style={{ color: 'var(--c-stone)' }}>DATA THROUGHPUT</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 700, color: '#FFFFFF' }}>
                      {computedThroughput} GB/s
                    </div>
                  </div>

                  <div>
                    <div className="edit-meta-label" style={{ color: 'var(--c-stone)' }}>INFRASTRUCTURE EFFICIENCY</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 700, color: 'var(--c-copper)' }}>
                      +{egressCostSaving}%
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--c-stone)', borderTop: '1px solid var(--border-dark)', paddingTop: '16px', marginTop: '16px' }}>
                * Benchmarks verified on multi-region bare-metal execution nodes.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
