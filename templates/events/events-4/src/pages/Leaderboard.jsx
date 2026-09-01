import React from 'react';
import SectionTitle from '../components/SectionTitle';
import LeaderboardTable from '../components/LeaderboardTable';

const Leaderboard = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="OFFICIAL STANDINGS" title="IRON ASCENT LEADERBOARD" />
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default Leaderboard;
