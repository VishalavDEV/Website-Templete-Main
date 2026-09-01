import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ThumbsUp, Flame, Radio, Award } from 'lucide-react';

export const FanZone = () => {
  // Fan Poll State
  const [votes, setVotes] = useState({
    'Marcus Vance': 420,
    'Jordan Sterling': 310,
    'Kyrie Thorne': 285,
    'Devraj Singh': 190,
  });
  const [userVoted, setUserVoted] = useState(null);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (name) => {
    if (userVoted) return;
    setVotes((prev) => ({ ...prev, [name]: prev[name] + 1 }));
    setUserVoted(name);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d00', '#ff7518', '#ffffff'],
      });
    } catch (e) {
      // fallback silent
    }
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div className="sports-card" style={{ padding: '36px 30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Radio size={28} color="#ff4d00" />
          <h3 className="font-display" style={{ fontSize: '2.4rem' }}>
            FAN POLL: VOTE FOR YOUR TOURNAMENT MVP
          </h3>
        </div>

        <p style={{ color: 'var(--gray)', marginBottom: '25px' }}>
          Who will take home the ₹2.5L Golden Basketball MVP Trophy? Cast your live vote below:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Object.keys(votes).map((player) => {
            const count = votes[player];
            const pct = Math.round((count / totalVotes) * 100);
            const isSelected = userVoted === player;

            return (
              <div
                key={player}
                onClick={() => handleVote(player)}
                style={{
                  background: isSelected ? 'rgba(255,77,0,0.2)' : 'rgba(5,5,5,0.7)',
                  border: isSelected ? '2px solid var(--orange)' : '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '16px 20px',
                  cursor: userVoted ? 'default' : 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontFamily: 'var(--font-sports)', fontSize: '1.2rem', fontWeight: 800 }}>
                  <span>{player} {isSelected && '✓ YOUR VOTE'}</span>
                  <span style={{ color: '#ff4d00' }}>{pct}% ({count} Votes)</span>
                </div>

                <div style={{ height: '8px', background: '#222', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${pct}%`,
                      background: 'linear-gradient(90deg, #ff4d00, #ff7518)',
                      transition: 'width 0.6s ease',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {userVoted && (
          <div style={{ marginTop: '20px', textAlign: 'center', color: '#00c853', fontWeight: 700, fontFamily: 'var(--font-sports)', fontSize: '1.1rem' }}>
            🎉 THANK YOU FOR VOTING! SHARE WITH YOUR FRIENDS TO SUPPORT {userVoted.toUpperCase()}!
          </div>
        )}
      </div>
    </div>
  );
};
