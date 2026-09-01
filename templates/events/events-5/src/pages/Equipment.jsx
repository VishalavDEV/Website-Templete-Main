import React from 'react';
import { equipmentList } from '../data/equipmentData';
import EquipmentCard from '../components/EquipmentCard';
import { Wrench, ShieldCheck, Sparkles } from 'lucide-react';

export const Equipment = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Wrench size={14} /> WORKSHOP INFRASTRUCTURE
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            PROFESSIONAL TOOLS. PROFESSIONAL RESULTS.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Inspect the high-pressure pumps, dual-action orbital polishers, dry steam sanitizers, and HVLP spray guns that power our auto spa studio.
          </p>
        </div>
      </section>

      {/* Equipment Cards Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {equipmentList.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
