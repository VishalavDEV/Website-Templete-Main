import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PillNav from '../components/PillNav/PillNav';
import Footer from '../components/Footer/Footer';
import AuraBackground from '../components/AuraBackground/AuraBackground';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AuraBackground className="atlas-app-layout">
      <PillNav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </AuraBackground>
  );
}
