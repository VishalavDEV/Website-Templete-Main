import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { Cpu, Search, Sparkles, Filter, ExternalLink, Activity } from 'lucide-react';

export default function Models({ onOpenModel }) {
  const { id } = useParams();
  const [models, setModels] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function load() {
      const data = await mockStore.getModels();
      setModels(data);
      if (id) {
        const target = data.find(m => m.id === id);
        if (target && onOpenModel) onOpenModel(target);
      }
    }
    load();
  }, [id, onOpenModel]);

  const modalities = ['All', 'Multimodal', 'Omni', 'Text / Vision', 'Text', 'Open Weights'];
  
  const filtered = models.filter(m => {
    const matchesModality = filter === 'All' ? true :
                            filter === 'Open Weights' ? m.status === 'Open Weights' :
                            m.modality.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModality && matchesSearch;
  });

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Cpu size={22} style={{ color: 'var(--accent-violet)' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Foundation Models Directory
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px' }}>
          Technical benchmarks, context window scaling, and developer specifications across frontier artificial intelligence models.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        marginBottom: '2.5rem',
        padding: '1rem',
        background: 'var(--surface-color)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {modalities.map(mod => (
            <button
              key={mod}
              onClick={() => setFilter(mod)}
              className={`btn-outline ${filter === mod ? 'active' : ''}`}
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.85rem' }}
            >
              {mod}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search model, developer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.5rem 1rem 0.5rem 2.25rem',
              fontSize: '0.85rem',
              borderRadius: '6px',
              width: '100%'
            }}
          />
        </div>
      </div>

      {/* Grid of Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((model, i) => (
          <div 
            key={model.id} 
            onClick={() => onOpenModel && onOpenModel(model)}
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
                <span className="badge badge-violet" style={{ fontSize: '0.65rem' }}>
                  {model.modality}
                </span>
                <span className="badge" style={{ 
                  background: model.status === 'Production' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                  color: model.status === 'Production' ? 'var(--accent-cyan)' : 'var(--accent-violet)',
                  borderColor: 'currentColor'
                }}>
                  {model.status}
                </span>
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                {model.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                By <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{model.developer}</span> &middot; {model.parameters}
              </p>

              {/* Benchmarks Mini Bar */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderRadius: '8px',
                backgroundColor: 'rgba(0, 229, 255, 0.03)', border: '1px solid rgba(0, 229, 255, 0.1)',
                marginBottom: '1.25rem', fontSize: '0.75rem'
              }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>MMLU: </span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{model.mmluScore}</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Code: </span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{model.humanEvalScore}</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Math: </span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{model.mathScore}</span>
                </div>
              </div>
            </div>

            <div style={{ 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '0.85rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Ctx: {model.contextWindow}
              </span>
              <button 
                className="btn-outline" 
                style={{ padding: '0.3rem 0.7rem', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenModel) onOpenModel(model);
                }}
              >
                Inspect Specs <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
