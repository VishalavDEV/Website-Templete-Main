export const ROUTES = {
  DASHBOARD: '/',
  ANALYTICS: '/dashboards/analytics',
  SALES: '/dashboards/sales',
  CRM: '/dashboards/crm',
  
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  LOCK_SCREEN: '/auth/lock-screen',
  
  INVOICES: '/billing/invoices',
  PRICING: '/billing/pricing',
  
  COMPONENTS: '/elements/components',
  CHARTS: '/elements/charts',
  FORMS: '/elements/forms',
  TABLES: '/elements/tables'
} as const;
