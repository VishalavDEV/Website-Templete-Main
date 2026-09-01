import React from 'react';
import { Award, Users, Wrench, Lightbulb, TrendingUp, Rocket } from 'lucide-react';

export default function WhyAttend() {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Industry Experts",
      desc: "Learn directly from CTOs, AI pioneers, and engineering leaders shaping global tech platforms."
    },
    {
      icon: <Users size={28} />,
      title: "High-Impact Networking",
      desc: "Connect with over 5,000+ software developers, founders, researchers, and venture investors."
    },
    {
      icon: <Wrench size={28} />,
      title: "Interactive Workshops",
      desc: "Participate in hands-on coding labs building LLM agents, cloud serverless microservices, and security meshes."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Technology Showcase",
      desc: "Explore cutting-edge product demos and frontier deeptech solutions from 50+ leading sponsors."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Career Acceleration",
      desc: "Discover leadership playbooks, engineering management strategies, and top developer roles."
    },
    {
      icon: <Rocket size={28} />,
      title: "Startup Pitch Zone",
      desc: "Watch 10 top shortlisted tech startups pitch live for ₹25 Lakhs in equity-free prize money."
    }
  ];

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHY ATTEND</span>
          <h2 className="section-title">
            Transform Your <span className="gradient-text">Career & Business</span>
          </h2>
          <p className="section-subtitle">
            Six compelling reasons why Eventora is Asia's premier annual technology summit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((feat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.25rem 1.75rem', transition: 'var(--transition-normal)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'rgba(108, 92, 231, 0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                {feat.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
