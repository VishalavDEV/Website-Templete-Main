import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './store/appStore';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Article from './pages/Article/Article';
import Magazine from './pages/Magazine/Magazine';
import MagazineIssue from './pages/Magazine/MagazineIssue';
import PhotoEssay from './pages/PhotoEssay/PhotoEssay';
import FieldNote from './pages/FieldNote/FieldNote';
import Search from './pages/Search/Search';
import Saved from './pages/Saved/Saved';
import Explore from './pages/Explore/Explore';
import About from './pages/About/About';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/templates/block-magazine/blog-9">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* Exploration & Category Routes */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/wildlife" element={<Category slugOverride="wildlife" />} />
            <Route path="/planet" element={<Category slugOverride="planet" />} />
            <Route path="/science" element={<Category slugOverride="science" />} />
            <Route path="/space" element={<Category slugOverride="space" />} />
            <Route path="/history" element={<Category slugOverride="history" />} />
            <Route path="/culture" element={<Category slugOverride="culture" />} />
            <Route path="/exploration" element={<Category slugOverride="exploration" />} />
            <Route path="/photography" element={<Category slugOverride="photography" />} />
            <Route path="/category/:slug" element={<Category />} />

            {/* Editorial Reading Pages */}
            <Route path="/story/:slug" element={<Article />} />
            <Route path="/photo/:slug" element={<PhotoEssay />} />
            <Route path="/field-note/:slug" element={<FieldNote />} />

            {/* Magazine Collection */}
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/magazine/:slug" element={<MagazineIssue />} />

            {/* Utility & Navigation Pages */}
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
