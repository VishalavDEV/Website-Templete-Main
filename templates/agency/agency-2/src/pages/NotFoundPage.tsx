import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowLeft, Home } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <div className="glass-panel-strong p-10 sm:p-16 rounded-3xl border border-ink-border max-w-xl space-y-6 animate-scaleUp">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — PAGE NOT FOUND</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase text-ink-primary tracking-tight leading-none">
          OUT OF <br />
          <span className="text-stroke-strong">BOUNDS</span>
        </h1>

        <p className="text-sm text-ink-secondary leading-relaxed max-w-md mx-auto">
          The requested archive coordinate does not exist or has been relocated in our design index.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton variant="primary" size="md" onClick={() => navigate('/')}>
            <Home className="w-4 h-4 mr-2" />
            RETURN TO HOMEPAGE
          </MagneticButton>

          <MagneticButton variant="outline" size="md" onClick={() => navigate('/work')}>
            BROWSE WORK
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
