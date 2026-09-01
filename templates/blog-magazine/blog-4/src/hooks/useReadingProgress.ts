import { useState, useEffect, type RefObject } from 'react';

export function useReadingProgress(targetRef?: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (targetRef && targetRef.current) {
        const element = targetRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        const start = elementTop;
        const end = elementTop + elementHeight - windowHeight;

        if (scrollPosition < start) {
          setProgress(0);
        } else if (scrollPosition > end) {
          setProgress(100);
        } else {
          const currentProgress = ((scrollPosition - start) / (end - start)) * 100;
          setProgress(Math.min(100, Math.max(0, currentProgress)));
        }
      } else {
        const currentProgress = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
          setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
        }
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, [targetRef]);

  return progress;
}
