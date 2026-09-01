import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

// Dashboard
import { ExecutiveDashboard } from '../pages/dashboard/ExecutiveDashboard';
import { SalesDashboard } from '../pages/dashboard/SalesDashboard';
import { RevenueDashboard, AnalyticsDashboard } from '../pages/dashboard/RevenueDashboard';

// CRM
import { CustomersPage } from '../pages/crm/CustomersPage';
import { CustomerDetailPage } from '../pages/crm/CustomerDetailPage';
import { LeadsPage } from '../pages/crm/LeadsPage';
import { ContactsPage, CompaniesPage, DealsPage } from '../pages/crm/ContactsPage';

// Sales
import { OrdersPage } from '../pages/sales/OrdersPage';
import { OrderDetailPage } from '../pages/sales/OrderDetailPage';
import { InvoicesPage, QuotationsPage, PaymentsPage, TransactionsPage } from '../pages/sales/InvoicesPage';

// Products
import { ProductsPage } from '../pages/products/ProductsPage';
import { ProductDetailPage, CategoriesPage, InventoryPage, WarehousesPage, SuppliersPage } from '../pages/products/ProductDetailPage';

// Analytics
import { SalesAnalyticsPage, CustomerAnalyticsPage, ProductAnalyticsPage, ReportsPage } from '../pages/analytics/AnalyticsPages';

// Finance
import { IncomePage, ExpensesPage, ProfitLossPage, BudgetsPage, TaxesPage, CashFlowPage } from '../pages/finance/FinancePages';

// Marketing
import { CampaignsPage, EmailMarketingPage, PromotionsPage, CouponsPage, SegmentsPage } from '../pages/marketing/MarketingPages';

// HR
import { EmployeesPage } from '../pages/hr/EmployeesPage';
import { EmployeeDetailPage, LeavePage, DepartmentsPage, AttendancePage, PayrollPage, PerformancePage } from '../pages/hr/EmployeeDetailAndLeavePages';

// Apps
import { CalendarPage, TasksPage, KanbanPage, ChatPage, EmailPage, FileManagerPage } from '../pages/apps/ApplicationPages';

// Support
import { TicketsPage, TicketDetailPage, KnowledgeBasePage, FAQsPage, SLAPage } from '../pages/support/SupportPages';

// Users
import { UsersPage, UserDetailPage, RolesPage, PermissionsPage, TeamsPage } from '../pages/users/UserPages';

// Settings
import { GeneralSettingsPage, SecuritySettingsPage, NotificationSettingsPage, PaymentSettingsPage, LocalizationSettingsPage, APISettingsPage } from '../pages/settings/SettingsPages';

// Audit
import { ActivityLogsPage, LoginLogsPage, ErrorLogsPage, SystemHealthPage } from '../pages/audit/AuditPages';

