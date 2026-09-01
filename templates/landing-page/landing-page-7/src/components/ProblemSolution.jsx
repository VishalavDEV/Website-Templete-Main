import React from 'react';
import { X, Check, AlertTriangle, AlertCircle, Clock, FileX, ShieldAlert, Sparkles, Zap, Target, GitMerge } from 'lucide-react';
import './ProblemSolution.css';

export default function ProblemSolution() {
  const beforePoints = [
    {
      title: 'Tasks scattered everywhere',
      desc: 'Spreadsheets, sticky notes, and three different project managers.',
      icon: <AlertTriangle size={14} />,
    },
    {
      title: 'Endless status meetings',
      desc: 'Hours wasted trying to figure out what everyone is working on.',
      icon: <Clock size={14} />,
    },
    {
      title: 'Lost notes & documentation',
      desc: 'Critical information buried deep in chats or outdated docs.',
      icon: <FileX size={14} />,
    },
    {
      title: 'Missed deadlines',
      desc: 'Slipping timelines because updates are lost in the noise.',
      icon: <AlertCircle size={14} />,
    },
  ];

  const afterPoints = [
    {
      title: 'Everything connected',
      desc: 'Tasks, docs, calendars, and communications unified in one workspace.',
      icon: <GitMerge size={14} />,
    },
    {
      title: 'AI-powered summaries',
      desc: 'Instant synopses of meetings, notes, and long discussion threads.',
      icon: <Sparkles size={14} />,
    },
    {
      title: 'Smart priorities',
      desc: 'AI recommends what to tackle next based on real deadline gravity.',
      icon: <Target size={14} />,
    },
    {
      title: 'Clear workflows',
      desc: 'Automated status transitions keep execution flowing smoothly.',
      icon: <Zap size={14} />,
    },
  ];

  return (
    <section className="section-padding problemsol-section" id="solutions">
      <div className="glow-blur problemsol-glow"></div>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Comparison</span>
          <h2 className="section-title">Too many tools. Too much chaos.</h2>
          <p className="section-desc">
            Stop switching tabs. Flowly AI replaces fragmented systems with a single intelligent workspace that connects the dots for your team.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="problemsol-grid">
          
          {/* Before Flowly */}
          <div className="problemsol-pane before-flowly reveal">
            <div>
              <span className="pane-badge">Before Flowly</span>
              <h3 className="pane-title">The tool clutter cycle</h3>
              <p className="pane-desc">Fragile processes that break the moment your team scales up.</p>
              
              <div className="comparison-list">
                {beforePoints.map((point, idx) => (
                  <div key={idx} className="comparison-item">
                    <div className="comparison-icon-container">
                      {point.icon}
                    </div>
                    <div>
                      <div className="comparison-item-title">{point.title}</div>
                      <div className="comparison-item-desc">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Before Mockup */}
            <div className="mini-mockup">
              <div className="chaos-box chaos-1">
                <ShieldAlert size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                <span>Jira: 42 tickets stuck</span>
              </div>
              <div className="chaos-box chaos-2">
                <Clock size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                <span>Slack: 250 unread</span>
              </div>
              <div className="chaos-box chaos-3">
                <FileX size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                <span>Doc: V2_Final_edit.pdf</span>
              </div>
              <div className="chaos-box chaos-4">
                <AlertTriangle size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                <span>Meeting in 5m (Update?)</span>
              </div>
            </div>
          </div>

          {/* With Flowly */}
          <div className="problemsol-pane with-flowly reveal">
            <div>
              <span className="pane-badge">With Flowly</span>
              <h3 className="pane-title">Unified momentum</h3>
              <p className="pane-desc">Clear, automated workflows powered by task context and calendar alignment.</p>
              
              <div className="comparison-list">
                {afterPoints.map((point, idx) => (
                  <div key={idx} className="comparison-item">
                    <div className="comparison-icon-container">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div>
                      <div className="comparison-item-title">{point.title}</div>
                      <div className="comparison-item-desc">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* With Mockup */}
            <div className="mini-mockup" style={{ zIndex: 1 }}>
              <div className="clean-flow-line"></div>
              <div className="clean-flow">
                <div className="clean-flow-item" style={{ zIndex: 1 }}>
                  <Sparkles size={14} className="gradient-accent" />
                  <span>AI: Syncing Slack threads into specs</span>
                </div>
                <div className="clean-flow-item" style={{ zIndex: 1, paddingLeft: 16 }}>
                  <Target size={14} className="gradient-accent" />
                  <span>Roadmap: Finalized Q3 roadmap</span>
                </div>
                <div className="clean-flow-item" style={{ zIndex: 1 }}>
                  <Zap size={14} className="gradient-accent" />
                  <span>Trigger: Auto-assign tasks to dev team</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
