import { useState, useEffect } from 'react';
import { fetchTeam } from '../services/api';
import TeamCard from '../components/TeamCard';
import PageTransition from '../animations/PageTransition';
import { Users2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await fetchTeam();
        setTeamList(data);
      } catch (err) {
        console.error("Failed to load team members data", err);
      } finally {
        setLoading(false);
      }
    };
    loadTeam();
  }, []);

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge"><Users2 size={14} /> Advisory & Code</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Meet Our Expert <span className="text-gradient">Team Members</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Our advisory, design, and software engineering leads have helped dozens of startups achieve product-market fit.
            </p>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
              <div className="spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid var(--secondary)',
                borderTopColor: 'var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          ) : (
            <div className="grid-4" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}>
              {teamList.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}

          {/* Team Join Banner */}
          <div style={{
            marginTop: '6rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '3rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }} className="join-team-card">
            <div style={{ maxWidth: '560px' }}>
              <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-title)', marginBottom: '0.5rem' }}>
                Want to build with <span className="text-gradient">OranGrow</span>?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                We are always looking for senior frontend engineers, Java compilers enthusiasts, and growth metrics auditors to join our global remote team.
              </p>
            </div>
            <button 
              className="btn btn-outline"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Check Careers <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
      
      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          .grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .grid-4 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .join-team-card {
            padding: 2rem 1.5rem !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .join-team-card button {
            width: 100% !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}
