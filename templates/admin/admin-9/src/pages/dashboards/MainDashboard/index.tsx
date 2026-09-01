/* src/pages/dashboards/MainDashboard/index.tsx */
import React from 'react';
import { mockStats } from '../../../data/dashboard';
import { Card } from '../../../components/ui/Card';
import { ChartPlaceholder } from '../../../components/charts';
import { SimpleTable } from '../../../components/tables';
import { Button } from '../../../components/ui/Button';
import { useToast } from '../../../app/providers/ToastProvider';
import { useGlobalModal } from '../../../app/providers/ModalProvider';
import { useTranslation } from '../../../app/providers/LocalizationProvider';
import { useAuth } from '../../../app/providers/AuthProvider';
import { 
  useSettings, 
  AdminLayoutType, 
  AuthLayoutType, 
  LayoutDensity,
  SidebarStyle,
  HeaderStyle,
  BreadcrumbStyle,
  MobileMenuStyle
} from '../../../app/providers/SettingsProvider';
import { useNavigate } from 'react-router-dom';

export default function MainDashboard() {
  const { toast } = useToast();
  const { openModal, closeModal } = useGlobalModal();
  const { t } = useTranslation();
  const { user } = useAuth();
  const { 
    settings, 
    setAdminLayoutType, 
    setAuthLayoutType, 
    setDensity, 
    setShowFooter,
    setSidebarStyle,
    setHeaderStyle,
    setBreadcrumbStyle,
    setMobileMenuStyle
  } = useSettings();
  const navigate = useNavigate();

  const handleShowModal = () => {
    openModal({
      title: 'Programmatic Dialog Modal',
      content: (
        <div className="space-y-3">
          <p className="text-sm">
            This modal was triggered programmatically from the **MainDashboard** using the `useGlobalModal` hook.
          </p>
          <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
            No local useState required in this dashboard screen component!
          </p>
        </div>
      ),
      footer: (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={closeModal}>
            Dismiss
          </Button>
          <Button variant="primary" size="sm" onClick={() => {
            toast.success('Saved changes successfully!');
            closeModal();
          }}>
            Confirm Action
          </Button>
        </div>
      )
    });
  };

  const adminOptions: { label: string; value: AdminLayoutType }[] = [
    { label: 'Collapsible', value: 'collapsible-sidebar' },
    { label: 'Mini Sidebar', value: 'mini-sidebar' },
    { label: 'Full Sidebar', value: 'full-sidebar' },
    { label: 'Right Sidebar', value: 'right-sidebar' },
  ];

  const authOptions: { label: string; value: AuthLayoutType }[] = [
    { label: 'Centered', value: 'centered' },
    { label: 'Split-screen', value: 'split-screen' },
    { label: 'Branding + Form', value: 'branding-form' },
    { label: 'Minimalist', value: 'minimal' },
    { label: 'Full View Split', value: 'full-screen' },
  ];

  const densityOptions: { label: string; value: LayoutDensity }[] = [
    { label: 'Compact Spacing', value: 'compact' },
    { label: 'Comfortable (Default)', value: 'comfortable' },
    { label: 'Spacious Padding', value: 'spacious' },
  ];

  // Navigation Options
  const sidebarOptions: { label: string; value: SidebarStyle }[] = [
    { label: 'Badges & Bottom Actions', value: 'badges-actions' },
    { label: 'Classic Grouped', value: 'classic' },
    { label: 'Workspace Switcher', value: 'workspace-switcher' },
  ];

  const headerOptions: { label: string; value: HeaderStyle }[] = [
    { label: 'Standard Header', value: 'standard' },
    { label: 'Expanded Global Search', value: 'global-search' },
    { label: 'Embedded Breadcrumb', value: 'breadcrumb-embedded' },
  ];

  const breadcrumbOptions: { label: string; value: BreadcrumbStyle }[] = [
    { label: 'Icon Indicators', value: 'icon' },
    { label: 'Simple Text', value: 'simple' },
    { label: 'Page Share/Export Actions', value: 'actions' },
  ];

  const mobileMenuOptions: { label: string; value: MobileMenuStyle }[] = [
    { label: 'Left Drawer Slide', value: 'slide-in' },
    { label: 'Mobile Bottom Tab Bar', value: 'bottom-nav' },
    { label: 'Fullscreen Overlay', value: 'fullscreen' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {t('welcome')}, {user?.name || 'User'}!
          </h1>
          <p className="text-sm text-muted-foreground">
            This dashboard showcases active theme colors extracted from your uploaded image.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate('/pages/blank')}>
            View Blank Layout Demos
          </Button>
        </div>
      </div>

      {/* Structural layout Variations */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Admin Layout Variations" subtitle="Instantly change the structural organization of this template dashboard.">
          <div className="flex flex-wrap gap-2">
            {adminOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.adminLayoutType === opt.value ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  setAdminLayoutType(opt.value);
                  toast.success(`Switched Admin Layout to ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Authentication Layouts" subtitle="Select the style, then test the view by navigating to the Login screen.">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {authOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={settings.authLayoutType === opt.value ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setAuthLayoutType(opt.value);
                    toast.success(`Auth Layout style set to: ${opt.label}`);
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
            <div className="pt-2 border-t border-border/50">
              <Button className="w-full" size="sm" onClick={() => navigate('/auth/login')}>
                Go to Authentication Login Screen →
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation Variations Playground */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Sidebar Navigation Styles" subtitle="Toggle workspace menus, alert badges, and shortcuts.">
          <div className="flex flex-wrap gap-2">
            {sidebarOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.sidebarStyle === opt.value ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  setSidebarStyle(opt.value);
                  toast.success(`Sidebar style set to: ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Topbar Header Styles" subtitle="Embed search engines, breadcrumbs, or buttons in the top navbar.">
          <div className="flex flex-wrap gap-2">
            {headerOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.headerStyle === opt.value ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => {
                  setHeaderStyle(opt.value);
                  toast.success(`Header style set to: ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Breadcrumbs Tracker Styles" subtitle="Format page tracks with icons or attach actions.">
          <div className="flex flex-wrap gap-2">
            {breadcrumbOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.breadcrumbStyle === opt.value ? 'success' : 'outline'}
                size="sm"
                onClick={() => {
                  setBreadcrumbStyle(opt.value);
                  toast.success(`Breadcrumbs style set to: ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Mobile Menu Styles" subtitle="Alter layouts when viewing from small viewports.">
          <div className="flex flex-wrap gap-2">
            {mobileMenuOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.mobileMenuStyle === opt.value ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  setMobileMenuStyle(opt.value);
                  toast.success(`Mobile menu style set to: ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Density & Service Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Layout Density" subtitle="Adjust typography, margins, and content padding.">
          <div className="flex flex-wrap gap-2">
            {densityOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={settings.density === opt.value ? 'success' : 'outline'}
                size="sm"
                onClick={() => {
                  setDensity(opt.value);
                  toast.success(`Density set to ${opt.label}`);
                }}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </Card>

        <Card title="Interactive Shell Services" subtitle="Verify active services in the app layer.">
          <div className="flex flex-wrap gap-2">
            <Button variant="success" size="sm" onClick={() => toast.success('Data synchronized successfully!')}>
              Trigger Success Toast
            </Button>
            <Button variant="destructive" size="sm" onClick={() => toast.error('Connection timeout to API server.')}>
              Trigger Error Toast
            </Button>
            <Button variant="outline" size="sm" onClick={handleShowModal}>
              Launch Programmatic Modal
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => {
                setShowFooter(!settings.showFooter);
                toast.info(`${settings.showFooter ? 'Hid' : 'Showed'} layout footer.`);
              }}
            >
              Toggle Footer
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat: any, i: number) => (
          <Card key={i} title={stat.title}>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartPlaceholder title="Performance Metrics" />
        <Card title="Recent Activity Logs">
          <SimpleTable />
        </Card>
      </div>
    </div>
  );
}
