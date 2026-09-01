import React from 'react';
import { useReadingProgress } from '../../hooks/useReadingProgress';

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  );
}
