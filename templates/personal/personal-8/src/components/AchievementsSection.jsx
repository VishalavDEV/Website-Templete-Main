import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Medal, ShieldCheck, FileText, CheckCircle2, X } from 'lucide-react';

const ICON_MAP = {
  Trophy: <Trophy size={28} color="#F97316" />,
  Award: <Award size={28} color="#2563EB" />,
  Star: <Star size={28} color="#EAB308" />,
  Medal: <Medal size={28} color="#10B981" />
};

export default function AchievementsSection({ achievementsData, certsData }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = achievementsData || [];
  const certs = certsData || [];

  return (
    <section id="achievements">
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">
            <Trophy size={14} /> HONORS & CREDENTIALS
          </span>
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Recognized hackathon awards, speed coding contests, and validated professional credentials.
          </p>
        </div>

        {/* Trophy Cards Grid */}
        <h3 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--bright-orange)', letterSpacing: '1px', marginBottom: '16px' }}>
          🏆 AWARDS & COMPETITIONS
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="website-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                {ICON_MAP[item.icon] || <Trophy size={28} color="#F97316" />}
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--royal-blue)', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
              </div>

              <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--bright-orange)', fontWeight: 700, marginBottom: '8px' }}>
                {item.issuer} ({item.year})
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Digital Certifications Vault */}
        <h3 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--royal-blue)', letterSpacing: '1px', marginBottom: '16px' }}>
          📜 VERIFIED CERTIFICATIONS
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="website-card"
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563EB'
                }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>{cert.title}</h4>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{cert.organization} • {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(6px)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="website-card"
                style={{ width: '100%', maxWidth: '540px', padding: '32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={16} /> OFFICIAL VERIFIED CREDENTIAL
                    </span>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
                      {selectedCert.title}
                    </h3>
                  </div>
                  <button onClick={() => setSelectedCert(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <X size={24} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <p><strong>Issued by:</strong> {selectedCert.organization}</p>
                  <p><strong>Issued Date:</strong> {selectedCert.date}</p>
                  <p><strong>Credential ID:</strong> <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--royal-blue)', fontWeight: 700 }}>{selectedCert.credentialId}</span></p>
                  <p style={{ lineHeight: '1.6', marginTop: '6px' }}>{selectedCert.description}</p>
                </div>

                <button className="btn-secondary" style={{ width: '100%', marginTop: '24px', justifyContent: 'center' }} onClick={() => setSelectedCert(null)}>
                  <CheckCircle2 size={16} /> Close Document
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
