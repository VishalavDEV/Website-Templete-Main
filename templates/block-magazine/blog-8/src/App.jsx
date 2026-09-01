import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
            <Route path="article/:slug" element={<Article />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter basename="/templates/block-magazine/blog-8">
      <MotionConfigWrapper>
        <MagazineProvider>
          <AnimatedRoutes />
        </MagazineProvider>
      </MotionConfigWrapper>
    </BrowserRouter>
  );
}

export default App;
