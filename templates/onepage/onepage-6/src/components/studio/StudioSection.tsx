import React, { useState } from 'react';
import { EQUIPMENT_LIST, SIGNAL_CHAIN_STEPS, type Equipment } from '../../data/equipment';
import { useToast } from '../../context/ToastContext';
import { Sliders, Cpu, Volume2 } from 'lucide-react';

export const StudioSection: React.FC = () => {
  const { showToast } = useToast();
  const [selectedGear, setSelectedGear] = useState<Equipment>(EQUIPMENT_LIST[2]); // Default ANALOG SYNTH

  const playGearTone = (gear: Equipment) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = gear.waveformType;
      osc.frequency.setValueAtTime(gear.synthFrequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);

      showToast(`AUDIO AUDITION: ${gear.name} (${gear.synthFrequency}Hz)`, 'accent');
    } catch {
      // Audio context fallback
    }
  };

  return (
    <section id="studio" className="section-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--accent-warm)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          <Sliders size={14} />
          <span>16 — STUDIO WORKSPACE & HARDWARE</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            fontWeight: 400,
            color: 'var(--text-main)',
            lineHeight: 1.05,
            marginBottom: '3rem'
          }}
        >
          ANALOG RIG & <br />
          <span style={{ fontStyle: 'italic', color: 'var(--wine)' }}>SIGNAL CHAIN</span>
        </h2>

        {/* Signal Chain Interactive Visual Flow */}
        <div
          style={{
            padding: '24px 32px',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--bg-light)',
            borderRadius: '6px',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-grotesk)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--coral)',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            LIVE SIGNAL ARCHITECTURE FLOW:
          </span>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            {SIGNAL_CHAIN_STEPS.map((step, idx) => (
              <React.Fragment key={step}>
                <div
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(242, 238, 232, 0.08)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-grotesk)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em'
                  }}
                >
                  {step}
                </div>
                {idx < SIGNAL_CHAIN_STEPS.length - 1 && (
                  <span style={{ color: 'var(--accent-warm)', fontWeight: 700 }}>↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Equipment Grid & Inspector Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {/* Equipment List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
              SELECT HARDWARE MODULE TO INSPECT:
            </span>

            {EQUIPMENT_LIST.map((gear) => {
              const isSelected = selectedGear.id === gear.id;
              return (
                <div
                  key={gear.id}
                  onClick={() => {
                    setSelectedGear(gear);
                    playGearTone(gear);
                  }}
                  style={{
                    padding: '20px 24px',
                    backgroundColor: isSelected ? 'var(--accent-warm)' : 'rgba(242, 238, 232, 0.6)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  data-cursor="INSPECT GEAR"
                >
                  <div>
                    <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>
                      {gear.roleInChain}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600 }}>
                      {gear.name}
                    </h4>
                  </div>
                  <Volume2 size={18} style={{ opacity: isSelected ? 1 : 0.4 }} />
                </div>
              );
            })}
          </div>

          {/* Active Equipment Inspector Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--text-on-dark)',
              padding: '36px',
              borderRadius: '6px',
              border: '1px solid var(--border-accent)',
              boxShadow: 'var(--shadow-elevated)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Cpu size={24} style={{ color: 'var(--accent-warm)' }} />
                <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', color: 'var(--lavender)' }}>
                  HARDWARE SPECIFICATION
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '6px' }}>
                {selectedGear.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.85rem', color: 'var(--coral)', marginBottom: '1.5rem' }}>
                CATEGORY: {selectedGear.category.toUpperCase()}
              </p>

              <div style={{ padding: '14px', backgroundColor: 'rgba(242, 238, 232, 0.05)', borderLeft: '3px solid var(--accent-warm)', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.75rem', color: 'var(--text-muted-on-dark)', display: 'block' }}>
                  SPECS:
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {selectedGear.specs}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-muted-on-dark)', lineHeight: 1.6 }}>
                {selectedGear.details}
              </p>
            </div>

            <button
              onClick={() => playGearTone(selectedGear)}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--accent-warm)',
                color: '#FFF',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                borderRadius: '2px',
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              data-cursor="AUDITION TONE"
            >
              <Volume2 size={16} />
              <span>AUDITION SYNTH FREQUENCY ({selectedGear.synthFrequency}Hz)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
