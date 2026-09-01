import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Breadcrumb from '../ui/Breadcrumb';
import QuickActionButton from '../ui/QuickActionButton';

export default function Layout({ children, title, breadcrumb }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neura-bg text-slate-100 flex flex-col font-sans selection:bg-neura-cyan selection:text-black">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        toggleCollapse={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        closeMobile={() => setMobileOpen(false)}
      />

      {/* Main Container */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Floating Navbar */}
        <Navbar
          toggleSidebar={() => setMobileOpen(!mobileOpen)}
          title={title}
          breadcrumb={breadcrumb}
        />

        {/* Dynamic Page Main Content */}
        <main className="flex-1 p-3 sm:p-6 lg:p-8 max-w-[1700px] w-full mx-auto space-y-4 sm:space-y-6 min-w-0 overflow-x-hidden">
          {/* Automatic Breadcrumb Navigation Header */}
          <div className="flex items-center justify-between min-w-0">
            <Breadcrumb />
          </div>

          {children}
        </main>
      </div>

      {/* Floating Speed Dial "+" Quick Action Button */}
      <QuickActionButton />
    </div>
  );
}
