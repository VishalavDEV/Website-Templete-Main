import React, { useState, useEffect } from 'react';

interface LoadingExperienceProps {
  onComplete: () => void;
}

export const LoadingExperience: React.FC<LoadingExperienceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    let animFrame: number;
    let fadeTimer: number;
    let safetyTimer: number;
    let isFinished = false;

    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      setIsFading(true);
      fadeTimer = window.setTimeout(() => {
        onComplete();
      }, 350);
    };

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const duration = 1200; // 1.2 seconds cinematic load
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      if (isFinished) return;
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        finish();
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    // Hard safety timer: guarantee dismissal after 1.8s regardless of tab suspension/delays
    safetyTimer = window.setTimeout(() => {
      finish();
    }, 1800);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(fadeTimer);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '400px', padding: '0 20px' }}>
        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            color: 'var(--bg-light)'
          }}
        >
          NOVA//ECHO
        </h1>

        {/* Status Line */}
        <p
          style={{
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            color: 'var(--lavender)',
            marginBottom: '2.5rem',
            textTransform: 'uppercase'
          }}
        >
          INITIALIZING FREQUENCY...
        </p>

        {/* Progress Counter & Bar */}
        <div style={{ width: '100%', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-condensed)',
              fontSize: '1.2rem',
              color: 'var(--coral)',
              marginBottom: '8px'
            }}
          >
            <span>FREQUENCY</span>
            <span>{String(progress).padStart(2, '0')} / 100</span>
          </div>

          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgba(242, 238, 232, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: 'var(--accent-warm)',
                transition: 'width 0.05s linear'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
