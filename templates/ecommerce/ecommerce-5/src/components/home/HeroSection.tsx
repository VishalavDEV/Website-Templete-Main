import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'var(--header-height)',
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="container-custom"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
          paddingTop: '40px',
          paddingBottom: '60px',
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* LEFT 45% Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              gridColumn: 'span 12',
              zIndex: 2,
            }}
            className="hero-left-col"
          >
            <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                fontSize: '11px',
                letterSpacing: '0.18em',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: 'var(--accent-bronze)' }}>01 / NEW SEASON</span>
              <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-dark)' }}></span>
              <span>AUTUMN / WINTER 2026</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(48px, 6vw, 92px)',
                lineHeight: '0.98',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '32px',
                textTransform: 'uppercase',
              }}
            >
              A QUIETER<br />
              KIND OF<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-bronze-dark)' }}>LUXURY.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                color: 'var(--text-secondary)',
                maxWidth: '420px',
                lineHeight: '1.6',
                marginBottom: '40px',
              }}
            >
              Modern tailoring. Natural textures. Considered silhouettes. Created for individuals who appreciate silent sophistication.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/women" className="btn-aurel-primary" data-cursor="→">
                SHOP WOMEN <ArrowRight size={15} className="btn-arrow" />
              </Link>

              <Link to="/men" className="btn-aurel-outline" data-cursor="→">
                EXPLORE MEN
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT 55% Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              y: yParallax,
            }}
            className="hero-right-col"
          >
            <div
              data-cursor="VIEW"
              className="hero-image-container"
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 5',
                maxHeight: '75vh',
                overflow: 'hidden',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
                alt="AUREL Autumn Winter Campaign"
                className="hero-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'rgba(243, 240, 234, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 20px',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                }}
              >
                CAMPAIGN NO. 04 — AW26
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-image-container:hover .hero-img {
          transform: scale(1.025) !important;
        }

        .btn-aurel-primary:hover .btn-arrow,
        .btn-aurel-outline:hover .btn-arrow {
          transform: translateX(6px);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        @media (min-width: 1024px) {
          .hero-left-col {
            grid-column: span 5 !important;
          }
          .hero-right-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
};
