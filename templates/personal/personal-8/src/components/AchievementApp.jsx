import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Medal, Sparkles, X, CheckCircle } from 'lucide-react';

const ICON_MAP = {
  Trophy: <Trophy size={32} color="#F97316" />,
  Award: <Award size={32} color="#2563EB" />,
  Star: <Star size={32} color="#EAB308" />,
  Medal: <Medal size={32} color="#10B981" />
};

export default function AchievementApp({ achievementsData }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = achievementsData || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Trophy Header */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '12px',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
            TROPHY & HONOR COLLECTION
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Tap collectible trophies to unlock achievement metadata.
          </p>
        </div>
        <Trophy size={24} color="#F97316" />
      </div>

      {/* Collectible Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px'
      }}>
        {achievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ scale: 1.04, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setSelectedAchievement(item)}
            className="glass-card"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {/* Animated Glow aura */}
            <div style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: item.category === 'Hackathons' ? 'rgba(249,115,22,0.15)' : 'rgba(37,99,235,0.15)',
              filter: 'blur(15px)',
              zIndex: 0
            }} />

            <div style={{ zIndex: 1, marginBottom: '12px' }}>
              {ICON_MAP[item.icon] || <Trophy size={32} color="#F97316" />}
            </div>

            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              color: 'var(--royal-blue)',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              {item.category}
            </span>

            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)', lineHeight: '1.3' }}>
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Enlarge Trophy Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 250 }}
              onClick={e => e.stopPropagation()}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={24} />
              </button>

              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }} className="pulse-glow">
                {ICON_MAP[selectedAchievement.icon] || <Trophy size={48} color="#F97316" />}
              </div>

              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                🏆 {selectedAchievement.category}
              </span>

              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', margin: '8px 0' }}>
                {selectedAchievement.title}
              </h2>

              <p style={{ fontSize: '13px', color: 'var(--royal-blue)', fontWeight: 700, marginBottom: '12px' }}>
                Issued by {selectedAchievement.issuer} ({selectedAchievement.year})
              </p>

              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                {selectedAchievement.description}
              </p>

              <button
                className="accent-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setSelectedAchievement(null)}
              >
                <CheckCircle size={18} /> Inspect Complete
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
