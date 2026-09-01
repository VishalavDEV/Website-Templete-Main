import React from 'react';
import GlitchText from '../components/GlitchText';
import WorkshopCard from '../components/WorkshopCard';

const Workshops = () => {
  const workshopList = [
    {
      id: 1,
      title: 'AI Crash Course: Fine-tuning Open Models',
      time: '01:30 - 02:30',
      duration: '60 Mins',
      level: 'INTERMEDIATE',
      speaker: 'Dr. Aris Thorne',
      role: 'Principal AI Scientist, Nexora AI',
      description: 'Hands-on session on fine-tuning open-source LLMs (Llama 3 & Mistral) using LoRA adapters and GPU acceleration.'
    },
    {
      id: 2,
      title: 'Build High-Performance Apps with React',
      time: '21:30 - 22:30',
      duration: '60 Mins',
      level: 'BEGINNER / INT',
      speaker: 'Sophia Chen',
      role: 'Staff Web Architect, Vercel',
      description: 'Master state optimization, custom hooks, WebSockets, and modern UI component architectures for hackathons.'
    },
    {
      id: 3,
      title: 'Cybersecurity 101: Zero-Trust Protocols',
      time: '03:00 - 04:00',
      duration: '60 Mins',
      level: 'ADVANCED',
      speaker: 'Maya Lin',
      role: 'Head of Cyber, ZeroTrust',
      description: 'Understanding zero-knowledge proofs, API token hardening, and defending web services against exploit vectors.'
    },
    {
      id: 4,
      title: 'Prompt Engineering for Autonomous Agents',
      time: '22:30 - 23:30',
      duration: '60 Mins',
      level: 'ALL LEVELS',
      speaker: 'Alex Rivera',
      role: 'Prompt Architect, Neural Systems',
      description: 'System prompt design, few-shot chain of thought techniques, structured JSON output formatting, and tool calling.'
    },
    {
      id: 5,
      title: 'Cloud Deployment in 10 Minutes',
      time: '04:30 - 05:15',
      duration: '45 Mins',
      level: 'BEGINNER',
      speaker: 'Vikram Sethi',
      role: 'VP of Eng, CloudGrid',
      description: 'Docker containerization, serverless edge functions, domain configuration, and continuous deployment pipelines.'
    },
    {
      id: 6,
      title: 'Startup Pitching & VC Storytelling',
      time: '09:00 - 10:00',
      duration: '60 Mins',
      level: 'ALL LEVELS',
      speaker: 'Karan Malhotra',
      role: 'Partner, VentureX Capital',
      description: 'How to structure your 2-minute live demo pitch, present metrics, highlight market viability, and win judges over.'
    },
    {
      id: 7,
      title: 'Mastering Git & GitHub Team Collaboration',
      time: '19:45 - 20:30',
      duration: '45 Mins',
      level: 'BEGINNER',
      speaker: 'Rohan Sharma',
      role: 'GitHub Campus Expert',
      description: 'Branch management, merge conflict resolution, pull request reviews, and GitHub Actions automation during sprint hacking.'
    },
    {
      id: 8,
      title: 'UI/UX Design Systems for Developers',
      time: '02:30 - 03:15',
      duration: '45 Mins',
      level: 'BEGINNER / INT',
      speaker: 'Elena Rostova',
      role: 'Design Director, Aura Studio',
      description: 'Dark mode typography, color contrast compliance, micro-animations, and building polished UI components rapidly.'
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HANDS-ON LEARNING</div>
          <GlitchText text="TECHNICAL WORKSHOPS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Level up your technical stack during the night with expert-led micro-workshops and live coding demos.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {workshopList.map((ws) => (
              <WorkshopCard key={ws.id} workshop={ws} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
