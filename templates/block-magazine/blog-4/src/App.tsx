import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookmarkProvider } from './context/BookmarkContext';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Stories } from './pages/Stories';
import { StoryDetail } from './pages/StoryDetail';
import { Categories } from './pages/Categories';
import { CategoryDetail } from './pages/CategoryDetail';
import { Authors } from './pages/Authors';
import { AuthorDetail } from './pages/AuthorDetail';
import { Bookmarks } from './pages/Bookmarks';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BookmarkProvider>
      <BrowserRouter basename="/templates/block-magazine/blog-4">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="story/:slug" element={<StoryDetail />} />
            <Route path="categories" element={<Categories />} />
            <Route path="category/:category" element={<CategoryDetail />} />
            <Route path="authors" element={<Authors />} />
            <Route path="author/:slug" element={<AuthorDetail />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal" element={<Legal />} />
            <Route path="privacy" element={<Legal />} />
            <Route path="terms" element={<Legal />} />
            <Route path="licensing" element={<Legal />} />
            <Route path="copyright" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookmarkProvider>
  );
}
