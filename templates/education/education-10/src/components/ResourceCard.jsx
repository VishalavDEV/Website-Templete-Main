import { motion } from 'framer-motion';
import { BookOpen, FileText, Play, ClipboardList, Map, Briefcase, NotebookPen, Download } from 'lucide-react';

const iconMap = { BookOpen, FileText, Play, ClipboardList, Map, Briefcase, NotebookPen };

const typeBadgeColors = {
  'E-Book': '#6366f1',
  'Cheat Sheet': '#06b6d4',
  'Study Notes': '#8b5cf6',
  'Tutorial': '#ec4899',
  'Practice Questions': '#f97316',
  'Learning Guide': '#f59e0b',
  'Career Resources': '#10b981',
};

export default function ResourceCard({ resource }) {
  const { title, description, type, icon, color, downloads } = resource;
  const Icon = iconMap[icon] || BookOpen;

  return (
    <motion.div
      className="resource-card"
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="resource-icon"
        style={{ background: `${color}18` }}
        aria-hidden="true"
      >
        <Icon size={24} color={color} />
      </div>
      <span
        className="badge"
        style={{ background: `${typeBadgeColors[type] || color}18`, color: typeBadgeColors[type] || color, marginBottom: 'var(--space-sm)', fontSize: '0.72rem' }}
      >
        {type}
      </span>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1, marginBottom: 'var(--space-lg)' }}>
        {description}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <Download size={13} /> {downloads} downloads
        </span>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {}}
          aria-label={`Explore resource: ${title}`}
        >
          Explore
        </button>
      </div>
    </motion.div>
  );
}
