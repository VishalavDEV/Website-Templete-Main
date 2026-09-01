import React from 'react';
import { MessageSquare, FileText, Calendar, Trello, PenTool, GitBranch } from 'lucide-react';
import './Integrations.css';

export default function Integrations() {
  const integrationsList = [
    {
      name: 'Slack',
      desc: 'Sync channel messages into tasks and trigger automatic priority alerts.',
      icon: <MessageSquare size={20} />,
    },
    {
      name: 'Notion',
      desc: 'Import wikis, docs, and notes databases directly into the AI Knowledge Hub.',
      icon: <FileText size={20} />,
    },
    {
      name: 'Google Calendar',
      desc: 'Auto-sync meetings, reserve deep focus time, and find mutual availabilities.',
      icon: <Calendar size={20} />,
    },
    {
      name: 'Jira',
      desc: 'Synchronize backlog ticket statuses and developer assignments automatically.',
      icon: <Trello size={20} />,
    },
    {
      name: 'Figma',
      desc: 'Link active design canvas frames to specs and check layout design blocks.',
      icon: <PenTool size={20} />,
    },
    {
      name: 'GitHub',
      desc: 'Connect repository commits and pull request events directly to issue items.',
      icon: <GitBranch size={20} />,
    },
  ];

  return (
    <section className="section-padding integrations-section">
      <div className="glow-blur integrations-glow"></div>
      <div className="grid-bg"></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Integrations</span>
          <h2 className="section-title">Works with the tools you already use.</h2>
          <p className="section-desc">
            Connect your stack in seconds. Flowly AI natively integrates with industry standard platforms to capture details where work already occurs.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="integrations-grid">
          {integrationsList.map((item, idx) => (
            <div key={idx} className="glass-card integration-card reveal">
              <div className="integration-logo-wrapper">
                {item.icon}
              </div>
              <div className="integration-content">
                <span className="integration-name">{item.name}</span>
                <p className="integration-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
