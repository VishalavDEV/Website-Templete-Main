import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';
import { SidebarIconStrip } from './components/SidebarIconStrip';
import { SidebarSubPanel } from './components/SidebarSubPanel';
import { HeaderNavbar } from './components/HeaderNavbar';
import { ModalContainer } from './components/ModalContainer';
import { ToastContainer } from './components/ToastContainer';

// Dashboards
import { HomeOverview } from './pages/dashboards/HomeOverview';
import { SalesDashboard } from './pages/dashboards/SalesDashboard';
import { AnalyticsDashboard } from './pages/dashboards/AnalyticsDashboard';
import { CrmDashboard } from './pages/dashboards/CrmDashboard';
import { FinanceDashboard } from './pages/dashboards/FinanceDashboard';
import { MarketingDashboard } from './pages/dashboards/MarketingDashboard';
import { ProjectsDashboard } from './pages/dashboards/ProjectsDashboard';

// Apps
import { ChatApp } from './pages/apps/ChatApp';
import { EmailApp } from './pages/apps/EmailApp';
import { CalendarApp } from './pages/apps/CalendarApp';
import { KanbanApp } from './pages/apps/KanbanApp';
import { FileManagerApp } from './pages/apps/FileManagerApp';
import { ContactsApp } from './pages/apps/ContactsApp';
import { TodoApp } from './pages/apps/TodoApp';
import { SupportTicketsApp } from './pages/apps/SupportTicketsApp';

// Users
import { UserListPage } from './pages/users/UserListPage';
import { UserProfilePage } from './pages/users/UserProfilePage';
import { UserEditPage } from './pages/users/UserEditPage';
import { RolesPermissionsPage } from './pages/users/RolesPermissionsPage';
import { AccountSettingsPage } from './pages/users/AccountSettingsPage';
import { NotificationsPage, ActivityLogPage } from './pages/users/NotificationsPage';

// Auth
import { AuthContainer } from './pages/auth/AuthContainer';

// Forms
import { FormElements } from './pages/components/FormElements';
import { FormLayouts, FormValidation, RichEditors, DateTimePickers, AdvancedSelect, FileUpload } from './pages/forms/FormPages';
import { FormWizardPage } from './pages/forms/FormWizardPage';

// Tables
import { BasicTables, ResponsiveTables } from './pages/tables/BasicTables';
import { TablesShowcase } from './pages/tables/TablesShowcase';

// Charts
import { ChartsShowcase } from './pages/charts/ChartsShowcase';
import { ApexChartsPage, ChartJsPage, EChartsPage } from './pages/charts/DedicatedChartsPages';

// Icons
import { IconsShowcase } from './pages/icons/IconsShowcase';
import { IconLibraryView } from './pages/icons/IconLibraries';

// Pages & Utilities
import { ContactFormPage } from './pages/utilities/ContactFormPage';
import { InvoiceListPage, InvoiceViewPage } from './pages/utilities/InvoicePages';
import { PricingPlansPage } from './pages/utilities/PricingPlansPage';
import { FaqPage } from './pages/utilities/FaqPage';
import { TimelinePage } from './pages/utilities/TimelinePage';
import { SearchResultsPage } from './pages/utilities/SearchResultsPage';
import { ErrorPages } from './pages/utilities/ErrorPages';
import { MaintenancePage, ComingSoonPage } from './pages/utilities/MaintenancePage';
import { BlankPage } from './pages/utilities/BlankPage';

import './styles/index.css';

