import React from 'react';
import { Brain, Mic, BookOpen, GitFork, TrendingUp, Grid } from 'lucide-react';
import './CoreFeatures.css';

export default function CoreFeatures() {
  const featuresList = [
    {
      title: 'AI Task Intelligence',
      desc: 'AI automatically organizes and prioritizes tasks based on deadline urgency, team workloads, and historic velocities.',
      icon: <Brain size={22} />,
    },
    {
      title: 'Smart Meeting Notes',
      desc: 'Turn conversations into summary transcripts and actionable, assigned tasks instantly without manual transcription.',
      icon: <Mic size={22} />,
    },
    {
      title: 'AI Knowledge Hub',
      desc: 'Find answers, draft templates, and retrieve files across all company notes, PDFs, and synced databases in seconds.',
      icon: <BookOpen size={22} />,
    },
    {
      title: 'Workflow Automation',
      desc: 'Automate repetitive workflows across team channels, task boards, and notification center events with no code.',
      icon: <GitFork size={22} />,
    },
    {
      title: 'Productivity Insights',
      desc: 'Visualize team focus areas, timeline bottlenecks, and meeting density to streamline calendar commitments.',
      icon: <TrendingUp size={22} />,
    },
    {
      title: 'Everything Connected',
      desc: 'Consolidate tasks, calendars, wiki documentation, and live chats in one shared workspace environment.',
      icon: <Grid size={22} />,
    },
  ];

  return (
    <section className="section-padding features-section" id="features">
      {/* Background glow layers */}
      <div className="glow-blur features-glow-1"></div>
      <div className="glow-blur features-glow-2"></div>
      <div className="grid-bg"></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Core Features</span>
          <h2 className="section-title">Everything your team needs to move faster.</h2>
          <p className="section-desc">
            Move away from disjointed tools. Flowly AI is custom engineered to bring intelligent productivity under one high-performance platform.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="features-grid">
          {featuresList.map((feature, idx) => (
            <div key={idx} className="glass-card feature-card reveal">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
