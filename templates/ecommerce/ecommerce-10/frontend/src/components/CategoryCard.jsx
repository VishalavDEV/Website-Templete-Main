import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CategoryCard = ({ title, image, path, delay = 0 }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(path)}
      style={{
        position: 'relative',
        height: '350px',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(124, 92, 255, 0.05)',
        border: '1px solid rgba(124, 92, 255, 0.1)',
        backgroundColor: '#fff',
      }}
      className="glass-card"
    >
      {/* Category Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="cat-card-img"
      />

      {/* Glass gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(30, 19, 62, 0.85) 0%, rgba(30, 19, 62, 0.2) 60%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          transition: 'background 0.3s',
        }}
        className="cat-card-overlay"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#ffcbc1', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Collection
            </span>
            <h3
              style={{
                fontFamily: 'Outfit',
                fontSize: '1.5rem',
                color: '#fff',
                marginTop: '4px',
                transition: 'transform 0.3s',
              }}
              className="cat-card-title"
            >
              {title}
            </h3>
          </div>

          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
            }}
            className="cat-card-arrow"
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <style>{`
        .glass-card:hover .cat-card-img {
          transform: scale(1.08);
        }
        .glass-card:hover .cat-card-overlay {
          background: linear-gradient(to top, rgba(124, 92, 255, 0.9) 0%, rgba(30, 19, 62, 0.3) 70%, transparent 100%);
        }
        .glass-card:hover .cat-card-arrow {
          background-color: #fff;
          color: #7c5cff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
          transform: rotate(45deg);
        }
        .glass-card:hover .cat-card-title {
          transform: translateY(-4px);
        }
      `}</style>
    </motion.div>
  );
};

export default CategoryCard;
