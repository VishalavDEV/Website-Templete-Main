/* src/app/providers/SidebarProvider.tsx */
import React, { createContext, useContext, useState } from 'react';

type SidebarContextType = {
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapse: () => void;
  isOpenMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  toggleMobile: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isOpenMobile, setOpenMobile] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);
  const toggleMobile = () => setOpenMobile((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setCollapsed,
        toggleCollapse,
        isOpenMobile,
        setOpenMobile,
        toggleMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
}
