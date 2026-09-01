import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Code2, FileCode, Sparkles, Coffee, Server, Terminal, Network, 
  GitBranch, Container, Zap, Cpu, Eye, X, CheckCircle
} from 'lucide-react';

const ICON_MAP = {
  Atom: <Atom size={18} color="#2563EB" />,
  Code2: <Code2 size={18} color="#F97316" />,
  FileCode: <FileCode size={18} color="#3B82F6" />,
  Sparkles: <Sparkles size={18} color="#8B5CF6" />,
  Coffee: <Coffee size={18} color="#EA580C" />,
  Server: <Server size={18} color="#10B981" />,
  Terminal: <Terminal size={18} color="#6366F1" />,
  Network: <Network size={18} color="#0EA5E9" />,
  GitBranch: <GitBranch size={18} color="#F43F5E" />,
  Container: <Container size={18} color="#0284C7" />,
  Zap: <Zap size={18} color="#EAB308" />,
  Cpu: <Cpu size={18} color="#A855F7" />,
  Eye: <Eye size={18} color="#EC4899" />
};

export default function SkillsApp({ skillsData }) {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "FRONTEND", "BACKEND", "TOOLS", "AI / ML"];

  const filteredSkills = skillsData ? skillsData.filter(group => {
    if (activeCategory === "ALL") return true;
    return group.category === activeCategory;
  }) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Installed Software Bar Header */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '12px',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
            INSTALLED TECHNOLOGIES & ENGINE PACKAGES
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Click any package to inspect system configuration details.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? 'var(--royal-blue)' : 'var(--bg-surface)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid var(--border-color)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredSkills.map(group => (
          <div key={group.category}>
            <h3 style={{ 
              fontSize: '12px', 
              fontWeight: 800, 
              letterSpacing: '1px', 
              color: 'var(--accent-secondary)', 
              marginBottom: '10px' 
            }}>
              {group.category} MODULES
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
              {group.items.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTech(tech)}
                  className="glass-card"
                  style={{ cursor: 'pointer', padding: '14px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {ICON_MAP[tech.icon] || <Atom size={18} color="#2563EB" />}
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>{tech.name}</span>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>{tech.level}%</span>
                  </div>

                  {/* Meter Bar */}
                  <div style={{ 
                    height: '8px', 
                    width: '100%', 
                    backgroundColor: 'var(--soft-gray)', 
                    borderRadius: '99px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #2563EB 0%, #F97316 100%)',
                        borderRadius: '99px'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mini Info Modal on Click */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {ICON_MAP[selectedTech.icon]}
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>{selectedTech.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--soft-gray)', borderRadius: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Experience:</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{selectedTech.experience}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--soft-gray)', borderRadius: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Proficiency Level:</span>
                  <span style={{ fontWeight: 700, color: 'var(--royal-blue)' }}>{selectedTech.level}%</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', marginTop: '6px' }}>
                  {selectedTech.desc}
                </p>
              </div>

              <button
                className="accent-btn"
                style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}
                onClick={() => setSelectedTech(null)}
              >
                <CheckCircle size={16} /> Close Config
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
