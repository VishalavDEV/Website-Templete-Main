import React, { useState, useEffect } from 'react';
import { Sparkles, Mic, MessageSquare, Calendar, Lightbulb, Check, ArrowRight, Play, CheckCircle2, Clock } from 'lucide-react';
import './HeroVisual.css';

export default function HeroVisual() {
  const [currentStep, setCurrentStep] = useState('capture'); // 'capture' | 'organize' | 'clarity'
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play steps cycle
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 'capture') return 'organize';
        if (prev === 'organize') return 'clarity';
        return 'capture';
      });
    }, 7000); // Transition every 7 seconds

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStepClick = (step) => {
    setCurrentStep(step);
    setIsPlaying(false); // Pause autoplay once user interacts
  };

  return (
    <div className="hero-visual-container">
      {/* Interactive Visual Window */}
      <div className={`visual-canvas ${currentStep === 'organize' ? 'dark-backdrop' : ''}`}>
        
        {/* STEP 1: CAPTURE */}
        <div className={`visual-pane capture-layout ${currentStep === 'capture' ? 'active' : ''}`}>
          <div className="capture-card float-1">
            <div className="capture-card-icon">
              <Mic size={16} />
            </div>
            <div className="capture-card-info">
              <span className="capture-card-source">Audio Note Transcript</span>
              <span className="capture-card-text">Deploy website launch copy on Friday morning</span>
            </div>
          </div>

          <div className="capture-card float-2">
            <div className="capture-card-icon blue">
              <MessageSquare size={16} />
            </div>
            <div className="capture-card-info">
              <span className="capture-card-source">Slack Channel</span>
              <span className="capture-card-text">Marcus: Let's clean up index.css layout bugs</span>
            </div>
          </div>

          <div className="capture-card float-3">
            <div className="capture-card-icon amber">
              <Calendar size={16} />
            </div>
            <div className="capture-card-info">
              <span className="capture-card-source">Calendar Invite</span>
              <span className="capture-card-text">Client Review Sync at 1:30 PM</span>
            </div>
          </div>

          <div className="capture-card float-4">
            <div className="capture-card-icon emerald">
              <Lightbulb size={16} />
            </div>
            <div className="capture-card-info">
              <span className="capture-card-source">Idea Capture</span>
              <span className="capture-card-text">Establish automated scheduling rules</span>
            </div>
          </div>
        </div>

        {/* STEP 2: ORGANIZE */}
        <div className={`visual-pane organize-layout ${currentStep === 'organize' ? 'active' : ''}`}>
          {/* Glowing Connecting SVG Lines */}
          <svg className="connector-svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Top-left input connection */}
            <path d="M 80,80 Q 150,150 200,210" className="connector-path" />
            {/* Top-right input connection */}
            <path d="M 400,100 Q 330,160 280,210" className="connector-path" />
            {/* Bottom-left input connection */}
            <path d="M 60,340 Q 140,290 200,210" className="connector-path" />
            {/* Bottom-right input connection */}
            <path d="M 380,360 Q 300,300 280,210" className="connector-path" />
          </svg>

          {/* Orbiting card elements being processed */}
          <div className="orbit-card orbit-1 animate-float-slow">
            <Mic size={12} style={{ color: 'var(--color-primary)' }} />
            <span>Parsing launch...</span>
          </div>
          <div className="orbit-card orbit-2 animate-float-fast">
            <MessageSquare size={12} style={{ color: 'var(--color-secondary)' }} />
            <span>Extracting task...</span>
          </div>
          <div className="orbit-card orbit-3 animate-float-slow">
            <Calendar size={12} style={{ color: '#d97706' }} />
            <span>Mapping 1:30 PM...</span>
          </div>
          <div className="orbit-card orbit-4 animate-float-fast">
            <Lightbulb size={12} style={{ color: '#059669' }} />
            <span>Filing backlog...</span>
          </div>

          {/* Central Pulsing AI Parser Node */}
          <div className="central-processor">
            <div className="processor-pulse-ring"></div>
            <div className="processor-glow-ring"></div>
            <Sparkles size={28} style={{ color: 'var(--color-accent)' }} />
            <span className="processor-text">Flowly AI</span>
          </div>

          {/* Status ticker badge */}
          <div className="ai-status-ticker">
            <div className="ticker-dot"></div>
            <span>AI: Parsing natural language text...</span>
          </div>
        </div>

        {/* STEP 3: CLARITY */}
        <div className={`visual-pane clarity-layout ${currentStep === 'clarity' ? 'active' : ''}`}>
          
          {/* Column 1: Today's Priorities list */}
          <div className="clarity-column">
            <div className="clarity-panel">
              <div className="clarity-panel-header">
                <span>Today's Priorities</span>
                <span className="clarity-badge purple">AI Picked</span>
              </div>
              <div className="clarity-tasks-list">
                <div className="clarity-task-item done">
                  <div className="clarity-task-check">
                    <Check size={8} strokeWidth={3} />
                  </div>
                  <span>Deploy website launch copy</span>
                </div>
                <div className="clarity-task-item">
                  <div className="clarity-task-check"></div>
                  <span>Fix index.css layout bugs</span>
                </div>
                <div className="clarity-task-item">
                  <div className="clarity-task-check"></div>
                  <span>Automated schedule rules setup</span>
                </div>
              </div>
            </div>

            {/* Schedule Slot panel */}
            <div className="clarity-panel">
              <div className="clarity-panel-header">
                <span>Timeline</span>
                <span className="clarity-badge blue">Synced</span>
              </div>
              <div className="clarity-cal-slot">
                <span className="clarity-cal-time">1:30 PM</span>
                <span className="clarity-cal-title">Client Review Sync</span>
              </div>
            </div>
          </div>

          {/* Column 2: AI recommendations & progress */}
          <div className="clarity-column">
            <div className="clarity-panel">
              <div className="clarity-ai-widget">
                <div className="clarity-panel-header">
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Sparkles size={12} style={{ color: 'var(--color-accent)' }} />
                    <span>AI Assistant</span>
                  </span>
                </div>
                <div className="clarity-ai-bubble">
                  I detected that Sarah is assigned to 5 active tasks. I recommend routing the CSS task to Marcus.
                </div>
                <button className="clarity-ai-action-btn">
                  Reallocate CSS Task
                </button>
              </div>
            </div>

            {/* Metric meter */}
            <div className="clarity-panel" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 44, height: 44 }}>
                <svg width="44" height="44" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="3" />
                  <circle cx="22" cy="22" r="18" fill="none" stroke="url(#line-gradient)" strokeWidth="3" strokeDasharray="113.1" strokeDashoffset="37.7" transform="rotate(-90 22 22)" strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '0.65rem', fontWeight: 800 }}>66%</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>Workspace Clarity</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>All priorities categorized</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Stepper Buttons for workflow steps */}
      <div className="visual-stepper">
        <button
          className={`visual-step-btn ${currentStep === 'capture' ? 'active' : ''}`}
          onClick={() => handleStepClick('capture')}
        >
          <span>01. Capture Inputs</span>
        </button>
        <button
          className={`visual-step-btn ${currentStep === 'organize' ? 'active' : ''}`}
          onClick={() => handleStepClick('organize')}
        >
          <span>02. AI Organize</span>
        </button>
        <button
          className={`visual-step-btn ${currentStep === 'clarity' ? 'active' : ''}`}
          onClick={() => handleStepClick('clarity')}
        >
          <span>03. Get Clarity</span>
        </button>
      </div>
    </div>
  );
}
