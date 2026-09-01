import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StrativaPage from './pages/StrativaPage';

export default function App() {
  return (
    <BrowserRouter basename="/templates/buisness/Business-7">
      <StrativaPage />
    </BrowserRouter>
  );
}
