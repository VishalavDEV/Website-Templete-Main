import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, ArrowRight, Code, FileText, Trophy, GraduationCap, MapPin } from 'lucide-react';

export default function Search({ isOpen, onClose, onSelectResult, allData }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  // Search across projects, skills, experience, education, certs
  const results = {
    projects: (allData.projects || []).filter(p => p.title.toLowerCase().includes(searchQuery) || p.technologies.some(t => t.toLowerCase().includes(searchQuery))),
    skills: (allData.skills || []).flatMap(cat => cat.items).filter(s => s.name.toLowerCase().includes(searchQuery) || s.desc.toLowerCase().includes(searchQuery)),
    experience: (allData.experience || []).filter(e => e.title.toLowerCase().includes(searchQuery) || e.desc.toLowerCase().includes(searchQuery)),
    achievements: (allData.achievements || []).filter(a => a.title.toLowerCase().includes(searchQuery) || a.description.toLowerCase().includes(searchQuery))
  };

  const totalResultsCount = searchQuery ? (results.projects.length + results.skills.length + results.experience.length + results.achievements.length) : 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '10vh'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: -20 }}
          onClick={e => e.stopPropagation()}
          className="glass-card"
          style={{
            width: '100%',
            maxWidth: '620px',
            padding: '20px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
          }}
        >
          {/* Search Input Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '14px',
            marginBottom: '16px'
          }}>
            <SearchIcon size={22} color="#2563EB" />
            <input
              type="text"
              autoFocus
              placeholder="Search projects, skills, experience, or certifications... (e.g. React)"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                background: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)'
              }}
            />
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>
          </div>

          {/* Results Summary */}
          {searchQuery && (
            <div style={{ marginBottom: '14px', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Found {totalResultsCount} matching items for "{query}":
            </div>
          )}

          {/* Search Results Content */}
          <div style={{ maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {searchQuery && totalResultsCount === 0 && (
              <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                No matching results found in VISHAL OS index. Try searching for "React", "Java", "Spring", or "Projects".
              </div>
            )}

            {results.projects.length > 0 && (
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#F97316', textTransform: 'uppercase', marginBottom: '8px' }}>
                  PROJECTS ({results.projects.length})
                </h4>
                {results.projects.map(p => (
                  <div
                    key={p.id}
                    onClick={() => { onSelectResult('projects', p); onClose(); }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--soft-gray)',
                      marginBottom: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>{p.title}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{p.category}</div>
                    </div>
                    <ArrowRight size={14} color="#2563EB" />
                  </div>
                ))}
              </div>
            )}

            {results.skills.length > 0 && (
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', marginBottom: '8px' }}>
                  SKILLS ({results.skills.length})
                </h4>
                {results.skills.map(s => (
                  <div
                    key={s.name}
                    onClick={() => { onSelectResult('skills', s); onClose(); }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--soft-gray)',
                      marginBottom: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>{s.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Level: {s.level}% • {s.experience}</div>
                    </div>
                    <ArrowRight size={14} color="#F97316" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
