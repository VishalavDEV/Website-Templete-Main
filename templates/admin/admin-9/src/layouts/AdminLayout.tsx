/* src/layouts/AdminLayout.tsx */
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar';
import { Header } from '../components/navigation/Header';
import { MobileMenu, MobileBottomNavigation } from '../components/navigation/MobileMenu';
import { Breadcrumb } from '../components/navigation/Breadcrumb';
import { useSidebar } from '../app/providers/SidebarProvider';
import { useSettings } from '../app/providers/SettingsProvider';
import { useTranslation } from '../app/providers/LocalizationProvider';
import { Logo } from '../components/common';

export function AdminLayout() {
  const { isOpenMobile, setOpenMobile } = useSidebar();
  const { settings } = useSettings();
  const { t } = useTranslation();

  const isTopNav = settings.adminLayoutType === 'top-navigation';
  const isRightSidebar = settings.adminLayoutType === 'right-sidebar';
  const isFullWidth = settings.adminLayoutType === 'full-width';
  const isBottomMobileNav = settings.mobileMenuStyle === 'bottom-nav';
  
  // Padding based on layout density settings
  const mainPaddings = {
    compact: 'p-3 md:p-4 space-y-4',
    comfortable: 'p-6 md:p-8 space-y-6',
    spacious: 'p-10 md:p-12 space-y-8',
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* 1. Sidebar - Rendered if not top navigation or full width */}
      {!isTopNav && !isFullWidth && (
        <div className={isRightSidebar ? 'order-last' : 'order-first'}>
          <Sidebar />
        </div>
      )}
      
      {/* Mobile Drawer (always available) */}
      <MobileMenu isOpen={isOpenMobile} onClose={() => setOpenMobile(false)} />
      
      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        {/* Horizontal Navigation Menu (only for top navigation layout) */}
        {isTopNav && (
          <div className="border-b border-border bg-card px-6 py-2.5 flex items-center gap-6 overflow-x-auto select-none">
            <Logo />
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <NavLink to="/" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}>{t('dashboard')}</NavLink>
              <NavLink to="/users" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}>Users</NavLink>
              <NavLink to="/billing/invoices" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}>Invoices</NavLink>
              <NavLink to="/elements/components" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}>UI Library</NavLink>
              <NavLink to="/pages/faq" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}>FAQ</NavLink>
            </div>
          </div>
        )}

        <main className={`flex-1 overflow-y-auto ${mainPaddings[settings.density]} ${isBottomMobileNav ? 'pb-20 lg:pb-0' : ''}`}>
          {/* Hide breadcrumb in main body if it is embedded in the Header */}
          {settings.headerStyle !== 'breadcrumb-embedded' && (
            <div className="flex flex-col gap-1">
              <Breadcrumb />
            </div>
          )}
          <Outlet />
        </main>

        {/* Dynamic Footer representation */}
        {settings.showFooter && (
          <footer className={`border-t border-border bg-card/50 py-4 px-6 text-center text-xs text-muted-foreground ${isBottomMobileNav ? 'mb-16 lg:mb-0' : ''}`}>
            <p>© 2026 AdminTemplate. Designed with the uploaded pastel gradient image palette.</p>
          </footer>
        )}

        {/* Mobile Bottom Tab Bar */}
        {isBottomMobileNav && <MobileBottomNavigation />}
      </div>
    </div>
  );
}
