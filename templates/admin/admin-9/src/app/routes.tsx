import React from 'react';
import { RouteObject } from 'react-router-dom';

// Layouts
import { AdminLayout } from '../layouts/AdminLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { BlankLayout } from '../layouts/BlankLayout';

// Dashboards
import MainDashboard from '../pages/dashboards/MainDashboard';
import AnalyticsDashboard from '../pages/dashboards/AnalyticsDashboard';
import SalesDashboard from '../pages/dashboards/SalesDashboard';
import CRMDashboard from '../pages/dashboards/CRMDashboard';
import MarketingDashboard from '../pages/dashboards/MarketingDashboard';
import ProjectsDashboard from '../pages/dashboards/ProjectsDashboard';
import FinanceDashboard from '../pages/dashboards/FinanceDashboard';

// Applications
import Calendar from '../pages/applications/Calendar';
import Chat from '../pages/applications/Chat';
import Contacts from '../pages/applications/Contacts';
import Email from '../pages/applications/Email';
import FileManager from '../pages/applications/FileManager';
import Kanban from '../pages/applications/Kanban';
import Todo from '../pages/applications/Todo';
import Support from '../pages/applications/Support';

// Users
import Users from '../pages/users/Users';
import UserView from '../pages/users/UserView';
import UserEdit from '../pages/users/UserEdit';
import Profile from '../pages/users/Profile';
import Settings from '../pages/users/Settings';
import Notifications from '../pages/users/Notifications';
import Activity from '../pages/users/Activity';
import RolesPermissions from '../pages/users/RolesPermissions';

// Billing
import Invoices from '../pages/billing/Invoices';
import InvoiceDetails from '../pages/billing/InvoiceDetails';
import Pricing from '../pages/billing/Pricing';

// General Pages
import FAQ from '../pages/pages/FAQ';
import Contact from '../pages/pages/Contact';
import SearchResults from '../pages/pages/SearchResults';
import Timeline from '../pages/pages/Timeline';
import Blank from '../pages/pages/Blank';
import Errors from '../pages/pages/Errors';

// Element Demos
import UIComponentsPage from '../pages/components';
import ChartsPage from '../pages/charts';
import FormsPage from '../pages/forms';
import TablesPage from '../pages/tables';

// Authentication
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ForgotPassword from '../pages/authentication/ForgotPassword';
import EmailVerification from '../pages/authentication/EmailVerification';
import TwoFactor from '../pages/authentication/TwoFactor';
import LockScreen from '../pages/authentication/LockScreen';

export const routes: RouteObject[] = [
  // Admin Layout Routing
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      // Dashboards
      { index: true, element: <MainDashboard /> },
      { path: 'dashboards/analytics', element: <AnalyticsDashboard /> },
      { path: 'dashboards/sales', element: <SalesDashboard /> },
      { path: 'dashboards/crm', element: <CRMDashboard /> },
      { path: 'dashboards/marketing', element: <MarketingDashboard /> },
      { path: 'dashboards/projects', element: <ProjectsDashboard /> },
      { path: 'dashboards/finance', element: <FinanceDashboard /> },

      // Apps
      { path: 'apps/calendar', element: <Calendar /> },
      { path: 'apps/chat', element: <Chat /> },
      { path: 'apps/contacts', element: <Contacts /> },
      { path: 'apps/email', element: <Email /> },
      { path: 'apps/file-manager', element: <FileManager /> },
      { path: 'apps/invoices', element: <Invoices /> },
      { path: 'apps/invoices/:id', element: <InvoiceDetails /> },
      { path: 'apps/kanban', element: <Kanban /> },
      { path: 'apps/todo', element: <Todo /> },
      { path: 'apps/support', element: <Support /> },

      // Users
      { path: 'users', element: <Users /> },
      { path: 'users/:id', element: <UserView /> },
      { path: 'users/:id/edit', element: <UserEdit /> },
      { path: 'profile', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'activity', element: <Activity /> },
      { path: 'roles-permissions', element: <RolesPermissions /> },

      // Billing
      { path: 'billing/pricing', element: <Pricing /> },

      // Elements
      { path: 'elements/components', element: <UIComponentsPage /> },
      { path: 'elements/charts', element: <ChartsPage /> },
      { path: 'elements/forms', element: <FormsPage /> },
      { path: 'elements/tables', element: <TablesPage /> },

      // General Pages
      { path: 'pages/faq', element: <FAQ /> },
      { path: 'pages/contact', element: <Contact /> },
      { path: 'pages/search', element: <SearchResults /> },
      { path: 'pages/timeline', element: <Timeline /> },
      { path: 'pages/blank', element: <Blank /> },
    ],
  },
  
  // Auth Layout Routing
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'verify-email', element: <EmailVerification /> },
      { path: 'two-factor', element: <TwoFactor /> },
      { path: 'lock-screen', element: <LockScreen /> },
    ],
  },

  // Blank Layout Routing
  {
    path: '*',
    element: <BlankLayout />,
    children: [
      { path: '*', element: <Errors /> },
    ],
  },
];
