import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={window.location.pathname.endsWith('/index.html') ? window.location.pathname.slice(0, -11) : (window.location.pathname.endsWith('/') ? window.location.pathname.slice(0, -1) : window.location.pathname)}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
