import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShoppingByIntent: React.FC = () => {
  const { navigate } = useShop();

  const intents = [
    {
      title: 'UPGRADE YOUR TECH',
      text: 'Flagship 5G phones, noise-cancelling audio & OLED laptops.',
      route: '/electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'REFRESH YOUR WARDROBE',
      text: 'Italian leather footwear, wool coats & luxury tote bags.',
      route: '/fashion',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'MAKE HOME BETTER',
      text: 'Modern lounge chairs, ceramic lamps & espresso machines.',
      route: '/home',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'GET FIT',
      text: 'Carbon plate running shoes, eco yoga mats & dumbbells.',
      route: '/sports',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'TRAVEL SMARTER',
      text: 'Hard shell polycarbonate luggage & travel organizers.',
      route: '/travel',
      image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'EVERYDAY ESSENTIALS',
      text: 'Japanese matcha, wildflower honey & organic pantry.',
      route: '/grocery',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="container">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
          SHOPPING BY INTENT
        </span>
        <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>SHOP FOR WHAT'S NEXT</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {intents.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            onClick={() => navigate(item.route)}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              display: 'flex',
              gap: '1.25rem',
              padding: '1.25rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '90px',
                height: '90px',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.25rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.text}
              </p>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                EXPLORE <ArrowRight size={12} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
