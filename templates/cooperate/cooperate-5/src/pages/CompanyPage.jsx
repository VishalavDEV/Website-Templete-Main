import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LEADERSHIP_PROFILES } from '../data/corporateData';

export default function CompanyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const STANDARDS = [
    { title: "SOC 2 Type II Certified", desc: "Continuous automated compliance monitoring across all cloud enclaves and infrastructure nodes." },
    { title: "ISO / IEC 27001:2022", desc: "Enterprise information security management systems verified for global operational integrity." },
    { title: "FedRAMP High Equivalent", desc: "Sovereign cryptographic and access control primitives suitable for public sector mission systems." },
    { title: "HIPAA & HITRUST Enforced", desc: "Zero-knowledge encryption and differential privacy frameworks for healthcare data." },
    { title: "Basel III & PCI-DSS Tier 1", desc: "Deterministic ledger immutability and microsecond risk arbitration compliance." },
    { title: "Zero Trust Architecture NIST 800-207", desc: "Hardware-enforced SPIFFE/SPIRE mutual attestation on all microservices." }
  ];

  const VALUES = [
    { num: "01", title: "Formal Determinism Over Probabilistic Luck", desc: "Systems must possess verifiable mathematical states; concurrency bugs and race conditions are eliminated at the compiler and type level." },
    { num: "02", title: "Cryptographic Zero-Trust By Default", desc: "Every network packet and inter-process call is mutually authenticated using hardware cryptographic tokens." },
    { num: "03", title: "Autonomic Self-Healing Topologies", desc: "Distributed nodes detect performance degradation in microseconds and autonomously rebalance traffic without human intervention." },
    { num: "04", title: "Sovereign Infrastructure Protection", desc: "Eliminating reliance on proprietary single-vendor cloud platforms to ensure complete operational sovereignty." }
  ];

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* 9. Top: Large Left-Aligned Statement */}
      <section style={{ padding: '80px 0 90px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>
            DOSSIER // ARCHITECTURAL ROOTS
          </div>
          <h1 className="edit-heading-display" style={{ maxWidth: '980px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.8vw, 68px)', fontWeight: 700, lineHeight: 1.08, color: 'var(--c-charcoal)' }}>
            Engineering at the scale of global commerce.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--c-eucalyptus)', maxWidth: '720px', marginTop: '20px', lineHeight: '1.65' }}>
            A specialized systems engineering and enterprise technology corporation dedicated to building deterministic, fault-tolerant platforms for global institutions.
          </p>
        </div>
      </section>

      {/* 9. Middle: Image toward Right Edge + Story in Narrow Central Column */}
      <section style={{ padding: '110px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
            {/* Narrow Story Column */}
            <div style={{ maxWidth: '580px' }}>
              <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>
                FOUNDATIONAL CREED
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700, lineHeight: 1.18, color: 'var(--c-charcoal)', marginBottom: '22px' }}>
                Technology built for complexity.
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '18px' }}>
                Modern enterprise is fragile. Layer upon layer of legacy software, unverified cloud integrations, and fragmented data pipelines introduce catastrophic risks of outage and breach.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '32px' }}>
                At Axiom Systems, we reject fragile architectures. We treat enterprise software as a mission-critical civil engineering discipline—applying formal methods, deterministic concurrency, hardware-rooted security, and autonomic self-healing protocols.
              </p>

              <Link to="/capabilities" className="btn-copper-primary">
                <span>Explore Capabilities</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Image toward Right Edge */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Architecture"
                style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 20px 50px rgba(23, 34, 27, 0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Governance (Charcoal Background with High-Contrast Text) */}
      <section style={{ background: 'var(--c-charcoal)', color: 'var(--c-ivory)', padding: '110px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>GOVERNANCE & CERTIFICATIONS</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 700, color: '#FFFFFF' }}>ENTERPRISE STANDARDS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {STANDARDS.map((std, idx) => (
              <div key={idx} style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '32px', borderRadius: '2px' }}>
                <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
                  STANDARD 0{idx + 1}
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  {std.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6' }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Values (Vertical List) */}
      <section style={{ padding: '110px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>ENGINEERING CREED</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>CORE PRINCIPLES</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-light)' }}>
            {VALUES.map((val) => (
              <div key={val.num} style={{ display: 'grid', gridTemplateColumns: '100px 1.2fr 1.6fr', padding: '34px 0', borderBottom: '1px solid var(--border-light)', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--c-copper)' }}>
                  {val.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: 'var(--c-charcoal)', paddingRight: '20px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus)', lineHeight: '1.65' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Leadership (Uneven Image Grid) */}
      <section style={{ padding: '120px 0' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>EXECUTIVE ARCHITECTS</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>ENGINEERING LEADERSHIP</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', gap: '28px', alignItems: 'flex-start' }}>
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', marginTop: idx % 2 === 1 ? '30px' : '0' }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{ width: '100%', height: idx % 2 === 0 ? '360px' : '300px', objectFit: 'cover', borderRadius: '2px', marginBottom: '16px', boxShadow: '0 15px 35px rgba(23, 34, 27, 0.08)' }}
                />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '4px' }}>
                  {leader.name}
                </h3>
                <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
                  {leader.role}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus)', lineHeight: '1.5', marginBottom: '10px' }}>
                  {leader.bio}
                </p>
                <div style={{ fontSize: '11px', color: 'var(--c-eucalyptus)', borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
                  <strong>FOCUS:</strong> {leader.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
