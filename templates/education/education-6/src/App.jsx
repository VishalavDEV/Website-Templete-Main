import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/Contact';

// Scroll to top helper on route change
import ScrollToTop from './components/ScrollToTop';

import './styles/index.css';

/**
 * Main App Component setting up standard routing.
 */
function App() {
  return (
    <Router basename="/templates/education/education-6">
      <ScrollToTop />
      <div className="app-wrapper flex-between-column" style={{ minHeight: '100vh' }}>
        <Header />
        
        <main className="main-content-wrapper" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
