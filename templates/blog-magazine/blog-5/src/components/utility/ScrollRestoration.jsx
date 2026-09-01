import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Automatically resets window scroll smoothly to top on route navigation
 */
export function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}
