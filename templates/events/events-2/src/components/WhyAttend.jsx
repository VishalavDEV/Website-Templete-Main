import React from 'react';
import { BookOpen, Users, Compass, Cpu, Rocket, TrendingUp } from 'lucide-react';
import '../styles/cards.css';

export const WhyAttend = () => {
  const cards = [
    {
      icon: <BookOpen size={26} />,
      title: "Learn",
      desc: "Gain deep, actionable insights from global AI researchers, cloud pioneers, and enterprise leaders."
    },
    {
      icon: <Users size={26} />,
      title: "Connect",
      desc: "Build meaningful professional relationships with 5,000+ engineers, founders, and investors."
    },
    {
      icon: <Compass size={26} />,
      title: "Discover",
      desc: "Explore emerging breakthroughs in quantum computing, spatial UI, zero-trust security, and sovereign LLMs."
    },
    {
      icon: <Cpu size={26} />,
      title: "Experience",
      desc: "Participate in live hands-on coding labs, hardware exhibitions, and interactive spatial UX demonstrations."
    },
    {
      icon: <Rocket size={26} />,
      title: "Innovate",
      desc: "Turn architectural ideas into scalable commercial products with real-time feedback from ecosystem experts."
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Grow",
      desc: "Accelerate your career, recruit top engineering talent, or pitch for venture seed funding."
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">WHY ATTEND CYBERNEXUS</div>
          <h2 className="section-title">Elevate Your Engineering & Vision</h2>
          <p className="section-subtitle">
            Six compelling reasons why leading technologists and executives make CYBERNEXUS their mandatory annual summit.
          </p>
        </div>

        <div className="why-attend-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="glass-card why-card">
              <div className="why-icon-box">{card.icon}</div>
              <h3 className="why-title">{card.title}</h3>
              <p className="why-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
