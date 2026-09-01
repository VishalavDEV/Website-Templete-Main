import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, CheckCircle2, ShieldCheck, X, Eye } from 'lucide-react';

export default function CertificateViewer({ certsData }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = certsData || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Folder Header */}
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
            DIGITAL CERTIFICATION VAULT
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Verified professional credentials and official accreditations.
          </p>
        </div>
        <ShieldCheck size={24} color="#10B981" />
      </div>

      {/* Cert Documents List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
        {certs.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCert(cert)}
            className="glass-card"
            style={{
              padding: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={22} color="#2563EB" />
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>{cert.title}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{cert.organization} • {cert.date}</span>
              </div>
            </div>

            <Eye size={18} color="#F97316" />
          </motion.div>
        ))}
      </div>

      {/* Document Opening Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
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
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                border: '8px solid #F1F5F9',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
              >
                <X size={24} />
              </button>

              <div style={{ textAlign: 'center', borderBottom: '2px solid #E2E8F0', paddingBottom: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 800, fontSize: '13px', marginBottom: '8px' }}>
                  <ShieldCheck size={20} /> OFFICIAL VERIFIED CREDENTIAL
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A' }}>
                  {selectedCert.title}
                </h2>
                <p style={{ fontSize: '14px', color: '#2563EB', fontWeight: 700, marginTop: '4px' }}>
                  Issued by {selectedCert.organization}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#334155' }}>
                <p><strong>Issued Date:</strong> {selectedCert.date}</p>
                <p><strong>Credential ID:</strong> <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{selectedCert.credentialId}</span></p>
                <p style={{ lineHeight: '1.6', marginTop: '6px' }}>{selectedCert.description}</p>
              </div>

              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>VISHAL OS Digital Vault Integrity Validated</span>
                <button className="blue-btn" onClick={() => setSelectedCert(null)}>
                  <CheckCircle2 size={16} /> Close Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
