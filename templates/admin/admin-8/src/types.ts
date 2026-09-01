/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TransactionStatus = 'Completed' | 'Pending' | 'Failed' | 'Refunded';

export interface Transaction {
  id: string;
  customer: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  date: string;
  status: TransactionStatus;
  amount: number;
  method: string;
  category: string;
}

export interface KPI {
  id: string;
  title: string;
  value: string;
  numericValue: number;
  change: string;
  isPositive: boolean;
  timeframe: string;
  trendData: number[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  status: 'Launched' | 'Ongoing' | 'Sold' | 'Returned' | 'In Stock' | 'Pending Shipment';
  unitsSold: number;
  revenue: number;
  price: number;
  stock: number;
  returnRate: number;
}

export interface ViewPerformance {
  channel: string;
  views: number;
  clicks: number;
  ctr: number; // Click-through rate in percentage
  sales: number;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}
