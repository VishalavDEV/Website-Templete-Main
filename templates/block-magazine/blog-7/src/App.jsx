import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MagazineProvider } from './context/MagazineContext';
import { MainLayout } from './layouts/MainLayout';
import { ArticleLayout } from './layouts/ArticleLayout';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Category } from './pages/Category';
import { Search } from './pages/Search';
import { Author } from './pages/Author';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <MagazineProvider>
      <BrowserRouter basename="/templates/block-magazine/blog-7">
        <Routes>
          {/* Main Layout Wrapped Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/search" element={<Search />} />
            <Route path="/author/:slug" element={<Author />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Article Monographic Layout (Includes Top Reading Progress Bar) */}
          <Route element={<ArticleLayout />}>
            <Route path="/article/:slug" element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MagazineProvider>
  );
}
