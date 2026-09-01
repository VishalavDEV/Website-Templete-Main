import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import TopicPage from './pages/TopicPage';
import ArticlePage from './pages/ArticlePage';
import CollectionPage from './pages/CollectionPage';
import ArchivePage from './pages/ArchivePage';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorDetailPage from './pages/AuthorDetailPage';
import AboutPage from './pages/AboutPage';
import SubscribePage from './pages/SubscribePage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="topic/:slug" element={<TopicPage />} />
          <Route path="story/:slug" element={<ArticlePage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="saved" element={<SavedPage />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="author/:slug" element={<AuthorDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
