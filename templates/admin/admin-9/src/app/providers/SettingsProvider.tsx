/* src/app/providers/SettingsProvider.tsx */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type AdminLayoutType = 
  | 'fixed-sidebar' 
  | 'collapsible-sidebar' 
  | 'mini-sidebar' 
  | 'full-sidebar' 
  | 'top-navigation' 
  | 'sidebar-top-nav' 
  | 'right-sidebar' 
  | 'full-width';

export type AuthLayoutType = 
  | 'centered' 
  | 'split-screen' 
  | 'image-form' 
  | 'branding-form' 
  | 'minimal' 
  | 'card' 
  | 'full-screen';

export type LayoutDensity = 'compact' | 'comfortable' | 'spacious';

// Navigation Styles Variations
export type SidebarStyle = 'classic' | 'workspace-switcher' | 'badges-actions';
export type HeaderStyle = 'standard' | 'global-search' | 'breadcrumb-embedded' | 'quick-actions' | 'workspace-switcher';
export type BreadcrumbStyle = 'simple' | 'icon' | 'actions';
export type MobileMenuStyle = 'slide-in' | 'bottom-nav' | 'fullscreen';

type SettingsState = {
  density: LayoutDensity;
  adminLayoutType: AdminLayoutType;
  authLayoutType: AuthLayoutType;
  sidebarStyle: SidebarStyle;
  headerStyle: HeaderStyle;
  breadcrumbStyle: BreadcrumbStyle;
  mobileMenuStyle: MobileMenuStyle;
  showFooter: boolean;
  activeWorkspace: string;
};

type SettingsContextType = {
  settings: SettingsState;
  setDensity: (density: LayoutDensity) => void;
  setAdminLayoutType: (type: AdminLayoutType) => void;
  setAuthLayoutType: (type: AuthLayoutType) => void;
  setSidebarStyle: (style: SidebarStyle) => void;
  setHeaderStyle: (style: HeaderStyle) => void;
  setBreadcrumbStyle: (style: BreadcrumbStyle) => void;
  setMobileMenuStyle: (style: MobileMenuStyle) => void;
  setShowFooter: (show: boolean) => void;
  setActiveWorkspace: (ws: string) => void;
  resetSettings: () => void;
};

const defaultSettings: SettingsState = {
  density: 'comfortable',
  adminLayoutType: 'collapsible-sidebar',
  authLayoutType: 'image-form',
  sidebarStyle: 'badges-actions',
  headerStyle: 'standard',
  breadcrumbStyle: 'icon',
  mobileMenuStyle: 'slide-in',
  showFooter: true,
  activeWorkspace: 'Production HQ',
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SettingsState>(() => {
    const saved = localStorage.getItem('app-settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
    
    // Apply layout density class to root
    const root = window.document.documentElement;
    root.classList.remove('density-comfortable', 'density-compact', 'density-spacious');
    root.classList.add(`density-${settings.density}`);
  }, [settings]);

  const setDensity = (density: LayoutDensity) => {
    setSettings((prev) => ({ ...prev, density }));
  };

  const setAdminLayoutType = (adminLayoutType: AdminLayoutType) => {
    setSettings((prev) => ({ ...prev, adminLayoutType }));
  };

  const setAuthLayoutType = (authLayoutType: AuthLayoutType) => {
    setSettings((prev) => ({ ...prev, authLayoutType }));
  };

  const setSidebarStyle = (sidebarStyle: SidebarStyle) => {
    setSettings((prev) => ({ ...prev, sidebarStyle }));
  };

  const setHeaderStyle = (headerStyle: HeaderStyle) => {
    setSettings((prev) => ({ ...prev, headerStyle }));
  };

  const setBreadcrumbStyle = (breadcrumbStyle: BreadcrumbStyle) => {
    setSettings((prev) => ({ ...prev, breadcrumbStyle }));
  };

  const setMobileMenuStyle = (mobileMenuStyle: MobileMenuStyle) => {
    setSettings((prev) => ({ ...prev, mobileMenuStyle }));
  };

  const setShowFooter = (showFooter: boolean) => {
    setSettings((prev) => ({ ...prev, showFooter }));
  };

  const setActiveWorkspace = (activeWorkspace: string) => {
    setSettings((prev) => ({ ...prev, activeWorkspace }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setDensity,
        setAdminLayoutType,
        setAuthLayoutType,
        setSidebarStyle,
        setHeaderStyle,
        setBreadcrumbStyle,
        setMobileMenuStyle,
        setShowFooter,
        setActiveWorkspace,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within SettingsProvider');
  return context;
}
