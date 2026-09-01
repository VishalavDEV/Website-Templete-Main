import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NexoraPage from './pages/NexoraPage';

export default function App() {
  return (
    <BrowserRouter basename="/templates/buisness/Business-6">
      <NexoraPage />
    </BrowserRouter>
  );
}
