import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Compass, Calendar, Building2, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function JourneyApp({ journeyData }) {
  const [activeNode, setActiveNode] = useState(journeyData ? journeyData[3] || journeyData[0] : null);

  const routeNodes = journeyData || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Map Header */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        padding: '14px 18px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Navigation size={20} color="#F97316" />
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
              INTERACTIVE CAREER ROUTE MAP
            </h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Follow the glowing trajectory to explore pivotal career waypoints.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--royal-blue)', fontWeight: 700 }}>
          <Compass size={16} /> GPS TELEMETRY ACTIVE
        </div>
      </div>

      {/* Stylized Interactive Map Canvas */}
      <div style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '30px 20px',
        minHeight: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX: 'auto'
      }}>
        {/* Connecting Glowing Route Line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50px',
          right: '50px',
          height: '4px',
          background: 'linear-gradient(90deg, #2563EB 0%, #F97316 50%, #10B981 100%)',
          transform: 'translateY(-50%)',
          zIndex: 1,
          borderRadius: '99px',
          boxShadow: '0 0 12px rgba(37, 99, 235, 0.5)'
        }} />

        {/* Route Waypoints */}
        {routeNodes.map((nodeItem, idx) => {
          const isSelected = activeNode && activeNode.id === nodeItem.id;
          return (
            <motion.div
              key={nodeItem.id}
              onClick={() => setActiveNode(nodeItem)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                minWidth: '80px'
              }}
            >
              {/* Waypoint Marker Circle */}
              <div style={{
                width: isSelected ? '44px' : '34px',
                height: isSelected ? '44px' : '34px',
                borderRadius: '50%',
                backgroundColor: isSelected ? '#F97316' : '#2563EB',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isSelected ? '0 0 20px rgba(249, 115, 22, 0.8)' : '0 4px 12px rgba(37, 99, 235, 0.4)',
                border: '3px solid var(--bg-surface)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <MapPin size={isSelected ? 22 : 16} />
              </div>

              {/* Waypoint Label */}
              <span style={{
                marginTop: '10px',
                fontSize: '11px',
                fontWeight: isSelected ? 800 : 600,
                color: isSelected ? 'var(--accent-secondary)' : 'var(--text-main)',
                textAlign: 'center',
                letterSpacing: '0.5px'
              }}>
                📍 {nodeItem.node}
              </span>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                {nodeItem.year}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Location Card */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="glass-card"
            style={{ padding: '24px', position: 'relative' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                color: '#F97316',
                fontWeight: 800,
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: '99px'
              }}>
                📍 WAYPOINT: {activeNode.node}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} color="#2563EB" /> {activeNode.year}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Building2 size={14} color="#F97316" /> {activeNode.location}
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              {activeNode.title}
            </h3>

            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {activeNode.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
