import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AppShell } from './components/AppShell';

// Route Imports
import { Dashboard } from './components/routes/Dashboard';
import { CommandCenter } from './components/routes/CommandCenter';
import { Analytics } from './components/routes/Analytics';
import { Projects } from './components/routes/Projects';
import { Tasks } from './components/routes/Tasks';
import { Crm } from './components/routes/Crm';
import { Users } from './components/routes/Users';
import { Finance } from './components/routes/Finance';
import { Hr } from './components/routes/Hr';
import { Messages } from './components/routes/Messages';
import { Files } from './components/routes/Files';
import { Calendar } from './components/routes/Calendar';
import { Reports } from './components/routes/Reports';
import { Settings } from './components/routes/Settings';
import { SystemTest } from './components/routes/SystemTest';

const RouteDispatcher: React.FC = () => {
  const { currentRoute } = useApp();

  const renderActiveRoute = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <Dashboard />;
      case 'command-center':
        return <CommandCenter />;
      case 'analytics':
        return <Analytics />;
      case 'projects':
        return <Projects />;
      case 'tasks':
        return <Tasks />;
      case 'crm':
        return <Crm />;
      case 'users':
        return <Users />;
      case 'finance':
        return <Finance />;
      case 'hr':
        return <Hr />;
      case 'messages':
        return <Messages />;
      case 'files':
        return <Files />;
      case 'calendar':
        return <Calendar />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'system-test':
        return <SystemTest />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div key={currentRoute} className="page-transition-container">
      {renderActiveRoute()}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppShell>
        <RouteDispatcher />
      </AppShell>
    </AppProvider>
  );
}