// Auth & Other
import { LoginPage, ForgotPasswordPage } from '../pages/auth/AuthPages';
import { UserProfilePage, NotificationsPage, NotFoundPage } from '../pages/other/OtherPages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Standalone Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Main Shell Protected Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<ExecutiveDashboard />} />
        <Route path="/dashboard/sales" element={<SalesDashboard />} />
        <Route path="/dashboard/revenue" element={<RevenueDashboard />} />
        <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />

        {/* CRM */}
        <Route path="/crm/customers" element={<CustomersPage />} />
        <Route path="/crm/customers/:id" element={<CustomerDetailPage />} />
        <Route path="/crm/leads" element={<LeadsPage />} />
        <Route path="/crm/contacts" element={<ContactsPage />} />
        <Route path="/crm/companies" element={<CompaniesPage />} />
        <Route path="/crm/deals" element={<DealsPage />} />

        {/* Sales */}
        <Route path="/sales/orders" element={<OrdersPage />} />
        <Route path="/sales/orders/:id" element={<OrderDetailPage />} />
        <Route path="/sales/quotations" element={<QuotationsPage />} />
        <Route path="/sales/invoices" element={<InvoicesPage />} />
        <Route path="/sales/payments" element={<PaymentsPage />} />
        <Route path="/sales/transactions" element={<TransactionsPage />} />

        {/* Products */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/categories" element={<CategoriesPage />} />
        <Route path="/products/inventory" element={<InventoryPage />} />
        <Route path="/products/warehouses" element={<WarehousesPage />} />
        <Route path="/products/suppliers" element={<SuppliersPage />} />

        {/* Analytics */}
        <Route path="/analytics/sales" element={<SalesAnalyticsPage />} />
        <Route path="/analytics/customers" element={<CustomerAnalyticsPage />} />
        <Route path="/analytics/products" element={<ProductAnalyticsPage />} />
        <Route path="/analytics/reports" element={<ReportsPage />} />

        {/* Finance */}
        <Route path="/finance/income" element={<IncomePage />} />
        <Route path="/finance/expenses" element={<ExpensesPage />} />
        <Route path="/finance/transactions" element={<TransactionsPage />} />
        <Route path="/finance/budgets" element={<BudgetsPage />} />
        <Route path="/finance/taxes" element={<TaxesPage />} />
        <Route path="/finance/cash-flow" element={<CashFlowPage />} />
        <Route path="/finance/profit-loss" element={<ProfitLossPage />} />

        {/* Marketing */}
        <Route path="/marketing/campaigns" element={<CampaignsPage />} />
        <Route path="/marketing/email" element={<EmailMarketingPage />} />
        <Route path="/marketing/promotions" element={<PromotionsPage />} />
        <Route path="/marketing/coupons" element={<CouponsPage />} />
        <Route path="/marketing/segments" element={<SegmentsPage />} />

        {/* HR */}
        <Route path="/hr/employees" element={<EmployeesPage />} />
        <Route path="/hr/employees/:id" element={<EmployeeDetailPage />} />
        <Route path="/hr/departments" element={<DepartmentsPage />} />
        <Route path="/hr/attendance" element={<AttendancePage />} />
        <Route path="/hr/leave" element={<LeavePage />} />
        <Route path="/hr/payroll" element={<PayrollPage />} />
        <Route path="/hr/performance" element={<PerformancePage />} />

        {/* Applications */}
        <Route path="/apps/calendar" element={<CalendarPage />} />
        <Route path="/apps/tasks" element={<TasksPage />} />
        <Route path="/apps/kanban" element={<KanbanPage />} />
        <Route path="/apps/chat" element={<ChatPage />} />
        <Route path="/apps/email" element={<EmailPage />} />
        <Route path="/apps/files" element={<FileManagerPage />} />

        {/* Support */}
        <Route path="/support/tickets" element={<TicketsPage />} />
        <Route path="/support/tickets/:id" element={<TicketDetailPage />} />
        <Route path="/support/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/support/faqs" element={<FAQsPage />} />
        <Route path="/support/sla" element={<SLAPage />} />

        {/* Users */}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/users/roles" element={<RolesPage />} />
        <Route path="/users/permissions" element={<PermissionsPage />} />
        <Route path="/users/teams" element={<TeamsPage />} />

        {/* Settings */}
        <Route path="/settings/general" element={<GeneralSettingsPage />} />
        <Route path="/settings/security" element={<SecuritySettingsPage />} />
        <Route path="/settings/notifications" element={<NotificationSettingsPage />} />
        <Route path="/settings/payment" element={<PaymentSettingsPage />} />
        <Route path="/settings/localization" element={<LocalizationSettingsPage />} />
        <Route path="/settings/api" element={<APISettingsPage />} />

        {/* Audit */}
        <Route path="/audit/activity" element={<ActivityLogsPage />} />
        <Route path="/audit/login" element={<LoginLogsPage />} />
        <Route path="/audit/errors" element={<ErrorLogsPage />} />
        <Route path="/audit/system-health" element={<SystemHealthPage />} />

        {/* Profile & Notifications */}
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Route>

      {/* 404 Catch-All */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
