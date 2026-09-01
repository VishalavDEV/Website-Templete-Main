import React from 'react';
import { Link } from 'react-router-dom';
import ProcessTimeline from '../components/ProcessTimeline';
import { ShieldCheck, Target, Eye, Award, CheckCircle, ArrowRight } from 'lucide-react';

export const About = () => {
  const values = [
    { title: "PRECISION", desc: "Digital paint depth gauge measurement down to the micron before any compounding." },
    { title: "QUALITY", desc: "Only top-tier pH-neutral soaps, 9H ceramic resins, and premium microfiber towels." },
    { title: "TRANSPARENCY", desc: "Clear upfront package pricing without surprise add-on charges." },
    { title: "INNOVATION", desc: "State-of-the-art thermal steam extraction & dust-controlled HVLP paint booths." },
    { title: "CUSTOMER CARE", desc: "Personalized auto concierge updates and dedicated service advisors." },
    { title: "CRAFTSMANSHIP", desc: "Master technicians treating every vehicle like a bespoke work of art." }
  ];

  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Page Banner */}
      <section style={{
        padding: '100px 0 60px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <span className="section-label">ABOUT AQUAVEXA AUTO SPA</span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            WE DON'T JUST WASH CARS.<br />
            <span style={{ color: '#7cff4f' }}>WE RESTORE THE WAY THEY FEEL.</span>
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto' }}>
            AQUAVEXA AUTO SPA is a premium automotive care studio focused on precision washing, interior detailing, paint restoration, 9H ceramic coating, and bespoke vehicle color transformation.
          </p>
        </div>
      </section>

      {/* Our Story, Mission, Vision */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {/* Story Card */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(124, 255, 79, 0.1)', border: '1px solid #7cff4f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7cff4f', marginBottom: '20px' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', color: '#f5f7f8', marginBottom: '12px' }}>
                OUR STORY
              </h3>
              <p style={{ color: '#b9c0c5', fontSize: '0.95rem', lineHeight: '1.6' }}>
                AQUAVEXA AUTO SPA started with a simple, uncompromising goal: to make professional, factory-level car care accessible without compromising on quality or surface safety. What began as a passionate team of detailing artisans has evolved into a premier automotive transformation studio equipped with cutting-edge pressure foam systems, thermal steam extractors, and dust-controlled paint spray bays.
              </p>
            </div>

            {/* Mission Card */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 191, 255, 0.1)', border: '1px solid #25bfff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25bfff', marginBottom: '20px' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', color: '#f5f7f8', marginBottom: '12px' }}>
                OUR MISSION
              </h3>
              <p style={{ color: '#b9c0c5', fontSize: '1.1rem', fontWeight: '700', color: '#7cff4f', marginBottom: '12px', fontStyle: 'italic' }}>
                “To make every vehicle leave looking better than it arrived.”
              </p>
              <p style={{ color: '#b9c0c5', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We believe that every car—from daily commuters to exotic track supercars—deserves meticulous surface care, deep sanitization, and glossy paint protection that preserves beauty and resale value.
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(124, 255, 79, 0.1)', border: '1px solid #7cff4f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7cff4f', marginBottom: '20px' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', color: '#f5f7f8', marginBottom: '12px' }}>
                OUR VISION
              </h3>
              <p style={{ color: '#b9c0c5', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To become the most trusted premium automotive care destination, pioneering sustainable foam washing technologies, ceramic armor advancements, and custom paint studio craftsmanship across the region.
              </p>
            </div>
          </div>

          {/* Our Core Values */}
          <div className="section-header">
            <span className="section-label">GUIDING PRINCIPLES</span>
            <h2 className="section-title">OUR CORE VALUES</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {values.map((v, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px' }}>
                <CheckCircle size={22} color="#7cff4f" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', color: '#f5f7f8', fontWeight: '800' }}>
                    {v.title}
                  </h4>
                  <p style={{ color: '#b9c0c5', fontSize: '0.88rem', marginTop: '4px' }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded 6-Step Process */}
      <ProcessTimeline />
    </div>
  );
};

export default About;
