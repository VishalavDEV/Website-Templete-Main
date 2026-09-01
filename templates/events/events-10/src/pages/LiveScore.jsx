import React, { useState, useEffect } from 'react';
import { tournamentData } from '../data/tournamentData';
import { LiveMatch } from '../components/LiveMatch';
import { Radio, Activity, Users, MessageSquare } from 'lucide-react';

export const LiveScore = () => {
  const [commentaryList, setCommentaryList] = useState(tournamentData.liveMatch.commentary);

  // Add dynamic live play-by-play items periodically to simulate real broadcast feed
  useEffect(() => {
    const liveEvents = [
      "02:02 — Blocked by Devraj Singh! Huge rim rejection sent out of bounds!",
      "01:45 — Steal by Jordan Sterling on bad pass. Titans heading in transition.",
      "01:28 — 2PT Made! Jump shot drops right through the net.",
      "01:10 — Technical foul assessed to bench.",
      "00:45 — CLUTCH FREE THROWS! Both shots made under pressure.",
    ];

    let eventIdx = 0;
    const interval = setInterval(() => {
      if (eventIdx < liveEvents.length) {
        const newEvent = {
          time: liveEvents[eventIdx].substring(0, 5),
          text: liveEvents[eventIdx],
          type: eventIdx % 2 === 0 ? 'highlight' : 'event',
        };
        setCommentaryList((prev) => [newEvent, ...prev]);
        eventIdx++;
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <div className="badge-live" style={{ fontSize: '1rem', padding: '6px 16px', marginBottom: '12px' }}>
              <span className="badge-live-pulse" /> 🔴 OFFICIAL LIVE BROADCAST DASHBOARD
            </div>
            <h1 className="section-title">
              LIVE <span>CENTER</span>
            </h1>
            <div className="section-subtitle">VORTEX ARENA MAIN COURT — MATCH BROADCAST</div>
          </div>

          {/* 1. Live Match Banner */}
          <LiveMatch />

          {/* 2. Live Player Performance */}
          <div className="section-header" style={{ marginTop: '50px' }}>
            <h2 className="section-title">
              LIVE PLAYER <span>PERFORMANCE</span>
            </h2>
          </div>

          <div className="table-responsive" style={{ marginBottom: '50px' }}>
            <table className="standings-table">
              <thead>
                <tr>
                  <th>PLAYER</th>
                  <th>TEAM</th>
                  <th>PTS</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>MIN</th>
                  <th>EFF</th>
                </tr>
              </thead>
              <tbody>
                {tournamentData.liveMatch.topPerformers.map((p) => (
                  <tr key={p.name}>
                    <td style={{ fontWeight: 800 }}>{p.name}</td>
                    <td style={{ color: '#ff4d00' }}>{p.team}</td>
                    <td style={{ fontWeight: 800, color: '#ff4d00' }}>{p.points}</td>
                    <td>{p.rebounds}</td>
                    <td>{p.assists}</td>
                    <td>{p.minutes}</td>
                    <td style={{ color: '#00c853', fontWeight: 800 }}>{p.eff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. Live Commentary Panel */}
          <div className="section-header">
            <h2 className="section-title">
              LIVE PLAY-BY-PLAY <span>COMMENTARY</span>
            </h2>
          </div>

          <div className="sports-card" style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="commentary-feed">
              {commentaryList.map((item, idx) => (
                <div key={idx} className={`commentary-item ${item.type === 'highlight' ? 'highlight' : ''}`}>
                  <div className="commentary-time">{item.time}</div>
                  <div className="commentary-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
