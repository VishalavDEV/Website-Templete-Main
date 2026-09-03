import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Calendar, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EducationApp({ educationData }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = educationData || [];
  const activePage = pages[currentPageIndex] || pages[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Notebook Header Controls */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '12px',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={20} color="#2563EB" />
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
            DIGITAL ACADEMIC NOTEBOOK
          </h2>
        </div>

        {/* Notebook Page Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
            PAGE {currentPageIndex + 1} OF {pages.length}
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => setCurrentPageIndex(prev => Math.max(0, prev - 1))}
              disabled={currentPageIndex === 0}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                padding: '4px 8px',
                cursor: currentPageIndex === 0 ? 'not-allowed' : 'pointer',
                opacity: currentPageIndex === 0 ? 0.5 : 1
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentPageIndex(prev => Math.min(pages.length - 1, prev + 1))}
              disabled={currentPageIndex === pages.length - 1}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                padding: '4px 8px',
                cursor: currentPageIndex === pages.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentPageIndex === pages.length - 1 ? 0.5 : 1
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Digital Notebook Spine Layout */}
      <div style={{
        position: 'relative',
        backgroundColor: '#FFFDF9',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06), inset 25px 0 0 #F1F5F9',
        minHeight: '340px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Notebook Spiral Pins */}
        <div style={{
          position: 'absolute',
          left: '10px',
          top: '20px',
          bottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#CBD5E1', border: '2px solid #94A3B8' }} />
          ))}
        </div>

        {/* Notebook Page Animation Content */}
        <AnimatePresence mode="wait">
          {activePage && (
            <motion.div
              key={currentPageIndex}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: 'left center', marginLeft: '20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  color: '#2563EB',
                  fontWeight: 700,
                  fontSize: '13px',
                  padding: '4px 12px',
                  borderRadius: '99px'
                }}>
                  <GraduationCap size={16} /> {activePage.institution}
                </span>

                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                  <Calendar size={14} color="#F97316" /> {activePage.year}
                </span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                {activePage.degree}
              </h2>

              <p style={{ fontSize: '14px', color: '#F97316', fontWeight: 700, marginBottom: '16px' }}>
                Specialization: {activePage.specialization} (GPA / Honors: {activePage.gpa})
              </p>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '10px' }}>
                  MAJOR LEARNING AREAS & CORE CURRICULUM
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {activePage.keyLearnings.map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: '#334155'
                    }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
