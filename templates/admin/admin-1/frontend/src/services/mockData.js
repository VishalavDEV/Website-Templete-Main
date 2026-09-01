export const MOCK_SUMMARY = {
  totalRevenue: 84254,
  revenueChange: 12.5,
  totalOrders: 2145,
  ordersChange: 8.2,
  activeUsers: 12426,
  usersChange: 14.8,
  systemHealth: 99.99,
  healthChange: 0.4,
};

export const MOCK_REVENUE_DATA = {
  monthly: [
    { month: 'Jan', revenue: 42000, sales: 1100, avgOrder: 38.18 },
    { month: 'Feb', revenue: 48000, sales: 1250, avgOrder: 38.40 },
    { month: 'Mar', revenue: 55000, sales: 1400, avgOrder: 39.28 },
    { month: 'Apr', revenue: 51000, sales: 1320, avgOrder: 38.63 },
    { month: 'May', revenue: 64000, sales: 1650, avgOrder: 38.78 },
    { month: 'Jun', revenue: 69000, sales: 1780, avgOrder: 38.76 },
    { month: 'Jul', revenue: 73000, sales: 1890, avgOrder: 38.62 },
    { month: 'Aug', revenue: 78000, sales: 1980, avgOrder: 39.39 },
    { month: 'Sep', revenue: 81000, sales: 2050, avgOrder: 39.51 },
    { month: 'Oct', revenue: 82500, sales: 2100, avgOrder: 39.28 },
    { month: 'Nov', revenue: 83800, sales: 2130, avgOrder: 39.34 },
    { month: 'Dec', revenue: 84254, sales: 2145, avgOrder: 39.28 },
  ],
  weekly: [
    { month: 'Mon', revenue: 11200, sales: 285, avgOrder: 39.29 },
    { month: 'Tue', revenue: 12400, sales: 310, avgOrder: 40.00 },
    { month: 'Wed', revenue: 13800, sales: 350, avgOrder: 39.42 },
    { month: 'Thu', revenue: 11900, sales: 300, avgOrder: 39.66 },
    { month: 'Fri', revenue: 14500, sales: 370, avgOrder: 39.18 },
    { month: 'Sat', revenue: 10200, sales: 260, avgOrder: 39.23 },
    { month: 'Sun', revenue: 10254, sales: 270, avgOrder: 37.97 },
  ],
  daily: [
    { month: '00:00', revenue: 2100, sales: 55, avgOrder: 38.18 },
    { month: '04:00', revenue: 1800, sales: 46, avgOrder: 39.13 },
    { month: '08:00', revenue: 5400, sales: 138, avgOrder: 39.13 },
    { month: '12:00', revenue: 9800, sales: 248, avgOrder: 39.51 },
    { month: '16:00', revenue: 8900, sales: 226, avgOrder: 39.38 },
    { month: '20:00', revenue: 6400, sales: 162, avgOrder: 39.50 },
  ]
};

export const MOCK_SALES_BREAKDOWN = [
  { name: 'Electronics', value: 4820, color: '#00f0ff' },
  { name: 'Software', value: 3460, color: '#7000ff' },
  { name: 'Services', value: 2150, color: '#10b981' },
  { name: 'Licenses', value: 1996, color: '#f59e0b' },
];

export const MOCK_ORDERS = [
  { id: '#ORD-7821', customer: 'Sarah Connor', product: 'Premium Dashboard Kit', amount: 299, status: 'Completed', date: '2026-08-19' },
  { id: '#ORD-7820', customer: 'Mike Chen', product: 'Cloud Storage Plan', amount: 49, status: 'Processing', date: '2026-08-19' },
  { id: '#ORD-7819', customer: 'Emily Park', product: 'Enterprise License', amount: 599, status: 'Completed', date: '2026-08-18' },
  { id: '#ORD-7818', customer: 'David Lee', product: 'Support Add-on', amount: 129, status: 'Pending', date: '2026-08-18' },
  { id: '#ORD-7817', customer: 'Lisa Wang', product: 'Analytics Module', amount: 199, status: 'Cancelled', date: '2026-08-17' },
  { id: '#ORD-7816', customer: 'Alex Rivera', product: 'AI Model API Key', amount: 399, status: 'Completed', date: '2026-08-17' },
  { id: '#ORD-7815', customer: 'Rachel Green', product: 'Custom Integration', amount: 899, status: 'Processing', date: '2026-08-16' },
];

