import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { ToastContainer } from '../Common/Toast';
import { GlobalSearchModal } from '../Common/GlobalSearchModal';
import { ProjectCreateModal } from '../../pages/Projects/ProjectCreateModal';
import { TaskCreateModal } from '../../pages/Tasks/TaskCreateModal';
import { clsx } from 'clsx';

export const MainLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Quick action modals
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  return (
    <div className="min-h-screen bg-app-main text-app-primary flex flex-col antialiased">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        onOpenCreateProjectModal={() => setIsCreateProjectOpen(true)}
      />

      {/* Main Content Area */}
      <div
        className={clsx(
          'flex-1 flex flex-col transition-all duration-300 min-h-screen',
          isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
        )}
      >
        {/* Top Navigation Header */}
        <Header
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onOpenCreateProjectModal={() => setIsCreateProjectOpen(true)}
          onOpenCreateTaskModal={() => setIsCreateTaskOpen(true)}
        />

        {/* Dynamic Breadcrumbs */}
        <Breadcrumbs />

        {/* Page Content Outlet */}
        <main className="flex-1 px-3.5 sm:px-6 pb-12 pt-1 max-w-7xl w-full mx-auto overflow-x-hidden">
          <Outlet />
        </main>

        {/* App Footer */}
        <footer className="py-4 px-4 sm:px-6 border-t border-app text-xs text-app-muted flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl w-full mx-auto">

          <div>
            © {new Date().getFullYear()} <span className="font-semibold text-app-primary">CoreVista Inc.</span> Enterprise Admin Platform v2.4.0
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-app-primary cursor-pointer">Documentation</span>
            <span className="hover:text-app-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-app-primary cursor-pointer">Support Desk</span>
          </div>
        </footer>
      </div>

      {/* Global Overlays & Modals */}
      <ToastContainer />
      <GlobalSearchModal />
      <ProjectCreateModal isOpen={isCreateProjectOpen} onClose={() => setIsCreateProjectOpen(false)} />
      <TaskCreateModal isOpen={isCreateTaskOpen} onClose={() => setIsCreateTaskOpen(false)} />
    </div>
  );
};
