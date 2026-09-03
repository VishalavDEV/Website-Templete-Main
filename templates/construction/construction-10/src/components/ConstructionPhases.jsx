import React, { useState } from 'react';
import { Layers, CheckCircle2, Clock, HardHat, Shield, Truck } from 'lucide-react';

export default function ConstructionPhases() {
  const [activePhase, setActivePhase] = useState(1); // 0 to 4

  const phases = [
    {
      step: '01',
      title: 'Deep Bedrock Piling & Substructure',
      status: 'COMPLETED (100%)',
      duration: 'Months 01 – 08',
      concreteVolume: '34,500 m³ C60 Self-Compacting',
      rebarTonnage: '4,800 Tons High-Yield Rebar',
      equipment: '4x Bauer BG 36 Diaphragm Piling Rigs',
      description: 'Secant piling down to -58m Baltic granite bedrock with continuous hydrostatic cut-off wall and mass concrete base slab pour of 9,400 m³ over 36 hours.'
    },
    {
      step: '02',
      title: 'Slipform Aerodynamic Core Superstructure',
      status: 'IN ACTIVE PROGRESS (74%)',
      duration: 'Months 09 – 22',
      concreteVolume: '58,200 m³ C80 Basaltic High-Strength',
      rebarTonnage: '8,600 Tons Steel Diagrid Frames',
      equipment: '3x Potain MDT 389 High-Speed Climbing Tower Cranes',
      description: 'Automated hydraulic self-climbing slipform core rising 1 floor every 3.5 days. Integrated post-tensioned shear walls and double-curvature aerodynamic central wind aperture.'
    },
    {
      step: '03',
      title: 'Steel Diagrid Outriggers & Cantilever Sky Gardens',
      status: 'SCHEDULED (28%)',
      duration: 'Months 20 – 30',
      concreteVolume: '14,000 m³ Lightweight Floor Screed',
      rebarTonnage: '6,200 Tons High-Tensile Structural Steel',
      equipment: '2x Liebherr 500-ton Mobile Heavy-Lift Hydraulic Cranes',
      description: 'Erection of heavy structural steel outrigger trusses on levels 24, 48, and 64, providing base overturning stability and anchoring the 24-meter cantilevered botanical observation decks.'
    },
    {
      step: '04',
      title: 'Kinetic Origami PV Louver Envelope',
      status: 'PRE-FABRICATION (42%)',
      duration: 'Months 28 – 38',
      concreteVolume: 'N/A — CFRP & Vacuum Insulated Glass',
      rebarTonnage: '1,400 Tons Aluminum/Titanium Framing',
      equipment: 'Custom Robotic Facade Installation Spider Cranes',
      description: 'Installation of 4,280 prefabricated smart solar tracking origami facade panels with integrated micro-servos, automated pressure seals, and aerogel thermal insulation.'
    },
    {
      step: '05',
      title: 'MEP Integration, Tuned Mass Damper & Commissioning',
      status: 'PLANNING (10%)',
      duration: 'Months 36 – 44',
      concreteVolume: '750-ton Solid Steel Tuned Mass Damper',
      rebarTonnage: 'High-Velocity Regenerative Elevators',
      equipment: 'Precision Laser Alignment & Vibration Testing Array',
      description: 'Installation of dual 750-ton pendulum tuned mass dampers at level 76, full HVAC passive bioclimatic balancing, LEED Platinum commissioning, and smart building BMS handover.'
    }
  ];

  return (
    <section id="timeline" style={{ padding: '90px 0', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Layers size={14} /> EPC EXECUTION TIMELINE
          </div>
          <h2 className="section-title">
            5-Stage Heavy Skyrise Construction Model
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From deep granite bedrock piling to robotic kinetic facade installation, monitor real-time engineering milestones, material tonnage, and crane deployments.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '32px' }}>
          {phases.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              style={{
                background: activePhase === idx ? 'var(--accent-primary)' : 'var(--bg-surface)',
                color: activePhase === idx ? 'var(--accent-primary-text)' : 'var(--text-main)',
                border: '1px solid',
                borderColor: activePhase === idx ? 'var(--accent-primary)' : 'var(--border-subtle)',
                borderRadius: '8px',
                padding: '16px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activePhase === idx ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: '800' }}>
                  PHASE {p.step}
                </span>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', opacity: 0.85 }}>
                  {p.status.split(' ')[0]}
                </span>
              </div>
              <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-heading)', fontWeight: '700', lineHeight: 1.25 }}>
                {p.title.split(' ')[0]} {p.title.split(' ')[1]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Phase Detail Card */}
        <div className="aero-card" style={{ padding: '36px', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                STAGE {phases[activePhase].step} // {phases[activePhase].duration}
              </div>
              <h3 style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'var(--text-main)' }}>
                {phases[activePhase].title}
              </h3>
            </div>

            <div
              style={{
                background: 'var(--badge-bg)',
                border: '1px solid var(--border-strong)',
                borderRadius: '6px',
                padding: '8px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-main)',
                fontWeight: '700'
              }}
            >
              {phases[activePhase].status}
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '28px' }}>
            {phases[activePhase].description}
          </p>

          {/* Construction Material & Fleet Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            
            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '4px' }}>
                CONCRETE MIX & VOLUME
              </div>
              <div style={{ fontSize: '0.98rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                {phases[activePhase].concreteVolume}
              </div>
            </div>

            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '4px' }}>
                STRUCTURAL REBAR / FRAMING
              </div>
              <div style={{ fontSize: '0.98rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                {phases[activePhase].rebarTonnage}
              </div>
            </div>

            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '4px' }}>
                DEPLOYED HEAVY MACHINERY
              </div>
              <div style={{ fontSize: '0.98rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                {phases[activePhase].equipment}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
