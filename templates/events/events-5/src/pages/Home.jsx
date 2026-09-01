import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import TrustStats from '../components/TrustStats';
import ServicesSection from '../components/ServicesSection';
import BeforeAfter from '../components/BeforeAfter';
import PricingCard from '../components/PricingCard';
import { pricingPackages } from '../data/pricingData';
import CarVisualizer from '../components/CarVisualizer';
import BrandCarousel from '../components/BrandCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import ProcessTimeline from '../components/ProcessTimeline';
import VideoShowcase from '../components/VideoShowcase';
import EquipmentCard from '../components/EquipmentCard';
import { equipmentList } from '../data/equipmentData';
import ContactForm from '../components/ContactForm';
import { ShieldCheck, Award, Wrench, Shield, DollarSign, UserCheck, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export const Home = () => {
  const whyChooseUs = [
    { title: "PROFESSIONAL TEAM", desc: "Certified detailing specialists trained on exotic paint systems & high-pressure foam cannons.", icon: UserCheck },
    { title: "PREMIUM PRODUCTS", desc: "pH-neutral soaps, 9H nano-ceramics, and imported Carnauba waxes.", icon: Award },
    { title: "MODERN EQUIPMENT", desc: "2000 PSI wash pumps, dual-action polishers & 170°C dry steam extraction.", icon: Wrench },
    { title: "SAFE METHODS", desc: "Two-bucket grit guard method eliminating micro-swirls and clearcoat scratches.", icon: ShieldCheck },
    { title: "TRANSPARENT PRICING", desc: "Zero hidden charges. Clear tier pricing for basic wash to full body repaints.", icon: DollarSign },
    { title: "CUSTOMER FIRST", desc: "Dedicated auto concierge service, progress updates & 100% satisfaction guarantee.", icon: Shield }
  ];

  return (
    <div style={{ background: '#07090b' }}>
      {/* 1. HOME SECTION */}
      <section id="home">
        <HeroVideo />
        <TrustStats />
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" style={{ padding: '90px 0', background: '#0a0d10' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">WE DON'T JUST WASH CARS</span>
            <h2 className="section-title">WE RESTORE THE WAY THEY FEEL.</h2>
            <p className="section-subtitle">
              AQUAVEXA AUTO SPA is a fictional premium automotive care studio focused on washing, detailing, paint restoration and vehicle transformation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}>
            {whyChooseUs.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(124, 255, 79, 0.1)',
                    border: '1px solid #7cff4f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    color: '#7cff4f'
                  }}>
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', color: '#f5f7f8', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: '#b9c0c5', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services">
        <ServicesSection limit={6} />
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" style={{ padding: '90px 0', background: '#0a0d10' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">TRANSPARENT PACKAGES</span>
            <h2 className="section-title">CHOOSE YOUR LEVEL OF CARE.</h2>
            <p className="section-subtitle">
              From quick foam maintenance to ultimate ceramic signature restoration.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}>
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAINT STUDIO SECTION */}
      <section id="paint" style={{ padding: '90px 0', background: '#07090b' }}>
        <div className="container">
          <CarVisualizer />
        </div>
      </section>

      {/* 6. EQUIPMENT SECTION */}
      <section id="equipment" style={{ padding: '90px 0', background: '#0a0d10' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">WORKSHOP EQUIPMENT</span>
            <h2 className="section-title">PROFESSIONAL TOOLS. PROFESSIONAL RESULTS.</h2>
            <p className="section-subtitle">
              Industrial grade pressure washers, snow foam cannons, and dual-action polishers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {equipmentList.slice(0, 3).map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/equipment" className="btn-secondary">
              VIEW ALL EQUIPMENT <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CAR BRANDS SECTION */}
      <section id="cars">
        <BrandCarousel />
      </section>

      {/* 8. GALLERY / BEFORE & AFTER SECTION */}
      <section id="gallery">
        <BeforeAfter />
        <VideoShowcase />
        <TestimonialSlider />
      </section>

      {/* 9. OFFERS PROMO SECTION */}
      <section id="offers" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #111417 0%, #1b2024 100%)',
        borderTop: '1px solid rgba(124, 255, 79, 0.3)',
        borderBottom: '1px solid rgba(124, 255, 79, 0.3)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} /> LIMITED TIME PROMOTION
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            GET 15% OFF YOUR FIRST DETAILING SERVICE
          </h2>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', marginBottom: '32px' }}>
            Experience the AQUAVEXA difference today. Reserve your appointment slot online in less than 2 minutes.
          </p>
          <Link to="/booking" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
            BOOK YOUR SERVICE NOW <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" style={{ padding: '90px 0', background: '#07090b' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">STUDIO LOCATION & INQUIRIES</span>
            <h2 className="section-title">CONNECT WITH AQUAVEXA</h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
