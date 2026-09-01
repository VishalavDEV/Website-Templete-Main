import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  RefreshCw,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';
import ChartCard from '../components/ChartCard';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid
} from 'recharts';

export default function Reports() {
  const [reportsData, setReportsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('sales');
  
  // Generating overlay trigger
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await api.get('/reports');
      setReportsData(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch reports index.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // Show simulated updated alert
      alert(`Updated report summary for ${activeTab.toUpperCase()} has been generated.`);
    }, 1500);
  };

  const handleDownload = (type) => {
    // Navigate directly to the download url which returns CSV attachment header
    window.open(`http://localhost:8081/api/reports/download?type=${type}`, '_blank');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
        <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '40px 0' }}>
        <AlertCircle size={36} style={{ color: 'var(--danger)' }} />
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{error}</p>
      </div>
    );
  }

  // Define tab info
  const tabs = [
    { key: 'sales', label: 'Sales & Revenue', icon: DollarSign, data: reportsData?.sales },
    { key: 'users', label: 'User Registration', icon: Users, data: reportsData?.users },
    { key: 'orders', label: 'Order Fulfilment', icon: ShoppingCart, data: reportsData?.orders },
    { key: 'revenue', label: 'Financial Statements', icon: Briefcase, data: reportsData?.revenue },
  ];

  const currentTab = tabs.find(t => t.key === activeTab);

  // Mock charts specifically designed for each category
  const renderTabChart = (key) => {
    const mockData = [
      { name: 'Mon', value: 120, expenses: 80 },
      { name: 'Tue', value: 210, expenses: 140 },
      { name: 'Wed', value: 180, expenses: 120 },
      { name: 'Thu', value: 290, expenses: 180 },
      { name: 'Fri', value: 240, expenses: 150 },
      { name: 'Sat', value: 340, expenses: 220 },
      { name: 'Sun', value: 390, expenses: 240 },
    ];

    if (key === 'sales') {
      return (
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F0D36B" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#F0D36B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#E5A93B" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSales)" name="Daily Sales ($)" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    if (key === 'users') {
      return (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={mockData}>
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#F0D36B" radius={[4, 4, 0, 0]} name="New Signups" />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (key === 'orders') {
      return (
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={mockData}>
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="var(--info)" fill="#F1F7FD" strokeWidth={2.5} name="Orders Processed" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={mockData}>
          <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
          <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#F0D36B" name="Gross" />
          <Bar dataKey="expenses" fill="#7C766C" name="Expenses" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Platform Report Center</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Generate, preview, and download CSV log reports for all branches.</p>
      </div>

      {/* Main split tab section layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '24px',
        alignItems: 'start'
      }} className="reports-split-layout">
        
        {/* Left Side: Report Tab items */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '16px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--border-radius-sm)',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <Icon size={18} style={{ color: isActive ? 'var(--text-main)' : 'var(--text-muted)' }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right Side: Active report summary display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <AnimatePresence mode="wait">
            {currentTab && (
              <motion.div
                key={currentTab.key}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative'
                }}
              >
                {/* Generating Overlay indicator */}
                {isGenerating && (
                  <div style={{
                    position: 'absolute',
                    top: 0, right: 0, bottom: 0, left: 0,
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(3px)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    borderRadius: 'var(--border-radius-md)'
                  }}>
                    <RefreshCw size={24} style={{ color: 'var(--accent)' }} className="pulse-glow" />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Recalculating analytics ledger...</span>
                  </div>
                )}

                {/* Tab header actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {currentTab.data?.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Status: Compiled {currentTab.data?.generatedAt}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={handleGenerateReport}
                      className="btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                    >
                      <RefreshCw size={14} /> Recalculate
                    </button>
                    <button
                      onClick={() => handleDownload(currentTab.key)}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                    >
                      <Download size={14} /> Download CSV
                    </button>
                  </div>
                </div>

                {/* Tab statistics summary row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '16px',
                  borderRadius: 'var(--border-radius-sm)',
                  border: '1px solid var(--border-color)'
                }}>
                  {Object.entries(currentTab.data || {}).map(([field, val]) => {
                    // Skip title / generatedAt fields
                    if (field === 'title' || field === 'generatedAt') return null;
                    
                    // Format key title (e.g. totalRevenue -> Total Revenue)
                    const titleText = field
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase());
                    
                    const displayVal = typeof val === 'number' && field.toLowerCase().includes('revenue')
                      ? `$${val.toLocaleString()}`
                      : val;

                    return (
                      <div key={field}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                          {titleText}
                        </span>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px' }}>
                          {displayVal}
                        </h4>
                      </div>
                    );
                  })}
                </div>

                {/* Tab Specific Chart preview */}
                <div style={{ marginTop: '10px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                    ANALYTICAL PREVIEW TREND:
                  </span>
                  {renderTabChart(currentTab.key)}
                </div>

                {/* Summary list of system metrics */}
                {reportsData?.performance && activeTab === 'revenue' && (
                  <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '15px' }}>
                      OPERATIONAL API PERFORMANCE AUDITS:
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="reports-performance-grid">
                      {reportsData.performance.map((metric, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>{metric.metric}</span>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
