import { useEffect } from 'react';

export function useKeyboardShortcut(keys: string[], callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const matches = keys.every(key => {
        if (key === 'meta') return event.metaKey || event.ctrlKey;
        if (key === 'shift') return event.shiftKey;
        if (key === 'alt') return event.altKey;
        return event.key.toLowerCase() === key.toLowerCase();
      });

      if (matches) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys, callback]);
}
