import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function TeamCard({ member }) {
  const { name, role, bio, imageUrl, socialLinks } = member;

  const socialIconsMap = {
    linkedin: <Linkedin size={16} />,
    twitter: <Twitter size={16} />,
    github: <Github size={16} />,
    dribbble: <Globe size={16} />
  };

  const cardVariants = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.08,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    rest: { opacity: 0, y: 15 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.05 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="glass-card"
      style={{
        padding: '1.5rem',
        borderRadius: 'var(--border-radius-lg)',
        background: 'rgba(255, 255, 255, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Image Wrap */}
      <div style={{
        width: '130px',
        height: '130px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '1.25rem',
        border: '3px solid var(--secondary)',
        boxShadow: '0 4px 15px rgba(249, 115, 22, 0.1)',
        position: 'relative'
      }}>
        <motion.img
          src={imageUrl}
          alt={name}
          variants={imageVariants}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Info */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '0.25rem',
        fontFamily: 'var(--font-title)'
      }}>
        {name}
      </h3>
      
      <span style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--primary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '1rem',
        display: 'inline-block'
      }}>
        {role}
      </span>

      <p style={{
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
        marginBottom: '1.5rem'
      }}>
        {bio}
      </p>

      {/* Hover-reveal Social Icons */}
      <motion.div
        variants={overlayVariants}
        style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          marginTop: 'auto'
        }}
      >
        {socialLinks && Object.entries(socialLinks).map(([platform, url]) => (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--secondary)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.15, backgroundColor: 'var(--primary)', color: '#FFF' }}
            whileTap={{ scale: 0.95 }}
          >
            {socialIconsMap[platform] || <Globe size={16} />}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
