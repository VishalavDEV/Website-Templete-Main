import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';
import { exportToCSV } from '../../utils/export';
import { Download } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale);

export const ApexChartsPage = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const areaOptions = {
    chart: { type: 'area', toolbar: { show: true }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#6366f1', '#10b981'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
  };

  const areaSeries = [
    { name: 'Server Traffic (GB)', data: [310, 400, 280, 510, 420, 1090] },
    { name: 'CDN Cache Hits (GB)', data: [110, 320, 450, 320, 340, 520] }
  ];

  const barOptions = {
    chart: { type: 'bar', background: 'transparent' },
    theme: { mode: theme },
    colors: ['#f59e0b'],
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] }
  };

  const barSeries = [{ name: 'Enterprise Deals', data: [44, 55, 57, 56] }];

  const handleExport = () => {
    exportToCSV('apexcharts_data', [
      { month: 'Jan', traffic: 310, cdn: 110 },
      { month: 'Feb', traffic: 400, cdn: 320 },
      { month: 'Mar', traffic: 280, cdn: 450 },
      { month: 'Apr', traffic: 510, cdn: 320 },
      { month: 'May', traffic: 420, cdn: 340 },
      { month: 'Jun', traffic: 1090, cdn: 520 }
    ]);
    addToast('Exported ApexCharts data to CSV', 'success');
  };

  return (
    <div className="charts-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>ApexCharts Interactive Suite</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>High performance vector charts with zoomable axes, area fills, and tooltip triggers.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleExport}>
          <Download size={16} /> Export Graphs
        </button>
      </div>

      <div className="grid-12">
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Smooth Area Growth Graph</h3>
          <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={320} />
        </div>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Column Bar Volume Graph</h3>
          <ReactApexChart options={barOptions} series={barSeries} type="bar" height={320} />
        </div>
      </div>
    </div>
  );
};

export const ChartJsPage = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Active Subscriptions',
        data: [65, 59, 80, 81, 56, 95],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4
      }
    ]
  };

  const dataRadar = {
    labels: ['Speed', 'Reliability', 'UX Design', 'Security', 'APIs', 'Support'],
    datasets: [
      {
        label: 'TS Smart Admin Rating',
        data: [95, 98, 92, 99, 90, 94],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: '#10b981',
        borderWidth: 2
      }
    ]
  };

  const handleExport = () => {
    exportToCSV('chartjs_data', [
      { label: 'January', val: 65 },
      { label: 'February', val: 59 },
      { label: 'March', val: 80 },
      { label: 'April', val: 81 },
      { label: 'May', val: 56 },
      { label: 'June', val: 95 }
    ]);
    addToast('Exported Chart.js metrics to CSV', 'success');
  };

  return (
    <div className="charts-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Chart.js Canvas Visualizer</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>HTML5 canvas chart rendering engine for line, bar, doughnut, and radar charts.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleExport}>
          <Download size={16} /> Export Graphs
        </button>
      </div>

      <div className="grid-12">
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Canvas Line Chart</h3>
          <Line data={dataLine} />
        </div>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Radar Metrics Chart</h3>
          <Radar data={dataRadar} />
        </div>
      </div>
    </div>
  );
};

export const EChartsPage = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const optionGauge = {
    tooltip: { formatter: '{a} <br/>{b} : {c}%' },
    series: [
      {
        name: 'CPU Load',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: 48, name: 'Server Load' }]
      }
    ]
  };

  const optionLine = {
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line', smooth: true }]
  };

  const handleExport = () => {
    exportToCSV('echarts_metrics', [
      { day: 'Mon', val: 820 },
      { day: 'Tue', val: 932 },
      { day: 'Wed', val: 901 },
      { day: 'Thu', val: 934 },
      { day: 'Fri', val: 1290 },
      { day: 'Sat', val: 1330 },
      { day: 'Sun', val: 1320 }
    ]);
    addToast('Exported ECharts metrics to CSV', 'success');
  };

  return (
    <div className="charts-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Apache ECharts Suite</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Advanced gauge indicators and smooth curve multi-dimensional visualizations.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleExport}>
          <Download size={16} /> Export Graphs
        </button>
      </div>

      <div className="grid-12">
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Server Load Gauge Indicator</h3>
          <ReactECharts option={optionGauge} style={{ height: 320 }} />
        </div>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Smooth Curve Stream Graph</h3>
          <ReactECharts option={optionLine} style={{ height: 320 }} />
        </div>
      </div>
    </div>
  );
};
