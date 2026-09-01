import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, User, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import './AIAssistant.css';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'user',
      content: 'What should my team focus on today?',
    },
    {
      id: 2,
      role: 'ai',
      content: 'Based on upcoming deadlines and project activity, I recommend prioritizing the website launch tasks first. I found two high-urgency items that require immediate attention:',
      tasks: [
        { id: 'ai-t1', title: 'Review website launch copy', category: 'Marketing', done: false },
        { id: 'ai-t2', title: 'Fix API gateway bottlenecks', category: 'Devops', done: false },
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const consoleBodyRef = useRef(null);

  // Auto scroll to bottom of chat console
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      role: 'user',
      content: text
    };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      let aiResponse = {
        id: Date.now() + 1,
        role: 'ai',
        content: ''
      };

      const normalized = text.toLowerCase();
      if (normalized.includes('focus') || normalized.includes('today')) {
        aiResponse.content = 'Here are today’s critical priorities based on active milestones:';
        aiResponse.tasks = [
          { id: 'ai-t3', title: 'Sync Figma styles with index.css', category: 'Design', done: false },
          { id: 'ai-t4', title: 'Submit pull request for database index', category: 'Backend', done: false }
        ];
      } else if (normalized.includes('overload') || normalized.includes('team')) {
        aiResponse.content = 'Sarah currently has 5 active assignments (est. 42h) while Marcus has 2 tasks (est. 18h). I recommend re-allocating the QA review block to Marcus to balance workloads.';
      } else if (normalized.includes('bottleneck') || normalized.includes('sprint')) {
        aiResponse.content = 'Sprint velocity is currently blocked by a delayed design system sign-off. I’ve flagged 3 sub-tasks and pinged the lead reviewer.';
      } else {
        aiResponse.content = 'I’ve analyzed the workspace activity. No major risks were detected. Let me know if you would like me to compile a progress report or create a new automated task checklist.';
      }

      setMessages(prev => [...prev, aiResponse]);
    }, 1200);
  };

  // Toggle task completeness inside chat bubbles
  const toggleChatTask = (msgId, taskId) => {
    setMessages(prev =>
      prev.map(msg => {
        if (msg.id === msgId && msg.tasks) {
          return {
            ...msg,
            tasks: msg.tasks.map(t =>
              t.id === taskId ? { ...t, done: !t.done } : t
            )
          };
        }
        return msg;
      })
    );
  };

  return (
    <section className="section-padding ai-section" id="solutions">
      <div className="glow-blur ai-glow-1"></div>
      <div className="glow-blur ai-glow-2"></div>
      <div className="grid-bg"></div>

      <div className="container ai-layout">
        
        {/* Left Side: Copy Info */}
        <div className="ai-content reveal">
          <span className="section-badge">AI Teammate</span>
          <h2 className="section-title">Meet the teammate who never stops thinking.</h2>
          <p className="section-desc" style={{ marginBottom: 28 }}>
            Flowly’s ambient AI assistant continuously operates in the background—indexing team documentation, analyzing project schedules, and compiling critical priorities so you don't have to search.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-accent)', padding: 8, borderRadius: 8 }}>
                <Sparkles size={18} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>Contextual Intelligence</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Answers queries by scanning project boards, Figma specs, and Slack history simultaneously.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', padding: 8, borderRadius: 8 }}>
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>Actionable Workflows</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Don’t just chat. Create tasks, re-allocate backlogs, and run calendar checks directly from commands.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive AI Assistant Console */}
        <div className="ai-console-wrapper reveal">
          <div className="ai-console">
            
            {/* Console Header */}
            <div className="ai-console-header">
              <div className="ai-console-title">
                <Sparkles size={14} className="gradient-accent" />
                <span>Flowly Assistant Console</span>
              </div>
              <div className="frame-dots">
                <div className="frame-dot red"></div>
                <div className="frame-dot yellow"></div>
                <div className="frame-dot green"></div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="ai-console-body" ref={consoleBodyRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-row ${msg.role}`}>
                  <div className="chat-avatar">
                    {msg.role === 'user' ? 'U' : <Sparkles size={14} />}
                  </div>
                  <div>
                    <div className="chat-bubble">
                      <p>{msg.content}</p>
                      
                      {/* Render custom tasks if present */}
                      {msg.tasks && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                          {msg.tasks.map((task) => (
                            <div
                              key={task.id}
                              className="chat-action-card"
                              onClick={() => toggleChatTask(msg.id, task.id)}
                              style={{ cursor: 'pointer', borderLeft: task.done ? '3px solid #10b981' : '1px solid rgba(255, 255, 255, 0.05)' }}
                            >
                              <div>
                                <span className="chat-action-title" style={{ textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? 0.6 : 1 }}>
                                  {task.title}
                                </span>
                                <div className="chat-action-meta">{task.category}</div>
                              </div>
                              <div style={{ color: task.done ? '#10b981' : 'var(--text-muted)' }}>
                                {task.done ? <CheckCircle2 size={16} /> : <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1.5px solid var(--text-muted)' }}></div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="chat-row ai">
                  <div className="chat-avatar">
                    <Sparkles size={14} />
                  </div>
                  <div className="chat-bubble" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="typing-dots">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Console Footer */}
            <div className="ai-console-footer">
              <div className="ai-suggestions-row">
                <button className="ai-suggestion" onClick={() => handleSend('What should my team focus on today?')}>
                  What should my team focus on today?
                </button>
                <button className="ai-suggestion" onClick={() => handleSend('Optimize sprint bottlenecks')}>
                  Optimize sprint bottlenecks
                </button>
                <button className="ai-suggestion" onClick={() => handleSend('Who is overloaded this week?')}>
                  Who is overloaded this week?
                </button>
              </div>

              <div className="ai-input-container">
                <input
                  type="text"
                  className="ai-input"
                  placeholder="Ask Flowly AI to analyze sprint or assign tasks..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(inputVal)}
                />
                <button className="btn btn-primary btn-sm" style={{ padding: 10 }} onClick={() => handleSend(inputVal)}>
                  <Send size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
