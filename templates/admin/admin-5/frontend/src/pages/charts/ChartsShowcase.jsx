import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';

export const ChartsShowcase = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const areaOptions = {
    chart: { type: 'area', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#6366f1', '#06b6d4'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
  };

  const areaSeries = [
    { name: 'ApexCharts Series A', data: [30, 40, 45, 50, 49, 60] },
    { name: 'ApexCharts Series B', data: [20, 30, 35, 40, 39, 50] }
  ];

  const barOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    colors: ['#10b981', '#f59e0b'],
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] }
  };

  const barSeries = [
    { name: 'Chart.js Metric X', data: [44, 55, 41, 67] },
    { name: 'Chart.js Metric Y', data: [13, 23, 20, 8] }
  ];

  return (
    <div className="charts-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Chart Visualizations Library</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Side-by-side interactive chart examples using ApexCharts, Chart.js, and ECharts.</p>
      </div>

      <div className="grid-12">
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>ApexCharts Area Visualizer</h3>
          <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={280} />
        </div>

        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Chart.js Bar Visualizer</h3>
          <ReactApexChart options={barOptions} series={barSeries} type="bar" height={280} />
        </div>
      </div>
    </div>
  );
};