export const MOCK_AI_METRICS = {
  gpuUsage: 78,
  cpuUsage: 42,
  memoryUsage: 64,
  modelRequests: '18.4K',
  inferenceLatencyMs: 82,
  apiHealth: 99.98,
};

export const MOCK_ACTIVITIES = [
  { id: 1, text: 'Order #ORD-7821 completed', time: '5 min ago', type: 'success' },
  { id: 2, text: 'New user Alex Thompson registered', time: '28 min ago', type: 'info' },
  { id: 3, text: 'Server storage reached 85%', time: '1 hour ago', type: 'warning' },
  { id: 4, text: 'Subscription renewed', time: '2 hours ago', type: 'success' },
  { id: 5, text: 'Unusual login attempt detected', time: '3 hours ago', type: 'danger' },
  { id: 6, text: 'Payment of $2,400 received', time: '5 hours ago', type: 'success' },
];

export const MOCK_PRODUCTS = [
  { rank: 1, name: 'Premium Dashboard Kit', category: 'Software', revenue: '$34,200', unitsSold: 114 },
  { rank: 2, name: 'Cloud Storage Plan', category: 'Infrastructure', revenue: '$24,500', unitsSold: 500 },
  { rank: 3, name: 'Enterprise License', category: 'Software', revenue: '$17,970', unitsSold: 30 },
  { rank: 4, name: 'Support Add-on', category: 'Services', revenue: '$5,160', unitsSold: 40 },
  { rank: 5, name: 'Analytics Module', category: 'Software', revenue: '$3,980', unitsSold: 20 },
];

export const MOCK_TRAFFIC_SOURCES = [
  { name: 'Direct', percentage: 45, value: 11025, color: '#00f0ff' },
  { name: 'Organic Search', percentage: 28, value: 6860, color: '#7000ff' },
  { name: 'Social Media', percentage: 17, value: 4165, color: '#10b981' },
  { name: 'Referral', percentage: 10, value: 2450, color: '#f59e0b' },
];

export const MOCK_TASKS = [
  { id: 1, title: 'Review Q4 financial report', status: 'Completed', dueDate: 'Yesterday', priority: 'High' },
  { id: 2, title: 'Update team permissions', status: 'Completed', dueDate: 'Yesterday', priority: 'Medium' },
  { id: 3, title: 'Deploy v2.4.0 to production', status: 'Pending', dueDate: 'Today', priority: 'High' },
  { id: 4, title: 'Design new landing page', status: 'Pending', dueDate: 'Tomorrow', priority: 'Medium' },
  { id: 5, title: 'Prepare client presentation', status: 'Pending', dueDate: 'Upcoming', priority: 'Low' },
  { id: 6, title: 'Optimize database queries', status: 'Pending', dueDate: 'Upcoming', priority: 'High' },
];

export const MOCK_TRANSACTIONS = [
  { id: 1, title: 'Payment from Client', amount: '+$2,400', date: 'Today, 14:20', positive: true },
  { id: 2, title: 'Subscription Renewal', amount: '+$99', date: 'Today, 11:05', positive: true },
  { id: 3, title: 'Server Hosting', amount: '-$380', date: 'Yesterday', positive: false },
  { id: 4, title: 'Transfer to Savings', amount: '-$1,000', date: '18 Aug', positive: false },
  { id: 5, title: 'Freelance Project', amount: '+$850', date: '17 Aug', positive: true },
];

export const MOCK_TEAM_MEMBERS = [
  { id: 1, name: 'Sarah Connor', role: 'Lead Designer', status: 'Online', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Mike Chen', role: 'Senior Developer', status: 'Online', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Emily Park', role: 'Product Manager', status: 'Busy', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80' },
  { id: 4, name: 'David Lee', role: 'QA Engineer', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { id: 5, name: 'Lisa Wang', role: 'Marketing Lead', status: 'Online', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
];

export const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'New Order Received', description: 'Order #ORD-7821 received from Sarah Connor', time: '5m ago', unread: true, type: 'order' },
  { id: 2, title: 'Payment Successful', description: '$2,400 deposited to primary account', time: '1h ago', unread: true, type: 'payment' },
  { id: 3, title: 'Server Memory Alert', description: 'Node US-East-1 reaching 85% capacity', time: '2h ago', unread: false, type: 'alert' },
  { id: 4, title: 'AI Model Trained', description: 'Neural v4.2 model finished epoch 100', time: '4h ago', unread: false, type: 'system' },
];
