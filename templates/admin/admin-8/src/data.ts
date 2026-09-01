/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Transaction, Product, ViewPerformance, KPI } from './types';

// Mock transactions spanning July and August 2026
export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'TX-1001',
    customer: { name: 'Sarah Connor', email: 'sconnor@cyberdyne.net' },
    date: '2026-08-24',
    status: 'Completed',
    amount: 1250.00,
    method: 'Credit Card',
    category: 'Enterprise License',
  },
  {
    id: 'TX-1002',
    customer: { name: 'Bruce Wayne', email: 'bruce@waynecorp.com' },
    date: '2026-08-23',
    status: 'Completed',
    amount: 8500.00,
    method: 'Wire Transfer',
    category: 'Consulting',
  },
  {
    id: 'TX-1003',
    customer: { name: 'Peter Parker', email: 'spidey@dailybugle.com' },
    date: '2026-08-22',
    status: 'Pending',
    amount: 49.00,
    method: 'PayPal',
    category: 'SaaS Subscriptions',
  },
  {
    id: 'TX-1004',
    customer: { name: 'Tony Stark', email: 'tony@starkindustries.com' },
    date: '2026-08-21',
    status: 'Completed',
    amount: 15400.00,
    method: 'Wire Transfer',
    category: 'Enterprise License',
  },
  {
    id: 'TX-1005',
    customer: { name: 'Selina Kyle', email: 'cat@gotham.org' },
    date: '2026-08-20',
    status: 'Refunded',
    amount: -450.00,
    method: 'Credit Card',
    category: 'Electronics',
  },
  {
    id: 'TX-1006',
    customer: { name: 'Clark Kent', email: 'ckent@dailyplanet.com' },
    date: '2026-08-18',
    status: 'Completed',
    amount: 99.00,
    method: 'Credit Card',
    category: 'SaaS Subscriptions',
  },
  {
    id: 'TX-1007',
    customer: { name: 'Diana Prince', email: 'diana@themyscira.gov' },
    date: '2026-08-15',
    status: 'Completed',
    amount: 2500.00,
    method: 'Apple Pay',
    category: 'Consulting',
  },
  {
    id: 'TX-1008',
    customer: { name: 'Barry Allen', email: 'flash@star-labs.com' },
    date: '2026-08-12',
    status: 'Failed',
    amount: 199.00,
    method: 'Credit Card',
    category: 'Electronics',
  },
  {
    id: 'TX-1009',
    customer: { name: 'Arthur Curry', email: 'aquaman@atlantis.org' },
    date: '2026-08-10',
    status: 'Completed',
    amount: 350.00,
    method: 'PayPal',
    category: 'Support Services',
  },
  {
    id: 'TX-1010',
    customer: { name: 'Hal Jordan', email: 'green@lantern.org' },
    date: '2026-08-08',
    status: 'Completed',
    amount: 1200.00,
    method: 'Credit Card',
    category: 'Support Services',
  },
  {
    id: 'TX-1011',
    customer: { name: 'Wanda Maximoff', email: 'wanda@westview.net' },
    date: '2026-08-05',
    status: 'Refunded',
    amount: -1200.00,
    method: 'Wire Transfer',
    category: 'Consulting',
  },
  {
    id: 'TX-1012',
    customer: { name: 'Steve Rogers', email: 'cap@brooklyn.mil' },
    date: '2026-08-01',
    status: 'Completed',
    amount: 99.00,
    method: 'Apple Pay',
    category: 'SaaS Subscriptions',
  },
  {
    id: 'TX-1013',
    customer: { name: 'Natasha Romanoff', email: 'blackwidow@shield.gov' },
    date: '2026-07-28',
    status: 'Completed',
    amount: 4500.00,
    method: 'Wire Transfer',
    category: 'Consulting',
  },
  {
    id: 'TX-1014',
    customer: { name: 'Bruce Banner', email: 'hulk@avengers.org' },
    date: '2026-07-25',
    status: 'Completed',
    amount: 600.00,
    method: 'Credit Card',
    category: 'Electronics',
  },
  {
    id: 'TX-1015',
    customer: { name: 'Loki Laufeyson', email: 'loki@asgard.space' },
    date: '2026-07-20',
    status: 'Completed',
    amount: 1500.00,
    method: 'PayPal',
    category: 'Support Services',
  }
];

