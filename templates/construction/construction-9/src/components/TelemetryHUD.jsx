import React, { useState, useEffect } from 'react';
import { fetchTelemetry } from '../services/api';

export default function TelemetryHUD() {
  const [telemetry, setTelemetry] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadTelemetry = async () => {
    const data = await fetchTelemetry();
    setTelemetry(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTelemetry();
    const interval = setInterval(loadTelemetry, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="section-padding" style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="brutalist-badge">
            <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }} />
            LIVE TELEMETRY NODE // SPRING BOOT ACTUATOR
          </span>
          <h2 className="section-title">
            STRUCTURAL STRAIN & CURE TELEMETRY
          </h2>
          <p className="section-desc">
            Embedded fiber-optic strain gauges, embedded maturity thermocouple probes, and seismic resonance sensors streaming real-time structural health from active monolithic cast sites.
          </p>
        </div>

        {/* HUD Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Active Site Readout */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-strong)',
            padding: '24px',
            position: 'relative'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
              // MONITORED CORE SECTOR
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginTop: '8px', color: 'var(--text-main)' }}>
              {telemetry ? telemetry.activeSite : 'Apex Tower Core #14'}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-orange)', marginTop: '8px' }}>
              SEISMIC STATUS: {telemetry ? telemetry.seismicRating : 'UBC Zone 3 Damped'}
            </div>
          </div>

          {/* Concrete Cure Index */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-strong)',
            padding: '24px'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
              // CONCRETE CURE MATURITY INDEX
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)', marginTop: '6px' }}>
              {telemetry ? telemetry.concreteCureIndex : 98.7}<span style={{ fontSize: '1.2rem' }}>%</span>
            </div>
            <div style={{
              width: '100%',
              height: '6px',
              background: 'var(--border-subtle)',
              marginTop: '12px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${telemetry ? telemetry.concreteCureIndex : 98.7}%`,
                height: '100%',
                background: 'var(--accent-cyan)'
              }} />
            </div>
          </div>

          {/* Structural Strain Microstrain */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-strong)',
            padding: '24px'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
              // COMPRESSIVE STRAIN READOUT
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-orange)', marginTop: '6px' }}>
              {telemetry ? telemetry.structuralStrainMicrostrain.toFixed(1) : '184.2'} <span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>με</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              Resonance Frequency: <strong style={{ color: 'var(--text-main)' }}>{telemetry ? telemetry.vibrationFrequencyHz.toFixed(2) : '1.42'} Hz</strong>
            </div>
          </div>

          {/* Atmospheric Telemetry */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-strong)',
            padding: '24px'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
              // AMBIENT SITE CONDITIONS
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '6px' }}>
              {telemetry ? telemetry.ambientTempC : 17.8}°C <span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>/ {telemetry ? telemetry.humidityPercent : 64.2}% RH</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#10b981', marginTop: '6px' }}>
              OPTIMAL CURING RANGE
            </div>
          </div>
        </div>

        {/* Distributed Sensor Node Matrix */}
        <div style={{
          background: 'var(--bg-main)',
          border: '1px solid var(--border-strong)',
          padding: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              DISTRIBUTED FIBER-OPTIC SENSOR NODES
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              POLL INTERVAL: 5.0 SECONDS · SPRING BOOT BACKEND
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {telemetry && telemetry.sensorNodes ? (
              Object.entries(telemetry.sensorNodes).map(([sensor, val]) => (
                <div key={sensor} style={{
                  padding: '14px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{sensor}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                    {val.toFixed(1)} <span style={{ fontSize: '0.8rem', color: 'var(--accent-orange)' }}>με</span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>Connecting to sensor network...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