const MainContent = () => {
  const { activeCategory, activePage, mobileMenuOpen, setMobileMenuOpen } = useApp();

  // Render auth screens full width without layout header/sidebar
  if (activeCategory === 'auth' || activePage.startsWith('auth-') || ['login', 'register', 'forgot-password', 'verify-2fa', 'lock-screen'].includes(activePage)) {
    return <AuthContainer />;
  }

  const renderPage = () => {
    switch (activePage) {
      // 7 Dashboards
      case 'overview': return <HomeOverview />;
      case 'sales': return <SalesDashboard />;
      case 'analytics': return <AnalyticsDashboard />;
      case 'crm': return <CrmDashboard />;
      case 'finance': return <FinanceDashboard />;
      case 'marketing': return <MarketingDashboard />;
      case 'projects': return <ProjectsDashboard />;

      // 8 Apps
      case 'chat': return <ChatApp />;
      case 'email': return <EmailApp />;
      case 'calendar': return <CalendarApp />;
      case 'kanban': return <KanbanApp />;
      case 'files': return <FileManagerApp />;
      case 'contacts': return <ContactsApp />;
      case 'todo': return <TodoApp />;
      case 'tickets': return <SupportTicketsApp />;

      // Users
      case 'users-list':
      case 'user-list': return <UserListPage />;
      case 'users-view':
      case 'user-profile':
      case 'profile': return <UserProfilePage />;
      case 'users-edit': return <UserEditPage />;
      case 'roles': return <RolesPermissionsPage />;
      case 'settings':
      case 'settings-account': return <AccountSettingsPage />;
      case 'settings-notifications':
      case 'notifications-page': return <NotificationsPage />;
      case 'settings-activity':
      case 'activity-log': return <ActivityLogPage />;

      // Forms
      case 'forms':
      case 'forms-elements': return <FormElements />;
      case 'forms-layouts': return <FormLayouts />;
      case 'forms-validation': return <FormValidation />;
      case 'forms-wizard': return <FormWizardPage />;
      case 'forms-editors': return <RichEditors />;
      case 'forms-pickers': return <DateTimePickers />;
      case 'forms-select': return <AdvancedSelect />;
      case 'forms-upload': return <FileUpload />;

      // Tables
      case 'tables':
      case 'tables-basic': return <BasicTables />;
      case 'tables-datatables': return <TablesShowcase />;
      case 'tables-responsive': return <ResponsiveTables />;

      // Dedicated Charts
      case 'charts': return <ChartsShowcase />;
      case 'charts-apexcharts': return <ApexChartsPage />;
      case 'charts-chartjs': return <ChartJsPage />;
      case 'charts-echarts': return <EChartsPage />;

      // Icons
      case 'icons':
      case 'icons-lucide': return <IconsShowcase />;
      case 'icons-bootstrap': return <IconLibraryView libraryName="Bootstrap Icons" />;
      case 'icons-remixicon': return <IconLibraryView libraryName="Remix Icons" />;
      case 'icons-fontawesome': return <IconLibraryView libraryName="Font Awesome" />;
      case 'icons-phosphor': return <IconLibraryView libraryName="Phosphor Icons" />;

      // Utility Pages
      case 'contact-us':
      case 'pages-contact': return <ContactFormPage />;
      case 'invoice':
      case 'invoice-list': return <InvoiceListPage />;
      case 'invoice-view': return <InvoiceViewPage />;
      case 'pricing': return <PricingPlansPage />;
      case 'faq': return <FaqPage />;
      case 'timeline': return <TimelinePage />;
      case 'search':
      case 'search-results': return <SearchResultsPage />;
      case 'err404':
      case 'error-404': return <ErrorPages type="err404" />;
      case 'error-403': return <ErrorPages type="err403" />;
      case 'error-500': return <ErrorPages type="err500" />;
      case 'maintenance':
      case 'error-maintenance': return <MaintenancePage />;
      case 'coming-soon':
      case 'error-coming-soon': return <ComingSoonPage />;
      case 'blank': return <BlankPage />;

      default: return <HomeOverview />;
    }
  };

  return (
    <div className="app-container">
      {/* Mobile Dark Backdrop Overlay */}
      <div 
        className={`mobile-sidebar-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Responsive Dual Panel Sidebar Drawer */}
      <div className={`sidebar-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <SidebarIconStrip />
        <SidebarSubPanel />
      </div>

      <div className="main-wrapper">
        <HeaderNavbar />
        <main className="page-content">
          {renderPage()}
        </main>
      </div>

      {/* Global Modals & Toast System */}
      <ModalContainer />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <MainContent />
      </AppProvider>
    </ThemeProvider>
  );
}
