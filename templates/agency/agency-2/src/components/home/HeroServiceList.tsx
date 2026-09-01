import React from 'react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  { label: 'BRAND STRATEGY', id: 'brand-strategy' },
  { label: 'VISUAL IDENTITY', id: 'visual-identity' },
  { label: 'DIGITAL EXPERIENCES', id: 'digital-experiences' },
  { label: 'MOTION & 3D', id: 'motion-3d' },
];

export const HeroServiceList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-muted block mb-3">
        Core Disciplines
      </span>
      <ul className="space-y-1.5">
        {SERVICES.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => navigate(`/services/${item.id}`)}
              className="group flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase text-ink-secondary hover:text-accent-coral transition-all duration-300 transform hover:translate-x-2 text-left"
              data-cursor="LINK"
            >
              <span className="text-accent-coral opacity-40 group-hover:opacity-100 transition-opacity">/</span>
              <span className="group-hover:font-semibold">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
