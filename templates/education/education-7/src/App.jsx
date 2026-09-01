/**
 * App.jsx — Root component. Sets up React Router with layout wrapper.
 * All pages share the TopBar, Navbar, and Footer.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar/TopBar';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Events from './pages/Events/Events';
import Dashboard from './pages/Dashboard/Dashboard';
import Pages from './pages/Pages/Pages';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import {
  siteInfo, languageOptions, navLinks,
  footerLinks, socialLinks,
} from './data/content';
import './styles/global.css';

const Layout = ({ children }) => (
  <>
    <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: '-40px' }}>
      Skip to main content
    </a>
    <TopBar siteInfo={siteInfo} languageOptions={languageOptions} />
    <Navbar siteInfo={siteInfo} navLinks={navLinks} />
    {children}
    <Footer siteInfo={siteInfo} footerLinks={footerLinks} socialLinks={socialLinks} />
  </>
);

const App = () => (
  <BrowserRouter basename="/templates/education/education-7">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#1a2e5a', fontSize: '2.5rem' }}>404 — Page Not Found</h1>
            <p style={{ color: '#6b7a99', marginTop: '1rem' }}>The page you're looking for doesn't exist.</p>
            <a href="/" style={{ display: 'inline-block', marginTop: '2rem', color: '#1a2e5a', fontWeight: 600 }}>← Back to Home</a>
          </main>
        } />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
