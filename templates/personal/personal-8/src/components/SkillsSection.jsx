import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Code2, FileCode, Sparkles, Coffee, Server, Terminal, Network, 
  GitBranch, Container, Zap, Cpu, Eye, X, CheckCircle, Cpu as SkillTagIcon
} from 'lucide-react';

const ICON_MAP = {
  Atom: <Atom size={22} color="#2563EB" />,
  Code2: <Code2 size={22} color="#F97316" />,
  FileCode: <FileCode size={22} color="#3B82F6" />,
  Sparkles: <Sparkles size={22} color="#8B5CF6" />,
  Coffee: <Coffee size={22} color="#EA580C" />,
  Server: <Server size={22} color="#10B981" />,
  Terminal: <Terminal size={22} color="#6366F1" />,
  Network: <Network size={22} color="#0EA5E9" />,
  GitBranch: <GitBranch size={22} color="#F43F5E" />,
  Container: <Container size={22} color="#0284C7" />,
  Zap: <Zap size={22} color="#EAB308" />,
  Cpu: <Cpu size={22} color="#A855F7" />,
  Eye: <Eye size={22} color="#EC4899" />
};

export default function SkillsSection({ skillsData }) {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "FRONTEND", "BACKEND", "TOOLS", "AI / ML"];

  const filteredSkills = skillsData ? skillsData.filter(group => {
    if (activeCategory === "ALL") return true;
    return group.category === activeCategory;
  }) : [];

  return (
    <section id="skills">
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="section-tag">
            <SkillTagIcon size={14} /> TECH STACK
          </span>
          <h2 className="section-title">Technologies & Frameworks</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Click any technology card to view detailed experience and proficiency notes.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--royal-blue)' : 'var(--bg-surface)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-main)',
                  border: '1px solid var(--border-color)',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredSkills.map(group => (
            <div key={group.category}>
              <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--bright-orange)', marginBottom: '14px' }}>
                {group.category} ENGINE PACKAGES
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {group.items.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedTech(tech)}
                    className="website-card"
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {ICON_MAP[tech.icon] || <Atom size={22} color="#2563EB" />}
                        <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>{tech.name}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--royal-blue)' }}>{tech.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                      height: '8px',
                      width: '100%',
                      backgroundColor: 'var(--soft-gray)',
                      borderRadius: '99px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${tech.level}%`,
                        background: 'linear-gradient(90deg, #2563EB 0%, #F97316 100%)',
                        borderRadius: '99px'
                      }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Info Box */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(6px)',
                zIndex: 99999,
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
                className="website-card"
                style={{ width: '100%', maxWidth: '440px', padding: '28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {ICON_MAP[selectedTech.icon]}
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>{selectedTech.name}</h3>
                  </div>
                  <button onClick={() => setSelectedTech(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <X size={22} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--soft-gray)', borderRadius: '8px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Experience Duration:</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{selectedTech.experience}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--soft-gray)', borderRadius: '8px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Proficiency:</span>
                    <span style={{ fontWeight: 700, color: 'var(--royal-blue)' }}>{selectedTech.level}%</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '6px' }}>
                    {selectedTech.desc}
                  </p>
                </div>

                <button className="btn-primary" style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }} onClick={() => setSelectedTech(null)}>
                  <CheckCircle size={16} /> Close Modal
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
