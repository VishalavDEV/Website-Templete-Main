/* src/app/providers/index.tsx */
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
import { SidebarProvider } from './SidebarProvider';
import { ModalProvider } from './ModalProvider';
import { ToastProvider } from './ToastProvider';
import { NotificationProvider } from './NotificationProvider';
import { LocalizationProvider } from './LocalizationProvider';
import { SettingsProvider } from './SettingsProvider';
import { QueryDataProvider } from './QueryDataProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <SettingsProvider>
          <AuthProvider>
            <QueryDataProvider>
              <NotificationProvider>
                <SidebarProvider>
                  <ToastProvider>
                    <ModalProvider>
                      {children}
                    </ModalProvider>
                  </ToastProvider>
                </SidebarProvider>
              </NotificationProvider>
            </QueryDataProvider>
          </AuthProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
