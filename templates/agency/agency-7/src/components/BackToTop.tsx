import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 shadow-xl backdrop-blur-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 hover:border-blue-500 transition-all scale-100 hover:scale-110"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
