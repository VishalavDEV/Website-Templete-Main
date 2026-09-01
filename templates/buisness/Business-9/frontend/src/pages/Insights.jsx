import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, CheckCircle2, DollarSign, Calendar } from 'lucide-react';
import PageTransition from '../animations/PageTransition';

export default function Insights() {
  const [activePeriod, setActivePeriod] = useState('Quarterly');
  const [activeTab, setActiveTab] = useState('revenue');

  const periods = ['Monthly', 'Quarterly', 'Yearly'];

  // Mock data that changes depending on the period selected
  const chartData = {
    revenue: {
      Monthly: [20, 35, 45, 30, 55, 70, 85, 65, 80, 95, 110, 130],
      Quarterly: [80, 140, 220, 310, 420],
      Yearly: [350, 780, 1450, 2900]
    },
    customers: {
      Monthly: [15, 20, 28, 25, 35, 40, 52, 48, 60, 68, 80, 95],
      Quarterly: [48, 88, 145, 210, 298],
      Yearly: [180, 420, 950, 1850]
    },
    performance: {
      Monthly: { speed: 82, quality: 90, optimization: 78 },
      Quarterly: { speed: 92, quality: 96, optimization: 88 },
      Yearly: { speed: 98, quality: 98, optimization: 95 }
    }
  };

  const getRevenuePath = () => {
    const points = chartData.revenue[activePeriod];
    const width = 500;
    const height = 220;
    const maxVal = Math.max(...points) * 1.15;
    const stepX = width / (points.length - 1);
    
    return points.map((val, idx) => {
      const x = idx * stepX;
      const y = height - (val / maxVal) * height;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  };

  const getRevenuePoints = () => {
    const points = chartData.revenue[activePeriod];
    const width = 500;
    const height = 220;
    const maxVal = Math.max(...points) * 1.15;
    const stepX = width / (points.length - 1);
    
    return points.map((val, idx) => ({
      x: idx * stepX,
      y: height - (val / maxVal) * height,
      value: val
    }));
  };

  const currentPoints = getRevenuePoints();

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><BarChart3 size={14} /> Analytics Hub</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Real-time Business <span className="text-gradient">Performance Insights</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Interact with our mock analytics engine to view performance progress, customer metrics, and growth forecasts.
            </p>
          </div>

          {/* Period selector tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}>
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: activePeriod === period ? 'var(--primary)' : 'var(--glass-border)',
                  background: activePeriod === period ? 'var(--primary-gradient)' : 'var(--glass-bg)',
                  color: activePeriod === period ? '#FFF' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-title)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: activePeriod === period ? '0 4px 10px rgba(249, 115, 22, 0.15)' : 'none'
                }}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Interactive Dashboard Container */}
          <div className="dashboard-grid" style={{
            display: 'grid',
            gridTemplateColumns: '0.7fr 1.3fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Left controller parameters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Tab selector menu */}
              <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.5)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-title)' }}>Metrics Directory</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { id: 'revenue', name: 'Revenue Forecasting', icon: <DollarSign size={16} /> },
                    { id: 'customers', name: 'User Growth Stream', icon: <Users size={16} /> },
                    { id: 'performance', name: 'Efficiency Index', icon: <CheckCircle2 size={16} /> }
                  ].map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: 'none',
                          background: isSelected ? 'rgba(249, 115, 22, 0.08)' : 'transparent',
                          color: isSelected ? 'var(--primary)' : 'var(--text-secondary)',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        {tab.icon}
                        {tab.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Statistics highlight card */}
              <div className="glass-card" style={{
                background: 'var(--primary-gradient)',
                color: '#FFF',
                padding: '2rem 1.5rem',
                border: 'none',
                boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)'
              }}>
                <TrendingUp size={24} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', marginBottom: '0.5rem', color: '#FFF' }}>
                  Advisory Impact
                </h4>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.5, opacity: 0.85, marginBottom: '1.25rem' }}>
                  By re-mapping database trigger logic and auditing visual branding typography, our average corporate client increases operational efficiencies by 34%.
                </p>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-title)' }}>
                  +120% YoY Net
                </div>
              </div>

            </div>

            {/* Right main visualization panel */}
            <div className="glass-card" style={{ background: '#FFF', padding: '2.5rem', minHeight: '380px' }}>
              <AnimatePresence mode="wait">
                
                {/* 1. REVENUE LINE GRAPH */}
                {activeTab === 'revenue' && (
                  <motion.div
                    key="revenue-chart"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
                      Estimated Revenue Projection <span style={{ color: 'var(--primary)' }}>(${activePeriod === 'Monthly' ? 'K' : 'M'})</span>
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      Curve highlights scaling trajectory based on historical client success timelines.
                    </p>

                    {/* SVG Chart area */}
                    <div style={{ position: 'relative', width: '100%' }}>
                      <svg viewBox="0 0 500 220" style={{ width: '100%', overflow: 'visible' }}>
                        
                        {/* Y-axis helper lines */}
                        <line x1="0" y1="55" x2="500" y2="55" stroke="rgba(249,115,22,0.05)" strokeWidth="1" />
                        <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(249,115,22,0.05)" strokeWidth="1" />
                        <line x1="0" y1="165" x2="500" y2="165" stroke="rgba(249,115,22,0.05)" strokeWidth="1" />
                        <line x1="0" y1="220" x2="500" y2="220" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" />

                        {/* Curved line */}
                        <motion.path
                          d={getRevenuePath()}
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />

                        {/* Point Circles */}
                        {currentPoints.map((pt, i) => (
                          <motion.circle
                            key={i}
                            cx={pt.x}
                            cy={pt.y}
                            r="5"
                            fill="#FFF"
                            stroke="var(--primary)"
                            strokeWidth="2.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.6 }}
                          />
                        ))}
                      </svg>
                    </div>
                  </motion.div>
                )}

                {/* 2. CUSTOMER BAR GRAPH */}
                {activeTab === 'customers' && (
                  <motion.div
                    key="customer-chart"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
                      Active Onboarded Accounts Growth
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      Graph isolates account sign-up volumes over selected advisory periods.
                    </p>

                    {/* Bar visualization */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      height: '200px',
                      paddingTop: '20px',
                      borderBottom: '1.5px solid rgba(249,115,22,0.15)'
                    }}>
                      {chartData.customers[activePeriod].map((val, idx) => {
                        const maxVal = Math.max(...chartData.customers[activePeriod]) * 1.1;
                        const heightPct = `${(val / maxVal) * 100}%`;
                        return (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              width: '100%',
                              padding: '0 4px'
                            }}
                          >
                            <motion.div
                              style={{
                                background: 'var(--primary-gradient)',
                                width: '100%',
                                maxWidth: '32px',
                                borderRadius: '4px 4px 0 0',
                                boxShadow: '0 2px 8px rgba(249,115,22,0.1)'
                              }}
                              initial={{ height: 0 }}
                              animate={{ height: heightPct }}
                              transition={{ type: 'spring', stiffness: 80, delay: idx * 0.05 }}
                              whileHover={{ background: 'var(--primary-gradient-hover)' }}
                            />
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                              {idx + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* 3. PERFORMANCE EFFICIENCY RING */}
                {activeTab === 'performance' && (
                  <motion.div
                    key="performance-chart"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
                      Infrastructure Performance Metrics
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                      Audit parameters isolating server compression speeds, load rates, and bug mitigation.
                    </p>

                    {/* Radial Progress grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
                      {[
                        { label: 'Core Load Speed', val: chartData.performance[activePeriod].speed },
                        { label: 'Compile Integrity', val: chartData.performance[activePeriod].quality },
                        { label: 'Database Optimization', val: chartData.performance[activePeriod].optimization }
                      ].map((item, index) => {
                        const radius = 40;
                        const circum = 2 * Math.PI * radius;
                        const dashoffset = circum - (item.val / 100) * circum;
                        return (
                          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '0.8rem' }}>
                              <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
                                <circle cx="50" cy="50" r={radius} stroke="rgba(249,115,22,0.06)" strokeWidth="8" fill="transparent" />
                                <motion.circle
                                  cx="50"
                                  cy="50"
                                  r={radius}
                                  stroke="var(--primary)"
                                  strokeWidth="8"
                                  fill="transparent"
                                  strokeDasharray={circum}
                                  initial={{ strokeDashoffset: circum }}
                                  animate={{ strokeDashoffset: dashoffset }}
                                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.2 }}
                                />
                              </svg>
                              <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-title)',
                                fontWeight: 800,
                                fontSize: '1.15rem'
                              }}>
                                {item.val}%
                              </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}
