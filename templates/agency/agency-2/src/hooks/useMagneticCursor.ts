import { useState, useEffect } from 'react';

export type CursorType = 'DEFAULT' | 'LINK' | 'VIEW' | 'DRAG' | 'OPEN';

export function useMagneticCursor() {
  const [cursorType, setCursorType] = useState<CursorType>('DEFAULT');
  const [cursorText, setCursorText] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as CursorType;
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorType(type || 'LINK');
        setCursorText(text);
        return;
      }

      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorType('LINK');
        setCursorText('');
        return;
      }

      setCursorType('DEFAULT');
      setCursorText('');
    };

    window.addEventListener('mouseover', handleMouseEnter);
    return () => {
      window.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

  return { cursorType, cursorText, isEnabled, setCursorType, setCursorText };
}
