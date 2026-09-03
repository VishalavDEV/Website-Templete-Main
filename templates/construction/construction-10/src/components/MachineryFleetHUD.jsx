import React, { useState } from 'react';
import { Truck, ShieldCheck, Activity } from 'lucide-react';

export default function MachineryFleetHUD() {
  const [selectedMachine, setSelectedMachine] = useState(0);

  const fleet = [
    {
      id: 'CRANE-01',
      name: 'Potain MDT 389 Climbing Crane',
      type: 'Supertall Tower Crane',
      status: 'ACTIVE HOISTING (Level 64)',
      hookHeight: '284.5 m',
      currentLoad: '16.8 Tons (Rebar Cage)',
      maxCapacity: '25.0 Tons',
      slewAngle: '142.6° South-East',
      windLimit: '18.0 m/s (Current: 14.8 m/s SAFE)',
      hydraulicHealth: '99.2%',
      operator: 'Lead Rig Master J. Lindqvist'
    },
    {
      id: 'PUMP-01',
      name: 'Putzmeister BSA 2110 High-Pressure Pump',
      type: 'Ultra-High Rise Concrete Boom Pump',
      status: 'ACTIVE POURING (Core Wall #58)',
      hookHeight: 'Level 58 Direct Line',
      currentLoad: '64.0 m³/hour C80 Mix',
      maxCapacity: '85.0 m³/hour @ 260 Bar',
      slewAngle: 'Stationary Ground Manifold',
      windLimit: 'Continuous Wet Pumping Mode',
      hydraulicHealth: '98.7%',
      operator: 'Concrete Tech M. Arisawa'
    },
    {
      id: 'CRANE-02',
      name: 'Liebherr 280 EC-H 12 Litronic',
      type: 'High-Speed Secondary Crane',
      status: 'MATERIALS STAGING (Level 36)',
      hookHeight: '168.0 m',
      currentLoad: '8.4 Tons (Glass Pallets)',
      maxCapacity: '12.0 Tons',
      slewAngle: '288.4° North-West',
      windLimit: '20.0 m/s (Current: 14.8 m/s SAFE)',
      hydraulicHealth: '97.9%',
      operator: 'Rig Specialist D. Vance'
    },
    {
      id: 'ROBOT-01',
      name: 'Spider-Climb Kinetic Facade Rig',
      type: 'Autonomous Facade Installation Robot',
      status: 'ACTIVE BOLTING (Level 42)',
      hookHeight: 'Level 42 Outer Diagrid',
      currentLoad: '1x Origami Louver Unit (420kg)',
      maxCapacity: '1.2 Tons Precision Hoist',
      slewAngle: 'Lidar Guided ±0.5mm',
      windLimit: '14.0 m/s Threshold',
      hydraulicHealth: '100.0% Calibrated',
      operator: 'Automated AI Robotics Node #4'
    }
  ];

  return (
    <section id="fleet" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="section-tag">
              <Truck size={14} /> HEAVY EQUIPMENT & CRANE OPERATIONS
            </div>
            <h2 className="section-title" style={{ marginBottom: '6px' }}>
              Heavy Machinery & Tower Crane Fleet
            </h2>
            <p className="section-desc">
              Real-time telemetry, hook altitude, load capacity, and wind cutoff thresholds for supertall skyrise construction equipment.
            </p>
          </div>

          <div
            style={{
              background: 'var(--badge-bg)',
              border: '1px solid var(--border-strong)',
              borderRadius: '6px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-main)',
              fontWeight: '700'
            }}
          >
            <ShieldCheck size={18} />
            <span>WIND CUTOFF: ALL CRANES OPERATING IN SAFE ZONE</span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {fleet.map((m, idx) => (
            <div
              key={m.id}
              className="aero-card"
              style={{
                padding: '24px',
                cursor: 'pointer',
                borderColor: selectedMachine === idx ? 'var(--border-active)' : 'var(--border-subtle)',
                background: selectedMachine === idx ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'
              }}
              onClick={() => setSelectedMachine(idx)}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: '800' }}>
                    {m.id}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', marginTop: '2px', lineHeight: 1.3, color: 'var(--text-main)' }}>
                    {m.name}
                  </h4>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-main)', marginTop: '4px' }} />
              </div>

              {/* Status Badge */}
              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '6px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: '700', marginBottom: '16px' }}>
                {m.status}
              </div>

              {/* Specs List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <div>
                  <div style={{ color: 'var(--text-dim)' }}>HOOK ELEVATION</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '700' }}>{m.hookHeight}</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-dim)' }}>CURRENT HOIST</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '700' }}>{m.currentLoad}</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-dim)' }}>SLEWING HEADING</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '700' }}>{m.slewAngle}</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-dim)' }}>HYDRAULIC HEALTH</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '700' }}>{m.hydraulicHealth}</div>
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Certified: <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{m.operator}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