// Mock Products matching statuses requested
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'PROD-01',
    name: 'Aetheria Quantum Core',
    category: 'Hardware',
    status: 'Launched',
    unitsSold: 142,
    revenue: 42600,
    price: 300,
    stock: 58,
    returnRate: 0.8,
  },
  {
    id: 'PROD-02',
    name: 'EmberFlux SaaS Suite',
    category: 'Software',
    status: 'Ongoing',
    unitsSold: 840,
    revenue: 83160,
    price: 99,
    stock: 9999, // unlimited digital
    returnRate: 1.2,
  },
  {
    id: 'PROD-03',
    name: 'Helios Premium Solar Unit',
    category: 'Hardware',
    status: 'Sold', // No stock left
    unitsSold: 88,
    revenue: 132000,
    price: 1500,
    stock: 0,
    returnRate: 2.1,
  },
  {
    id: 'PROD-04',
    name: 'Ignis Smart Hub (Defective Batch)',
    category: 'Hardware',
    status: 'Returned',
    unitsSold: 5,
    revenue: -995,
    price: 199,
    stock: 45,
    returnRate: 94.0,
  },
  {
    id: 'PROD-05',
    name: 'Pyre Cloud Storage Nodes',
    category: 'Infrastructure',
    status: 'In Stock',
    unitsSold: 310,
    revenue: 15500,
    price: 50,
    stock: 1250,
    returnRate: 0.2,
  },
  {
    id: 'PROD-06',
    name: 'Solstice Enterprise Console',
    category: 'Hardware',
    status: 'Pending Shipment',
    unitsSold: 18,
    revenue: 45000,
    price: 2500,
    stock: 12,
    returnRate: 0.0,
  }
];

// View Performance channels data
export const INITIAL_VIEW_PERFORMANCE: ViewPerformance[] = [
  { channel: 'Google Search', views: 45200, clicks: 5420, ctr: 12.0, sales: 245 },
  { channel: 'Direct Traffic', views: 28400, clicks: 4120, ctr: 14.5, sales: 310 },
  { channel: 'Email Newsletter', views: 18200, clicks: 3640, ctr: 20.0, sales: 184 },
  { channel: 'Twitter / X Ref', views: 32000, clicks: 1920, ctr: 6.0, sales: 92 },
  { channel: 'LinkedIn Business', views: 12400, clicks: 1488, ctr: 12.0, sales: 115 },
  { channel: 'YouTube Showcase', views: 52000, clicks: 2080, ctr: 4.0, sales: 78 }
];

// Daily sales data for the Recharts line charts (August 2026 focus)
export const DAILY_REVENUE_DATA = [
  { date: 'Aug 01', revenue: 2400, expenses: 1100, income: 1300 },
  { date: 'Aug 04', revenue: 4100, expenses: 1500, income: 2600 },
  { date: 'Aug 07', revenue: 3500, expenses: 1300, income: 2200 },
  { date: 'Aug 10', revenue: 5800, expenses: 2100, income: 3700 },
  { date: 'Aug 13', revenue: 4900, expenses: 1800, income: 3100 },
  { date: 'Aug 16', revenue: 7200, expenses: 2400, income: 4800 },
  { date: 'Aug 19', revenue: 6300, expenses: 2000, income: 4300 },
  { date: 'Aug 22', revenue: 9400, expenses: 2900, income: 6500 },
  { date: 'Aug 24', revenue: 11500, expenses: 3200, income: 8300 },
];

// Initial KPIs calculated from transactions and performance
export const getKPIs = (transactions: Transaction[]): KPI[] => {
  const completedTx = transactions.filter(t => t.status === 'Completed');
  const totalRevenue = completedTx.reduce((sum, t) => sum + (t.amount > 0 ? t.amount : 0), 0);
  
  const refundedTx = transactions.filter(t => t.status === 'Refunded');
  const totalRefunds = refundedTx.reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
  // Net Income = Revenue - Expenses/Refunds
  // Let's model Expenses/Refunds as the negative transactions + a baseline expense
  const netIncome = totalRevenue - totalRefunds - 4500; // 4500 operational cost
  const totalReturnRate = (totalRefunds / (totalRevenue || 1)) * 100;

  return [
    {
      id: 'net-income',
      title: 'Net Income',
      value: `$${netIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      numericValue: netIncome,
      change: '+18.4%',
      isPositive: true,
      timeframe: 'vs last month',
      trendData: [4200, 4800, 5100, 4900, 6200, 7100, netIncome],
    },
    {
      id: 'total-return',
      title: 'Total Return / Refund Rate',
      value: `${totalReturnRate.toFixed(1)}%`,
      numericValue: totalReturnRate,
      change: '-1.2%',
      isPositive: true, // down is positive for return rates!
      timeframe: 'vs last month',
      trendData: [3.4, 3.1, 2.9, 3.5, 2.7, 2.4, totalReturnRate],
    },
    {
      id: 'revenue',
      title: 'Gross Revenue',
      value: `$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      numericValue: totalRevenue,
      change: '+24.1%',
      isPositive: true,
      timeframe: 'vs last month',
      trendData: [15000, 18000, 22000, 21000, 26000, 29000, totalRevenue],
    }
  ];
};

// CSV Export Helper
export const exportToCSV = (transactions: Transaction[]): string => {
  const headers = ['Transaction ID', 'Customer Name', 'Customer Email', 'Date', 'Status', 'Amount ($)', 'Payment Method', 'Category'];
  const rows = transactions.map(t => [
    t.id,
    t.customer.name,
    t.customer.email,
    t.date,
    t.status,
    t.amount.toFixed(2),
    t.method,
    t.category
  ]);
  
  return [headers, ...rows]
    .map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
    .join('\n');
};
