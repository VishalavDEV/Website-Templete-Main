const getDynamicBasename = () => {
  let p = window.location.pathname;
  if (p.endsWith('/index.html')) p = p.slice(0, -11);
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p;
};

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { SearchProvider } from './context/SearchContext';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter basename={getDynamicBasename()}>
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
