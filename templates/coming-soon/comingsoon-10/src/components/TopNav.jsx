import React from 'react';
import { Layers, Sparkles, Monitor, Tablet, Smartphone, Code2, Flame, Feather, Crown } from 'lucide-react';

export default function TopNav({
  activeVariation,
  onSelectVariation,
  viewportMode,
  onSelectViewport,
  onOpenPromptModal,
}) {
  return (
    <header className="controller-bar">
      <div className="controller-logo">
        <span className="controller-logo-badge">PRO TEMPLATES</span>
        <span className="full-title">Coming Soon Event Studio</span>
      </div>

      {/* Variation Switcher */}
      <div className="controller-switcher-group">
        <button
          className={`controller-btn ${activeVariation === 'minimalist' ? 'active' : ''}`}
          onClick={() => onSelectVariation('minimalist')}
          title="Minimalist Countdown-Focused Theme"
        >
          <Flame size={15} className="text-cyan" />
          <span>Minimalist Countdown</span>
        </button>

        <button
          className={`controller-btn ${activeVariation === 'vibrant' ? 'active' : ''}`}
          onClick={() => onSelectVariation('vibrant')}
          title="Vibrant Illustration-Heavy Theme"
        >
          <Sparkles size={15} className="text-pink" />
          <span>Vibrant Illustration</span>
        </button>

        <button
          className={`controller-btn ${activeVariation === 'elegant' ? 'active' : ''}`}
          onClick={() => onSelectVariation('elegant')}
          title="Elegant Typography-Driven Theme"
        >
          <Crown size={15} className="text-gold" />
          <span>Elegant Typography</span>
        </button>
      </div>

      {/* Viewport & Specs Actions */}
      <div className="controller-actions">
        <div className="controller-switcher-group device-switcher">
          <button
            className={`controller-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
            onClick={() => onSelectViewport('desktop')}
            title="Desktop Viewport (Full)"
          >
            <Monitor size={15} />
          </button>
          <button
            className={`controller-btn ${viewportMode === 'tablet' ? 'active' : ''}`}
            onClick={() => onSelectViewport('tablet')}
            title="Tablet Viewport (768px - 1023px)"
          >
            <Tablet size={15} />
          </button>
          <button
            className={`controller-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
            onClick={() => onSelectViewport('mobile')}
            title="Mobile Viewport (320px - 767px)"
          >
            <Smartphone size={15} />
          </button>
        </div>

        <button className="prompt-btn" onClick={onOpenPromptModal}>
          <Code2 size={15} />
          <span>Specs & Master Prompt</span>
        </button>
      </div>
    </header>
  );
}
