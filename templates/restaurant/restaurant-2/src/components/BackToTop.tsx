import React from 'react';

export const BackToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" className="back-to-top" aria-label="Back to Top" onClick={scrollToTop}>
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};
