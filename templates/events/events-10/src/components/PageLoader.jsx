import React from 'react';
import { Flame } from 'lucide-react';

export const PageLoader = () => {
  return (
    <div className="page-loader-overlay">
      <div className="loader-ball-ring">
        <Flame size={36} color="#ff4d00" />
      </div>
      <div className="loader-text font-display">LOADING THUNDERCOURT CLASH...</div>
    </div>
  );
};
