import React from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import { Code, Cpu, Users, Sparkles, Trophy, Network, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const objectives = [
    { title: 'BUILD', desc: 'Convert concepts into production-ready software & hardware hacks in 24 hours.', icon: Code },
    { title: 'LEARN', desc: 'Participate in hands-on technical workshops led by industry specialists.', icon: Cpu },
    { title: 'COLLABORATE', desc: 'Form cross-disciplinary teams combining developers, AI builders, and designers.', icon: Users },
    { title: 'INNOVATE', desc: 'Tackle high-impact problems across AI, Cybersecurity, FinTech, and Smart Cities.', icon: Sparkles },
    { title: 'COMPETE', desc: 'Pitch your demo live on stage for ₹5,00,000+ in cash, prizes, and trophies.', icon: Trophy },
    { title: 'NETWORK', desc: 'Engage directly with tech recruiters, VCs, startup founders, and mentors.', icon: Network }
  ];

  const eligibleDisciplines = [
    'Computer Science', 'Information Technology', 'AI & Data Science',
    'Electronics & Telecom', 'Robotics & Automation', 'Design & UI/UX',
    'Cybersecurity & Networks', 'Any Technology-related Discipline'
  ];

  const whyJoinPerks = [
    'Build real-world portfolio projects',
    'Win ₹5,00,000+ cash prizes & awards',
    'Meet top industry tech mentors 1-on-1',
    'Learn modern AI fine-tuning & cloud deployment',
    'Get direct internship & hiring interviews',
    'Enjoy free gourmet food, midnight pizza & coffee',
    'Network with 500+ student developers',
    'Receive official digital participation certificates'
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HACKATHON MISSION</div>
          <GlitchText text="ABOUT NEXORA AFTERDARK" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: '#00ff66', letterSpacing: '2px' }}>
            “Where ideas stay awake all night.”
          </p>
        </div>
      </section>

      {/* What is Nexora Afterdark */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="badge-tag">● THE VISION</div>
              <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1rem' }}>WHAT IS NEXORA AFTERDARK?</h2>
              <p style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                NEXORA AFTERDARK is a premier 24-hour overnight student hackathon designed to bring developers, designers, engineers, and problem-solvers under one roof to build transformative digital solutions.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                Held inside the state-of-the-art Nexora Innovation Lab in Chennai, this event simulates the intense, rapid-prototyping environment of modern startup sprint labs. From problem statement release at 20:00 to final presentations at 15:00, hackers code non-stop backed by continuous mentorship and gourmet food.
              </p>
            </div>

            <div className="cyber-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 16, 12, 0.9)' }}>
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />
              <h3 style={{ fontSize: '1.4rem', color: '#00ff66', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                THE CORE PHILOSOPHY
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
                We believe the best software innovations are born when passion meets high energy, zero distractions, and an inspiring collaborative community.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                <div>&gt; Innovation over perfection</div>
                <div>&gt; Rapid iteration over idle discussions</div>
                <div>&gt; Hands-on creation over static slides</div>
                <div>&gt; Inclusive hacker community for all skill levels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="section-padding cyber-grid-bg" style={{ backgroundColor: 'rgba(5, 8, 6, 0.5)' }}>
        <div className="container">
          <div className="title-container">
            <div className="badge-tag">● EVENT GOALS</div>
            <h2 className="section-title text-gradient">OUR 6 OBJECTIVES</h2>
            <p className="section-subtitle">Empowering student developers through every hour of the night.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {objectives.map((obj, idx) => {
              const IconComp = obj.icon;
              return (
                <div key={idx} className="cyber-card" style={{ padding: '2rem 1.5rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 255, 102, 0.1)',
                      border: '1px solid #00ff66',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00ff66',
                      marginBottom: '1rem'
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>{obj.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>{obj.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="cyber-card" style={{ padding: '2.5rem' }}>
              <div className="badge-tag">● ELIGIBILITY</div>
              <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>WHO CAN PARTICIPATE?</h2>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We welcome undergraduate, postgraduate, and diploma students from all technology disciplines. Whether you are a seasoned competitive programmer or building your first web app, NEXORA AFTERDARK provides the platform to level up your skills.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                {eligibleDisciplines.map((disc, idx) => (
                  <div key={idx} style={{ color: '#00ff66', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    ✔ {disc}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join */}
            <div>
              <div className="badge-tag">● BENEFITS</div>
              <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>WHY JOIN NEXORA AFTERDARK?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {whyJoinPerks.map((perk, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(10, 16, 12, 0.7)', border: '1px solid rgba(0, 255, 102, 0.2)', padding: '0.75rem 1rem', borderRadius: '6px' }}>
                    <CheckCircle2 size={18} color="#00ff66" />
                    <span style={{ color: '#ffffff', fontSize: '0.95rem' }}>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/register" className="btn btn-primary interactive pulse-glow" style={{ padding: '1rem 2.5rem' }}>
              <Zap size={18} /> REGISTER YOUR TEAM TODAY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
