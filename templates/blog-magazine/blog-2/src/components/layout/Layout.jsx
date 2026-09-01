import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AuraBackground from '../aura/AuraBackground';
import SplashCursor from '../cursor/SplashCursor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      {/* Global Interactive Cursor Effect */}
      <SplashCursor color="#d96c4a" secondaryColor="#ffb05a" />

      {/* Global Sunset Boulevard Aura Background */}
      <AuraBackground>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuraBackground>
    </>
  );
}

export default Layout;
