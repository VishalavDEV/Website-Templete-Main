import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Global Stylesheet imports
import './styles/global.css'
import './styles/animations.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/templates/events/events-8">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
