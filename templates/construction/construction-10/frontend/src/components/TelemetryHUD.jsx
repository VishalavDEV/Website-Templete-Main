import React, { useState, useEffect } from 'react';
import { Activity, Wind, Gauge, Cpu, Radio, RefreshCw } from 'lucide-react';
import { fetchTelemetry } from '../services/api';

export default function TelemetryHUD() {
  const [telemetry, setTelemetry] = useState(null);
  const [lastSync, setLastSync] = useState(new Date());

  const loadTelemetry = async () => {
    const data = await fetchTelemetry();
    setTelemetry(data);
    setLastSync(new Date());
  };

  useEffect(() => {
    loadTelemetry();
    const interval = setInterval(loadTelemetry, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" style={{ padding: '80px 0', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
          <div>
            <div className="section-tag">
              <Activity size={14} /> REALTIME TELEMETRY MATRIX
            </div>
            <h2 className="section-title" style={{ marginBottom: '6px' }}>
              Building Aerodynamic & Structural HUD
            </h2>
            <p className="section-desc">
              Live streaming IoT sensors across boundary-layer wind tunnels, structural tuned mass dampers, and kinetic solar louvers.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              SYNC: {lastSync.toLocaleTimeString()}
            </span>
            <button
              onClick={loadTelemetry}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <RefreshCw size={13} /> POLL NOW
            </button>
          </div>
        </div>

        {/* HUD Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          
          {/* Card 1 */}
          <div className="aero-card" style={{ padding: '20px', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                BOUNDARY LAYER ANEMOMETER
              </span>
              <Wind size={16} color="var(--text-main)" />
            </div>
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-main)' }}>
              {telemetry?.ambientWindSpeedMps || '14.8'} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>m/s</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              Altitude: {telemetry?.altitudeMeters || 342}m Pinnacle
            </div>
          </div>

          {/* Card 2 */}
          <div className="aero-card" style={{ padding: '20px', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                CALCULATED DRAG (Cd)
              </span>
              <Gauge size={16} color="var(--text-main)" />
            </div>
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-main)' }}>
              {telemetry?.calculatedDragCoefficient || '0.278'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              Vortex Shedding: {telemetry?.vortexSheddingFrequencyHz || '0.48'} Hz
            </div>
          </div>

          {/* Card 3 */}
          <div className="aero-card" style={{ padding: '20px', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                TMD PENDULUM OSCILLATION
              </span>
              <Activity size={16} color="var(--text-main)" />
            </div>
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-main)' }}>
              ±{telemetry?.tunedMassDamperDisplacementMm || '12.4'} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>mm</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              Kinetic Louver Sync: {telemetry?.kineticFacadeSyncRatePercent || '99.4'}%
            </div>
          </div>

          {/* Card 4 */}
          <div className="aero-card" style={{ padding: '20px', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                SOLAR IRRADIANCE & HARVEST
              </span>
              <Cpu size={16} color="var(--text-main)" />
            </div>
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-main)' }}>
              {telemetry?.realtimeEnergyGenerationKwh || '142.8'} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>kWh</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              Irradiance: {telemetry?.currentSolarIrradianceWsqm || '840'} W/m²
            </div>
          </div>

        </div>

        {/* Active Drones Strip */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Radio size={18} color="var(--text-main)" />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 700 }}>
              ACTIVE AUTONOMOUS LIDAR SCANNERS:
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {telemetry?.activeFlythroughDrones?.map((drone, i) => (
              <span key={i} style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-strong)', borderRadius: '4px', padding: '4px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 600 }}>
                {drone}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
