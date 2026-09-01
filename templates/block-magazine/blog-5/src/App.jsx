import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ZMagProvider } from './context/ZMagContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { CategoryView } from './pages/CategoryView';
import { ArticleDetail } from './pages/ArticleDetail';
import { AboutView } from './pages/AboutView';
import { ContributorsView } from './pages/ContributorsView';
import { ContactView } from './pages/ContactView';
import { NotFound } from './pages/NotFound';
import { ScrollRestoration } from './components/utility/ScrollRestoration';

export default function App() {
  return (
    <ZMagProvider>
      <BrowserRouter basename="/templates/block-magazine/blog-5">
        <ScrollRestoration />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryView />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contributors" element={<ContributorsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ZMagProvider>
  );
}
