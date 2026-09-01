import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/dashboard/HeroSection';
import KpiCards from '../components/dashboard/KpiCards';
import RevenueAnalytics from '../components/dashboard/RevenueAnalytics';
import SalesBreakdown from '../components/dashboard/SalesBreakdown';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import AiSystemMonitor from '../components/dashboard/AiSystemMonitor';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import TopProducts from '../components/dashboard/TopProducts';
import TrafficSources from '../components/dashboard/TrafficSources';
import TaskManagement from '../components/dashboard/TaskManagement';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import TeamMembers from '../components/dashboard/TeamMembers';
import { dashboardService } from '../services/api';
import { MOCK_SUMMARY, MOCK_REVENUE_DATA, MOCK_SALES_BREAKDOWN, MOCK_ORDERS, MOCK_AI_METRICS, MOCK_ACTIVITIES, MOCK_PRODUCTS, MOCK_TRAFFIC_SOURCES, MOCK_TRANSACTIONS, MOCK_TEAM_MEMBERS } from '../services/mockData';

export default function Dashboard() {
  const [summary, setSummary] = useState(MOCK_SUMMARY);
  const [revenueData, setRevenueData] = useState(MOCK_REVENUE_DATA.monthly);
  const [revenueRange, setRevenueRange] = useState('monthly');
  const [salesBreakdown, setSalesBreakdown] = useState(MOCK_SALES_BREAKDOWN);
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [aiMetrics, setAiMetrics] = useState(MOCK_AI_METRICS);
  const [activities, setActivities] = useState(MOCK_ACTIVITIES);
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [trafficSources, setTrafficSources] = useState(MOCK_TRAFFIC_SOURCES);
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [teamMembers, setTeamMembers] = useState(MOCK_TEAM_MEMBERS);

  useEffect(() => {
    let isMounted = true;
    const fetchDashboardData = async () => {
      try {
        const [
          sumRes,
          revRes,
          salesRes,
          ordRes,
          aiRes,
          actRes,
          prodRes,
          trafRes,
          txRes,
          teamRes
        ] = await Promise.all([
          dashboardService.getSummary(),
          dashboardService.getRevenue(revenueRange),
          dashboardService.getSalesBreakdown(),
          dashboardService.getOrders(),
          dashboardService.getAiMetrics(),
          dashboardService.getActivities(),
          dashboardService.getProducts(),
          dashboardService.getTrafficSources(),
          dashboardService.getTransactions(),
          dashboardService.getTeamMembers(),
        ]);

        if (isMounted) {
          if (sumRes) setSummary(sumRes);
          if (revRes) setRevenueData(revRes);
          if (salesRes) setSalesBreakdown(salesRes);
          if (ordRes) setOrders(ordRes);
          if (aiRes) setAiMetrics(aiRes);
          if (actRes) setActivities(actRes);
          if (prodRes) setProducts(prodRes);
          if (trafRes) setTrafficSources(trafRes);
          if (txRes) setTransactions(txRes);
          if (teamRes) setTeamMembers(teamRes);
        }
      } catch (err) {
        console.error("Dashboard background fetch error:", err);
      }
    };

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleRevenueRangeChange = async (range) => {
    setRevenueRange(range);
    const data = await dashboardService.getRevenue(range);
    if (data) setRevenueData(data);
  };

  return (
    <Layout title="Command Center" breadcrumb="Home / Dashboard">
      <div className="space-y-4 sm:space-y-6">
        {/* Section 6: Hero Section (Instant Cyber HUD Node Card) */}
        <HeroSection />

        {/* Section 7: KPI Cards */}
        <KpiCards summary={summary} />

        {/* Analytics & Sales Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 min-w-0">
            <RevenueAnalytics
              data={revenueData}
              activeRange={revenueRange}
              onRangeChange={handleRevenueRangeChange}
            />
          </div>
          <div className="lg:col-span-4 min-w-0">
            <SalesBreakdown data={salesBreakdown} />
          </div>
        </div>

        {/* Orders Table & AI Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 min-w-0">
            <RecentOrdersTable orders={orders} />
          </div>
          <div className="lg:col-span-4 min-w-0">
            <AiSystemMonitor metrics={aiMetrics} />
          </div>
        </div>

        {/* Product Ranking, Traffic & Tasks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="min-w-0">
            <TopProducts products={products} />
          </div>
          <div className="min-w-0">
            <TrafficSources sources={trafficSources} />
          </div>
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <TaskManagement />
          </div>
        </div>

        {/* Activity Feed, Transactions & Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="min-w-0">
            <ActivityFeed activities={activities} />
          </div>
          <div className="min-w-0">
            <RecentTransactions transactions={transactions} />
          </div>
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <TeamMembers members={teamMembers} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
