import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { SearchProvider } from './context/SearchContext';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter basename="/templates/admin/admin-6">
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <SearchProvider>
              <AppRoutes />
            </SearchProvider>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
