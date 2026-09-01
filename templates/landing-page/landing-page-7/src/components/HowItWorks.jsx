import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect',
      desc: 'Integrate Slack, GitHub, Figma, and Google Calendar. Bring your team’s existing projects, tasks, and communications into Flowly in one click.',
    },
    {
      num: '02',
      title: 'Organize',
      desc: 'Flowly’s AI analyzes upcoming deadlines, message contexts, and resource workloads to map out optimal priorities and automate task status updates.',
    },
    {
      num: '03',
      title: 'Focus',
      desc: 'Get a clean, clutter-free schedule dashboard. Receive personalized priority updates and execute tasks with distraction-free interfaces.',
    },
  ];

  return (
    <section className="section-padding how-section" id="how-it-works">
      <div className="glow-blur how-glow"></div>
      <div className="grid-bg"></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Workflow, simplified.</h2>
          <p className="section-desc">
            Stop worrying about task logistics. Set up Flowly in three simple stages and let AI handle the heavy lifting.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="how-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card how-step-card reveal">
              <div className="how-number">{step.num}</div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
              {idx < steps.length - 1 && <div className="how-connector"></div>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
