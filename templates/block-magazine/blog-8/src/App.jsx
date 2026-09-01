import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MagazineProvider } from './context/MagazineContext';
import MotionConfigWrapper from './context/MotionConfigWrapper';
import RootLayout from './layouts/RootLayout';
import DopamineSkeleton from './components/common/DopamineSkeleton';

// Code-split route components with React.lazy
const Home = lazy(() => import('./pages/Home'));
const Article = lazy(() => import('./pages/Article'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<DopamineSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="index.html" element={<Home />} />
            <Route path="article/:slug" element={<Article />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <HashRouter>
      <MotionConfigWrapper>
        <MagazineProvider>
          <AnimatedRoutes />
        </MagazineProvider>
      </MotionConfigWrapper>
    </HashRouter>
  );
}

export default App;
