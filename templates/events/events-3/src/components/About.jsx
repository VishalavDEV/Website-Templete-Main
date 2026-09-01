import React from 'react';
import { Users, Mic, Wrench, Sparkles, Award } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Global Attendees',
      desc: 'Hardware engineers, quantum physicists & deep tech founders',
      bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Mic,
      value: '45+',
      label: 'Keynote Visionaries',
      desc: 'World-renowned researchers & industry innovators',
      bgImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Wrench,
      value: '18+',
      label: 'Hands-On Hardware Labs',
      desc: 'Dilution fridges, bipedal arm tuning & spatial VR testbeds',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} /> About The Summit
        </div>
        <h2 className="section-title">
          Bridging <span className="text-gradient">Physical Autonomy</span> & Quantum Intelligence
        </h2>
        <p className="section-subtitle">
          VERTEX is the annual epicenter where hardware innovation meets computational scale. We bring together pioneers building bipedal humanoids, cryogenic quantum hardware, sub-mW edge neural processors, and spatial computing metaverse platforms.
        </p>
      </div>

      {/* Main Narrative Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '70px'
        }}
      >
        {/* Left Text Block */}
        <div>
          <h3
            style={{
              fontSize: '1.8rem',
              color: 'var(--text-primary)',
              marginBottom: '20px',
              lineHeight: 1.3
            }}
          >
            Engineering the Next Epoch of Intelligent Physical Systems
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}
          >
            For three days in San Francisco, VERTEX dissolves the boundary between software algorithms and hardware physics. Attendees gain hands-on access to live bipedal locomotion rigs, optical quantum interferometry benches, and low-latency micro-drone flight domes.
          </p>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '30px'
            }}
          >
            Whether you are deploying TinyML model quantization on microcontrollers or mitigating quantum error rates in topological qubits, VERTEX delivers unfiltered, technical depth from industry leaders.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                background: 'rgba(0, 240, 255, 0.06)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '12px'
              }}
            >
              <Award size={24} color="var(--accent-cyan)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>IEEE Accredited</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Global Tech Chapter</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Floating Parallax Overlapping Images */}
        <div
          style={{
            position: 'relative',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Main Backing Image */}
          <div
            className="glass-card"
            style={{
              width: '85%',
              height: '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              transform: 'rotate(-3deg)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
              alt="Past Summit Crowd"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Overlapping Top Front Image */}
          <div
            className="glass-card"
            style={{
              position: 'absolute',
              width: '70%',
              height: '220px',
              bottom: '10px',
              right: '10px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid var(--accent-cyan)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
              transform: 'rotate(4deg)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              alt="Robotics Demo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* 3 Image-Backed Stat Cards */}
      <div className="grid-3">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '0',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative'
              }}
            >
              {/* Background Stock Photo */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url('${stat.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.25,
                  transition: 'opacity 0.3s ease'
                }}
              />

              {/* Dark Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(8, 11, 18, 0.3) 0%, rgba(8, 11, 18, 0.95) 100%)'
                }}
              />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, padding: '24px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 240, 255, 0.15)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}
                >
                  <IconComp size={22} color="#00f0ff" />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '4px'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    marginBottom: '4px'
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {stat.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
