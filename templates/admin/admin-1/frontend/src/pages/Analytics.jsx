import React from 'react';
import Layout from '../components/layout/Layout';
import RevenueAnalytics from '../components/dashboard/RevenueAnalytics';
import SalesBreakdown from '../components/dashboard/SalesBreakdown';
import TrafficSources from '../components/dashboard/TrafficSources';
import { MOCK_REVENUE_DATA } from '../services/mockData';

export default function Analytics() {
  return (
    <Layout title="Analytics & Telemetry" breadcrumb="Home / Analytics">
      <div className="space-y-6">
        <RevenueAnalytics data={MOCK_REVENUE_DATA.monthly} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SalesBreakdown />
          <TrafficSources />
        </div>
      </div>
    </Layout>
  );
}
