import { createContext } from 'react';

export interface LayoutSettings {
  adminLayout: string;
  authLayout: string;
  density: 'dense' | 'spacious';
  sidebarStyle: string;
}

export interface SettingsContextType {
  settings: LayoutSettings;
  updateSettings: (settings: Partial<LayoutSettings>) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
