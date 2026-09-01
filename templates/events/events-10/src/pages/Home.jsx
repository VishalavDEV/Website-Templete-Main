import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TournamentStats } from '../components/TournamentStats';
import { LiveMatch } from '../components/LiveMatch';
import { MatchCard } from '../components/MatchCard';
import { TeamCard } from '../components/TeamCard';
import { PlayerCard } from '../components/PlayerCard';
import { StandingsTable } from '../components/StandingsTable';
import { TournamentBracket } from '../components/TournamentBracket';
import { VenueCard } from '../components/VenueCard';
import { Gallery } from '../components/Gallery';
import { SponsorGrid } from '../components/SponsorGrid';
import { NewsCard } from '../components/NewsCard';
import { tournamentData } from '../data/tournamentData';
import { ArrowRight, Trophy } from 'lucide-react';

export const Home = () => {
  const upcomingMatches = tournamentData.matches.slice(0, 3);
  const featuredTeams = tournamentData.teams.slice(0, 4);
  const latestNews = tournamentData.news.slice(0, 3);
  const starPlayers = tournamentData.players.slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <div id="hero">
        <Hero />
      </div>

      {/* 2. TOURNAMENT OVERVIEW & STATS */}
      <section id="tournament" className="section-padding" style={{ background: '#090909', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 30, marginBottom: '50px' }}>
          <TournamentStats />
        </div>

        <div className="container">
          <div className="sports-card" style={{ padding: '36px', background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.08), var(--dark))', border: '1px solid var(--border-orange)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Trophy size={28} color="#ff4d00" />
              <h2 className="font-display" style={{ fontSize: '2.4rem' }}>
                ABOUT THUNDERCOURT CLASH 2026
              </h2>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--white)', lineHeight: 1.7, marginBottom: '20px' }}>
              {tournamentData.info.subtitle} Competing at the state-of-the-art Vortex Arena in Chennai, 16 international basketball powerhouses battle across 7 intense days for the ultimate <strong>₹10,00,000+ Championship Purse</strong>.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
                READ FULL TOURNAMENT OVERVIEW <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIVE MATCH SCOREBOARD */}
      <section id="live-score" className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              LIVE <span>MATCH ACTION</span>
            </h2>
            <div className="section-subtitle">REAL-TIME TOURNAMENT SCOREBOARD & TIMELINE</div>
          </div>
          <LiveMatch />
        </div>
      </section>

      {/* 4. UPCOMING MATCHES */}
      <section id="matches" className="section-padding" style={{ background: '#090909' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              UPCOMING <span>MATCHES</span>
            </h2>
            <div className="section-subtitle">NEXT HEAD-TO-HEAD BATTLES AT VORTEX ARENA</div>
          </div>

          <div className="matches-grid" style={{ marginBottom: '35px' }}>
            {upcomingMatches.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/matches" className="btn-secondary">
              VIEW FULL MATCH SCHEDULE <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PARTICIPATING TEAMS */}
      <section id="teams" className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              PARTICIPATING <span>TEAMS</span>
            </h2>
            <div className="section-subtitle">16 FRANCHISES FIGHTING FOR ONE CHAMPIONSHIP</div>
          </div>

          <div className="teams-grid" style={{ marginBottom: '35px' }}>
            {featuredTeams.map((t) => (
              <TeamCard key={t.id} team={t} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/teams" className="btn-primary">
              VIEW ALL 16 TEAMS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TOURNAMENT STARS & MVP CANDIDATES */}
      <section id="players" className="section-padding" style={{ background: '#080808' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              TOURNAMENT STARS & <span>MVP CANDIDATES</span>
            </h2>
            <div className="section-subtitle">FEATURED ATHLETES & MVP LEADERBOARD SPOTLIGHTS</div>
          </div>

          <div className="players-grid">
            {starPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. STANDINGS */}
      <section id="standings" className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              GROUP <span>STANDINGS</span>
            </h2>
            <div className="section-subtitle">POINTS TABLE & FORM TRACKER</div>
          </div>
          <StandingsTable />
        </div>
      </section>

      {/* 8. KNOCKOUT BRACKET */}
      <section id="bracket" className="section-padding" style={{ background: '#090909' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              TOURNAMENT <span>BRACKET</span>
            </h2>
            <div className="section-subtitle">ROAD TO THE GRAND FINAL CHAMPIONSHIP</div>
          </div>
          <TournamentBracket />
        </div>
      </section>

      {/* 9. ARENAS */}
      <section id="venues" className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              OFFICIAL <span>ARENAS</span>
            </h2>
            <div className="section-subtitle">STATE-OF-THE-ART BASKETBALL FACILITIES</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {tournamentData.venues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. GALLERY */}
      <section id="gallery" className="section-padding" style={{ background: '#090909' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              TOURNAMENT <span>GALLERY</span>
            </h2>
            <div className="section-subtitle">HIGH-ENERGY ATHLETIC MOMENTS</div>
          </div>
          <Gallery />
        </div>
      </section>

      {/* 11. SPONSORS */}
      <section id="sponsors" className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              OFFICIAL <span>SPONSORS</span>
            </h2>
            <div className="section-subtitle">POWERED BY GLOBAL ATHLETIC BRANDS</div>
          </div>
          <SponsorGrid />
        </div>
      </section>

      {/* 12. NEWS */}
      <section id="news" className="section-padding" style={{ background: '#090909' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              LATEST <span>NEWS & UPDATES</span>
            </h2>
            <div className="section-subtitle">HEADLINES FROM THE COURTSIDE</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {latestNews.map((news) => (
              <NewsCard key={news.id} item={news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
