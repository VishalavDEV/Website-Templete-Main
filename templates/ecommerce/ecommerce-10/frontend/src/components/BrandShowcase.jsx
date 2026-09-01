import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BrandShowcase = () => {
  const brands = [
    { name: 'LuxeWeave', tag: 'Luxury Knits & Silk' },
    { name: 'AuraSport', tag: 'Premium Performance' },
    { name: 'Veloce', tag: 'Urban Techwear' },
    { name: 'AeroSoft', tag: 'Orthopedic Footwear' },
    { name: 'UrbanChic', tag: 'Casual Smart Essentials' },
    { name: 'LunaCraft', tag: 'Premium Leather Goods' },
    { name: 'ChronoLux', tag: 'Fine Quartz Watches' },
    { name: 'MeadowGlow', tag: 'Organic Cotton Prints' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
      {brands.map((brand, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          whileHover={{ y: -8 }}
          style={{
            padding: '30px 20px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(124, 92, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(124, 92, 255, 0.03)',
            transition: 'border-color 0.3s, box-shadow 0.3s, background-color 0.3s',
          }}
          className="brand-card"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7c5cff', marginBottom: '8px' }}>
            <Sparkles size={16} />
          </div>
          <h4
            style={{
              fontFamily: 'Outfit',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1e133e',
              letterSpacing: '0.05em',
            }}
          >
            {brand.name}
          </h4>
          <span style={{ fontSize: '0.75rem', color: '#8a7db3', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {brand.tag}
          </span>
        </motion.div>
      ))}

      <style>{`
        .brand-card:hover {
          border-color: rgba(124, 92, 255, 0.3) !important;
          box-shadow: 0 15px 35px rgba(124, 92, 255, 0.08) !important;
          background-color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default BrandShowcase;
