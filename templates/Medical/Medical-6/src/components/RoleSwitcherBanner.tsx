import React from 'react';
import type { UserRole } from '../types';
import { User, Stethoscope, ShieldCheck, Eye } from 'lucide-react';

interface RoleSwitcherBannerProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const RoleSwitcherBanner: React.FC<RoleSwitcherBannerProps> = ({ currentRole, onRoleChange }) => {
  const roles: { role: UserRole; label: string; icon: React.ReactNode; color: string }[] = [
    { role: 'guest', label: 'Public Visitor', icon: <Eye size={14} />, color: 'bg-slate-700' },
    { role: 'patient', label: 'Patient View (Madhu)', icon: <User size={14} />, color: 'bg-teal-600' },
    { role: 'doctor', label: 'Doctor Workspace (Dr. Priya)', icon: <Stethoscope size={14} />, color: 'bg-blue-600' },
    { role: 'admin', label: 'Admin Portal', icon: <ShieldCheck size={14} />, color: 'bg-purple-600' }
  ];

  return (
    <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.5rem 1rem', fontSize: '0.82rem', borderBottom: '1px solid #1e293b' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ background: '#0d9488', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' }}>
            Interactive Demo
          </span>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>Active Role Perspective:</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          {roles.map(r => {
            const isActive = currentRole === r.role;
            return (
              <button
                key={r.role}
                onClick={() => onRoleChange(r.role)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.78rem',
                  background: isActive ? '#0d9488' : 'rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  border: isActive ? '1px solid #14b8a6' : '1px solid transparent',
                  transition: 'all 0.15s ease'
                }}
              >
                {r.icon}
                {r.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
