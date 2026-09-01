import React from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 space-y-8">
      <Badge variant="accent">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>ERROR CODE 404</span>
      </Badge>

      <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display leading-none">
        404 <span className="text-[var(--accent-color)]">LOST.</span>
      </h1>

      <p className="text-lg md:text-xl text-[var(--secondary-color)] max-w-md font-light leading-relaxed">
        The requested spatial coordinate or route does not exist in the Byteora network.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
        <Button href="/" variant="primary" size="lg">
          Return to Studio Home →
        </Button>
        <Button href="/portfolio" variant="outline" size="lg">
          Explore Selected Work
        </Button>
      </div>
    </div>
  );
};
