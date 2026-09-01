import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AurelisPage from './pages/AurelisPage';

export default function App() {
  return (
    <BrowserRouter basename="/templates/buisness/Business-4">
      <AurelisPage />
    </BrowserRouter>
  );
}
