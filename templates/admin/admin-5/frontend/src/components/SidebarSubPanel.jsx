import React from 'react';
import { 
  BarChart2, DollarSign, Users, Briefcase, Target, ShoppingBag, Home,
  MessageSquare, Mail, Calendar, Kanban, Folder, UserCheck, CheckSquare, LifeBuoy,
  UserPlus, Shield, Settings, Key, Lock, FileText, HelpCircle, Clock,
  Search, AlertTriangle, AlertCircle, HardDrive, Timer, CreditCard, FormInput,
  Table, Smile, Layout, Activity, Bell, File, Layers, Eye, Edit3, CheckCircle, Upload, Calendar as DateIcon, ListFilter, Type, X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Sidebar.css';

export const SidebarSubPanel = () => {
  const { activeCategory, activePage, navigateTo, sidebarCollapsed, setMobileMenuOpen } = useApp();

  if (sidebarCollapsed) return null;

  const subMenuMap = {
    dashboards: {
      title: 'Dashboards',
      items: [
        { id: 'overview', label: 'Home', icon: Home, badge: 'Main' },
        { id: 'sales', label: 'Sales', icon: ShoppingBag },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
        { id: 'crm', label: 'CRM', icon: Users },
        { id: 'marketing', label: 'Marketing', icon: Target },
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'finance', label: 'Finance', icon: DollarSign }
      ]
    },
    apps: {
      title: 'Apps',
      items: [
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'kanban', label: 'Kanban Board', icon: Kanban },
        { id: 'chat', label: 'Chat', icon: MessageSquare, badge: 'Live' },
        { id: 'contacts', label: 'Contacts', icon: UserCheck },
        { id: 'files', label: 'File Manager', icon: Folder },
        { id: 'email', label: 'Email', icon: Mail, count: '12' },
        { id: 'todo', label: 'Todo List', icon: CheckSquare },
        { id: 'tickets', label: 'Support Center', icon: LifeBuoy, count: '4' }
      ]
    },
    forms: {
      title: 'Forms',
      items: [
        { id: 'forms-elements', label: 'Form Elements', icon: FormInput },
        { id: 'forms-layouts', label: 'Form Layouts', icon: Layers },
        { id: 'forms-validation', label: 'Validation', icon: CheckCircle },
        { id: 'forms-wizard', label: 'Wizard', icon: ListFilter },
        { id: 'forms-editors', label: 'Rich Editors', icon: Type },
        { id: 'forms-pickers', label: 'Date/Time Pickers', icon: DateIcon },
        { id: 'forms-select', label: 'Advanced Select', icon: ListFilter },
        { id: 'forms-upload', label: 'File Upload', icon: Upload }
      ]
    },
    tables: {
      title: 'Tables',
      items: [
        { id: 'tables-basic', label: 'Basic Tables', icon: Table },
        { id: 'tables-datatables', label: 'DataTables', icon: Table, badge: 'Interactive' },
        { id: 'tables-responsive', label: 'Responsive Tables', icon: Table }
      ]
    },
    charts: {
      title: 'Charts',
      items: [
        { id: 'charts-apexcharts', label: 'ApexCharts', icon: BarChart2 },
        { id: 'charts-chartjs', label: 'Chart.js', icon: BarChart2 },
        { id: 'charts-echarts', label: 'ECharts', icon: BarChart2 }
      ]
    },
    icons: {
      title: 'Icons',
      items: [
        { id: 'icons-remixicon', label: 'Remix Icons', icon: Smile },
        { id: 'icons-fontawesome', label: 'Font Awesome', icon: Smile },
        { id: 'icons-phosphor', label: 'Phosphor Icons', icon: Smile },
        { id: 'icons-lucide', label: 'Lucide Icons', icon: Smile }
      ]
    },
    users: {
      title: 'Users',
      items: [
        { id: 'users-list', label: 'Users List', icon: Users },
        { id: 'users-view', label: 'User View', icon: Eye },
        { id: 'users-edit', label: 'User Edit', icon: Edit3 },
        { id: 'profile', label: 'Profile', icon: UserCheck },
        { id: 'settings-account', label: 'Account Settings', icon: Settings },
        { id: 'settings-notifications', label: 'Notifications', icon: Bell },
        { id: 'settings-activity', label: 'Activity Log', icon: Activity },
        { id: 'roles', label: 'Roles & Permissions', icon: Shield }
      ]
    },
    auth: {
      title: 'Authentication',
      items: [
        { id: 'auth-login', label: 'Login', icon: Key },
        { id: 'auth-register', label: 'Register', icon: UserPlus },
        { id: 'auth-forgot-password', label: 'Forgot Password', icon: Lock },
        { id: 'auth-reset-password', label: 'Reset Password', icon: Lock },
        { id: 'auth-verify-email', label: 'Email Verification', icon: Mail },
        { id: 'auth-two-factor', label: 'Two Factor Auth', icon: Shield },
        { id: 'auth-lock-screen', label: 'Lock Screen', icon: Lock }
      ]
    },
    pages: {
      title: 'Pages',
      items: [
        { id: 'pages-contact', label: 'Contact', icon: Mail },
        { id: 'invoice-list', label: 'Invoice List', icon: FileText },
        { id: 'invoice-view', label: 'Invoice View', icon: FileText },
        { id: 'pricing', label: 'Pricing', icon: CreditCard },
        { id: 'faq', label: 'FAQ', icon: HelpCircle },
        { id: 'error-404', label: '404 Not Found', icon: AlertTriangle },
        { id: 'error-403', label: '403 Forbidden', icon: Lock },
        { id: 'error-500', label: '500 Server Error', icon: AlertCircle },
        { id: 'error-maintenance', label: 'Maintenance', icon: HardDrive },
        { id: 'error-coming-soon', label: 'Coming Soon', icon: Timer },
        { id: 'timeline', label: 'Timeline', icon: Clock },
        { id: 'search-results', label: 'Search Results', icon: Search },
        { id: 'blank', label: 'Blank Page', icon: File }
      ]
    }
  };

  const currentGroup = subMenuMap[activeCategory] || subMenuMap['dashboards'];

  return (
    <div className="sidebar-subpanel">
      <div className="subpanel-header">
        <h3>{currentGroup.title}</h3>
        <button
          className="subpanel-close-btn"
          onClick={() => setMobileMenuOpen(false)}
          title="Close Sidebar"
        >
          <X size={18} />
        </button>
      </div>
      <nav className="subpanel-nav">
        {currentGroup.items.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              className={`subpanel-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                navigateTo(activeCategory, item.id);
                setMobileMenuOpen(false);
              }}
            >
              <div className="item-left">
                <Icon size={18} className="item-icon" />
                <span>{item.label}</span>
              </div>
              {item.badge && <span className="item-badge badge-primary">{item.badge}</span>}
              {item.count && <span className="item-badge badge-info">{item.count}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
