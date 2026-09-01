import React from 'react';
import { Search, ShieldAlert, Droplet, Sparkles, ShieldCheck, Car } from 'lucide-react';

export const ProcessTimeline = () => {
  const steps = [
    { num: '01', title: 'INSPECT', desc: 'Comprehensive digital paint depth assessment & surface condition audit.', icon: Search },
    { num: '02', title: 'PREPARE', desc: 'Iron fallout decontamination & precision clay bar smoothing treatment.', icon: ShieldAlert },
    { num: '03', title: 'CLEAN', desc: '2000 PSI high-pressure pre-soak and active snow foam touchless wash.', icon: Droplet },
    { num: '04', title: 'RESTORE', desc: 'Dual-action machine swirl correction & deep upholstery steam extraction.', icon: Sparkles },
    { num: '05', title: 'PROTECT', desc: '9H Nano-Ceramic coat, carnauba seal, or custom HVLP paint clearcoat.', icon: ShieldCheck },
    { num: '06', title: 'REVEAL', desc: 'Inspection under 5000K sunlight lamps & pristine vehicle handover.', icon: Car }
  ];

  return (
    <section style={{ padding: '90px 0', background: '#07090b', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">OUR MASTER WORKFLOW</span>
          <h2 className="section-title">THE 6-STAGE AQUAVEXA PROCESS</h2>
          <p className="section-subtitle">
            Every vehicle undergoes a disciplined 6-stage transformation protocol for flawless results.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          position: 'relative'
        }}>
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  background: 'linear-gradient(180deg, #111417 0%, #0d1013 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px'
                }}
              >
                {/* Number Watermark */}
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '3rem',
                  fontWeight: '900',
                  color: 'rgba(124, 255, 79, 0.12)',
                  position: 'absolute',
                  top: '10px',
                  right: '16px',
                  lineHeight: 1
                }}>
                  {step.num}
                </div>

                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(124, 255, 79, 0.1)',
                  border: '1px solid #7cff4f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: '#7cff4f',
                  boxShadow: '0 0 15px rgba(124, 255, 79, 0.2)'
                }}>
                  <IconComponent size={22} />
                </div>

                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.15rem',
                  fontWeight: '900',
                  color: '#f5f7f8',
                  marginBottom: '8px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.82rem',
                  color: '#b9c0c5',
                  lineHeight: '1.5'
                }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
