import React, { useEffect, useState } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="reading-bar fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#C85A32] dark:bg-[#E27453] transition-all duration-75 shadow-xs"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
