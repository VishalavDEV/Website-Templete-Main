import { createContext } from 'react';

export interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggle: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
