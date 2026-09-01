import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * RouteTransition provides a subtle, smooth fade-in and settling transition
 * when navigating between pages across the application.
 */
export const RouteTransition: React.FC<RouteTransitionProps> = ({
  children,
  className = ''
}) => {
  const location = useLocation();

  return (
    <div
      key={`${location.pathname}${location.search}`}
      className={`page-transition-enter w-full ${className}`}
    >
      {children}
    </div>
  );
};
