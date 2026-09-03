import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mountApp() {
  let rootElem = document.getElementById('root');
  if (!rootElem) {
    rootElem = document.createElement('div');
    rootElem.id = 'root';
    document.body.appendChild(rootElem);
  }
  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}