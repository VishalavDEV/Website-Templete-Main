import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FloatingStatusCard: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate('/work/monument-brand-identity')}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      className="glass-panel p-5 rounded-2xl max-w-xs transition-transform duration-200 ease-out cursor-pointer group hover:border-accent-coral/40"
      data-cursor="VIEW"
      data-cursor-text="FEATURED"
    >
      <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-ink-muted">
        <span className="flex items-center gap-1.5 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-coral animate-pulse" />
          CURRENTLY BUILDING
        </span>
        <span className="font-semibold text-accent-coral">01 / 08</span>
      </div>

      <h4 className="text-sm font-semibold text-ink-primary group-hover:text-accent-coral transition-colors">
        Monument Identity System
      </h4>
      <p className="text-xs text-ink-secondary mt-1 leading-relaxed">
        Digital experiences & architectural guidelines for ambitious leaders.
      </p>

      <div className="mt-3 pt-3 border-t border-ink-border/60 flex items-center justify-between text-[11px] font-mono text-ink-muted group-hover:text-ink-primary">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-accent-coral" />
          CASE STUDY
        </span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
