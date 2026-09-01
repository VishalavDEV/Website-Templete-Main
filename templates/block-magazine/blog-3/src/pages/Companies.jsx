import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { Building2, MapPin, Search, ArrowUpRight } from 'lucide-react';

export default function Companies({ onOpenCompany }) {
  const { id } = useParams();
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function load() {
      const data = await mockStore.getCompanies();
      setCompanies(data);
      if (id) {
        const target = data.find(c => c.id === id);
        if (target && onOpenCompany) onOpenCompany(target);
      }
    }
    load();
  }, [id, onOpenCompany]);

  const filtered = companies.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Building2 size={22} style={{ color: 'var(--accent-cyan)' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Companies & Frontier Labs
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px' }}>
          Key institutions, research laboratories, and commercial enterprises engineering artificial general intelligence and physical automation.
        </p>
      </div>

      {/* Search Filter */}
      <div style={{ marginBottom: '2.5rem', maxWidth: '400px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search company, focus, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.65rem 1rem 0.65rem 2.25rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
              width: '100%'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((company, i) => (
          <div 
            key={company.id} 
            onClick={() => onOpenCompany && onOpenCompany(company)}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              animation: `fadeInUp ${0.2 + i * 0.05}s var(--ease-out-expo) forwards`,
              opacity: 0
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(139,92,246,0.1))',
                  border: '1px solid rgba(0,229,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent-cyan)'
                }}>
                  {company.name.charAt(0)}
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span className="badge" style={{ fontSize: '0.65rem' }}>{company.valuation}</span>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                {company.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {company.focus}
              </p>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center', 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '0.85rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} style={{ color: 'var(--accent-cyan)' }} />
                <span>{company.location}</span>
              </div>
              <button 
                className="btn-outline" 
                style={{ padding: '0.25rem 0.6rem', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenCompany) onOpenCompany(company);
                }}
              >
                Profile <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
