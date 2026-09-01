import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Teams } from './pages/Teams';
import { TeamProfile } from './pages/TeamProfile';
import { Players } from './pages/Players';
import { PlayerProfile } from './pages/PlayerProfile';
import { Matches } from './pages/Matches';
import { MatchDetails } from './pages/MatchDetails';
import { Fixtures } from './pages/Fixtures';
import { LiveScore } from './pages/LiveScore';
import { Standings } from './pages/Standings';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { Venues } from './pages/Venues';
import { VenueDetails } from './pages/VenueDetails';
import { Tickets } from './pages/Tickets';
import { Registration } from './pages/Registration';
import { News } from './pages/News';
import { NewsDetails } from './pages/NewsDetails';
import { GalleryPage } from './pages/GalleryPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { RulesPage } from './pages/RulesPage';
import { TournamentHistoryPage } from './pages/TournamentHistoryPage';
import { AwardsPage } from './pages/AwardsPage';
import { OfficialsPage } from './pages/OfficialsPage';
import { FanZonePage } from './pages/FanZonePage';
import { MerchandisePage } from './pages/MerchandisePage';
import { FAQPage } from './pages/FAQPage';
import { Contact } from './pages/Contact';

// Styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sports.css';
import './styles/matches.css';
import './styles/teams.css';
import './styles/players.css';
import './styles/animations.css';
import './styles/responsive.css';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router basename="/templates/events/events-10">
      <ScrollToTop />
      <div className="page-wrapper">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamProfile />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<PlayerProfile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/matches/:id" element={<MatchDetails />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/live-score" element={<LiveScore />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:id" element={<VenueDetails />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/history" element={<TournamentHistoryPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/officials" element={<OfficialsPage />} />
          <Route path="/fan-zone" element={<FanZonePage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
