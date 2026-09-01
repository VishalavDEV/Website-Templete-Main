import { ROUTES } from './routes';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const SIDEBAR_NAV: NavItem[] = [
  { label: 'Main Dashboard', path: ROUTES.DASHBOARD },
  { label: 'Dashboards', path: '#', children: [
    { label: 'Analytics', path: ROUTES.ANALYTICS },
    { label: 'Sales', path: ROUTES.SALES },
    { label: 'CRM', path: ROUTES.CRM }
  ]},
  { label: 'Billing Portal', path: '#', children: [
    { label: 'Invoices Queue', path: ROUTES.INVOICES },
    { label: 'Pricing Matrices', path: ROUTES.PRICING }
  ]},
  { label: 'Reference Primitives', path: '#', children: [
    { label: 'UI Playgrounds', path: ROUTES.COMPONENTS },
    { label: 'Charts Gallery', path: ROUTES.CHARTS },
    { label: 'Forms Catalog', path: ROUTES.FORMS },
    { label: 'Tables Queue', path: ROUTES.TABLES }
  ]}
];
