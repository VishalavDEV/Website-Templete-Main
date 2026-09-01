import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './components/Layout/MainLayout';

// Auth & Security Pages
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage, ForgotPasswordPage, ResetPasswordPage, VerifyEmailPage } from './pages/Auth/RegisterPage';
import { LockScreenPage } from './pages/Auth/LockScreenPage';

// 10 Sub-Page Domain Controllers (5 Sub-Menus each = 50 total)
import { DashboardSubPages } from './pages/Dashboard/DashboardSubPages';
import { ProjectsSubPages } from './pages/Projects/ProjectsSubPages';
import { TasksSubPages } from './pages/Tasks/TasksSubPages';
import { TeamSubPages } from './pages/Team/TeamSubPages';
import { ClientsSubPages } from './pages/Clients/ClientsSubPages';
import { TimeSubPages } from './pages/TimeTracking/TimeSubPages';
import { FinancialsSubPages } from './pages/Financials/FinancialsSubPages';
import { CollaborationSubPages } from './pages/Collaboration/CollaborationSubPages';
import { ReportsSubPages } from './pages/Reports/ReportsSubPages';
import { AdminSubPages } from './pages/Admin/AdminSubPages';

// Legacy Details View compatibility
import { ProjectDetailsPage } from './pages/Projects/ProjectDetailsPage';
import { MemberDetailsPage } from './pages/Team/TeamMembersPage';
import { ClientDetailsPage } from './pages/Clients/ClientsPage';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/templates/admin/admin-4">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/lock-screen" element={<LockScreenPage />} />

          {/* Main Layout Protected Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />

            {/* 1. Dashboard Sub-Menus */}
            <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="/dashboard/overview" element={<DashboardSubPages subPage="overview" />} />
            <Route path="/dashboard/performance" element={<DashboardSubPages subPage="performance" />} />
            <Route path="/dashboard/realtime" element={<DashboardSubPages subPage="realtime" />} />
            <Route path="/dashboard/executive" element={<DashboardSubPages subPage="executive" />} />
            <Route path="/dashboard/health" element={<DashboardSubPages subPage="health" />} />

            {/* 2. Projects Sub-Menus */}
            <Route path="/projects" element={<Navigate to="/projects/active" replace />} />
            <Route path="/projects/active" element={<ProjectsSubPages subPage="active" />} />
            <Route path="/projects/backlog" element={<ProjectsSubPages subPage="backlog" />} />
            <Route path="/projects/completed" element={<ProjectsSubPages subPage="completed" />} />
            <Route path="/projects/overdue" element={<ProjectsSubPages subPage="overdue" />} />
            <Route path="/projects/archived" element={<ProjectsSubPages subPage="archived" />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

            {/* 3. Workflows & Tasks Sub-Menus */}
            <Route path="/tasks" element={<Navigate to="/tasks/directory" replace />} />
            <Route path="/tasks/directory" element={<TasksSubPages subPage="directory" />} />
            <Route path="/tasks/assigned" element={<TasksSubPages subPage="assigned" />} />
            <Route path="/tasks/kanban" element={<TasksSubPages subPage="kanban" />} />
            <Route path="/tasks/milestones" element={<TasksSubPages subPage="milestones" />} />
            <Route path="/tasks/velocity" element={<TasksSubPages subPage="velocity" />} />
            <Route path="/kanban" element={<Navigate to="/tasks/kanban" replace />} />

            {/* 4. Team & HR Sub-Menus */}
            <Route path="/team" element={<Navigate to="/team/members" replace />} />
            <Route path="/team/members" element={<TeamSubPages subPage="members" />} />
            <Route path="/team/squads" element={<TeamSubPages subPage="squads" />} />
            <Route path="/team/departments" element={<TeamSubPages subPage="departments" />} />
            <Route path="/team/roles" element={<TeamSubPages subPage="roles" />} />
            <Route path="/team/workload" element={<TeamSubPages subPage="workload" />} />
            <Route path="/team/:memberId" element={<MemberDetailsPage />} />

            {/* 5. Clients CRM Sub-Menus */}
            <Route path="/clients" element={<Navigate to="/clients/accounts" replace />} />
            <Route path="/clients/accounts" element={<ClientsSubPages subPage="accounts" />} />
            <Route path="/clients/pipeline" element={<ClientsSubPages subPage="pipeline" />} />
            <Route path="/clients/contracts" element={<ClientsSubPages subPage="contracts" />} />
            <Route path="/clients/portals" element={<ClientsSubPages subPage="portals" />} />
            <Route path="/clients/health" element={<ClientsSubPages subPage="health" />} />
            <Route path="/clients/:clientId" element={<ClientDetailsPage />} />

            {/* 6. Time & Operations Sub-Menus */}
            <Route path="/time" element={<Navigate to="/time/tracker" replace />} />
            <Route path="/time/tracker" element={<TimeSubPages subPage="tracker" />} />
            <Route path="/time/timesheets" element={<TimeSubPages subPage="timesheets" />} />
            <Route path="/time/attendance" element={<TimeSubPages subPage="attendance" />} />
            <Route path="/time/overtime" element={<TimeSubPages subPage="overtime" />} />
            <Route path="/time/audit" element={<TimeSubPages subPage="audit" />} />
            <Route path="/time-tracking" element={<Navigate to="/time/tracker" replace />} />

            {/* 7. Financials & Billing Sub-Menus */}
            <Route path="/financials" element={<Navigate to="/financials/budgets" replace />} />
            <Route path="/financials/budgets" element={<FinancialsSubPages subPage="budgets" />} />
            <Route path="/financials/expenses" element={<FinancialsSubPages subPage="expenses" />} />
            <Route path="/financials/invoices" element={<FinancialsSubPages subPage="invoices" />} />
            <Route path="/financials/payments" element={<FinancialsSubPages subPage="payments" />} />
            <Route path="/financials/profitability" element={<FinancialsSubPages subPage="profitability" />} />
            <Route path="/budgets" element={<Navigate to="/financials/budgets" replace />} />

            {/* 8. Collaboration & Files Sub-Menus */}
            <Route path="/collaboration" element={<Navigate to="/collaboration/files" replace />} />
            <Route path="/collaboration/files" element={<CollaborationSubPages subPage="files" />} />
            <Route path="/collaboration/chat" element={<CollaborationSubPages subPage="chat" />} />
            <Route path="/collaboration/notifications" element={<CollaborationSubPages subPage="notifications" />} />
            <Route path="/collaboration/templates" element={<CollaborationSubPages subPage="templates" />} />
            <Route path="/collaboration/knowledge" element={<CollaborationSubPages subPage="knowledge" />} />
            <Route path="/files" element={<Navigate to="/collaboration/files" replace />} />
            <Route path="/chat" element={<Navigate to="/collaboration/chat" replace />} />
            <Route path="/notifications" element={<Navigate to="/collaboration/notifications" replace />} />

            {/* 9. Reports & Analytics Sub-Menus */}
            <Route path="/reports" element={<Navigate to="/reports/executive" replace />} />
            <Route path="/reports/executive" element={<ReportsSubPages subPage="executive" />} />
            <Route path="/reports/financial" element={<ReportsSubPages subPage="financial" />} />
            <Route path="/reports/productivity" element={<ReportsSubPages subPage="productivity" />} />
            <Route path="/reports/quality" element={<ReportsSubPages subPage="quality" />} />
            <Route path="/reports/custom" element={<ReportsSubPages subPage="custom" />} />

            {/* 10. Administration & Security Sub-Menus */}
            <Route path="/admin" element={<Navigate to="/admin/activity" replace />} />
            <Route path="/admin/activity" element={<AdminSubPages subPage="activity" />} />
            <Route path="/admin/audit" element={<AdminSubPages subPage="audit" />} />
            <Route path="/admin/security" element={<AdminSubPages subPage="security" />} />
            <Route path="/admin/api-webhooks" element={<AdminSubPages subPage="api-webhooks" />} />
            <Route path="/admin/settings" element={<AdminSubPages subPage="settings" />} />
            <Route path="/activity" element={<Navigate to="/admin/activity" replace />} />
            <Route path="/audit-logs" element={<Navigate to="/admin/audit" replace />} />
            <Route path="/settings" element={<Navigate to="/admin/settings" replace />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/dashboard/overview" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
