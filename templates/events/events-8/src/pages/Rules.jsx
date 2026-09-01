import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Zap, FileText } from 'lucide-react';

const Rules = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const rulesList = [
    { title: '1. Team Size & Eligibility', desc: 'Teams must consist of 2 to 4 registered student hackers. All members must present valid college ID cards during check-in.' },
    { title: '2. Project Originality & Fresh Code', desc: 'All code, features, and prototypes must be authored during the 24-hour hackathon. Pre-existing projects or past submissions will be disqualified.' },
    { title: '3. Use of AI Tools & Open-Source', desc: 'Open-source libraries, APIs, and AI coding tools (Copilot, ChatGPT) are allowed. However, core business logic and custom prompt workflows must be created during the event.' },
    { title: '4. Submission Requirements', desc: 'Projects must be submitted on the Nexora Portal before 14:00. Submission must include public GitHub repo, 2-minute video demo, and architecture slide deck.' },
    { title: '5. Intellectual Property (IP)', desc: 'Hackers retain 100% ownership of all intellectual property, source code, designs, and patents developed during NEXORA AFTERDARK.' },
    { title: '6. Code of Conduct & Fair Play', desc: 'NEXORA AFTERDARK enforces a strict zero-tolerance policy against harassment, plagiarism, sabotage, and toxic behavior. Respect fellow hackers and lab property.' },
    { title: '7. Judging Criteria', desc: 'Demos are evaluated across 4 pillars: Technical Complexity (30%), Innovation (25%), Practical Impact (25%), and Pitch Presentation (20%).' },
    { title: '8. Disqualification Grounds', desc: 'Committing pre-written repositories, attempting network disruption of lab infrastructure, or falsifying student credentials will lead to immediate ban.' }
  ];

  const handleProceed = () => {
    if (agreed) {
      navigate('/register');
    }
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● GOVERNANCE & FAIR PLAY</div>
          <GlitchText text="HACKATHON RULES" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Official guidelines, submission protocols, intellectual property terms, and code of conduct.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {rulesList.map((rule, idx) => (
              <div key={idx} className="cyber-card" style={{ padding: '1.75rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                <div className="cyber-corner-tl" />
                <div className="cyber-corner-br" />
                <h3 style={{ fontSize: '1.25rem', color: '#00ff66', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  {rule.title}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7' }}>{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Agreement Checkbox Box */}
          <div
            className="cyber-card pulse-glow"
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(10, 16, 12, 0.95)',
              border: '1px solid #00ff66',
              textAlign: 'center'
            }}
          >
            <ShieldCheck size={40} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>HACKER CODE OF CONDUCT AGREEMENT</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
              By registering for NEXORA AFTERDARK, you confirm that you have read, understood, and agree to abide by all event rules and fair play guidelines.
            </p>

            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                color: agreed ? '#00ff66' : '#ffffff',
                backgroundColor: 'rgba(0, 255, 102, 0.08)',
                padding: '0.85rem 1.5rem',
                borderRadius: '6px',
                border: `1px solid ${agreed ? '#00ff66' : 'rgba(255, 255, 255, 0.15)'}`,
                marginBottom: '1.75rem'
              }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#00ff66', cursor: 'pointer' }}
              />
              <span>I HAVE READ & AGREE TO ALL HACKATHON RULES</span>
            </label>

            <div>
              <button
                onClick={handleProceed}
                disabled={!agreed}
                className="btn btn-primary"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  opacity: agreed ? 1 : 0.4,
                  cursor: agreed ? 'pointer' : 'not-allowed'
                }}
              >
                PROCEED TO TEAM REGISTRATION <Zap size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
