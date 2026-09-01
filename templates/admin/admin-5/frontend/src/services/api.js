const API_BASE_URL = 'http://localhost:8080/api';

export const fetchOverviewStats = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/overview`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return {
      totalRevenue: '₹128,450.00',
      revenueGrowth: '+14.2%',
      activeUsers: 14820,
      userGrowth: '+8.5%',
      totalOrders: 3420,
      orderGrowth: '+12.1%',
      conversionRate: '3.85%',
      openTickets: 12,
      pendingTasks: 8
    };
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [
      { id: 1, name: 'Alex Morgan', email: 'alex.morgan@tssmartadmin.io', role: 'Administrator', status: 'Active', avatar: '/assets/avatar_alex.jpg', department: 'Executive Engineering' },
      { id: 2, name: 'Marcus Chen', email: 'marcus.chen@tssmartadmin.io', role: 'Senior Engineer', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', department: 'Backend Systems' },
      { id: 3, name: 'Sarah Jenkins', email: 'sarah.j@tssmartadmin.io', role: 'Product Designer', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', department: 'Design Systems' },
      { id: 4, name: 'David Kim', email: 'david.k@tssmartadmin.io', role: 'Finance Lead', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', department: 'Treasury & Finance' },
      { id: 5, name: 'Elena Rostova', email: 'elena.r@tssmartadmin.io', role: 'Marketing Lead', status: 'Active', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150', department: 'Growth Marketing' },
      { id: 6, name: 'Robert Vance', email: 'robert.vance@techcorp.com', role: 'Enterprise Client', status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', department: 'External Client' },
      { id: 7, name: 'Clara Oswald', email: 'clara.o@tardis.io', role: 'Security Auditor', status: 'Active', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', department: 'InfoSec Audit' },
      { id: 8, name: 'Liam O\'Connor', email: 'liam.o@tssmartadmin.io', role: 'DevOps Specialist', status: 'Active', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150', department: 'Cloud Infrastructure' }
    ];
  }
};

export const fetchTasks = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [
      { id: 1, title: 'Design Spring Boot REST API Schema', description: 'Create REST endpoints for dashboard analytics.', category: 'Backend', priority: 'High', status: 'in_progress', dueDate: '2026-08-25', assignee: 'Marcus Chen' },
      { id: 2, title: 'Deploy v2.4 hotfix to production', description: 'Apply security patches and optimize DB queries.', category: 'DevOps', priority: 'Urgent', status: 'todo', dueDate: '2026-08-22', assignee: 'Alex Morgan' },
      { id: 3, title: 'Implement Dark/Light Theme Switching', description: 'Use CSS custom variables for instant smooth switching.', category: 'Frontend', priority: 'Medium', status: 'completed', dueDate: '2026-08-18', assignee: 'Sarah Jenkins' },
      { id: 4, title: 'UX Audit for CRM Dashboard', description: 'Review layout hierarchy and accessibility parameters.', category: 'Design', priority: 'Low', status: 'review', dueDate: '2026-08-28', assignee: 'Elena Rostova' },
      { id: 5, title: 'Configure MySQL Read Replicas', description: 'Set up master-slave replication for high availability.', category: 'Database', priority: 'High', status: 'todo', dueDate: '2026-08-30', assignee: 'Liam O\'Connor' },
      { id: 6, title: 'Audit SOC2 Security Compliance Controls', description: 'Review access logs and encryption parameters.', category: 'Security', priority: 'Urgent', status: 'in_progress', dueDate: '2026-08-26', assignee: 'Clara Oswald' }
    ];
  }
};

export const fetchTickets = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/tickets`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [
      { id: 1, ticketNumber: '#TCK-9482', subject: 'Cannot reset password via email link', customerName: 'Robert Vance', priority: 'High', status: 'Open', category: 'Auth Security', createdAt: '10 mins ago' },
      { id: 2, ticketNumber: '#TCK-9481', subject: 'Billing invoice PDF download error', customerName: 'TechCorp Inc.', priority: 'Medium', status: 'In Progress', category: 'Billing', createdAt: '1 hour ago' },
      { id: 3, ticketNumber: '#TCK-9479', subject: 'API rate limit reached for webhooks', customerName: 'Starlight Media', priority: 'Urgent', status: 'Open', category: 'Developer API', createdAt: '3 hours ago' },
      { id: 4, ticketNumber: '#TCK-9475', subject: 'Request for custom permission roles', customerName: 'Acme Logistics', priority: 'Low', status: 'Resolved', category: 'User Roles', createdAt: 'Yesterday' },
      { id: 5, ticketNumber: '#TCK-9471', subject: 'Spring Boot REST API 500 error on CORS options', customerName: 'Quantum Devs', priority: 'High', status: 'In Progress', category: 'Backend REST', createdAt: 'Yesterday' },
      { id: 6, ticketNumber: '#TCK-9468', subject: 'Custom theme CSS variables overriding corporate brand colors', customerName: 'Omni Consumer Products', priority: 'Medium', status: 'Resolved', category: 'Frontend Theme', createdAt: '2 days ago' }
    ];
  }
};
