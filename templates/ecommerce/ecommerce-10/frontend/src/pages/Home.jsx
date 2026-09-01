import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

// Components
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import ProductCarousel from '../components/ProductCarousel';
import BrandShowcase from '../components/BrandShowcase';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Newsletter from '../components/Newsletter';
import QuickViewModal from '../components/QuickViewModal';

const Home = () => {
  const { products } = useContext(EcomContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const navigate = useNavigate();

  // Get filtered lists
  const trendingProducts = products.filter((p) => p.trending);
  const newArrivals = products.filter((p) => p.newArrival);

  // Category Cards Data
  const categoriesList = [
    { title: 'Ladies Wear', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80', path: '/women' },
    { title: 'Gents Wear', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=80', path: '/men' },
    { title: 'Girls Fashion', image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500&auto=format&fit=crop&q=80', path: '/girls' },
    { title: 'Boys Style', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&auto=format&fit=crop&q=80', path: '/boys' },
    { title: 'Babies Outfits', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&auto=format&fit=crop&q=80', path: '/babies' },
    { title: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80', path: '/footwear' },
  ];

  return (
    <div style={{ backgroundColor: '#faf8ff', minHeight: '100vh' }}>
      
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Category Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
            Shop By Department
          </h2>
          <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '4px' }}>
            Find your custom lavender fit across all collections
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {categoriesList.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              image={cat.image}
              path={cat.path}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </section>

      {/* 3. Trending Products Carousel Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
              Trending Now
            </h2>
            <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '4px' }}>
              Most loved pieces this week
            </p>
          </div>
          <button
            onClick={() => navigate('/trending')}
            style={{
              background: 'none',
              border: 'none',
              color: '#7c5cff',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        <ProductCarousel
          products={trendingProducts}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </section>

      {/* 4. Editorial Collections Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }} className="editorial-grid">
          
          {/* Card 1: Summer Collection */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '420px',
              boxShadow: '0 15px 35px rgba(124, 92, 255, 0.06)',
            }}
            className="editorial-card"
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
              alt="Summer Collection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              className="ed-img"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(19, 14, 38, 0.8) 0%, rgba(19, 14, 38, 0.2) 60%, transparent 100%)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#fff',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#ffcbc1', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                Seasonal Drops
              </span>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', marginTop: '6px', fontWeight: 800 }}>
                SUMMER COLLECTION
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#eae3ff', marginTop: '8px', lineHeight: '1.4', maxWidth: '280px' }}>
                Breezy organic fabrics woven with refreshing lavender accents.
              </p>
              <button
                onClick={() => navigate('/products?search=summer')}
                className="premium-btn"
                style={{ width: 'fit-content', marginTop: '16px', padding: '10px 20px', fontSize: '0.85rem' }}
              >
                Explore <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Card 2: Street Style */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '420px',
              boxShadow: '0 15px 35px rgba(124, 92, 255, 0.06)',
            }}
            className="editorial-card"
          >
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
              alt="Street Style"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              className="ed-img"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(19, 14, 38, 0.8) 0%, rgba(19, 14, 38, 0.2) 60%, transparent 100%)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#fff',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#ffcbc1', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                Cyber Trends
              </span>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', marginTop: '6px', fontWeight: 800 }}>
                STREET STYLE
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#eae3ff', marginTop: '8px', lineHeight: '1.4', maxWidth: '280px' }}>
                Bold aesthetics, oversized fits, and metallic lilac prints.
              </p>
              <button
                onClick={() => navigate('/products?search=street')}
                className="premium-btn"
                style={{ width: 'fit-content', marginTop: '16px', padding: '10px 20px', fontSize: '0.85rem' }}
              >
                Explore <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. New Arrivals Carousel Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
              New Arrivals
            </h2>
            <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '4px' }}>
              Fresh updates from our atelier
            </p>
          </div>
          <button
            onClick={() => navigate('/new-arrivals')}
            style={{
              background: 'none',
              border: 'none',
              color: '#7c5cff',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        <ProductCarousel
          products={newArrivals}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </section>

      {/* 6. Brand Showcase */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
            Featured Fashion Partners
          </h2>
          <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '4px' }}>
            Luxury brands supporting the Lavender platform
          </p>
        </div>
        <BrandShowcase />
      </section>

      {/* 7. Testimonial Reviews Section */}
      <section style={{ padding: '80px 40px', backgroundColor: '#faf8ff' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
            Loved by Customers
          </h2>
          <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '4px' }}>
            What the fashion community says about us
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* 8. Newsletter Section */}
      <section style={{ padding: '80px 40px' }}>
        <Newsletter />
      </section>

      {/* Dynamic Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <style>{`
        .editorial-card:hover .ed-img {
          transform: scale(1.06);
        }
        @media (max-width: 768px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
