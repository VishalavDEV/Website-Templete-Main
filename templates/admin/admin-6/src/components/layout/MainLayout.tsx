import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Breadcrumb } from './Breadcrumb';
import { GlobalSearchModal } from '../common/GlobalSearchModal';

export const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors flex">
      {/* Sidebar Navigation */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          collapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        {/* Top Header */}
        <Header onOpenMobileSidebar={() => setMobileOpen(true)} />

        {/* Page Content Shell */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Breadcrumb />
          <Outlet />
        </main>
      </div>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal />
    </div>
  );
};
