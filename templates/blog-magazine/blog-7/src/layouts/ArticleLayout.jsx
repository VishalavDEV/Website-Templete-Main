import React from 'react';
import { Outlet } from 'react-router-dom';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { MainLayout } from './MainLayout';

export function ArticleLayout() {
  const progress = useReadingProgress();

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
      <MainLayout />
    </>
  );
}
