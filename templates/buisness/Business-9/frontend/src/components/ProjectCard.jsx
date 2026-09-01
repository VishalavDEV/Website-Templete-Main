import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  const { title, category, description, imageUrl, technologies } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer'
      }}
      className="project-card"
      onClick={() => onClick && onClick(project)}
      whileHover={{ y: -8, boxShadow: 'var(--glass-shadow-hover)' }}
    >
      {/* Image Wrap */}
      <div style={{
        position: 'relative',
        height: '240px',
        overflow: 'hidden'
      }}>
        {/* Hover zoom image */}
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          className="project-image"
        />

        {/* Dark overlay with link icon */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(26, 22, 19, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} className="image-overlay">
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--primary-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)'
          }}>
            <ExternalLink size={20} />
          </div>
        </div>

        {/* Floating category badge */}
        <span style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          color: 'var(--text-primary)',
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {category}
        </span>
      </div>

      {/* Info Wrap */}
      <div style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '0.6rem',
          fontFamily: 'var(--font-title)'
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '1.5rem',
          flexGrow: 1
        }}>
          {description}
        </p>

        {/* Tech tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginTop: 'auto'
        }}>
          {technologies && technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                background: 'rgba(249, 115, 22, 0.05)',
                border: '1px solid rgba(249, 115, 22, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-image {
          transform: scale(1.08);
        }
        .project-card:hover .image-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
}
