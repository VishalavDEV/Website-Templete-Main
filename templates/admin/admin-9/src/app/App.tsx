import React, { Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Providers } from './providers';
import { routes } from './routes';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

const router = createHashRouter(routes);

function AppLoading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 border-4 border-primary border-t-transparent animate-spin rounded-full"></div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse">Initializing application shell...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <Suspense fallback={<AppLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Providers>
    </ErrorBoundary>
  );
}
