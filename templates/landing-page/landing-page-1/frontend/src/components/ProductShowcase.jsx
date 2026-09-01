import React, { useState } from 'react';
import { CheckSquare, MessageSquare, Calendar, BarChart3, Plus, ArrowRight, Sparkles, Check, Play, User } from 'lucide-react';
import './ProductShowcase.css';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('tasks');

  // Interactive Task List State (for Tasks Tab)
  const [todoTasks, setTodoTasks] = useState([
    { id: 101, title: 'Draft marketing copy', tag: 'feat', checked: false, assignee: 'S' },
    { id: 102, title: 'Fix CSS layout bugs', tag: 'bug', checked: true, assignee: 'M' },
    { id: 103, title: 'Write dev guidelines', tag: 'docs', checked: false, assignee: 'A' },
  ]);

  const toggleTask = (id) => {
    setTodoTasks(
      todoTasks.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  // Interactive AI Assistant Chat State (for AI Tab)
  const [chatLog, setChatLog] = useState([
    { role: 'user', content: 'Summarize blocker in Sprint 4.' },
    { role: 'ai', content: 'Sprint 4 velocity was affected by API downtime. 3 tasks were delayed. Primary recommendation: Setup redundant gateway fallbacks.' }
  ]);

  const handleAiPrompt = (prompt) => {
    const userMsg = { role: 'user', content: prompt };
    let aiMsg = { role: 'ai', content: '' };

    if (prompt.includes('velocity')) {
      aiMsg.content = "Current velocity is 84 pts/sprint. We are 12% ahead of our Q3 targets due to automation optimizations.";
    } else if (prompt.includes('bottlenecks')) {
      aiMsg.content = "I found 2 bottlenecks: code review idle time (average 18h) and design asset approvals. Recommend setting up Slack alert reminders.";
    } else {
      aiMsg.content = "Analyzing codebase... All integrations are healthy. Let me know if you would like me to draft a summary report.";
    }

    setChatLog([...chatLog, userMsg, aiMsg]);
  };

  return (
    <section className="section-padding showcase-section" id="product-showcase">
      <div className="glow-blur showcase-glow"></div>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Product Tour</span>
          <h2 className="section-title">One workspace. Endless momentum.</h2>
          <p className="section-desc">
            Explore the live interface modules below. Click tabs to toggle between workspace views and interact with our intelligent features.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="showcase-tabs-container reveal">
          <div className="showcase-tabs">
            <button
              className={`showcase-tab ${activeTab === 'tasks' ? 'active' : ''}`}
              onClick={() => setActiveTab('tasks')}
            >
              <CheckSquare size={16} />
              <span>Tasks</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai')}
            >
              <MessageSquare size={16} />
              <span>AI Assistant</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={16} />
              <span>Calendar</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart3 size={16} />
              <span>Analytics</span>
            </button>
          </div>
        </div>

        {/* Showcase Mockup Screens */}
        <div className="showcase-display reveal">
          
          {/* TASKS TAB */}
          {activeTab === 'tasks' && (
            <div className="showcase-mockup-frame">
              <div className="mockup-frame-header">
                <div className="frame-dots">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                </div>
                <div className="frame-title">Sprint Dashboard — board.flowly.ai</div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="kanban-grid">
                
                {/* Kanban Column 1: Backlog */}
                <div className="kanban-col">
                  <div className="kanban-col-header">
                    <span>Backlog</span>
                    <span className="kanban-col-count">2</span>
                  </div>
                  <div className="kanban-card">
                    <span className="kanban-card-tag feat">Feature</span>
                    <div className="kanban-card-title">Integrate Auth0 auth flow</div>
                    <div className="kanban-card-footer">
                      <div className="kanban-avatar">M</div>
                      <span className="kanban-card-meta">Jul 28</span>
                    </div>
                  </div>
                  <div className="kanban-card">
                    <span className="kanban-card-tag bug">Bug</span>
                    <div className="kanban-card-title">Mobile navigation shifts</div>
                    <div className="kanban-card-footer">
                      <div className="kanban-avatar">S</div>
                      <span className="kanban-card-meta">Jul 29</span>
                    </div>
                  </div>
                </div>

                {/* Kanban Column 2: In Progress */}
                <div className="kanban-col">
                  <div className="kanban-col-header">
                    <span>In Progress</span>
                    <span className="kanban-col-count">1</span>
                  </div>
                  <div className="kanban-card">
                    <span className="kanban-card-tag feat">Feature</span>
                    <div className="kanban-card-title">Drafting dashboard widgets</div>
                    <div className="kanban-card-footer">
                      <div className="kanban-avatar">A</div>
                      <span className="kanban-card-meta">Active</span>
                    </div>
                  </div>
                </div>

                {/* Kanban Column 3: Interactive To-Do List */}
                <div className="kanban-col">
                  <div className="kanban-col-header">
                    <span>Interactive List</span>
                    <span className="kanban-col-count">{todoTasks.filter(t => !t.checked).length}</span>
                  </div>
                  {todoTasks.map((task) => (
                    <div
                      key={task.id}
                      className="kanban-card"
                      onClick={() => toggleTask(task.id)}
                      style={{ cursor: 'pointer', borderLeft: task.checked ? '3px solid #10b981' : 'none' }}
                    >
                      <span className={`kanban-card-tag ${task.tag}`}>
                        {task.tag === 'feat' ? 'Feature' : task.tag === 'bug' ? 'Bug' : 'Docs'}
                      </span>
                      <div className="kanban-card-title" style={{ textDecoration: task.checked ? 'line-through' : 'none', opacity: task.checked ? 0.6 : 1 }}>
                        {task.title}
                      </div>
                      <div className="kanban-card-footer">
                        <div className="kanban-avatar">{task.assignee}</div>
                        <span className="kanban-card-meta" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          {task.checked ? <Check size={12} strokeWidth={3} style={{ color: '#10b981' }} /> : 'Click to finish'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kanban Column 4: Completed */}
                <div className="kanban-col">
                  <div className="kanban-col-header">
                    <span>Completed</span>
                    <span className="kanban-col-count">2</span>
                  </div>
                  <div className="kanban-card" style={{ opacity: 0.6 }}>
                    <span className="kanban-card-tag docs">Docs</span>
                    <div className="kanban-card-title" style={{ textDecoration: 'line-through' }}>Setup repository guidelines</div>
                    <div className="kanban-card-footer">
                      <div className="kanban-avatar">M</div>
                      <span className="kanban-card-meta">Done</span>
                    </div>
                  </div>
                  <div className="kanban-card" style={{ opacity: 0.6 }}>
                    <span className="kanban-card-tag feat">Feature</span>
                    <div className="kanban-card-title" style={{ textDecoration: 'line-through' }}>Launch staging website</div>
                    <div className="kanban-card-footer">
                      <div className="kanban-avatar">S</div>
                      <span className="kanban-card-meta">Done</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* AI ASSISTANT TAB */}
          {activeTab === 'ai' && (
            <div className="showcase-mockup-frame">
              <div className="mockup-frame-header">
                <div className="frame-dots">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                </div>
                <div className="frame-title">AI Terminal — assistant.flowly.ai</div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="ai-tab-grid">
                
                {/* Chat Panel */}
                <div className="ai-tab-chat">
                  {chatLog.map((msg, idx) => (
                    <div key={idx} className={`ai-tab-msg ${msg.role}`}>
                      <div className="ai-tab-avatar">
                        {msg.role === 'user' ? 'U' : <Sparkles size={14} />}
                      </div>
                      <div className="ai-tab-msg-bubble">
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Suggestion prompt tags */}
                  <div className="ai-tab-suggestions">
                    <button className="ai-suggestion" onClick={() => handleAiPrompt('Analyze velocity')}>
                      Analyze velocity
                    </button>
                    <button className="ai-suggestion" onClick={() => handleAiPrompt('What are current bottlenecks?')}>
                      What are current bottlenecks?
                    </button>
                  </div>
                </div>

                {/* Info Sidebar panel */}
                <div className="ai-tab-sidebar">
                  <div className="mockup-card">
                    <div className="ai-header">
                      <Sparkles size={14} />
                      <span>Sprint Status Report</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 8 }}>
                      AI monitored 4 platforms. Code quality score is 92%. Focus is centered on Frontend refinement.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* CALENDAR TAB */}
          {activeTab === 'calendar' && (
            <div className="showcase-mockup-frame">
              <div className="mockup-frame-header">
                <div className="frame-dots">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                </div>
                <div className="frame-title">Calendar Timeline — schedule.flowly.ai</div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="cal-grid">
                {/* Time markers */}
                <div className="cal-timeline">
                  <div className="cal-time-label">09:00 AM</div>
                  <div className="cal-time-label">10:00 AM</div>
                  <div className="cal-time-label">11:00 AM</div>
                  <div className="cal-time-label">12:00 PM</div>
                  <div className="cal-time-label">01:00 PM</div>
                </div>

                {/* Events list */}
                <div className="cal-events-col">
                  
                  <div className="cal-event-block">
                    <div className="cal-event-info">
                      <span className="cal-event-name">Daily Engineering Huddle</span>
                      <span className="cal-event-dur">9:00 AM - 9:30 AM | Meeting Room 2</span>
                    </div>
                    <div className="cal-avatars-group">
                      <div className="kanban-avatar">M</div>
                      <div className="kanban-avatar" style={{ marginLeft: -6 }}>S</div>
                      <div className="kanban-avatar" style={{ marginLeft: -6 }}>A</div>
                    </div>
                  </div>

                  <div className="cal-event-block secondary">
                    <div className="cal-event-info">
                      <span className="cal-event-name">Website Launch Prep</span>
                      <span className="cal-event-dur">10:00 AM - 11:30 AM | Google Meet</span>
                    </div>
                    <div className="cal-avatars-group">
                      <div className="kanban-avatar">S</div>
                      <div className="kanban-avatar" style={{ marginLeft: -6 }}>A</div>
                    </div>
                  </div>

                  <div className="cal-event-block tertiary">
                    <div className="cal-event-info">
                      <span className="cal-event-name">AI Code Review & Merge</span>
                      <span className="cal-event-dur">12:00 PM - 12:45 PM | Dev Branch</span>
                    </div>
                    <div className="cal-avatars-group">
                      <div className="kanban-avatar">M</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ANALYTICS TAB */}
          {activeTab === 'analytics' && (
            <div className="showcase-mockup-frame">
              <div className="mockup-frame-header">
                <div className="frame-dots">
                  <div className="frame-dot red"></div>
                  <div className="frame-dot yellow"></div>
                  <div className="frame-dot green"></div>
                </div>
                <div className="frame-title">Team Performance — analytics.flowly.ai</div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="chart-grid">
                
                {/* Horizontal Bar Chart */}
                <div className="chart-bar-container">
                  <div className="chart-bar-item">
                    <span className="chart-bar-label">Mon</span>
                    <div className="chart-bar-outer">
                      <div className="chart-bar-inner" style={{ width: '65%' }}></div>
                    </div>
                    <span className="chart-bar-val">65%</span>
                  </div>
                  <div className="chart-bar-item">
                    <span className="chart-bar-label">Tue</span>
                    <div className="chart-bar-outer">
                      <div className="chart-bar-inner" style={{ width: '88%' }}></div>
                    </div>
                    <span className="chart-bar-val">88%</span>
                  </div>
                  <div className="chart-bar-item">
                    <span className="chart-bar-label">Wed</span>
                    <div className="chart-bar-outer">
                      <div className="chart-bar-inner" style={{ width: '95%' }}></div>
                    </div>
                    <span className="chart-bar-val">95%</span>
                  </div>
                  <div className="chart-bar-item">
                    <span className="chart-bar-label">Thu</span>
                    <div className="chart-bar-outer">
                      <div className="chart-bar-inner" style={{ width: '74%' }}></div>
                    </div>
                    <span className="chart-bar-val">74%</span>
                  </div>
                  <div className="chart-bar-item">
                    <span className="chart-bar-label">Fri</span>
                    <div className="chart-bar-outer">
                      <div className="chart-bar-inner" style={{ width: '42%' }}></div>
                    </div>
                    <span className="chart-bar-val">42%</span>
                  </div>
                </div>

                {/* Radial Gauge metrics panel */}
                <div className="chart-radial-panel">
                  <div className="radial-percentage">92%</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Velocity Score</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Outstanding sprint velocity this week</div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
