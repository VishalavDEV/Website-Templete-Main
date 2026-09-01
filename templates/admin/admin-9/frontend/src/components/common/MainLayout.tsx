import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  
  // Responsive sidebar toggle states
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebar_collapsed') === 'true';
  });

  const handleToggleSidebarMobile = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleToggleSidebarDesktop = () => {
    const nextState = !desktopSidebarCollapsed;
    setDesktopSidebarCollapsed(nextState);
    localStorage.setItem('sidebar_collapsed', String(nextState));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const getLeftPadding = () => {
    if (desktopSidebarCollapsed) return 'lg:pl-20';
    return 'lg:pl-64';
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      {/* Collapsible Sidebar */}
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        isCollapsed={desktopSidebarCollapsed}
        onLogout={handleLogout}
      />

      {/* Main Layout Area */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${getLeftPadding()}`}>
        {/* Top Navbar */}
        <Navbar
          onToggleSidebarMobile={handleToggleSidebarMobile}
          onToggleSidebarDesktop={handleToggleSidebarDesktop}
          onLogout={handleLogout}
        />

        {/* Content Outlet */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto animate-fade-in focus:outline-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
